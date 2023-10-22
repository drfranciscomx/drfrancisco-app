import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        min: 6
    },
    description: {
        type: String,
        require: true,
        min: 10
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
        require: true,
    },
    deposit: {
        type: Number,
        require: true,
        default: 5000
    },
    isPromo: {
        type: Boolean,
    },
    promoPrice: {
        type: Number,
    },
    published: {
        type: Boolean,
    },
    imageUrls: [{
        type: String
        }
    ],
    rating: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
}, {timestamps: true})

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)
