import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
        <Link href="https://forms.gle/hSesfzQp4YfAwbrWA" target="_blank">
            <Button 
            size="lg" 
            className="
                rounded-full 
                bg-gradient-to-r from-[#3B84F7] to-[#CB5C6D] 
                text-white 
                shadow-lg shadow-[#3B84F7]/40 
                hover:shadow-[#CB5C6D]/60 
                hover:scale-105 
                transition-all duration-300 
                h-14 px-8 text-base font-bold tracking-wide
            "
            >
            Register Now
            </Button>
        </Link>
    </div>
  );
}

