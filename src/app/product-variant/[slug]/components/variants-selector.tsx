import Image from "next/image";
import Link from "next/link";

import { productVariantTable } from "@/db/schema";

interface VariantSelectorProps {
  selectedVariantSlug: string;
  variants: (typeof productVariantTable.$inferSelect)[];
}

export default function VariantSelector({
  selectedVariantSlug,
  variants,
}: Readonly<VariantSelectorProps>) {
  return (
    <div className="flex items-center gap-6">
      {variants.map((variant) => (
        <Link
          href={`/product-variant/${variant.slug}`}
          key={variant.id}
          className={
            selectedVariantSlug === variant.slug
              ? "outline-primary rounded-xl outline-2"
              : ""
          }
        >
          <Image
            width={68}
            height={68}
            src={variant.imageUrl}
            alt={variant.name}
            className="rounded-xl"
            draggable={false}
          />
        </Link>
      ))}
    </div>
  );
}
