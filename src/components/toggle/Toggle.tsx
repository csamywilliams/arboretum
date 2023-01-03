import { FC, useState } from 'react';

import ToggleStyled from './Toggle.styled';

interface Props {
  SideA: React.ReactNode;
  SideB: React.ReactNode;
}

const Toggle: FC<Props> = ({ SideA, SideB }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToggle(!toggle);
  };

  return (
    <ToggleStyled>
      <label htmlFor="toggle">
        {' '}
        Grid View
        <input type="checkbox" name="toggle" id="toggle" onChange={onChange} />
        Map View
      </label>

      {!toggle && SideA}
      {toggle && SideB}
    </ToggleStyled>
  );
};

export default Toggle;
