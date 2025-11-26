import { Button } from "../elements/Button/Index.jsx";
import { InputForm } from "../elements/input/Index.jsx";
export const FormRegister = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // simpan ke local storage
    localStorage.setItem("nama", e.target.fullname.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/card";

    console.log("Register success");
  };
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Fullname"
        type="text"
        placeholder="please enter your fullname"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@example.com"
        name="email"
      />
      <div className="mb-6">
        <InputForm
          label="Password"
          type="password"
          placeholder="****"
          name="password"
        />
      </div>
      <div className="mb-6">
        <InputForm
          label="Confirm password"
          type="password"
          placeholder="****"
          name="confirmPassword"
        />
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
};
