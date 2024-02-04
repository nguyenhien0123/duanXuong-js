const formProduct = () => {
  return /*html*/ `<div class="form-add">
  <h2>Add New Product</h2>
    <form action="" id="form-add">

            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">Price</label>
              <input type="number" class="form-control" id="price" />
            </div>
             <div class="mb-3">
              <label for="image" class="form-label">Add Image</label>
              <input type="file" class="form-control" multiple id="image" />
            </div>
            <div class="mb-3">
              <label for="desc" class="form-label">Description</label>
              <textarea class="form-control" rows="3" id="desc"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-add">Save</button>
          </form>
    </div>`;
};

export default formProduct;
