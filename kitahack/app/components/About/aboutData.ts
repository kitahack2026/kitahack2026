import { AboutCardData } from './types';

/**
 * About section content data
 * Each card has a two-tone gradient glow and alternating image position
 */
export const aboutData: AboutCardData[] = [
    {
        id: 1,
        title: "About KitaHack",
        description: "Launched in 2021, KitaHack is a nationwide collaboration among all Google Developer Groups on Campus (GDGOC) chapters in Malaysia. More than just a hackathon, KitaHack serves as a platform for dedicated and talented individuals to develop their skills, tackle real-world AI and SDG-aligned challenges, and prepare participants for the Google Solution Challenge.",
        imagePath: "/about-kitahack.png",
        imageAlt: "KitaHack 2026 Logo",
        gradientFrom: "#47AD7A", // Green
        gradientTo: "#3B84F7",   // Blue
        imagePosition: "right"
    },
    {
        id: 2,
        title: "Building Community",
        description: "KitaHack aims to build a supportive community for students to exchange ideas, gain practical experience, and create impactful solutions using Google technologies. The event also encourages students to join the Google Developer Groups on Campus (GDGoC) Solution Challenge, where participants worldwide are invited to solve one of the United Nations Sustainable Development Goals (UN SDGs) using Google tools.",
        imagePath: "/about-community.jpg",
        imageAlt: "Students collaborating on Google technologies",
        gradientFrom: "#CB5C6D", // Red
        gradientTo: "#D1AC34",   // Orange
        imagePosition: "left"
    },
    {
        id: 3,
        title: "Theme: Tech for Impact",
        description: "Tech for Impact: Building Solutions for the UN Sustainable Development Goals. Participants will develop technology-driven solutions that address real-world social, environmental, or economic challenges aligned with the United Nations Sustainable Development Goals (SDGs). Teams may use Google technologies (such as Maps, Firebase, Cloud, Workspace, etc.) where relevant to enhance scalability, accessibility, or effectiveness.",
        imagePath: "/sdg-goals.png",
        imageAlt: "UN Sustainable Development Goals",
        gradientFrom: "#D1AC34", // Yellow
        gradientTo: "#47AD7A",   // Green
        imagePosition: "right"
    }
];
