import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import '../styles/globals.css'


import React, { FC, useCallback, useMemo } from 'react';
import { ConnectionProvider, useConnection, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import ConnectHeader from '../components/ConnectHeader';

export default function App({ Component, pageProps }: AppProps) {

  const network = WalletAdapterNetwork.Mainnet;
  const wallets = useMemo(
      () => [
          new PhantomWalletAdapter
      ],
      [network]
  );

  const rpcNodeLink = "https://lively-tiniest-fog.solana-mainnet.discover.quiknode.pro/cac8b76a50c63b1771432eccfb83133f56c70716/"

  return(
        <ConnectionProvider endpoint={rpcNodeLink}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                
                <Component {...pageProps} />
                
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>

)
}
