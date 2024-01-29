import Header from "../Component/Header";
const HomePage = () => {
  return /*html*/ `
  ${Header()}
    <div class="container">
      <h2>Danh sach san pham</h2>
      <div class="products"></div>
    </div>
  `;
};

export default HomePage;
