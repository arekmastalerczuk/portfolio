import Link from "next/link";
import ContactForm from "@/components/Form/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <h1 className="page-header">Kontakt</h1>
      <ul className="w-72 flex flex-col space-y-3">
        <li className="flex justify-between">
          <span className="font-bold">Email:</span>
          <Link
            href="mailto:areqmas@gmail.com"
            className="hover:-translate-x-4 duration-500"
          >
            areqmas@gmail.com
          </Link>
        </li>
        <li className="flex justify-between relative">
          <span className="font-bold">LinkedIn:</span>
          <Link
            href="https://www.linkedin.com/in/arkadiusz-mastalerczuk"
            target="_blank"
            className="hover:-translate-x-4 duration-500"
          >
            arkadiusz-mastalerczuk
          </Link>
        </li>
        <li className="flex justify-between relative">
          <span className="font-bold">Discord:</span>{" "}
          <span className="hover:-translate-x-4 duration-500">
            arek.mastalerczuk
          </span>
        </li>
      </ul>
      <h2 className="mt-16">Formularz kontaktowy</h2>
      <ContactForm />
    </>
  );
};

export default Contact;
