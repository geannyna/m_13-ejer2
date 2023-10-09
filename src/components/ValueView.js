import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, subtractValue, selectValue } from "../sliceReducer";

export default function ValueView(){

  const dispath = useDispatch();
  const value = useSelector(selectValue);

  const handleAddValue = () => {
    dispath(addValue({value: 1}));
  }
  const handleSubtractValue = () => {
    dispath(subtractValue({value: 1}));
  }

  return(
    <div className="container">
      <h1>Valor {value}</h1>
      <button onClick={handleAddValue}>+</button>
      <button onClick={handleSubtractValue}>-</button>
    </div>
  )

}
