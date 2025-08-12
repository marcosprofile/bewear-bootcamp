"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev -1 : prev))
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="space-y-4 px-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex items-center justify-between rounded-lg outline-1 outline-zinc-200 w-36 gap-4 p-1">
        <Button size="icon" variant="ghost" onClick={handleDecrement}>
          <Minus />
        </Button>
        <p>{ quantity }</p>
        <Button size="icon" variant="ghost" onClick={handleIncrement}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
