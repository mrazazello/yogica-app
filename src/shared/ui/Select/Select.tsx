import { Listbox, Transition } from "@headlessui/react";
import { FC, Fragment, useState } from "react";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { FOCUS_STYLES } from "@shared/const/styles";
import ChevronUpDownIcon from "./ChevronUpDown.svg";

interface IProps {
  data: Array<{ name: string }>;
  placeholder: string;
  name: string;
  value?: string | number;
  onChange?: (value: string) => void;
  required?: boolean;
}

export const Select: FC<IProps> = (props) => {
  const { data, placeholder, required } = props;
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className="">
      <label className="block mb-2 text-sm font-medium text-blue-400">
        {placeholder}
        {required && <span className="ml-1 text-red">*</span>}

        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button
              className={`relative w-full cursor-default rounded-md bg-white border border-blue-200 py-2.5 pl-3 pr-10 text-black text-left text-xl ${FOCUS_STYLES}`}
            >
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <img
                  src={ChevronUpDownIcon}
                  width={24}
                  height={24}
                  alt=""
                  aria-hidden
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
                {data.map((item, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-4 ${
                        active ? "bg-blue-100" : "text-black"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </label>
    </div>
  );
};
