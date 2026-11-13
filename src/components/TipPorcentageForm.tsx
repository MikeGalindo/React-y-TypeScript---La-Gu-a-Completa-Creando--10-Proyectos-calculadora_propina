import type { Dispatch } from "react";
import { tipOptions } from "../data/db";
import type { TOrderAcctions } from "../reducers/order-reducer";
interface TipPorcentageForm {
  dispatch: Dispatch<TOrderAcctions>;
  tip: number;
}
const TipPorcentageForm = ({ dispatch, tip }: TipPorcentageForm) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label>{tipOption.label}</label>
            <input
              type="radio"
              name="tip"
              id={tipOption.id}
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.target.value },
                })
              }
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPorcentageForm;
