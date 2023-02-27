import Image from "next/image"
import style from "../../styles/forms/Shipping.module.css"

const Form5 = () => {
    return <div>
        <h1>Shipping</h1>
        <br></br>
        <div className={style.gridShipping}>
            <div>
                <div className={style.divContents}>
                    <Image 
                        src={"/images/world.png"} 
                        width={"85"} 
                        height={"85"} 
                        alt={"okay"}
                    />
                    <h1>International Shipping</h1>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In aliquam erat vitae eros efficitur placerat. Praesent eget nisi elit. 
                    Pellentesque blandit.</p>

                </div>
                    <div className={style.priceDiv}>
                        <p style={{fontSize: "30px"}}>14,99 USD</p>
                        <p>Free Shipping on orders over 250 USD</p>
                    </div>
            </div>

            <div>
                <div className={style.divContents}>
                    <Image 
                        src={"/images/germany.png"} 
                        width={"85"} 
                        height={"85"} 
                        alt={"okay"}
                    />
                    <h1>Domestic <br></br> Shipping</h1>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In aliquam erat vitae eros efficitur placerat. Praesent eget nisi elit. 
                    Pellentesque blandit.</p>

                </div>
                    <div className={style.priceDiv}>
                        <p style={{fontSize: "30px"}}>14,99 USD</p>
                        <p>Free Shipping on orders over 250 USD</p>
                    </div>
            </div>
        </div>
    </div>
}

export default Form5