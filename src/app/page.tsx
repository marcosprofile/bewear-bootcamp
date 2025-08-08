import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Button>Bootcamp</Button>
      <br />
      <Link href="/product">Product</Link>
    </div>
  );
}
