import style from "../styles/Support.module.css"
import { useState } from "react"

import Form1 from "./forms/BusinessEnquiry"
import Form2 from "./forms/VolitaireImprovement"
import Form3 from "./forms/JobEnquiry"
import Form4 from "../components/forms/form4"
import Form5 from "./forms/Shipping"
import Form6 from "./forms/ReturnsNrefunds"

const SupportSelector = () => {

    
    const [selectedOption, setSelectedOption] = useState("")

    const handleClick = (option:any) => {
        setSelectedOption(option)
    }

    let componentToRender

    switch (selectedOption) {
        case "Business Enquiry":
          componentToRender = <Form1 />;
          break;
        case "Volitaire Improvement Protocol":
          componentToRender = <Form2 />;
          break;
        case "Job Enquiry":
          componentToRender = <Form3 />;
          break;
        case "Order Problems":
          componentToRender = <Form1 />;
          break;
        case "Shipping":
          componentToRender = <Form5 />;
          break;
        case "Returns & Refunds":
          componentToRender = <Form6 />;
          break;
        default:
          componentToRender = <Form1/>;
      }



    return <div className={style.gridSelector}> 

        
        
        <div className={style.selectionGrid}>
        
            <div onClick={() => handleClick("Business Enquiry")}><h1>Business Enquiry</h1></div>
            <div onClick={() => handleClick("Volitaire Improvement Protocol")}><h1>Volitaire Improvement Protocol</h1></div>
            <div onClick={() => handleClick("Job Enquiry")}><h1>Job Enquiry</h1></div>

            <div onClick={() => handleClick("Order Problems")}><h1>Order Problems</h1></div>
            <div onClick={() => handleClick("Shipping")}><h1>Shipping</h1></div>
            <div onClick={() => handleClick("Returns & Refunds")}><h1>Returns & Refunds</h1></div>
            

        </div>

        <div className="selectedOptionGoesHere">
            {componentToRender}
        </div>

    </div>
}

export default SupportSelector
