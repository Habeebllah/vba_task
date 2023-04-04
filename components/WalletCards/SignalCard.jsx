import React from "react";

const SignalCard = () => {
  const data = [
    {
      img: "/images/abc.svg",
      text: "ABC 15",
    },
    {
      img: "/images/champ.svg",
      text: "The Champions",
    },
    {
      img: "/images/bloom.svg",
      text: "Bloom  Group",
    },
    {
      img: "/images/sha.svg",
      text: "SHA 145",
    },
    {
      img: "/images/gurus.svg",
      text: "ETDA Gurus",
    },
    {
      img: "/images/req.svg",
      text: "Req Group",
    },
  ];
  return (
    <div className="w-full border md:h-[461px] rounded-[10px] border-[#2C2C2C] flex items-start flex-col justify-start gap-4 py-4">
      <h2 className="text-base sm:text-lg font-medium px-4">Signal Groups You Belong To</h2>
      <div className="flex items-start justify-start flex-col w-full">
        {data.map((item, i) => (
          <div
            key={i}
            className="w-full border-b first:border-t p-4 text-sm border-[#2C2C2C] text-white/70 font-normal last:border-none flex items-center justify-start gap-3"
          >
            <img src={item.img} alt={item.text} className="w-[30px] h-[30px] rounded-full" />
            <p className="text-sm sm:text-base font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignalCard;
