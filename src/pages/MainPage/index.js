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
                                            <a classNameName="navbar-brand page-scroll sticky-logo" href="index.html">
                                                <h1><span>e</span>Business</h1>
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
                                                    <a className="page-scroll" href="#about">About</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#services">Services</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#team">Team</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#portfolio">Portfolio</a>
                                                </li>

                                                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Drop Down<span className="caret"></span></a>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li><a >Drop Down 1</a></li>
                                                        <li><a >Drop Down 2</a></li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a className="page-scroll" href="#blog">Blog</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#contact">Contact</a>
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

                {/*<!-- Start Slider Area -->*/}
                <div id="home" className="slider-area">
                    <div className="bend niceties preview-2">
                        <div id="ensign-nivoslider" className="slides">
                            <img src="img/slider/slider1.jpg" alt="" title="#slider-direction-1" />
                            <img src="img/slider/slider2.jpg" alt="" title="#slider-direction-2" />
                            <img src="img/slider/slider3.jpg" alt="" title="#slider-direction-3" />
                        </div>

                        {/*<!-- direction 1 -->*/}
                        <div id="slider-direction-1" className="slider-direction slider-one">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content">
                                            {/*<!-- layer 1 -->*/}
                                            <div className="layer-1-1 hidden-xs wow slideInDown" data-wow-duration="2s" data-wow-delay=".2s">
                                                <h2 className="title1">The Best Business Information </h2>
                                            </div>
                                            {/*<!-- layer 2 -->*/}
                                            <div className="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                                                <h1 className="title2">We're In The Business Of Helping You Start Your Business</h1>
                                            </div>
                                            {/*<!-- layer 3 -->*/}
                                            <div className="layer-1-3 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                                <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                                                <a className="ready-btn page-scroll" href="#about">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- direction 2 -->*/}
                        <div id="slider-direction-2" className="slider-direction slider-two">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content text-center">
                                            {/* <!-- layer 1 -->*/}
                                            <div className="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                                <h2 className="title1">The Best Business Information </h2>
                                            </div>
                                            {/*<!-- layer 2 -->*/}
                                            <div className="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                                                <h1 className="title2">We're In The Business Of Get Quality Business Service</h1>
                                            </div>
                                            {/*<!-- layer 3 -->*/}
                                            <div className="layer-1-3 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                                <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                                                <a className="ready-btn page-scroll" href="#about">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- direction 3 -->*/}
                        <div id="slider-direction-3" className="slider-direction slider-two">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content">
                                            {/*<!-- layer 1 -->*/}
                                            <div className="layer-1-1 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                                <h2 className="title1">The Best business Information </h2>
                                            </div>
                                            {/*<!-- layer 2 -->*/}
                                            <div className="layer-1-2 wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">
                                                <h1 className="title2">Helping Business Security  and Peace of Mind for Your Family</h1>
                                            </div>
                                            {/*<!-- layer 3 -->*/}
                                            <div className="layer-1-3 hidden-xs wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                                <a className="ready-btn right-btn page-scroll" href="#services">See Services</a>
                                                <a className="ready-btn page-scroll" href="#about">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Slider Area -->*/}

                {/*<!-- Start About area -->*/}
                <div id="about" className="about-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>About eBusiness</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*<!-- single-well start-->*/}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-left">
                                    <div className="single-well">
                                        <a href="#">
                                            <img src="img/about/1.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- single-well end-->*/}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-middle">
                                    <div className="single-well">
                                        <a href="#">
                                            <h4 className="sec-head">project Maintenance</h4>
                                        </a>
                                        <p>
                                            Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure
    </p>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check"></i> Interior design Package
      </li>
                                            <li>
                                                <i className="fa fa-check"></i> Building House
      </li>
                                            <li>
                                                <i className="fa fa-check"></i> Reparing of Residentail Roof
      </li>
                                            <li>
                                                <i className="fa fa-check"></i> Renovaion of Commercial Office
      </li>
                                            <li>
                                                <i className="fa fa-check"></i> Make Quality Products
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

                {/*<!-- Start Service area -->*/}
                <div id="services" className="services-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline services-head text-center">
                                    <h2>Our Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="services-contents">
                                {/*<!-- Start Left services -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="about-move">
                                        <div className="services-details">
                                            <div className="single-services">
                                                <a className="services-icon" href="#">
                                                    <i className="fa fa-code"></i>
                                                </a>
                                                <h4>Expert Coder</h4>
                                                <p>
                                                    will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
        </p>
                                            </div>
                                        </div>
                                        {/*<!-- end about-details -->*/}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="about-move">
                                        <div className="services-details">
                                            <div className="single-services">
                                                <a className="services-icon" href="#">
                                                    <i className="fa fa-camera-retro"></i>
                                                </a>
                                                <h4>Creative Designer</h4>
                                                <p>
                                                    will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
        </p>
                                            </div>
                                        </div>
                                        {/*<!-- end about-details -->*/}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    {/*<!-- end col-md-4 -->*/}
                                    <div className=" about-move">
                                        <div className="services-details">
                                            <div className="single-services">
                                                <a className="services-icon" href="#">
                                                    <i className="fa fa-wordpress"></i>
                                                </a>
                                                <h4>Wordpress Developer</h4>
                                                <p>
                                                    will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
        </p>
                                            </div>
                                        </div>
                                        {/*<!-- end about-details -->*/}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    {/*<!-- end col-md-4 -->*/}
                                    <div className=" about-move">
                                        <div className="services-details">
                                            <div className="single-services">
                                                <a className="services-icon" href="#">
                                                    <i className="fa fa-camera-retro"></i>
                                                </a>
                                                <h4>Social Marketer </h4>
                                                <p>
                                                    will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
        </p>
                                            </div>
                                        </div>
                                        {/*<!-- end about-details -->*/}
                                    </div>
                                </div>
                                {/*<!-- End Left services -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    {/*<!-- end col-md-4 -->*/}
                                    <div className=" about-move">
                                        <div className="services-details">
                                            <div className="single-services">
                                                <a className="services-icon" href="#">
                                                    <i className="fa fa-bar-chart"></i>
                                                </a>
                                                <h4>Seo Expart</h4>
                                                <p>
                                                    will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
        </p>
                                            </div>
                                        </div>
                                        {/*<!-- end about-details -->*/}
                                    </div>
                                </div>
                                {/*<!-- End Left services -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    {/*<!-- end col-md-4 -->*/}
                                    <div className=" about-move">
                                        <div className="services-details">
                                            <div className="single-services">
                                                <a className="services-icon" href="#">
                                                    <i className="fa fa-ticket"></i>
                                                </a>
                                                <h4>24/7 Support</h4>
                                                <p>
                                                    will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
        </p>
                                            </div>
                                        </div>
                                        {/*<!-- end about-details -->*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Service area -->*/}

                {/*<!-- our-skill-area start -->*/}
                <div className="our-skill-area fix hidden-sm">
                    <div className="test-overly"></div>
                    <div className="skill-bg area-padding-2">
                        <div className="container">
                            {/*<!-- section-heading end -->*/}
                            <div className="row">
                                <div className="skill-text">
                                    {/*<!-- single-skill start -->*/}
                                    <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="95" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                                                <h3 className="progress-h4">Web Design</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- single-skill end -->*/}
                                    {/*<!-- single-skill start -->*/}
                                    <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="85" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                                                <h3 className="progress-h4">Graphics Design</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- single-skill end -->*/}
                                    {/*<!-- single-skill start -->*/}
                                    <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="75" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                                                <h3 className="progress-h4">Php Developer</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- single-skill end -->*/}
                                    {/*<!-- single-skill start -->*/}
                                    <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="65" data-linecap="round" data-width="175" data-bgcolor="#fff" data-fgcolor="#3EC1D5" data-thickness=".20" data-readonly="true" disabled />
                                                <h3 className="progress-h4">Java Script</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- single-skill end -->*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- our-skill-area end -->*/}

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

                {/*<!-- Start Wellcome Area -->*/}
                <div className="wellcome-area">
                    <div className="well-bg">
                        <div className="test-overly"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="wellcome-text">
                                        <div className="well-text text-center">
                                            <h2>Welcome To Our eBusiness</h2>
                                            <p>
                                                Busuness Lorem ipsum dolor sit amet, consectetur adipiscing elit.luctus est eget congue.
      </p>
                                            <div className="subs-feilds">
                                                <div className="suscribe-input">
                                                    <input type="email" className="email form-control width-80" id="sus_email" placeholder="Email" />
                                                    <button type="submit" id="sus_submit" className="add-btn width-20">Subscribe</button>
                                                    <div id="msg_Submit" className="h3 text-center hidden"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Wellcome Area -->*/}

                {/*<!-- Start team Area -->*/}
                <div id="team" className="our-team-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>Our special Team</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="team-top">
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div className="single-team-member">
                                        <div className="team-img">
                                            <a href="#">
                                                <img src="img/team/1.jpg" alt="" />
                                            </a>
                                            <div className="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h4>Jhon Mickel</h4>
                                            <p>Seo</p>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- End column -->*/}
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div className="single-team-member">
                                        <div className="team-img">
                                            <a href="#">
                                                <img src="img/team/2.jpg" alt="" />
                                            </a>
                                            <div className="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h4>Andrew Arnold</h4>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- End column -->*/}
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div className="single-team-member">
                                        <div className="team-img">
                                            <a href="#">
                                                <img src="img/team/3.jpg" alt="" />
                                            </a>
                                            <div className="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h4>Lellien Linda</h4>
                                            <p>Web Design</p>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- End column -->*/}
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div className="single-team-member">
                                        <div className="team-img">
                                            <a href="#">
                                                <img src="img/team/4.jpg" alt="" />
                                            </a>
                                            <div className="team-social-icon text-center">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h4>Jhon Powel</h4>
                                            <p>Seo Expert</p>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- End column -->*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Team Area -->*/}

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

                {/*<!-- Start portfolio Area -->*/}
                <div id="portfolio" className="portfolio-area area-padding fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>Our Portfolio</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*<!-- Start Portfolio -page -->*/}
                            <div className="awesome-project-1 fix">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="awesome-menu ">
                                        <ul className="project-menu">
                                            <li>
                                                <a href="#" className="active" data-filter="*">All</a>
                                            </li>
                                            <li>
                                                <a href="#" data-filter=".development">Development</a>
                                            </li>
                                            <li>
                                                <a href="#" data-filter=".design">Design</a>
                                            </li>
                                            <li>
                                                <a href="#" data-filter=".photo">Photoshop</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="awesome-project-content">
                                {/*<!-- single-awesome-project start -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12 design development">
                                    <div className="single-awesome-project">
                                        <div className="awesome-img">
                                            <a href="#"><img src="img/portfolio/1.jpg" alt="" /></a>
                                            <div className="add-actions text-center">
                                                <div className="project-dec">
                                                    <a className="venobox" data-gall="myGallery" href="img/portfolio/1.jpg">
                                                        <h4>Business City</h4>
                                                        <span>Web Development</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- single-awesome-project end -->*/}
                                {/* <!-- single-awesome-project start -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12 photo">
                                    <div className="single-awesome-project">
                                        <div className="awesome-img">
                                            <a href="#"><img src="img/portfolio/2.jpg" alt="" /></a>
                                            <div className="add-actions text-center">
                                                <div className="project-dec">
                                                    <a className="venobox" data-gall="myGallery" href="img/portfolio/2.jpg">
                                                        <h4>Blue Sea</h4>
                                                        <span>Photosho</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- single-awesome-project end -->*/}
                                {/*<!-- single-awesome-project start -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12 design">
                                    <div className="single-awesome-project">
                                        <div className="awesome-img">
                                            <a href="#"><img src="img/portfolio/3.jpg" alt="" /></a>
                                            <div className="add-actions text-center">
                                                <div className="project-dec">
                                                    <a className="venobox" data-gall="myGallery" href="img/portfolio/3.jpg">
                                                        <h4>Beautiful Nature</h4>
                                                        <span>Web Design</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- single-awesome-project end -->*/}
                                {/*<!-- single-awesome-project start -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12 photo development">
                                    <div className="single-awesome-project">
                                        <div className="awesome-img">
                                            <a href="#"><img src="img/portfolio/4.jpg" alt="" /></a>
                                            <div className="add-actions text-center">
                                                <div className="project-dec">
                                                    <a className="venobox" data-gall="myGallery" href="img/portfolio/4.jpg">
                                                        <h4>Creative Team</h4>
                                                        <span>Web design</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- single-awesome-project end -->*/}
                                {/*<!-- single-awesome-project start -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12 development">
                                    <div className="single-awesome-project">
                                        <div className="awesome-img">
                                            <a href="#"><img src="img/portfolio/5.jpg" alt="" /></a>
                                            <div className="add-actions text-center text-center">
                                                <div className="project-dec">
                                                    <a className="venobox" data-gall="myGallery" href="img/portfolio/5.jpg">
                                                        <h4>Beautiful Flower</h4>
                                                        <span>Web Development</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- single-awesome-project end -->*/}
                                {/*<!-- single-awesome-project start -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12 design photo">
                                    <div className="single-awesome-project">
                                        <div className="awesome-img">
                                            <a href="#"><img src="img/portfolio/6.jpg" alt="" /></a>
                                            <div className="add-actions text-center">
                                                <div className="project-dec">
                                                    <a className="venobox" data-gall="myGallery" href="img/portfolio/6.jpg">
                                                        <h4>Night Hill</h4>
                                                        <span>Photoshop</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- single-awesome-project end -->*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- awesome-portfolio end -->*/}
                {/*<!-- start pricing area -->*/}
                <div id="pricing" className="pricing-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>Pricing Table</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list">
                                    <h3>basic <br /> <span>$80 / month</span></h3>
                                    <ol>
                                        <li className="check">Online system</li>
                                        <li className="check cross">Full access</li>
                                        <li className="check">Free apps</li>
                                        <li className="check">Multiple slider</li>
                                        <li className="check cross">Free domin</li>
                                        <li className="check cross">Support unlimited</li>
                                        <li className="check">Payment online</li>
                                        <li className="check cross">Cash back</li>
                                    </ol>
                                    <button>sign up now</button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list active">
                                    <span className="saleon">top sale</span>
                                    <h3>standard <br /> <span>$110 / month</span></h3>
                                    <ol>
                                        <li className="check">Online system</li>
                                        <li className="check">Full access</li>
                                        <li className="check">Free apps</li>
                                        <li className="check">Multiple slider</li>
                                        <li className="check cross">Free domin</li>
                                        <li className="check">Support unlimited</li>
                                        <li className="check">Payment online</li>
                                        <li className="check cross">Cash back</li>
                                    </ol>
                                    <button>sign up now</button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list">
                                    <h3>premium <br /> <span>$150 / month</span></h3>
                                    <ol>
                                        <li className="check">Online system</li>
                                        <li className="check">Full access</li>
                                        <li className="check">Free apps</li>
                                        <li className="check">Multiple slider</li>
                                        <li className="check">Free domin</li>
                                        <li className="check">Support unlimited</li>
                                        <li className="check">Payment online</li>
                                        <li className="check">Cash back</li>
                                    </ol>
                                    <button>sign up now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End pricing table area -->*/}
                {/*<!-- Start Testimonials -->*/}
                <div className="testimonials-area">
                    <div className="testi-inner area-padding">
                        <div className="testi-overly"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    {/*<!-- Start testimonials Start -->*/}
                                    <div className="testimonial-content text-center">
                                        <a className="quate" href="#"><i className="fa fa-quote-right"></i></a>
                                        {/*<!-- start testimonial carousel -->*/}
                                        <div className="testimonial-carousel">
                                            <div className="single-testi">
                                                <div className="testi-text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue.consectetur adipiscing elit. Sed pulvinar luctus est eget congue.
          </p>
                                                    <h6>Boby</h6>
                                                </div>
                                            </div>
                                            {/*<!-- End single item -->*/}
                                            <div className="single-testi">
                                                <div className="testi-text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue.consectetur adipiscing elit. Sed pulvinar luctus est eget congue.
          </p>
                                                    <h6>Jhon</h6>
                                                </div>
                                            </div>
                                            {/*<!-- End single item -->*/}
                                            <div className="single-testi">
                                                <div className="testi-text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar luctus est eget congue.consectetur adipiscing elit. Sed pulvinar luctus est eget congue.
          </p>
                                                    <h6>Fleming</h6>
                                                </div>
                                            </div>
                                            {/*<!-- End single item -->*/}
                                        </div>
                                    </div>
                                    {/*<!-- End testimonials end -->*/}
                                </div>
                                {/*<!-- End Right Feature -->*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Testimonials -->*/}
                {/*<!-- Start Blog Area -->*/}
                <div id="blog" className="blog-area">
                    <div className="blog-inner area-padding">
                        <div className="blog-overly"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="section-headline text-center">
                                        <h2>Latest News</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/*<!-- Start Left Blog -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="single-blog">
                                        <div className="single-blog-img">
                                            <a href="blog.html">
                                                <img src="img/blog/1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="comments-type">
                                                <i className="fa fa-comment-o"></i>
                                                <a href="#">13 comments</a>
                                            </span>
                                            <span className="date-type">
                                                <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
        </span>
                                        </div>
                                        <div className="blog-text">
                                            <h4>
                                                <a href="blog.html">Assumenda repud eum veniam</a>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
      </p>
                                        </div>
                                        <span>
                                            <a href="blog.html" className="ready-btn">Read more</a>
                                        </span>
                                    </div>
                                    {/*<!-- Start single blog -->*/}
                                </div>
                                {/*<!-- End Left Blog-->*/}
                                {/*<!-- Start Left Blog -->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="single-blog">
                                        <div className="single-blog-img">
                                            <a href="blog.html">
                                                <img src="img/blog/2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="comments-type">
                                                <i className="fa fa-comment-o"></i>
                                                <a href="#">130 comments</a>
                                            </span>
                                            <span className="date-type">
                                                <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
        </span>
                                        </div>
                                        <div className="blog-text">
                                            <h4>
                                                <a href="blog.html">Explicabo magnam quibusdam.</a>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
      </p>
                                        </div>
                                        <span>
                                            <a href="blog.html" className="ready-btn">Read more</a>
                                        </span>
                                    </div>
                                    {/*<!-- Start single blog -->*/}
                                </div>
                                {/*<!-- End Left Blog-->*/}
                                {/*<!-- Start Right Blog-->*/}
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="single-blog">
                                        <div className="single-blog-img">
                                            <a href="blog.html">
                                                <img src="img/blog/3.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="blog-meta">
                                            <span className="comments-type">
                                                <i className="fa fa-comment-o"></i>
                                                <a href="#">10 comments</a>
                                            </span>
                                            <span className="date-type">
                                                <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
        </span>
                                        </div>
                                        <div className="blog-text">
                                            <h4>
                                                <a href="blog.html">Lorem ipsum dolor sit amet</a>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.
      </p>
                                        </div>
                                        <span>
                                            <a href="blog.html" className="ready-btn">Read more</a>
                                        </span>
                                    </div>
                                </div>
                                {/*<!-- End Right Blog-->*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Blog -->*/}
                {/*<!-- Start Suscrive Area -->*/}
                <div className="suscribe-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                                <div className="suscribe-text text-center">
                                    <h3>Welcome to our eBusiness company</h3>
                                    <a className="sus-btn" href="#">Get A quate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Suscrive Area -->*/}
                {/*<!-- Start contact Area -->*/}
                <div id="contact" className="contact-area">
                    <div className="contact-inner area-padding">
                        <div className="contact-overly"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="section-headline text-center">
                                        <h2>Contact us</h2>
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