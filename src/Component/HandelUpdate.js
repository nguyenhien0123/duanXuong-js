import api from "../apis";

let idEdit;
const getIdUrl = () => {
  const pathName = window.location.pathname;
  const match = pathName.match(/\/edit\/(\d+)/);
  if (match) {
    return match[1];
  } else {
    return null;
  }
};
const HandelUpdate = async () => {
  const productId = getIdUrl();
  idEdit = Number(productId);
  if (productId !== null) {
    try {
      const { data } = await api.get(`/products/${productId}`);
      idEdit = productId;
      document.querySelector("#name").value = data.title || null;
      document.querySelector("#price").value = data.price || null;
      document.querySelector("#desc").value = data.description || null;
      const imageElement = document.querySelector("#image-preview");

      if (imageElement) {
        imageElement.removeAttribute("src");
        const gallery =
          Array.isArray(data.gallery) && data.gallery.length > 0
            ? data.gallery[0]
            : "";
        imageElement.setAttribute(
          "src",
          gallery !== "" ? gallery : "default_image_url.jpg"
        );
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("Không tìm thấy ID trong URL");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btnUpdate = document.querySelector("#btn-update");
  if (btnUpdate) {
    btnUpdate.addEventListener("click", async (event) => {
      event.preventDefault();
      const title = document.querySelector("#name").value;
      const price = document.querySelector("#price").value;
      const description = document.querySelector("#desc").value;
      try {
        if (idEdit) {
          const editProduct = {
            title,
            price,
            description,
          };
          await api.patch(`/products/${idEdit}`, editProduct);
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
        } else {
          console.error("idEdit không hợp lệ");
        }
      } catch (error) {
        console.error("Error updating product:", error);
      }
    });
  }
});

export default HandelUpdate;
