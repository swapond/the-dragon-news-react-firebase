import React, { useContext, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { logInWithGoogle } = useContext(AuthContext);
  // Use useNavigate to get the navigation function
  const navigate = useNavigate();
  //   This is the state come from the news
  const location = useLocation();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    // optimized way to get data from form
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // Cleaning previous error and success message every time
    setError(null);
    setSuccess(null);

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess(`Sign in successfully`);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.code));
  };

  const handleSignInWithGoogle = () => {
    setError(null);
    setSuccess(null);

    logInWithGoogle()
      .then(() => {
        setSuccess("Sign up with Google successfully");

        // navigate after login
        navigate(location?.state ? location.state : "/");

        // /news/postId
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <Card className="flex items-center" color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input name="email" size="lg" label="Email" required />
            <Input
              name="password"
              type="password"
              size="lg"
              label="Password"
              required
            />
          </div>
          {/* Error Notification */}
          {error && (
            <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
              {error}
            </div>
          )}
          {/* Success Notification */}
          {success && (
            <div className="font-regular relative mb-4 block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100">
              {success}
            </div>
          )}
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>

          {/* Social Logins */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <Button
              onClick={handleSignInWithGoogle}
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3"
            >
              <img
                src="https://www.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              Continue with Google
            </Button>
          </div>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?
            <Link className="font-medium text-gray-900" to={"/signup"}>
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </>
  );
}

export default Login;
