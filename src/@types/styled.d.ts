import 'styled-components';
import { DefaultTheme } from 'styled-components';
import { ThemeType } from '../ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
  
}
