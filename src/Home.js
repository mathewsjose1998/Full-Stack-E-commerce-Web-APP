import React from 'react'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import './Home.css'
import styled from "styled-components";
import Product from './components/Product';
import ProductContainer from './components/ProductContainer';
import FakeStore from './components/FakeStore';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div>
            <Container>
               
                <ImageSlider/>
                <ProductContainer/>
                 {/* <FakeStore/> */}
                 <Footer/>
                   
            </Container>
           
        </div>
    )
}

export default Home

const Container=styled.div`
padding-top:10vh;

background-image: url('https://hougumlaw.com/wp-content/uploads/2016/05/light-website-backgrounds-light-color-background-images-light-color-background-images-for-website-1024x640-300x188.jpg');
background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin:0 100px;



`

