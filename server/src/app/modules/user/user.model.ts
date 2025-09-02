import { model, Schema } from "mongoose";
import { IUser, Role } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        min: [3, "name must be minimum 3 character"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        min: [6, "password must be minimum 6 character"]
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
    imageUrl: String
}, {
    timestamps: true
});


export const User = model<IUser>("User", userSchema);