import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Mail, Facebook, Instagram, PhoneCall, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';
import logo from '../assets/images/Omris_Home_Kitchen_logo.jpeg';

const Navbar = () => {
  const { state } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
      <div className="main-nav relative">
        <div className="container nav-inner flex justify-between items-center relative z-20 bg-[var(--bg-cream)]">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              {/* <img src={logo} alt="Mango Pickle" className=" w-12
        h-12
        sm:w-14
        sm:h-14
        md:w-16
        md:h-16" /> */}
              <span className="logo-text text-xl sm:text-2xl lg:text-3xl">Omris Home Kitchen</span>
            </Link>
          </div>

          <nav className={`nav-links flex-col lg:flex-row absolute lg:relative top-full left-0 w-full lg:w-auto bg-[var(--bg-cream)] lg:bg-transparent shadow-md lg:shadow-none p-6 lg:p-0 transition-all duration-300 ease-in-out lg:flex gap-4 lg:gap-8 ${isOpen ? 'flex' : 'hidden'}`}>
            <Link to="/" onClick={closeMenu} className="py-2 lg:py-0">Home</Link>
            <Link to="/about" onClick={closeMenu} className="py-2 lg:py-0">About Us</Link>
            <Link to="/products" onClick={closeMenu} className="py-2 lg:py-0">Products</Link>
            <Link to="/contact" onClick={closeMenu} className="py-2 lg:py-0">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="cart-icon-wrapper">
              <Link to="/cart" className="cart-link" onClick={closeMenu}>
                <ShoppingCart size={24} />
                {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
              </Link>
            </div>
            {/* Hamburger Icon */}
            <button className="lg:hidden text-[var(--text-dark)] focus:outline-none" onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
