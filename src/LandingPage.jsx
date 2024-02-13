import { Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import "./App.css";

function LandingPage() {
 
  const cStyle = {
    position: "fixed",
    top: 0,
    left: "-8px",
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: '100vh',
  };

  return (
    <Container maxWidth="xs" style={cStyle}>
      <Stack direction="column" spacing={1} style={{marginBottom:"60px"}}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Rubik, sans-serif",
            color: "#1D2226",
            fontSize:"28px",
            fontWeight: "700",
            letterSpacing:"-1.5px"

          }}
        >
          Welcome to PopX{" "}
        </Typography>
        <Typography
          variant="subtitle"
          style={{
            fontFamily: "Rubik, sans-serif",
            color: "#1D2226",
            opacity: "0.6",
            maxWidth:"200px"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#6C25FF",
            color: "#CBCBCB",
            fontSize: "14px",
            textTransform: "none",
          }}
        >
          <Link
            to={"createacount"}
            style={{
              color: "inherit",
              fontFamily: "Rubik, sans-serif",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            {" "}
            Create Account
          </Link>
        </Button>

        <Button
          variant="contained"
          style={{
            backgroundColor: "#6C25FF4B",
            color: "#1D2226",
            fontSize: "14px",
            textTransform: "none",
          }}
        >
          <Link
            to={"sign"}
            style={{
              fontFamily: "Rubik, sans-serif",
              color: "inherit",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            {" "}
            Already Registred? Login
          </Link>
        </Button>
      </Stack>
    </Container>

  );
}

export default LandingPage;
