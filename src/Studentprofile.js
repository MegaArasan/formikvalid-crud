import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export function Studentprofile() {
  const { id } = useParams();
  const history = useHistory();
  const [student, setstudent] = useState([]);
  useEffect(() => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/school/${id}`)
      .then((data) => data.json())
      .then((usr) => setstudent(usr));
  }, [id]);
  return (
    <section className="studentinfo">
      <div className="studentdetails">
        <div className="avatar">
          <img src={student.avatar} alt={student.name} className="profileimg" />
        </div>
        <div style={{ maxWidth: "600px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="p">
              <b>NAME:</b>
              {student.fname} {student.lname}
            </Typography>
            <IconButton
              onClick={() => history.push("/students/edit/" + id)}
              className="movie-show-button"
              color="secondary"
              aria-label="edit movie"
              style={{ marginLeft: "20px" }}
            >
              <EditIcon />
            </IconButton>
          </div>
          <Typography variant="p">
            <b>STUDENT-ID:</b>
            {student.id}
          </Typography>
          <br />
          <Typography variant="p">
            <b>USER NAME:</b>
            {student.username}
          </Typography>
          <br />
          <Typography variant="p">
            <b>PASSWORD:</b>
            {student.password}
          </Typography>
          <br />
          <Typography variant="p">
            <b>PHONE-NO:</b>
            {student.phoneno}
          </Typography>
          <br />
          <Typography variant="p">
            <b>EMAIL:</b>
            {student.email}
          </Typography>
          <br />
          <Typography variant="p">
            <b>ADDRESS:</b>
            {student.address}
          </Typography>
        </div>
        <div style={{ maxWidth: "600px" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.goBack()}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </div>
      </div>
    </section>
  );
}
