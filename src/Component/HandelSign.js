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
        Swal.fire({
          title: "Đăng nhập thành công!",
          text: "Bạn có muốn đến trang mua sắm?",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          }
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
};

export default HandelSubmitLogin;
