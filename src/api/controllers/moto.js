const Moto = require("../models/moto");

const getAllMotos = async(req, res, next) => {
    try {
        const allMotos = await Moto.find();
        return res.status(200).json(allMotos);
    } catch (error) {
        return res.status(400).json("Error");
    }
}

const getMotoById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const motoById = await Moto.findById(id);
        return res.status(200).json(motoById);
    } catch (error) {
        return res.status(400).json("Error");
    }
}

const postMoto = async(req, res, next) => {
    try {
        const newMoto = new Moto(req.body);
        const saveMoto = await newMoto.save();
        return res.status(200).json(saveMoto);

    } catch (error) {
        return res.status(400).json("Error");
    }
}

const updateMoto = async(req, res, next) => {
    try {
        const { id } = req.params;
        const updateMoto = new Moto(req.body);
        updateMoto._id = id;
        const update = await Moto.findByIdAndUpdate(id, updateMoto, { new: true });
        return res.status(200).json(update);
    } catch (error) {
        return res.status(400).json("Error");
    }
}

const deleteMotoById = async(req, res, next) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const deleteMoto = await Moto.findByIdAndDelete(id);
        return res.status(200).json(deleteMoto);
    } catch (error) {
        return res.status(400).json("Error");
    }
}

module.exports = {
    getAllMotos,
    getMotoById,
    updateMoto,
    postMoto,
    deleteMotoById
}