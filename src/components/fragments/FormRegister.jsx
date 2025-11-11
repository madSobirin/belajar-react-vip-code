import { Link } from "react-router-dom";
import { Button } from "../elements/Button/Index.jsx";
import { InputForm } from "../elements/input/Index.jsx";
export const FormRegister = () => {
  return (
    <form action="">
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
      <Button>Register</Button>
      <p className="text-sm text-slate-500 mt-4 text-center">
        have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-medium hover:underline "
        >
          Login
        </Link>
      </p>
    </form>
  );
};
