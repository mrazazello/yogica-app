import { CSSProperties, FC } from "react";

interface ISkeleton {
  width?: string;
  height?: string;
  round?: string;
}

interface IProps {
  className?: string;
  preview?: boolean | ISkeleton;
  title?: boolean | ISkeleton;
  rows?: number;
}

function instanceOfSkeleton(object: any): object is ISkeleton {
  return "width" in object || "height" in object || "round" in object;
}

const formStyles = (obj: boolean | ISkeleton): CSSProperties => {
  if (obj instanceof Object && instanceOfSkeleton(obj)) {
    return { ...obj };
  }
  return {};
};

export const Skeleton: FC<IProps> = (props) => {
  const { rows, title, preview } = props;

  return (
    <div className="animate-pulse">
      {preview && (
        <div
          style={formStyles(preview)}
          className={`w-full h-[200px] mb-2 bg-gray-200 rounded`}
        />
      )}
      {title && (
        <div
          style={formStyles(title)}
          className={`w-[300px] h-4 mb-2 bg-gray-200 rounded`}
        />
      )}
      {[...Array(rows)].map((_el, index) => (
        <div className={`w-full h-2 mb-2 bg-gray-200 rounded`} key={index} />
      ))}
    </div>
  );
};
