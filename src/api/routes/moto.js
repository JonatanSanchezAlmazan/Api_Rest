const { getAllMotos, postMoto, deleteMotoById, getMotoById, updateMoto } = require("../controllers/moto");

const motosRouter = require("express").Router();
motosRouter.get("/", getAllMotos);
motosRouter.get("/:id", getMotoById);
motosRouter.post("/", postMoto);
motosRouter.put("/:id", updateMoto);
motosRouter.delete("/:id", deleteMotoById)
module.exports = motosRouter;