import path from "path";
import { Marquee } from "@devnomic/marquee";
import "./marquee.css"
import Logo from "./Logo";

interface MarqueeProps {
  header: string;
  srcFolder: string;
  reverse: boolean;
  partnerList: { name: string; logo: string; page: string }[];
  duration: number;
}

function CustomMarquee({ header, srcFolder, reverse, partnerList, duration }: MarqueeProps) {
  return (
    <section className="py-15">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-500">{header}</h1>
      <div className="bg-gray-300 py-5 mx-10 lg:mx-10 xl:mx-40 2xl:mx-60 rounded-2xl">
        <Marquee
          fade={true}
          pauseOnHover={true}
          className={`[--duration:${duration}s]`}
          reverse={reverse}
        >
          {partnerList.map((partner, index) => (
            <a 
              key={index}
              href={partner.page}
              target="_blank"
              rel="noopener noreferrer"
              className="block grayscale-10 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-102"
            >
              <Logo src={path.join(srcFolder, partner.logo)} name={partner.name} />
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default CustomMarquee;