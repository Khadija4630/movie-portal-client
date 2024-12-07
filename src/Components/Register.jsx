import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth,googleProvider } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, updateProfile, signInWithRedirect } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "./Routes/PrivateRoutes";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        photoURL: "",
      });
    
      const { name, email, password, photoURL } = formData;
    
      const navigate = useNavigate();
      const { setUser } = useContext(AuthContext);
//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//     return regex.test(password);
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validatePassword(password)) {
//       toast.error(
//         "Password must contain at least 6 characters, an uppercase letter, and a lowercase letter"
//       );
//       return;
//     }
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       await updateProfile(userCredential.user, { displayName: name });
//       toast.success("Registration Successful");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center md:mt-6 mt-3">
//       <div className="w-full max-w-md p-8 space-y-4 bg-white shadow rounded">
//         <h2 className="text-2xl font-bold text-center">Register</h2>
//         <form onSubmit={handleRegister} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="input input-bordered w-full"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="input input-bordered w-full"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="input input-bordered w-full"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button className="btn bg-red-300 hover:bg-red-400 w-full">Register</button>
//         </form>
//         <p className="text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-red-400 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
// const onSubmit = async (data) => {
//     const { name, email, password } = data;

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(auth.currentUser, { displayName: name });
//       toast.success("Registration Successful!");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message || "Registration Failed");
//     }
//   };

const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error(
        "Password must contain at least 6 characters, an uppercase letter, and a lowercase letter"
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || "https://via.placeholder.com/150", // Default placeholder if no URL is provided
      });

      setUser({
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Registration failed. Try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
      toast.info("Redirecting to Google Login...");
    } catch (error) {
      toast.error(error.message || "Google Login Failed");
    }
  };

//   return (
//     <div className="flex justify-center items-center md:mt-6 mt-3">
//       <div className="w-full max-w-md p-8 space-y-4 bg-white shadow rounded">
//         <h2 className="text-2xl font-bold text-center">Register</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Name Field */}
//           <div>
//             <input
//               {...register("name", { required: "Name is required" })}
//               type="text"
//               placeholder="Name"
//               className="input input-bordered w-full"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>

//           {/* Email Field */}
//           <div>
//             <input
//               {...register("email", { required: "Email is required" })}
//               type="email"
//               placeholder="Email"
//               className="input input-bordered w-full"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           {/* Password Field */}
//           <div>
//             <input
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: { value: 6, message: "Password must be at least 6 characters" },
//                 validate: (value) =>
//                   /[A-Z]/.test(value) || "Password must contain an uppercase letter",
//               })}
//               type="password"
//               placeholder="Password"
//               className="input input-bordered w-full"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>

//           <button type="submit" className="btn bg-red-300 hover:bg-red-400 w-full">
//             Register
//           </button>
//         </form>

//         <p className="text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-red-400 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

return (
    <div className="flex justify-center items-center lg:mt-6 mt-3">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />

          {/* Photo URL Input */}
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            value={photoURL}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange}
            className="input input-bordered w-full"
            required
          />

          {/* Register Button */}
          <button type="submit" className="btn bg-red-300 hover:bg-red-400 w-full">
            Register
          </button>
        </form>

        {/* Google Login Button */}
        <button onClick={handleGoogleLogin} className="btn bg-red-300 hover:bg-blue-400 w-full">
          Register with Google
        </button>

        {/* Navigation Links */}
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-red-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
