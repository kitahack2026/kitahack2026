"use client"

import Image from "next/image"
import logo from "../../public/logo.png";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

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

// TODO: Add other links to the nav items
// TODO: Add animations maybe to the mobile dropdown

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header>
			<nav aria-label="Main Navigation">
				<div className="bg-[#1A1A1A]">
					<div className="flex gap-10 p-5 items-center max-w-360 mx-auto relative">
						<Link href={"/"}><Image src={logo} className="w-28 md:w-50" alt="KitaHack 2026 logo"></Image></Link>
						
						<ul className="hidden md:flex flex-1 justify-around gap-5">
							{navItems.map((navItem) => {
								return <li key={navItem.name} className={`${inter.className} font-bold text-lg text-[#F5F5F7]`}><Link href={navItem.href}>{navItem.name}</Link></li>
							})}
						</ul>

						<button 
							className="md:hidden ml-auto text-[#F5F5F7] focus:outline-none"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
							aria-expanded={isMenuOpen}
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								{isMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>

					{isMenuOpen && (
						<div className="md:hidden bg-[#1A1A1A] border-t border-gray-700">
							<ul className="flex flex-col">
								{navItems.map((navItem) => {
									return (
										<li key={navItem.name} className={`${inter.className} font-bold text-lg text-[#F5F5F7] border-b border-gray-700`}>
											<Link 
												href={navItem.href} 
												className="block px-5 py-4 hover:bg-gray-800 transition-colors"
												onClick={() => setIsMenuOpen(false)}
											>
												{navItem.name}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					)}
				</div>
			</nav>
		</header>
	)
}

export default NavBar;