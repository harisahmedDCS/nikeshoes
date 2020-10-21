import React from 'react';
import Image from './images/nnn.png';
import '../Men.css';
import 'animate.css';

const CartContent = () => {
  return (
    <div className="bg">
      <div className="container-1 animate__animated animate__fadeInDown animate__delay-2s">
        <h3>JOKER ROSHE NM</h3>
      </div>
      <span className="container-2 animate__animated animate__fadeInDown animate__delay-1s">
        $245.0
      </span>
      <img src={Image} />
    </div>
  );
};
export default CartContent;
