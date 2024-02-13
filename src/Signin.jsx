import { Container, Typography, Button, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Signin() {
  const cStyle = {
    position: "fixed",
    top: 0,
    left: "-8px",
    width: "100%",
    height: "100%",
    
    minHeight: '100vh',
  };

  return (
    <Container maxWidth="xs" style={cStyle} >
      <Stack direction="column" spacing={2} style={{marginTop:"45px"}}>
        <Typography variant="h4" 
        style={{
            fontFamily: "Rubik, sans-serif",
            color: "#1D2226",
            fontSize:"26px",
            fontWeight: "700",
            letterSpacing:"-1.5px",
            maxwidth: "200px"
          }}>
          Signin to your PopX account
        </Typography>
        <Typography variant="body2"  
        style={{
            fontFamily: "Rubik, sans-serif",
            color: "#1D2226",
            opacity: "0.6",
            maxWidth:"200px",
            fontWeight: "600",

          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
        </Typography>

        <TextField id="outlined-search" label="Username" />
        <TextField
          
          id="outlined-helperText"
          label="Password"
          type="password"
        />

        <Button variant="contained" 
        style={{
            backgroundColor: "#CBCBCB",
            color: "#FFFFFF",
            fontSize: "14px",
            textTransform: "none",
          }}>
          <Link to={"/acountsetting"} style={{
              color: "inherit",
              fontFamily: "Rubik, sans-serif",
              textDecoration: "none",
              fontWeight: "600",
            }} >
          {" "}
            Login
          </Link>
        </Button>
      </Stack>
    </Container>
  );
}

export default Signin;
