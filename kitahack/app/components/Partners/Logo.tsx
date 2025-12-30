import Image from "next/image";

interface LogoProps {
  src: string;
  name: string;
  width?: number;
  height?: number;
}

function Logo({ src, name, width = 300, height = 61 }: LogoProps) {
  return (
    <Image
      src={src}
      alt={name}
      width={width}
      height={height}
    />
  );
}

export default Logo;