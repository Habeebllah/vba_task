import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { HiMoon, HiOutlineSun } from "react-icons/hi";

const SideBar = () => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const isActive = (href) => router.pathname === href;
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (!mount) return null;

    if (currentTheme === "dark") {
      return setTheme("light");
    } else {
      return setTheme("dark");
    }
  };

  const basicLinks = [
    {
      to: "/",
      text: "Dashboard",
      img: "/icons/grid.svg",
    },
    {
      to: "/analytics",
      text: "Analytics",
      img: "/icons/analystic.svg",
    },
    {
      to: "/positions",
      text: "Positions",
      img: "/icons/position.svg",
    },
    {
      to: "/notification",
      text: "Notifications",
      img: "/icons/notification.svg",
    },
  ];

  const botLinks = [
    {
      to: "/bot",
      text: "Bots",
      img: "/icons/bot.svg",
    },
    {
      to: "/",
      text: "Signal Groups",
      img: "/icons/signal.svg",
    },
  ];

  return (
    <nav className="bg-darkColor dark:bg-gray-600 w-[120px] md:w-[20%] h-screen overflow-y-auto pb-[80px]">
      <div className="w-full flex flex-col gap-5 items-start justify-start border-b border-[#2C2C2C] min-h-[320px] md:p-5">
        {basicLinks.map((item, i) => (
          <Link
            href={`${item.to}`}
            key={i}
            className={`flex items-center justify-center md:justify-start w-full cursor-pointer h-[48px] text-base text-[#ffffff66] dark:text-white font-medium gap-3 md:px-5 ${
              isActive(item.to) ? " border-l border-primary text-primary" : ""
            }`}
          >
            <img src={item.img} alt="/" />
            <span className="hidden md:inline">{item.text}</span>
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-col gap-5 items-start justify-start border-b border-[#2C2C2C] min-h-[120px] md:p-5">
        {botLinks.map((item, i) => (
          <Link
            href={`${item.to}`}
            key={i}
            className={`flex items-center justify-center md:justify-start w-full cursor-pointer h-[48px] text-base text-[#ffffff66] dark:text-white font-medium gap-3 md:px-5 ${
              isActive(item.to) ? "text-primary" : ""
            }`}
          >
            <img src={item.img} alt="/" />
            <span className="hidden md:inline">{item.text}</span>
          </Link>
        ))}
      </div>
      <div
        onClick={() => renderThemeChanger()}
        className={`flex items-center justify-center md:justify-start w-full cursor-pointer h-[48px] text-base text-[#ffffff66] dark:text-white font-medium gap-3 pt-3 md:px-5`}
      >
        <img src="/icons/moon.svg" alt="/" />
        <span className="hidden md:inline">Dark Mode</span>
      </div>
    </nav>
  );
};

export default SideBar;
