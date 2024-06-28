import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div>
      <div className="items-start flex flex-col rounded-sm border border-stroke bg-white px-5 pt-6 pb-6 mb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
        {title}
        <h4 className="text-title-md font-bold text-black dark:text-white ">
          {subTitle}
        </h4>
      </div>
    </div>
  );
};

export default Tile;
