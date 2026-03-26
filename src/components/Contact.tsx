import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sumitsachdeva006@gmail.com" data-cursor="disable">
                sumitsachdeva006@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B. Com (Hons.)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="#"
              data-cursor="disable"
              className="contact-social"
              title="Not Available"
              onClick={(e) => e.preventDefault()}
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sumit--sachdeva"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Sumit_07092006"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="#"
              data-cursor="disable"
              className="contact-social"
              title="Not Available"
              onClick={(e) => e.preventDefault()}
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sumit Sachdeva</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
