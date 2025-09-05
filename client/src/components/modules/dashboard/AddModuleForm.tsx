"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { SelectTrigger } from '@radix-ui/react-select';
import { useForm } from 'react-hook-form';

const courseOptions = [
    {
        value: "6587jtjhtug",
        label: "Web development"
    },
    {
        value: "6587jdfffd45tjhtug",
        label: "App  development"
    }
]


export default function AddModuleForm() {

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
                    <CardTitle>Add New Module</CardTitle>
                    <CardDescription>Add a new module to the system</CardDescription>
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
                                            defaultValue={field.value}
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
                                            <Input {...field} type='text' placeholder='enter your module title' required />
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
                        Create module
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
