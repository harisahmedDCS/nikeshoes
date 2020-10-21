import React from 'react';
import '../Men.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoPinterest } from 'react-icons/io';

const CartContents = () => {
  return (
    <div className="bg-2">
      <div className="gap-1">
        <h3>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour
        </h3>
      </div>
      <button className="btn-1">
        9.5 <RiArrowDropDownLine size={20} />
      </button>
      <button className="btn-2">
        {' '}
        <RiArrowDropDownLine size={20} /> ADD TO CART{' '}
      </button>
      <div style={{ marginLeft: '190px', marginTop: '35px' }}>
        <h3>SHARE</h3>
      </div>
      <div style={{ marginLeft: '180px', color: '#dddddd' }}>
        <FaFacebookF style={{ marginRight: '15px' }} /> <AiOutlineTwitter />{' '}
        <IoLogoPinterest style={{ marginLeft: '15px' }} />
      </div>
    </div>
  );
};
export default CartContents;
