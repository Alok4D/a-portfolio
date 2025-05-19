import Pyramid from "../../ui/Pyramid";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import "./Contact.css";
import { MdLocationCity, MdOutlineEmail, MdPhone } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fcc0219a-c737-4ea7-a566-94fd7f346ef5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message send successfully!",
        icon: "success",
      });

      // ✅ Clear form fields
      event.target.reset();
    }
  };

  return (
    <section id="contact">
      <div className="section__header">
        <h2 className="shine">Contact Me</h2>
      </div>
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">great project</span>{" "}
              {""} together
            </h3>

            {/* contact info */}

            <div className="contact-info">
              <div className="box__c">
                <div className="iconC">
                  <b></b>
                  <MdLocationCity className="otherStyle" />
                </div>
                <div className="text">
                  <h6>Address</h6>
                  <p>Dinajpur, Bangladesh</p>
                </div>
              </div>

              <div className="box__c">
                <div className="iconC">
                  <b></b>
                  <MdPhone className="otherStyle" />
                </div>
                <div className="text">
                  <h6>Phone</h6>
                  <p>01719277951</p>
                </div>
              </div>

              <div className="box__c">
                <div className="iconC">
                  <b></b>
                  <MdOutlineEmail className="otherStyle" />
                </div>
                <div className="text">
                  <h6>Email</h6>
                  <p>alokroy602701@gmail.com</p>
                </div>
              </div>
            </div>

            {/* contact info end*/}
            <div>
              <div className="connect">
                <div>
                  <IoShareSocial className="sI" />
                </div>
                <h5>Connect With Us</h5>
              </div>
              <SocialHandles />
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn submit__btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
