import { Button } from "../elements/Button/Index.jsx";
import { InputForm } from "../elements/input/Index.jsx";
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
    </form>
  );
};
