import api from "../apis";

const HandelSubmitAdd = () => {
  const btnAdd = document.querySelector(".btn-add");
  btnAdd.onclick = HandelAddNew;
};

const HandelAddNew = async () => {
  const title = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const description = document.querySelector("#desc").value;
  const thumbnail = document.querySelector("#image").value;

  const newProduct = {
    title,
    price,
    description,
    thumbnail,
  };
  try {
    await api.post("/products", newProduct);
  } catch (error) {
    console.error(error);
  }
};
export default HandelSubmitAdd;
