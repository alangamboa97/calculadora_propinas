import type { MenuItem as MenuItemType } from "../types";
type MenuItemProps = {
  item: MenuItemType;
};

export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <button className="border-2 border-blue-400 hover:bg-blue-200 w-full p3 flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
