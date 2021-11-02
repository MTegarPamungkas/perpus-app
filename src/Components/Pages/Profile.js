import {
    Box,
    Typography,
    useMediaQuery,
    Button,
    Grid,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
  import ChevronRightIcon from "@material-ui/icons/ChevronRight";
  import SchoolIcon from "@material-ui/icons/School";
  import BookmarksIcon from "@material-ui/icons/Bookmarks";
  import { Container, Row, Col,Card } from 'react-bootstrap';

  import gambar1 from './image/15.jpg';
  import yusma from './image/yusma.jpg';
  import tegar from './image/tegar.png';
  
  const About = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return (
      <div>
        <Box py={20} style={styles} textAlign="center">
          <br/>
          <h3>Daftar Kelompok Sundar Pichai</h3>
          <br/>
          <Container>
            <Row>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Sena Pratama</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                      Kakak Pembibing
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Akbar Nugraha Dimyanti</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                      Ketua Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Elis</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                      Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <br/>

          <Container>
            <Row>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Bagas Aqmal Febrianto</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                       Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={yusma} />
                  <Card.Body>
                    <Card.Title>Yusma Cantika Parhati</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Purwakarta, 16 Maret 2002
                    <Card.Text>
                      Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Eddy Ryansyah</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                      Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br/>
          <Container>
            <Row>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Divasetya Pratama Putri</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                    Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Muhammad Dimas Farid</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                    Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Selviana Putri Nabilah</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                    Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br/>
          <Container>
            <Row>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={tegar} />
                  <Card.Body>
                    <Card.Title>Muhammad Tegar Pamungkas</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                      Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Teuku Nurmansyah Puteh</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                      Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Tarida Grace Wahyuni Margaretha Sidabutar</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                    Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br/>
          <Container>
            <Row>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Muhammad Rafi</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                    Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Alfian Nursahbani</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                      Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Bintang Ilham Harjo Saputro</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                    Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <br/>
          <Container>
            <Row>
              <Col md={4}>
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" style={{ height:'20rem'}} src={gambar1} />
                  <Card.Body>
                    <Card.Title>Muhammad Rizki Arya Rifai</Card.Title>
                    <br/>
                    2110631170085
                    <br/>
                    Bogor, 24 Desember 2002
                    <Card.Text>
                    Anggota Kelompok
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Box>
        {isMobile ? (
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Books"
              >
                <ChevronLeftIcon />
                <Typography variant="button">Books</Typography>
                <SchoolIcon style={{ marginLeft: 15 }} />
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/Personal"
              >
                <BookmarksIcon style={{ marginRight: 15 }} />
                <Typography variant="button">Language</Typography>
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
  export default About;
  