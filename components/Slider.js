const { type } = require('jquery');
var $ = require('jquery');
if(typeof window !== 'undefined'){
    window.$ = window.jQuery = require('jquery');
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
  });

export default function Slider(){

    const images = 
    [
        {
            image : "https://i.pinimg.com/originals/01/56/1c/01561cb25cc489ca503f6edaa961b090.png"
        }, 
        {
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Logo_Kota_Samarinda.png/1200px-Logo_Kota_Samarinda.png"
        }, 
        {
            image : "http://2.bp.blogspot.com/-XFQd83G5McA/Uxu9V3SG9PI/AAAAAAAAMlU/Wn2xM9Q30uY/s1600/Logo+Provinsi+Kalimantan+Timur.png"
        }, 
        {
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Coat_of_Arms_of_Regency_Kutai_Timur.png/363px-Coat_of_Arms_of_Regency_Kutai_Timur.png"
        }, 
        {
            image : "https://cdn.pixabay.com/photo/2016/08/15/18/19/toyota-1596082_960_720.png"
        }

    ];

    return (
        <section className="section" id="slider">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark font-title">Mitra  <span className="text-warning">Kami</span></h3>
                            <p className="text-muted font-desc">Berikut Adalah Beberapa Portofolio Terkait Mitra Kami yang Bekerja Sama</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <OwlCarousel>
                        {
                            images.map((gambar, key) =>
                            <div key={key} className="card card-white rounded align-items-center p-3 batasan full-width">                                
                                <Col key={key} lg={4}>                                
                                    <Image src={gambar.image} height={290} width={200} className="mt-2 justify-content-center" objectFit="contain"/>
                                </Col>
                            </div>                        
                            )
                        }                        
                    </OwlCarousel>
                </Row>
            </Container>
        </section>
    );
}