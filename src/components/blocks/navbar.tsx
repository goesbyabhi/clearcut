import Image from "next/image";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="absolute w-full md:max-w-[69%] z-10">
      <nav className="flex justify-between items-center m-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            width={50}
            height={50}
            alt="Logo of ClearCut"
            className="mix-blend-difference"
            priority
          />
          <p>
            <span className="text-lg font-medium">Clear</span>
            <span className="text-lg font-bold -mt-2">Cut</span>
          </p>
        </Link>
        {
          // <Button asChild variant={"ghost"}><Link className="flex text-sm items-center gap-x-2" href="/register"><LogInIcon size={22} />Login</Link></Button>
        }
      </nav>
    </div>
  );
}
