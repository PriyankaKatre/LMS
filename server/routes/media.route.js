import { express } from 'express';
import upload from '../utils/multer.js';
import { uploadMedia } from '../utils/cloudinary.js';
import { express } from 'express';

const router = express.Router();

router.route("/").post(upload.single("file"), async (req, res) => {
  try {
    let result = await uploadMedia(req.file.path);
    res.status(200).json({
      success: true,
      message: "File uploaded successfully.",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error uploading file" });
  }
});
export default router;
