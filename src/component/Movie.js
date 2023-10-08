import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import BangkukosongImage from "../assets/IMAGES/1/Bangkukosong.jpg"
import DIAmbangkematianImage from "../assets/IMAGES/1/DIAmbangkematian.jpg"
import CintaperrrtamaImage from "../assets/IMAGES/1/Cinta perrtama.jpg"
import hauntingImage from "../assets/IMAGES/1/haunting.jpg"
import GranTurismoImage from "../assets/IMAGES/1/GranTUrismo.jpg"
import TheMarvelsImage from "../assets/IMAGES/3/TheMarvels.jpg"
const Movie = () => {
    return (
        <div>
            <Container>
                <br />
                <br/>
                <h1 className="  text-center text-decoration-underline font-family
                align-items center p-4 m-3 mt-6 jason" href="#MOVIE FILMS"  >MOVIE FILMS</h1>
                <Row>
                    <Col md={4} className="movieWrapper" id="MOVIE FILMS">
                    <Card className="text-white movieImage ">
      <Image src={BangkukosongImage} alt="SSawx Image" className="image" />
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
      <Image src={DIAmbangkematianImage} alt="SSawx Image" className="image" />
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
      <Image src={CintaperrrtamaImage} alt="SSawx Image" className="image" />
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
      <Image src={hauntingImage} alt="SSawx Image" className="image" />
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
      <Image src={GranTurismoImage} alt="SSawx Image" className="image" />
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
      <Image src={TheMarvelsImage} alt="SSawx Image" className="image" />
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

export default Movie