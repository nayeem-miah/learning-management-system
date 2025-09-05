"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axiosInstance from '@/components/utils/axiosInstance';
import { GetSIngleById } from '@/components/utils/getSingleById';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function EditCourseForm() {
    const { id } = useParams()

    const [course, setCourse] = useState<any>(null);
    const router = useRouter()

    useEffect(() => {
        const fetchCourse = async () => {
            const data = await GetSIngleById(id as string)
            setCourse(data)
        }
        fetchCourse()
    }, [id])
    console.log(course);

    const form = useForm({
        defaultValues: {
            thumbnail: course?.thumbnail,
            title: course?.title,
            price: course?.price,
            description: course?.description,
        }
    });
    const onSubmit = async (data: any) => {
        const toastId = toast.loading("loading....")
        try {
            const res = await axiosInstance.patch(`/course/update/${id}`, data);
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message, { id: toastId })
                form.reset()
                router.push('/dashboard/get-course')
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error.message, { id: toastId })
        }
    }
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Course</CardTitle>
                    <CardDescription>Edit course to the system</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            id="add-course"
                            className="space-y-5"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormField
                                control={form.control}
                                name="thumbnail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>thumbnail</FormLabel>
                                        <FormControl>
                                            <Input {...field} defaultValue={course?.thumbnail} placeholder='thumbnail' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>course Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} defaultValue={course?.title} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>price</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='number' defaultValue={course?.price} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field}
                                                defaultValue={course?.description}
                                                className="h-[205px]" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button type="submit" className='w-full' form="add-course">
                        Edit course
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
