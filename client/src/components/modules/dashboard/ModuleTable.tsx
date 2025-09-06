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
import { GetModules } from "@/components/utils/getModule"
import { Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface Module {
    _id: string
    title: string
}

export function ModuleTable() {
    const [modules, setModules] = useState<Module[]>([])

    useEffect(() => {
        const fetchModule = async () => {
            const data = await GetModules()
            setModules(data || [])
        }
        fetchModule()
    }, [])
    // console.log(modules);
    const handleDelete = async (id: string) => {
        try {
            const res = await axiosInstance.delete(`/module/delete/${id}`)
            if (res.data.success) {
                toast.success(res.data.message)
                const remainingData = modules.filter(module => module._id !== id)
                setModules(remainingData);
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error.message)
        }
    };

    if (modules.length === 0) return <div>No Modules found <Link className="underline text-rose-500" href={"/dashboard/add-module"}>please add module</Link></div>

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
                {modules?.map((module) => (
                    <TableRow key={module._id}>
                        <TableCell>{module.title}</TableCell>
                        <TableCell>
                            <Button onClick={() => handleDelete(module._id)}>
                                <Trash2 size={10} />
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Link href={`/dashboard/edit-module/${module._id}`}>
                                <Edit2 size={12} />
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
