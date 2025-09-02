import { Types } from "mongoose";

export interface IIncrementModuleName {
    name: string,
    seq: number
}


export interface IModule {
    course: Types.ObjectId;
    title: string;
    moduleNumber: number;
}