import { ethers } from "ethers";

import {
  ERC20ABI,
  erc20TokenAddress,
  farmContractABI,
  farmContractAddress,
} from "../constants";

import { getWeb3Provider } from "./providers";

const getFarmContract = () => {
  const defaultProvider = getWeb3Provider();
  return new ethers.Contract(
    farmContractAddress,
    farmContractABI,
    defaultProvider.getSigner()
  );
};

const getTokenContract = () => {
  const defaultProvider = getWeb3Provider();
  return new ethers.Contract(
    erc20TokenAddress,
    ERC20ABI,
    defaultProvider.getSigner()
  );
};

export const farmTokens = async (amount: number, account: string) => {
  const allowance = await getTokenContract().functions.allowance(
    account,
    farmContractAddress
  );
  const formattedAllowance = Number(allowance.toString());
  if (formattedAllowance < amount) {
    await getTokenContract().approve(
      farmContractAddress,
      ethers.constants.MaxInt256
    );
  }
  await getFarmContract().deposit(ethers.utils.parseEther(amount.toString()));
};

export const unfarmTokens = async (amount: number) => {
  await getFarmContract().withdraw(ethers.utils.parseEther(amount.toString()));
};
