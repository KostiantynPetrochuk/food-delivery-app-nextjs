interface OrderingPropsType {
  inputName: string;
  inputClassName: string;
}

const OrderingInput = (props: OrderingPropsType) => {
  const { inputName, inputClassName } = props;
  const labelClassName = `basket-ordering-${inputClassName}`;
  return (
    <label className={labelClassName}>
      <span className="basket-ordering-input__name">{inputName}</span>
      <input className="basket-ordering__input" type="text" name="" id="" />
    </label>
  );
};

export default OrderingInput;
