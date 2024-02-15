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
        Swal.fire({
          title: "Đăng kí thành công!",
          text: "Bạn có muốn đăng nhập?",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/signin";
            form.reset();
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default handelSubmitRegister;
