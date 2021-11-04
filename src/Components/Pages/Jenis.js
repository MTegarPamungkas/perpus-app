import { Box } from "@material-ui/core";

import akuMencintaimu from "./Books/the-seven-spirits-of-god.pdf";
import jomblo from "./Books/Jomblo Autentik.pdf";
import theTriumphantChruch from "./Books/The Triumphant Church, Kenneth Hagin, 433pg.pdf";
import revolusiMalaikat from "./Books/Revolusi Malaikat 01.pdf";
import doraemonSpecial from "./Books/Doraemon Special 01.PDF";
import dragonball from "./Books/Dragon Ball 01.PDF";
import {Card, Row, Col, Container} from 'react-bootstrap';

import novel1 from "./Books/novel4.PNG";
import novel2 from "./Books/novel2.PNG";
import novel3 from "./Books/novel3.PNG";

import comic1 from "./Books/comic1.PNG";
import comic2 from "./Books/comic2.PNG";
import comic3 from "./Books/comic3.PNG";



const Jenis = (Props) => {
    const data = Props.match.params.nama;
  return (
    <div>
      <Box py={20} style={styles}>
      <h1 style={{textAlign:'center'}}>{Props.match.params.nama}</h1>
      {(() => {
        if (data==="Novel") {
          return (
            <div>  
                <Container>
                    <Row className="justify-content-md-center" style={{marginTop:"20px"}}>
                        <Col md={3}>
                            <a href={akuMencintaimu} target="_blank" style={{textDecoration:'none'}}>
                                <Card>
                                    <Card.Body >
                                    <Card.Img variant="top" style={{ height:'20rem'}} src={novel1} />
                                    <Card.Title style={{textAlign:'center',color:'#000', marginTop:'10px'}}>The Seven Spirits Of God</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col md={3}>
                            <a href={jomblo} target="_blank" style={{textDecoration:'none'}}>
                                <Card>
                                    <Card.Body >
                                    <Card.Img variant="top" style={{ height:'20rem'}} src={novel2} />
                                    <Card.Title style={{textAlign:'center',color:'#000', marginTop:'10px'}}>Jomblo Autentik</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col md={3}>
                            <a href={theTriumphantChruch} target="_blank" style={{textDecoration:'none'}}>
                                <Card>
                                    <Card.Body >
                                    <Card.Img variant="top" style={{ height:'20rem'}} src={novel3} />
                                    <Card.Title style={{textAlign:'center',color:'#000', marginTop:'10px'}}>The Triumphant Chruch</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>    
            </div>
          )
        } else if (data==="Comic") {
          return (
            <div>
                <Container>
                    <Row className="justify-content-md-center" style={{marginTop:"20px"}}>
                        <Col md={3}>
                            <a href={revolusiMalaikat} target="_blank" style={{textDecoration:'none'}}>
                                <Card>
                                    <Card.Body >
                                    <Card.Img variant="top" style={{ height:'20rem'}} src={comic1} />
                                    <Card.Title style={{textAlign:'center',color:'#000', marginTop:'10px'}}>Revolusi Malaikat 01</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col md={3}>
                            <a href={doraemonSpecial} target="_blank" style={{textDecoration:'none'}}>
                                <Card>
                                    <Card.Body >
                                    <Card.Img variant="top" style={{ height:'20rem'}} src={comic2} />
                                    <Card.Title style={{textAlign:'center',color:'#000', marginTop:'10px'}}>Doraemon Special 01</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>

                        <Col md={3}>
                            <a href={dragonball} target="_blank" style={{textDecoration:'none'}}>
                                <Card>
                                    <Card.Body >
                                    <Card.Img variant="top" style={{ height:'20rem'}} src={comic3} />
                                    <Card.Title style={{textAlign:'center',color:'#000', marginTop:'10px'}}>Dragon Ball 01</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container> 
            </div>
          )
        }
        else {
          return (
            <h3 style={{textAlign:'center', marginTop:'40px'}}>Buku Jenis {data} Belum Tersedia</h3>
          )
        }
      })()}
      </Box>
    </div>
  );
};

const styles = {
    color:'#000',
    marginTop:'20px',
    margin:"10px"
}
export default Jenis;
