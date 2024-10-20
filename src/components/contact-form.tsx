import React from "react";
import Button from "./button.tsx";

const ContactForm = () => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <form name="contact" method="POST" data-netlify="true" className="w-full grid grid-cols-2 gap-x-10 gap-y-[50px]">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Nombre"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Correo"
          />
        </label>
        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Asunto"
          />
        </label>
        <label htmlFor="phone">
          <input
            type="number"
            name="phone"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Teléfono"
          />
        </label>
        <textarea
          name="message"
          className="col-span-2 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
          cols={30}
          rows={10}
          placeholder="Hola, quisiera saber más sobre..."
        ></textarea>

        <div className="flex justify-end w-full col-span-2">
          <Button text="Enviar mensaje" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
