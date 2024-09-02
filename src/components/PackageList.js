import Item from './Item';
import { useState } from 'react';

export default function PackageList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItem;

  if (sortBy === 'input') sortedItem = items;

  if (sortBy === 'description') sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed') sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} item={item} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By input</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
