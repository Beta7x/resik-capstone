import React from "react";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void, 
  btnText: string
}

const BlueOutlineButton = (props: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className="bg-transparent text-sm text-resik-primary hover:bg-resik-secondary hover:text-white font-semibold py-2 px-4 border border-resik-primary rounded-full"
      >
        {props.btnText}
      </button>
    </>
  );
}

export default BlueOutlineButton;
