"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddCourseForm() {

    const form = useForm();
    const onSubmit = async (data: any) => {
        console.log(data);
        try {

        } catch (error) {
            console.log(error)

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
