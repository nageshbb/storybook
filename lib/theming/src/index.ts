// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./typings.d.ts" />

import emotionStyled, { CreateStyled } from '@emotion/styled';
import { Theme } from './types';

export const styled = emotionStyled as CreateStyled<Theme>;

export * from './base';
export * from './types';

export * from '@emotion/core';
export * from 'emotion-theming';
export { default as isPropValid } from '@emotion/is-prop-valid';

export { createGlobal, createReset } from './global';
export * from './create';
export * from './convert';
export * from './ensure';

export { lightenColor as lighten, darkenColor as darken } from './utils';

export const ignoreSsrWarning =
  '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
