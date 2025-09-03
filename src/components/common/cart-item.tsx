import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image"

import { formatCentsToBRL } from "@/helpers/money";

import { Button } from "../ui/button";

interface CartItemProps {
  id: string;
  productName: string;
  productVariantName: string;
  productVariantImageUrl: string;
  productVariantPriceInCent: number;
  quantity: number;
}

export default function CartItem({
  id,
  productName,
  productVariantName,
  productVariantImageUrl,
  productVariantPriceInCents,
  quantity,
}: Readonly<CartItemProps>) {
  return (
    <div className="flex items-center justify-between" id={id}>
      <div className="flex items-center gap-4">
        <Image
          src={productVariantImageUrl}
          alt={productVariantName}
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">{productName}</p>
          <span className="text-muted-foreground text-xs font-medium">
            {productVariantName}
          </span>
          <div className="flex w-[100px] items-center justify-between rounded-lg border p-1">
            <Button className="h-4 w-4" variant="ghost" onClick={() => {}}>
              {quantity < 2 && <TrashIcon />}
              {quantity > 1 && <MinusIcon />}
            </Button>
            <p>{quantity}</p>
            <Button className="h-4 w-4" variant="ghost" onClick={() => {}}>
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-1">
        <p className="text-sm font-bold">
          {formatCentsToBRL(productVariantPriceInCents)}
        </p>
      </div>
    </div>
  );
}
