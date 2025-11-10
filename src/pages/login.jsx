import { AuthLayouts } from "../components/layouts/AuthLayouts.jsx";
import { FormLogin } from "../components/fragments/FormLogin.jsx";

export const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};
