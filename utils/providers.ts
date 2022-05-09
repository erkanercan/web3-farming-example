import { ethers } from "ethers";

declare let window: any;

export const getWeb3Provider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};
