const BusinessEnquiry = () => {
    return <div>
        <h1>Business Enquiry</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. Praesent eget nisi elit. Pellentesque blandit ultricies nisl at finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

        <form>
                <label>Full Name</label> 
                <input></input>

                <label>Email Address</label>
                <input></input>

            <label>Subject:</label>
            <input></input>

            <label>Select Order</label>
            <select>
                <option>#1239818</option>
                <option>#12333318</option>
                <option>#00028</option>
            </select>

            <label>Phone Number</label>
            <input></input>

            

            <label>Language</label>
            <select>
                <option>English</option>
                <option>German</option>
                <option>Turkish</option>
                <option>Russian</option>
                <option>Spanish</option>
            </select>

            <label>Message</label>
            <textarea style={{minWidth: "100%", minHeight: "200px"}}></textarea>

            <button>Submit</button>
        </form>
    </div>
}

export default BusinessEnquiry