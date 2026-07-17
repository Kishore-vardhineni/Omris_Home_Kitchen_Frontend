import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/PickleVarieties.css';
import mango from '../assets/images/Mango_Pickel.png';
import mangoPickleImg from '../assets/images/Mango_Pickel.png';
import chickenBonePickleImg from '../assets/images/Chicken_Bone.png';
import chickenBonelessPickleImg from '../assets/images/Chicken_Boneless.png';

const WhatsAppIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_NUMBER = '917670851967';


const chickenBoneProducts = [
  { id: 'cb-250', name: 'Chicken Bone Pickle', weight: '250g', price: 250, image: chickenBonePickleImg },
  { id: 'cb-500', name: 'Chicken Bone Pickle', weight: '500g', price: 450, image: chickenBonePickleImg },
  { id: 'cb-1kg', name: 'Chicken Bone Pickle', weight: '1kg', price: 799, image: chickenBonePickleImg },
];

const chickenBonelessProducts = [
  { id: 'cbl-250', name: 'Chicken Boneless Pickle', weight: '250g', price: 250, image: chickenBonelessPickleImg },
  { id: 'cbl-500', name: 'Chicken Boneless Pickle', weight: '500g', price: 450, image: chickenBonelessPickleImg },
  { id: 'cbl-1kg', name: 'Chicken Boneless Pickle', weight: '1kg', price: 799, image: chickenBonelessPickleImg },
];

const tomatoProducts = [
  { id: 'tom-250', name: 'Tamoto Pickle', weight: '250g', price: 250, image: mangoPickleImg },
  { id: 'tom-500', name: 'Tamoto Pickle', weight: '500g', price: 450, image: mangoPickleImg },
  { id: 'tom-1kg', name: 'Tamoto Pickle', weight: '1kg', price: 799, image: mangoPickleImg },
];

const mangoProducts = [
  { id: 'man-250', name: 'Mango Pickle', weight: '250g', price: 250, image: mangoPickleImg },
  { id: 'man-500', name: 'Mango Pickle', weight: '500g', price: 450, image: mangoPickleImg },
  { id: 'man-1kg', name: 'Mango Pickle', weight: '1kg', price: 799, image: mangoPickleImg },
];

const Products = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const handleWhatsApp = (product) => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in ordering *${product.name} - ${product.weight}* (₹${product.price}). Can you please help me place the order?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="varieties-section">
      <div className="container">
        <div className="section-header">
          <motion.h4
            className="subtitle-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Specialties
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Pickle Varieties
          </motion.h2>
        </div>

        <div className="tomato-section">
          <div className="tomato-header">
            <h3>Chicken Bone Pickle</h3>
            <div className="header-underline"></div>
          </div>

          <div className="tomato-grid">
            {chickenBoneProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="tomato-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="tomato-img-wrapper">
                  <img src={product.image} alt={`${product.name} ${product.weight}`} />
                </div>
                <div className="tomato-info">
                  <h4>{product.name}</h4>
                  <span className="weight-badge">{product.weight}</span>
                  <p className="tomato-price">₹{product.price}</p>
                  <button
                    className="btn btn-primary add-to-cart-btn"
                    onClick={() => handleAddToCart({ ...product, name: `${product.name} - ${product.weight}` })}
                  >
                    {/* <ShoppingCart size={16} /> ADD TO CART */}
                  </button>
                  <button
                    className="btn btn-whatsapp add-to-cart-btn"
                    onClick={() => handleWhatsApp(product)}
                  >
                    <WhatsAppIcon size={16} /> Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="tomato-section">
          <div className="tomato-header">
            <h3>Chicken Boneless Pickle</h3>
            <div className="header-underline"></div>
          </div>

          <div className="tomato-grid">
            {chickenBonelessProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="tomato-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="tomato-img-wrapper">
                  <img src={product.image} alt={`${product.name} ${product.weight}`} />
                </div>
                <div className="tomato-info">
                  <h4>{product.name}</h4>
                  <span className="weight-badge">{product.weight}</span>
                  <p className="tomato-price">₹{product.price}</p>
                  <button
                    className="btn btn-primary add-to-cart-btn"
                    onClick={() => handleAddToCart({ ...product, name: `${product.name} - ${product.weight}` })}
                  >
                    {/* <ShoppingCart size={16} /> ADD TO CART */}
                  </button>
                  <button
                    className="btn btn-whatsapp add-to-cart-btn"
                    onClick={() => handleWhatsApp(product)}
                  >
                    <WhatsAppIcon size={16} /> Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="tomato-section">
          <div className="tomato-header">
            <h3>Tomato Pickle</h3>
            <div className="header-underline"></div>
          </div>

          <div className="tomato-grid">
            {tomatoProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="tomato-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="tomato-img-wrapper">
                  <img src={product.image} alt={`${product.name} ${product.weight}`} />
                </div>
                <div className="tomato-info">
                  <h4>{product.name}</h4>
                  <span className="weight-badge">{product.weight}</span>
                  <p className="tomato-price">₹{product.price}</p>
                  <button
                    className="btn btn-primary add-to-cart-btn"
                    onClick={() => handleAddToCart({ ...product, name: `${product.name} - ${product.weight}` })}
                  >
                    {/* <ShoppingCart size={16} /> ADD TO CART */}
                  </button>
                  <button
                    className="btn btn-whatsapp add-to-cart-btn"
                    onClick={() => handleWhatsApp(product)}
                  >
                    <WhatsAppIcon size={16} /> Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="tomato-section">
          <div className="tomato-header">
            <h3>Mango Pickle</h3>
            <div className="header-underline"></div>
          </div>

          <div className="tomato-grid">
            {mangoProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="tomato-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="tomato-img-wrapper">
                  <img src={product.image} alt={`${product.name} ${product.weight}`} />
                </div>
                <div className="tomato-info">
                  <h4>{product.name}</h4>
                  <span className="weight-badge">{product.weight}</span>
                  <p className="tomato-price">₹{product.price}</p>
                  <button
                    className="btn btn-primary add-to-cart-btn"
                    onClick={() => handleAddToCart({ ...product, name: `${product.name} - ${product.weight}` })}
                  >
                    {/* <ShoppingCart size={16} /> ADD TO CART */}
                  </button>
                  <button
                    className="btn btn-whatsapp add-to-cart-btn"
                    onClick={() => handleWhatsApp(product)}
                  >
                    <WhatsAppIcon size={16} /> Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
