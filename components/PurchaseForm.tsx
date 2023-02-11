import { useEffect, useState } from "react"
import style from "../styles/Item.module.css"

const PurchaseForm = (props:any) => {

    const [itemData, setItemData] = useState([])

    const paymentForm = itemData.map( el => {
        return<div className={style.itemContainer}>
        <h1>The Test Shirt</h1>
        <p className={style.categoryItemP}>{el.category}</p>
        <p className={style.paymenentItemDescriptionP}>{el.description}</p>
        <hr></hr>
    
        <label>
            <p>Select Size:</p>
            <button style={{width: "50px"}} className={style.selectButton}>M</button>
            <button style={{width: "50px", marginLeft: "10px"}} className={style.selectButton}>L</button>
            <button style={{width: "50px", marginLeft: "10px"}} className={style.selectButton}>XL</button>

        </label>
    
        <label>
            <p>Shipping Options:</p>
            <button className={style.selectButton}>Economy</button>
            <button style={{marginLeft: "2%"}} className={style.selectButton}>Tracked</button>
    
        </label>
    
        <label>
            <p>Payment Method:</p>
            <button className={style.selectButton}>SOL</button>
            <button style={{marginLeft: "2%"}} className={style.selectButton}>USDC</button>
        </label>
        <br></br>
        <br></br>
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
                    <td>${el.price+8.69}</td>
                    <td>8.6 SOL</td>
                </tr>
            </tbody>
        </table>
        
        <br></br><br></br>
        
        <button className={style.addToCartButton}>Add to Cart</button>
        <button className={style.buyNowButton}>Buy Now</button>
    
    </div>
    })

    useEffect(() => {
        const data = props.filteredItem
        setItemData(data)



    }, [props])

    return <>
        {paymentForm}
    </>
}

export default PurchaseForm