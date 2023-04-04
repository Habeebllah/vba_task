import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-darkColor dark:bg-gray-600 border-b border-[#2C2C2C] relative z-10">
      <div className="w-[95%] mx-auto h-[81px] flex justify-between items-center">
        <div className="flex items-center justify-start">
          <img
            src="/images/logo.svg"
            alt="vb_logo"
            className="w-[85px] h-[56px]"
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <img
            src="/images/avatar.png"
            alt="user_images"
            className="w-10 h-10 rounded-full"
          />
          <h4 className="text-base font-normal dark:text-white">Martinez George</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
