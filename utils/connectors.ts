import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { walletSupportedChainIDs } from "../constants";

const injected = new InjectedConnector({});

const walletConnect = new WalletConnectConnector({
  supportedChainIds: walletSupportedChainIDs,
  rpc: "https://rinkeby.infura.io/v3/0fd898a990bf47d6917fd76f3289cc72",
});

export const connectors = {
  injected,
  walletConnect,
};

export const checkIfChainIsSupported = (chainId: number | undefined) => {
  return walletSupportedChainIDs.includes(chainId || 0);
};
