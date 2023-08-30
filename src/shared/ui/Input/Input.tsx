import { FC, InputHTMLAttributes, memo, useEffect, useRef } from "react";

type HTMLInputPropsType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "readOnly"
>;
interface IProps extends HTMLInputPropsType {
  autofocus?: boolean;
  placeholder?: string;
  name: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const InputComponent: FC<IProps> = (props: IProps) => {
  const {
    autofocus = false,
    placeholder,
    name,
    value,
    onChange,
    readonly = false,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const input = (
    <input
      className="bg-white border border-blue-200 text-blue-200 text-xl rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5"
      name={name}
      value={value}
      onChange={onChangeHandler}
      readOnly={readonly}
      {...otherProps}
      ref={inputRef}
    />
  );

  return (
    <div>
      {placeholder ? (
        <label className="block mb-2 text-sm font-medium text-blue-400">
          {placeholder}
          {input}
        </label>
      ) : (
        input
      )}
    </div>
  );
};

InputComponent.displayName = "Input";

export const Input = memo(InputComponent);
export const InputWithoutMemo = InputComponent;