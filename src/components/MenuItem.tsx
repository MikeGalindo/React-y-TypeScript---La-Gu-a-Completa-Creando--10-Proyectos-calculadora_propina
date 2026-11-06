import type { TMenuItem } from "../types";

type MenuItemProps = {
  item: TMenuItem;
  addItem: (item: TMenuItem) => void;
};
export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-teal-400 rounded w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  );
};
