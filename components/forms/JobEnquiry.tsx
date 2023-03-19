import job_data from "../../pages/api/job_enquiry_data"
import style from "../../styles/forms/JobEnquiry.module.css"
import { useState, useEffect } from "react"


const Form3 = () => {

    useEffect(() => {
      setUpdatedJobData(prevData => prevData = job_data)
    }, [])
    

    const [updatedJobData, setUpdatedJobData] = useState<any>([])

    
    const mappedJobLocations = job_data.map( el => {
        return <>
            <option>{el.duration}</option>
        </>
    })

    const mappedJobCategory = job_data.map( el => {
        return <>
            <option>{el.category}</option>
        </>
    })

    const jobDataMapper = updatedJobData.map( el => {
        return <div className={style.jobEnquiryDiv} key={el.title}>
            <div>
                <h1>{el.title} - {el.location} ({el.duration})</h1>
                <p>{el.description}</p>
            </div>

                
                <button>Apply</button>
            
        </div>

    })

    return <div>
        <label>
        Job Category
        <select>
            <option>All</option>
            {mappedJobCategory}
        </select>
        </label>

        <label>
            Location
        <select> {/* This section has to be mapped, because if its harded-coded then only those jobs will be displayed. Map the job_enquiry_data.location to fix this */}
            {mappedJobLocations}
        </select>
        </label>

        <input placeholder="Enter Job Title" onChange={(e) => {
            const potato = job_data.filter(el => el.title.includes(e.target.value))
            setUpdatedJobData(prevData => prevData = potato)
            console.log(potato)
        }}></input>
            {/* Add filter / search fucntion - useState + OnChange */}
        <div>
        {jobDataMapper}
        </div>

    </div>
}

export default Form3