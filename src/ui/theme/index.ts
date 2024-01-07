type Colors = 'primary' | 'secondary';
type Spacing = 'small' | 'medium' | 'large';
export type ThemeType = {
  colors: {
    [K in Colors]: string;
  };
  spacing: {
    [K in Spacing]: string | number;
  };
};

export const theme: ThemeType = {
  colors: {
    primary: '#5C6BC0',
    secondary: '#FFC107',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};
