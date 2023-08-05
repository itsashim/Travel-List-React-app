import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;
  if (sortBy === "input") {
    sortedItem = items;
  } else if (sortBy === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onToggleItems={onToggleItems}
            onDeleteItems={onDeleteItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="options">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort by intput order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed stats</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}
