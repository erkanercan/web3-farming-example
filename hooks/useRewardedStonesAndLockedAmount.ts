/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";

import {
  ERC20ABI,
  erc20TokenAddress,
  farmContractABI,
  farmContractAddress,
} from "../constants";
import { checkIfChainIsSupported } from "../utils/connectors";
import { getWeb3Provider } from "../utils/providers";

export const useRewardedStonesAndLockedAmount = () => {
  const [rewardedStones, setRewardedStones] = useState<number>(0);
  const [lockedAmount, setLockedAmount] = useState<number>(0);
  const [extBalance, setExtBalance] = useState<number>(0);
  const { account, chainId } = useWeb3React();

  const fetchRewardedStonesAndLockedAmount = useCallback(async () => {
    if (checkIfChainIsSupported(chainId)) {
      const defaultProvider = getWeb3Provider();
      const farmContract = new ethers.Contract(
        farmContractAddress,
        farmContractABI,
        defaultProvider.getSigner()
      );
      const tokenContract = new ethers.Contract(
        erc20TokenAddress,
        ERC20ABI,
        defaultProvider.getSigner()
      );
      const rewards = await farmContract.rewardedStones(account);
      const locks = await farmContract.stakers(account);
      const balance = await tokenContract.balanceOf(account);
      setRewardedStones(Number(ethers.utils.formatEther(rewards.toString())));
      setLockedAmount(
        Number(ethers.utils.formatEther(locks.amount.toString()))
      );
      setExtBalance(Number(ethers.utils.formatEther(balance.toString())));
    }
  }, [account, chainId]);

  useEffect(() => {
    if (account) {
      fetchRewardedStonesAndLockedAmount();
    }
  }, [account, fetchRewardedStonesAndLockedAmount]);
  return {
    rewardedStones,
    lockedAmount,
    extBalance,
    fetchRewardedStonesAndLockedAmount,
  };
};
