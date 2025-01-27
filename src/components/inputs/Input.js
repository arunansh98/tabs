import { useContext } from "react";
import { Context } from "../../App";

export default function Input(props) {
  const { tabIndex, field } = props;
  const { id, placeholder, label, type } = field;
  const { state, dispatch } = useContext(Context);
  const value = state?.[tabIndex]?.[id];
  return (
    <div id="field">
      <label>{label}</label>
      <input
        type
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          dispatch({
            type: "updateFieldValue",
            payload: {
              tabIndex,
              id,
              value: event.target.value,
            },
          })
        }
      />
    </div>
  );
}
