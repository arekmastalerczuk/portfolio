import FormItem from "@/components/Form/FormItem/FormItem";

const ContactForm = () => (
  <form className="w-96 flex flex-col space-y-4">
    <FormItem label="name" required>
      Imię
    </FormItem>
    <FormItem label="email" type="email" required>
      E-mail
    </FormItem>
    <FormItem richText label="message" required>
      Wiadomość
    </FormItem>
    <button className="btn btn-outline btn-primary btn-wide  mx-auto tracking-widest">
      Wyślij
    </button>
  </form>
);

export default ContactForm;
