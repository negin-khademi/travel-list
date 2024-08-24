export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need fot your 😍 trip?</h3>
    </div>
  );
}
function PackageList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer>
      <em>💼You have X item on your list, and you already packed X (X%)</em>
    </footer>
  );
}
