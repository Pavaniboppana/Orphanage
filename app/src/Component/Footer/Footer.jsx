import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
  <>
  <h1>This is Footer part</h1>
    <Card style={{height:"19rem"}}>
      <Card.Header>Featured</Card.Header>
      <div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3">
        <h3>Lonely Home</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h3>Products</h3>
        <ul>
        <li>Your Account</li>
        <li>Become an Affiliate</li>
        <li>Shopping Rates</li>
        <li>Help</li>
        <li>Help</li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="p-3">
          <h3>Products</h3>
        <ul>
      <li>Your Account</li>
        <li>Become an Affiliate</li>
        <li>Shopping Rates</li>
        <li>Help</li>
        <li>Help</li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="p-3">
          <h3>USeful Links</h3>
        <ul>
        <li>Your Account</li>
        <li>Become an Affiliate</li>
        <li>Shopping Rates</li>
        <li>Help</li>
        <li>Help</li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="p-3">
          <h3>Contacts</h3>
        <ul>
        <li>New York,Ny 10012, Us</li>
        <li>info@example.com</li>
        <li>+01 234 567 89</li>
        <li>+ 01 234 567 89</li>
        <li></li>
        </ul>
      </div>
    </div>
    
  </div>
</div>
<div className="SocialMedia">
<ul>
<li><FaFacebook /></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
</div>
 <Card.Header>@ 2020 Copyright:LOnely Home.com</Card.Header>
    </Card>

  </>
  )
}

export default Footer