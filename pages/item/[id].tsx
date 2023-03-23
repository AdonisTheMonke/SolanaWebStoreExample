import { Router, useRouter } from "next/router";
import Data from "../api/boilerdata";
import React, { useEffect, useState } from 'react'
import style from "../../styles/Item.module.css"
import PurchaseForm from "../../components/PurchaseForm";
import ConnectHeader from "../../components/ConnectHeader";
import Image from "next/image";

const Item = () => {

    const router = useRouter();
    const { id } = router.query



    const [filtered, setFiltered] = useState<any>([])

    const mapper = filtered.map(el => {
        return <div className={style.individualItem} key={el.itemNum}>

            <div>
                <Image src={el.image} alt={el.name} width={"350"} height={"400"}></Image>
            </div>

            <p className={style.nameItemP}>{el.name.toUpperCase()}</p>
            <p className={style.priceItemP}>$ {el.price}</p>
<br></br><br></br>
            <p className={style.descriptionItemP}>{el.description}</p>

        </div>
    })

    useEffect(() => {
        const Filtar = Data.filter(el => el.itemNum === id)
        setFiltered(Filtar)
    },[id])

    return <div className={style.itemGridContainer} style={{marginTop:"100px"}}>
        {mapper} 
        {filtered.length <= 0 ? "Loading..." : ""}

        <PurchaseForm
            filteredItem={filtered}
        />
    </div>
}

export default Item