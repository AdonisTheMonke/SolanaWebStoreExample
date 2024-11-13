import Link from "next/link";
import style from "../styles/Navigation.module.css";

export default function Navigation() {
    return (
        <div className={style.navigation}>

            <table className={style.table}>
                <thead>
                    <tr>
                        <th><Link href="/collection">Collection</Link></th>
                        <th><Link href="/mission">About</Link></th>
                        <th><Link href="/social">Social</Link></th>
                        <th><Link href="/store">Store</Link></th>
                        <th><Link href="/connect">Connect</Link></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><Link href="/windbreaker">WindBreaker</Link></td>
                        <td><Link href="/mission#our_people">Mission</Link></td>
                        <td><Link href="https://x.com/">X</Link></td>
                        <td><Link href="/locations">Locations</Link></td>
                        <td><Link href="/contact-form">Contact Form</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/t-shirt">T-Shirt</Link></td>
                        <td><Link href="/mission#who_we_are">Who We Are</Link></td>
                        <td><Link href="https://discord.com/">Discord</Link></td>
                        <td><Link href="/crypto">Crypto</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/sweater">Sweater</Link></td>
                        <td><Link href="/mission#what_we_do">What We Do</Link></td>
                        <td><Link href="https://magiceden.io/">MagicEden</Link></td>
                        <td><Link href="/launchpad">Launchpad</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/shorts">Shorts</Link></td>
                        <td><Link href="/mission#how_we_do_it">How We Do It</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/office-suit">Office Suit</Link></td>
                        <td><Link href="/mission#our_people">Our People</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/underwear">Underwear</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
