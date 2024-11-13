import { useRouter } from "next/router";
import Data from "../api/boilerdata";
import React, { useEffect, useState } from "react";
import style from "../../styles/Item.module.css";
import PurchaseForm from "../../components/PurchaseForm";
import Image from "next/image";

interface ItemData {
    itemNum: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;  
}

const Item = () => {
    const router = useRouter();
    const { id } = router.query;  

    const [filtered, setFiltered] = useState<ItemData[]>([]);

    useEffect(() => {
        if (id) {  
            const filteredData = Data.filter((el: ItemData) => el.itemNum === id);
            setFiltered(filteredData);
        }
    }, [id]); 

    const mapper = filtered.map((el) => (
        <div className={style.individualItem} key={el.itemNum}>
            <div>
            <Image 
            src={el.image} 
            alt={el.name} 
            width={350} 
            height={0} 
            layout="responsive" 
            />

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
            {filtered.length > 0 ? mapper : "Loading..."}
            
            {filtered.length > 0 && <PurchaseForm filteredItem={filtered} />}

            <br /><br /><br /><br />
        </div>
    );
};

export default Item;
