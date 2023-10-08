import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import SSawxImage from "../assets/IMAGES/2/SSawx.jpg"
import TheexorcistBelieverImage from "../assets/IMAGES/2/The exorcist Believer.jpg"
import TheexorcistImage from "../assets/IMAGES/2/The exorcist.jpg"
import Sherina2Image from "../assets/IMAGES/2/Sherina 2.jpg"
import RetributonImage from "../assets/IMAGES/2/Retribution.jpg"
import PawPatrolImage from "../assets/IMAGES/2/Paw Patrol.jpg"

const Trending = () => {
    return (
        <div>
            <Container >
                <br />
                <br/>
                <h1 className="text-white text-center text-decoration-underline font-family
                align-items center p-4 m-3 mt-6 jason " href="#TRENDINNG FILMS">TRENDING FILMS</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="Trending">
                    <Card className="text-white movieImage ">
      <Image src={SSawxImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">Saw X</Card.Title>
        <Card.Text className="text-left">
          <Button variant="danger"  className="border">D 17+</Button>
        </Card.Text>
        <Card.Text className="text-center">Saw X</Card.Text>
        </div>
        </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage ">
      <Image src={TheexorcistBelieverImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">Believer</Card.Title>
        <Card.Text className="text-left">
          <Button className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">Believer</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
        <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={TheexorcistImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">The Exorcist</Card.Title>
        <Card.Text className="text-left">
          <Button  className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">The Exorcist</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={Sherina2Image} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">Sherina 2</Card.Title>
        <Card.Text className="text-left">
          <Button variant="success"  className="border">SUNA</Button>
        </Card.Text>
        <Card.Text className="text-center">Sherina 2</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={PawPatrolImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">Paw Patrol</Card.Title>
        <Card.Text className="text-left">
          <Button  className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">SUNA</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={RetributonImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">Retribution </Card.Title>
        <Card.Text className="text-left">
          <Button  className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">Retribution</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
                </Row>
            </Container>
        </div>
    )
}


function myFunction() {
  return this;
}
export default Trending
