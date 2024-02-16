import React from "react";

import CustomButton from "../general/CustomButton";
interface Props {
  imageSource: string;
  imageAlt: string;
  header: string;
  subheader: string;
  buttonText: string;
  invertedColumn?: boolean;
}
function ImageColumnSection(props: Props) {
  return (
    <div
      className={`flex h-screen w-full flex-row items-center justify-between bg-primary-900/95 px-10 ${props.invertedColumn === true && "flex-row-reverse"}`}
    >
      <img
        className="h-2/3 w-1/2 rounded-md object-cover shadow-2xl drop-shadow-2xl grayscale"
        src={props.imageSource}
        alt={props.imageAlt}
      />
      <div className="flex w-1/2 flex-col items-center justify-center gap-2 text-center uppercase text-primary-50">
        <h1 className="font-accent text-6xl text-action-500">{props.header}</h1>
        <p className="max-w-[70%] tracking-wide">{props.subheader}</p>
        <CustomButton variant={"darker"} className="w-60 py-2">
          {props.buttonText}
        </CustomButton>
      </div>
    </div>
  );
}

export default ImageColumnSection;
