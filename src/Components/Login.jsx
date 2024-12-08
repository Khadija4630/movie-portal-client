import React, { useEffect, useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider  } from "../Firebase/Firebase.init";
import { getRedirectResult, signInWithEmailAndPassword,signInWithRedirect } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "./Routes/PrivateRoutes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Email login user:", user); 
      setUser({
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      toast.success("Login Is Successful");
      navigate("/");
    } catch (error) {
      toast.error("Invalid Email or Password");
    }
  };

  const handleGoogleLogin = async (e) => {
  //   try {
  //      await signInWithRedirect (auth, googleProvider);
  //     toast.success("Google Login Is Successful");
  //     console.log("User after Login:", user);
  //     navigate("/");
  //   } catch (error) {
  //     toast.error(error.message  || "Google Login Failed");
  //   }
  // };
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
    }

    const { token, user } = await response.json();
    localStorage.setItem("token", token);
    setUser(user);
    toast.success("Login Is Successful");
    navigate("/addMovies");
} catch (error) {
    toast.error(error.message || "Invalid Email or Password");
}
};

useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          const FirebaseUser = result.user;
          console.log("Google login user:", FirebaseUser); 
          setUser({
            email: FirebaseUser.email,
            displayName: FirebaseUser.displayName,
            photoURL: FirebaseUser.photoURL,
          });
          toast.success(`Welcome, ${FirebaseUser.displayName || "User"}!`);
          navigate("/"); 
        }
      })
      .catch((error) => {
        toast.error(error.message || "Google Login Failed");
      });
  }, [navigate,setUser]);

  return (
    <div className="flex justify-center items-center lg:mt-6 mt-3">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn bg-orange-300 w-full">Login</button>
        </form>
        <button onClick={handleGoogleLogin} className="btn bg-red-300 w-full">
          Login with Google
        </button>
        <div className="text-center mt-4">
          <Link to="/reset-password" className="text-sm text-blue-500 hover:underline">
            Forget Password?
          </Link>
        </div>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
