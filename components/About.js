import { Col, Container, Row } from "reactstrap";

export default function About(){
    return (
        <section className="section bg-light" id="about">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="title text-center mb-5">
                <h3 className="font-weight-normal text-dark font-title">Tentang <span className="text-warning">Kami</span></h3>
                <p className="text-muted font-desc">Telematika</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
                <h2 className="font-weight-light line-height-1_6 text-dark mb-4 font-desc">
                    Lorem ipsum has been the insdustrys standard dummy text
                </h2>
            </Col>            
            <Col md={{ size:7, offset:1 }}>
                <Row>
                    <Col md={6}>
                        <h6 className="text-dark font-weigth-lightf-20 mb-3 font-title">Our Mission</h6>
                        <p className="text-muted font-weight-light font-desc">Lorem Ipsum has been the industrys standard dummt text ever since the 1500s, whew an unknown printer rook a galley of type</p>
                    </Col>
                    <Col md={6}>
                    <h6 className="text-dark font-weigth-lightf-20 mb-3 font-title">Our Mission</h6>
                        <p className="text-muted font-weight-light font-desc">Lorem Ipsum has been the industrys standard dummt text ever since the 1500s, whew an unknown printer rook a galley of type</p>
                    </Col>
                </Row>
            </Col>
            
          </Row>
        </Container>
      </section>
    );
}