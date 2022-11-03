import { Col, Container, Row } from "reactstrap";

export default function Hero(){

    return (
        <div className="section position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg="6">
                        <div className="pr-lg-5">
                            <p className="text-uppercase font-weight-medium f-14 mb-4 font-desc">
                                Landing Page Out Standing
                            </p>
                            <h1 className="mb-4 font-weight-normal line-height-1_4 font-title">
                                Simply dummy text of the printing 
                                 <span className="text-primary font-weight-medium"> Name </span>
                            </h1>
                            <p className="text-justify mb-4 pb-2 text-dark font-desc">
                                Lorem Ipsum has been the industyr's standard dummy text ever since the 1500s, when an uknumn printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <a href="#" className="btn btn-warning font-title">
                                Find Out How <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </div>
                    </Col>
                    <Col lg="6" id="logo-hilang">
                        <div className="mt-5 mt-lg-0">
                            <img 
                            src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=2000"
                            className="img-fluid mx-auto d-block"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}