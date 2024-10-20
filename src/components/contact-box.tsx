import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300/80 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <h5 className="flex flex-col items-center gap-4 text-xl tracking-tight text-white xl:flex-row font-jost">
        {" "}
        <Mail /> pisano@claro.net.do
      </h5>
      <h5 className="flex flex-col items-center gap-4 text-xl tracking-tight text-white xl:flex-row font-jost">
        {" "}
        <Phone /> 809-241-1111
      </h5>
      <h5 className="flex flex-col items-center gap-4 text-xl tracking-tight text-white xl:flex-row font-jost">
        {" "}
        <Web /> www.pisanozf.com
      </h5>
    </div>
  );
};

export default ContactInfo;
