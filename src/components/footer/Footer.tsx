import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./footer.scss";

const FiverrIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className="social-icon"
  >
    <path d="M256 0C114.613 0 0 114.613 0 256s114.613 256 256 256 256-114.613 256-256S397.387 0 256 0zm90.18 291.54h-35.993v73.445c0 7.94-6.448 14.388-14.388 14.388h-24.04c-7.94 0-14.388-6.448-14.388-14.388v-73.445H164.61v42.565c0 7.94-6.448 14.388-14.388 14.388h-24.04c-7.94 0-14.388-6.448-14.388-14.388v-99.222c0-7.94 6.448-14.388 14.388-14.388h234.4c7.94 0 14.388 6.448 14.388 14.388v24.04c0 7.94-6.448 14.388-14.388 14.388z" />
  </svg>
);

const Footer = () => {
  console.log(import.meta.env);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <h4>Bojan Crnovcic</h4>
          <p>Full-Stack Developer | UI/UX Designer</p>
        </div>
        <div className="footer__socials">
          <a href={import.meta.env.VITE_REACT_APP_FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href={import.meta.env.VITE_REACT_APP_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href={import.meta.env.VITE_REACT_APP_FIVERR_URL} target="_blank" rel="noopener noreferrer">
            <FiverrIcon />
          </a>
          <a href={import.meta.env.VITE_REACT_APP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} BojanC. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

