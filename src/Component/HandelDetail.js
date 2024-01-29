import api from "../apis";

const HandelDetail = async (inputData) => {
  const id = inputData.id;
  const detailProduct = document.querySelector(".detail");

  const { data } = await api.get(`/products/${id}`);
  if (data) {
    return `
        <div>
        <img src="${data.thubnail}" />
        </div>
        `;
  }
};

export default HandelDetail;
