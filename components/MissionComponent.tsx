import style from "../styles/MissionComponent.module.css"
import Footer from "./Footer"
import Image from "next/image"

const MissionComponent = () => {
    return<>
    <div className={style.gridDiv}>
            
            <div className={style.element1}>
        
                <div>
                    <Image
                        src={"/images/logo.png"}
                        height={180}
                        width={180}
                        alt={"Volitaire About Logo"}
                    ></Image>
                    <hr></hr>
        
                    <ul className={style.ulMenu}>
                        <li>Mission</li>
                        <li>Who We Are</li>
                        <li>What We Do</li>
                        <li>How We Do It</li>
                        <li>NFT</li>
                        <li>Our People</li>
                    </ul>
                </div>
        
            </div>
        
            <div className={style.element2}>
                <div>
        
                    <h1>Welcome</h1>
                    <p className={style.quote}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In aliquam erat vitae eros efficitur placerat. Praesent eget nisi elit.</p>
                    <p className={style.quote}>"Dare to think for yourself" - Voltaire</p>
                    <br></br>
                    <hr></hr>
        
                    <br></br>
                    <h1>What We Do</h1>
                    <p>We create unique pieces of limited edition fit for the naturally acquisitive, while providing innovative tech solutions to enhance the shopping experience online.
                    </p>
                    <br></br>
                    <hr></hr>
        
        
                    <br></br>
                    <h1>Who We Are</h1>
                    <p>At our core we are a team of creatives with experience in fields ranging from Tailoring and Design to Web Development and systems integration. Our team is dedicated to bringing the best Web3 solutions to the customer so that their user experience matches the quality of our product.</p>
                    <br></br>
                    <hr></hr>
        
        
                    <br></br>
                    <h1>How We Do It</h1>
                    <p>We source and handpick our materials in person, in Germany, placing an emphasis on quality and longevity. Working with our experienced Designer and Tailor, Pari Niemann, we are able to customise our fit to offer a premium finish and feel.</p>
                    <br></br>
                    <hr></hr>
        
                    <br></br>
                    <h1>NFT</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. Some of the things you get are and participate in:</p>
                    <ul className={style.nftUl}>
                        <li>10% Discount per NFT on all items up to 50%</li>
                        <li>Launchpad Access</li>
                        <li>NFT Holder Exclusive Merch</li>
                        <li>Buyback Program</li>
                        <li>Equity Model</li>
                    </ul>
                    <br></br>
                    <hr></hr>
        
                    <br></br>
                    <h1>Our People</h1>
                    <br></br>
                    <ul style={{listStyle: "none", padding: "0px"}} className={style.nftUl}>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        <li>User 4</li>
                        <li>User 5</li>
                    </ul>
                    <br></br>
                    <hr></hr>
        
                </div>
            </div>
        
            <div className={style.element3}>
        
                <div>
        
                    <ul className={style.nftUl} style={{color: "black", listStyle: "none"}}>
                        <li>
                            <label>
                                <input style={{marginRight:"15px"}} type={"checkbox"}></input>
                                <b>Website Development</b>
                                <p className={style.roadmapDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. </p>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input style={{marginRight:"15px"}} type={"checkbox"}></input>
                                <b>Community Server</b>
                                <p className={style.roadmapDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. </p>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input style={{marginRight:"15px"}} type={"checkbox"}></input>
                                <b>MagicEden Mint</b>
                                <p className={style.roadmapDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. </p>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input style={{marginRight:"15px"}} type={"checkbox"}></input>
                                <b>Official Web Store</b>
                                <p className={style.roadmapDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. </p>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input style={{marginRight:"15px"}} type={"checkbox"}></input>
                                <b>Collection Release</b>
                                <p className={style.roadmapDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam erat vitae eros efficitur placerat. </p>
                            </label>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        
    </>
}

export default MissionComponent