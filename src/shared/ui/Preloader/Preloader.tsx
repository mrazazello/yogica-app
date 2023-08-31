import "./preloader.css";

interface IProps {
  text?: string;
}

export const Preloader = (props: IProps) => {
  const { text } = props;

  return (
    <div className="loaderContainer">
      <div className="ldsEllipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
      {text && <div>{text}</div>}
    </div>
  );
};
