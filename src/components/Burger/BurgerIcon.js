import styled from "styled-components";

const Svg = styled.svg`
  fill: #1e205f;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const BurgerIcon = ({ setOpen, className = "" }) => {
  const handleClick = ({ open }) => {
    setOpen(!open);
  };

  return (
    <Svg viewBox="0 0 30 20" className={className} onClick={handleClick}>
      <path d="M0 0H30V3.35938H0V0ZM0 11.6406V8.35938H30V11.6406H0ZM0 20V16.6406H30V20H0Z" />
    </Svg>
  );
};
