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
import { formatCentsToBRL } from "@/helpers/money";

import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
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

        <div className="flex h-full flex-col px-5 pb-5">
          <div className="flex h-full max-h-full flex-col overflow-hidden">
            <ScrollArea>
              <div className="flex h-full flex-col gap-8">
                {cartIsLoading && <div>Carregando...</div>}
                {cart?.items.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    productName={item.productVariant.product.name}
                    productVariantImageUrl={item.productVariant.imageUrl}
                    productVariantName={item.productVariant.name}
                    productVariantPriceInCents={
                      item.productVariant.priceInCents
                    }
                    quantity={item.quantity}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
          {cart?.items.length > 0 && (
            <div className="flex flex-col gap-4">
              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Subtotal</p>
                <p>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Entrega</p>
                <p>GRÁTIS</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs font-medium">
                <p>Total</p>
                <p>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
              </div>

              <Button className="mt-5 rounded-full">Finalizar compra</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
