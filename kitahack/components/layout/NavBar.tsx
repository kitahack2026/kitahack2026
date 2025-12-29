import Image from "next/image"
import logo from "../public/logo.png";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
	subsets: ['latin']
})

type NavItemType = {
	name: string,
	href: string
}

const navItems: NavItemType[] = [
	{
		name: "About",
		href: "/"
	},
	{
		name: "Google Technologies",
		href: "https://developers.google.com/"
	},
	{
		name: "Criteria",
		href: "/"
	},
	{
		name: "FAQs",
		href: "/"
	}
]

//TODO: Edit for mobile layout
//TODO: Add other nav items links

function NavBar() {
	return (
		<header>
			<nav aria-label="Main Navigation">
				<div className="flex p-5 items-center bg-[#1A1A1A]">
					<Link href={"/"}><Image src={logo} alt="KitaHack 2026 logo"></Image></Link>
					<ul className="flex-1 flex justify-evenly gap-5">
						{navItems.map((navItem) => {
							return <li key={navItem.name} className={`${inter.className} font-bold text-lg`}><Link href={navItem.href}>{navItem.name}</Link></li>
						})}
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default NavBar;