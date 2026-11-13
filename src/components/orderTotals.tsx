import { useMemo, type Dispatch } from "react";
import type { TOrderItem } from "../types";
import { formatCurrency } from "../helpers";
import type { TOrderAcctions } from "../reducers/order-reducer";

interface OrderTotalsProps {
  order: TOrderItem[];
  tip: number;
  dispatch: Dispatch<TOrderAcctions>;
}
const OrderTotals = ({ order, tip, dispatch }: OrderTotalsProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order],
  );
  const tipAmount = useMemo(
    () => subtotalAmount * tip,
    [subtotalAmount, tip],
  );
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
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar orden
      </button>
    </>
  );
};

export default OrderTotals;
