export const ValidRegister = (user) => {
  if (user.email == "" || user.password == "" || user.confirmpass == "") {
    Swal.fire({
      title: "Thông báo",
      text: "Bạn phải nhập đầy đủ thông tin!",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    return false;
  }
  if (user.password.length < 6) {
    Swal.fire({
      title: "Thông báo",
      text: "Mật khẩu phải có ít nhất 6 ký tự!",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    return false;
  }
  if (user.password !== user.confirmpass) {
    Swal.fire({
      title: "Thông báo",
      text: "Mật khẩu nhập lại không khớp!",
      icon: "warning",
      confirmButtonText: "Ok",
    });
  }
  return true;
};

export const validLogin = (user) => {
  if (user.email == "" || user.password == "") {
    Swal.fire({
      title: "Thông báo",
      text: "Bạn phải nhập đầy đủ thông tin!",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    return false;
  }
  if (user.password.length < 6) {
    Swal.fire({
      title: "Thông báo",
      text: "Mật khẩu phải có ít nhất 6 ký tự!",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    return false;
  }
  return true;
};
