import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { useState } from "react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";

export function Addstudent() {
  const history = useHistory();

  // const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  // const [email, setemail] = useState("");
  // const [phoneno, setphoneno] = useState("");
  // const [address, setaddress] = useState("");
  // const [password, setpassword] = useState("");
  // const [username, setusername] = useState("");
  // const [avatar, setavatar] = useState("");

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        fname: "",
        lname: "",
        email: "",
        phoneno: "",
        address: "",
        password: "",
        username: "",
        avatar: "",
      },
      // validate: validateForm,
      validationSchema: formvalidationSchema,
      // only no errors is sbmitted by validate form with call
      onSubmit: (newstudent) => {
        console.log("onSubmit", newstudent);
        addstudent(newstudent);
      },
    });

  const addstudent = (newstudent) => {
    // const newstudent = {
    //   fname: fname,
    //   lname: lname,
    //   email: email,
    //   phoneno: phoneno,
    //   address: address,
    //   password: password,
    //   username: username,
    //   avatar: avatar,
    // };
    console.log(newstudent);
    fetch("https://6166c53713aa1d00170a6755.mockapi.io/school", {
      method: "POST",
      body: JSON.stringify(newstudent),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/students"));
  };
  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        // required
        id="fname"
        name="fname"
        // onChange={(event) => setfname(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.fname}
        error={errors.fname && touched.fname}
        helperText={errors.fname && touched.fname && errors.fname}
        label="First Name"
        variant="standard"
      />
      <TextField
        fullWidth
        // required
        id="lname"
        name="lname"
        // onChange={(event) => setlname(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lname}
        error={errors.lname && touched.lname}
        helperText={errors.lname && touched.lname && errors.lname}
        label="Last Name"
        variant="standard"
      />
      <TextField
        fullWidth
        // required
        id="email"
        name="email"
        // onChange={(event) => setemail(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        error={errors.email && touched.email}
        helperText={errors.email && touched.email && errors.email}
        label="Email"
        variant="standard"
      />
      <TextField
        fullWidth
        // required
        id="phoneno"
        name="phoneno"
        // onChange={(event) => setphoneno(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phoneno}
        error={errors.phoneno && touched.phoneno}
        helperText={errors.phoneno && touched.phoneno && errors.phoneno}
        label="Phone No"
        variant="standard"
      />
      <TextField
        fullWidth
        // required
        id="address"
        name="address"
        // onChange={(event) => setaddress(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.address}
        error={errors.address && touched.address}
        helperText={errors.address && touched.address && errors.address}
        label="Address"
        variant="standard"
      />
      <TextField
        fullWidth
        // required
        id="password"
        name="password"
        // onChange={(event) => setpassword(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        error={errors.password && touched.password}
        helperText={errors.password && touched.password && errors.password}
        label="Password"
        variant="standard"
      />
      <TextField
        fullWidth
        // required
        id="username"
        name="username"
        // onChange={(event) => setusername(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
        error={errors.username && touched.username}
        helperText={errors.username && touched.username && errors.username}
        label="User Name"
        variant="standard"
      />
      <TextField
        fullWidth
        // required
        id="avatar"
        name="avatar"
        // onChange={(event) => setavatar(event.target.value)}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.avatar}
        error={errors.avatar && touched.avatar}
        helperText={errors.avatar && touched.avatar && errors.avatar}
        label="Avatar"
        variant="standard"
      />

      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px" }}
        // onClick={addstudent}
        type="submit"
      >
        Add Student
      </Button>
    </form>
  );
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),

const formvalidationSchema = Yup.object({
  fname: Yup.string().required("Why not fill this first name 🤯"),
  lname: Yup.string().required("Why not fill this last name 🤯"),
  email: Yup.string().email().required("please file the email field"),
  // phoneno: Yup.string().phone().required("Why not fill this phone no 🤯"),
  //   .min(8, "Please Enter the valid phone number")
  //   .max(10, "Please Enter the valid phone number"),
  phoneno: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Why not fill this phone no 🤯")
    .min(8, "Please Enter the valid phone number")
    .max(10, "Please Enter the valid phone number"),
  avatar: Yup.string()
    .min(4, "given the correct url of the avatar")
    .required("why not fill the avatar url"),
  address: Yup.string()
    .min(4, "too short address")
    .required("why not fill the address"),
  username: Yup.string().required("why not fill your user name").min(4),
  password: Yup.string()
    .required("Please give the valid password")
    .min(8, "Weak password"),
});
