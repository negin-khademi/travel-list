import Form from './Form';
import Logo from './Logo';
import PackageList from './PackageList';
import Stats from './Stats';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
    console.log(items);
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeletItem}
        onClearList={handleClearList}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}
