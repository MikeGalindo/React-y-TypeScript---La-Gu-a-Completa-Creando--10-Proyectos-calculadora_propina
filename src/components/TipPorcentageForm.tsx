import type { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/db";
interface TipPorcentageForm {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
}
const TipPorcentageForm = ({ setTip, tip }: TipPorcentageForm) => {
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
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPorcentageForm;
