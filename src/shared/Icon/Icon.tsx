import React from "react";
import type { IconBaseProps } from "react-icons";

import { iconList, type IconName } from "./icons";

export interface IconProps extends IconBaseProps {
  name: IconName;
  color?: string;
}

export function Icon({ name, color, style, ...props }: IconProps) {
  const SelectedIcon = iconList[name];

  return React.createElement(SelectedIcon, {
    ...props,
    style: {
      ...style,
      ...(color && { color }),
    },
  });
}