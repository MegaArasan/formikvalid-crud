import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";

export function Editstudent() {
  const { id } = useParams();
  const [student, setstudent] = useState(null);
  useEffect(() => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/school/${id}`)
      .then((data) => data.json())
      .then((stu) => setstudent(stu));
  }, [id]);

  return student ? <Updatestudent student={student} /> : "";
}

function Updatestudent({ student }) {
  const { id } = useParams();
  const history = useHistory();
  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        fname: student.fname,
        lname: student.lname,
        email: student.email,
        phoneno: student.phoneno,
        address: student.address,
        password: student.password,
        username: student.username,
        avatar: student.avatar,
      },
      // validate: validateForm,
      validationSchema: formvalidationSchema,
      // only no errors is sbmitted by validate form with call
      onSubmit: (updatestudent) => {
        console.log("onSubmit", updatestudent);
        editstudent(updatestudent);
      },
    });
  const editstudent = (updatestudent) => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/school/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatestudent),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => history.push("/students"));
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
        // value={fname}
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
        Save Student
      </Button>
    </form>
  );
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formvalidationSchema = Yup.object({
  fname: Yup.string().required("Why not fill this first name 🤯"),
  lname: Yup.string().required("Why not fill this last name 🤯"),
  email: Yup.string().email().required("please file the email field"),
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
