import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer"; // for image storage system

const foodRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`); // file name become unique
  },
});

const upload = multer({ storage: storage }); // middleware upload has been created

foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
