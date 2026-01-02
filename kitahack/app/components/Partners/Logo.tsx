import Image from 'next/image';

interface LogoProps {
    src: string;
    name: string;
    width?: number;
    height?: number;
}

export default function Logo({
    src,
    name,
    width = 300,
    height = 61,
}: LogoProps) {
    return (
        <Image
            src={src}
            alt={`${name} logo`}
            width={width}
            height={height}
            loading='lazy'
        />
    );
}
