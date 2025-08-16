import Image from "next/image";
import Link from "next/link";

import SheetCart from "@/components/common/sheet-cart";
import SheetMenu from "@/components/common/sheet-menu";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <Image src="/logo.svg" alt="BEWEAR" width={100} height={26} />
      </Link>
      <div className="flex items-center gap-3">
        <SheetCart />
        <SheetMenu />
      </div>
    </header>
  );
}
