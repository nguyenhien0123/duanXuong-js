import Header from "../Component/Header";

const Detail = () => {
  const extractProductIdFromURL = () => {
    const currentURL = window.location.href;
    const match = currentURL.match(/\/detail\/(\d+)/);
    return match ? match[1] : null;
  };
  const productId = extractProductIdFromURL();

  fetch(`http://localhost:3000/products/${productId}`)
    .then((res) => res.json())
    .then((data) => {
      const detailProduct = document.querySelector(".detail");

      if (data) {
        detailProduct.innerHTML = `
          <div class="product-detail">
            <img src="${data.thumbnail}" />
           <div class="detail-infor"> <div class="title">${data.title}</div>
            <div class="price">Giá: $${data.price}</div>
            <div class="des">Mô tả: ${data.description}</div>
             <button class="btn-add-to-cart">Add to cart</button>
            </div>
           
          </div>
        `;
      }
    });

  return /*html*/ `
    <div>
      ${Header()}
      <div class="detail">
      
      </div>
    </div>
  `;
};

export default Detail;
