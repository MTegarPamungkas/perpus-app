import { Box, Typography, useMediaQuery, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PersonIcon from "@material-ui/icons/Person";

const Personal = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">Personal Page</Typography>
      </Box>
      {isMobile ? (
        <Box textAlign="left">
          <Button
            component={Link}
            variant="contained"
            color="primary"
            to="/Profile"
          >
            <ChevronLeftIcon />
            <Typography variant="button">Profile</Typography>
            <PersonIcon style={{ marginLeft: 15 }} />
          </Button>
        </Box>
      ) : (
        <> </>
      )}
    </div>
  );
};
export default Personal;
