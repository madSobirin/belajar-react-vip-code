import { Button } from "../elements/Button/Index.jsx";
import { InputForm } from "../elements/input/Index.jsx";
import { Link } from "react-router-dom";
export const FormLogin = () => {
  return (
    <form action="">
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
      <Button>Login</Button>
      <p className="text-sm text-slate-500 mt-4 text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-medium hover:underline "
        >
          Register
        </Link>
      </p>
    </form>
  );
};
