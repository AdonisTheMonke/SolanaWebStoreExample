

import Image from "next/image"
import SupportSelector from "../components/SupportSelector"
import style from "../styles/Support.module.css"

const Support = () => {



    return <div>

            <div className={style.banner}>
                <div>
                    <Image src={"/images/questionmark.png"} alt={"question mark"} width={75} height={75}></Image>
                    <h1>Volitaire Protocol Menu</h1>
                </div>
            </div>

            <SupportSelector/>

    </div>
}

export default Support