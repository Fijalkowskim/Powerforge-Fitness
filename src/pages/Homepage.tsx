import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import ImageColumnSection from "../components/homepage/ImageColumnSection";
import ProgressImage from "../images/ProgressImage.jpg";
import WeightImage from "../images/WeightImage.jpg";
function Homepage() {
  return (
    <div>
      <HeroSection />
      <ImageColumnSection
        imageSource={ProgressImage}
        imageAlt="Trained men"
        header="Track your progress"
        subheader="Embark on a journey of self-improvement with our Progress Tracker. Set personalized goals, analyze insightful graphs, and witness your development over time. Take charge of your fitness and personal growth."
        buttonText="Progress tracker"
      />
      <ImageColumnSection
        imageSource={WeightImage}
        imageAlt="Measuring weight"
        header="Calculate bmi"
        subheader="Take control of your health with our BMI Calculator. Understand your body mass index, set realistic fitness goals, and monitor your progress on your journey to a healthier you."
        buttonText="BMI Calculator"
        invertedColumn={true}
      />
    </div>
  );
}

export default Homepage;
