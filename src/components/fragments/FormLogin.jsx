import { Button } from "../elements/Button/Index.jsx";
import { InputForm } from "../elements/input/Index.jsx";
export const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // simpan ke local storage
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/card";
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    console.log("Login success");
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button type="submit">Login</Button>
    </form>
  );
};
