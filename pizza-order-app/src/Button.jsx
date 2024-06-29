const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="m-2 rounded-full bg-yellow-300 px-4 py-3"
    >
      {children}
    </button>
  );
};

export default Button;
