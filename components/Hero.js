import { Col, Container, Row } from "reactstrap";

export default function Hero(){

    return (
        <div className="section position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg="6">
                        <div className="pr-lg-5">
                            <p className="text-uppercase font-weight-medium f-14 mb-4 font-desc">
                                Layanan Jasa 
                            </p>
                            <h1 className="mb-4 font-weight-normal line-height-1_4 font-title">
                                Buat Plaform Anda untuk Bisnis
                                 <span className="text-primary font-weight-medium"> Digital </span>
                            </h1>
                            <p className="text-justify mb-4 pb-2 text-dark font-desc">
                                Konsultasi dan Pengembangan Perangkat lunak untuk kesuksesan Digital Anda dan Berkembang Bersama Ciptakan Era digital Menyongsong Perkembangan Teknologi Industri 5.0
                            </p>
                            <a href="#" className="btn btn-warning font-title">
                                Cara Kerja Kami <span className="ml-2 right-icon">&#8594;</span>
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