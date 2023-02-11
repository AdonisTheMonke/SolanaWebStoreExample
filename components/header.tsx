import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import style from "../styles/Navigation.module.css"

export default function Navigation(){


    return(
            <div className={style.navigation}>

                <div className={style.kurac}>
                    <ul>
                        <li>Collection</li>
                        <li>About</li>
                        <li>Social</li>
                        <li>Store</li>
                        <li>Connect</li>
                    </ul>
                </div>

                <table className={style.table}>
                    <thead>
                        <tr>
                            <th><a href="/collection">Collection</a></th>
                            <th><a href="/mission">About</a></th>
                            <th>Social</th>
                            <th>Store</th>
                            <th>Connect</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>WindBreaker</td>
                            <td>Mission</td>
                            <td>Twitter</td>
                            <td>Locations</td>
                            <td>Contact Form</td>
                        </tr>

                        <tr>
                            <td>T-Shirt</td>
                            <td>Who We Are</td>
                            <td>Discord</td>
                            <td>Crypto</td>
                        </tr>

                        <tr>
                            <td>Sweater</td>
                            <td>What We Do</td>
                            <td>MagicEden</td>
                            <td>Launchpad</td>
                        </tr>

                        <tr>
                            <td>Track Suit</td>
                            <td>How We Do It</td>
                            <td>Medium</td>
                        </tr>

                        <tr>
                            <td>Office Suit</td>
                            <td>Our People</td>
                        </tr>

                        <tr>
                            <td>Our People</td>
                        </tr>
                    </tbody>
                </table> 
            </div>

    )
}