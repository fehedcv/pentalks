import React from "react";

const ProductCardGrid = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 flex flex-wrap items-center justify-center gap-6 lg:gap-8">
      {/* First Card */}
      <div className="flex-shrink-0 relative overflow-hidden bg-orange-500 rounded-lg w-full sm:w-96 md:w-[28rem] lg:w-[36rem] h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-6 sm:pt-10 lg:pt-16 px-6 sm:px-10 flex items-center justify-center h-3/5">
          <div
            className="block absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="relative w-48 sm:w-52 md:w-56 lg:w-60 h-auto object-contain"
            src="https://i.pinimg.com/736x/2c/22/4b/2c224bebfe4df53d25fdaab7f707759d.jpg"
            alt="Product"
          />
        </div>
        <div className="relative text-white px-6 sm:px-8 pb-6 sm:pb-8 mt-auto">
          <span className="block opacity-75 -mb-1 text-sm sm:text-base">Mann</span>
          <div className="flex justify-between items-center">
            <span className="block font-semibold text-lg sm:text-xl lg:text-2xl">Sneakers</span>
            <span className="flex bg-white rounded-full text-orange-500 text-sm sm:text-base font-bold px-4 py-2 sm:px-5 sm:py-3 leading-none items-center">
              $36.00
            </span>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex-shrink-0 relative overflow-hidden bg-teal-500 rounded-lg w-full sm:w-96 md:w-[28rem] lg:w-[36rem] h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-6 sm:pt-10 lg:pt-16 px-6 sm:px-10 flex items-center justify-center h-3/5">
          <div
            className="block absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="relative w-48 sm:w-52 md:w-56 lg:w-60 h-auto object-contain"
            src="https://i.etsystatic.com/18208658/r/il/4c30f0/4698299310/il_fullxfull.4698299310_pwr4.jpg"
            alt="Product"
          />
        </div>
        <div className="relative text-white px-6 sm:px-8 pb-6 sm:pb-8 mt-auto">
          <span className="block opacity-75 -mb-1 text-sm sm:text-base">Mukham</span>
          <div className="flex justify-between items-center">
            <span className="block font-semibold text-lg sm:text-xl lg:text-2xl">Monstera</span>
            <span className="bg-white rounded-full text-teal-500 text-sm sm:text-base font-bold px-4 py-2 sm:px-5 sm:py-3 leading-none flex items-center">
              $45.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;