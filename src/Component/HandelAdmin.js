import api from "../apis";

const HandelAdmin = async () => {
  const productList = document.querySelector("#productList");

  const deleProduct = (id) => {
    console.log(id);
    api.delete(`products/${id}`);
    window.location.reload();
  };

  productList.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btn-dele")) {
      const productId = target.dataset.id;
      deleProduct(productId);
    }
  });
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
