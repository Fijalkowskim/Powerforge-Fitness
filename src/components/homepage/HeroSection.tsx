import React from "react";
import HeroImage from "../../images/HeroImage.jpg";

function HeroSection() {
  return (
    <div>
      <img
        src={HeroImage}
        alt="Gym"
        className="relative h-screen w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center text-center font-accent uppercase text-primary-50">
        <h2 className="text-3xl font-thin">Build your strength with</h2>
        <h1 className="text-6xl tracking-wide">Powerforge fitness</h1>
        <p className="mt-3 max-w-[70%] font-primary font-thin tracking-wide text-primary-200">
          Choose right workouts, get high quality products and prepare yourself
          for a fitness journey
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
