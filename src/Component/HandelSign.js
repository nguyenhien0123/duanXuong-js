import { validLogin } from "../ValidateForm/auth";
import api from "../apis";

const HandelSubmitLogin = () => {
  const btnLogin = document.querySelector(".btnLogin");
  btnLogin.onclick = HandelSigin;
};

const HandelSigin = async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const user = {
    email,
    password,
  };
  if (validLogin(user)) {
    try {
      const { data } = await api.post("/signin", user);
      if (data) {
        sessionStorage.setItem("user", JSON.stringify(data));
        alert("dang nhap thanh cong");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
};

export default HandelSubmitLogin;
