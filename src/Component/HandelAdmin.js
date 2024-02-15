import api from "../apis";
import HandelUpdate from "./HandelUpdate";

const HandelAdmin = async () => {
  const productList = document.querySelector("#productList");

  const deleProduct = (id) => {
    try {
      Swal.fire({
        title: "Xác nhận",
        text: "Bạn có muốn xoá sản phẩm?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Xoá",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) {
          api
            .delete(`products/${id}`)
            .then(() => {
              Swal.fire({
                title: "Thành công!",
                text: "Sản phẩm đã được xoá thành công.",
                icon: "success",
              });
              window.location.reload();
            })

            .catch((error) => {
              console.error("Error while deleting product:", error);
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  productList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btn-dele")) {
      const productId = target.dataset.id;
      deleProduct(productId);
    }
    if (target.classList.contains("btn-edit")) {
      const productId = target.dataset.id;
      HandelUpdate(productId);
    }
  });

  // hien thi du lieu
  const { data } = await api.get(`/products`);
  if (data) {
    data.forEach((item) => {
      if (typeof item.gallery === "string") {
        item.gallery = [item.gallery];
      }
    });
    const html = data.map(
      (item) => /*html*/ `
        <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}</td>
       <td><img src="${
         item.gallery && item.gallery.length > 0 ? item.gallery[0] : ""
       }" alt="Ảnh sản phẩm"></td>

        <td>${item.description}</td>
        <td class="action">
       <a href="/edit/${item.id}"> <button class="btn-edit" data-id="${
        item.id
      }"><i class="bi bi-pencil-square"></i></button></a>
        <button class="btn-dele" data-id="${
          item.id
        }"><i class="bi bi-trash3"></i></button>
        </td>
        </tr>
        `
    );
    productList.innerHTML = /*html*/ `
        <table class="table table-striped">
        <thead>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Description</th>
        <th>Action</th>
        </thead>

        <tbody>${html}</tbody>
        </table>
      `;
  }
};

export default HandelAdmin;
