import React from "react";
import AMD from "../../../assets/logos/AMD.png";

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  size: string;
}

const partnerLogos: Partner[] = [
  { id: "1", name: "Partner 1", logoUrl: AMD, size: "w-16 h-16" },
  { id: "2", name: "Partner 2", logoUrl: AMD, size: "w-20 h-20" },
  { id: "3", name: "Partner 3", logoUrl: AMD, size: "w-12 h-12" },
  { id: "4", name: "Partner 4", logoUrl: AMD, size: "w-16 h-16" },
  { id: "5", name: "Partner 5", logoUrl: AMD, size: "w-14 h-14" },
  { id: "6", name: "Partner 6", logoUrl: AMD, size: "w-18 h-18" },
  { id: "7", name: "Partner 7", logoUrl: AMD, size: "w-16 h-16" },
  { id: "8", name: "Partner 8", logoUrl: AMD, size: "w-12 h-12" },
  { id: "9", name: "Partner 9", logoUrl: AMD, size: "w-20 h-20" },
  { id: "10", name: "Partner 10", logoUrl: AMD, size: "w-14 h-14" },
  { id: "11", name: "Partner 11", logoUrl: AMD, size: "w-16 h-16" },
  { id: "12", name: "Partner 12", logoUrl: AMD, size: "w-18 h-18" },
];

const logoPositions = [
  { top: "5%", left: "5%" },
  { top: "5%", left: "35%" },
  { top: "5%", right: "5%" },
  { top: "30%", left: "5%" },
  { top: "30%", right: "5%" },
  { top: "55%", left: "5%" },
  { top: "55%", right: "5%" },
  { bottom: "5%", left: "5%" },
  { bottom: "5%", left: "35%" },
  { bottom: "5%", right: "5%" },
  { top: "5%", right: "35%" },
  { bottom: "5%", right: "35%" },
];

function Carousel() {
  return (
    <div className="relative w-full  bg-white p-8">
      {partnerLogos.map((partner, index) => (
        <div
          key={partner.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={logoPositions[index]}
        >
          <img
            src={partner.logoUrl}
            alt={partner.name}
            className={`object-contain ${partner.size}`}
          />
        </div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto text-center mt-20">
        <h2 className="text-sm uppercase text-gray-500 mb-2">
          PARTNERS & INTEGRATIONS
        </h2>
        <h1 className="text-4xl font-bold mb-4">
          Built to work with your ecosystem
        </h1>
        <p className="text-gray-600 mb-6">
          We understand that success doesn't happen in isolation. That's why
          HashiCorp products integrate with the technologies that power your
          business.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-blue-600 hover:underline">
            Our ecosystem
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Find integrations
          </a>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="font-bold text-2xl">930+</p>
            <p className="text-sm text-gray-600">Partners</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">4,000+</p>
            <p className="text-sm text-gray-600">Integrations</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">500+</p>
            <p className="text-sm text-gray-600">Systems integrators</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;