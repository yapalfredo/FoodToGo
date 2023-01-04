//useTheme is a hook that extends by Styled Component system
import styled, { useTheme } from "styled-components/native";
import React from "react";

// const TopSmall = styled.View`
//   margin-top: ${(props) => props.theme.space[1]};
// `;
// const TopMedium = styled.View`
//   margin-top: ${(props) => props.theme.space[2]};
// `;
// const TopLarge = styled.View`
//   margin-top: ${(props) => props.theme.space[3]};
// `;

// const LeftSmall = styled.View`
//   margin-left: ${(props) => props.theme.space[1]};
// `;
// const LeftMedium = styled.View`
//   margin-left: ${(props) => props.theme.space[2]};
// `;
// const LeftLarge = styled.View`
//   margin-left: ${(props) => props.theme.space[3]};
// `;

// export const Spacer = ({ variant }) => {
//   if (variant === "top.small") {
//     return <TopSmall />;
//   }
//   if (variant === "top.medium") {
//     return <TopMedium />;
//   }
//   if (variant === "top.large") {
//     return <TopLarge />;
//   }
//   if (variant === "left.small") {
//     return <LeftSmall />;
//   }
//   if (variant === "left.medium") {
//     return <LeftMedium />;
//   }
//   return <LeftLarge />;
// };

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

// export const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)}
// `;

//Android RCTView fix
export const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
