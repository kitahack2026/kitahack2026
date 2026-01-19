export type Speaker = {
    name: string;
    title: string;
    bio: string;
    workshop: string;
    company?: string;
    image?: string;
};

export const speakers: Speaker[] = [
    {
        name: "Cindy Pua Kah Qi",
        title: "Vice President @ APU Hackthletes & Web Development Lead @ GDGoC APU",
        workshop: "Introduction to Web Development & APIs",
        bio: "Cindy is a passionate software developer serving as Vice President of APU Hackthletes and Web Development Lead for GDGoC APU. With strong expertise in problem-solving and collaborative tech development, she has mentored countless students in bridging technical implementation with strategic project delivery. She specializes in team collaboration, agile development practices, and building user-centered solutions that create real-world impact.",
        image: "/speakers/Cindy-Pua-Kah-Qi.png"
    },
    {
        name: "Raziq Din",
        title: "Full Stack Developer at HKL & Software Engineering Lead @ GDGoC MMU",
        workshop: "Quote It Up ! Your First Android App with API Calls",
        bio: "Raziq Din is a Full Stack Developer at Hospital Kuala Lumpur (HKL) and the Software Engineering Lead at GDGoC Multimedia University. He is actively involved in building real-world web applications in the healthcare sector while mentoring student developers in creating impactful, scalable projects. His passion lies in helping others grow as developers by sharing practical skills and industry insights.",
        image: "/speakers/Raziq-Din.png"
    },
    {
        name: "Vrijraj Singh",
        title: "CTO & Google Developers Expert",
        company: "Google Developers",
        workshop: "Building Scalable Web Apps with Firebase",
        bio: "Vrijraj is a CTO, community builder, and GDE for Firebase and Web Technologies. Formerly a GDG Jalandhar organizer for seven years, he has delivered 400+ technical sessions worldwide. His expertise spans Web, GCP, and UI/UX Design. A dedicated mentor and lifelong learner, he is also a foodie and YouTube enthusiast.",
        image: "/speakers/Vrijraj-Singh.jpeg"
    },
    {
        name: "Salman Firdaus",
        title: "Lead Web Development Core Team @ GDGoC IIUM",
        workshop: "Frontend Development with Flutter",
        bio: "Leading web development initiatives at GDGoC IIUM, Salman specializes in facilitating technical workshops and building solutions for student communities. His experience spans cross-platform mobile development with Flutter and Firebase, full-stack web development, and organizing practical training sessions. As a former KitaHack 2025 Assistant Web Developer, he understands hackathon challenges and helps participants transform ideas into functional, impactful solutions.",
        image: "/speakers/Salman-Firdaus.png"
    },
    {
        name: "Cheng Kar Meng",
        title: "AI & Cloud Innovator",
        workshop: "Turning AI & Cloud Ideas into Real-World Impact",
        bio: "Cheng Kar Meng (William) works at the intersection of AI, Cloud development, and Data Analytics to turn complex ideas into measurable impact. From winning hackathons to leading student organizations, he specializes in building ground-up solutions for real-world problems. A firm believer in growth through persistence, William spends his off-hours bouldering, reminding himself that progress comes from showing up and pushing past hurdles, one hold at a time.",
        image: "/speakers/Cheng-Kar-Meng-GCP.jpg"
    },
    {
        name: "Ooi Rui Zhe",
        title: "KitaHack 2025 Champion",
        company: "University of Malaya",
        workshop: "From Zero to Hero: KitaHack 2025 Champions",
        bio: "Rexton is a second-year Computer Science (AI) student at University of Malaya and the winner of KitaHack 2025. He has built an impressive track record across entrepreneurship, data analytics, and community leadership. From heading sponsorship operations at UM Startup Community to leading multimedia initiatives, he brings a unique perspective on how technology intersects with storytelling and business strategy. As a KitaHack champion, he understands what it takes to build winning solutions under pressure and turn ambitious ideas into executable realities."
    }
];
