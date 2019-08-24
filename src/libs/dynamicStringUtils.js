'use strict';

const vsprintf = require('sprintf-js').vsprintf;

class DynamicStringUtils {
  static getMessage(template: string, ...rest: any[]) {
    return vsprintf(template, rest);
  }
}

export default DynamicStringUtils;
