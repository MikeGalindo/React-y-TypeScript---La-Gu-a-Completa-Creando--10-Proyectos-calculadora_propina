import { useState } from "react";
import type { TMenuItem, TOrderItem } from "../types";
export const useOrder = () => {
  const [order, setOrder] = useState<TOrderItem[]>([]);
  const [tip, setTip] = useState(0);
  const addItem = (item: TMenuItem) => {
    setOrder((prev) => {
      const exists = prev.some((orderItem) => orderItem.id === item.id);

      if (exists) {
        return prev.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const removeItem = (id: TOrderItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };
  const placeOrder = () => {
    setOrder([]);
    setTip(0);
    console.log("Orden guadada");
  };
  return { order, addItem, removeItem, tip, setTip, placeOrder };
};
