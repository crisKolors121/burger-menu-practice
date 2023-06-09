import styled from "styled-components";

const Svg = styled.svg`
  fill: #5d5c70;
  width: 24px;
  height: 24px;
`;

export const CloseIcon = ({ className }) => {
  return (
    <Svg viewBox="0 0 24 24" className={className}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Svg>
  );
};
