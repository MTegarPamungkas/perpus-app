import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
  import ChevronRightIcon from "@material-ui/icons/ChevronRight";
  import HomeIcon from "@material-ui/icons/Home";
  import PersonIcon from "@material-ui/icons/Person";
  
  const Books = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  
    return (
      <div>
        <Box py={20} textAlign="center">
          <Typography variant="h2">Books Page</Typography>
        </Box>
        {isMobile ? (
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/">
                <ChevronLeftIcon />
                <Typography variant="button">Home</Typography>
                <HomeIcon style={{ marginLeft: 15 }} />
              </Button>
              
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Profile"
              >
                <PersonIcon style={{ marginRight: 15 }} />
                <Typography variant="button">Profile</Typography>
                <ChevronRightIcon />
              </Button>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </div>
    );
  };
  export default Books;
  