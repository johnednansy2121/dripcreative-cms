---
templateKey: general
site_title: Drip Creative
description: Drip Creative site created using Gatsby + Netlify CMS
favicon: /img/icon.png
logo:
  alt: Drip Creative
  image: /img/logo.svg
styles: >
  @import
  url("https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500&display=swap");


  body {
    font-family: "Poppins", sans-serif;
    color: #828282;
    background-color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    color: #0b0b0b;
  }


  h2 {
    font-size: 24px;
  }


  h2.hero-title, h2.title {
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    letter-spacing: 0.04em;
    margin-bottom: 50px;
    max-width: 700px;
  }


  h2 .highlight {
    color: #3582c4;
  }


  h3.title {
    color: #828282;
    font-style: italic;
    font-weight: 300;
    font-size: 22px;
    margin-bottom: 75px;
  }


  p {
    letter-spacing: 1px;
    font-weight: normal;
  }


  .menu-toggle {
    display: inline-block;
    width: 36px;
    height: 20px;
    position: relative;
    cursor: pointer;
  }

  .menu-toggle.toggle-close {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .menu-toggle.toggle-close span {
    height: 0;
  }

  .menu-toggle.toggle-close span:before {
    background-color: #fff;
    top: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    transform: rotatez(45deg);
  }

  .menu-toggle.toggle-close span:after {
    background-color: #fff;
    top: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    transform: rotatez(-45deg);
  }

  .menu-toggle span {
    width: 36px;
    height: 3px;
    background-color: #121926;
    position: absolute;
    top: 8px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
    pointer-events: none;
  }

  .menu-toggle span:before, .menu-toggle span:after {
    content: "";
    width: 36px;
    height: 3px;
    background-color: #121926;
    position: absolute;
    -webkit-border-radius: 100px;
    border-radius: 100px;
  }

  .menu-toggle span:before {
    top: -8px;
  }

  .menu-toggle span:after {
    bottom: -8px;
  }


  button {
    padding: 11px 24px;
    font-size: 12px;
  }

  button:hover, button .active {
    transform: translatey(-5px);
  }


  input[type=submit] {
    font-size: 12px;
  }

  input[type=submit]:hover, input[type=submit].active, input[type=submit]:hover
  {
    transform: translatey(-5px);
  }


  input[type=button] {
    font-size: 12px;
  }

  input[type=button] .active {
    transform: translatey(-5px);
  }


  main {
    margin-top: 105px;
  }


  .btn {
    padding: 11px 24px;
    cursor: pointer;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    font-family: "Poppins", sans-serif;
    display: inline-block;
    text-transform: uppercase;
    font-size: 12px;
    -webkit-appearance: none;
    border: none;
    outline: none;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    font-weight: 600;
    min-width: 130px;
    transition: 150ms;
  }

  .btn:hover, .btn .active {
    transform: translatey(-5px);
  }

  .btn.btn-glass {
    cursor: pointer;
    touch-action: manipulation;
    font-family: "Poppins", sans-serif;
    display: inline-block;
    text-transform: uppercase;
    font-size: 12px;
    -webkit-appearance: none;
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: 600;
    min-width: 130px;
    background: transparent;
    box-shadow: inset 0 0 0 2px #121926;
    color: #121926;
  }

  .btn.btn-glass:hover, .btn.btn-glass:focus {
    background: #121926;
    box-shadow: none;
    color: #fff;
  }

  .btn.btn-gray {
    box-shadow: inset 0 0 0 2px #828282;
    color: #828282;
  }

  .btn.btn-gray:hover, .btn.btn-gray:focus {
    background: #828282;
    box-shadow: none;
    color: #fff;
  }


  .header {
    padding-top: 70px;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 99;
    top: 0;
    transition: 100ms;
    background-color: #f9fafe;
  }


  .logo img {
    display: block;
    max-width: 235px;
    width: 100%;
  }


  .sidenav {
    width: 300px;
    height: 100%;
    background-color: #0087e6;
    position: fixed;
    left: -301px;
    top: 0;
    padding: 100px 0;
    z-index: 99999;
    transition: 100ms;
  }

  .sidenav.open {
    left: 0;
    transition: 100ms;
  }

  .sidenav a {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    width: 100%;
    padding: 15px 35px;
    position: relative;
    letter-spacing: 0.04em;
  }

  .sidenav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: 100ms;
  }


  .sidenav .menu-sub {
    position: relative;
  }

  .sidenav .menu-sub .sub-menu {
    height: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transition: 150ms;
  }

  .sidenav .menu-sub .sub-menu a {
    font-size: 11px;
    padding: 10px 35px 10px 45px;
  }

  .sidenav .menu-sub.active .sub-menu {
    height: auto;
    overflow: unset;
    pointer-events: auto;
    opacity: 1;
    -webkit-transition: 150ms;
    -o-transition: 150ms;
    transition: 150ms;
  }

  .sidenav .menu-sub .menu-toggle-sub {
    content: "+";
    width: 50px;
    background: #0000000a;
    text-align: center;
    position: absolute;
    right: 0;
    color: #fff;
    top: 0;
    height: 54px;
    padding: 12px;
    font-size: 18px;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }


  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0087e64d;
    z-index: 4;
    opacity: 0;
    pointer-events: none;
  }

  .overlay.active {
    opacity: 1;
    pointer-events: auto;
  }


  .shadow {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1) !important;
  }


  section {
    padding: 95px 0;
    position: relative;
  }

  section.projects {
    background-color: #3582c4;
    background-image: url("https://dc19.dripdev.com/wp-content/themes/dc/assets/images/bg-tex.png");
  }

  section.curve {
    padding-bottom: 170px;
  }

  section.curve:after {
    background-image: url("https://dc19.dripdev.com/wp-content/themes/dc/assets/images/header-bg.svg");
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 76px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  section.hero {
    background-color: #f9fafe;
  }

  section.hero p.desc {
    margin-bottom: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #121926;
    max-width: 450px;
  }

  section.hero .hero-image img {
    max-width: 100%;
  }

  section.business-needs {
    background-color: #fff;
    text-align: center;
  }

  section.business-needs .section-header {
    margin-bottom: 90px;
  }

  section.business-needs .section-header .desc {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #121926;
    margin-top: 10px;
  }

  section.business-needs h2.title {
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    margin: auto;
  }

  section.business-needs .item {
    background-color: #f9fafe;
    margin-bottom: 30px;
    padding: 94px 15px;
    transition: 150ms;
  }

  section.business-needs .item:hover {
    transform: translatey(-5px);
  }

  section.business-needs .item h3.title {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #3582c4;
    margin-bottom: 70px;
    font-style: normal;
  }

  section.business-needs .item p {
    color: #121926;
    line-height: 19px;
    margin: 110px auto auto;
    font-size: 13px;
    font-weight: 500;
    max-width: 300px;
  }

  section.business-needs .item img {
    max-width: 416px;
    width: 100%;
    min-height: 114px;
  }

  section.business-needs .item.large h3.title {
    max-width: 300px;
    margin: auto auto 70px auto;
  }

  section.business-needs .item.small {
    padding: 28px 15px;
    letter-spacing: 0.05em;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 30px;
    min-height: 48px;
  }

  section.business-needs .item.small h3.title {
    letter-spacing: 0.05em;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 30px;
    min-height: 48px;
  }

  section.business-needs .item.small p {
    max-width: 250px;
    margin-top: 30px;
    min-height: 58px;
  }

  section.business-needs .item.small img {
    min-height: 114px;
    max-width: 150px;
  }

  section.projects {
    padding-top: 170px;
  }

  section.projects .projectSlider {
    padding: 0 70px;
  }

  section.projects .projectSlider .projects-arrow {
    background-color: transparent;
    transform: scale(0.8);
    box-shadow: 0 0 0 2px #dde5ee;
    font-size: 32px;
    padding: 12px 22px;
    top: 33%;
    position: absolute;
    color: #fff;
    border-radius: 100%;
  }

  section.projects .projectSlider .projects-arrow:hover {
    transform: scale(1);
    transition: 100ms;
    cursor: pointer;
  }

  section.projects .projectSlider .projects-arrow.slide-prev {
    left: 0;
  }

  section.projects .projectSlider .projects-arrow.slide-next {
    right: 0;
  }

  section.projects .projectSlider .slide-item {
    min-height: 1px;
    vertical-align: middle;
    display: inline-block;
    -webkit-backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  section.projects .projectSlider .slide-item .slide {
    display: flex;
    justify-content: space-around;
  }

  section.projects .projectSlider .slide-item .slide .thumb {
    position: relative;
    margin-right: 20px;
  }

  section.projects .projectSlider .slide-item .slide .info {
    padding-top: 30px;
    display: block;
  }

  section.projects .projectSlider .slide-item .slide .info .logo {
    filter: brightness(0) invert(1);
    max-width: 270px;
    margin-bottom: 50px;
  }

  section.projects .projectSlider .slide-item .slide .info .desc {
    color: #fff;
    max-width: 300px;
  }

  section.projects .projectSlider .slide-item .slide .info .btn {
    margin-top: 35px;
    background: transparent;
    box-shadow: inset 0 0 0 2px #fff;
    color: #fff;
  }

  section.projects .projectSlider .slide-item .slide .info .btn:hover {
    background: #fff;
    color: #000;
  }

  section.projects .projectSlider .slide-item .slide .info .btn:hover .btn-more
  {
    filter: brightness(1) invert(1);
  }

  section.projects .projectSlider .slide-item .slide .info .btn .btn-more {
    display: inline-block;
  }

  section.trusted-by {
    background-color: #f9fafe;
    text-align: center;
  }

  section.trusted-by .section-content h2 {
    font-size: 16px;
    color: #828282;
    margin-bottom: 40px;
  }

  section.trusted-by .section-content .trusted-brand-container .trusted-brand {
    width: 106.667px !important;
  }

  section.trusted-by .section-content .trusted-brand-container .trusted-brand
  img {
    margin: 0 auto;
    max-width: 100%;
  }


  .section-contact .section-header {
    margin-bottom: 90px;
  }

  .section-contact .section-header h2.title {
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 0;
  }

  .section-contact .section-header .desc {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #121926;
    margin-top: 10px;
  }

  .section-contact .group {
    position: relative;
    margin-bottom: 45px;
  }

  .section-contact .group .form-control-wrap {
    position: relative;
  }

  .section-contact .group .form-control-wrap.active input, .section-contact
  .group .form-control-wrap.active select, .section-contact .group
  .form-control-wrap.active textarea {
    border-bottom: 1px solid #3582c4;
  }

  .section-contact .group .form-control-wrap.active ~ label {
    top: -20px;
    font-size: 11px;
    color: #3582c4;
  }

  .section-contact .group .form-control-wrap input, .section-contact .group
  .form-control-wrap select, .section-contact .group .form-control-wrap textarea
  {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    -webkit-appearance: none;
    display: block;
    color: #636363;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #757575;
    background: transparent;
  }

  .section-contact .group .form-control-wrap input:focus, .section-contact
  .group .form-control-wrap select:focus, .section-contact .group
  .form-control-wrap textarea:focus {
    box-shadow: none;
  }

  .section-contact .group label {
    color: #999;
    font-size: 14px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: all 0.2s ease;
  }


  footer {
    padding-top: 90px;
    font-size: 12px;
    line-height: 18px;
    color: #828282;
  }

  footer h2.block-title {
    color: #121926;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 27px;
    font-weight: 600;
  }

  footer .row {
    padding-bottom: 80px;
    border-bottom: 1px solid #f2f2f2;
  }

  footer .site-year-info {
    padding: 25px 0;
  }

  footer .footer-logo {
    max-width: 170px;
    max-height: 40px;
    margin-bottom: 40px;
  }

  footer a {
    border-bottom: 1px solid;
    color: #3582c4;
  }

  footer .social a {
    width: 26px;
    text-align: center;
    height: 26px;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #828282;
    margin-right: 12px;
  }

  footer .social a:hover {
    background-color: #3582c4;
  }


  .slick-prev {
    top: 33% !important;
    left: 0 !important;
  }

  .slick-prev:before {
    font-size: 55px !important;
  }


  .slick-next {
    top: 33% !important;
    right: 0 !important;
  }

  .slick-next:before {
    font-size: 55px !important;
  }


  .slick-dots {
    position: relative !important;
  }

  .slick-dots li {
    margin: 0 !important;
  }

  .slick-dots li.slick-active button:before, .slick-dots li:hover button:before
  {
    background-color: #56ccf2;
    transform: scale(1.3);
    transition: 100ms;
  }

  .slick-dots li button:hover {
    transform: none;
  }

  .slick-dots li button:before {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50%;
    background-color: #c2daec;
    transition: 100ms;
    margin: 5px;
    display: inline-block;
    color: unset !important;
    opacity: 1 !important;
  }


  .services-alt .feat:nth-child(2) {
    margin-top: 70px;
  }

  .services-alt .feat:nth-child(3) {
    margin-top: -70px;
  }
scripts: ''
css_external:
  - name: Bootstrap
    url: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
  - name: FontAwesome
    url: >-
      https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
js_external:
  - name: JQuery
    url: 'https://code.jquery.com/jquery.min.js'
---

