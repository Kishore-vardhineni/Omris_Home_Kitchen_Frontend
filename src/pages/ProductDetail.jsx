import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus, MapPin } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedVolume, setSelectedVolume] = useState('1000ml');
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);

  const volumes = ['1000ml', '500ml', '250ml'];

  return (
    <div className="bg-[#fcfbf9] min-h-screen font-sans text-[#333] p-4 md:p-8 lg:p-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* LEFT SECTION - IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[600px] aspect-[4/5] bg-white rounded shadow-sm overflow-hidden flex items-center justify-center p-4">
              <img 
                src="https://images.unsplash.com/photo-1589301773950-a92c4c1538df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="A2 Desi Cow Cultured Ghee" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* RIGHT SECTION - DETAILS */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 xl:gap-6">
            
            {/* Title & Ratings */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#3a2a22] leading-tight mb-2 tracking-tight">
                A2 Desi Cow Cultured Ghee
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex text-[#ffc107]">
                  <Star fill="currentColor" stroke="none" size={18} />
                  <Star fill="currentColor" stroke="none" size={18} />
                  <Star fill="currentColor" stroke="none" size={18} />
                  <Star fill="currentColor" stroke="none" size={18} />
                  <Star fill="currentColor" stroke="none" size={18} />
                </div>
                <span className="text-[#333] text-sm font-medium ml-1">741 reviews</span>
              </div>
            </div>

            {/* Dashed Review Badge */}
            <div className="border border-dashed border-gray-400 p-3 rounded bg-transparent flex items-center justify-center gap-2 text-sm text-gray-700 max-w-md">
              <span className="font-bold">"Amazing"</span>
              <div className="flex text-[#ffc107] mx-1">
                <Star fill="currentColor" stroke="none" size={14} />
                <Star fill="currentColor" stroke="none" size={14} />
                <Star fill="currentColor" stroke="none" size={14} />
                <Star fill="currentColor" stroke="none" size={14} />
                <Star fill="currentColor" stroke="none" size={14} />
              </div>
              <span>Rated 4.4/5 on</span>
              <div className="flex items-center">
                {/* Simulated Google Logo snippet */}
                <span className="font-bold text-gray-800 tracking-tighter">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
              </div>
            </div>

            {/* Orange Ticket Banner */}
            <div className="relative bg-[#f88812] text-white py-3 px-6 rounded max-w-md flex flex-col justify-center my-1 overflow-hidden shadow-sm">
               {/* Left Cutout */}
               <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#fcfbf9] rounded-full"></div>
               {/* Right Cutout */}
               <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#fcfbf9] rounded-full"></div>
               
               <p className="font-extrabold text-[15px] leading-tight z-10 ml-2">FREE DELIVERY ABOVE Rs 999</p>
               <p className="text-[12px] font-medium z-10 ml-2">Delivered in 2-5 working days</p>
            </div>

            {/* Price Section */}
            <div className="mt-1">
              <p className="text-[32px] lg:text-[36px] font-extrabold leading-none text-[#3a2a22] mb-1">
                Rs. 3,499.00
              </p>
              <p className="text-sm text-gray-600">
                Tax included. <span className="text-[#f88812] cursor-pointer hover:underline">Shipping</span> calculated at checkout
              </p>
            </div>

            {/* Quantity Selection (Volume) */}
            <div className="mt-2">
              <p className="font-bold text-sm text-[#3a2a22] mb-2">Select quantity</p>
              <div className="flex flex-wrap gap-2">
                {volumes.map((vol) => (
                  <button 
                    key={vol}
                    onClick={() => setSelectedVolume(vol)}
                    className={`px-4 py-1.5 rounded font-bold text-sm border transition-colors ${
                      selectedVolume === vol 
                        ? 'bg-[#4a3f35] text-white border-[#4a3f35]' 
                        : 'bg-white text-[#333] border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {vol}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Quantity Selector */}
            <div className="mt-2">
              <p className="font-bold text-sm text-[#3a2a22] mb-2">Quantity</p>
              <div className="flex items-center border border-gray-300 rounded w-fit overflow-hidden bg-white h-10">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center font-bold text-sm">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-3 max-w-md">
              <button className="w-full h-12 bg-[#4a3f35] text-white rounded font-bold text-sm tracking-wide hover:bg-[#3d332b] transition-colors shadow-sm">
                ADD TO CART
              </button>
              <button className="w-full h-12 bg-[#f88812] text-white rounded font-bold text-sm tracking-wide hover:bg-[#e67a0a] transition-colors shadow-sm">
                BUY NOW
              </button>
            </div>

            {/* Information Card (Naturally Procured) */}
            <div className="bg-white border border-gray-200 rounded p-4 mt-3 max-w-md flex flex-col gap-1 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-sm text-[#3a2a22]">
                <MapPin size={16} className="text-gray-600" />
                <span>Naturally Procured</span>
              </div>
              <p className="text-[13px] text-gray-600 leading-snug pl-6">
                Our products are <span className="text-green-700 font-semibold">sourced naturally</span> from sustainable origins<br/>
                Processed using <span className="text-green-700 font-semibold">traditional, eco-friendly methods</span>
              </p>
            </div>

            {/* Description Section */}
            <div className="mt-4 pt-4 border-t border-gray-200 max-w-xl">
              <div 
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
              >
                <h3 className="font-extrabold text-xl text-[#3a2a22]">Description</h3>
                {isDescriptionOpen ? <Minus size={20} className="text-gray-500" /> : <Plus size={20} className="text-gray-500" />}
              </div>
              
              {isDescriptionOpen && (
                <div className="text-[14px] text-gray-700 space-y-4 leading-relaxed font-medium">
                  <p>
                    Vaaradhi Farms' A2 Desi Cow Cultured Ghee is made from the milk of indigenous A2 cows, offering rich aroma and authentic flavor. This golden elixir is packed with essential nutrients, making it a must-have in your kitchen.
                  </p>
                  <p>
                    Made without additives or preservatives, ensuring 100% natural goodness.
                  </p>
                  <div>
                    <h4 className="font-bold text-[#3a2a22] text-[15px] mb-2">Benefits</h4>
                    <ul className="space-y-1.5 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[#333] text-[10px] mt-1.5">●</span>
                        <span>Supports digestion and gut health</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#333] text-[10px] mt-1.5">●</span>
                        <span>Rich in essential vitamins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#333] text-[10px] mt-1.5">●</span>
                        <span>Enhances brain and heart health</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#333] text-[10px] mt-1.5">●</span>
                        <span>Boosts immunity naturally</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
