import CustomMarquee from "./CustomMarquee";

const organizers = [
  { name: "Universiti Malaya", logo: "um.svg", page: "https://gdg.community.dev/gdg-on-campus-universiti-malaya-kuala-lumpur-malaysia/" },
  { name: "Sunway University", logo: "sunway.svg", page: "https://gdg.community.dev/gdg-on-campus-sunway-university-selangor-malaysia/" },
  { name: "Monash University Malaysia", logo: "mum.svg", page: "https://gdg.community.dev/gdg-on-campus-monash-university-malaysia-selangor-malaysia/" },
  { name: "Universiti Sains Malaysia", logo: "usm.svg", page: "https://gdg.community.dev/gdg-on-campus-universiti-sains-malaysia-penang-malaysia/" },
  { name: "Universiti Teknologi Malaysia", logo: "utm.svg", page: "https://gdg.community.dev/gdg-on-campus-universiti-teknologi-malaysia-johor-bahru-malaysia/" },
  { name: "Universiti Putra Malaysia", logo: "upm.svg", page: "https://gdg.community.dev/gdg-on-campus-universiti-putra-malaysia-selangor-malaysia/" },
  { name: "Asia Pacific University", logo: "apu.svg", page: "https://gdg.community.dev/gdg-on-campus-asia-pacific-university-of-technology-innovation-kuala-lumpur-malaysia/" },
  { name: "Multimedia University", logo: "mmu.svg", page: "https://gdg.community.dev/gdg-on-campus-multimedia-university-selangor-malaysia/" },
  { name: "Tunku Abdul Rahman University of Management and Technology", logo: "tarumt.svg", page: "https://gdg.community.dev/gdg-on-campus-tunku-abdul-rahman-university-of-management-and-technology-kuala-lumpur-malaysia/" },
  { name: "International Islamic University Malaysia", logo: "iium.svg", page: "https://gdg.community.dev/gdg-on-campus-international-islamic-university-malaysia-selangor-malaysia/" },
];

function Organizers() {
  return (
    <CustomMarquee
      header="Organizers"
      srcFolder="gdgoc"
      reverse={true}
      partnerList={organizers}
      duration={40}
      lightTheme={true}
    />
  );
}

export default Organizers;