import React from "react";

const SignalDetailCard = () => {
  return (
    <div className="w-full border md:h-[461px] rounded-[10px] border-[#2C2C2C] p-4 flex items-start justify-between gap-4 flex-col">
      <div className="w-full flex flex-col sm:flex-row items-start gap-5 sm:items-center justify-between">
        <div className="flex items-start justify-start flex-col gap-2">
          <div className="flex items-center justify-start gap-2">
            <img src="/images/abc.svg" alt="crypto_image" />
            <h4 className="text-base font-semibold">ABC 15</h4>
          </div>
          <p className="text-xs text-white/70 font-normal">Private Group</p>
        </div>
        <p className="text-sm text-primary font-normal">Edit Signal Group</p>
      </div>
      <div className="flex items-start justify-start flex-col gap-1">
        <h3 className="text-sm sm:text-base text-white/70 font-normal">
          Minimum Allocation
        </h3>
        <h1 className="text-base sm:text-2xl font-medium">100 USDT</h1>
      </div>
      <div className="flex items-start justify-start flex-col gap-1">
        <h3 className="text-sm sm:text-base text-white/70 font-normal">
          Minimum Allocation
        </h3>
        <h1 className="text-base sm:text-2xl font-medium">100 USDT</h1>
      </div>
      <p className="text-base font-normal">
        Subscription <span className="text-primary">Free</span>
      </p>
      <p className="text-sm sm:text-base font-normal">Total Revenue Generated</p>
      <div className="flex items-center justify-between w-full">
        <p className="text-xs text-white/70 font-normal">This Month</p>
        <h3 className="text-base sm:text-2xl font-medium">$1000.00</h3>
      </div>
      <button className="text-xs font-normal text-primary border border-primary outline-none cursor-pointer w-[127px] h-[32px] rounded-lg">View Signal Group</button>
    </div>
  );
};

export default SignalDetailCard;
