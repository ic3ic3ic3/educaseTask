import { Typography, Container, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function AccountSetting() {
  const cStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF ",
    padding: "0px"
  };

  const dottedDividerStyle = {
    borderBottom: '1px dashed  #888', 
    width: '100%',
    margin: '8px 0', 
  };

  return (
    <Container style={cStyle}>
      <Typography
        variant="h6"
        style={{ 
        color:"#1D2226",
        fontSize:"18px",
        fontFamily: "Rubik, sans-serif",
        height: '56px',
        padding: '0px 15px',
        fontWeight: "500",
        display: 'flex',
        alignItems: 'center', }}
      >
        {" "}
        Account Settings{" "}
      </Typography>
      <Container  style={{ backgroundColor: "#F7F8F9" ,
      width: "100%", 
      height: "100%",
      }}
>
        <Stack
          direction="row"
          spacing={2}
        
        >
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 56, height: 56 }}
            style={{margin:"20px 0px 0px 0px"}}

            src="../src/assets/images/propic.png"
          />

          <Stack direction="column" style={{margin:"20px 0px 0px 15px"}}
>
            <Typography variant="subtitle2" style={{fontWeight:"600"}}>Marry Doe </Typography>
            <Typography variant="subtitle2"> Marry@Gmail.Com </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" style={{margin:"10px 0px 0px 0px"}}>
          {" "}
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </Typography>
        <div style={dottedDividerStyle}></div>

      </Container>
    </Container>
  );
}

export default AccountSetting;
