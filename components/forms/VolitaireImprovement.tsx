import Link from "next/link"
import { useState } from "react"
import vip_date from "../../pages/api/vip_boilerdata"
import style from "../../styles/forms/VolitaireImprovement.module.css"

const VolitaireImprovementProtocol = () => {

    const [selectTab, setTab] = useState("")

    const vipDataMapper = vip_date.map(el => {
        const sum = el.upvotes - el.downvotes
        return <div className={style.vipDiv}>
            <div>
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <Link href={"/"}>Read Request</Link>
            </div>

            <div className={style.arrowButtonsDiv}>
                <button></button>
                <h1>{sum > 0 ? `+${sum}` : `${sum}`}</h1>
                <button></button>
            </div>
        </div>
    })

    const onClick = (tab:any) => {
        setTab(tab)
    }

    let componentToRender;

    switch (selectTab) {
        case "Trending":
            componentToRender = <>{vipDataMapper}</>
            break;
        case "Newest":
            componentToRender = <>{vipDataMapper}</>
            break;
        case "In-Progress":
            componentToRender = <>{vipDataMapper}</>
            break;
        case "Completed":
            componentToRender = <>{vipDataMapper}</>
            break;
        default:
            componentToRender = <>{vipDataMapper}</>;
    }

    return <div>
        <h1>VIP - Volitaire Improvement Protocol</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. Praesent eget nisi elit. Pellentesque blandit ultricies nisl at finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

        <div className={style.trendSelector}>
            <button onClick={() => onClick("Trending")}>Trending</button>
            <button onClick={() => onClick("Newest")}>Newest</button>
            <button onClick={() => onClick("In-Progress")}>In-Progress</button>
            <button onClick={() => onClick("Completed")}>Completed</button>

            <div>
                {componentToRender}
            </div>
        </div>
    </div>
}

export default VolitaireImprovementProtocol