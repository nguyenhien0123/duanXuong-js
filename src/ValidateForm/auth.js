export const ValidRegister = (user) => {
  if (user.email == "" || user.password == "" || user.confirmpass == "") {
    alert("Ban phai nhap thong tin");
    return false;
  }
  if (user.password.length < 6) {
    alert("Mat Khau phai hon 6 ki tu");
    return false;
  }
  if (user.password !== user.confirmpass) {
    alert("Mat khau nhap lai khong khop");
  }
  return true;
};

export const validLogin = (user) => {
  if (user.email == "" || user.password == "") {
    alert("Ban phai nhap thong tin");
    return false;
  }
  if (user.password.length < 6) {
    alert("Mat Khau phai hon 6 ki tu");
    return false;
  }
  return true;
};
