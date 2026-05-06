import { FC, useState } from "react";
import { Insignia, StyledSwitch } from "./styles";
import { SwitchType } from "./types";

export const Switch: FC<SwitchType> = ({
  onClick,
  initialState,
  insignia = "",
}) => {
  const [active, setActive] = useState(initialState);
  const handleClick = () => {
    setActive((prev) => !prev);
    onClick();
  };
  return (
    <StyledSwitch onClick={handleClick}>
      <Insignia active={active}>{insignia}</Insignia>
    </StyledSwitch>
  );
};
