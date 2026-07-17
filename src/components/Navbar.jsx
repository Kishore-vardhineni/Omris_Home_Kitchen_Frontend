import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Mail, Facebook, Instagram, PhoneCall } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';
import logo from '../assets/images/Omris_Home_Kitchen_logo.jpeg';

const Navbar = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="contact-info">
            <span><Phone size={14} /> +91 7670851967</span>
            <span><Mail size={14} /> omrishomekitchen@gmail.com</span>
          </div>
          <div className="social-links">
            <a href="#"><Facebook size={14} /></a>
            <a href="https://www.instagram.com/omrishomekichen?utm_source=qr&igsh=cHQ0ZXFzb3NjN200"><Instagram size={14} /></a>
            <a href="#"><PhoneCall size={14} /></a> {/* WhatsApp placeholder */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="container nav-inner">
          <div className="logo">
            <Link to="/">
              {/* <img src={logo} alt="Mango Pickle" className=" w-12
        h-12
        sm:w-14
        sm:h-14
        md:w-16
        md:h-16" /> */}
              <span className="logo-text">Omris Home Kitchen</span>
            </Link>
          </div>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>

          <div className="cart-icon-wrapper">
            <Link to="/cart" className="cart-link">
              <ShoppingCart size={24} />
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
