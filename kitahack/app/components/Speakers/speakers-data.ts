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
        name: "Cindy Pua Kah Qi ",
        title: "Vice President @ APU Hackthletes & Web Development Lead @ GDGoC APU",
        workshop: "Introduction to Web Development & APIs",
        bio: "Cindy is a passionate software developer currently serving as Vice President of APU Hackthletes and Web Development Lead for Google Developer Group on Campus APU. With a strong foundation in problem-solving and collaborative tech development, she brings hands-on experience in managing innovative projects and leading technical teams.\nThrough her roles in APU Hackthletes and GDGoC APU, Cindy has mentored countless students, helping them bridge the gap between technical implementation and strategic project delivery. She is dedicated to nurturing the next generation of developers and guiding them in transforming ideas into tangible, user-centered solutions.\nCindy thrives in dynamic environments where she can share insights on effective team collaboration, agile development practices, and building solutions that create real-world impact.",
        image: "/speakers/Cindy-Pua-Kah-Qi.png"
    },
    {
        name: "Raziq Din",
        title: "Vice President of Goal Execution (External Affairs) @ IT Society Cyberjaya, Multimedia University",
        workshop: "Quote It Up ! Your First Android App with API Calls",
        bio: "Raziq Din bin Mohd Tasriri, as Director of Tech Career Days 2025 and Vice President of Goal Execution (External Affairs) at IT Society Cyberjaya, Multimedia University, Raziq specializes in connecting students with real-world opportunities in tech. He brings a unique blend of technical expertise in front-end development and strategic vision in building partnerships with industry leaders, transforming how students access career pathways and professional growth.\nBeyond his organizational leadership, Raziq is deeply committed to hands-on development and community engagement. From competing in hackathons to building solutions for healthcare conferences, he demonstrates that great software comes from understanding user needs and solving real problems. His approach to mentorship focuses on practical skill-building and helping students discover their potential through collaboration, experimentation, and meaningful project work.",
        image: "/speakers/Raziq-Din.png"
    },
    {
        name: "Vrijraj",
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
        bio: "Currently leading web development initiatives as the Lead Web Development Core Team member at Google Developer Group on Campus IIUM, Salman specializes in facilitating technical workshops and building solutions that serve student communities. His experience spans cross-platform mobile development with Flutter and Firebase, full-stack web development, and organizing training sessions that equip students with practical coding skills. \nFrom developing official organization websites to creating mobile applications and leading technical workshops, Salman brings a hands-on approach to teaching and mentorship. As a former KitaHack 2025 Assistant Web Developer and active contributor across multiple tech communities, he understands the challenges students face in hackathons and is passionate about helping participants transform their ideas into functional, impactful solutions through effective technical guidance and collaborative learning.",
        image: "/speakers/Salman-Firdaus.png"
    },
    {
        name: "Cheng Kar Meng (William) ",
        title: "AI & Cloud Innovator",
        workshop: "Turning AI & Cloud Ideas into Real-World Impact",
        bio: "Cheng Kar Meng (William) works at the intersection of AI, Cloud development, and Data Analytics to turn complex ideas into measurable impact. From winning hackathons to leading student organizations, he specializes in building ground-up solutions for real-world problems. A firm believer in growth through persistence, William spends his off-hours bouldering, reminding himself that progress comes from showing up and pushing past hurdles, one hold at a time.",
        image: "/speakers/Cheng-Kar-Meng-GCP.jpg"
    }
];
