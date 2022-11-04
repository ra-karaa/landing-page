import { Col, Container, Row } from "reactstrap";

export default function About(){
    return (
        <section className="section bg-light" id="about">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="title text-center mb-5">
                <h3 className="font-weight-normal text-dark font-title">Tentang <span className="text-warning">Kami</span></h3>                
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
                <h2 className="font-weight-light line-height-1_6 text-dark mb-4 font-desc">
                    CV. SAMANTHA REZKY
                </h2>
            </Col>            
            <Col md={{ size:7, offset:1 }}>
                <Row>
                    <Col md={6}>
                        <h6 className="text-dark font-weigth-lightf-20 mb-3 font-title">Visi Kami</h6>
                        <p className="text-muted font-weight-light font-desc">Menjadi sebuah perusahaan telematika yang mampu bersaing secara global
                            sekaligus berkontribusi dalam pengabdian kepada masyarakat. </p>
                    </Col>
                    <Col md={6}>
                    <h6 className="text-dark font-weigth-lightf-20 mb-3 font-title">Misi Kami</h6>
                        <p className="text-muted font-weight-light font-desc">
                        Memberikan solusi yang optimal kepada mitra kerja dalam mengatasi berbagai permasalahan yang di hadapi mitra kerja di industri teknologi informatika , Serta 
                        Berusaha untuk mengubah mindset lingkungan atau daerah setempat untuk mempertimbangkan kesadaran akan kualitas sumber daya lokal.
                        </p>
                    </Col>
                </Row>
            </Col>
            
          </Row>
        </Container>
      </section>
    );
}