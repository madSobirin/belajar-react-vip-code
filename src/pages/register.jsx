import { AuthLayouts } from "../components/layouts/AuthLayouts.jsx";
import { FormRegister } from "../components/fragments/FormRegister.jsx";

export const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
};
