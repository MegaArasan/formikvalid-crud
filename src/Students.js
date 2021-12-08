import Card from "@mui/material/Card";
import { CardMedia, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router";

export function Students({
  fname,
  lname,
  email,
  phoneno,
  username,
  avatar,
  id,
  editButton,
  deleteButton,
}) {
  const history=useHistory();
  return (
    <Card
      sx={{
        height: { xs: "auto", sm: 210 },
        margin: { xs:"8px", sm: "12px", md: "18px" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        maxWidth: 520,
      }}
    >
      <CardMedia
        component="img"
        sx={{ maxWidth: "210px" }}
        image={avatar}
        alt={username}
      />
      <div className="card-body">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Typography
            variant="p"
            sx={{ fontSize: { xs: "15px", sm: "25px" } }}
            color="inherit"
          >
            {fname}
            {lname}
          </Typography>
          <IconButton  onClick={() => history.push("/students/profile/" + id)}>
            <InfoIcon />
          </IconButton>
        </div>
        <div tyle={{ display: "flex",flexDirection:"column" ,flexWrap: "wrap"}}>
          <Typography
            variant="p"
            sx={{ fontSize: { xs: "15px", sm: "25px" } }}
            color="inherit"
          >
            {email}
          </Typography>
        <br />
        <Typography
          variant="p"
          sx={{ fontSize: { xs: "15px", sm: "25px" } }}
          color="inherit"
        >
          {phoneno}
        </Typography>
        </div>
        <div>
          {editButton}
          {deleteButton}
        </div>
      </div>
    </Card>
  );
}
