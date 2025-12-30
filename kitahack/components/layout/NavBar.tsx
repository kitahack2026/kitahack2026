"use client"

import Image from "next/image"
import logo from "../../public/logo.png";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Menu, X } from "lucide-react";

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
		href: "/#about"
	},
	{
		name: "Google Technologies",
		href: "/#google-tech"
	},
	{
		name: "Criteria",
		href: "/#judging"
	},
	{
		name: "FAQs",
		href: "/#faq"
	}
]

function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 80) {
				setIsVisible(false);
				setIsMenuOpen(false);
			} else {
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', controlNavbar);

		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<motion.header
			className="fixed top-0 left-0 right-0 z-50"
			initial={{ y: 0 }}
			animate={{ y: isVisible ? 0 : -100 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
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
							{isMenuOpen ? (
								<X size={24}></X>
							) : (
								<Menu size={24}></Menu>
							)}
						</button>
					</div>

					<AnimatePresence>
						{isMenuOpen && (
							<motion.div 
								className="md:hidden bg-[#1A1A1A] border-t border-gray-700 overflow-hidden"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
							>
								<motion.ul 
									className="flex flex-col"
									initial="closed"
									animate="open"
									exit="closed"
									variants={{
										open: {
											transition: { staggerChildren: 0.07, delayChildren: 0.1 }
										},
										closed: {
											transition: { staggerChildren: 0.05, staggerDirection: -1 }
										}
									}}
								>
									{navItems.map((navItem) => {
										return (
											<motion.li 
												key={navItem.name} 
												className={`${inter.className} font-bold text-lg text-[#F5F5F7] border-b border-gray-700`}
												variants={{
													open: {
														y: 0,
														opacity: 1,
														transition: {
															y: { stiffness: 1000, velocity: -100 }
														}
													},
													closed: {
														y: -20,
														opacity: 0,
														transition: {
															y: { stiffness: 1000 }
														}
													}
												}}
											>
												<Link 
													href={navItem.href} 
													className="block px-5 py-4 hover:bg-gray-800 transition-colors"
													onClick={() => setIsMenuOpen(false)}
												>
													{navItem.name}
												</Link>
											</motion.li>
										)
									})}
								</motion.ul>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</nav>
		</motion.header>
	)
}

export default NavBar;
