import { SIZES } from '../constants/TransformParams';

export const getScaleSizeClassNameByScale = (scale) => {
  const classNameSizesMap = {
    [SIZES.S]: 's',
    [SIZES.M]: 'm',
    [SIZES.L]: 'l',
  };

  if (scale === SIZES.S) {
    return classNameSizesMap[SIZES.S];
  }

  if (scale > SIZES.S && scale < SIZES.M) {
    return classNameSizesMap[SIZES.M];
  }

  if (scale >= SIZES.M && scale <= SIZES.L) {
    return classNameSizesMap[SIZES.L];
  }

  if (scale === SIZES.L) {
    return classNameSizesMap[SIZES.L];
  }

  return classNameSizesMap[SIZES.S];
};
