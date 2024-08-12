import React, { useState } from "react";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import { contact } from "utils/apis/contact";
import { validateEmail } from "utils";
import toast from "react-hot-toast";
import { toastOptions } from "constants";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactSubmit = async () => {
    const { name, email, message } = formData;
    if (!name || !email || !message)
      return toast.error("None of the fields should be empty!", toastOptions);
    if (validateEmail(email))
      return toast.error("Invalid email address!", toastOptions);
    await contact(name, email, message);
    toast.success("Message sent successfully!", toastOptions);
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 py-20">
        <div className="contact-us py-8 w-full md:w-3/4 mx-auto">
          <div className="contact-us-heading text-center">
            <h2 className="text-3xl font-medium	">Get in Touch with YouSave</h2>
            <p className="text-gray-600 py-4">
              We'd love to hear from you. Reach out for support, feedback, new
              features, and anything else.
            </p>
          </div>
          <div className="contact-us-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                contactSubmit();
              }}
            >
              <div className="form-row flex flex-wrap -mx-2">
                <div className="form-group col-md-6 px-2 w-full md:w-1/2 mb-2">
                  <label htmlFor="name" className="block mb-1 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control email-input w-full p-2 border border-gray-300 rounded"
                    id="name"
                    placeholder=""
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6 px-2 w-full md:w-1/2">
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control email-input w-full p-2 border border-gray-300 rounded"
                    id="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-12 px-2 w-full">
                  <label
                    htmlFor="message"
                    className="block mb-1 mt-2 font-semibold"
                  >
                    Anything
                  </label>
                  <textarea
                    name="message"
                    className="form-control text-input w-full p-2 border border-gray-300 rounded"
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="button"
                  className="contact-us-b flex justify-center items-center rounded-[20px] bg-gradient-to-r from-[#ff9600] to-[#f44001] text-white font-dm-sans h-[44px] w-[160px] cursor-pointer select-none mx-auto"
                  value="Submit Message"
                  onClick={contactSubmit}
                />
              </div>
              <div id="contactError" className="text-center mt-4"></div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
