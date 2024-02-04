import "./node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.min";
import HandelSubmitAdd from "./src/Component/HandelAddNew";
import HandelAdmin from "./src/Component/HandelAdmin";
import HandelDetail from "./src/Component/HandelDetail";
import HandelProductList from "./src/Component/HandelProductList";
import HandelSubmitLogin from "./src/Component/HandelSign";
import handelSubmitRegister from "./src/Component/HandelSignUp";
import HandelUpdate from "./src/Component/HandelUpdate";
import About from "./src/Pages/About";
import doahdboard from "./src/Pages/Admin/doahdboard";
import formProduct from "./src/Pages/Admin/formProduct";
import formUpdate from "./src/Pages/Admin/formUpdate";
import Detail from "./src/Pages/Detail";
import HomePage from "./src/Pages/HomePage";
import NotFound from "./src/Pages/NotFound";
import SignIn from "./src/Pages/SignIn";
import SignUp from "./src/Pages/SignUp";
import { render, router } from "./src/Ultil/comon";
import "./style.css";
router.on("/", () => render(app, HomePage), {
  after() {
    HandelProductList();
  },
});
router.on("/detail/:id", () => render(app, Detail), {
  after(params) {
    const id = params.id;
    HandelDetail({ id });
  },
});
router.on("/home", () => router.navigate("/"));
router.on("/about", () => render(app, About));
router.on("/signup", () => render(app, SignUp), {
  after() {
    handelSubmitRegister();
  },
});
router.on("/signin", () => render(app, SignIn), {
  after() {
    HandelSubmitLogin();
  },
});
router.on("/signout", () => {
  sessionStorage.removeItem("user");
  const conFirm = confirm(`Đăng xuất thành công`);
  if (conFirm) {
    window.location.href = "/";
  } else {
    window.location.href = "/signin";
  }
});
router.on("/admin", () => render(app, doahdboard), {
  before(done) {
    const loged = JSON.parse(sessionStorage.getItem("user"))?.user;
    if (loged && loged.role === "admin") {
      done();
    } else {
      alert("Ban khong co quyen truy cap");
      window.location.href = "/";
    }
  },
  after() {
    HandelAdmin();
  },
});
router.on("/admin/add", () => render(app, formProduct), {
  before(done) {
    const loged = JSON.parse(sessionStorage.getItem("user"))?.user;
    if (loged && loged.role === "admin") {
      done();
    } else {
      alert("Ban khong co quyen truy cap");
      window.location.href = "/";
    }
  },
  after() {
    HandelSubmitAdd();
  },
});
router.on("/edit/:id", () => render(app, formUpdate), {
  before(done) {
    const loged = JSON.parse(sessionStorage.getItem("user"))?.user;
    if (loged && loged.role === "admin") {
      done();
    } else {
      alert("Ban khong co quyen truy cap");
      window.location.href = "/";
    }
  },
  after() {
    HandelUpdate();
  },
});

router.notFound(() => render(app, NotFound));
router.resolve();
