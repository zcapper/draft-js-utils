// @flow

import {stateFromElement} from 'draft-js-import-element-zdc';
import parseHTML from './parseHTML';

import type {ContentState} from 'draft-js';
import type {ElementStyles, CustomBlockFn, CustomInlineFn} from 'draft-js-import-element-zdc';

type Options = {
  parser?: (html: string) => Element;
  elementStyles?: ElementStyles;
  blockTypes?: {[key: string]: string};
  customBlockFn?: CustomBlockFn;
  customInlineFn?: CustomInlineFn;
};

const defaultOptions: Options = {};

export default function stateFromHTML(
  html: string,
  options?: Options,
): ContentState {
  let {parser, ...otherOptions} = options || defaultOptions;
  if (parser == null) {
    parser = parseHTML;
  }
  let element = parser(html);
  return stateFromElement(element, otherOptions);
}
