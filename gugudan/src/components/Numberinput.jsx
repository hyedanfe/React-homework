function Numberinput({ value, setDan }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => setDan(e.target.value)}
    ></input>
  );
}

export default Numberinput;
