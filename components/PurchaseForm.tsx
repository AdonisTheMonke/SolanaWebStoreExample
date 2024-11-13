import { useEffect, useState, useCallback } from "react";
import { Connection, Transaction, SystemProgram } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import style from "../styles/Item.module.css";
import axios from "axios";

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
    const [clothingSize, setClothingSize] = useState("");
    const [shipping, setShipping] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [status, setStatus] = useState("");

    const [solanaPrice, setSolanaPrice] = useState(0);
    const [productPriceSOL, setProductPriceSOL] = useState(0);

    const SizeButtonForOptions = (e: string) => setClothingSize(e);
    const ShippingButtonForOptions = (e: string) => setShipping(e);
    const PaymentButtonForOptions = (e: string) => setPaymentMethod(e);

    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) {
            setStatus("Please connect your wallet.");
            return;
        }

        if (!sendTransaction) {
            alert("Sending function is not available.");
            return;
        }

        const recipient = new PublicKey("CRMM97NFpxpbzdwaqUxmxWuKrFaDbgPHZYYnYW3sEYWH");
        
        const productPriceInSol = props.filteredItem[0]?.price / solanaPrice;
        const inTotalWithShipping = productPriceInSol + (1.29 / solanaPrice);
        const productPriceInLamports = Math.round(inTotalWithShipping * 1_000_000_000);

        console.log( productPriceInLamports);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: recipient,
                lamports: productPriceInLamports,
            })
        );

        try {
            const {
                context: { slot: minContextSlot },
                value: { blockhash, lastValidBlockHeight }
            } = await connection.getLatestBlockhashAndContext();

            const signature = await sendTransaction(transaction, connection, { minContextSlot });

            await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
            setStatus("Transaction successful!");
        } catch (error) {
            console.error("Transaction failed:", error);
            setStatus("Transaction failed. Please try again.");
        }
    }, [publicKey, sendTransaction, connection, solanaPrice, props.filteredItem]);

    const [itemData, setItemData] = useState<ItemData[]>([]);

    useEffect(() => {
        console.log(clothingSize);
        console.log(shipping);
        console.log(paymentMethod);
    }, [clothingSize, shipping, paymentMethod]);

    useEffect(() => {
        if (props.filteredItem.length > 0) {
            axios
                .get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
                .then((res) => {
                    const solPrice = res.data.solana.usd;
                    setSolanaPrice(solPrice);
                    
                    // Calculate initial product price in SOL with shipping
                    const productPriceInSol = props.filteredItem[0].price / solPrice;
                    const inTotalWithShipping = productPriceInSol + (1.29 / solPrice);
                    setProductPriceSOL(inTotalWithShipping);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [props.filteredItem]);

    const paymentForm = props.filteredItem.map((el) => (
        <div className={style.itemContainer} key={el.itemNum}>
            <h1>The Test Shirt</h1>
            <p className={style.categoryItemP}>{el.category}</p>
            <p className={style.paymenentItemDescriptionP}>{el.description}</p>
            <hr />

            <label>
                <p>Select Size:</p>
                <button onClick={() => SizeButtonForOptions("M")} className={`${style.selectButton} ${clothingSize === "M" ? style.selected : ""}`} style={{ width: "50px" }}>M</button>
                <button onClick={() => SizeButtonForOptions("L")} className={`${style.selectButton} ${clothingSize === "L" ? style.selected : ""}`} style={{ width: "50px", marginLeft: "10px" }}>L</button>
                <button onClick={() => SizeButtonForOptions("XL")} className={`${style.selectButton} ${clothingSize === "XL" ? style.selected : ""}`} style={{ width: "50px", marginLeft: "10px" }}>XL</button>
            </label>

            <label>
                <p>Shipping Options:</p>
                <button onClick={() => ShippingButtonForOptions("Economy")} className={`${style.selectButton} ${shipping === "Economy" ? style.selected : ""}`}>Economy</button>
                <button onClick={() => ShippingButtonForOptions("Tracked")} className={`${style.selectButton} ${shipping === "Tracked" ? style.selected : ""}`} style={{ marginLeft: "2%" }}>Tracked</button>
            </label>

            <label>
                <p>Payment Method:</p>
                <button onClick={() => PaymentButtonForOptions("SOL")} className={`${style.selectButton} ${paymentMethod === "SOL" ? style.selected : ""}`}>SOL</button>
                <button onClick={() => PaymentButtonForOptions("USDC")} className={`${style.selectButton} ${paymentMethod === "USDC" ? style.selected : ""}`} style={{ marginLeft: "2%" }}>USDC</button>
            </label>

            <br /><br />

            <table className={style.calcTable}>
                <tbody>
                    <tr>
                        <td>Shipping Cost:</td>
                        <td>$1.29</td>
                        <td>{(1.29 / solanaPrice).toFixed(4)} SOL</td>
                    </tr>
                    <tr>
                        <td>Item Cost:</td>
                        <td>${el.price}</td>
                        <td>{(el.price / solanaPrice).toFixed(4)} SOL</td>
                    </tr>
                    <tr className={style.totalTr}>
                        <td>Total:</td>
                        <td>${el.price + 1.29}</td>
                        <td>{productPriceSOL.toFixed(4)} SOL</td>
                    </tr>
                </tbody>
            </table>

            <br /><br />

            <button disabled className={style.addToCartButton}>Add to Cart</button>
            <button onClick={onClick} className={style.buyNowButton}>Buy Now</button>

            <br />

            <p>{status}</p>
        </div>
    ));

    useEffect(() => {
        setItemData(props.filteredItem);
    }, [props.filteredItem]);

    return <>{paymentForm}</>;
};

const PurchaseFormWrapper = (props: PurchaseFormProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; 

    return <PurchaseForm {...props} />;
};

export default PurchaseFormWrapper;
