import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);

  function formSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, select, packed: false, id: Date.now() };

    setDescription("");
    setSelect(1);

    console.log(newItem);
    onAddItems(newItem);
  }

  return (
    <form onSubmit={formSubmit} className="add-form">
      <h3>What do you need for your trip?</h3>
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submitt">Add</button>
    </form>
  );
}
