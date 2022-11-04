import React, { useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import {BrowserView, MobileView} from 'react-device-detect';
import Aos from 'aos';
import 'aos/dist/aos.css';

function FeatureBox(props) {

    useEffect(()=> {
        Aos.init({duration: 2000});
    }, []);    
    
    return (
        <>
        <BrowserView>
        {
            props.features.map((feature, key) =>
            (feature.id % 2 !== 0)
                ?
                <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
                    <Col md={5}>
                        <div data-aos="fade-right">
                            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                        </div>
                    </Col>
                    <Col md={{ size:6, offset:1 }}>
                        <div className='mt-5 mt-sm-0 mb-4'>
                            <div className='my-4'>
                                <i className={feature.icon}/>
                            </div>
                            <h5 className='text-dark font-weigth-normal mb-3 pt-3 font-title'>{feature.title}</h5>
                            <p className='text-muted mb-3 f-15 font-desc'>{feature.desc}</p>
                            <a href={feature.link} className="f-16 btn btn-warning font-title">Selengkapnya
                                <span className='right-icon ml-2 mt-1'> &#8594; </span>
                            </a>
                        </div>
                    </Col>
                </Row>
                :
                <Row className='align-items-center mt-5' key={key} id="kanan-desktop">
                    <Col md={6}>
                        <div className='mb-4'>
                            <div className='my-4'>
                                <i className='mdi mdi-account-group'/>
                            </div>
                            <h5 className='text-dark font-weight-normal mb-3 pt-3 font-title'>{feature.title}</h5>
                            <p className='text-muted mb-3 f-15 font-desc'>{feature.desc}</p>
                            <a href={feature.link} className="f-16 btn btn-warning font-title">Selengkapnya
                                <span className='right-icon ml-2'> &#8594; </span>
                            </a>
                        </div>                        
                    </Col>
                    <Col md={{ size:5, offset:1 }} className="mt-5 mt-sm-0">
                        <div data-aos="fade-left">
                            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                        </div>
                    </Col>
                </Row>                
                
            )
        }
        </BrowserView>
        <MobileView>
        {
            props.features.map((feature, key) =>
            (feature.id % 2 !== 0)
                ?
                <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
                    <Col md={5}>
                        <div data-aos="fade-right">
                            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                        </div>
                    </Col>
                    <Col md={{ size:6, offset:1 }}>
                        <div className='mt-5 mt-sm-0 mb-4'>
                            <div className='my-4'>
                                <i className={feature.icon}/>
                            </div>
                            <h5 className='text-dark font-weigth-normal mb-3 pt-3 font-title'>{feature.title}</h5>
                            <p className='text-muted mb-3 f-15 font-desc'>{feature.desc}</p>
                            <a href={feature.link} className="f-16 btn btn-warning font-title">Selengkapnya
                                <span className='right-icon ml-2 mt-1'> &#8594; </span>
                            </a>
                        </div>
                    </Col>
                </Row>
                :
                <Row className='align-items-center mt-5' key={key} id="kanan-desktop">
                    <Col md={5} className="mt-5 mt-sm-0">
                        <div data-aos="fade-left">
                            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                        </div>
                    </Col>
                    <Col md={{size:6, offset:1}}>
                        <div className='mb-4'>
                            <div className='my-4'>
                                <i className='mdi mdi-account-group'/>
                            </div>
                            <h5 className='text-dark font-weight-normal mb-3 pt-3 font-title'>{feature.title}</h5>
                            <p className='text-muted mb-3 f-15 font-desc'>{feature.desc}</p>
                            <a href={feature.link} className="f-16 btn btn-warning font-title">Selengkapnya
                                <span className='right-icon ml-2'> &#8594; </span>
                            </a>
                        </div>                        
                    </Col>                    
                </Row>                
                
            )
        }
        </MobileView>
        </>
    );
}



export default function Feature(){
    const features = [
        {
            id : 1, img : "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=2000", 
            title : "Cepat Tanggap",
            desc : "Siap untuk Langsung datang Ke Lokasi saat di butuhkan dalam keadaan Mendesak, dan Membantu Menyelesaikan Masalah yang Sedang Terjadi", 
            link : "/"
            },
        {
            id : 2, 
            img : "https://img.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg?w=2000", 
            title : "Teknologi Terbaru", 
            desc : "Meyuguhkan Teknologi Terbaru untuk Platform digital Anda agar Dapat Bekerja Secara Maksimal , dan Fasting", 
            link : "/"
        },
        {
            id : 3, 
            img : "https://img.freepik.com/premium-vector/happy-business-colleagues-team-portrait_179970-1271.jpg?w=2000", 
            title : "Berkembang Bersama", 
            desc : "Bersama sama Berkembang dan Menghadirkan Trobosan - trobosan Teknologi Terbaru sesaui Kebutuhan Pasar yang Ada.", 
            link : "/"
        },
    ];
    return (
        <section className='section' id='feature'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={6} md={8}>
                        <div data-aos="fade-up" className='title text-center mb-5'>
                            <h3 className='font-weight-normal text-dark'>
                                <span className='text-warning font-title'>Layanan</span>                                
                            </h3>
                            <p className='text-muted font-desc'>
                                Layanan 7 / 24 Jam, Menyesuaikan kebutuhan dan Juga Selalu Memberikan dan Menghadirkan yang Terbaik.
                            </p>
                        </div>
                    </Col>
                </Row>
                <FeatureBox features={features}/>
            </Container>
        </section>
    );
}   

