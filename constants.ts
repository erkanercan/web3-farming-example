/* eslint-disable global-require */

/* eslint-disable @typescript-eslint/no-var-requires */
export const ERC20ABI = require("./abis/ERC20ABI.json");
export const farmContractABI = require("./abis/farmContractABI.json");

export const walletSupportedChainIDs = [4];
export const farmContractAddress = "0xC95FEE5B68E2ce5B5897e7e65576131F0e9d2e53";
export const erc20TokenAddress = "0x3565b97c7d79d14e7ad083d8fcebd0829d047507";

export const farmers = [
  {
    name: "John Doe",
    amount: "1,000",
  },
  {
    name: "Jane Doe",
    amount: "1,000",
  },
  {
    name: "Jack Doe",
    amount: "1,000",
  },
  {
    name: "Jill Doe",
    amount: "1,000",
  },
  {
    name: "Joh Doe",
    amount: "1,000",
  },
  {
    name: "Jan Doe",
    amount: "1,000",
  },
  {
    name: "Jac Doe",
    amount: "1,000",
  },
  {
    name: "Jil Doe",
    amount: "1,000",
  },
  {
    name: "Johne Doe",
    amount: "1,000",
  },
  {
    name: "Janea Doe",
    amount: "1,000",
  },
];

// EXP: Hardcoded menu data for the task, because the task does not include a valid link for them to use.
// So I assigned them a hardcoded # link. And made farming page the index page.
export const menuData = [
  {
    name: "Marketplace",
    path: "#",
  },
  {
    name: "Get EXT",
    path: "#",
  },
  {
    name: "Farm Stones",
    path: "/",
  },
  {
    name: "Staking",
    path: "#",
  },
];
