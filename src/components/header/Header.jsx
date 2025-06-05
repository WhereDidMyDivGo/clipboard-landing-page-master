import "./header.css";

function Header() {
  return (
    <>
      <div className="header-container">
        <img src="/src/assets/images/logo.svg" className="logo" />
        <div className="title">
          <h1>A history of everything you copy</h1>
          <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
        </div>
      </div>
    </>
  );
}

export default Header;
