import 'styled-components';
import { DefaultTheme } from 'styled-components/native';
import { ThemeType } from '../ui/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
