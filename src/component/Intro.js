import {Container, Row, Col ,Button} from "react-bootstrap"
const Intro = () =>
{
    return (
        <div className="intro">
        <Container className="text-white d-flex text-center justify-content-center
        align-items-center">
          <Row>
            <Col>
            <div className="title">FILMS COMING SOON</div>
            <div className="title"> SEGERA DATANG </div>
            <div className="introButton nt-4 text-center">
            <Button variant="dark" href="#Lihat semua List">Lihat semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro