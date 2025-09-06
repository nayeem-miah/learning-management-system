"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_interface_1 = require("./user.interface");
const userSchema = new mongoose_1.Schema({
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
        enum: Object.values(user_interface_1.Role),
        default: user_interface_1.Role.USER
    },
    imageUrl: String
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)("User", userSchema);
