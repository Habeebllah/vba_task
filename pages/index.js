import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import MyWalletCard from "@/components/WalletCards/MyWalletCard";
import DetailCard from "@/components/WalletCards/DetailsCard";
import SignalCard from "@/components/WalletCards/SignalCard";
import SignalDetailCard from "@/components/WalletCards/SignalDetailCard";
import ConnectionCard from "@/components/WalletCards/ConnectionCard";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>VBA Crypo Signal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:flex flex-col w-full fixed top-0">
        <Header />
        <div className="w-full flex items-start justify-start">
          <SideBar />
          <div className="p-4 h-screen overflow-y-scroll w-full pb-[70px]">
            <div className="lg:p-8 pr-0 flex flex-col gap-6 justify-start items-start w-full bg-darkColor dark:bg-gray-600">
              <div className="w-full flex lg:flex-row flex-col items-start justify-between gap-4">
                <div className="w-full lg:w-[40%] bg-[#32393c33] py-6 lg:p-4 lg:h-[277px] rounded-[10px] flex items-start justify-between flex-col gap-5">
                  <MyWalletCard />
                </div>
                <div className="w-full lg:w-[60%] bg-[#32393c33] py-6 lg:p-0 lg:h-[277px] overflow-auto rounded-[10px]">
                  <DetailCard />
                </div>
              </div>
              <div className="w-full flex items-start flex-col gap-4 justify-start bg-[#32393c33] p-4 rounded-[10px]">
                <h2 className="text-lg font-medium">Signal Groups</h2>
                <div className="w-full flex flex-col sm:flex-row items-center gap-5 justify-between">
                  <div className="flex items-center flex-col sm:flex-row justify-start gap-5">
                    <p
                      className={`bg-white/10 text-sm text-white/60 font-normal w-[158px] h-[43px] flex items-center justify-center rounded-[10px] cursor-pointer`}
                    >
                      Groups You Manage
                    </p>
                    <p className={`text-sm font-normal text-white/60`}>
                      Other Signal Groups
                    </p>
                  </div>
                  <Link href="/" className="text-sm font-normal text-primary">
                    Create New Signal Group
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 items-start align-top">
                  <SignalCard />
                  <SignalDetailCard />
                  <ConnectionCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
