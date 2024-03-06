function Button({ onClick: handleClick, children }) {
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
