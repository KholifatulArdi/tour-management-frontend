import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import experienceImg from "../assets/images/experience.png"

import Subtitle from "./../shared/Subtitle"

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/featured/FeaturedTourList';
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery"
import Testimonial from '../components/testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  {/*hero section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling open the door to creating {" "} 
              <span className='highlight'> memories</span></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quam accusantium ipsum sit odit laudantium neque totam culpa officiis, magni consequatur qui sapiente exercitationem aspernatur commodi natus adipisci soluta! Nam</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4 hero__video-box">
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    {/*hero section start */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/*featured tour section start */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__rout-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/*featured tour section end */}

    {/*experience section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
            <h2>With out all experience <br /> we will serve you</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam <br /> maiores odio adipisci vero reiciendis excepturi impedit provident </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12K+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>3K+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>10K+</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*experience section end */}

    {/* gallery section start */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* gallery section end */}

    {/*testimonial section start */}
    <section>
      <Container>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'} />
          <h2 className='testimonial__title'>What our fans say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonial />
        </Col>
      </Container>
    </section>
    {/*testimonial section end */}
    <Newsletter />
  </>
}

export default Home