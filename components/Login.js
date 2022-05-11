import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <img
        className="glogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png"
        alt=""
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer"
        onClick={signIn}
      >
        Login with Google
      </h1>
    </div>
  );
}

export default Login;
