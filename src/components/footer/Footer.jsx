import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <span className="footer-bg"></span>

        <img src="src/assets/images/logo.svg" className="small-logo" />
        <div className="footer-info">
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Install Guide</p>
          <p>Contact Us</p>
          <p>Press Kit</p>
        </div>
        <div className="social-media">
          <img src="src/assets/images/icon-facebook.svg" />
          <img src="src/assets/images/icon-twitter.svg" />
          <img src="src/assets/images/icon-instagram.svg" />
        </div>
      </div>
    </>
  );
}

export default Footer;
