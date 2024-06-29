export function Button({ children, onClick }) {
  console.log(onClick);

  return <button onClick={onClick}>{children}</button>;
}
