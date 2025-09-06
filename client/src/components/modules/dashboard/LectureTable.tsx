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
import { GetLecture } from "@/components/utils/getLecture"
import { Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Lecture {
    _id: string
    title: string;
    videoUrl: string;
    pdfNotes?: string[];
}

export function LectureTable() {
    const [lectures, setLectures] = useState<Lecture[]>([])

    useEffect(() => {
        const fetchLecture = async () => {
            const data = await GetLecture()
            setLectures(data || [])
        }
        fetchLecture()
    }, [])
    // console.log(lectures);
    const handleDelete = async (id: string) => {
        try {
            const res = await axiosInstance.delete(`/lecture/delete/${id}`)
            if (res.data.success) {
                toast.success(res.data.message)
                const remainingData = lectures.filter(lecture => lecture._id !== id)
                setLectures(remainingData);
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.message)
        }
    };

    if (lectures.length === 0) return <div>No lectures found <Link className="underline text-rose-500" href={"/dashboard/add-lecture"}>please add lecture</Link></div>

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Delete</TableHead>
                    <TableHead>Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {lectures?.map((lecture) => (
                    <TableRow key={lecture._id}>
                        <TableCell>{lecture.title}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleDelete(lecture._id)}>
                                <Trash2 size={10} />
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Link href={`/dashboard/edit-lecture/${lecture._id}`}>
                                <Edit2 size={12} />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
