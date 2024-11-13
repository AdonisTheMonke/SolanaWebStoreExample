import { useRouter } from "next/router";
import Data from "../api/boilerdata";
import React, { useEffect, useState } from "react";
import style from "../../styles/Item.module.css";
import PurchaseForm from "../../components/PurchaseForm";
import Image from "next/image";

// Update the structure of each item to include `category`
interface ItemData {
    itemNum: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;  // Added category here
}

const Item = () => {
    const router = useRouter();
    const { id } = router.query;  // Get the id from router query

    const [filtered, setFiltered] = useState<ItemData[]>([]);

    // Fetch data based on the id from the router
    useEffect(() => {
        if (id) {  // Only filter when id is defined
            const filteredData = Data.filter((el: ItemData) => el.itemNum === id);
            setFiltered(filteredData);
        }
    }, [id]);  // Run effect when `id` changes

    // Map over filtered items to render them
    const mapper = filtered.map((el) => (
        <div className={style.individualItem} key={el.itemNum}>
            <div>
                <Image src={el.image} alt={el.name} width={350} height={400} />
            </div>
            <p className={style.nameItemP}>{el.name.toUpperCase()}</p>
            <p className={style.priceItemP}>$ {el.price}</p>
            <br />
            <br />
            <p className={style.descriptionItemP}>{el.description}</p>
        </div>
    ));

    return (
        <div className={style.itemGridContainer} style={{ marginTop: "100px" }}>
            {/* Render "Loading..." until filtered data is available */}
            {filtered.length > 0 ? mapper : "Loading..."}
            
            {/* Pass filtered item to PurchaseForm component */}
            {filtered.length > 0 && <PurchaseForm filteredItem={filtered} />}
        </div>
    );
};

export default Item;
