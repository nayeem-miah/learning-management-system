"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { SelectTrigger } from '@radix-ui/react-select';
import { useForm } from 'react-hook-form';

const moduleOptions = [
    {
        value: "dfdf56565",
        label: "react "
    },
    {
        value: "65756yjytu78",
        label: "react -2"
    }
]


export default function AddLectureForm() {

    const form = useForm();
    const onSubmit = async (data: any) => {
        console.log(data);
        try {

        } catch (error) {
            console.log(error)

        }
    }
    return (
        <div className='max-w-4xl mx-auto'>
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle>Add New Lecture</CardTitle>
                    <CardDescription>Add a new lecture to the system</CardDescription>
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
                                name="module"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>module</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        // disabled={divisionLoading}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full border">
                                                    <SelectValue placeholder="Select a course" />

                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {moduleOptions?.map(
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
                                        <FormLabel>lecture Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='text' placeholder='enter your module title' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="videoUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>videoUrl</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='text' placeholder='enter your videoUrl' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pdfNotes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>pdfNotes</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='text' placeholder='enter your pdfNotes' />
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
                        Create lecture
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
