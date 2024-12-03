import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config()(async function () {
  // Configuration
  cloudinary.config({
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    cloud_name: process.env.cloud_name,
  });
});

export const uploadMedia = async (file) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return uploadResponse;
  } catch (e) {
    console.log(e);
  }
};

export const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (e) {
    console.log(e);
  }
};

export const deleteVedioFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "vedio",
    });
  } catch (e) {
    console.log(e);
  }
};
