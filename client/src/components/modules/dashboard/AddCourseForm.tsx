"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axiosInstance from '@/components/utils/axiosInstance';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function AddCourseForm() {
    const router = useRouter()

    const form = useForm({
        defaultValues: {
            thumbnail: "",
            title: "",
            price: "",
            description: "",
        }
    });
    const onSubmit = async (data: any) => {
        const toastId = toast.loading("loading....")
        try {
            const res = await axiosInstance.post("/course/create", data);
            if (res.data.success) {
                toast.success(res.data.message, { id: toastId })
                form.reset()
                router.push('/')
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
                    <CardTitle>Add New Course</CardTitle>
                    <CardDescription>Add a new course to the system</CardDescription>
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
                                            <Input {...field} required placeholder='thumbnail' />
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
                                            <Input {...field} required />
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
                                            <Input {...field} type='number' required />
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
                                            <Textarea {...field} className="h-[205px]" />
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
                        Create course
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
