const Header = () => {
  return /*html*/ `
     <header>
      <div><a href="/home">Home</a></div>
      <div><a href="/about">About</a></div>
      <div><a href="/signup">SignUp</a></div>
      <div><a href="/signin">SignIn</a></div>
      <div><a href="/signout">SignOut</a></div>

      <div><a href="/cart"><i class="bi bi-cart2"></i></a></div>
    </header>
  `;
};

export default Header;
