import { model, Schema } from "mongoose";
import { IIncrementModuleName, IModule } from "./module.interface";

const incrementModuleSchema = new Schema<IIncrementModuleName>({
    name: { type: String, required: true, unique: true },
    seq: { type: Number, default: 0 }
})

export const IncrementModule = model<IIncrementModuleName>("IncrementModule", incrementModuleSchema);


const moduleSchema = new Schema<IModule>({
    course: {
        type: Schema.Types.ObjectId,
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

},
    { timestamps: true, versionKey: false }
);


moduleSchema.pre("save", async function (next) {
    if (!this.isNew) return next();

    const counter = await IncrementModule.findOneAndUpdate(
        { name: "module" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );

    this.moduleNumber = counter.seq;
    next();
});


export const Module = model<IModule>("Module", moduleSchema);