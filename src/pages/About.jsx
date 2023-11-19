import React from 'react'
import "../styles/about.css"

import heroImg from "../assets/images/borobudur.jpg"
import heroImg2 from "../assets/images/hero-img01.jpg"
import heroImg3 from "../assets/images/hero-img01.jpg"
import heroImg4 from "../assets/images/hero-img01.jpg"
import heroImg5 from "../assets/images/hero-img01.jpg"
import heroImg6 from "../assets/images/hero-img01.jpg"
import CommonSection from '../shared/CommonSection'
import logo from "../assets/images/logo.png"

const About = () => {
  return (
    <>
     <CommonSection title={"About Us"} />
    <div class="about-box-main">
        <div class="container">
            <div class="row">
				<div class="col-lg-3 mt-5">
                    <div class="banner-frame"> <img class="img-fluid" src={logo} alt="" />
                    </div>
                </div>
                <div class="col-lg-9 mt-5">
                    <h2 class="noo-sh-title-top mb-5">Tentang <span>TravelWorld</span></h2>
                    <p>Selamat datang website TravelWorld, tempat di mana petualangan tak terlupakan dimulai! Kami dengan bangga      mempersembahkan layanan tur kami yang mengundang Anda untuk menjelajahi destinasi menakjubkan di seluruh dunia dengan cara yang belum pernah Anda alami sebelumnya.
                    <br /><br />
                    Kami menghadirkan pengalaman wisata yang melebihi ekspektasi Anda. Dengan panduan ahli lokal yang berpengetahuan luas, setiap perjalanan menjadi lebih dari sekadar kunjungan biasa. Anda akan terjun ke dalam budaya lokal, menjelajahi tempat-tempat tersembunyi, dan merasakan pesona unik setiap destinasi.
                    <br /><br />
                    Situs web kami menawarkan beragam destinasi yang sesuai dengan berbagai minat dan keinginan Anda. Apakah Anda pencinta alam, penggemar sejarah, atau mencari petualangan kuliner, kami memiliki pilihan tur yang memikat di setiap sudut dunia.
                    <br /><br />
                    Dengan interface pengguna yang ramah, proses pemesanan kami sangat mudah dan cepat. Kami memprioritaskan keamanan dan kenyamanan Anda, sehingga Anda dapat fokus sepenuhnya pada pengalaman wisata tanpa khawatir.</p>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-sm-6 col-lg-4">
                    <div class="service-block-inner">
                        <h3>Aman dan Terpercaya</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="service-block-inner">
                        <h3>Profesional</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="service-block-inner">
                        <h3>Mementingkan Keyamanan Pelanggan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

    </>
  )
}

export default About