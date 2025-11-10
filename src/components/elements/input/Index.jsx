import { Label } from "./Label.jsx";
import { Input } from "./Input.jsx";

export const InputForm = (p) => {
  const { label, type, name, placeholder } = p;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};
