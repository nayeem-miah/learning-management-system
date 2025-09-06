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

    // static instructor info
    const instructor = {
        name: "John Doe",
        bio: "Senior MERN Stack Developer with 8+ years of experience in building scalable web applications.",
        avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    };

    // static student reviews
    const reviews = [
        {
            id: 1,
            user: "Alice",
            rating: 5,
            comment: "Amazing course! I finally understood React properly.",
        },
        {
            id: 2,
            user: "Bob",
            rating: 4,
            comment: "Very informative and well-structured. Could use more exercises.",
        },
        {
            id: 3,
            user: "Charlie",
            rating: 5,
            comment: "The instructor explained everything clearly. Highly recommend!",
        },
    ];

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
        <div className="p-6 flex flex-col items-center space-y-8">
            {/* Course Info */}
            <Card className="w-full max-w-2xl shadow-xl rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
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

            {/* Instructor Info */}
            <Card className="w-full max-w-2xl shadow-md rounded-2xl p-4 flex items-center space-x-4">
                <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full"
                />
                <div>
                    <h3 className="text-lg font-semibold">{instructor.name}</h3>
                    <p className="text-gray-600">{instructor.bio}</p>
                </div>
            </Card>

            {/* Reviews Section */}
            <div className="w-full max-w-2xl space-y-4">
                <h2 className="text-xl font-bold">Student Reviews</h2>
                {reviews.map((review) => (
                    <Card key={review.id} className="p-4 rounded-2xl shadow">
                        <h4 className="font-semibold">{review.user}</h4>
                        <p className="text-yellow-500">⭐ {review.rating}/5</p>
                        <p className="text-gray-600">{review.comment}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
