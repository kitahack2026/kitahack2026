import CustomMarquee from "./CustomMarquee";
import {Button} from "@/components/ui/button";

// next is not sponsoring lol, just a placeholder logo for now
const sponsors = [
    {name: "next", logo: "next.svg", page: "https://nextjs.org/"},
    {name: "next", logo: "next.svg", page: "https://nextjs.org/"},
    {name: "next", logo: "next.svg", page: "https://nextjs.org/"},
    {name: "next", logo: "next.svg", page: "https://nextjs.org/"},
    {name: "next", logo: "next.svg", page: "https://nextjs.org/"},
    {name: "next", logo: "next.svg", page: "https://nextjs.org/"},
];

function CallingForSponsors() {
    return (
        <section className="py-10 px-10">
            <h1 className="text-4xl font-bold mb-10 text-center text-blue-500">Calling for Sponsors</h1>
            <div className="max-w-5xl mx-auto bg-gray-800/50 p-10 rounded-xl border border-gray-700 text-center">
                <p className="text-lg md:text-2xl text-gray-200 mb-10">
                    We are actively seeking sponsors to support KitaHack 2026. By partnering with us, your organization will gain visibility among a diverse group of talented students and tech enthusiasts. Sponsors will have the opportunity to showcase their brand, network with participants, and contribute to the growth of the tech community.
                </p>
                <a 
                  href=""
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-2xl font-bold py-3 px-6 rounded-lg text-center transition-all shadow-lg shadow-blue-900/20"
                >
                  Contact Us
                </a>
            </div>
        </section>
    )
}

function Sponsors() {
  return (
    <CustomMarquee
      header="Sponsors"
      srcFolder="sponsors"
      reverse={false}
      partnerList={sponsors}
      duration={30}
    />
  );
}

// change below line to export Sponsors when we found sponsors
// else just leave it as CallingForSponsors
export default CallingForSponsors;