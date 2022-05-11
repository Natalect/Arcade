import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <h1
        className="login-header p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer"
        onClick={signIn}
      >
        Login with Google
      </h1>
    </div>
  );
}

export default Login;
