import { useMemo } from "react";
import type { TOrderItem } from "../types";
import { formatCurrency } from "../helpers";

interface OrderTotalsProps {
  order: TOrderItem[];
  tip: number;
  placeOrder: () => void;
}
const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order],
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const total = subtotalAmount + tipAmount;
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propinas</h2>
        <p>
          Subtotal a pagar:&nbsp;
          <span className="font-black">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:&nbsp;
          <span className="font-black">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:&nbsp;
          <span className="font-black">{formatCurrency(total)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black uppercase p-3 text-white font-bold mt-10 disabled:opacity-10"
        disabled={!total}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </>
  );
};

export default OrderTotals;
