import type { TMenuItem, TOrderItem } from "../types";

export type TOrderAcctions =
  | { type: "add-item"; payload: { item: TMenuItem } }
  | { type: "remove-item"; payload: { id: TMenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

export type TOrderState = {
  order: TOrderItem[];
  tip: number;
};
export const initialState: TOrderState = {
  order: [],
  tip: 0,
};
export const OrderReducer = (
  state: TOrderState,
  actions: TOrderAcctions,
): TOrderState => {
  if (actions.type === "add-item") {
    let updatedOrder: TOrderItem[];
    const { order } = state;
    const { item } = actions.payload;
    const exists = order.some((orderItem) => orderItem.id === item.id);

    if (exists) {
      updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      );
    } else {
      updatedOrder = [...order, { ...item, quantity: 1 }];
    }
    return { ...state, order: updatedOrder };
  }
  if (actions.type == "remove-item") {
    const { order } = state;
    const { id } = actions.payload;
    return {
      ...state,
      order: order.filter((orderItem) => orderItem.id !== id),
    };
  }
  if (actions.type == "place-order") {
    return initialState;
  }
  if (actions.type == "add-tip") {
    return { ...state, tip: actions.payload.value };
  }

  return state;
};
