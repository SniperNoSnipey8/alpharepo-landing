import React from "react";
import layers from "../../../../assets/layer.svg";

function Hero1() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase mb-3.5">
                Market Intelligence and Decision Science Platform
              </div>
              <h1 className="text-4xl lg:text-5xl leading-tight font-extrabold mb-6">
                Your Data. Our Insights. Your Alpha
              </h1>
              <p className="mb-4">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <p className="mb-8">
                • Free for a quarter{" "}
                <span>• Access to in-person training</span>
              </p>
              <div className="flex flex-wrap items-center space-x-4">
                <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full">
                  Book a Call
                </button>
                <a href="#" className="text-blue-600 font-bold">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img src={layers} alt="Layers" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;