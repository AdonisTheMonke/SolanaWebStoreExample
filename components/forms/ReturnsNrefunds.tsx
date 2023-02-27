import style from "../../styles/forms/ReturnsNrefunds.module.css"
import data from "../../pages/api/job_enquiry_data"

const Form6 = () => {
    
    const dataMapper = data.map( el => {
        return <div className={style.refundTopic}>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
            <a>Read Article</a>
        </div>
    })

    return <div>
        <h1>Returns & Refunds</h1>
        <br />
        
        <div className={style.gridRR}>
            {dataMapper}
        </div>
    </div>
}

export default Form6