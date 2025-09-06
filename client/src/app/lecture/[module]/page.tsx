"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetSingleModuleByLecture } from "@/components/utils/getSingleModuleByLecture";
import { useParams } from "next/navigation";
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
    const [unlockedIndex, setUnlockedIndex] = useState(0);

    useEffect(() => {
        const fetchLecture = async () => {
            const res = await GetSingleModuleByLecture(module as string);
            setLectures(res);
        };
        fetchLecture();
    }, [module]);

    if (!lectures || lectures.length === 0) {
        return <div className="p-6 text-gray-500">No lecture found</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold mb-4">Lectures</h1>

            {lectures?.map((lec, index) => {
                const isLocked = index > unlockedIndex;

                return (
                    <Card
                        key={lec._id}
                        className={`shadow-lg rounded-2xl ${isLocked ? "opacity-50" : ""}`}
                    >
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">
                                {lec.lectureNumber}. {lec.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-500 mb-4">
                                Created at: {new Date(lec.createdAt).toLocaleDateString()}
                            </p>

                            {!isLocked && (
                                <div
                                    className="w-full mb-4"
                                    dangerouslySetInnerHTML={{ __html: lec.videoUrl }}
                                />
                            )}

                            {/* PDF Notes */}
                            {!isLocked && lec.pdfNotes && lec.pdfNotes.length > 0 && (
                                <div className="mb-4 space-y-2">
                                    <h4 className="font-semibold">Notes:</h4>
                                    {lec.pdfNotes.map((note, i) => (
                                        <a
                                            key={i}
                                            href={note}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                        >
                                            Download Note {i + 1}
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Next Lecture Button */}
                            {!isLocked && index < lectures.length - 1 && (
                                <Button
                                    className="w-full"
                                    onClick={() => setUnlockedIndex(index + 1)}
                                >
                                    Unlock Next Lecture
                                </Button>
                            )}

                            {/* Locked State */}
                            {isLocked && (
                                <p className="text-red-500 text-sm italic">
                                    🔒 Locked — Complete previous lecture to unlock
                                </p>
                            )}
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
