export default function Stats({ items }) {
  const numPacked = items.filter((item) => item.packed);
  console.log(numPacked);
  return (
    <footer className="stats">
      <em>
        you have {items.length} items on your list, and you already packed
        {numPacked.length} items and i.e&nbsp;
        {items.length === 0
          ? 0
          : Math.round((numPacked.length / items.length) * 100)}
        %
      </em>
    </footer>
  );
}
