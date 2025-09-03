"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Password from "./Password"
import Link from "next/link"


const registerSchema = z
    .object({
        name: z.string().min(3, {
            message: "Username must be at least 3 characters.",
        }),
        email: z.email(),
        imageUrl: z.string(),
        password: z.string().min(8, {
            message: "Password is too short minimum 8 character"
        })
    })


export function RegisterForm() {


    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            imageUrl: "",
            password: ""

        }
    });

    // const onSubmit : SubmitHandler<FieldValues>= (data) => {
    //     console.log(data);
    // }
    const onSubmit = async (data: z.infer<typeof registerSchema>) => {

        const userInfo = {
            name: data.name,
            email: data.email,
            imageUrl: data.imageUrl,
            password: data.password
        }

        try {
            console.log(userInfo);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className=" flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">create a new account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to create a new  account
                </p>
            </div>
            <div className="grid gap-6 mt-3">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* username */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username"
                                            {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Image url */}
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image url </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Image url "
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your privet display password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="text-center text-sm">
                            Already have an account?
                            <Link href={"/login"} className="underline underline-offset-4">
                                Login
                            </Link>
                        </div>
                        <Button type="submit" className="w-full">
                            Sign up
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
