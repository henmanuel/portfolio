import { content_ES } from "../Content_ES";
import MailchimpForm from "./MailchimpForm";
import { createElement, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content_ES;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    fbq('track', 'Subscribe');
    toast.success("Suscripción exitosa!");
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <MailchimpForm form={form} />
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank" rel="noopener noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
