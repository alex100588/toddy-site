import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...formData,
      access_key: "696cb3ec-69c6-4304-b17b-983414276bcd",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message + " Mulțumim pentru mesaj!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contactează-ne</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Hai să vorbim!</h3>
          <p>
           Hai să discutăm! Oferim soluții eficiente cu automate de cafea, gustări și produse adaptate nevoilor tale.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>toddy@yahoo.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <a href="tel:+40733316975">0728131985</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>România</p>
            </div>
            
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Nume</label>
          <input
            type="text"
            name="name"
            placeholder="Numele tău"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Adresa ta de email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Mesaj</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Scrie mesajul tău..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Trimite mesaj
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
