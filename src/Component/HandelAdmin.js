import api from "../apis";

const HandelAdmin = async () => {
  const productList = document.querySelector("#productList");

  productList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btn-dele")) {
      const productId = target.dataset.id;
      deleProduct(productId);
    }
    if (target.classList.contains("btn-edit")) {
      const productId = target.dataset.id;
      onUpdated(productId);
    }
  });
  const deleProduct = async (id) => {
    if (confirm(`Bạn có muốn xoá sản phẩm ${id}`)) {
      await api.delete(`products/${id}`);
      window.location.reload();
    }
  };
  const onUpdated = async (id) => {
    window.location.href = `edit/${id}`;
    try {
      const { data } = await api.get(`/products/${id}`);
      console.log(data);
      document.querySelector("#name").value = data.title || "";
      document.querySelector("#price").value = data.price || "";
      document.querySelector("#image").value = data.thumbnail || "";
      document.querySelector("#desc").value = data.description || "";
    } catch (error) {
      console.log(error);
    }
  };
  // hien thi du lieu
  const { data } = await api.get(`/products`);
  if (data) {
    const html = data.map(
      (item) => `
        <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td><img src="${item.thumbnail}"/></td>
        <td>${item.description}</td>
        <td class="action">
       <a href="edit/${item.id}"> <button class="btn-edit" data-id="${item.id}">Edit</button></a>
        <button class="btn-dele" data-id="${item.id}">Delete</button>
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
