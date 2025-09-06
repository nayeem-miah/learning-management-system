"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetSingleModuleByLecture } from "@/components/utils/getSingleModuleByLecture";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LectureType = {
    _id: string;
    module: string;
    title: string;
    videoUrl: string;
    pdfNotes?: string[];
    lectureNumber: number;
    createdAt: string;
};

export default function Page() {
    const { module } = useParams();
    const [lectures, setLectures] = useState<LectureType[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchLecture = async () => {
            const res = await GetSingleModuleByLecture(module as string);
            setLectures(res);
        };
        fetchLecture();
    }, [module]);

    // console.log(lectures);

    if (!lectures || lectures.length === 0) {
        return <div className="p-6 text-gray-500">No module found</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-4">
            <h1 className="text-2xl font-bold mb-4">lecture</h1>

            {lectures?.map((lec) => (
                <Card key={lec._id} className="shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                            {lec.lectureNumber}. {lec.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500 mb-4">
                            Created at: {new Date(lec.createdAt).toLocaleDateString()}
                        </p>

                        {/* Continue / Next Module Button */}
                        <Button
                            className="w-full"
                            onClick={() => router.push(`/lecture/${lec._id}`)}
                        >
                            Continue lecture
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
