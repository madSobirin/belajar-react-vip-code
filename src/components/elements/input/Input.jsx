export const Input = (p) => {
  const { placeholder, type, name } = p;
  return (
    <input
      type={type}
      className="text-sm border rounded-md w-full px-3 py-2 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};
