/* eslint-disable @next/next/no-img-element */
"use client"

import { GetCourses } from "@/components/utils/getCourse";
import { useEffect, useState } from "react";
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

export default function Course() {
    const [courses, setCourses] = useState<CourseType[]>([]);

    useEffect(() => {
        const fetchCourse = async () => {
            const data = await GetCourses();
            setCourses(data);
        };
        fetchCourse();
    }, []);
    if (courses.length === 0) return <div>No course found</div>
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {courses?.map((course) => (
                <Card
                    key={course._id}
                    className="shadow-lg rounded-2xl hover:shadow-xl transition"
                >
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                            {course.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-4">
                            <img
                                src={course?.thumbnail || "/placeholder.jpg"}
                                alt={course.title}
                                width={400}
                                height={200}
                                className="rounded-lg object-cover"
                            />
                        </div>

                        <p className="text-gray-600 text-sm mb-3">
                            {course.description}
                        </p>
                        <p className="font-bold text-primary">
                            Price: ${course.price}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            Updated: {new Date(course.updatedAt).toLocaleDateString()}
                        </p>

                        {/* Details Button */}
                        <div className="mt-4">
                            <Link href={`/course/${course._id}`}>
                                <Button className="w-full">View Details</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
