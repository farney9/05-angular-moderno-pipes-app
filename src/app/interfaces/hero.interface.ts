export enum HeroColor {
  red,
  black,
  blue,
  green,
}

export enum Creator {
  DC,
  Marvel,
}

export interface Hero {
  id: number;
  name: string;
  canFly: boolean;
  color: HeroColor;
  creator: Creator;
}

export const HeroColorMap = {
  [HeroColor.red]: '#E57373',
  [HeroColor.black]: '#424242',
  [HeroColor.blue]: '#64B5F6',
  [HeroColor.green]: '#81C784',
};
