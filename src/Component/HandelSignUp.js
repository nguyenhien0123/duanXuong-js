import { ValidRegister } from "../ValidateForm/auth";
import api from "../apis";

const handelSubmitRegister = () => {
  const btnSign = document.querySelector(".btnSubmit");
  btnSign.onclick = HandelSignUp;
};

const HandelSignUp = async (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmpass = document.querySelector("#confirmpass").value;
  const user = {
    email,
    password,
  };
  if (ValidRegister({ ...user, confirmpass })) {
    try {
      const { data } = await api.post("/signup", {
        ...user,
        role: "member",
        cart: [],
        phone: "",
      });
      if (data) {
        alert("dang ki thanh cong");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default handelSubmitRegister;
