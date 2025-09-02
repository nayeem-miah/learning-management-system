import { Types } from "mongoose";

export interface ICourse {
    _id: Types.ObjectId;
    thumbnail: string;
    title: string;
    price: number;
    description: string;
}