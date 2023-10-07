import React, { useContext, useState } from "react";
import {
  Card,
  Checkbox,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../shared/Navbar/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function SignUp() {
  const { createUser, logInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    // optimized way to get data from form
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    // Cleaning previous error and success message every time
    setError(null);
    setSuccess(null);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess(`Sign up successfully`);
      })
      .catch((error) => setError(error.code));
  };

  const handleSignInWithGoogle = () => {
    setError(null);
    setSuccess(null);

    logInWithGoogle()
      .then(() => {
        setSuccess("Sign up with Google successfully");
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
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Sign up.
        </Typography>
        <form
          onSubmit={handleSignUp}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input name="name" size="lg" label="Name" required />
            <Input name="email" size="lg" label="Email" required />
            <Input
              name="password"
              type="password"
              size="lg"
              label="Password"
              required
            />
          </div>
          <Checkbox
            required
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
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
            SignUp
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
            Already have an account?
            <Link className="font-medium text-gray-900" to={"/login"}>
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </>
  );
}

export default SignUp;
