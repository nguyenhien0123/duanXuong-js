const formUpdate = () => {
  return /*html*/ `<div class="form-add">
  <h2>Edit Product</h2>

    <form class="update">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price</label>
              <input type="number" class="form-control" id="price" />
            </div>
              <img id="image-preview" src=""/>
            <div class="mb-3">
              <label for="desc" class="form-label">Description</label>
              <textarea class="form-control" rows="3" id="desc"></textarea>
            </div>
             <input type="hidden" id="productId" name="productId" value="">
            <button type="submit" class="btn btn-primary" id="btn-update">Update</button>
          </form>
    </div>`;
};
export default formUpdate;
