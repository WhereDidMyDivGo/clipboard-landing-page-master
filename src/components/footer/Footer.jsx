import "./footer.css";

//////////////// images ////////////////
import logo from "../../assets/images/logo.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <span className="footer-bg"></span>

        <div className="footer-wrapper">
          <img src={logo} className="small-logo" />
          <div className="footer-info">
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Install Guide</p>
            <p>Contact Us</p>
            <p>Press Kit</p>
          </div>
        </div>
        <div className="social-media">
          <img src={iconFacebook} />
          <img src={iconTwitter} />
          <img src={iconInstagram} />
        </div>
      </div>
    </>
  );
}

export default Footer;
