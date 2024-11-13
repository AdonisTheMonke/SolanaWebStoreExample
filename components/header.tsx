import Link from "next/link";
import style from "../styles/Navigation.module.css";

export default function Navigation() {
    return (
        <div className={style.navigation}>
            {/* Refactor the list into Links */}
            <div className={style.kurac}>
                <ul>
                    <li><Link href="/collection">Collection</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/social">Social</Link></li>
                    <li><Link href="/store">Store</Link></li>
                    <li><Link href="/connect">Connect</Link></li>
                </ul>
            </div>

            {/* Table layout (if necessary) */}
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
                        <td><Link href="/mission">Mission</Link></td>
                        <td><Link href="/twitter">Twitter</Link></td>
                        <td><Link href="/locations">Locations</Link></td>
                        <td><Link href="/contact-form">Contact Form</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/t-shirt">T-Shirt</Link></td>
                        <td><Link href="/who-we-are">Who We Are</Link></td>
                        <td><Link href="/discord">Discord</Link></td>
                        <td><Link href="/crypto">Crypto</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/sweater">Sweater</Link></td>
                        <td><Link href="/what-we-do">What We Do</Link></td>
                        <td><Link href="/magiceden">MagicEden</Link></td>
                        <td><Link href="/launchpad">Launchpad</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/track-suit">Track Suit</Link></td>
                        <td><Link href="/how-we-do-it">How We Do It</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/office-suit">Office Suit</Link></td>
                        <td><Link href="/our-people">Our People</Link></td>
                    </tr>

                    <tr>
                        <td><Link href="/our-people">Our People</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
