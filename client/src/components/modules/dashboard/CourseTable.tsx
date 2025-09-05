/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import axiosInstance from "@/components/utils/axiosInstance"
import { GetCourses } from "@/components/utils/getCourse"
import { Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Course {
    _id: string
    title: string
    price: number
}

export function CourseTable() {
    const [courses, setCourses] = useState<Course[]>([])

    useEffect(() => {
        const fetchCourse = async () => {
            const data = await GetCourses()
            setCourses(data || [])
        }
        fetchCourse()
    }, [])

    const handleDelete = async (id: string) => {
        try {
            const res = await axiosInstance.delete(`/course/delete/${id}`)
            if (res.data.success) {
                toast.success(res.data.message)
                const remainingData = courses.filter(course => course._id !== id)
                setCourses(remainingData);
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.message)
        }
    };

    if (courses.length === 0) return <div>No course found <Link className="underline text-rose-500" href={"/dashboard/add-course"}>please add Course</Link></div>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Delete</TableHead>
                    <TableHead>Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {courses.map((course) => (
                    <TableRow key={course._id}>
                        <TableCell>{course.title}</TableCell>
                        <TableCell>{course.price}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleDelete(course._id)}>
                                <Trash2 size={10} />
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Link href={`/dashboard/edit-course/${course._id}`}>
                                <Edit2 size={12} />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
