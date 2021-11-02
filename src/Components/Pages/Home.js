import { Box, Typography, useMediaQuery, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SchoolIcon from "@material-ui/icons/School";
import { Carousel,Container, Row, Col } from 'react-bootstrap';

import gambar1 from './image/12.jpg';
import gambar2 from './image/13.jpg';
import gambar3 from './image/15.jpg';


const Home = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div>
      <Box py={20}>
      <Carousel>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={gambar3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={gambar2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src={gambar1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br/>
      <p style={{textAlign:'center',fontSize:"200%",color:'#000'}}>Selamat Datang</p><hr/>
      <hr style={{background:'#000'}}/>
      <Container fluid style={{marginTop:'10vh',marginBottom:'10vh'}}>
        <Row className="justify-content-md-center">
          <Col md={5} style={{textAlign:"center",color:'#000'}}>"Kamu calon konglomerat ya? kamu harus rajin belajar dan membaca, tapi jangan ditelan sendiri. Berbagilah dengan teman-teman yang tak dapat pendidikan." - Wiji Thukul</Col>
        </Row>
      </Container>
      <hr style={{background:'#000'}}/>
      <Container fluid style={{marginTop:'10vh',marginBottom:'10vh'}}>
        <Row className="justify-content-md-center">
          <Col md={5} style={{textAlign:"center",color:'#000'}}>"Saya membaca buku dan berbicara dengan orang lain. Maksud saya, itulah cara seseorang belajar sesuatu. Ada banyak buku bagus di luar sana dan ada banyak orang pintar." - Elon Musk</Col>
        </Row>
      </Container>
      <hr style={{background:'#000'}}/>
      <Container style={{marginTop:'10vh',marginBottom:'10vh'}}>
        <Row className="justify-content-md-center">
          <Col md={5} style={{textAlign:"center",color:'#000'}}>"Orang yang tidak banyak membaca pasti tidak banyak tahu. Orang yang tidak banyak tahu sangat dekat dengan kebodohan. Dan kebodohan akan sangat dekat dengan kemiskinan." - Helmy Yahya</Col>
        </Row>
      </Container>
      </Box>
      {isMobile ? (
        <Box textAlign="right">
          <Button
            component={Link}
            variant="contained"
            color="primary"
            to="/Books"
          >
            <SchoolIcon style={{ marginRight: 15 }} />
            <Typography variant="button">Books</Typography>
            <ChevronRightIcon />
          </Button>
        </Box>
      ) : (
        <> </>
      )}
    </div>

  );
};
export default Home;
