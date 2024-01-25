export interface Theme {
  breakpoint: {
    s: string;
  };
  color: {
    background: {
      default: string;
    };
    primary: {
      default: string;
      hover: string;
      active: string;
    };
    danger: {
      default: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
}
