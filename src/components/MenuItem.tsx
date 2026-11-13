import type { Dispatch } from "react";
import type { TMenuItem } from "../types";
import type { TOrderAcctions } from "../reducers/order-reducer";

type MenuItemProps = {
  item: TMenuItem;
  dispatch: Dispatch<TOrderAcctions>;
};
export const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-teal-400 rounded w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => dispatch({ type: "add-item", payload: { item: item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  );
};
