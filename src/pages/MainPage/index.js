import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import businessPic from '../../assets/online-shop.svg';
import clientPic from '../../assets/monitor.svg';
import mainPic from '../../assets/main.svg';
import infoPic from '../../assets/info.svg';
import logo from '../../assets/logo.png';

import './styles.css';


import "../../lib/nivo-slider/css/nivo-slider.css";
import "../../lib/owlcarousel/owl.carousel.css";//instalado
import "../../lib/owlcarousel/owl.transitions.css";
import "../../lib/font-awesome/css/font-awesome.min.css";
import 'animate.css';//instalado
import "../../lib/venobox/venobox.css";//instalado


import "../../css/nivo-slider-theme.css";


import "../../css/style.css";


import "../../css/responsive.css";


export default function MainPage({ history }) {
    const [cep, setCep] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();


    }

    return (


        <>


            <body data-spy="scroll" data-target="#navbar-example">

                

                <header>
                    {/*<!-- header-area start -->*/}
                    <div id="sticker" className="header-area">
                        <div classNameName="container">
                            <div classNameN="row">
                                <div className="col-md-12 col-sm-12">

                                    {/*<!-- Navigation -->*/}
                                    <nav className="navbar navbar-default">
                                        {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                            {/*<!-- Brand -->*/}
                                            <a className="navbar-brand page-scroll sticky-logo" href="index.html">
                                                <h1><span>Mercado</span>+</h1>
                                                {/*<!-- Uncomment below if you prefer to use an image logo -->*/}
                                                {/*<!-- <img src="img/logo.png" alt="" title=""> -->*/}
                                            </a>
                                        </div>
                                        {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                                        <div className="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                                            <ul className="nav navbar-nav navbar-right">
                                                <li className="active">
                                                    <a className="page-scroll" href="#home">Home</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#about">Quem Somos</a>
                                                </li>

                                                <li>
                                                    <a className="page-scroll" href="#about">Login de Estabelecimentos</a>
                                                </li>
                                                
                                                
                                                

                                                

                                                
                                                <li>
                                                    <a className="page-scroll" href="#contact">Contatos</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*<!-- navbar-collapse -->*/}
                                    </nav>
                                    {/*<!-- END: Navigation -->*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- header-area end -->*/}
                </header>
                {/*<!-- header end -->*/}

                

                {/*<!-- Start About area -->*/}
                <img src='logo' alt="" />
                <div id="about" className="about-area area-padding">
                
                    <div className="container">
                        <img className="logoType" src={logo} alt="" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>Quem somos</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*<!-- single-well start-->*/}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-left">
                                    <div className="single-well">
                                        <a href="#">
                                            
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- single-well end-->*/}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-middle">
                                    <div className="single-well">
                                        <a href="#">
                                            <h4 className="sec-head">Nossa origem</h4>
                                        </a>
                                        <p>
                                        Um dos negócios inovadores que está apostando em digitalizar o setor é o Mercado Mais. A startup surgiu em 2020, com a proposta de trazer comodidade nas compras do cliente e entregar na residência de escolha.
    </p>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i> Comodidade
      </li>
                                            <li>
                                                <i className="fa fa-check"></i> Rapidez
      </li>
                                            <li>
                                                <i className="fa fa-check"></i> Praticidade
      </li>
                                            
      
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- End col-->*/}
                        </div>
                    </div>
                </div>
                {/*<!-- End About area -->*/}

                

                

                {/*<!-- Faq area start -->*/}
                <div className="faq-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>Faq Question</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="faq-details">
                                    <div className="panel-group" id="accordion">
                                        {/*<!-- Panel Default -->*/}
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" className="active" data-parent="#accordion" href="#check1">
                                                        <span className="acc-icons"></span>Consectetur adipisicing elit.
            </a>
                                                </h4>
                                            </div>
                                            <div id="check1" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero
          </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- End Panel Default -->*/}
                                        {/*<!-- Panel Default -->*/}
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#check2">
                                                        <span className="acc-icons"></span> Dolore magnam quidem repellat.
            </a>
                                                </h4>
                                            </div>
                                            <div id="check2" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero aperiam sint nulla beatae eos.
          </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- End Panel Default -->*/}
                                        {/*<!-- Panel Default -->*/}
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#check3">
                                                        <span className="acc-icons"></span>Redug Lefes dolor sit.
            </a>
                                                </h4>
                                            </div>
                                            <div id="check3" className="panel-collapse collapse ">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero aperiam sint nulla beatae eos.
          </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- End Panel Default -->*/}
                                        {/*<!-- Panel Default -->*/}
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#check4">
                                                        <span className="acc-icons"></span>Maiores alias accusamus
            </a>
                                                </h4>
                                            </div>
                                            <div id="check4" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit. Aspernatur, tempore, commodi quas mollitia dolore magnam quidem repellat, culpa voluptates laboriosam maiores alias accusamus recusandae vero aperiam sint nulla beatae eos.
          </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- End Panel Default -->*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="tab-menu">
                                    {/*<!-- Nav tabs -->*/}
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="active">
                                            <a href="#p-view-1" role="tab" data-toggle="tab">Project</a>
                                        </li>
                                        <li>
                                            <a href="#p-view-2" role="tab" data-toggle="tab">Planning</a>
                                        </li>
                                        <li>
                                            <a href="#p-view-3" role="tab" data-toggle="tab">Success</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="p-view-1">
                                        <div className="tab-inner">
                                            <div className="event-content head-team">
                                                <h4>Project</h4>
                                                <p>
                                                    Redug Lares dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus in dolor dolores unde ab, libero quo. Aut, laborum sequi.
        </p>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci voluptas, praesentium architecto ducimus, doloribus fuga itaque omnis placeat.
        </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="p-view-2">
                                        <div className="tab-inner">
                                            <div className="event-content head-team">
                                                <h4>Planning</h4>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci voluptas, praesentium architecto ducimus, doloribus fuga itaque omnis.
        </p>
                                                <p>
                                                    Redug Lares dolor sit amet, consectetur adipisicing elit. Animi vero excepturi magnam ducimus adipisci voluptas, praesentium maxime necessitatibus in dolor dolores unde ab, libero quo. Aut.
        </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="p-view-3">
                                        <div className="tab-inner">
                                            <div className="event-content head-team">
                                                <h4>Success</h4>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci voluptas, praesentium architecto ducimus, doloribus fuga itaque omnis placeat.
        </p>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci voluptas, praesentium architecto ducimus, doloribus fuga itaque omnis.
        </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- end Row -->*/}
                    </div>
                </div>
                {/*<!-- End Faq Area -->*/}

                

                

                {/*<!-- Start reviews Area -->*/}
                <div className="reviews-area hidden-xs">
                    <div className="work-us">
                        <div className="work-left-text">
                            <a href="#">
                                <img src="img/about/2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="work-right-text text-center">
                            <h2>working with us</h2>
                            <h5>Web Design, Ready Home, Construction and Co-operate Outstanding Buildings.</h5>
                            <a href="#contact" className="ready-btn">Contact us</a>
                        </div>
                    </div>
                </div>
                {/*<!-- End reviews Area -->*/}

                
                
                
                {/*<!-- Start contact Area -->*/}
                <div id="contact" className="contact-area">
                    <div className="contact-inner area-padding">
                        <div className="contact-overly"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="section-headline text-center">
                                        <h2>Fale Conosco</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/*<!-- Start contact icon column -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <i className="fa fa-mobile"></i>
                                            <p>
                                                Call: +1 5589 55488 55
        <span>Monday-Friday (9am-5pm)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Start contact icon column -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <i className="fa fa-envelope-o"></i>
                                            <p>
                                                Email: info@example.com
        <span>Web: www.example.com</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Start contact icon column -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <i className="fa fa-map-marker"></i>
                                            <p>
                                                Location: A108 Adam Street
        <span>NY 535022, USA</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {/*<!-- Start Google Map -->*/}
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    {/*<!-- Start Map -->*/}
                                    {/*<!-- End Map -->*/}
                                </div>
                                {/* <!-- End Google Map -->*/}

                                {/*<!-- Start  contact -->*/}
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="form contact-form">
                                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                                        <div id="errormessage"></div>
                                        <form action="" method="post" role="form" className="contactForm">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                <div className="validation"></div>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                <div className="validation"></div>
                                            </div>
                                            <div className="text-center"><button type="submit">Send Message</button></div>
                                        </form>
                                    </div>
                                </div>
                                {/*<!-- End Left contact -->*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Contact Area -->*/}

                {/*<!-- Start Footer bottom Area -->*/}
                <footer>
                    <div className="footer-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <div className="footer-logo">
                                                <h2><span>e</span>Business</h2>
                                            </div>

                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                            <div className="footer-icons">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-google"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- end single footer -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <h4>information</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
      </p>
                                            <div className="footer-contacts">
                                                <p><span>Tel:</span> +123 456 789</p>
                                                <p><span>Email:</span> contact@example.com</p>
                                                <p><span>Working Hours:</span> 9am-5pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- end single footer -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <h4>Instagram</h4>
                                            <div className="flicker-img">
                                                <a href="#"><img src="img/portfolio/1.jpg" alt="" /></a>
                                                <a href="#"><img src="img/portfolio/2.jpg" alt="" /></a>
                                                <a href="#"><img src="img/portfolio/3.jpg" alt="" /></a>
                                                <a href="#"><img src="img/portfolio/4.jpg" alt="" /></a>
                                                <a href="#"><img src="img/portfolio/5.jpg" alt="" /></a>
                                                <a href="#"><img src="img/portfolio/6.jpg" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-area-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="copyright text-center">
                                        <p>
                                            &copy; Copyright <strong>eBusiness</strong>. All Rights Reserved
    </p>
                                    </div>
                                    <div className="credits">
                                        {/*<!--
      All the links in the footer should remain intact.
      You can delete the links only if you purchased the pro version.
      Licensing information: https://bootstrapmade.com/license/
      Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
    -->*/}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

                {/*<!-- JavaScript Libraries -->*/}
                <script src="lib/jquery/jquery.min.js"></script>
                <script src="lib/bootstrap/js/bootstrap.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/venobox/venobox.min.js"></script>
                <script src="lib/knob/jquery.knob.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/parallax/parallax.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/nivo-slider/js/jquery.nivo.slider.js" type="text/javascript"></script>
                <script src="lib/appear/jquery.appear.js"></script>
                <script src="lib/isotope/isotope.pkgd.min.js"></script>

                {/*<!-- Contact Form JavaScript File -->*/}
                <script src="contactform/contactform.js"></script>

                <script src="js/main.js"></script>
            </body>






        </>







    )
}