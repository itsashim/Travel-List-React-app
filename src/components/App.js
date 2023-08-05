import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  console.log(numItems);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItems(id) {
    setItems(items.filter((item) => id !== item.id));
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all the list?"
    );

    if (confirmed) {
      setItems([]);
    }
  }
  function handleToggleItems(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onToggleItems={handleToggleItems}
        onDeleteItems={handleDeleteItems}
        clearList={clearList}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}
