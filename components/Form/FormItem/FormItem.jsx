const FormItem = ({ children, richText, label, ...props }) => {
  let content;

  content = richText ? (
    <div className="flex flex-col">
      <label className="font-bold" htmlFor={label}>
        {children}
      </label>
      <textarea
        className="text-black bg-primary-text min-h-48 p-2 focus:bg-amber-100 focus:text-secondary outline-0 rounded-md"
        id={label}
      ></textarea>
    </div>
  ) : (
    <div className="flex flex-col">
      <label className="font-bold" htmlFor={label}>
        {children}
      </label>
      <input
        type={props.type || "text"}
        className="bg-primary-text text-black p-2 rounded-md focus:bg-amber-100 focus:text-secondary outline-0"
        id={label}
      />
    </div>
  );

  return content;
};

export default FormItem;
