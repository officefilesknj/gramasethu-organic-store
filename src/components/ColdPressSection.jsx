import React from 'react';
import cartImage from '../assets/bullock-cart/cart-oil.jpg';
import oilImage from '../assets/oils/cold-oil.jpg';
import pressImage from '../assets/oils/traditional-press.jpg';

const ColdPressSection = () => {
  return (
    <div className="bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:flex items-center gap-10">
        {/* Left: Bullock Cart */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={cartImage}
            alt="Bullock cart used in cold-pressed oil making"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>

        {/* Right: Oil Explanation */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Traditional Cold Pressed Oil – From Farm to Bottle
          </h2>
          <p className="text-gray-700 mb-4">
            At <strong>GramaSethu</strong>, we honor the age-old tradition of cold-pressed oil extraction using wooden presses powered by bullock carts. This natural method retains the oil’s nutrients and purity — without heat, chemicals, or refinement.
          </p>
          <div className="flex items-center gap-4">
            <img
              src={oilImage}
              alt="Cold pressed oil bottle"
              className="w-24 h-24 object-cover rounded shadow-md"
            />
            <img
              src={pressImage}
              alt="Traditional wooden oil press"
              className="w-24 h-24 object-cover rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdPressSection;