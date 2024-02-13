import { Container, Typography, Button, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
function CreateAccount() {
  const [value, setValue] = useState("yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const cStyle = {
    position: "fixed",
    top: 0,
    left: "-8px",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    padding: "30px",
  };

  return (
    <Container maxWidth="xs" style={cStyle}>
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Rubik, sans-serif",
            color: "#1D2226",
            fontSize: "26px",
            fontWeight: "700",
            letterSpacing: "-1.5px",
            maxWidth: "200px",
          }}
        >
          Signin to your PopX account
        </Typography>

        <TextField id="fname" size="small" label="Full Name" required />
        <TextField id="pnumber" size="small" label="Phone Number" required />
        <TextField
          id="email"
          size="small"
          label="Email Address"
          type="email"
          required
        />
        <TextField
          id="password"
          size="small"
          label="Password"
          type="password"
          required
        />
        <TextField id="cname" size="small" label="Company Name" required />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Are you an Agency*
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            row
            required
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          style={{
            marginTop:"150px",
            backgroundColor: "#6C25FF",
            color: "#FFFFFF",
            fontSize: "14px",
            textTransform: "none",
          }}
        >
          <Link
            to={"/acountsetting"}
            style={{
              fontFamily: "Rubik, sans-serif",
              color: "inherit",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            {" "}
            Create Account{" "}
          </Link>
        </Button>
      </Stack>
    </Container>
  );
}

export default CreateAccount;
