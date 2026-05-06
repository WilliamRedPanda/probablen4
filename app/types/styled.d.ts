import 'styled-components';
import { ThemeType } from './stylesTypes';

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
