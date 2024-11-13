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

require('@solana/wallet-adapter-react-ui/styles.css');

export default function App({ Component, pageProps }: AppProps) {

    const network = WalletAdapterNetwork.Mainnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
        ],
        []
    );

  return(
        <ConnectionProvider endpoint={"https://snowy-frequent-flower.solana-mainnet.quiknode.pro/fdabe801d7b055964836a536f10950f98d975f30"}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>

                <div className="wrapper">
                    <ConnectHeader/>
                    <Component {...pageProps} />
                </div>

                
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>

)
}
