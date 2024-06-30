import { Link } from "react-router-dom";

function Button({ children, type = "primary", onClick, to, disabled = false }) {
  const base = "m-2 bg-yellow-300 px-4 py-3 rounded-xl ";

  const styles = {
    rounded: base + "rounded-full",
    primary: base,
    link: base,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
