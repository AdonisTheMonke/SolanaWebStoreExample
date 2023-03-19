import { Router, useRouter } from "next/router"
import style from "../styles/Collection.module.css"
import Data from "../pages/api/boilerdata"
import Image from "next/image"
import Link from "next/link"

const ItemBluePrint = () => {

    console.log(Data)
    const router = useRouter()
    const { id } = router.query

    const mapper = Data.map(el => {
        return<div key={el.itemNum}>
            <Link href={`/item/${el.itemNum}`}>
                <Image
                    src={el.image}
                    width={300}
                    height={300}
                    alt={el.category}
                />
            </Link>
            <div>
                <p className={style.nameP}>{el.name.toUpperCase()}</p>
                <p className={style.priceP}>$ {el.price}</p>
            </div>
        </div>
    })

    return(
        <div className="wrapper">
            <div className={style.itemGrid}>
               {mapper}
            </div>
        </div>
    )
}

export default ItemBluePrint