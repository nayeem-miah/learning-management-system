"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetSingleCourseByModule } from "@/components/utils/getSingleCourseByModule";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ModuleType = {
    _id: string;
    title: string;
    moduleNumber: number;
    createdAt: string;
};

export default function Page() {
    const { course } = useParams();
    const [modules, setModules] = useState<ModuleType[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchModule = async () => {
            const res = await GetSingleCourseByModule(course as string);
            console.log(res);
            setModules(res);
        };
        fetchModule();
    }, [course]);

    if (!modules || modules.length === 0) {
        return <div className="p-6 text-gray-500">No module found</div>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-4">
            <h1 className="text-2xl font-bold mb-4">Modules</h1>

            {modules.map((mod) => (
                <Card key={mod._id} className="shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">
                            {mod.moduleNumber}. {mod.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500 mb-4">
                            Created at: {new Date(mod.createdAt).toLocaleDateString()}
                        </p>

                        {/* Continue / Next Module Button */}
                        <Button
                            className="w-full"
                            onClick={() => router.push(`/lecture/${mod._id}`)}
                        >
                            Continue Module
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
