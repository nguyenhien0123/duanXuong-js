import Header from "../Component/Header";

const SignIn = () => {
  return /*html */ `
   ${Header()}

    <div class="signup">
   <img class="img-bg" src="../../public/background-trang-1.webp"/>

     <form>
    <h2>SignIn</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
 

 
  <button type="submit" class="btnLogin">LogIn</button>
</form>
    </div>
  `;
};

export default SignIn;
