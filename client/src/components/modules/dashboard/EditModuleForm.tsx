"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axiosInstance from '@/components/utils/axiosInstance';
import { GetCourses } from '@/components/utils/getCourse';
import { GetSingleModule } from '@/components/utils/getSingleModule';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function EditModuleForm() {
    const { id } = useParams()
    const [course, setCourse] = useState<any>(null);
    const [module, setModule] = useState<any>(null);
    const router = useRouter()

    useEffect(() => {
        const fetchModule = async () => {
            const data = await GetSingleModule(id as string)
            setModule(data)
        }
        fetchModule()
    }, [id])



    useEffect(() => {
        const fetchCourse = async () => {
            const data = await GetCourses()
            setCourse(data)
        }
        fetchCourse()
    }, [])


    const courseOptions = course?.map(
        (item: { _id: string; title: string }) => ({
            value: item._id,
            label: item.title,
        })
    );

    const form = useForm({
        defaultValues: {
            course: module?.course,
            title: module?.title,
        }
    });

    const onSubmit = async (data: any) => {

        const toastId = toast.loading("loading....")
        try {
            const res = await axiosInstance.patch(`/module/update/${id}`, data);
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message, { id: toastId })
                form.reset()
                router.push('/dashboard/get-module')
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
                    <CardTitle>Edit module</CardTitle>
                    <CardDescription>Edit module to the system</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            id="add-module"
                            className="space-y-5"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >

                            <FormField
                                control={form.control}
                                name="course"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>course</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={module?.course}
                                        // disabled={divisionLoading}

                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full border">
                                                    <SelectValue placeholder="Select a course" />

                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {courseOptions?.map(
                                                    (item: { label: string; value: string }) => (
                                                        <SelectItem key={item.value} value={item.value}>
                                                            {item.label}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>module Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} defaultValue={module?.title} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button type="submit" className='w-full' form="add-module">
                        Edit module
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
