import type { MenuItem as MenuItemType } from "../types";
type MenuItemProps = {
  item: MenuItemType;
};

export const MenuItem = ({ item }: MenuItemProps) => {
  return <div>MenuItem</div>;
};
