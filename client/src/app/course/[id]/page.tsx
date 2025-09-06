/* eslint-disable @next/next/no-img-element */
// app/course/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GetCourses } from "@/components/utils/getCourse";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CourseType = {
    _id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
};

export default function CourseDetails() {
    const { id } = useParams();
    const [course, setCourse] = useState<CourseType | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            const data = await GetCourses();
            const selectedCourse = data.find((c: CourseType) => c._id === id);
            setCourse(selectedCourse);
        };
        fetchCourse();
    }, [id]);

    if (!course) {
        return <p className="p-6 text-gray-500">Loading course details...</p>;
    }





    return (
        <div className="p-6 flex justify-center">
            <Card className="w-full max-w-2xl shadow-xl rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{course.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <img
                        src={course.thumbnail || "/placeholder.jpg"}
                        alt={course.title}
                        className="rounded-lg object-cover w-full h-64 mb-6"
                    />
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <p className="font-semibold text-primary text-lg mb-2">
                        Price: ${course.price}
                    </p>
                    <p className="text-xs text-gray-400 mb-6">
                        Last updated: {new Date(course.updatedAt).toLocaleDateString()}
                    </p>

                    <Link href={`/module/${course._id}`}>
                        <Button className="w-full">Continue Module</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
