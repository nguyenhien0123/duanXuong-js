import Header from "../Component/Header";

const SignUp = () => {
  return /*html*/ `

<div class="pageSignUp">
   <img class="img-bg" src="../../public/background-trang-1.webp"/>

   ${Header()}
    <div class="signup">
    <form action="">
    <h2>SignUp</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="confirmpass">
  </div>
  <button type="button" class="btnSubmit">Submit</button>
</form>
    
</div>
  `;
};
export default SignUp;
