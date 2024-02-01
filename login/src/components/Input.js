export const Input = (props) => {
  const { type, classn, placeholder, onChangeInput } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classn}
      onChange={onChangeInput}
    />
  );
};

export const Button = (props) => {
  const { btext, bclass, isClicked } = props;
  return (
    <button className={bclass} onClick={isClicked}>
      {btext}
    </button>
  );
};
