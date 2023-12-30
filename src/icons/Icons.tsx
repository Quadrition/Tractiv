import { G, Line, Path, Rect, Svg, SvgProps } from "react-native-svg";

// TODO: Check why stroke inherit does not work
export const SpinningIcon = (props: SvgProps) => {
  return (
    <Svg
      width="37.827"
      height="37.827"
      viewBox="0 0 37.827 37.827"
      color="#d97d54"
      {...props}
    >
      <G transform="translate(-1088.586 -154.586)">
        <Rect
          width="24.758"
          height="24.758"
          transform="matrix(0.724, -0.69, 0.69, 0.724, 1090, 173.073)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <Path
          d="M7.6,13.5l2.7-2.6h8.1l2.7,2.7"
          transform="translate(1093.309 159.336)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <Line
          y2="6.8"
          transform="translate(1107.709 170.536)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
};

export const WeightsIcon = (props: SvgProps) => {
  return (
    <Svg
      width="37.827"
      height="37.827"
      viewBox="0 0 37.827 37.827"
      color="#d97d54"
      {...props}
    >
      <G transform="translate(-72.586 -361.586)">
        <G transform="translate(74 363)">
          <Rect
            width="24.758"
            height="24.758"
            transform="matrix(0.724, -0.69, 0.69, 0.724, 0, 17.073)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </G>
        <G transform="translate(84.949 377.455)">
          <Line
            y2="6.1"
            transform="translate(1)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <Line
            y2="6.1"
            transform="translate(12)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <Line
            x2="13.1"
            transform="translate(0 2.9)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </G>
      </G>
    </Svg>
  );
};

export const SurfingIcon = (props: SvgProps) => {
  return (
    <Svg
      width="37.827"
      height="37.827"
      viewBox="0 0 37.827 37.827"
      color="#d97d54"
      {...props}
    >
      <G transform="translate(-72.586 -361.586)">
        <G transform="translate(73.25 362.255)">
          <Rect
            width="24.758"
            height="24.758"
            transform="matrix(0.724, -0.69, 0.69, 0.724, 0.749, 17.818)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
          <Path
            d="M1.7,14.1a15.369,15.369,0,0,0,9.969-1.7c2.791-1.6,5.051-4.6,10.766-3.3a5.19,5.19,0,0,0-2.525,2.2c-.93,2.1,2.26,3,4.386,3.2a78.579,78.579,0,0,0,9.7-.2"
            transform="translate(0 3.032)"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
          />
        </G>
      </G>
    </Svg>
  );
};

export const HikingIcon = (props: SvgProps) => {
  return (
    <Svg
      width="37.827"
      height="37.827"
      viewBox="0 0 37.827 37.827"
      color="#d97d54"
      {...props}
    >
      <G transform="translate(-72.586 -361.586)">
        <Rect
          width="24.758"
          height="24.758"
          transform="matrix(0.724, -0.69, 0.69, 0.724, 74, 380.073)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <Path
          d="M4.7,17.8l7.79-6.5,3.8,3.551,6.659-5.888L31.9,18.2"
          transform="translate(73.25 366.297)"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
};

export const PlusIcon = (props: SvgProps) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" {...props}>
      <G transform="translate(-774 -307)">
        <Path
          d="M29.777,14.244,15.358.257a.784.784,0,0,0-1.114,0L.257,14.677a.784.784,0,0,0,0,1.114l14.42,13.987a.922.922,0,0,0,.557.248.672.672,0,0,0,.557-.248l13.987-14.42a.922.922,0,0,0,.248-.557A.6.6,0,0,0,29.777,14.244ZM15.234,28.168,1.866,15.234,14.8,1.866,28.168,14.8Z"
          transform="translate(773.975 306.975)"
          fill="#FFB898"
        />
        <Path
          d="M19.57,14.743V18.57H15.743a.753.753,0,0,0-.743.743.8.8,0,0,0,.743.743H19.57v3.765a.753.753,0,0,0,.743.743.8.8,0,0,0,.743-.743V20.055h3.765a.753.753,0,0,0,.743-.743.7.7,0,0,0-.681-.743H21.117V14.743A.753.753,0,0,0,20.374,14,.86.86,0,0,0,19.57,14.743Z"
          transform="translate(768.649 302.03)"
          fill="#FFF"
        />
      </G>
    </Svg>
  );
};
