import { Col, Container, Row } from "reactstrap";

export default function Service(){
    const services = 
    [
        {
            title : "Wesbite Aplikasi",
            desc : "Lorem Ipsum ",

        }, 
        {

            title : "Wesbite Company Profile",
            desc : "Lorem Ipsum",
        }, 
        {

            title : "Aplikasi Mobile",
            desc : "Lorem Ipsum",
        },
        {

            title : "Video Editing",
            desc : "Lorem Ipsum",
        },
        {

            title : "Desain Grapichs",
            desc : "Lorem Ipsum",
        },
        {

            title : "Desain Grapichs",
            desc : "Lorem Ipsum",
        }
    ];
    return(
        <section className="section" id="service">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark">
                                <span className="text-primary">Service</span>
                            </h3>
                            <p className="text-muted">Layanan Kami ialah sebuah jasa tentang pembuatan website</p>
                        </div>
                    </Col>
                </Row>
                <Row className="jutify-content-center">
                    {
                        services.map((service, key) => 
                            <Col key={key} lg={4} md={6} className="align-items-center">                                                            
                                    <div className="mb-3">
                                        <i className={service.icon}/>
                                    </div>
                                    <h5 className="text-dark font-weight-normal pt-1 mb-4">
                                        {service.title}
                                    </h5>
                                    <p className="text-muted">{service.desc}</p>                                    
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
}