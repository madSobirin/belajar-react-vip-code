import { Link } from "react-router-dom";

export const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600 text-center">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-8 text-center">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm text-slate-500 mt-4 text-center">
          {type === "login" ? "Don't have an account? " : "Have an account? "}
          <Link
            to={type === "login" ? "/register" : "/login"}
            className="text-blue-600 font-medium hover:underline "
          >
            {type === "login" ? "Register" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};
