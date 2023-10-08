import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import TheNunImage from "../assets/IMAGES/3/TheNun.jpg"
import ThepilotImage from "../assets/IMAGES/3/The pilot.jpg"
import ExpendImage from "../assets/IMAGES/1/Expend.jpg"
import JawaPocongImage from "../assets/IMAGES/3/JawaPocong.jpg"
import MISSIONRANIGANJImage from "../assets/IMAGES/3/MISSION RANIGANJ.jpg"
import TheHungerImage from "../assets/IMAGES/2/TheHungerGamex.jpg"


const Adventure= () => {
    return (
        <div>
            <Container>
                <br />
                <br/>
                <h1 className=" text-white text-center text-decoration-underline font-family
                align-items center p-4 m-3 mt-6 jason" href="#ADVENTURE FILMS" >ADVENTURE FILMS</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="Adventure">
                    <Card className="text-white movieImage ">
      <Image src={TheNunImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">The Nun 2</Card.Title>
        <Card.Text className="text-left">
         <Button variant="primary" className="align-items-center align-items-center border" >R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center" >The Nun 2</Card.Text>
        </div>
        </div>
    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="text-white movieImage ">
      <Image src={ThepilotImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">The Pilot</Card.Title>
        <Card.Text className="text-left">
           <Button variant="primary" className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">The Pilot</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
        <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={ExpendImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">The Expend 4bles</Card.Title>
        <Card.Text className="text-left">
          <Button variant="warning" className="border">D 17+</Button>
        </Card.Text>
        <Card.Text className="text-center">The Expend 4bles</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={JawaPocongImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">Jawa Pocong</Card.Title>
        <Card.Text className="text-left">
          <Button variant="primary" className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">Jawa Pocong </Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={MISSIONRANIGANJImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">MISSION RANI</Card.Title>
        <Card.Text className="text-left">
          <Button variant="primary" className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">MISSION RANIGANJ</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
    <Col md={4} className="movieWrapper">
         <Card className="text-white movieImage ">
      <Image src={TheHungerImage} alt="SSawx Image" className="image" />
      <div className="bg-dark">
        <div className="p-2 m-2">
        <Card.Title className="text-center">The Marvels</Card.Title>
        <Card.Text className="text-left">
          <Button variant="primary" className="border">R 13+</Button>
        </Card.Text>
        <Card.Text className="text-center">The Marvels</Card.Text>
        </div>
        </div>
    </Card>
    </Col>
                </Row>
            </Container>
      </div>
    )
}

export default Adventure
