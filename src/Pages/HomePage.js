import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
const HomePage = () => {
  return /*html*/ `
  ${Header()}
  ${Banner()}
    <div class="container">
      <div class="products"></div>
    </div>

    ${Footer()}
  `;
};

export default HomePage;
