import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerF">
      <div className="main-container-footer">
        <div className="three-content-footer">

          <div>
            <h2 className="text-2xl font-bold text-white">
              AR<span className="text-gray-400"> Alok</span>
            </h2>
            <p className="text-sm text-gray-400 text-f">
              Frontend developer specializing in creating exceptional digital
              experiences with the MERN stack.
            </p>
            <div>
                <SocialHandles></SocialHandles>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 quickLinks">Quick Links</h3>
            <ul className="footer-m text-sm">
              <li>
                <a href="#" className="text-gray-400 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 style-f">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 style-f">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 quickLinks">Contact</h3>
            <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
            <p className="text-sm text-gray-400 style-f">mdrayhan40801@gmail.com</p>
            <p className="text-sm text-gray-400 style-f">+880 1909-9870274</p>
          </div>
        </div>

         <div className="mini-footer">
          <div className="hrFooter"></div>
          <div className="mini-footer-content">
           2025 © Alok Roy || All Rights Reserved.
          </div>
        </div>
       
      </div>
      
    </div>
    
  );
};

export default Footer;
