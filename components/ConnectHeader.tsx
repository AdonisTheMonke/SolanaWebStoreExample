import { useEffect, useState } from 'react';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from 'next/image';

const ConnectHeader = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevent rendering during SSR
    }

    return (
        <div style={{ height: "", position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
            {/* Logo */}
            <div>
                <Image
                    src="/images/logo.png"
                    height={180}
                    width={180}
                    alt="Volitaire Logo"
                />
            </div>

            {/* Wallet Button */}
            <div>
                <WalletMultiButton />
            </div>
        </div>
    );
}

export default ConnectHeader;
