import { RadioGroup } from "@headlessui/react";
import { FC, ReactElement, useCallback, useState } from "react";

export interface IRadioOptions {
  label: string | ReactElement;
  value: string;
}

interface IProps {
  name?: string;
  selected?: string;
  data: IRadioOptions[];
  onChange?: (value: string) => void;
}

export const RadioSelect: FC<IProps> = (props) => {
  const { data, selected, name, onChange } = props;

  const [current, setCurrent] = useState<string | undefined>(selected);

  const handleChange = useCallback(
    (value: string) => {
      setCurrent(value);
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <div className="w-full">
      <RadioGroup value={current} onChange={handleChange} name={name}>
        <div className="space-y-2">
          {data.map((item) => (
            <RadioGroup.Option
              key={item.value}
              value={item.value}
              className={({ checked }) =>
                `
                  ${
                    checked
                      ? "bg-blue-300 text-white outline outline-3 outline-green-200"
                      : "bg-blue-100"
                  }
                    relative flex cursor-pointer rounded-md p-4 border border-green-200`
              }
            >
              {({ checked }) => (
                <>
                  <div className="w-full flex items-center justify-between">
                    <div className="w-full flex items-center mr-4">
                      <RadioGroup.Label
                        as="div"
                        className={`w-full text-md font-Nunito font-medium ${
                          checked ? "[&_*]:text-white" : "[&_*]:text-black"
                        }`}
                      >
                        {item.label}
                      </RadioGroup.Label>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

function CheckIcon(props: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
