const mongoose = require("mongoose");

const motoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    imgUrl: { type: String },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true }
}, {
    timestamps: true,
    collection: "moto"
});
const Moto = mongoose.model("moto", motoSchema, "moto");
module.exports = Moto;