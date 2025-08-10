import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";

export default async function Home() {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
      category: true,
    },
  });

  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const category = await db.query.categoryTable.findMany({});

  return (
    <div>
      <Header />
      <div className="space-y-6 pb-6">
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
          <CategorySelector categories={category} />
        </div>
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
        <ProductList products={newlyCreatedProducts} title="Novos produtos" />
      </div>
    </div>
  );
}
