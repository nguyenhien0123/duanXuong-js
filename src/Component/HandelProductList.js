const HandelProductList = () => {
  const productList = document.querySelector(".products");
  callApi(productList);
};
const callApi = (product) => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      const htmlContent = data
        .map(
          (product) => /*html*/ `
        <div class="product">
            <img src="${product.thumbnail}"/>
            <div class="title">${product.title}</div>
            <div class="price">Giá: $${product.price}</div>
            <div class="des">Mô tả: ${product.description}</div>
            <div class="btn"><button>Add to card</button>
            <button><a href="detail/${product.id}">View</a></button>
            </div>
            </div>
        `
        )
        .join("");

      product.innerHTML = htmlContent;
    });
};

export default HandelProductList;
