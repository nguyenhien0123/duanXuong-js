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

          
          <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                   <a href="/detail/${product.id}"> <img src="${product.gallery[0]}" alt="Ảnh sản phẩm"></a>
                  </div>
                  <div class="cart-concern position-absolute">

                  </div>
                  <div
                    class="card-detail d-flex justify-content-between align-items-baseline pt-3"
                  >
                    <h3 class="card-title text-uppercase">
                      <a href="#">${product.title}</a>
                    </h3>
                    <span class="item-price text-primary">$${product.price}</span>
                  </div>
                </div>
              </div>
        `
        )
        .join("");

      product.innerHTML = htmlContent;
    });
};

export default HandelProductList;
