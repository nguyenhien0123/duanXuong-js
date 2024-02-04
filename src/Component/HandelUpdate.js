import api from "../apis";

// const onUpdate = () => {
//   const btnUpdate = document.querySelector(".btn-update");
//   btnUpdate.onclick = HandelUpdate;
// };
const HandelUpdate = async (id) => {
  console.log(id);
  const { data } = await api.get(`/products/${id}`);
  document.querySelector("#name").value = data.name || "";
  document.querySelector("#price").value = data.price || "";
  document.querySelector("#desc").value = data.desc || "";
  console.log(data);
};

export default HandelUpdate;
