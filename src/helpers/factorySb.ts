import { LANGUAGE_OPTIONS } from '../constants';
import { sbJsTemplate, sbTsTemplate } from '../templates/sbTs.template';
import { Language } from '../types';

export const factorySb = (language: Language) => {
  switch (language) {
    case LANGUAGE_OPTIONS.javascript.value:
      return {
        jsx: LANGUAGE_OPTIONS.javascript.jxs,
        template: sbJsTemplate,
      };
    case LANGUAGE_OPTIONS.typescript.value:
      return {
        jsx: LANGUAGE_OPTIONS.typescript.jxs,
        template: sbTsTemplate,
      };
    default:
      return {
        jsx: LANGUAGE_OPTIONS.javascript.jxs,
        template: sbJsTemplate,
      };
  }
};
