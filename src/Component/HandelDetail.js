const Detail = () => {
  const extractProductIdFromURL = () => {
    const currentURL = window.location.href;
    const match = currentURL.match(/\/detail\/(\d+)/);
    return match ? match[1] : null;
  };
  const productId = extractProductIdFromURL();
  fetch(`http://localhost:3001/products/${productId}`)
    .then((res) => res.json())
    .then((data) => {
      const detailProduct = document.querySelector(".detail");

      if (data) {
        detailProduct.innerHTML = `
          <div class="product-detail">
            <img src="${data.gallery[0]}" alt="Ảnh sản phẩm">
              <div class="details col-md-6">
                                <h3 class="product-title">${data.title}</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span class="review-no">999 reviews</span>
                                </div>
                                <p class="product-description">Màn hình 10.1 inch cảm ứng đa điểm</p>
                                
                                <h4 class="price">Giá hiện tại: <span>$${data.price}</span></h4>
                                <p class="vote"><strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm bảo
                                    <strong>Uy
                                        tín</strong>!</p>
                               
                                <div class="form-group">
                                    <label for="soluong">Số lượng đặt mua:</label>
                                    <input type="number" class="form-control" id="soluong" name="soluong">
                                </div>
                                  <a class="add-to-cart btn btn-default" id="btnThemVaoGioHang">Thêm vào giỏ hàng</a>
                                 
           
          </div>
        `;
      }
    });
  return /*html*/ `
    <div>
     
      <div class="detail">
      
      </div>
    </div>
  `;
};
export default Detail;
/**
 *   <div class="detail-infor"> <div class="title">${data.title}</div>
            <div class="price">Giá: $${data.price}</div>
            <div class="des">Mô tả: ${data.description}</div>
             <button class="btn-add-to-cart">Add to cart</button>
            </div>
 */
