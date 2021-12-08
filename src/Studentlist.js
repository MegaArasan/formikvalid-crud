import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Students } from "./Students";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function Studentlist() {
  const [students, setstudents] = useState([]);
  const history = useHistory();
  const getstudents = () => {
    fetch("https://6166c53713aa1d00170a6755.mockapi.io/school")
      .then((data) => data.json())
      .then((stu) => setstudents(stu));
  };
  useEffect(getstudents, []);
  const deletestudent = (id) => {
    fetch(`https://6166c53713aa1d00170a6755.mockapi.io/school/${id}`, {
      method: "DELETE",
    }).then(() => getstudents());
  };
  return (
    <section className="student-list">
      {students.map(
        ({
          fname,
          lname,
          email,
          phoneno,
          address,
          password,
          username,
          avatar,
          id,
        }) => (
          <Students
            key={id}
            fname={fname}
            lname={lname}
            email={email}
            phoneno={phoneno}
            address={address}
            password={password}
            username={username}
            avatar={avatar}
            id={id}
            deleteButton={
              <IconButton
                onClick={() => deletestudent(id)}
                className="movie-show-button"
                color="error"
                aria-label="delete movie"
                sx={{ marginLeft: { xs: 10, sm: "auto" } }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => history.push("/students/edit/" + id)}
                className="movie-show-button"
                color="secondary"
                aria-label="edit movie"
                style={{ marginLeft: "20px" }}
              >
                <EditIcon />
              </IconButton>
            }
          />
        )
      )}
    </section>
  );
}
