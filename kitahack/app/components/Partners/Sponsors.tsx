import CustomMarquee from './CustomMarquee';

// next is not sponsoring lol, just a placeholder logo for now
const sponsors = [
    { name: 'Xenber', logo: 'xenber.svg', page: 'https://xenber.com/' },
    { name: 'Xenber', logo: 'xenber.svg', page: 'https://xenber.com/' },
    { name: 'Xenber', logo: 'xenber.svg', page: 'https://xenber.com/' },
    { name: 'Xenber', logo: 'xenber.svg', page: 'https://xenber.com/' },
    { name: 'Xenber', logo: 'xenber.svg', page: 'https://xenber.com/' },
    { name: 'Xenber', logo: 'xenber.svg', page: 'https://xenber.com/' },
];

import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { StandardCard } from '@/components/ui/card-variants';
import { typography } from '@/lib/typography';

const contacts = [
    {
        name: 'Fong Jia Xin',
        email: 'jxfong357@gmail.com',
        phone: '010-3013940',
        role: 'Co-Director KitaHack 2026'
    },
    {
        name: 'Issye Lailiyah',
        email: 'issye03@gmail.com',
        phone: '014-3277626',
        role: 'Head of External Liaison KitaHack 2026'
    }
];

function Sponsors() {
    return (
        <CustomMarquee
            header='Sponsors'
            srcFolder='sponsors'
            reverse={false}
            partnerList={sponsors}
            duration={30}
            itemPadding={6}
        />
    );
}

// change below line to export Sponsors when we found sponsors
// else just leave it as CallingForSponsors
export default Sponsors;
