import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";
import {
  DropdownIcon,
  HikingIcon,
  PlusIcon,
  SearchIcon,
  SpinningIcon,
  SurfingIcon,
  WeightsIcon,
} from "../../icons/Icons";

export enum Icons {
  Spinning,
  Weights,
  Surfing,
  Hiking,
  Plus,
  Dropdown,
  Search,
}

export const renderIcon = (type: Icons, style?: SvgProps): ReactNode => {
  switch (type) {
    case Icons.Spinning:
      return <SpinningIcon {...style} />;
    case Icons.Weights:
      return <WeightsIcon {...style} />;
    case Icons.Surfing:
      return <SurfingIcon {...style} />;
    case Icons.Hiking:
      return <HikingIcon {...style} />;
    case Icons.Plus:
      return <PlusIcon {...style} />;
    case Icons.Dropdown:
      return <DropdownIcon {...style} />;
    case Icons.Search:
      return <SearchIcon {...style} />;
  }
};
