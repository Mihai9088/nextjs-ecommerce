"use client";
import React from "react";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { toast } from "sonner";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast(res.message, {
      action: (
        <Button
          className="bg-primary cursor-pointer text-white hover:bg-gray-800"
          onClick={() => router.push("/cart")}
        >
          Go to cart
        </Button>
      ),
    });
  };

  return (
    <Button
      className="w-full cursor-pointer"
      type="button"
      onClick={handleAddToCart}
    >
      <Plus />
      AddToCart
    </Button>
  );
};

export default AddToCart;
