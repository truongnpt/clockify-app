export interface ThemeProps {
    theme: ThemeSettingProps;
  }
  
  export interface Space {
    none: number | string;
    xs: number | string;
    s: number | string;
    m: number | string;
    l: number | string;
    xl: number | string;
    xxl: number | string;
  }
  
  export interface Radii extends Space {}
  
  export interface ThemeColors {
    primaryGreen: string;
    primaryGreenTransparent: string;
    primaryGreenHover: string;
    primaryBlack: string;
    primaryWhite: string;
    silver: string;
    white: string;
    spanishPink: string;
    magicMint: string;
    champagne: string;
    lavender: string;
    turquoiseBlue: string;
    babyBlue: string;
    dimGray: string;
    northeastSnow: string;
    fieryOpal: string;
    mediumAquamarine: string;
    Mustard: string;
    mediumStateBlue: string;
    middleBlue: string;
    azure: string;
    jetBlack: string;
    cadetGray: string;
    redPigment: string;
    amazon: string;
    brightYellowCrayola: string;
    ultramarine: string;
    persianGreen: string;
    sapphireBlue: string;
    background: string;
    lightYellow: string;
  }
  
  // export interface ThemeFontSizes {
  //   xs: number | string;
  //   s: number | string;
  //   m: number | string;
  //   l: number | string;
  //   xl: number | string;
  //   xxl: number | string;
  // }
  
  export interface ThemeFontSizes {
    small: string;
    body: string;
    h6: string;
    h5: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
  }
  
  export interface ThemeLineHeights {
    small: string;
    body: string;
    h6: string;
    h5: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
  }
  
  export interface ThemeFontWeights {
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  }
  
  export interface ThemeFontFamily {
    primary: string;
    secondary: string;
  }
  
  export interface ThemeShadows {
    element: string;
    hoverElement: string;
  }
  
  export interface ThemeScreenResolution {
    ipad: string;
  }
  
  export interface ThemeSettingProps {
    colors: ThemeColors;
    space: Space;
    radii: Radii;
    fontSizes: ThemeFontSizes;
    lineHeights: ThemeLineHeights;
    fontWeights: ThemeFontWeights;
    fonts: ThemeFontFamily;
    shadows: ThemeShadows;
    screenResolution: ThemeScreenResolution;
  }
  