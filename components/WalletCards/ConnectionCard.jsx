import React from "react";

const ConnectionCard = () => {
  const data = [
    "johnryan@gmail.com",
    "jonathanwhite@gmail.com",
    "macryenoldsjean@gmail.com",
    "josephjacobjudah@gmail.com",
  ];
  return (
    <div className="w-full border md:h-[461px] rounded-[10px] border-[#2C2C2C] py-4 flex items-start justify-between gap-4 flex-col">
      <h4 className="text-base font-semibold px-4">Memberships</h4>
      <button className="text-xs mx-4 font-normal text-primary border border-primary outline-none cursor-pointer w-[113px] h-[32px] rounded-lg">
        Invite Members
      </button>
      <div className="flex items-start flex-col sm:flex-row justify-between w-full gap-4 px-4">
        <div className="flex items-start justify-start flex-col gap-3 flex-1">
          <h3 className="text-sm text-white/70 font-normal">Members</h3>
          <h2 className="text-2xl font-medium">78</h2>
        </div>
        <div className="flex items-start justify-start flex-col gap-3 flex-1">
          <h3 className="text-sm text-white/70 font-normal">
            Connection Request
          </h3>
          <h2 className="text-2xl font-medium">5</h2>
        </div>
      </div>
      <div className="w-full flex items-start flex-col justify-start gap-4">
        <h2 className="text-base sm:text-lg font-medium px-4">Active Member Emails</h2>
        <div className="flex items-start justify-start flex-col w-full">
          {data.map((item, i) => (
            <div
              key={i}
              className="w-full border-b first:border-t p-4 text-sm  text-white/70 font-normal last:border-none border-[#2C2C2C] truncate"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
