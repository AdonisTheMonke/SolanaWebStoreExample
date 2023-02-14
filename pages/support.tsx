

import SupportSelector from "../components/SupportSelector"
import style from "../styles/Support.module.css"

const Support = () => {



    return <div>

            <div className={style.banner}>
                <div>
                    <img src="/images/questionmark.png"/>
                    <h1>Volitaire Protocol Menu</h1>
                </div>
            </div>

        <div className="wrapper">
            <SupportSelector/>
        </div>

    </div>
}

export default Support