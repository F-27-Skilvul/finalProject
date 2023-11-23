import React from 'react';

const ListItem = ({ iconSrc, title, subtitle }) => {
  return (
    <a className="flex justify-between bg-white px-4 py-6 rounded-2xl mb-2 border border-gray-200 outline outline-transparent outline-offset-2 hover:outline-primary" href="#">
      <div className="flex">
        <img className="h-7 w-7" src={iconSrc} alt="" />
        <h1 className="ml-4 text-lg font-semibold">{title}</h1>
      </div>
      <h1 className="text-lg font-semibold">{subtitle}</h1>
    </a>
  );
};

const IsiListComponent = () => {
  const listItems = [
    { iconSrc: "https://ik.imagekit.io/catamyst/icons/flag_mzRaOyXEPU.png", title: "Getting started", subtitle: "Preparation" },
    { iconSrc: "https://ik.imagekit.io/catamyst/icons/flag_mzRaOyXEPU.png", title: "Getting started", subtitle: "Preparation" },
    { iconSrc: "https://ik.imagekit.io/catamyst/icons/flag_mzRaOyXEPU.png", title: "Getting started", subtitle: "Preparation" },
    { iconSrc: "https://ik.imagekit.io/catamyst/icons/flag_mzRaOyXEPU.png", title: "Getting started", subtitle: "Preparation" },
    { iconSrc: "https://ik.imagekit.io/catamyst/icons/flag_mzRaOyXEPU.png", title: "Getting started", subtitle: "Preparation" },
    { iconSrc: "https://ik.imagekit.io/catamyst/icons/flag_mzRaOyXEPU.png", title: "Getting started", subtitle: "Preparation" },
  ];

  return (
    <div className="container max-w-screen-xl md:flex md:flex-row justify-start">
      <div id="right" className="flex flex-col md:w-2/3 md:ml-4 md:mt-0 xs:mt-4">
        {listItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default IsiListComponent;
