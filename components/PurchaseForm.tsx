import { useEffect, useState, useCallback } from "react";
import { Connection, Transaction, SystemProgram } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base"; // Import the error class
import { PublicKey } from "@solana/web3.js"; 
import style from "../styles/Item.module.css";

// Define the type for individual items
interface ItemData {
    itemNum: string;
    category: string;
    description: string;
    price: number;
}

interface PurchaseFormProps {
    filteredItem: ItemData[];
}

const PurchaseForm = (props: PurchaseFormProps) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();  // Throws error if wallet is not connected
        if (!sendTransaction) {
            alert("Transaction sending function is not available.");
            return;
        }
    
        const recipient = new PublicKey("FppCqKdNWr7ihf8PUr66dNjSW3BjuCnLNAPUii2HPCMo"); // Convert string to PublicKey
    
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: recipient,  // Use the PublicKey object here
                lamports: 1000000000, // Example transfer amount
            })
        );
    
        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();
    
        const signature = await sendTransaction(transaction, connection, { minContextSlot });
    
        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
    }, [publicKey, sendTransaction, connection]);

    // Set item data with the specific type
    const [itemData, setItemData] = useState<ItemData[]>([]);

    const paymentForm = itemData.map((el) => {
        return (
            <div className={style.itemContainer} key={el.itemNum}>
                <h1>The Test Shirt</h1>
                <p className={style.categoryItemP}>{el.category}</p>
                <p className={style.paymenentItemDescriptionP}>{el.description}</p>
                <hr />

                <label>
                    <p>Select Size:</p>
                    <button style={{ width: "50px" }} className={style.selectButton}>M</button>
                    <button style={{ width: "50px", marginLeft: "10px" }} className={style.selectButton}>L</button>
                    <button style={{ width: "50px", marginLeft: "10px" }} className={style.selectButton}>XL</button>
                </label>

                <label>
                    <p>Shipping Options:</p>
                    <button className={style.selectButton}>Economy</button>
                    <button style={{ marginLeft: "2%" }} className={style.selectButton}>Tracked</button>
                </label>

                <label>
                    <p>Payment Method:</p>
                    <button className={style.selectButton}>SOL</button>
                    <button style={{ marginLeft: "2%" }} className={style.selectButton}>USDC</button>
                </label>

                <br /><br />

                <table className={style.calcTable}>
                    <tbody>
                        <tr>
                            <td>Shipping Cost:</td>
                            <td>$8.69</td>
                            <td>0.4 SOL</td>
                        </tr>
                        <tr>
                            <td>Item Cost:</td>
                            <td>${el.price}</td>
                            <td>8.2 SOL</td>
                        </tr>
                        <tr className={style.totalTr}>
                            <td>Total:</td>
                            <td>${el.price + 8.69}</td>
                            <td>8.6 SOL</td>
                        </tr>
                    </tbody>
                </table>

                <br /><br />

                <button className={style.addToCartButton}>Add to Cart</button>
                <button onClick={onClick} className={style.buyNowButton}>Buy Now</button>
            </div>
        );
    });

    useEffect(() => {
        const data = props.filteredItem;
        setItemData(data);
    }, [props.filteredItem]);

    return <>{paymentForm}</>;
};

// Wrapper to ensure PurchaseForm only renders on the client side
const PurchaseFormWrapper = (props: PurchaseFormProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Only render on the client side

    return <PurchaseForm {...props} />;
};

export default PurchaseFormWrapper;
