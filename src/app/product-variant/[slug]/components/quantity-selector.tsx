"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="space-y-4 px-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex w-36 items-center justify-between gap-4 rounded-lg p-1 outline-1 outline-zinc-200">
        <Button size="icon" variant="ghost" onClick={handleDecrement}>
          <Minus />
        </Button>
        <p>{quantity}</p>
        <Button size="icon" variant="ghost" onClick={handleIncrement}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
