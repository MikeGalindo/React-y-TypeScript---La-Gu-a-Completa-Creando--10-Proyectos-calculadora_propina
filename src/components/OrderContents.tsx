import { formatCurrency } from "../helpers";
import type { TOrderItem } from "../types";

interface OrderContents {
  order: TOrderItem[];
  removeItem: (id: TOrderItem["id"]) => void;
}
const OrderContents = ({ order, removeItem }: OrderContents) => {
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
              onClick={() => removeItem(orderItem.id)}
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
