import React from "react";
import HeroImage from "../../images/HeroImage.jpg";
import CustomButton from "../general/CustomButton";

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
        <p className="mb-2 mt-3 max-w-[70%] font-primary font-light tracking-wide text-primary-200">
          Explore our workouts, track your progress and become better version of
          yourself
        </p>
        <CustomButton className="py-2">Explore workouts</CustomButton>
      </div>
    </div>
  );
}

export default HeroSection;
