import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router";

export interface UserType {
  name: string;
  email: string;
  phoneNumber: string;
}

const Login = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user: UserType = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };
    console.log(user);
    localStorage.setItem("auth", JSON.stringify(user));
    navigate("/table");
  };

  return (
    <Container style={{ width: "32rem" }}>
      <Paper style={{ backgroundColor: "#fafafa", padding: 20 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              component="h2"
              style={{ textAlign: "center" }}
            >
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        -
      </Paper>
    </Container>
  );
};

export default Login;
