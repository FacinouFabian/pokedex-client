import * as React from "react";

type Props = {
  type: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Type: React.FunctionComponent<Props> = ({
  type,
  color,
  onClick,
}: Props): JSX.Element => {
  return (
    <button
      value={type}
      className={`btn btn-light types-filter ${color}`}
      onClick={onClick}
    >
      {type}
    </button>
  );
};

export default Type;
