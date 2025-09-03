"use client";

import { useQuery } from "@tanstack/react-query";
import { ShoppingBag, ShoppingBasket } from "lucide-react";
import Image from "next/image";

import getCart from "@/actions/get-cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import CartItem from "./cart-item";

export default function SheetCard() {
  const { data: cart, isPending: cartIsLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart()
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <ShoppingBasket />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-2">
              <ShoppingBag className="size-xs" />
              Sacola
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-4 px-4">
          {cartIsLoading && <div>Carregando...</div>}
          {cart?.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              productName={item.productVariant.product.name}
              productVariantImageUrl={item.productVariant.imageUrl}
              productVariantName={item.productVariant.name}
              productVariantPriceInCents={item.productVariant.priceInCents}
              quantity={item.quantity}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
