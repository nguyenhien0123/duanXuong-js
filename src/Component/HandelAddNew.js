import axios from "axios";
import api from "../apis";

const HandelSubmitAdd = () => {
  const form = document.querySelector("#form-add");
  const title = document.querySelector("#name");
  const price = document.querySelector("#price");
  const description = document.querySelector("#desc");
  const thumbnail = document.querySelector("#image");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const urls = await uploadFiles(thumbnail.files);
    await HandelAddNew(urls);
  });
  const HandelAddNew = async (urls) => {
    if (urls.length > 0) {
      const newProduct = {
        title: title.value,
        price: price.value,
        description: description.value,
        gallery: urls,
      };

      try {
        await api.post("/products", newProduct);
        Swal.fire({
          title: "Thành công",
          text: "Cập nhật thành công",
          icon: "success",
          confirmButtonText: "Đóng",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/admin";
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
};

export const uploadFiles = async (files) => {
  if (files) {
    const CLOUD_NAME = "dpc58j5gw";
    const PRESET_NAME = "o7r6zdkj";
    const FORDER_NAME = "JS_Xuong";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FORDER_NAME);
    for (const file of files) {
      formData.append("file", file);
      try {
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.url);
      } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
      }
    }
    return urls;
  }
};

export default HandelSubmitAdd;
