"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = exports.IncrementModule = void 0;
const mongoose_1 = require("mongoose");
const incrementModuleSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    seq: { type: Number, default: 0 }
});
exports.IncrementModule = (0, mongoose_1.model)("IncrementModule", incrementModuleSchema);
const moduleSchema = new mongoose_1.Schema({
    course: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    moduleNumber: {
        type: Number,
    },
}, { timestamps: true, versionKey: false });
moduleSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isNew)
            return next();
        const counter = yield exports.IncrementModule.findOneAndUpdate({ name: "module" }, { $inc: { seq: 1 } }, { new: true, upsert: true });
        this.moduleNumber = counter.seq;
        next();
    });
});
exports.Module = (0, mongoose_1.model)("Module", moduleSchema);
