import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Shoes from './images/shoes.png';
import { StylesProvider, makeStyles } from '@material-ui/styles';
import 'animate.css';
import {
  FaShoppingCart,
  FaCircle,
  FaFacebookF,
  FaInstagramSquare,
} from 'react-icons/fa';
import { AiOutlineTwitter, AiTwotoneStar } from 'react-icons/ai';
import favicon from './images/favicon.ico';
import Navbar from './Navbar';
import Box from '@material-ui/core/Box';

const state = {
  color: '#ea4747',
};

const Landing = () => {
  return (
    <div
      className="landing-responsive Landing-1"
      style={{
        backgroundColor: state.color,
      }}
    >
      <Navbar />
      <div className="transform-1">
        <h3>
          SHOP NOW <FaShoppingCart />
        </h3>
      </div>
      <Container maxWidth="sm">
        <div className="m-1">
          <img className="image-1" src={Shoes} />
        </div>
      </Container>
      <div className="colors-1">
        <div className="transform-2">
          <h3>COLORS</h3>
        </div>
        <div className="circle">
          <FaCircle color={'red'} /> <FaCircle color={'#317497'} />{' '}
          <FaCircle color={'0F4B6B'} />
        </div>
        <div className="icons-1">
          <FaFacebookF />
        </div>
        <div className="icons-2">
          <FaInstagramSquare />
        </div>
        <div className="icons-3">
          <AiOutlineTwitter />
        </div>
      </div>

      {/* <div className="long-arrow">
        <img src={favicon} />
      </div> */}

      <div className="container">
        It is a long established fact that a reader
        <br /> will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum
      </div>
      <div className="star">
        <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar />{' '}
        <AiTwotoneStar color={'white'} />
      </div>
      {/* <div className="Back">
        <h3>Back</h3>
      </div>
      <div className="vortex">
        <h3>THE VORTEX</h3>
      </div> */}
      <div className="flex-box">
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1} className="d-none">
            <div className="Back">
              <h3>Back</h3>
            </div>
          </Box>
          <Box p={1} flexGrow={30} className="d-none">
            <img src={favicon} />
          </Box>
          <Box p={1} flexGrow={50} className="flex-grow">
            <div className="vortex">
              <h3>THE VORTEX</h3>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Landing;
