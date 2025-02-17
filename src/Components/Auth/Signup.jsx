// import { Password } from "@mui/icons-material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
// import { register } from "../../Store/AuthSlice";
// import { useDispatch, useSelector } from "react-redux";

const Signup = ({ togglePanel }) => {
  // const dispatch = useDispatch();
  // const { auth } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(register(formData));
    console.log("login form", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">Register</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
        />

        <Button
          fullWidth
          className="custom-btn"
          type="submit"
          variant="contained"
          sx={{ padding: "0.9rem" }}
        >
          Register
        </Button>
      </form>
      <div className="flex items-center gap-2 py-5 justify-center">
        <span>Already have an account?</span>
        <Button onClick={togglePanel}>Log-in</Button>
      </div>
    </div>
  );
};

export default Signup;
