import type { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import type { TOrderItem } from "../types";
import type { TOrderAcctions } from "../reducers/order-reducer";

interface OrderContents {
  order: TOrderItem[];
  dispatch: Dispatch<TOrderAcctions>;
}
const OrderContents = ({ order, dispatch }: OrderContents) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className=" space-y-3 mt-10">
        {order.map((orderItem) => (
          <div
            key={orderItem.id}
            className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {orderItem.name} - {formatCurrency(orderItem.price)}
              </p>
              <p className="font-black">
                Cantidad:&nbsp;{orderItem.quantity} -{" "}
                {formatCurrency(orderItem.price)}
              </p>
            </div>
            <button
              className="bg-rose-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() =>
                dispatch({ type: "remove-item", payload: { id: orderItem.id } })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContents;
