import { FC, useCallback, useState } from "react";

export interface IRadioOptions {
  label: string | React.ReactElement;
  value: string;
}

interface IProps {
  name: string;
  selected?: string;
  data: IRadioOptions[];
  onChange?: (value: string) => void;
}

export const RadioBordered: FC<IProps> = (props) => {
  const { name, selected, data, onChange } = props;
  const [current, setCurrent] = useState<string | undefined>(selected);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrent(e.target.value);
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <>
      {data.map((item) => (
        <div
          key={item.value}
          className={`p-4  rounded-md ${
            current === item.value
              ? "bg-blue-300 outline outline-3 outline-green-200"
              : "border border-green-200"
          }`}
        >
          <label
            className={`w-full flex items-start text-sm font-medium cursor-pointer ${
              current === item.value ? "text-white" : "text-black"
            }`}
          >
            <input
              type="radio"
              value={item.value}
              checked={current === item.value}
              name={name}
              className="w-4 h-4 mr-2 text-blue-400 bg-gray-100 border-gray-300 focus:ring-blue-400"
              onChange={handleChange}
            />
            {item.label}
          </label>
        </div>
      ))}
    </>
  );
};
