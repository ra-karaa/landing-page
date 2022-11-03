import { Col, Container, Row } from "reactstrap";

export default function Footer(){
    return (
        <section className="footer bg-warning align-items-center justiy-ceontent-center mt-3">
            <Container>
                <Row className="mt-2">
                    <Col md={12}>
                        <div className="text-center text-black font-title">
                            <p className="mb-0 f-15"> 2022 &copy; Fietra Prabaskara</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );    
}