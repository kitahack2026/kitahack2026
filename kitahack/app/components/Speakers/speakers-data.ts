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
        name: "Vrijraj",
        title: "CTO & Google Developers Expert",
        company: "Google Developers",
        workshop: "Building Scalable Web Apps with Firebase",
        bio: "Vrijraj is a CTO, community builder, and GDE for Firebase and Web Technologies. Formerly a GDG Jalandhar organizer for seven years, he has delivered 400+ technical sessions worldwide. His expertise spans Web, GCP, and UI/UX Design. A dedicated mentor and lifelong learner, he is also a foodie and YouTube enthusiast.",
        image: "/speakers/Vrijraj-Singh.jpeg"
    },
{
        name: "Cheng Kar Meng (William) ",
        title: "AI & Cloud Innovator",
        workshop: "Turning AI & Cloud Ideas into Real-World Impact",
        bio: "Cheng Kar Meng (William) works at the intersection of AI, Cloud development, and Data Analytics to turn complex ideas into measurable impact. From winning hackathons to leading student organizations, he specializes in building ground-up solutions for real-world problems. A firm believer in growth through persistence, William spends his off-hours bouldering, reminding himself that progress comes from showing up and pushing past hurdles, one hold at a time.",
        image: "/speakers/Cheng-Kar-Meng-GCP.jpg"
    }
];
