import Image from "next/image";

import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";

export default async function Home() {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
      category: true
    }
  });

  return (
    <div>
      <Header />
      <div className="space-y-6">
        <div className="p-4">
          <Image
            src="/banner-mobile.png"
            alt="Leve uma vida com estilo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <ProductList products={products} title="Mais vendidos" />
        <div className="p-4">
          <Image
            src="/banner-2-mobile.png"
            alt="Autêntico"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
