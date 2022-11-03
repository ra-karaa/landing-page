import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Feature from '../components/Feature'
// import Service from '../components/Service'
import About from '../components/About'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <Layout pageTitle="Samantha Rezky">
      <Header/>
      <Hero/>
      <Feature/>
      {/* <Service/> */}
      <About/>
      <Slider/>
      <Footer/>      
    </Layout>
  )
}
