import React from "react";

const MyWalletCard = () => {
  return (
    <>
      <h2 className="text-lg pl-4 font-medium">My Wallet</h2>
      <div className="w-full flex flex-col lg:flex-row items-start px-4 lg:items-center justify-between gap-5">
        <div className="flex items-start flex-col justify-start gap-4 w-full lg:flex-1">
          <div className="w-full flex items-center justify-start gap-2">
            <span className="w-[10px] h-[10px] rounded-full bg-[#FF8B00]"></span>
            <p className="text-sm font-normal uppercase">
              BTC <span className="text-white/60">36.77%</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <span className="w-[10px] h-[10px] rounded-full bg-[#0019F8]"></span>
            <p className="text-sm font-normal uppercase">
              USDT <span className="text-white/60">36.77%</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <span className="w-[10px] h-[10px] rounded-full bg-[#D00BF0]"></span>
            <p className="text-sm font-normal uppercase">
              Others <span className="text-white/60">36.77%</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <span className="w-[10px] h-[10px] rounded-full bg-[#00B6FF]"></span>
            <p className="text-sm font-normal uppercase">
              BNB <span className="text-white/60">36.77%</span>
            </p>
          </div>
        </div>
        <div className="w-full lg:flex-1 flex items-center justify-center">
          <div className="border-2 h-[200px] w-[100%] sm:w-[200px] rounded-full flex items-center justify-center flex-col border-primary gap-2">
            <h3 className="text-2xl font-medium">$5000</h3>
            <p className="text-sm font-normal">Total Balance</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWalletCard;
