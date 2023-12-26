interface Props {
  label: string;
  type: string;
  id: string;
  value: string;
}

const InputField = ({ label, type, id, value }: Props) => {
  return (
    <div className="w-full flex items-center gap-4 text-blue-400 mb-8">
      <label
        htmlFor={id}
        className="w-[140px] flex items-center justify-between"
      >
        <p>{label}</p>
        <p>:</p>
      </label>
      <input
        type={type}
        value={value}
        readOnly
        required
        id={id}
        className="p-2 outline-none text-slate-400 font-semibold bg-sky-100"
      />
    </div>
  );
};

export default InputField;
