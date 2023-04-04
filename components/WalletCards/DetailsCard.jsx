import React, { useState } from "react";

const DetailCard = () => {
  const tableData = [
    {
      wallet: "Binance",
      coin: "BTC",
      balance: "0.0000123",
    },
    {
      wallet: "Binance",
      coin: "USDT",
      balance: "0.0000123",
    },
    {
      wallet: "Binance",
      coin: "BUSD",
      balance: "0.0000123",
    },
  ];

  const [data, setData] = useState(tableData);

  const columns = [
    {
      field: "wallet",
      header: "Exchange Wallet",
    },
    {
      field: "coin",
      header: "Coin",
    },
    {
      field: "balance",
      header: "Balance",
    },
  ];

  const tableActions = data.map((item) => ({
    wallet: <span>{item.wallet}</span>,
    coin: <span>{item.coin}</span>,
    balance: <span>{item.balance}</span>,
  }));

  return (
    <table className="w-full">
      <thead className="h-[28px]">
        <tr className="border-b border-[#2C2C2C]">
          {columns &&
            columns.map((head, i) => (
              <th
                key={i}
                className="first:text-left text-center p-5 text-sm font-medium leading-[18px]"
              >
                {head.header}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {tableActions &&
          tableActions.map((row, i) => (
            <tr key={i} className="text-sm leading-5 w-full border-b border-[#2C2C2C] last:border-none group">
              {columns?.map((col, i) => (
                <td
                  key={i}
                  className="first:text-left text-base font-normal p-5 group-last:pb-0 text-center"
                >
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DetailCard;
