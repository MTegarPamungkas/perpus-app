import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid,
    Container
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
  import {Card, Row, Col} from 'react-bootstrap';
  import ChevronRightIcon from "@material-ui/icons/ChevronRight";
  import HomeIcon from "@material-ui/icons/Home";
  import PersonIcon from "@material-ui/icons/Person";

  
  const Books = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  
    return (
      <div>
        <Box py={20} style={styles} textAlign="center">

          <br/>
          <h1>PILIH JENIS BUKU</h1>
          <br/>
          <Container>
            <Row className="justify-content-md-center">
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Novel",
                    state: [{id: 1, name: 'Novel',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg}>
                    <Card.Body >
                      <Card.Title>Novel</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <br/>
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Comic",
                    state: [{id: 1, name: 'Comic',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg}>
                    <Card.Body >
                      <Card.Title>Comic</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Biografi",
                    state: [{id: 1, name: 'Biografi',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg}>
                    <Card.Body >
                      <Card.Title>Biografi</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
            <br/>
            
            <Row className="justify-content-md-center">
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Kamus",
                    state: [{id: 1, name: 'Kamus',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg2}>
                    <Card.Body >
                      <Card.Title>Kamus</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Panduan",
                    state: [{id: 1, name: 'Panduan',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg2}>
                    <Card.Body >
                      <Card.Title>Panduan</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Fotografi",
                    state: [{id: 1, name: 'Fotografi',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg2}>
                    <Card.Body >
                      <Card.Title>Fotografi</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>

            <br/>
            <Row className="justify-content-md-center">
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Atlas",
                    state: [{id: 1, name: 'Atlas',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg3}>
                    <Card.Body >
                      <Card.Title>Atlas</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={3}>
              <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Ensiklopedia",
                    state: [{id: 1, name: 'Ensiklopedia',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg3}>
                    <Card.Body >
                      <Card.Title>Ensiklopedia</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Novelet",
                    state: [{id: 1, name: 'Novelet',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg3}>
                    <Card.Body >
                      <Card.Title>Novelet</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>

            <br/>
            <Row className="justify-content-md-center">
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Majalah",
                    state: [{id: 1, name: 'Majalah',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg4}>
                    <Card.Body >
                      <Card.Title>Majalah</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Karya Ilmiah",
                    state: [{id: 1, name: 'Karya Ilmiah',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg4}>
                    <Card.Body >
                      <Card.Title>Karya Ilmiah</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={3}>
                <Link style={{ textDecoration: 'none' }}
                  to={{
                    pathname: "/Books/Jenis/Buku Digital",
                    state: [{id: 1, name: 'Buku Digital',}] // your data array of objects
                  }}
                >
                  <Card style={cardbg4}>
                    <Card.Body >
                      <Card.Title>Buku Digital</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
          
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

  const styles = {
    color:'#000',

  }

  const cardbg = {
    background:'#4a8573',
    borderRadius:'12px',
    marginBottom:'5px',
    color:'#fff',
    textDecoration:'none'
    

  }
  const cardbg2 = {
    background:'#596c89',
    color:'#fff',
    borderRadius:'12px',
    marginBottom:'5px'

  }
  const cardbg3 = {
    background:'#6741ad',
    borderRadius:'12px',
    marginBottom:'5px',
    color:'#fff'

  }
  const cardbg4 = {
    background:'#3783c7',
    borderRadius:'12px',
    marginBottom:'5px',
    color:'#fff'

  }
  export default Books;
  