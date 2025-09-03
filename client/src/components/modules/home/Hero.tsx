import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



const Hero = ({
    badge = "",
    heading = "Learning with Zero to hero",
    description = "this is learning management system website",
    buttons = {
        primary: {
            text: "Start now",
            url: "/course",
        },
        secondary: {
            text: "about",
            url: "",
        },
    },
    image = {
        src: "https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.jpg?s=1024x1024&w=is&k=20&c=wcaAuEUMIScsLWVfI8bnuFx5zMSA7XzUs8Hcl07YFbo=",
        alt: "Hero section demo image showing interface components",
    },
}) => {
    return (
        <section className="">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <Badge variant="outline">
                                {badge}
                                <ArrowUpRight className="ml-2 size-4" />
                            </Badge>
                        )}
                        <h1 className="my-6 text-pretty text-3xl font-bold lg:text-6xl">
                            {heading}
                        </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                            {description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href={buttons.secondary.url}>
                                        {buttons.secondary.text}
                                        <ArrowRight className="size-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-96 w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero
