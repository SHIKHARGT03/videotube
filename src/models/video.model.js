import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: [true, "Video file is required"],
        },
        thumbnail: {
            type: String,
            required: [true, "Thumbnail is required"],
        },
        title: {
            type: String, 
            required: [true, "Title is required"],
            trim: true,
            maxLength: [100, "Title cannot be more than 100 characters"]
        },
        description: {
            type: String, 
            required: [true, "Description is required"],
            trim: true,
            maxLength: [5000, "Description cannot be more than 5000 characters"]
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0,
            min: [0, "Views cannot be negative"]
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Video owner is required"]
        }
    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)