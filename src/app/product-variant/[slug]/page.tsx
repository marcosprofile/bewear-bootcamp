import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import QuantitySelector from "./components/quantity-selector";
import VariantSelector from "./components/variants-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductVariantPage({
  params,
}: ProductVariantPageProps) {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });
  if (!productVariant) {
    return notFound();
  }
  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });

  return (
    <div className="min-h-[calc(100vh-5.5rem)]">
      <Header />
      <div className="flex flex-col gap-10 pb-12">
        <div className="p-4">
          <Image
            src={productVariant.imageUrl}
            alt={productVariant.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full rounded-3xl object-cover"
            draggable={false}
          />
        </div>

        <div className="px-4">
          <VariantSelector
            selectedVariantSlug={productVariant.slug}
            variants={productVariant.product.variants}
          />
        </div>

        <div className="space-y-1 px-4">
          <h2 className="text-lg font-semibold">
            {productVariant.product.name}
          </h2>
          <h3 className="text-muted-foreground text-sm">
            {productVariant.name}
          </h3>
          <h3 className="pt-3 text-lg font-semibold">
            {formatCentsToBRL(productVariant.priceInCents)}
          </h3>
        </div>

        <QuantitySelector />

        {/* BOTÕES */}
        <div className="flex flex-col gap-3 px-4">
          <Button variant="outline" className="rounded-full" size="lg">
            Adicionar à sacola
          </Button>
          <Button className="rounded-full" size="lg">
            Compar agora
          </Button>
        </div>

        <div className="px-4">
          <p className="text-sm">{productVariant.product.description}</p>
        </div>
      </div>

      <div className="py-10">
        <ProductList
          title="Você também pode gostar"
          products={likelyProducts}
        />
      </div>
    </div>
  );
}
