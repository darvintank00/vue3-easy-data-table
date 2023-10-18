import require$$0, { defineComponent, useCssVars, unref, computed, inject, openBlock, createElementBlock, withModifiers, createElementVNode, normalizeClass, pushScopeId, popScopeId, ref, watch, onMounted, onBeforeUnmount, toDisplayString, Fragment, renderList, useSlots, renderSlot, createCommentVNode, watchEffect, toRefs, provide, createVNode, isRef, withCtx, normalizeStyle, createBlock, normalizeProps, mergeProps, guardReactiveProps, createTextVNode, createSlots } from "vue";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        var value = array[index2];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (iteratee(array[index2], index2, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (!predicate(array[index2], index2, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (comparator(value, array[index2])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index2];
      }
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array[index2], index2, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (comparator(array[index2], value)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index2, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index2 = -1, length = array.length;
      while (++index2 < length) {
        var current = iteratee(array[index2]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index2 = -1, length = strSymbols.length;
      while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index2 = strSymbols.length;
      while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index2 = -1, length = array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index2] = PLACEHOLDER;
          result[resIndex++] = index2;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index2 = fromIndex + 1;
      while (index2--) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return index2;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index2 = string.length;
      while (index2-- && reWhitespace.test(string.charAt(index2))) {
      }
      return index2;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap && new WeakMap();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index2 += dir;
            var iterIndex = -1, value = array[index2];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed2;
              } else if (!computed2) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        return index2 < 0 ? undefined$1 : data[index2][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index2][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index2 = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index2 < length) {
          this.add(values2[index2]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index2 = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index2 < length) {
          result2[index2] = skip ? undefined$1 : get(object, paths[index2]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed2 = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed2) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed2, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index2, collection2) {
          result2 = !!predicate(value, index2, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index2 = -1, length = array.length;
        while (++index2 < length) {
          var value = array[index2], current = iteratee2(value);
          if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
            var computed2 = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index2, collection2) {
          if (predicate(value, index2, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index2 = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index2 < length) {
          var value = array[index2];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index2 = 0, length = path.length;
        while (object != null && index2 < length) {
          object = object[toKey(path[index2++])];
        }
        return index2 && index2 == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index2 = -1, seen = caches[0];
        outer:
          while (++index2 < length && result2.length < maxLength) {
            var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index2 = matchData.length, length = index2, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index2--) {
          var data = matchData[index2];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index2 < length) {
          data = matchData[index2];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index2 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index2] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index2 = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index2, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index2 = -1, length = paths.length, result2 = {};
        while (++index2 < length) {
          var path = paths[index2], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index2 < length) {
          var fromIndex = 0, value = values2[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index2 = indexes[length];
          if (length == lastIndex || index2 !== previous) {
            var previous = index2;
            if (isIndex(index2)) {
              splice.call(array, index2, 1);
            } else {
              baseUnset(array, index2);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index2] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n) {
        var result2 = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index2 < length) {
          var key = toKey(path[index2]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index2 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index2 = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index2 < length) {
          result2[index2] = array[index2 + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index2, collection2) {
          result2 = predicate(value, index2, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed2 = array[mid];
            if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed2 <= value : computed2 < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index2 = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
          if (!index2 || !eq(computed2, seen)) {
            var seen = computed2;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed2 = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed2 === computed2) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed2) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed2);
              }
              result2.push(value);
            } else if (!includes2(seen, computed2, comparator)) {
              if (seen !== result2) {
                seen.push(computed2);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index2 = fromRight ? length : -1;
        while ((fromRight ? index2-- : ++index2 < length) && predicate(array[index2], index2, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index2 = -1, result2 = Array2(length);
        while (++index2 < length) {
          var array = arrays[index2], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index2) {
              result2[index2] = baseDifference(result2[index2] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index2 < length) {
          var value = index2 < valsLength ? values2[index2] : undefined$1;
          assignFunc(result2, props[index2], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index2 < length) {
          var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
          if (result2) {
            if (index2 >= ordersLength) {
              return result2;
            }
            var order = orders[index2];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index2 = -1, length = source.length;
        array || (array = Array2(length));
        while (++index2 < length) {
          array[index2] = source[index2];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object, source, index2, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index2-- : ++index2 < length) {
            if (iteratee2(iterable[index2], index2, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index2 = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
          while (index2--) {
            args[index2] = arguments[index2];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              undefined$1,
              args,
              holders,
              undefined$1,
              undefined$1,
              arity - length
            );
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index2 = findIndexFunc(collection, predicate, fromIndex);
          return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index2--) {
            var func = funcs[index2];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index2 = wrapper ? index2 : length;
          while (++index2 < length) {
            func = funcs[index2];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
            while (++index3 < length) {
              result2 = funcs[index3].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length;
          while (index2--) {
            args[index2] = arguments[index2];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              thisArg,
              args,
              newHolders,
              argPos,
              ary2,
              arity - length
            );
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index2 < arrLength) {
          var arrValue = array[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key = objProps[index2];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key = objProps[index2];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index2 = -1, length = transforms.length;
        while (++index2 < length) {
          var data = transforms[index2], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index2 = -1, length = path.length, result2 = false;
        while (++index2 < length) {
          var key = toKey(path[index2]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index2 != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index2;
        if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
          return eq(object[index2], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index2 < length) {
            array[index2] = args[start + index2];
          }
          index2 = -1;
          var otherArgs = Array2(start + 1);
          while (++index2 < start) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index2 = indexes[length];
          array[length] = isIndex(index2, arrLength) ? oldArray[index2] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index2 = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index2 < size2) {
          var rand = baseRandom(index2, lastIndex), value = array[rand];
          array[rand] = array[index2];
          array[index2] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index2 < length) {
          result2[resIndex++] = baseSlice(array, index2, index2 += size2);
        }
        return result2;
      }
      function compact(array) {
        var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index2 = length;
        while (index2--) {
          args[index2 - 1] = arguments[index2];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop3(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length - 1;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index2 < length) {
          var pair = pairs[index2];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseIndexOf(array, value, index2);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = index2 < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index2) : baseFindIndex(array, baseIsNaN, index2, true);
      }
      function nth(array, n) {
        return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index2) {
          return isIndex(index2, length) ? +index2 : index2;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index2 = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index2 < length) {
          var value = array[index2];
          if (predicate(value, index2, array)) {
            result2.push(value);
            indexes.push(index2);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value);
          if (index2 < length && eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index2) {
          return arrayMap(array, baseProperty(index2));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray2(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone3 = wrapperClone(parent2);
          clone3.__index__ = 0;
          clone3.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone3;
          } else {
            result2 = clone3;
          }
          var previous = clone3;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find2 = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index2] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index2 = -1, length = nativeMin(args.length, funcsLength);
          while (++index2 < length) {
            args[index2] = transforms[index2].call(this, args[index2]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone2(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray2(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults2 = baseRest(function(object, sources) {
        object = Object2(object);
        var index2 = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index2 < length) {
          var source = sources[index2];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index2 = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index2 < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index2])];
          if (value === undefined$1) {
            index2 = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index2, object2) {
          return iteratee2(accumulator, value, index2, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index2) {
        word = word.toLowerCase();
        return result2 + (index2 ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n, guard) {
        if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString(string), n);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2(
          (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
          "g"
        );
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index2 = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index2 = result2.lastIndexOf(separator);
          if (index2 > -1) {
            result2 = result2.slice(0, index2);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index2 = -1;
          while (++index2 < length) {
            var pair = pairs[index2];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches2(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index2 = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index2 < n) {
          iteratee2(index2);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults2;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop3;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches2;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle2;
      lodash2.thru = thru;
      lodash2.toArray = toArray2;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone2;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find2;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber;
      lodash2.isObject = isObject;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index2) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
          var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index2) {
        var type = index2 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index2) {
        var takeName = "take" + (index2 ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index2) {
        var dropName = "drop" + (index2 ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
var vuedraggable_umd = { exports: {} };
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.14.0";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector)
    return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx)
        break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window)
    return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible)
      return parent;
    if (parent === getWindowScrollingElement())
      break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0, i = 0, children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i))
      continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key])
        return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect)
    return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body)
          return getWindowScrollingElement();
        if (gotSelf || includeSelf)
          return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, "position", "absolute");
  css(el, "top", rect.top);
  css(el, "left", rect.left);
  css(el, "width", rect.width);
  css(el, "height", rect.height);
}
function unsetRect(el) {
  css(el, "position", "");
  css(el, "top", "");
  css(el, "left", "");
  css(el, "width", "");
  css(el, "height", "");
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation)
        return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost)
          return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function")
          callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function")
          callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function")
            callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault)
        return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2))
        continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function")
        return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName])
        return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable)
    return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
  if (!documentExists)
    return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection2(el, options) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable))
      return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
}, _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
}, _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options = _extends({}, options);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: false,
    invertedSwapThreshold: null,
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = {
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable)
      return;
    var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mouseup", _this._onDrop);
      on(ownerDocument, "touchend", _this._onDrop);
      on(ownerDocument, "touchcancel", _this._onDrop);
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        on(ownerDocument, "mouseup", _this._disableDelayedDrag);
        on(ownerDocument, "touchend", _this._disableDelayedDrag);
        on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent)
          break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = parent.parentNode);
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document)
            ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled)
        return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent)
      return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled)
      return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled)
        return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el = rootEl2.children[i];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled)
        return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled)
        return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array)
    plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils)
      Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options) {
  return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted2(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll)
    return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval(function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent)
    return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  Swap.prototype = {
    dragStart: function dragStart2(_ref) {
      var dragEl2 = _ref.dragEl;
      lastSwapEl = dragEl2;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
      if (!activeSortable.options.swap)
        return;
      var el = this.sortable.el, options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop3(_ref3) {
      var activeSortable = _ref3.activeSortable, putSortable2 = _ref3.putSortable, dragEl2 = _ref3.dragEl;
      var toSortable = putSortable2 || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable2 && putSortable2.options.swap)) {
        if (dragEl2 !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable)
            activeSortable.captureAnimationState();
          swapNodes(dragEl2, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable)
            activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: "swap",
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1))
    return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [], multiDragClones = [], lastMultiDragSelect, multiDragSortable, initialFolding = false, folding = false, dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
    if (sortable.options.supportPointer) {
      on(document, "pointerup", this._deselectMultiDrag);
    } else {
      on(document, "mouseup", this._deselectMultiDrag);
      on(document, "touchend", this._deselectMultiDrag);
    }
    on(document, "keydown", this._checkKeyDown);
    on(document, "keyup", this._checkKeyUp);
    this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl2) {
        var data = "";
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function(multiDragElement, i) {
            data += (!i ? "" : ", ") + multiDragElement.textContent;
          });
        } else {
          data = dragEl2.textContent;
        }
        dataTransfer.setData("Text", data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable, cancel = _ref2.cancel;
      if (!this.isMultiDrag)
        return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style["will-change"] = "";
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone2(_ref3) {
      var sortable = _ref3.sortable, rootEl2 = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
      if (!this.isMultiDrag)
        return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl2);
          dispatchSortableEvent("clone");
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown, rootEl2 = _ref4.rootEl, cancel = _ref4.cancel;
      if (!this.isMultiDrag)
        return;
      insertMultiDragClones(false, rootEl2);
      multiDragClones.forEach(function(clone2) {
        css(clone2, "display", "");
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      _ref5.sortable;
      var cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
      if (!this.isMultiDrag)
        return;
      multiDragClones.forEach(function(clone2) {
        css(clone2, "display", "none");
        if (_this.options.removeCloneOnHide && clone2.parentNode) {
          clone2.parentNode.removeChild(clone2);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function(multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });
      multiDragElements = multiDragElements.sort(function(a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted2(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag)
        return;
      if (this.options.sort) {
        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function(multiDragElement) {
            if (multiDragElement === dragEl$1)
              return;
            css(multiDragElement, "position", "absolute");
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function(multiDragElement) {
            if (multiDragElement === dragEl$1)
              return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function() {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function(multiDragElement) {
            unsetRect(multiDragElement);
          });
        }
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable, rootEl2 = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        multiDragElements.forEach(function(multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl2);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl2 = _ref10.parentEl, putSortable2 = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable2)) {
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function(multiDragElement) {
            if (multiDragElement === dragEl$1)
              return;
            setRect(multiDragElement, dragRectAbsolute);
            parentEl2.appendChild(multiDragElement);
          });
          folding = true;
        }
        if (!isOwner) {
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function(clone2) {
                activeSortable.addAnimationState({
                  target: clone2,
                  rect: clonesFromRect
                });
                clone2.fromRect = clonesFromRect;
                clone2.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function(multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop3(_ref12) {
      var evt = _ref12.originalEvent, rootEl2 = _ref12.rootEl, parentEl2 = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex2 = _ref12.oldIndex, putSortable2 = _ref12.putSortable;
      var toSortable = putSortable2 || this.sortable;
      if (!evt)
        return;
      var options = this.options, children = parentEl2.children;
      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable,
            rootEl: rootEl2,
            name: "select",
            targetEl: dragEl$1,
            originalEvt: evt
          });
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              var n, i;
              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }
              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i]))
                  continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable,
                  rootEl: rootEl2,
                  name: "select",
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable,
            rootEl: rootEl2,
            name: "deselect",
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      }
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        if ((parentEl2[expando].options.sort || parentEl2 !== rootEl2) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
          if (!initialFolding && options.animation)
            dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect
                  });
                }
              });
            }
            removeMultiDragElements();
            multiDragElements.forEach(function(multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl2.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl2.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });
            if (oldIndex2 === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function(multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent("update");
              }
            }
          }
          multiDragElements.forEach(function(multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }
      if (rootEl2 === parentEl2 || putSortable2 && putSortable2.lastPutMode !== "clone") {
        multiDragClones.forEach(function(clone2) {
          clone2.parentNode && clone2.parentNode.removeChild(clone2);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, "pointerup", this._deselectMultiDrag);
      off(document, "mouseup", this._deselectMultiDrag);
      off(document, "touchend", this._deselectMultiDrag);
      off(document, "keydown", this._checkKeyDown);
      off(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted)
        return;
      if (multiDragSortable !== this.sortable)
        return;
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false))
        return;
      if (evt && evt.button !== 0)
        return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: "deselect",
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    pluginName: "multiDrag",
    utils: {
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el))
          return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando], index2 = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index2)
          return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index2, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [], newIndicies = [];
      multiDragElements.forEach(function(multiDragElement) {
        oldIndicies.push({
          multiDragElement,
          index: multiDragElement.sortableIndex
        });
        var newIndex2;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex2 = -1;
        } else if (folding) {
          newIndex2 = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")");
        } else {
          newIndex2 = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement,
          index: newIndex2
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies,
        newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === "ctrl") {
          key = "Control";
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl2) {
  multiDragElements.forEach(function(multiDragElement, i) {
    var target = rootEl2.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl2.insertBefore(multiDragElement, target);
    } else {
      rootEl2.appendChild(multiDragElement);
    }
  });
}
function insertMultiDragClones(elementsInserted, rootEl2) {
  multiDragClones.forEach(function(clone2, i) {
    var target = rootEl2.children[clone2.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl2.insertBefore(clone2, target);
    } else {
      rootEl2.appendChild(clone2);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function(multiDragElement) {
    if (multiDragElement === dragEl$1)
      return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
var sortable_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Sortable,
  MultiDrag: MultiDragPlugin,
  Sortable,
  Swap: SwapPlugin
}, Symbol.toStringTag, { value: "Module" }));
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(sortable_esm);
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(require$$0, require$$1);
  })(typeof self !== "undefined" ? self : commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a352__) {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "fb15");
    }({
      "00ee": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module2.exports = String(test) === "[object z]";
      },
      "0366": function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__("1c0b");
        module2.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === void 0)
            return fn;
          switch (length) {
            case 0:
              return function() {
                return fn.call(that);
              };
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function() {
            return fn.apply(that, arguments);
          };
        };
      },
      "057f": function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__("fc6a");
        var nativeGetOwnPropertyNames = __webpack_require__("241c").f;
        var toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return nativeGetOwnPropertyNames(it);
          } catch (error) {
            return windowNames.slice();
          }
        };
        module2.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
        };
      },
      "06cf": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var propertyIsEnumerableModule = __webpack_require__("d1e7");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        var toIndexedObject = __webpack_require__("fc6a");
        var toPrimitive = __webpack_require__("c04e");
        var has = __webpack_require__("5135");
        var IE8_DOM_DEFINE = __webpack_require__("0cfb");
        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports2.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE)
            try {
              return nativeGetOwnPropertyDescriptor(O, P);
            } catch (error) {
            }
          if (has(O, P))
            return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
        };
      },
      "0cfb": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var fails = __webpack_require__("d039");
        var createElement = __webpack_require__("cc12");
        module2.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      },
      "13d5": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var $reduce = __webpack_require__("d58f").left;
        var arrayMethodIsStrict = __webpack_require__("a640");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var STRICT_METHOD = arrayMethodIsStrict("reduce");
        var USES_TO_LENGTH = arrayMethodUsesToLength("reduce", { 1: 0 });
        $({ target: "Array", proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
          reduce: function reduce(callbackfn) {
            return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "14c3": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("c6b6");
        var regexpExec = __webpack_require__("9263");
        module2.exports = function(R, S) {
          var exec = R.exec;
          if (typeof exec === "function") {
            var result = exec.call(R, S);
            if (typeof result !== "object") {
              throw TypeError("RegExp exec method returned something other than an Object or null");
            }
            return result;
          }
          if (classof(R) !== "RegExp") {
            throw TypeError("RegExp#exec called on incompatible receiver");
          }
          return regexpExec.call(R, S);
        };
      },
      "159b": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var DOMIterables = __webpack_require__("fdbc");
        var forEach = __webpack_require__("17c2");
        var createNonEnumerableProperty = __webpack_require__("9112");
        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global2[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
            try {
              createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
            } catch (error) {
              CollectionPrototype.forEach = forEach;
            }
        }
      },
      "17c2": function(module2, exports2, __webpack_require__) {
        var $forEach = __webpack_require__("b727").forEach;
        var arrayMethodIsStrict = __webpack_require__("a640");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var STRICT_METHOD = arrayMethodIsStrict("forEach");
        var USES_TO_LENGTH = arrayMethodUsesToLength("forEach");
        module2.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn) {
          return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      },
      "1be4": function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__("d066");
        module2.exports = getBuiltIn("document", "documentElement");
      },
      "1c0b": function(module2, exports2) {
        module2.exports = function(it) {
          if (typeof it != "function") {
            throw TypeError(String(it) + " is not a function");
          }
          return it;
        };
      },
      "1c7e": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;
        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function() {
              return { done: !!called++ };
            },
            "return": function() {
              SAFE_CLOSING = true;
            }
          };
          iteratorWithReturn[ITERATOR] = function() {
            return this;
          };
          Array.from(iteratorWithReturn, function() {
            throw 2;
          });
        } catch (error) {
        }
        module2.exports = function(exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING)
            return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function() {
              return {
                next: function() {
                  return { done: ITERATION_SUPPORT = true };
                }
              };
            };
            exec(object);
          } catch (error) {
          }
          return ITERATION_SUPPORT;
        };
      },
      "1d80": function(module2, exports2) {
        module2.exports = function(it) {
          if (it == void 0)
            throw TypeError("Can't call method on " + it);
          return it;
        };
      },
      "1dde": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        var wellKnownSymbol = __webpack_require__("b622");
        var V8_VERSION = __webpack_require__("2d00");
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(METHOD_NAME) {
          return V8_VERSION >= 51 || !fails(function() {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES] = function() {
              return { foo: 1 };
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
          });
        };
      },
      "23cb": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("a691");
        var max = Math.max;
        var min = Math.min;
        module2.exports = function(index2, length) {
          var integer = toInteger(index2);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
      },
      "23e7": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
        var createNonEnumerableProperty = __webpack_require__("9112");
        var redefine = __webpack_require__("6eeb");
        var setGlobal = __webpack_require__("ce4e");
        var copyConstructorProperties = __webpack_require__("e893");
        var isForced = __webpack_require__("94ca");
        module2.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global2;
          } else if (STATIC) {
            target = global2[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global2[TARGET] || {}).prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else
                targetProperty = target[key];
              FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
              if (!FORCED && targetProperty !== void 0) {
                if (typeof sourceProperty === typeof targetProperty)
                  continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
              }
              redefine(target, key, sourceProperty, options);
            }
        };
      },
      "241c": function(module2, exports2, __webpack_require__) {
        var internalObjectKeys = __webpack_require__("ca84");
        var enumBugKeys = __webpack_require__("7839");
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };
      },
      "25f0": function(module2, exports2, __webpack_require__) {
        var redefine = __webpack_require__("6eeb");
        var anObject = __webpack_require__("825a");
        var fails = __webpack_require__("d039");
        var flags = __webpack_require__("ad6d");
        var TO_STRING = "toString";
        var RegExpPrototype = RegExp.prototype;
        var nativeToString = RegExpPrototype[TO_STRING];
        var NOT_GENERIC = fails(function() {
          return nativeToString.call({ source: "a", flags: "b" }) != "/a/b";
        });
        var INCORRECT_NAME = nativeToString.name != TO_STRING;
        if (NOT_GENERIC || INCORRECT_NAME) {
          redefine(RegExp.prototype, TO_STRING, function toString() {
            var R = anObject(this);
            var p = String(R.source);
            var rf = R.flags;
            var f = String(rf === void 0 && R instanceof RegExp && !("flags" in RegExpPrototype) ? flags.call(R) : rf);
            return "/" + p + "/" + f;
          }, { unsafe: true });
        }
      },
      "2ca0": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
        var toLength = __webpack_require__("50c4");
        var notARegExp = __webpack_require__("5a34");
        var requireObjectCoercible = __webpack_require__("1d80");
        var correctIsRegExpLogic = __webpack_require__("ab13");
        var IS_PURE = __webpack_require__("c430");
        var nativeStartsWith = "".startsWith;
        var min = Math.min;
        var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
        var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
          var descriptor = getOwnPropertyDescriptor(String.prototype, "startsWith");
          return descriptor && !descriptor.writable;
        }();
        $({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
          startsWith: function startsWith(searchString) {
            var that = String(requireObjectCoercible(this));
            notARegExp(searchString);
            var index2 = toLength(min(arguments.length > 1 ? arguments[1] : void 0, that.length));
            var search = String(searchString);
            return nativeStartsWith ? nativeStartsWith.call(that, search, index2) : that.slice(index2, index2 + search.length) === search;
          }
        });
      },
      "2d00": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var userAgent2 = __webpack_require__("342f");
        var process = global2.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version2;
        if (v8) {
          match = v8.split(".");
          version2 = match[0] + match[1];
        } else if (userAgent2) {
          match = userAgent2.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent2.match(/Chrome\/(\d+)/);
            if (match)
              version2 = match[1];
          }
        }
        module2.exports = version2 && +version2;
      },
      "342f": function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__("d066");
        module2.exports = getBuiltIn("navigator", "userAgent") || "";
      },
      "35a1": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("f5df");
        var Iterators = __webpack_require__("3f8c");
        var wellKnownSymbol = __webpack_require__("b622");
        var ITERATOR = wellKnownSymbol("iterator");
        module2.exports = function(it) {
          if (it != void 0)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
      },
      "37e8": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var definePropertyModule = __webpack_require__("9bf2");
        var anObject = __webpack_require__("825a");
        var objectKeys = __webpack_require__("df75");
        module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = objectKeys(Properties);
          var length = keys.length;
          var index2 = 0;
          var key;
          while (length > index2)
            definePropertyModule.f(O, key = keys[index2++], Properties[key]);
          return O;
        };
      },
      "3bbe": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        module2.exports = function(it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + " as a prototype");
          }
          return it;
        };
      },
      "3ca3": function(module2, exports2, __webpack_require__) {
        var charAt = __webpack_require__("6547").charAt;
        var InternalStateModule = __webpack_require__("69f3");
        var defineIterator = __webpack_require__("7dd0");
        var STRING_ITERATOR = "String Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
        defineIterator(String, "String", function(iterated) {
          setInternalState(this, {
            type: STRING_ITERATOR,
            string: String(iterated),
            index: 0
          });
        }, function next() {
          var state = getInternalState(this);
          var string = state.string;
          var index2 = state.index;
          var point;
          if (index2 >= string.length)
            return { value: void 0, done: true };
          point = charAt(string, index2);
          state.index += point.length;
          return { value: point, done: false };
        });
      },
      "3f8c": function(module2, exports2) {
        module2.exports = {};
      },
      "4160": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var forEach = __webpack_require__("17c2");
        $({ target: "Array", proto: true, forced: [].forEach != forEach }, {
          forEach
        });
      },
      "428f": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        module2.exports = global2;
      },
      "44ad": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        var classof = __webpack_require__("c6b6");
        var split = "".split;
        module2.exports = fails(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(it) {
          return classof(it) == "String" ? split.call(it, "") : Object(it);
        } : Object;
      },
      "44d2": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var create = __webpack_require__("7c73");
        var definePropertyModule = __webpack_require__("9bf2");
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] == void 0) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
          });
        }
        module2.exports = function(key) {
          ArrayPrototype[UNSCOPABLES][key] = true;
        };
      },
      "44e7": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        var classof = __webpack_require__("c6b6");
        var wellKnownSymbol = __webpack_require__("b622");
        var MATCH = wellKnownSymbol("match");
        module2.exports = function(it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) == "RegExp");
        };
      },
      "4930": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          return !String(Symbol());
        });
      },
      "4d64": function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__("fc6a");
        var toLength = __webpack_require__("50c4");
        var toAbsoluteIndex = __webpack_require__("23cb");
        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index2 = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el)
              while (length > index2) {
                value = O[index2++];
                if (value != value)
                  return true;
              }
            else
              for (; length > index2; index2++) {
                if ((IS_INCLUDES || index2 in O) && O[index2] === el)
                  return IS_INCLUDES || index2 || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };
        module2.exports = {
          includes: createMethod(true),
          indexOf: createMethod(false)
        };
      },
      "4de4": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var $filter = __webpack_require__("b727").filter;
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
        var USES_TO_LENGTH = arrayMethodUsesToLength("filter");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          filter: function filter(callbackfn) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "4df4": function(module2, exports2, __webpack_require__) {
        var bind = __webpack_require__("0366");
        var toObject = __webpack_require__("7b0b");
        var callWithSafeIterationClosing = __webpack_require__("9bdd");
        var isArrayIteratorMethod = __webpack_require__("e95a");
        var toLength = __webpack_require__("50c4");
        var createProperty = __webpack_require__("8418");
        var getIteratorMethod = __webpack_require__("35a1");
        module2.exports = function from(arrayLike) {
          var O = toObject(arrayLike);
          var C = typeof this == "function" ? this : Array;
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          var iteratorMethod = getIteratorMethod(O);
          var index2 = 0;
          var length, result, step, iterator, next, value;
          if (mapping)
            mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
          if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
            iterator = iteratorMethod.call(O);
            next = iterator.next;
            result = new C();
            for (; !(step = next.call(iterator)).done; index2++) {
              value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
              createProperty(result, index2, value);
            }
          } else {
            length = toLength(O.length);
            result = new C(length);
            for (; length > index2; index2++) {
              value = mapping ? mapfn(O[index2], index2) : O[index2];
              createProperty(result, index2, value);
            }
          }
          result.length = index2;
          return result;
        };
      },
      "4fad": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var $entries = __webpack_require__("6f53").entries;
        $({ target: "Object", stat: true }, {
          entries: function entries(O) {
            return $entries(O);
          }
        });
      },
      "50c4": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("a691");
        var min = Math.min;
        module2.exports = function(argument) {
          return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
        };
      },
      "5135": function(module2, exports2) {
        var hasOwnProperty = {}.hasOwnProperty;
        module2.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };
      },
      "5319": function(module2, exports2, __webpack_require__) {
        var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
        var anObject = __webpack_require__("825a");
        var toObject = __webpack_require__("7b0b");
        var toLength = __webpack_require__("50c4");
        var toInteger = __webpack_require__("a691");
        var requireObjectCoercible = __webpack_require__("1d80");
        var advanceStringIndex = __webpack_require__("8aa5");
        var regExpExec = __webpack_require__("14c3");
        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;
        var maybeToString = function(it) {
          return it === void 0 ? it : String(it);
        };
        fixRegExpWellKnownSymbolLogic("replace", 2, function(REPLACE, nativeReplace, maybeCallNative, reason) {
          var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
          var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
          var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
          return [
            function replace(searchValue, replaceValue) {
              var O = requireObjectCoercible(this);
              var replacer = searchValue == void 0 ? void 0 : searchValue[REPLACE];
              return replacer !== void 0 ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
            },
            function(regexp, replaceValue) {
              if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === "string" && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
                var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
                if (res.done)
                  return res.value;
              }
              var rx = anObject(regexp);
              var S = String(this);
              var functionalReplace = typeof replaceValue === "function";
              if (!functionalReplace)
                replaceValue = String(replaceValue);
              var global2 = rx.global;
              if (global2) {
                var fullUnicode = rx.unicode;
                rx.lastIndex = 0;
              }
              var results = [];
              while (true) {
                var result = regExpExec(rx, S);
                if (result === null)
                  break;
                results.push(result);
                if (!global2)
                  break;
                var matchStr = String(result[0]);
                if (matchStr === "")
                  rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              }
              var accumulatedResult = "";
              var nextSourcePosition = 0;
              for (var i = 0; i < results.length; i++) {
                result = results[i];
                var matched = String(result[0]);
                var position = max(min(toInteger(result.index), S.length), 0);
                var captures = [];
                for (var j = 1; j < result.length; j++)
                  captures.push(maybeToString(result[j]));
                var namedCaptures = result.groups;
                if (functionalReplace) {
                  var replacerArgs = [matched].concat(captures, position, S);
                  if (namedCaptures !== void 0)
                    replacerArgs.push(namedCaptures);
                  var replacement = String(replaceValue.apply(void 0, replacerArgs));
                } else {
                  replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                }
                if (position >= nextSourcePosition) {
                  accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                  nextSourcePosition = position + matched.length;
                }
              }
              return accumulatedResult + S.slice(nextSourcePosition);
            }
          ];
          function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
            var tailPos = position + matched.length;
            var m = captures.length;
            var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
            if (namedCaptures !== void 0) {
              namedCaptures = toObject(namedCaptures);
              symbols = SUBSTITUTION_SYMBOLS;
            }
            return nativeReplace.call(replacement, symbols, function(match, ch) {
              var capture;
              switch (ch.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return matched;
                case "`":
                  return str.slice(0, position);
                case "'":
                  return str.slice(tailPos);
                case "<":
                  capture = namedCaptures[ch.slice(1, -1)];
                  break;
                default:
                  var n = +ch;
                  if (n === 0)
                    return match;
                  if (n > m) {
                    var f = floor(n / 10);
                    if (f === 0)
                      return match;
                    if (f <= m)
                      return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                  }
                  capture = captures[n - 1];
              }
              return capture === void 0 ? "" : capture;
            });
          }
        });
      },
      "5692": function(module2, exports2, __webpack_require__) {
        var IS_PURE = __webpack_require__("c430");
        var store = __webpack_require__("c6cd");
        (module2.exports = function(key, value) {
          return store[key] || (store[key] = value !== void 0 ? value : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: IS_PURE ? "pure" : "global",
          copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      "56ef": function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__("d066");
        var getOwnPropertyNamesModule = __webpack_require__("241c");
        var getOwnPropertySymbolsModule = __webpack_require__("7418");
        var anObject = __webpack_require__("825a");
        module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys2(it) {
          var keys = getOwnPropertyNamesModule.f(anObject(it));
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
        };
      },
      "5a34": function(module2, exports2, __webpack_require__) {
        var isRegExp = __webpack_require__("44e7");
        module2.exports = function(it) {
          if (isRegExp(it)) {
            throw TypeError("The method doesn't accept regular expressions");
          }
          return it;
        };
      },
      "5c6c": function(module2, exports2) {
        module2.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      },
      "5db7": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var flattenIntoArray = __webpack_require__("a2bf");
        var toObject = __webpack_require__("7b0b");
        var toLength = __webpack_require__("50c4");
        var aFunction = __webpack_require__("1c0b");
        var arraySpeciesCreate = __webpack_require__("65f0");
        $({ target: "Array", proto: true }, {
          flatMap: function flatMap(callbackfn) {
            var O = toObject(this);
            var sourceLen = toLength(O.length);
            var A;
            aFunction(callbackfn);
            A = arraySpeciesCreate(O, 0);
            A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            return A;
          }
        });
      },
      "6547": function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__("a691");
        var requireObjectCoercible = __webpack_require__("1d80");
        var createMethod = function(CONVERT_TO_STRING) {
          return function($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size)
              return CONVERT_TO_STRING ? "" : void 0;
            first = S.charCodeAt(position);
            return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
          };
        };
        module2.exports = {
          codeAt: createMethod(false),
          charAt: createMethod(true)
        };
      },
      "65f0": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        var isArray = __webpack_require__("e8b5");
        var wellKnownSymbol = __webpack_require__("b622");
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(originalArray, length) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            if (typeof C == "function" && (C === Array || isArray(C.prototype)))
              C = void 0;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null)
                C = void 0;
            }
          }
          return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
        };
      },
      "69f3": function(module2, exports2, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
        var global2 = __webpack_require__("da84");
        var isObject = __webpack_require__("861d");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var objectHas = __webpack_require__("5135");
        var sharedKey = __webpack_require__("f772");
        var hiddenKeys = __webpack_require__("d012");
        var WeakMap = global2.WeakMap;
        var set, get, has;
        var enforce = function(it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
          return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP) {
          var store = new WeakMap();
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function(it, metadata) {
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function(it) {
            return wmget.call(store, it) || {};
          };
          has = function(it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function(it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function(it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function(it) {
            return objectHas(it, STATE);
          };
        }
        module2.exports = {
          set,
          get,
          has,
          enforce,
          getterFor
        };
      },
      "6eeb": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var has = __webpack_require__("5135");
        var setGlobal = __webpack_require__("ce4e");
        var inspectSource = __webpack_require__("8925");
        var InternalStateModule = __webpack_require__("69f3");
        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");
        (module2.exports = function(O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          if (typeof value == "function") {
            if (typeof key == "string" && !has(value, "name"))
              createNonEnumerableProperty(value, "name", key);
            enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
          }
          if (O === global2) {
            if (simple)
              O[key] = value;
            else
              setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple)
            O[key] = value;
          else
            createNonEnumerableProperty(O, key, value);
        })(Function.prototype, "toString", function toString() {
          return typeof this == "function" && getInternalState(this).source || inspectSource(this);
        });
      },
      "6f53": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var objectKeys = __webpack_require__("df75");
        var toIndexedObject = __webpack_require__("fc6a");
        var propertyIsEnumerable = __webpack_require__("d1e7").f;
        var createMethod = function(TO_ENTRIES) {
          return function(it) {
            var O = toIndexedObject(it);
            var keys = objectKeys(O);
            var length = keys.length;
            var i = 0;
            var result = [];
            var key;
            while (length > i) {
              key = keys[i++];
              if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
                result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
              }
            }
            return result;
          };
        };
        module2.exports = {
          entries: createMethod(true),
          values: createMethod(false)
        };
      },
      "73d9": function(module2, exports2, __webpack_require__) {
        var addToUnscopables = __webpack_require__("44d2");
        addToUnscopables("flatMap");
      },
      "7418": function(module2, exports2) {
        exports2.f = Object.getOwnPropertySymbols;
      },
      "746f": function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__("428f");
        var has = __webpack_require__("5135");
        var wrappedWellKnownSymbolModule = __webpack_require__("e538");
        var defineProperty = __webpack_require__("9bf2").f;
        module2.exports = function(NAME) {
          var Symbol2 = path.Symbol || (path.Symbol = {});
          if (!has(Symbol2, NAME))
            defineProperty(Symbol2, NAME, {
              value: wrappedWellKnownSymbolModule.f(NAME)
            });
        };
      },
      "7839": function(module2, exports2) {
        module2.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      },
      "7b0b": function(module2, exports2, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__("1d80");
        module2.exports = function(argument) {
          return Object(requireObjectCoercible(argument));
        };
      },
      "7c73": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var defineProperties = __webpack_require__("37e8");
        var enumBugKeys = __webpack_require__("7839");
        var hiddenKeys = __webpack_require__("d012");
        var html = __webpack_require__("1be4");
        var documentCreateElement = __webpack_require__("cc12");
        var sharedKey = __webpack_require__("f772");
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {
        };
        var scriptTag = function(content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          activeXDocument2.close();
          var temp = activeXDocument2.parentWindow.Object;
          activeXDocument2 = null;
          return temp;
        };
        var NullProtoObjectViaIFrame = function() {
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
          try {
            activeXDocument = document.domain && new ActiveXObject("htmlfile");
          } catch (error) {
          }
          NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module2.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = NullProtoObject();
          return Properties === void 0 ? result : defineProperties(result, Properties);
        };
      },
      "7dd0": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var createIteratorConstructor = __webpack_require__("9ed3");
        var getPrototypeOf = __webpack_require__("e163");
        var setPrototypeOf = __webpack_require__("d2bb");
        var setToStringTag = __webpack_require__("d44e");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var redefine = __webpack_require__("6eeb");
        var wellKnownSymbol = __webpack_require__("b622");
        var IS_PURE = __webpack_require__("c430");
        var Iterators = __webpack_require__("3f8c");
        var IteratorsCore = __webpack_require__("ae93");
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";
        var returnThis = function() {
          return this;
        };
        module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
          createIteratorConstructor(IteratorConstructor, NAME, next);
          var getIterationMethod = function(KIND) {
            if (KIND === DEFAULT && defaultIterator)
              return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
              return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }
            return function() {
              return new IteratorConstructor(this);
            };
          };
          var TO_STRING_TAG = NAME + " Iterator";
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
          var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
          var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
            if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
              if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                  createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                }
              }
              setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
              if (IS_PURE)
                Iterators[TO_STRING_TAG] = returnThis;
            }
          }
          if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          }
          if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
            createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
          }
          Iterators[NAME] = defaultIterator;
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES)
            };
            if (FORCED)
              for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
          }
          return methods;
        };
      },
      "7f9a": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var inspectSource = __webpack_require__("8925");
        var WeakMap = global2.WeakMap;
        module2.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
      },
      "825a": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        module2.exports = function(it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + " is not an object");
          }
          return it;
        };
      },
      "83ab": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      },
      "8418": function(module2, exports2, __webpack_require__) {
        var toPrimitive = __webpack_require__("c04e");
        var definePropertyModule = __webpack_require__("9bf2");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        module2.exports = function(object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object)
            definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
          else
            object[propertyKey] = value;
        };
      },
      "861d": function(module2, exports2) {
        module2.exports = function(it) {
          return typeof it === "object" ? it !== null : typeof it === "function";
        };
      },
      "8875": function(module2, exports2, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(root, factory) {
          {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          }
        })(typeof self !== "undefined" ? self : this, function() {
          function getCurrentScript() {
            var descriptor = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (!descriptor && "currentScript" in document && document.currentScript) {
              return document.currentScript;
            }
            if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
              return document.currentScript;
            }
            try {
              throw new Error();
            } catch (err) {
              var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig, stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack), scriptLocation = stackDetails && stackDetails[1] || false, line = stackDetails && stackDetails[2] || false, currentLocation = document.location.href.replace(document.location.hash, ""), pageSource, inlineScriptSourceRegExp, inlineScriptSource, scripts = document.getElementsByTagName("script");
              if (scriptLocation === currentLocation) {
                pageSource = document.documentElement.outerHTML;
                inlineScriptSourceRegExp = new RegExp("(?:[^\\n]+?\\n){0," + (line - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
                inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, "$1").trim();
              }
              for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].readyState === "interactive") {
                  return scripts[i];
                }
                if (scripts[i].src === scriptLocation) {
                  return scripts[i];
                }
                if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) {
                  return scripts[i];
                }
              }
              return null;
            }
          }
          return getCurrentScript;
        });
      },
      "8925": function(module2, exports2, __webpack_require__) {
        var store = __webpack_require__("c6cd");
        var functionToString = Function.toString;
        if (typeof store.inspectSource != "function") {
          store.inspectSource = function(it) {
            return functionToString.call(it);
          };
        }
        module2.exports = store.inspectSource;
      },
      "8aa5": function(module2, exports2, __webpack_require__) {
        var charAt = __webpack_require__("6547").charAt;
        module2.exports = function(S, index2, unicode) {
          return index2 + (unicode ? charAt(S, index2).length : 1);
        };
      },
      "8bbf": function(module2, exports2) {
        module2.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;
      },
      "90e3": function(module2, exports2) {
        var id = 0;
        var postfix = Math.random();
        module2.exports = function(key) {
          return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
        };
      },
      "9112": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var definePropertyModule = __webpack_require__("9bf2");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        module2.exports = DESCRIPTORS ? function(object, key, value) {
          return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      },
      "9263": function(module2, exports2, __webpack_require__) {
        var regexpFlags = __webpack_require__("ad6d");
        var stickyHelpers = __webpack_require__("9f7f");
        var nativeExec = RegExp.prototype.exec;
        var nativeReplace = String.prototype.replace;
        var patchedExec = nativeExec;
        var UPDATES_LAST_INDEX_WRONG = function() {
          var re1 = /a/;
          var re2 = /b*/g;
          nativeExec.call(re1, "a");
          nativeExec.call(re2, "a");
          return re1.lastIndex !== 0 || re2.lastIndex !== 0;
        }();
        var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;
        var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
        if (PATCH) {
          patchedExec = function exec(str) {
            var re = this;
            var lastIndex, reCopy, match, i;
            var sticky = UNSUPPORTED_Y && re.sticky;
            var flags = regexpFlags.call(re);
            var source = re.source;
            var charsAdded = 0;
            var strCopy = str;
            if (sticky) {
              flags = flags.replace("y", "");
              if (flags.indexOf("g") === -1) {
                flags += "g";
              }
              strCopy = String(str).slice(re.lastIndex);
              if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== "\n")) {
                source = "(?: " + source + ")";
                strCopy = " " + strCopy;
                charsAdded++;
              }
              reCopy = new RegExp("^(?:" + source + ")", flags);
            }
            if (NPCG_INCLUDED) {
              reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
            }
            if (UPDATES_LAST_INDEX_WRONG)
              lastIndex = re.lastIndex;
            match = nativeExec.call(sticky ? reCopy : re, strCopy);
            if (sticky) {
              if (match) {
                match.input = match.input.slice(charsAdded);
                match[0] = match[0].slice(charsAdded);
                match.index = re.lastIndex;
                re.lastIndex += match[0].length;
              } else
                re.lastIndex = 0;
            } else if (UPDATES_LAST_INDEX_WRONG && match) {
              re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
            }
            if (NPCG_INCLUDED && match && match.length > 1) {
              nativeReplace.call(match[0], reCopy, function() {
                for (i = 1; i < arguments.length - 2; i++) {
                  if (arguments[i] === void 0)
                    match[i] = void 0;
                }
              });
            }
            return match;
          };
        }
        module2.exports = patchedExec;
      },
      "94ca": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function(string) {
          return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module2.exports = isForced;
      },
      "99af": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var fails = __webpack_require__("d039");
        var isArray = __webpack_require__("e8b5");
        var isObject = __webpack_require__("861d");
        var toObject = __webpack_require__("7b0b");
        var toLength = __webpack_require__("50c4");
        var createProperty = __webpack_require__("8418");
        var arraySpeciesCreate = __webpack_require__("65f0");
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var wellKnownSymbol = __webpack_require__("b622");
        var V8_VERSION = __webpack_require__("2d00");
        var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
        var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
          var array = [];
          array[IS_CONCAT_SPREADABLE] = false;
          return array.concat()[0] !== array;
        });
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
        var isConcatSpreadable = function(O) {
          if (!isObject(O))
            return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== void 0 ? !!spreadable : isArray(O);
        };
        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
        $({ target: "Array", proto: true, forced: FORCED }, {
          concat: function concat(arg) {
            var O = toObject(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
              E = i === -1 ? O : arguments[i];
              if (isConcatSpreadable(E)) {
                len = toLength(E.length);
                if (n + len > MAX_SAFE_INTEGER)
                  throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for (k = 0; k < len; k++, n++)
                  if (k in E)
                    createProperty(A, n, E[k]);
              } else {
                if (n >= MAX_SAFE_INTEGER)
                  throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
              }
            }
            A.length = n;
            return A;
          }
        });
      },
      "9bdd": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        module2.exports = function(iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
          } catch (error) {
            var returnMethod = iterator["return"];
            if (returnMethod !== void 0)
              anObject(returnMethod.call(iterator));
            throw error;
          }
        };
      },
      "9bf2": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var IE8_DOM_DEFINE = __webpack_require__("0cfb");
        var anObject = __webpack_require__("825a");
        var toPrimitive = __webpack_require__("c04e");
        var nativeDefineProperty = Object.defineProperty;
        exports2.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return nativeDefineProperty(O, P, Attributes);
            } catch (error) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError("Accessors not supported");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      },
      "9ed3": function(module2, exports2, __webpack_require__) {
        var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
        var create = __webpack_require__("7c73");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        var setToStringTag = __webpack_require__("d44e");
        var Iterators = __webpack_require__("3f8c");
        var returnThis = function() {
          return this;
        };
        module2.exports = function(IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + " Iterator";
          IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };
      },
      "9f7f": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        function RE(s, f) {
          return RegExp(s, f);
        }
        exports2.UNSUPPORTED_Y = fails(function() {
          var re = RE("a", "y");
          re.lastIndex = 2;
          return re.exec("abcd") != null;
        });
        exports2.BROKEN_CARET = fails(function() {
          var re = RE("^r", "gy");
          re.lastIndex = 2;
          return re.exec("str") != null;
        });
      },
      "a2bf": function(module2, exports2, __webpack_require__) {
        var isArray = __webpack_require__("e8b5");
        var toLength = __webpack_require__("50c4");
        var bind = __webpack_require__("0366");
        var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
          var targetIndex = start;
          var sourceIndex = 0;
          var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
          var element;
          while (sourceIndex < sourceLen) {
            if (sourceIndex in source) {
              element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
              if (depth > 0 && isArray(element)) {
                targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
              } else {
                if (targetIndex >= 9007199254740991)
                  throw TypeError("Exceed the acceptable array length");
                target[targetIndex] = element;
              }
              targetIndex++;
            }
            sourceIndex++;
          }
          return targetIndex;
        };
        module2.exports = flattenIntoArray;
      },
      "a352": function(module2, exports2) {
        module2.exports = __WEBPACK_EXTERNAL_MODULE_a352__;
      },
      "a434": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var toAbsoluteIndex = __webpack_require__("23cb");
        var toInteger = __webpack_require__("a691");
        var toLength = __webpack_require__("50c4");
        var toObject = __webpack_require__("7b0b");
        var arraySpeciesCreate = __webpack_require__("65f0");
        var createProperty = __webpack_require__("8418");
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("splice", { ACCESSORS: true, 0: 0, 1: 2 });
        var max = Math.max;
        var min = Math.min;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          splice: function splice(start, deleteCount) {
            var O = toObject(this);
            var len = toLength(O.length);
            var actualStart = toAbsoluteIndex(start, len);
            var argumentsLength = arguments.length;
            var insertCount, actualDeleteCount, A, k, from, to;
            if (argumentsLength === 0) {
              insertCount = actualDeleteCount = 0;
            } else if (argumentsLength === 1) {
              insertCount = 0;
              actualDeleteCount = len - actualStart;
            } else {
              insertCount = argumentsLength - 2;
              actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
            }
            if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
              throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
            }
            A = arraySpeciesCreate(O, actualDeleteCount);
            for (k = 0; k < actualDeleteCount; k++) {
              from = actualStart + k;
              if (from in O)
                createProperty(A, k, O[from]);
            }
            A.length = actualDeleteCount;
            if (insertCount < actualDeleteCount) {
              for (k = actualStart; k < len - actualDeleteCount; k++) {
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
              for (k = len; k > len - actualDeleteCount + insertCount; k--)
                delete O[k - 1];
            } else if (insertCount > actualDeleteCount) {
              for (k = len - actualDeleteCount; k > actualStart; k--) {
                from = k + actualDeleteCount - 1;
                to = k + insertCount - 1;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
            }
            for (k = 0; k < insertCount; k++) {
              O[k + actualStart] = arguments[k + 2];
            }
            O.length = len - actualDeleteCount + insertCount;
            return A;
          }
        });
      },
      "a4d3": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var global2 = __webpack_require__("da84");
        var getBuiltIn = __webpack_require__("d066");
        var IS_PURE = __webpack_require__("c430");
        var DESCRIPTORS = __webpack_require__("83ab");
        var NATIVE_SYMBOL = __webpack_require__("4930");
        var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
        var fails = __webpack_require__("d039");
        var has = __webpack_require__("5135");
        var isArray = __webpack_require__("e8b5");
        var isObject = __webpack_require__("861d");
        var anObject = __webpack_require__("825a");
        var toObject = __webpack_require__("7b0b");
        var toIndexedObject = __webpack_require__("fc6a");
        var toPrimitive = __webpack_require__("c04e");
        var createPropertyDescriptor = __webpack_require__("5c6c");
        var nativeObjectCreate = __webpack_require__("7c73");
        var objectKeys = __webpack_require__("df75");
        var getOwnPropertyNamesModule = __webpack_require__("241c");
        var getOwnPropertyNamesExternal = __webpack_require__("057f");
        var getOwnPropertySymbolsModule = __webpack_require__("7418");
        var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
        var definePropertyModule = __webpack_require__("9bf2");
        var propertyIsEnumerableModule = __webpack_require__("d1e7");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var redefine = __webpack_require__("6eeb");
        var shared = __webpack_require__("5692");
        var sharedKey = __webpack_require__("f772");
        var hiddenKeys = __webpack_require__("d012");
        var uid = __webpack_require__("90e3");
        var wellKnownSymbol = __webpack_require__("b622");
        var wrappedWellKnownSymbolModule = __webpack_require__("e538");
        var defineWellKnownSymbol = __webpack_require__("746f");
        var setToStringTag = __webpack_require__("d44e");
        var InternalStateModule = __webpack_require__("69f3");
        var $forEach = __webpack_require__("b727").forEach;
        var HIDDEN = sharedKey("hidden");
        var SYMBOL = "Symbol";
        var PROTOTYPE = "prototype";
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(SYMBOL);
        var ObjectPrototype = Object[PROTOTYPE];
        var $Symbol = global2.Symbol;
        var $stringify = getBuiltIn("JSON", "stringify");
        var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var nativeDefineProperty = definePropertyModule.f;
        var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
        var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
        var AllSymbols = shared("symbols");
        var ObjectPrototypeSymbols = shared("op-symbols");
        var StringToSymbolRegistry = shared("string-to-symbol-registry");
        var SymbolToStringRegistry = shared("symbol-to-string-registry");
        var WellKnownSymbolsStore = shared("wks");
        var QObject = global2.QObject;
        var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDescriptor = DESCRIPTORS && fails(function() {
          return nativeObjectCreate(nativeDefineProperty({}, "a", {
            get: function() {
              return nativeDefineProperty(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(O, P, Attributes) {
          var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
          if (ObjectPrototypeDescriptor)
            delete ObjectPrototype[P];
          nativeDefineProperty(O, P, Attributes);
          if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
            nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
          }
        } : nativeDefineProperty;
        var wrap = function(tag, description) {
          var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
          setInternalState(symbol, {
            type: SYMBOL,
            tag,
            description
          });
          if (!DESCRIPTORS)
            symbol.description = description;
          return symbol;
        };
        var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          return Object(it) instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(O, P, Attributes) {
          if (O === ObjectPrototype)
            $defineProperty(ObjectPrototypeSymbols, P, Attributes);
          anObject(O);
          var key = toPrimitive(P, true);
          anObject(Attributes);
          if (has(AllSymbols, key)) {
            if (!Attributes.enumerable) {
              if (!has(O, HIDDEN))
                nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
              O[HIDDEN][key] = true;
            } else {
              if (has(O, HIDDEN) && O[HIDDEN][key])
                O[HIDDEN][key] = false;
              Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
            }
            return setSymbolDescriptor(O, key, Attributes);
          }
          return nativeDefineProperty(O, key, Attributes);
        };
        var $defineProperties = function defineProperties(O, Properties) {
          anObject(O);
          var properties = toIndexedObject(Properties);
          var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
          $forEach(keys, function(key) {
            if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key))
              $defineProperty(O, key, properties[key]);
          });
          return O;
        };
        var $create = function create(O, Properties) {
          return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(V) {
          var P = toPrimitive(V, true);
          var enumerable = nativePropertyIsEnumerable.call(this, P);
          if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P))
            return false;
          return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
          var it = toIndexedObject(O);
          var key = toPrimitive(P, true);
          if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key))
            return;
          var descriptor = nativeGetOwnPropertyDescriptor(it, key);
          if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
            descriptor.enumerable = true;
          }
          return descriptor;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(O) {
          var names = nativeGetOwnPropertyNames(toIndexedObject(O));
          var result = [];
          $forEach(names, function(key) {
            if (!has(AllSymbols, key) && !has(hiddenKeys, key))
              result.push(key);
          });
          return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
          var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
          var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
          var result = [];
          $forEach(names, function(key) {
            if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
              result.push(AllSymbols[key]);
            }
          });
          return result;
        };
        if (!NATIVE_SYMBOL) {
          $Symbol = function Symbol2() {
            if (this instanceof $Symbol)
              throw TypeError("Symbol is not a constructor");
            var description = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]);
            var tag = uid(description);
            var setter = function(value) {
              if (this === ObjectPrototype)
                setter.call(ObjectPrototypeSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
              setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
            };
            if (DESCRIPTORS && USE_SETTER)
              setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
            return wrap(tag, description);
          };
          redefine($Symbol[PROTOTYPE], "toString", function toString() {
            return getInternalState(this).tag;
          });
          redefine($Symbol, "withoutSetter", function(description) {
            return wrap(uid(description), description);
          });
          propertyIsEnumerableModule.f = $propertyIsEnumerable;
          definePropertyModule.f = $defineProperty;
          getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
          getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
          getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
          wrappedWellKnownSymbolModule.f = function(name) {
            return wrap(wellKnownSymbol(name), name);
          };
          if (DESCRIPTORS) {
            nativeDefineProperty($Symbol[PROTOTYPE], "description", {
              configurable: true,
              get: function description() {
                return getInternalState(this).description;
              }
            });
            if (!IS_PURE) {
              redefine(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
            }
          }
        }
        $({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
          Symbol: $Symbol
        });
        $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
          defineWellKnownSymbol(name);
        });
        $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
          "for": function(key) {
            var string = String(key);
            if (has(StringToSymbolRegistry, string))
              return StringToSymbolRegistry[string];
            var symbol = $Symbol(string);
            StringToSymbolRegistry[string] = symbol;
            SymbolToStringRegistry[symbol] = string;
            return symbol;
          },
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym))
              throw TypeError(sym + " is not a symbol");
            if (has(SymbolToStringRegistry, sym))
              return SymbolToStringRegistry[sym];
          },
          useSetter: function() {
            USE_SETTER = true;
          },
          useSimple: function() {
            USE_SETTER = false;
          }
        });
        $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
          create: $create,
          defineProperty: $defineProperty,
          defineProperties: $defineProperties,
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor
        });
        $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
          getOwnPropertyNames: $getOwnPropertyNames,
          getOwnPropertySymbols: $getOwnPropertySymbols
        });
        $({ target: "Object", stat: true, forced: fails(function() {
          getOwnPropertySymbolsModule.f(1);
        }) }, {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return getOwnPropertySymbolsModule.f(toObject(it));
          }
        });
        if ($stringify) {
          var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
            var symbol = $Symbol();
            return $stringify([symbol]) != "[null]" || $stringify({ a: symbol }) != "{}" || $stringify(Object(symbol)) != "{}";
          });
          $({ target: "JSON", stat: true, forced: FORCED_JSON_STRINGIFY }, {
            stringify: function stringify(it, replacer, space) {
              var args = [it];
              var index2 = 1;
              var $replacer;
              while (arguments.length > index2)
                args.push(arguments[index2++]);
              $replacer = replacer;
              if (!isObject(replacer) && it === void 0 || isSymbol(it))
                return;
              if (!isArray(replacer))
                replacer = function(key, value) {
                  if (typeof $replacer == "function")
                    value = $replacer.call(this, key, value);
                  if (!isSymbol(value))
                    return value;
                };
              args[1] = replacer;
              return $stringify.apply(null, args);
            }
          });
        }
        if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
          createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        }
        setToStringTag($Symbol, SYMBOL);
        hiddenKeys[HIDDEN] = true;
      },
      "a630": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var from = __webpack_require__("4df4");
        var checkCorrectnessOfIteration = __webpack_require__("1c7e");
        var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
          Array.from(iterable);
        });
        $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
          from
        });
      },
      "a640": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = function(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return !!method && fails(function() {
            method.call(null, argument || function() {
              throw 1;
            }, 1);
          });
        };
      },
      "a691": function(module2, exports2) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module2.exports = function(argument) {
          return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };
      },
      "ab13": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var MATCH = wellKnownSymbol("match");
        module2.exports = function(METHOD_NAME) {
          var regexp = /./;
          try {
            "/./"[METHOD_NAME](regexp);
          } catch (e) {
            try {
              regexp[MATCH] = false;
              return "/./"[METHOD_NAME](regexp);
            } catch (f) {
            }
          }
          return false;
        };
      },
      "ac1f": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var exec = __webpack_require__("9263");
        $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
          exec
        });
      },
      "ad6d": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        module2.exports = function() {
          var that = anObject(this);
          var result = "";
          if (that.global)
            result += "g";
          if (that.ignoreCase)
            result += "i";
          if (that.multiline)
            result += "m";
          if (that.dotAll)
            result += "s";
          if (that.unicode)
            result += "u";
          if (that.sticky)
            result += "y";
          return result;
        };
      },
      "ae40": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var fails = __webpack_require__("d039");
        var has = __webpack_require__("5135");
        var defineProperty = Object.defineProperty;
        var cache = {};
        var thrower = function(it) {
          throw it;
        };
        module2.exports = function(METHOD_NAME, options) {
          if (has(cache, METHOD_NAME))
            return cache[METHOD_NAME];
          if (!options)
            options = {};
          var method = [][METHOD_NAME];
          var ACCESSORS = has(options, "ACCESSORS") ? options.ACCESSORS : false;
          var argument0 = has(options, 0) ? options[0] : thrower;
          var argument1 = has(options, 1) ? options[1] : void 0;
          return cache[METHOD_NAME] = !!method && !fails(function() {
            if (ACCESSORS && !DESCRIPTORS)
              return true;
            var O = { length: -1 };
            if (ACCESSORS)
              defineProperty(O, 1, { enumerable: true, get: thrower });
            else
              O[1] = 1;
            method.call(O, argument0, argument1);
          });
        };
      },
      "ae93": function(module2, exports2, __webpack_require__) {
        var getPrototypeOf = __webpack_require__("e163");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var has = __webpack_require__("5135");
        var wellKnownSymbol = __webpack_require__("b622");
        var IS_PURE = __webpack_require__("c430");
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var returnThis = function() {
          return this;
        };
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
        if ([].keys) {
          arrayIterator = [].keys();
          if (!("next" in arrayIterator))
            BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }
        if (IteratorPrototype == void 0)
          IteratorPrototype = {};
        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }
        module2.exports = {
          IteratorPrototype,
          BUGGY_SAFARI_ITERATORS
        };
      },
      "b041": function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
        var classof = __webpack_require__("f5df");
        module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
          return "[object " + classof(this) + "]";
        };
      },
      "b0c0": function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__("83ab");
        var defineProperty = __webpack_require__("9bf2").f;
        var FunctionPrototype = Function.prototype;
        var FunctionPrototypeToString = FunctionPrototype.toString;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = "name";
        if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
          defineProperty(FunctionPrototype, NAME, {
            configurable: true,
            get: function() {
              try {
                return FunctionPrototypeToString.call(this).match(nameRE)[1];
              } catch (error) {
                return "";
              }
            }
          });
        }
      },
      "b622": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var shared = __webpack_require__("5692");
        var has = __webpack_require__("5135");
        var uid = __webpack_require__("90e3");
        var NATIVE_SYMBOL = __webpack_require__("4930");
        var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
        var WellKnownSymbolsStore = shared("wks");
        var Symbol2 = global2.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
        module2.exports = function(name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol2, name))
              WellKnownSymbolsStore[name] = Symbol2[name];
            else
              WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
          }
          return WellKnownSymbolsStore[name];
        };
      },
      "b64b": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var toObject = __webpack_require__("7b0b");
        var nativeKeys = __webpack_require__("df75");
        var fails = __webpack_require__("d039");
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeKeys(1);
        });
        $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
          keys: function keys(it) {
            return nativeKeys(toObject(it));
          }
        });
      },
      "b727": function(module2, exports2, __webpack_require__) {
        var bind = __webpack_require__("0366");
        var IndexedObject = __webpack_require__("44ad");
        var toObject = __webpack_require__("7b0b");
        var toLength = __webpack_require__("50c4");
        var arraySpeciesCreate = __webpack_require__("65f0");
        var push = [].push;
        var createMethod = function(TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self2 = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self2.length);
            var index2 = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
            var value, result;
            for (; length > index2; index2++)
              if (NO_HOLES || index2 in self2) {
                value = self2[index2];
                result = boundFunction(value, index2, O);
                if (TYPE) {
                  if (IS_MAP)
                    target[index2] = result;
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true;
                      case 5:
                        return value;
                      case 6:
                        return index2;
                      case 2:
                        push.call(target, value);
                    }
                  else if (IS_EVERY)
                    return false;
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };
        module2.exports = {
          forEach: createMethod(0),
          map: createMethod(1),
          filter: createMethod(2),
          some: createMethod(3),
          every: createMethod(4),
          find: createMethod(5),
          findIndex: createMethod(6)
        };
      },
      "c04e": function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__("861d");
        module2.exports = function(input, PREFERRED_STRING) {
          if (!isObject(input))
            return input;
          var fn, val;
          if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
            return val;
          if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
            return val;
          if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
            return val;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      "c430": function(module2, exports2) {
        module2.exports = false;
      },
      "c6b6": function(module2, exports2) {
        var toString = {}.toString;
        module2.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };
      },
      "c6cd": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var setGlobal = __webpack_require__("ce4e");
        var SHARED = "__core-js_shared__";
        var store = global2[SHARED] || setGlobal(SHARED, {});
        module2.exports = store;
      },
      "c740": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var $findIndex = __webpack_require__("b727").findIndex;
        var addToUnscopables = __webpack_require__("44d2");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var FIND_INDEX = "findIndex";
        var SKIPS_HOLES = true;
        var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);
        if (FIND_INDEX in [])
          Array(1)[FIND_INDEX](function() {
            SKIPS_HOLES = false;
          });
        $({ target: "Array", proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
          findIndex: function findIndex(callbackfn) {
            return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables(FIND_INDEX);
      },
      "c8ba": function(module2, exports2) {
        var g;
        g = function() {
          return this;
        }();
        try {
          g = g || new Function("return this")();
        } catch (e) {
          if (typeof window === "object")
            g = window;
        }
        module2.exports = g;
      },
      "c975": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var $indexOf = __webpack_require__("4d64").indexOf;
        var arrayMethodIsStrict = __webpack_require__("a640");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var nativeIndexOf = [].indexOf;
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict("indexOf");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", { ACCESSORS: true, 1: 0 });
        $({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
          indexOf: function indexOf(searchElement) {
            return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "ca84": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("5135");
        var toIndexedObject = __webpack_require__("fc6a");
        var indexOf = __webpack_require__("4d64").indexOf;
        var hiddenKeys = __webpack_require__("d012");
        module2.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          while (names.length > i)
            if (has(O, key = names[i++])) {
              ~indexOf(result, key) || result.push(key);
            }
          return result;
        };
      },
      "caad": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var $includes = __webpack_require__("4d64").includes;
        var addToUnscopables = __webpack_require__("44d2");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", { ACCESSORS: true, 1: 0 });
        $({ target: "Array", proto: true, forced: !USES_TO_LENGTH }, {
          includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("includes");
      },
      "cc12": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var isObject = __webpack_require__("861d");
        var document2 = global2.document;
        var EXISTS = isObject(document2) && isObject(document2.createElement);
        module2.exports = function(it) {
          return EXISTS ? document2.createElement(it) : {};
        };
      },
      "ce4e": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var createNonEnumerableProperty = __webpack_require__("9112");
        module2.exports = function(key, value) {
          try {
            createNonEnumerableProperty(global2, key, value);
          } catch (error) {
            global2[key] = value;
          }
          return value;
        };
      },
      "d012": function(module2, exports2) {
        module2.exports = {};
      },
      "d039": function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      },
      "d066": function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__("428f");
        var global2 = __webpack_require__("da84");
        var aFunction = function(variable) {
          return typeof variable == "function" ? variable : void 0;
        };
        module2.exports = function(namespace, method) {
          return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global2[namespace]) : path[namespace] && path[namespace][method] || global2[namespace] && global2[namespace][method];
        };
      },
      "d1e7": function(module2, exports2, __webpack_require__) {
        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
        exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : nativePropertyIsEnumerable;
      },
      "d28b": function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__("746f");
        defineWellKnownSymbol("iterator");
      },
      "d2bb": function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__("825a");
        var aPossiblePrototype = __webpack_require__("3bbe");
        module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            setter.call(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
          }
          return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER)
              setter.call(O, proto);
            else
              O.__proto__ = proto;
            return O;
          };
        }() : void 0);
      },
      "d3b7": function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
        var redefine = __webpack_require__("6eeb");
        var toString = __webpack_require__("b041");
        if (!TO_STRING_TAG_SUPPORT) {
          redefine(Object.prototype, "toString", toString, { unsafe: true });
        }
      },
      "d44e": function(module2, exports2, __webpack_require__) {
        var defineProperty = __webpack_require__("9bf2").f;
        var has = __webpack_require__("5135");
        var wellKnownSymbol = __webpack_require__("b622");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        module2.exports = function(it, TAG, STATIC) {
          if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
          }
        };
      },
      "d58f": function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__("1c0b");
        var toObject = __webpack_require__("7b0b");
        var IndexedObject = __webpack_require__("44ad");
        var toLength = __webpack_require__("50c4");
        var createMethod = function(IS_RIGHT) {
          return function(that, callbackfn, argumentsLength, memo) {
            aFunction(callbackfn);
            var O = toObject(that);
            var self2 = IndexedObject(O);
            var length = toLength(O.length);
            var index2 = IS_RIGHT ? length - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              while (true) {
                if (index2 in self2) {
                  memo = self2[index2];
                  index2 += i;
                  break;
                }
                index2 += i;
                if (IS_RIGHT ? index2 < 0 : length <= index2) {
                  throw TypeError("Reduce of empty array with no initial value");
                }
              }
            for (; IS_RIGHT ? index2 >= 0 : length > index2; index2 += i)
              if (index2 in self2) {
                memo = callbackfn(memo, self2[index2], index2, O);
              }
            return memo;
          };
        };
        module2.exports = {
          left: createMethod(false),
          right: createMethod(true)
        };
      },
      "d784": function(module2, exports2, __webpack_require__) {
        __webpack_require__("ac1f");
        var redefine = __webpack_require__("6eeb");
        var fails = __webpack_require__("d039");
        var wellKnownSymbol = __webpack_require__("b622");
        var regexpExec = __webpack_require__("9263");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var SPECIES = wellKnownSymbol("species");
        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
          var re = /./;
          re.exec = function() {
            var result = [];
            result.groups = { a: "7" };
            return result;
          };
          return "".replace(re, "$<a>") !== "7";
        });
        var REPLACE_KEEPS_$0 = function() {
          return "a".replace(/./, "$0") === "$0";
        }();
        var REPLACE = wellKnownSymbol("replace");
        var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
          if (/./[REPLACE]) {
            return /./[REPLACE]("a", "$0") === "";
          }
          return false;
        }();
        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
          var re = /(?:)/;
          var originalExec = re.exec;
          re.exec = function() {
            return originalExec.apply(this, arguments);
          };
          var result = "ab".split(re);
          return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
        });
        module2.exports = function(KEY, length, exec, sham) {
          var SYMBOL = wellKnownSymbol(KEY);
          var DELEGATES_TO_SYMBOL = !fails(function() {
            var O = {};
            O[SYMBOL] = function() {
              return 7;
            };
            return ""[KEY](O) != 7;
          });
          var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
            var execCalled = false;
            var re = /a/;
            if (KEY === "split") {
              re = {};
              re.constructor = {};
              re.constructor[SPECIES] = function() {
                return re;
              };
              re.flags = "";
              re[SYMBOL] = /./[SYMBOL];
            }
            re.exec = function() {
              execCalled = true;
              return null;
            };
            re[SYMBOL]("");
            return !execCalled;
          });
          if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                }
                return { done: true, value: nativeMethod.call(str, regexp, arg2) };
              }
              return { done: false };
            }, {
              REPLACE_KEEPS_$0,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
            });
            var stringMethod = methods[0];
            var regexMethod = methods[1];
            redefine(String.prototype, KEY, stringMethod);
            redefine(
              RegExp.prototype,
              SYMBOL,
              length == 2 ? function(string, arg) {
                return regexMethod.call(string, this, arg);
              } : function(string) {
                return regexMethod.call(string, this);
              }
            );
          }
          if (sham)
            createNonEnumerableProperty(RegExp.prototype[SYMBOL], "sham", true);
        };
      },
      "d81d": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var $map = __webpack_require__("b727").map;
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
        var USES_TO_LENGTH = arrayMethodUsesToLength("map");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          map: function map(callbackfn) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "da84": function(module2, exports2, __webpack_require__) {
        (function(global2) {
          var check = function(it) {
            return it && it.Math == Math && it;
          };
          module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global2 == "object" && global2) || Function("return this")();
        }).call(this, __webpack_require__("c8ba"));
      },
      "dbb4": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var DESCRIPTORS = __webpack_require__("83ab");
        var ownKeys2 = __webpack_require__("56ef");
        var toIndexedObject = __webpack_require__("fc6a");
        var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
        var createProperty = __webpack_require__("8418");
        $({ target: "Object", stat: true, sham: !DESCRIPTORS }, {
          getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
            var O = toIndexedObject(object);
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            var keys = ownKeys2(O);
            var result = {};
            var index2 = 0;
            var key, descriptor;
            while (keys.length > index2) {
              descriptor = getOwnPropertyDescriptor(O, key = keys[index2++]);
              if (descriptor !== void 0)
                createProperty(result, key, descriptor);
            }
            return result;
          }
        });
      },
      "dbf1": function(module2, __webpack_exports__, __webpack_require__) {
        (function(global2) {
          __webpack_require__.d(__webpack_exports__, "a", function() {
            return console;
          });
          function getConsole() {
            if (typeof window !== "undefined") {
              return window.console;
            }
            return global2.console;
          }
          var console = getConsole();
        }).call(this, __webpack_require__("c8ba"));
      },
      "ddb0": function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__("da84");
        var DOMIterables = __webpack_require__("fdbc");
        var ArrayIteratorMethods = __webpack_require__("e260");
        var createNonEnumerableProperty = __webpack_require__("9112");
        var wellKnownSymbol = __webpack_require__("b622");
        var ITERATOR = wellKnownSymbol("iterator");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var ArrayValues = ArrayIteratorMethods.values;
        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global2[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          if (CollectionPrototype) {
            if (CollectionPrototype[ITERATOR] !== ArrayValues)
              try {
                createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
              } catch (error) {
                CollectionPrototype[ITERATOR] = ArrayValues;
              }
            if (!CollectionPrototype[TO_STRING_TAG]) {
              createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
            }
            if (DOMIterables[COLLECTION_NAME])
              for (var METHOD_NAME in ArrayIteratorMethods) {
                if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
                  try {
                    createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
                  } catch (error) {
                    CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
                  }
              }
          }
        }
      },
      "df75": function(module2, exports2, __webpack_require__) {
        var internalObjectKeys = __webpack_require__("ca84");
        var enumBugKeys = __webpack_require__("7839");
        module2.exports = Object.keys || function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };
      },
      "e01a": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var DESCRIPTORS = __webpack_require__("83ab");
        var global2 = __webpack_require__("da84");
        var has = __webpack_require__("5135");
        var isObject = __webpack_require__("861d");
        var defineProperty = __webpack_require__("9bf2").f;
        var copyConstructorProperties = __webpack_require__("e893");
        var NativeSymbol = global2.Symbol;
        if (DESCRIPTORS && typeof NativeSymbol == "function" && (!("description" in NativeSymbol.prototype) || NativeSymbol().description !== void 0)) {
          var EmptyStringDescriptionStore = {};
          var SymbolWrapper = function Symbol2() {
            var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]);
            var result = this instanceof SymbolWrapper ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
            if (description === "")
              EmptyStringDescriptionStore[result] = true;
            return result;
          };
          copyConstructorProperties(SymbolWrapper, NativeSymbol);
          var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
          symbolPrototype.constructor = SymbolWrapper;
          var symbolToString = symbolPrototype.toString;
          var native = String(NativeSymbol("test")) == "Symbol(test)";
          var regexp = /^Symbol\((.*)\)[^)]+$/;
          defineProperty(symbolPrototype, "description", {
            configurable: true,
            get: function description() {
              var symbol = isObject(this) ? this.valueOf() : this;
              var string = symbolToString.call(symbol);
              if (has(EmptyStringDescriptionStore, symbol))
                return "";
              var desc = native ? string.slice(7, -1) : string.replace(regexp, "$1");
              return desc === "" ? void 0 : desc;
            }
          });
          $({ global: true, forced: true }, {
            Symbol: SymbolWrapper
          });
        }
      },
      "e163": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("5135");
        var toObject = __webpack_require__("7b0b");
        var sharedKey = __webpack_require__("f772");
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");
        var IE_PROTO = sharedKey("IE_PROTO");
        var ObjectPrototype = Object.prototype;
        module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
          O = toObject(O);
          if (has(O, IE_PROTO))
            return O[IE_PROTO];
          if (typeof O.constructor == "function" && O instanceof O.constructor) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectPrototype : null;
        };
      },
      "e177": function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__("d039");
        module2.exports = !fails(function() {
          function F() {
          }
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });
      },
      "e260": function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__("fc6a");
        var addToUnscopables = __webpack_require__("44d2");
        var Iterators = __webpack_require__("3f8c");
        var InternalStateModule = __webpack_require__("69f3");
        var defineIterator = __webpack_require__("7dd0");
        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
        module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
          setInternalState(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(iterated),
            index: 0,
            kind
          });
        }, function() {
          var state = getInternalState(this);
          var target = state.target;
          var kind = state.kind;
          var index2 = state.index++;
          if (!target || index2 >= target.length) {
            state.target = void 0;
            return { value: void 0, done: true };
          }
          if (kind == "keys")
            return { value: index2, done: false };
          if (kind == "values")
            return { value: target[index2], done: false };
          return { value: [index2, target[index2]], done: false };
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
      },
      "e439": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var fails = __webpack_require__("d039");
        var toIndexedObject = __webpack_require__("fc6a");
        var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
        var DESCRIPTORS = __webpack_require__("83ab");
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeGetOwnPropertyDescriptor(1);
        });
        var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;
        $({ target: "Object", stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
            return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
          }
        });
      },
      "e538": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        exports2.f = wellKnownSymbol;
      },
      "e893": function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__("5135");
        var ownKeys2 = __webpack_require__("56ef");
        var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
        var definePropertyModule = __webpack_require__("9bf2");
        module2.exports = function(target, source) {
          var keys = ownKeys2(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key))
              defineProperty(target, key, getOwnPropertyDescriptor(source, key));
          }
        };
      },
      "e8b5": function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__("c6b6");
        module2.exports = Array.isArray || function isArray(arg) {
          return classof(arg) == "Array";
        };
      },
      "e95a": function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__("b622");
        var Iterators = __webpack_require__("3f8c");
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
      },
      "f5df": function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
        var classofRaw = __webpack_require__("c6b6");
        var wellKnownSymbol = __webpack_require__("b622");
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var CORRECT_ARGUMENTS = classofRaw(function() {
          return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (error) {
          }
        };
        module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
          var O, tag, result;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
        };
      },
      "f772": function(module2, exports2, __webpack_require__) {
        var shared = __webpack_require__("5692");
        var uid = __webpack_require__("90e3");
        var keys = shared("keys");
        module2.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };
      },
      "fb15": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        if (typeof window !== "undefined") {
          var currentScript = window.document.currentScript;
          {
            var getCurrentScript = __webpack_require__("8875");
            currentScript = getCurrentScript();
            if (!("currentScript" in document)) {
              Object.defineProperty(document, "currentScript", { get: getCurrentScript });
            }
          }
          var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          if (src) {
            __webpack_require__.p = src[1];
          }
        }
        __webpack_require__("99af");
        __webpack_require__("4de4");
        __webpack_require__("4160");
        __webpack_require__("c975");
        __webpack_require__("d81d");
        __webpack_require__("a434");
        __webpack_require__("159b");
        __webpack_require__("a4d3");
        __webpack_require__("e439");
        __webpack_require__("dbb4");
        __webpack_require__("b64b");
        function _defineProperty2(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function ownKeys2(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread22(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys2(Object(source), true).forEach(function(key) {
                _defineProperty2(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys2(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        __webpack_require__("e01a");
        __webpack_require__("d28b");
        __webpack_require__("e260");
        __webpack_require__("d3b7");
        __webpack_require__("3ca3");
        __webpack_require__("ddb0");
        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        __webpack_require__("a630");
        __webpack_require__("fb6a");
        __webpack_require__("b0c0");
        __webpack_require__("25f0");
        function _arrayLikeToArray2(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _unsupportedIterableToArray2(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray2(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray2(o, minLen);
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
        }
        function _arrayWithoutHoles2(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray2(arr);
        }
        function _iterableToArray2(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }
        function _nonIterableSpread2() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _toConsumableArray2(arr) {
          return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
        }
        var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
        var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /* @__PURE__ */ __webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);
        function removeNode(node) {
          if (node.parentElement !== null) {
            node.parentElement.removeChild(node);
          }
        }
        function insertNodeAt(fatherNode, node, position) {
          var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
          fatherNode.insertBefore(node, refNode);
        }
        var console = __webpack_require__("dbf1");
        __webpack_require__("13d5");
        __webpack_require__("4fad");
        __webpack_require__("ac1f");
        __webpack_require__("5319");
        function cached(fn) {
          var cache = /* @__PURE__ */ Object.create(null);
          return function cachedFn(str) {
            var hit = cache[str];
            return hit || (cache[str] = fn(str));
          };
        }
        var regex = /-(\w)/g;
        var camelize = cached(function(str) {
          return str.replace(regex, function(_, c) {
            return c.toUpperCase();
          });
        });
        __webpack_require__("5db7");
        __webpack_require__("73d9");
        var manageAndEmit = ["Start", "Add", "Remove", "Update", "End"];
        var emit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
        var manage = ["Move"];
        var eventHandlerNames = [manage, manageAndEmit, emit].flatMap(function(events2) {
          return events2;
        }).map(function(evt) {
          return "on".concat(evt);
        });
        var events = {
          manage,
          manageAndEmit,
          emit
        };
        function isReadOnly(eventName) {
          return eventHandlerNames.indexOf(eventName) !== -1;
        }
        __webpack_require__("caad");
        __webpack_require__("2ca0");
        var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
        function isHtmlTag(name) {
          return tags.includes(name);
        }
        function isTransition(name) {
          return ["transition-group", "TransitionGroup"].includes(name);
        }
        function isHtmlAttribute(value) {
          return ["id", "class", "role", "style"].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
        }
        function project(entries) {
          return entries.reduce(function(res, _ref) {
            var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
            res[key] = value;
            return res;
          }, {});
        }
        function getComponentAttributes(_ref3) {
          var $attrs = _ref3.$attrs, _ref3$componentData = _ref3.componentData, componentData = _ref3$componentData === void 0 ? {} : _ref3$componentData;
          var attributes = project(Object.entries($attrs).filter(function(_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2), key = _ref5[0];
            _ref5[1];
            return isHtmlAttribute(key);
          }));
          return _objectSpread22(_objectSpread22({}, attributes), componentData);
        }
        function createSortableOption(_ref6) {
          var $attrs = _ref6.$attrs, callBackBuilder = _ref6.callBackBuilder;
          var options = project(getValidSortableEntries($attrs));
          Object.entries(callBackBuilder).forEach(function(_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2), eventType = _ref8[0], eventBuilder = _ref8[1];
            events[eventType].forEach(function(event) {
              options["on".concat(event)] = eventBuilder(event);
            });
          });
          var draggable2 = "[data-draggable]".concat(options.draggable || "");
          return _objectSpread22(_objectSpread22({}, options), {}, {
            draggable: draggable2
          });
        }
        function getValidSortableEntries(value) {
          return Object.entries(value).filter(function(_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2), key = _ref10[0];
            _ref10[1];
            return !isHtmlAttribute(key);
          }).map(function(_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2), key = _ref12[0], value2 = _ref12[1];
            return [camelize(key), value2];
          }).filter(function(_ref13) {
            var _ref14 = _slicedToArray(_ref13, 2), key = _ref14[0];
            _ref14[1];
            return !isReadOnly(key);
          });
        }
        __webpack_require__("c740");
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props2) {
          for (var i = 0; i < props2.length; i++) {
            var descriptor = props2[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var getHtmlElementFromNode = function getHtmlElementFromNode2(_ref) {
          var el = _ref.el;
          return el;
        };
        var addContext = function addContext2(domElement, context) {
          return domElement.__draggable_context = context;
        };
        var getContext = function getContext2(domElement) {
          return domElement.__draggable_context;
        };
        var componentStructure_ComponentStructure = /* @__PURE__ */ function() {
          function ComponentStructure(_ref2) {
            var _ref2$nodes = _ref2.nodes, header = _ref2$nodes.header, defaultNodes = _ref2$nodes.default, footer = _ref2$nodes.footer, root = _ref2.root, realList = _ref2.realList;
            _classCallCheck(this, ComponentStructure);
            this.defaultNodes = defaultNodes;
            this.children = [].concat(_toConsumableArray2(header), _toConsumableArray2(defaultNodes), _toConsumableArray2(footer));
            this.externalComponent = root.externalComponent;
            this.rootTransition = root.transition;
            this.tag = root.tag;
            this.realList = realList;
          }
          _createClass(ComponentStructure, [{
            key: "render",
            value: function render(h, attributes) {
              var tag = this.tag, children = this.children, _isRootComponent = this._isRootComponent;
              var option2 = !_isRootComponent ? children : {
                default: function _default() {
                  return children;
                }
              };
              return h(tag, attributes, option2);
            }
          }, {
            key: "updated",
            value: function updated() {
              var defaultNodes = this.defaultNodes, realList = this.realList;
              defaultNodes.forEach(function(node, index2) {
                addContext(getHtmlElementFromNode(node), {
                  element: realList[index2],
                  index: index2
                });
              });
            }
          }, {
            key: "getUnderlyingVm",
            value: function getUnderlyingVm(domElement) {
              return getContext(domElement);
            }
          }, {
            key: "getVmIndexFromDomIndex",
            value: function getVmIndexFromDomIndex(domIndex, element) {
              var defaultNodes = this.defaultNodes;
              var length = defaultNodes.length;
              var domChildren = element.children;
              var domElement = domChildren.item(domIndex);
              if (domElement === null) {
                return length;
              }
              var context = getContext(domElement);
              if (context) {
                return context.index;
              }
              if (length === 0) {
                return 0;
              }
              var firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);
              var indexFirstDomListElement = _toConsumableArray2(domChildren).findIndex(function(element2) {
                return element2 === firstDomListElement;
              });
              return domIndex < indexFirstDomListElement ? 0 : length;
            }
          }, {
            key: "_isRootComponent",
            get: function get() {
              return this.externalComponent || this.rootTransition;
            }
          }]);
          return ComponentStructure;
        }();
        var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
        function getSlot(slots, key) {
          var slotValue = slots[key];
          return slotValue ? slotValue() : [];
        }
        function computeNodes(_ref) {
          var $slots = _ref.$slots, realList = _ref.realList, getKey = _ref.getKey;
          var normalizedList = realList || [];
          var _map = ["header", "footer"].map(function(name) {
            return getSlot($slots, name);
          }), _map2 = _slicedToArray(_map, 2), header = _map2[0], footer = _map2[1];
          var item = $slots.item;
          if (!item) {
            throw new Error("draggable element must have an item slot");
          }
          var defaultNodes = normalizedList.flatMap(function(element, index2) {
            return item({
              element,
              index: index2
            }).map(function(node) {
              node.key = getKey(element);
              node.props = _objectSpread22(_objectSpread22({}, node.props || {}), {}, {
                "data-draggable": true
              });
              return node;
            });
          });
          if (defaultNodes.length !== normalizedList.length) {
            throw new Error("Item slot must have only one child");
          }
          return {
            header,
            footer,
            default: defaultNodes
          };
        }
        function getRootInformation(tag) {
          var transition = isTransition(tag);
          var externalComponent = !isHtmlTag(tag) && !transition;
          return {
            transition,
            externalComponent,
            tag: externalComponent ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])(tag) : transition ? external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"] : tag
          };
        }
        function computeComponentStructure(_ref2) {
          var $slots = _ref2.$slots, tag = _ref2.tag, realList = _ref2.realList, getKey = _ref2.getKey;
          var nodes = computeNodes({
            $slots,
            realList,
            getKey
          });
          var root = getRootInformation(tag);
          return new componentStructure_ComponentStructure({
            nodes,
            root,
            realList
          });
        }
        function _emit(evtName, evtData) {
          var _this = this;
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function() {
            return _this.$emit(evtName.toLowerCase(), evtData);
          });
        }
        function _manage(evtName) {
          var _this2 = this;
          return function(evtData, originalElement) {
            if (_this2.realList !== null) {
              return _this2["onDrag".concat(evtName)](evtData, originalElement);
            }
          };
        }
        function _manageAndEmit(evtName) {
          var _this3 = this;
          var delegateCallBack = _manage.call(this, evtName);
          return function(evtData, originalElement) {
            delegateCallBack.call(_this3, evtData, originalElement);
            _emit.call(_this3, evtName, evtData);
          };
        }
        var draggingElement = null;
        var props = {
          list: {
            type: Array,
            required: false,
            default: null
          },
          modelValue: {
            type: Array,
            required: false,
            default: null
          },
          itemKey: {
            type: [String, Function],
            required: true
          },
          clone: {
            type: Function,
            default: function _default(original) {
              return original;
            }
          },
          tag: {
            type: String,
            default: "div"
          },
          move: {
            type: Function,
            default: null
          },
          componentData: {
            type: Object,
            required: false,
            default: null
          }
        };
        var emits = ["update:modelValue", "change"].concat(_toConsumableArray2([].concat(_toConsumableArray2(events.manageAndEmit), _toConsumableArray2(events.emit)).map(function(evt) {
          return evt.toLowerCase();
        })));
        var draggableComponent = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
          name: "draggable",
          inheritAttrs: false,
          props,
          emits,
          data: function data() {
            return {
              error: false
            };
          },
          render: function render() {
            try {
              this.error = false;
              var $slots = this.$slots, $attrs = this.$attrs, tag = this.tag, componentData = this.componentData, realList = this.realList, getKey = this.getKey;
              var componentStructure = computeComponentStructure({
                $slots,
                tag,
                realList,
                getKey
              });
              this.componentStructure = componentStructure;
              var attributes = getComponentAttributes({
                $attrs,
                componentData
              });
              return componentStructure.render(external_commonjs_vue_commonjs2_vue_root_Vue_["h"], attributes);
            } catch (err) {
              this.error = true;
              return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("pre", {
                style: {
                  color: "red"
                }
              }, err.stack);
            }
          },
          created: function created() {
            if (this.list !== null && this.modelValue !== null) {
              console["a"].error("modelValue and list props are mutually exclusive! Please set one or another.");
            }
          },
          mounted: function mounted() {
            var _this4 = this;
            if (this.error) {
              return;
            }
            var $attrs = this.$attrs, $el = this.$el, componentStructure = this.componentStructure;
            componentStructure.updated();
            var sortableOptions = createSortableOption({
              $attrs,
              callBackBuilder: {
                manageAndEmit: function manageAndEmit2(event) {
                  return _manageAndEmit.call(_this4, event);
                },
                emit: function emit2(event) {
                  return _emit.bind(_this4, event);
                },
                manage: function manage2(event) {
                  return _manage.call(_this4, event);
                }
              }
            });
            var targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
            this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(targetDomElement, sortableOptions);
            this.targetDomElement = targetDomElement;
            targetDomElement.__draggable_component__ = this;
          },
          updated: function updated() {
            this.componentStructure.updated();
          },
          beforeUnmount: function beforeUnmount() {
            if (this._sortable !== void 0)
              this._sortable.destroy();
          },
          computed: {
            realList: function realList() {
              var list = this.list;
              return list ? list : this.modelValue;
            },
            getKey: function getKey() {
              var itemKey = this.itemKey;
              if (typeof itemKey === "function") {
                return itemKey;
              }
              return function(element) {
                return element[itemKey];
              };
            }
          },
          watch: {
            $attrs: {
              handler: function handler(newOptionValue) {
                var _sortable = this._sortable;
                if (!_sortable)
                  return;
                getValidSortableEntries(newOptionValue).forEach(function(_ref) {
                  var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
                  _sortable.option(key, value);
                });
              },
              deep: true
            }
          },
          methods: {
            getUnderlyingVm: function getUnderlyingVm(domElement) {
              return this.componentStructure.getUnderlyingVm(domElement) || null;
            },
            getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(htmElement) {
              return htmElement.__draggable_component__;
            },
            emitChanges: function emitChanges(evt) {
              var _this5 = this;
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function() {
                return _this5.$emit("change", evt);
              });
            },
            alterList: function alterList(onList) {
              if (this.list) {
                onList(this.list);
                return;
              }
              var newList = _toConsumableArray2(this.modelValue);
              onList(newList);
              this.$emit("update:modelValue", newList);
            },
            spliceList: function spliceList() {
              var _arguments = arguments;
              var spliceList2 = function spliceList3(list) {
                return list.splice.apply(list, _toConsumableArray2(_arguments));
              };
              this.alterList(spliceList2);
            },
            updatePosition: function updatePosition(oldIndex2, newIndex2) {
              var updatePosition2 = function updatePosition3(list) {
                return list.splice(newIndex2, 0, list.splice(oldIndex2, 1)[0]);
              };
              this.alterList(updatePosition2);
            },
            getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref3) {
              var to = _ref3.to, related = _ref3.related;
              var component = this.getUnderlyingPotencialDraggableComponent(to);
              if (!component) {
                return {
                  component
                };
              }
              var list = component.realList;
              var context = {
                list,
                component
              };
              if (to !== related && list) {
                var destination = component.getUnderlyingVm(related) || {};
                return _objectSpread22(_objectSpread22({}, destination), context);
              }
              return context;
            },
            getVmIndexFromDomIndex: function getVmIndexFromDomIndex(domIndex) {
              return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
            },
            onDragStart: function onDragStart(evt) {
              this.context = this.getUnderlyingVm(evt.item);
              evt.item._underlying_vm_ = this.clone(this.context.element);
              draggingElement = evt.item;
            },
            onDragAdd: function onDragAdd(evt) {
              var element = evt.item._underlying_vm_;
              if (element === void 0) {
                return;
              }
              removeNode(evt.item);
              var newIndex2 = this.getVmIndexFromDomIndex(evt.newIndex);
              this.spliceList(newIndex2, 0, element);
              var added = {
                element,
                newIndex: newIndex2
              };
              this.emitChanges({
                added
              });
            },
            onDragRemove: function onDragRemove(evt) {
              insertNodeAt(this.$el, evt.item, evt.oldIndex);
              if (evt.pullMode === "clone") {
                removeNode(evt.clone);
                return;
              }
              var _this$context = this.context, oldIndex2 = _this$context.index, element = _this$context.element;
              this.spliceList(oldIndex2, 1);
              var removed = {
                element,
                oldIndex: oldIndex2
              };
              this.emitChanges({
                removed
              });
            },
            onDragUpdate: function onDragUpdate(evt) {
              removeNode(evt.item);
              insertNodeAt(evt.from, evt.item, evt.oldIndex);
              var oldIndex2 = this.context.index;
              var newIndex2 = this.getVmIndexFromDomIndex(evt.newIndex);
              this.updatePosition(oldIndex2, newIndex2);
              var moved2 = {
                element: this.context.element,
                oldIndex: oldIndex2,
                newIndex: newIndex2
              };
              this.emitChanges({
                moved: moved2
              });
            },
            computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
              if (!relatedContext.element) {
                return 0;
              }
              var domChildren = _toConsumableArray2(evt.to.children).filter(function(el) {
                return el.style["display"] !== "none";
              });
              var currentDomIndex = domChildren.indexOf(evt.related);
              var currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
              var draggedInList = domChildren.indexOf(draggingElement) !== -1;
              return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
            },
            onDragMove: function onDragMove(evt, originalEvent) {
              var move = this.move, realList = this.realList;
              if (!move || !realList) {
                return true;
              }
              var relatedContext = this.getRelatedContextFromMoveEvent(evt);
              var futureIndex = this.computeFutureIndex(relatedContext, evt);
              var draggedContext = _objectSpread22(_objectSpread22({}, this.context), {}, {
                futureIndex
              });
              var sendEvent = _objectSpread22(_objectSpread22({}, evt), {}, {
                relatedContext,
                draggedContext
              });
              return move(sendEvent, originalEvent);
            },
            onDragEnd: function onDragEnd() {
              draggingElement = null;
            }
          }
        });
        var vuedraggable = draggableComponent;
        __webpack_exports__["default"] = vuedraggable;
      },
      "fb6a": function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__("23e7");
        var isObject = __webpack_require__("861d");
        var isArray = __webpack_require__("e8b5");
        var toAbsoluteIndex = __webpack_require__("23cb");
        var toLength = __webpack_require__("50c4");
        var toIndexedObject = __webpack_require__("fc6a");
        var createProperty = __webpack_require__("8418");
        var wellKnownSymbol = __webpack_require__("b622");
        var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
        var arrayMethodUsesToLength = __webpack_require__("ae40");
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("slice", { ACCESSORS: true, 0: 0, 1: 2 });
        var SPECIES = wellKnownSymbol("species");
        var nativeSlice = [].slice;
        var max = Math.max;
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var k = toAbsoluteIndex(start, length);
            var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
            var Constructor, result, n;
            if (isArray(O)) {
              Constructor = O.constructor;
              if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
                Constructor = void 0;
              } else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null)
                  Constructor = void 0;
              }
              if (Constructor === Array || Constructor === void 0) {
                return nativeSlice.call(O, k, fin);
              }
            }
            result = new (Constructor === void 0 ? Array : Constructor)(max(fin - k, 0));
            for (n = 0; k < fin; k++, n++)
              if (k in O)
                createProperty(result, n, O[k]);
            result.length = n;
            return result;
          }
        });
      },
      "fc6a": function(module2, exports2, __webpack_require__) {
        var IndexedObject = __webpack_require__("44ad");
        var requireObjectCoercible = __webpack_require__("1d80");
        module2.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      },
      "fdbc": function(module2, exports2) {
        module2.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      },
      "fdbf": function(module2, exports2, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__("4930");
        module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    })["default"];
  });
})(vuedraggable_umd);
var draggable = /* @__PURE__ */ getDefaultExportFromCjs(vuedraggable_umd.exports);
var MultipleSelectCheckBox_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId$5 = (n) => (pushScopeId("data-v-d2dabfba"), n = n(), popScopeId(), n);
const _hoisted_1$7 = ["onClick"];
const _hoisted_2$6 = ["checked"];
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createElementVNode("label", { for: "checbox" }, null, -1));
const _sfc_main$7 = defineComponent({
  __name: "MultipleSelectCheckBox",
  props: {
    status: { type: String, required: true }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "3130275e": unref(themeColor)
    }));
    const isChecked = computed(() => props.status === "allSelected");
    const toggleChecked = () => {
      emits("change", !isChecked.value);
    };
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "easy-checkbox",
        onClick: withModifiers(toggleChecked, ["stop", "prevent"])
      }, [
        createElementVNode("input", {
          type: "checkbox",
          checked: isChecked.value,
          class: normalizeClass(__props.status)
        }, null, 10, _hoisted_2$6),
        _hoisted_3$4
      ], 8, _hoisted_1$7);
    };
  }
});
var MultipleSelectCheckBox = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d2dabfba"]]);
var SingleSelectCheckBox_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$4 = (n) => (pushScopeId("data-v-2ead2f52"), n = n(), popScopeId(), n);
const _hoisted_1$6 = ["checked"];
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createElementVNode("label", { for: "checbox" }, null, -1));
const _sfc_main$6 = defineComponent({
  __name: "SingleSelectCheckBox",
  props: {
    checked: { type: Boolean, required: true }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    useCssVars((_ctx) => ({
      "3d992bb7": unref(themeColor)
    }));
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "easy-checkbox",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emits("change"), ["stop", "prevent"]))
      }, [
        createElementVNode("input", {
          type: "checkbox",
          checked: __props.checked
        }, null, 8, _hoisted_1$6),
        _hoisted_2$5
      ]);
    };
  }
});
var SingleSelectCheckBox = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2ead2f52"]]);
var RowsSelector_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-ad570e66"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "easy-data-table__rows-selector" };
const _hoisted_2$4 = { class: "rows-input" };
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("div", { class: "triangle" }, null, -1));
const _hoisted_4$3 = ["onClick"];
const _sfc_main$5 = defineComponent({
  __name: "RowsSelector",
  props: {
    modelValue: { type: Number, required: true },
    rowsItems: { type: Array, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "1c19d84a": unref(themeColor)
    }));
    const showList = ref(false);
    const showInsideOfTable = ref(false);
    const dataTable = inject("dataTable");
    watch(showList, (val) => {
      if (val && dataTable) {
        const windowHeight = window.innerHeight;
        const dataTableHeight = dataTable.value.getBoundingClientRect().height;
        const dataTableTop = dataTable.value.getBoundingClientRect().top;
        if (windowHeight - (dataTableHeight + dataTableTop) <= 100) {
          showInsideOfTable.value = true;
        } else {
          showInsideOfTable.value = false;
        }
      }
    });
    const rowsComputed = computed({
      get: () => props.modelValue,
      set: (value) => {
        emits("update:modelValue", value);
      }
    });
    const changeSelectedRows = (value) => {
      rowsComputed.value = value;
      showList.value = false;
    };
    const isDescendant = (child, className) => {
      let node = child.parentNode;
      while (node != null) {
        if (node.classList && node.classList.contains(className)) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };
    const closeRowsSelector = (e) => {
      if (!isDescendant(e.target, "easy-data-table__rows-selector"))
        showList.value = false;
    };
    onMounted(() => {
      document.addEventListener("click", closeRowsSelector);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", closeRowsSelector);
    });
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("div", {
          class: "rows-input__wrapper",
          onClick: _cache[0] || (_cache[0] = ($event) => showList.value = !showList.value)
        }, [
          createElementVNode("div", _hoisted_2$4, toDisplayString(rowsComputed.value), 1),
          _hoisted_3$3
        ]),
        createElementVNode("ul", {
          class: normalizeClass(["select-items", { show: showList.value, inside: showInsideOfTable.value }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rowsItems, (item) => {
            return openBlock(), createElementBlock("li", {
              key: item,
              class: normalizeClass({ selected: item === rowsComputed.value }),
              onClick: ($event) => changeSelectedRows(item)
            }, toDisplayString(item), 11, _hoisted_4$3);
          }), 128))
        ], 2)
      ]);
    };
  }
});
var RowsSelector = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ad570e66"]]);
var Loading_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-5c7f0e2c"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "lds-ring" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("div", null, null, -1));
const _hoisted_6$1 = [
  _hoisted_2$3,
  _hoisted_3$2,
  _hoisted_4$2,
  _hoisted_5$1
];
const _sfc_main$4 = defineComponent({
  __name: "Loading",
  setup(__props) {
    useCssVars((_ctx) => ({
      "52363113": unref(themeColor)
    }));
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, _hoisted_6$1);
    };
  }
});
var Loading = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5c7f0e2c"]]);
var LoadingLine_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = { class: "loader-line" };
const _sfc_main$3 = defineComponent({
  __name: "LoadingLine",
  setup(__props) {
    useCssVars((_ctx) => ({
      "958a6284": unref(themeColor)
    }));
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3);
    };
  }
});
var LoadingLine = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3b55e6f4"]]);
var ButtonsPagination_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "buttons-pagination" };
const _hoisted_2$2 = ["onClick"];
const totalVisible = 7;
const _sfc_main$2 = defineComponent({
  __name: "ButtonsPagination",
  props: {
    maxPaginationNumber: { type: Number, required: true },
    currentPaginationNumber: { type: Number, required: true }
  },
  emits: ["updatePage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "0ff2ee61": unref(themeColor)
    }));
    const changePage = (item) => {
      if (item.type === "button" && !item.active)
        emits("updatePage", item.page);
    };
    const paginationItemsForRender = computed(() => {
      const paginationItems = [];
      if (props.maxPaginationNumber <= totalVisible) {
        for (let i = 1; i <= props.maxPaginationNumber; i += 1) {
          paginationItems.push({
            type: "button",
            page: i,
            active: i === props.currentPaginationNumber,
            activePrev: i + 1 === props.currentPaginationNumber
          });
        }
      } else if ([1, 2, props.maxPaginationNumber, props.maxPaginationNumber - 1].includes(props.currentPaginationNumber)) {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i <= 3) {
            paginationItems.push({
              type: "button",
              page: i,
              active: i === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 4) {
            paginationItems.push({
              type: "omission"
            });
          } else {
            const page = props.maxPaginationNumber - (totalVisible - i);
            paginationItems.push({
              type: "button",
              page,
              active: page === props.currentPaginationNumber,
              activePrev: page + 1 === props.currentPaginationNumber
            });
          }
        }
      } else if ([3, 4].includes(props.currentPaginationNumber)) {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i <= 5) {
            paginationItems.push({
              type: "button",
              page: i,
              active: i === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 6) {
            paginationItems.push({
              type: "omission"
            });
          } else {
            paginationItems.push({
              type: "button",
              page: props.maxPaginationNumber,
              active: props.maxPaginationNumber === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          }
        }
      } else if ([props.maxPaginationNumber - 2, props.maxPaginationNumber - 3].includes(props.currentPaginationNumber)) {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i === 1) {
            paginationItems.push({
              type: "button",
              page: 1,
              active: props.currentPaginationNumber === 1,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 2) {
            paginationItems.push({
              type: "omission"
            });
          } else {
            const page = props.maxPaginationNumber - (totalVisible - i);
            paginationItems.push({
              type: "button",
              page,
              active: page === props.currentPaginationNumber,
              activePrev: page + 1 === props.currentPaginationNumber
            });
          }
        }
      } else {
        for (let i = 1; i <= totalVisible; i += 1) {
          if (i === 1) {
            paginationItems.push({
              type: "button",
              page: 1,
              active: props.currentPaginationNumber === 1,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else if (i === 2 || i === 6) {
            paginationItems.push({
              type: "omission"
            });
          } else if (i === 7) {
            paginationItems.push({
              type: "button",
              page: props.maxPaginationNumber,
              active: props.maxPaginationNumber === props.currentPaginationNumber,
              activePrev: i + 1 === props.currentPaginationNumber
            });
          } else {
            const diff = 4 - i;
            const page = props.currentPaginationNumber - diff;
            paginationItems.push({
              type: "button",
              page,
              active: page === props.currentPaginationNumber,
              activePrev: page + 1 === props.currentPaginationNumber
            });
          }
        }
      }
      return paginationItems;
    });
    const themeColor = inject("themeColor");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(paginationItemsForRender.value, (item, i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: normalizeClass(["item", {
              button: item.type === "button",
              active: item.type === "button" && item.active,
              "active-prev": item.type === "button" && item.activePrev,
              omission: item.type === "omission"
            }]),
            onClick: ($event) => changePage(item)
          }, toDisplayString(item.type === "button" ? item.page : "..."), 11, _hoisted_2$2);
        }), 128))
      ]);
    };
  }
});
var ButtonsPagination = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9256cb80"]]);
var PaginationArrows_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-ef6a54e2"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "arrow arrow-right" }, null, -1));
const _hoisted_2$1 = [
  _hoisted_1$1
];
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "arrow arrow-left" }, null, -1));
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _sfc_main$1 = defineComponent({
  __name: "PaginationArrows",
  props: {
    isFirstPage: { type: Boolean, required: false },
    isLastPage: { type: Boolean, required: false }
  },
  emits: ["clickPrevPage", "clickNextPage"],
  setup(__props, { emit: emits }) {
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass(["previous-page__click-button", { "first-page": __props.isFirstPage }]),
          onClick: _cache[0] || (_cache[0] = ($event) => emits("clickPrevPage"))
        }, _hoisted_2$1, 2),
        unref(slots).buttonsPagination ? renderSlot(_ctx.$slots, "buttonsPagination", { key: 0 }, void 0, true) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(["next-page__click-button", { "last-page": __props.isLastPage }]),
          onClick: _cache[1] || (_cache[1] = ($event) => emits("clickNextPage"))
        }, _hoisted_4$1, 2)
      ], 64);
    };
  }
});
var PaginationArrows = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ef6a54e2"]]);
function useClickRow(clickEventType, isMultipleSelectable, showIndex, emits) {
  const clickRow = (item, clickType, $event) => {
    if (clickEventType.value !== clickType)
      return;
    const clickRowArgument = { ...item };
    if (isMultipleSelectable.value) {
      const { checkbox } = item;
      delete clickRowArgument.checkbox;
      clickRowArgument.isSelected = checkbox;
    }
    if (showIndex.value) {
      const { index: index2 } = item;
      delete clickRowArgument.index;
      clickRowArgument.indexInCurrentPage = index2;
    }
    emits("clickRow", clickRowArgument, $event);
  };
  return {
    clickRow
  };
}
function useExpandableRow(items, prevPageEndIndex, emits) {
  const expandingItemIndexList = ref([]);
  const updateExpandingItemIndexList = (expandingItemIndex, expandingItem, event) => {
    event.stopPropagation();
    const index2 = expandingItemIndexList.value.indexOf(expandingItemIndex);
    if (index2 !== -1) {
      expandingItemIndexList.value.splice(index2, 1);
    } else {
      const currentPageExpandIndex = items.value.findIndex((item) => JSON.stringify(item) === JSON.stringify(expandingItem));
      emits("expandRow", prevPageEndIndex.value + currentPageExpandIndex, expandingItem);
      expandingItemIndexList.value.push(prevPageEndIndex.value + currentPageExpandIndex);
    }
  };
  const clearExpandingItemIndexList = () => {
    expandingItemIndexList.value = [];
  };
  return {
    expandingItemIndexList,
    updateExpandingItemIndexList,
    clearExpandingItemIndexList
  };
}
function useFixedColumn(headersForRender) {
  const fixedHeaders = computed(() => headersForRender.value.filter((header) => header.fixed));
  const lastFixedColumn = computed(() => {
    if (!fixedHeaders.value.length)
      return "";
    return fixedHeaders.value[fixedHeaders.value.length - 1].value;
  });
  const fixedColumnsInfos = computed(() => {
    if (!fixedHeaders.value.length)
      return [];
    const fixedHeadersWidthArr = fixedHeaders.value.map((header) => {
      var _a;
      return (_a = header.width) != null ? _a : 100;
    });
    return fixedHeaders.value.map((header, index2) => {
      var _a, _b;
      return {
        value: header.value,
        fixed: (_a = header.fixed) != null ? _a : true,
        width: (_b = header.width) != null ? _b : 100,
        distance: index2 === 0 ? 0 : fixedHeadersWidthArr.reduce((previous, current, i) => {
          let distance = previous;
          if (i < index2)
            distance += current;
          return distance;
        })
      };
    });
  });
  return {
    fixedHeaders,
    lastFixedColumn,
    fixedColumnsInfos
  };
}
function useHeaders(showIndexSymbol, checkboxColumnWidth, expandColumnWidth, fixedCheckbox, fixedExpand, fixedIndex, headers, ifHasExpandSlot, indexColumnWidth, isMultipleSelectable, isServerSideMode, mustSort, serverOptionsComputed, showIndex, sortBy, sortType, multiSort, updateServerOptionsSort, emits) {
  const hasFixedColumnsFromUser = computed(
    () => headers.value.findIndex((header) => header.fixed) !== -1
  );
  const fixedHeadersFromUser = computed(() => {
    if (hasFixedColumnsFromUser.value)
      return headers.value.filter((header) => header.fixed);
    return [];
  });
  const unFixedHeaders = computed(() => headers.value.filter((header) => !header.fixed));
  const generateClientSortOptions = (sortByValue, sortTypeValue) => {
    if (Array.isArray(sortByValue) && Array.isArray(sortTypeValue)) {
      return {
        sortBy: sortByValue,
        sortDesc: sortTypeValue.map((val) => val === "desc")
      };
    }
    if (sortByValue !== "") {
      return {
        sortBy: sortBy.value,
        sortDesc: sortType.value === "desc"
      };
    }
    return null;
  };
  const clientSortOptions = ref(
    generateClientSortOptions(sortBy.value, sortType.value)
  );
  const headersForRender = ref([]);
  watchEffect(() => {
    var _a;
    const fixedHeaders = [
      ...fixedHeadersFromUser.value,
      ...unFixedHeaders.value
    ];
    const headersSorting = fixedHeaders.map((header) => {
      const headerSorting = Object.assign(header);
      if (headerSorting.sortable)
        headerSorting.sortType = "none";
      if (serverOptionsComputed.value) {
        if (Array.isArray(serverOptionsComputed.value.sortBy) && Array.isArray(serverOptionsComputed.value.sortType) && serverOptionsComputed.value.sortBy.includes(headerSorting.value)) {
          const index2 = serverOptionsComputed.value.sortBy.indexOf(headerSorting.value);
          headerSorting.sortType = serverOptionsComputed.value.sortType[index2];
        } else if (headerSorting.value === serverOptionsComputed.value.sortBy && serverOptionsComputed.value.sortType) {
          headerSorting.sortType = serverOptionsComputed.value.sortType;
        }
      }
      if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy) && Array.isArray(clientSortOptions.value.sortDesc) && clientSortOptions.value.sortBy.includes(headerSorting.value)) {
        const index2 = clientSortOptions.value.sortBy.indexOf(headerSorting.value);
        headerSorting.sortType = clientSortOptions.value.sortDesc[index2] ? "desc" : "asc";
      } else if (clientSortOptions.value && headerSorting.value === clientSortOptions.value.sortBy) {
        headerSorting.sortType = clientSortOptions.value.sortDesc ? "desc" : "asc";
      }
      return headerSorting;
    });
    let headersWithExpand = [];
    if (!ifHasExpandSlot.value) {
      headersWithExpand = headersSorting;
    } else {
      const headerExpand = fixedExpand.value || hasFixedColumnsFromUser.value ? {
        text: "",
        value: "expand",
        fixed: true,
        width: expandColumnWidth.value
      } : { text: "", value: "expand" };
      headersWithExpand = [headerExpand, ...headersSorting];
    }
    let headersWithIndex = [];
    if (!showIndex.value) {
      headersWithIndex = headersWithExpand;
    } else {
      const headerIndex = fixedIndex.value || hasFixedColumnsFromUser.value ? {
        text: showIndexSymbol.value,
        value: "index",
        fixed: true,
        width: indexColumnWidth.value
      } : { text: showIndexSymbol.value, value: "index" };
      headersWithIndex = [headerIndex, ...headersWithExpand];
    }
    let headersWithCheckbox = [];
    if (!isMultipleSelectable.value) {
      headersWithCheckbox = headersWithIndex;
    } else {
      const headerCheckbox = fixedCheckbox.value || hasFixedColumnsFromUser.value ? {
        text: "checkbox",
        value: "checkbox",
        fixed: true,
        width: (_a = checkboxColumnWidth.value) != null ? _a : 36
      } : { text: "checkbox", value: "checkbox" };
      headersWithCheckbox = [headerCheckbox, ...headersWithIndex];
    }
    headersForRender.value = headersWithCheckbox;
  });
  const headerColumns = computed(
    () => headersForRender.value.map((header) => header.value)
  );
  const updateSortField = (newSortBy, oldSortType) => {
    let newSortType = null;
    if (oldSortType === "none") {
      newSortType = "asc";
    } else if (oldSortType === "asc") {
      newSortType = "desc";
    } else {
      newSortType = mustSort.value ? "asc" : null;
    }
    if (isServerSideMode.value) {
      updateServerOptionsSort(newSortBy, newSortType);
    }
    if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy) && Array.isArray(clientSortOptions.value.sortDesc)) {
      const index2 = clientSortOptions.value.sortBy.indexOf(newSortBy);
      if (index2 === -1) {
        if (newSortType !== null) {
          clientSortOptions.value.sortBy.push(newSortBy);
          clientSortOptions.value.sortDesc.push(newSortType === "desc");
        }
      } else if (newSortType === null) {
        clientSortOptions.value.sortDesc.splice(index2, 1);
        clientSortOptions.value.sortBy.splice(index2, 1);
      } else {
        clientSortOptions.value.sortDesc[index2] = newSortType === "desc";
      }
    } else if (newSortType === null) {
      clientSortOptions.value = null;
    } else {
      clientSortOptions.value = {
        sortBy: newSortBy,
        sortDesc: newSortType === "desc"
      };
    }
    emits("updateSort", {
      sortType: newSortType,
      sortBy: newSortBy
    });
  };
  const isMultiSorting = (headerText) => {
    if (serverOptionsComputed.value) {
      if (Array.isArray(serverOptionsComputed.value.sortBy))
        return serverOptionsComputed.value.sortBy.includes(headerText);
    }
    if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy)) {
      return clientSortOptions.value.sortBy.includes(headerText);
    }
    return false;
  };
  const getMultiSortNumber = (headerText) => {
    if (serverOptionsComputed.value) {
      if (Array.isArray(serverOptionsComputed.value.sortBy))
        return serverOptionsComputed.value.sortBy.indexOf(headerText) + 1;
    }
    if (clientSortOptions.value && Array.isArray(clientSortOptions.value.sortBy)) {
      return clientSortOptions.value.sortBy.indexOf(headerText) + 1;
    }
    return false;
  };
  return {
    clientSortOptions,
    headerColumns,
    headersForRender,
    updateSortField,
    isMultiSorting,
    getMultiSortNumber
  };
}
function usePageItems(currentPaginationNumber, isMultipleSelectable, isServerSideMode, items, rowsPerPageRef, selectItemsComputed, showIndex, totalItems, totalItemsLength) {
  const currentPageFirstIndex = computed(() => (currentPaginationNumber.value - 1) * rowsPerPageRef.value + 1);
  const currentPageLastIndex = computed(() => {
    if (isServerSideMode.value) {
      return Math.min(totalItemsLength.value, currentPaginationNumber.value * rowsPerPageRef.value);
    }
    return Math.min(
      totalItems.value.length,
      currentPaginationNumber.value * rowsPerPageRef.value
    );
  });
  const itemsInPage = computed(() => {
    if (isServerSideMode.value)
      return items.value;
    return totalItems.value.slice(currentPageFirstIndex.value - 1, currentPageLastIndex.value);
  });
  const itemsWithIndex = computed(() => {
    if (showIndex.value) {
      return itemsInPage.value.map((item, index2) => ({ index: currentPageFirstIndex.value + index2, ...item }));
    }
    return itemsInPage.value;
  });
  const multipleSelectStatus = computed(() => {
    if (selectItemsComputed.value.length === 0) {
      return "noneSelected";
    }
    const isNoneSelected = selectItemsComputed.value.every((itemSelected) => {
      if (totalItems.value.findIndex((item) => JSON.stringify(itemSelected) === JSON.stringify(item)) !== -1) {
        return false;
      }
      return true;
    });
    if (isNoneSelected)
      return "noneSelected";
    if (selectItemsComputed.value.length === totalItems.value.length) {
      const isAllSelected = selectItemsComputed.value.every((itemSelected) => {
        if (totalItems.value.findIndex((item) => JSON.stringify(itemSelected) === JSON.stringify(item)) === -1) {
          return false;
        }
        return true;
      });
      return isAllSelected ? "allSelected" : "partSelected";
    }
    return "partSelected";
  });
  const pageItems = computed(() => {
    if (!isMultipleSelectable.value)
      return itemsWithIndex.value;
    if (multipleSelectStatus.value === "allSelected") {
      return itemsWithIndex.value.map((item) => ({ checkbox: true, ...item }));
    }
    if (multipleSelectStatus.value === "noneSelected") {
      return itemsWithIndex.value.map((item) => ({ checkbox: false, ...item }));
    }
    return itemsWithIndex.value.map((item) => {
      const isSelected = selectItemsComputed.value.findIndex((selectItem) => {
        const itemDeepCloned = { ...item };
        delete itemDeepCloned.index;
        return JSON.stringify(selectItem) === JSON.stringify(itemDeepCloned);
      }) !== -1;
      return { checkbox: isSelected, ...item };
    });
  });
  return {
    currentPageFirstIndex,
    currentPageLastIndex,
    multipleSelectStatus,
    pageItems
  };
}
function usePagination(currentPage, isServerSideMode, loading, totalItemsLength, rowsPerPage, serverOptions, updateServerOptionsPage) {
  const currentPaginationNumber = ref(serverOptions.value ? serverOptions.value.page : currentPage.value);
  const maxPaginationNumber = computed(() => Math.ceil(totalItemsLength.value / rowsPerPage.value));
  const isLastPage = computed(() => maxPaginationNumber.value === 0 || currentPaginationNumber.value === maxPaginationNumber.value);
  const isFirstPage = computed(() => currentPaginationNumber.value === 1);
  const nextPage = () => {
    if (totalItemsLength.value === 0)
      return;
    if (isLastPage.value)
      return;
    if (loading.value)
      return;
    if (isServerSideMode.value) {
      const nextPaginationNumber = currentPaginationNumber.value + 1;
      updateServerOptionsPage(nextPaginationNumber);
    } else {
      currentPaginationNumber.value += 1;
    }
  };
  const prevPage = () => {
    if (totalItemsLength.value === 0)
      return;
    if (isFirstPage.value)
      return;
    if (loading.value)
      return;
    if (isServerSideMode.value) {
      const prevPaginationNumber = currentPaginationNumber.value - 1;
      updateServerOptionsPage(prevPaginationNumber);
    } else {
      currentPaginationNumber.value -= 1;
    }
  };
  const updatePage = (page) => {
    if (loading.value)
      return;
    if (isServerSideMode.value) {
      updateServerOptionsPage(page);
    } else {
      currentPaginationNumber.value = page;
    }
  };
  const updateCurrentPaginationNumber = (page) => {
    currentPaginationNumber.value = page;
  };
  return {
    currentPaginationNumber,
    maxPaginationNumber,
    isLastPage,
    isFirstPage,
    nextPage,
    prevPage,
    updatePage,
    updateCurrentPaginationNumber
  };
}
function useRows(isServerSideMode, rowsItems, serverOptions, rowsPerPage) {
  const rowsItemsComputed = computed(() => {
    if (!isServerSideMode.value && rowsItems.value.findIndex((item) => item === rowsPerPage.value) === -1) {
      return [rowsPerPage.value, ...rowsItems.value];
    }
    return rowsItems.value;
  });
  const rowsPerPageRef = ref(serverOptions.value ? serverOptions.value.rowsPerPage : rowsPerPage.value);
  const updateRowsPerPage = (option2) => {
    rowsPerPageRef.value = option2;
  };
  return {
    rowsItemsComputed,
    rowsPerPageRef,
    updateRowsPerPage
  };
}
function useServerOptions(serverOptions, multiSort, emits) {
  const serverOptionsComputed = computed({
    get: () => {
      if (serverOptions.value) {
        const {
          page,
          rowsPerPage,
          sortBy,
          sortType
        } = serverOptions.value;
        return {
          page,
          rowsPerPage,
          sortBy: sortBy != null ? sortBy : null,
          sortType: sortType != null ? sortType : null
        };
      }
      return null;
    },
    set: (value) => {
      emits("update:serverOptions", value);
    }
  });
  const updateServerOptionsPage = (page) => {
    if (serverOptionsComputed.value) {
      serverOptionsComputed.value = {
        ...serverOptionsComputed.value,
        page
      };
    }
  };
  const updateServerOptionsRowsPerPage = (rowsPerPage) => {
    if (serverOptionsComputed.value) {
      serverOptionsComputed.value = {
        ...serverOptionsComputed.value,
        page: 1,
        rowsPerPage
      };
    }
  };
  const updateServerOptionsSort = (newSortBy, newSortType) => {
    if (serverOptionsComputed.value) {
      if (multiSort.value && Array.isArray(serverOptionsComputed.value.sortBy) && Array.isArray(serverOptionsComputed.value.sortType)) {
        const index2 = serverOptionsComputed.value.sortBy.findIndex((val) => val === newSortBy);
        if (index2 === -1 && newSortType !== null) {
          serverOptionsComputed.value.sortBy.push(newSortBy);
          serverOptionsComputed.value.sortType.push(newSortType);
        }
        if (newSortType === null) {
          serverOptionsComputed.value.sortBy.splice(index2, 1);
          serverOptionsComputed.value.sortType.splice(index2, 1);
        } else {
          serverOptionsComputed.value.sortType[index2] = newSortType;
        }
      } else {
        serverOptionsComputed.value = {
          ...serverOptionsComputed.value,
          sortBy: newSortType !== null ? newSortBy : null,
          sortType: newSortType
        };
      }
    }
  };
  return {
    serverOptionsComputed,
    updateServerOptionsPage,
    updateServerOptionsSort,
    updateServerOptionsRowsPerPage
  };
}
function getItemValue(column, item) {
  var _a;
  if (column.includes(".")) {
    const keys = column.split(".");
    const { length } = keys;
    let content;
    let i = 0;
    while (i < length) {
      if (i === 0) {
        content = item[keys[0]];
      } else if (content && typeof content === "object") {
        content = content[keys[i]];
      } else {
        content = "";
        break;
      }
      i += 1;
    }
    return content != null ? content : "";
  }
  return (_a = item[column]) != null ? _a : "";
}
function generateColumnContent(column, item) {
  const content = getItemValue(column, item);
  return Array.isArray(content) ? content.join(",") : content;
}
function useTotalItems(clientSortOptions, filterOptions, isServerSideMode, items, itemsSelected, searchField, searchValue, serverItemsLength, multiSort, emits) {
  const generateSearchingTarget = (item) => {
    if (typeof searchField.value === "string" && searchField.value !== "")
      return getItemValue(searchField.value, item);
    if (Array.isArray(searchField.value)) {
      let searchString = "";
      searchField.value.forEach((field) => {
        searchString += getItemValue(field, item);
      });
      return searchString;
    }
    return Object.values(item).join(" ");
  };
  const itemsSearching = computed(() => {
    if (!isServerSideMode.value && searchValue.value !== "") {
      const regex = new RegExp(searchValue.value, "i");
      return items.value.filter((item) => regex.test(generateSearchingTarget(item)));
    }
    return items.value;
  });
  const itemsFiltering = computed(() => {
    let itemsFiltered = [...itemsSearching.value];
    if (filterOptions.value) {
      filterOptions.value.forEach((option2) => {
        itemsFiltered = itemsFiltered.filter((item) => {
          const { field, comparison, criteria } = option2;
          if (typeof comparison === "function") {
            return comparison(getItemValue(field, item), criteria);
          }
          const itemValue = getItemValue(field, item);
          switch (comparison) {
            case "=":
              return itemValue === criteria;
            case "!=":
              return itemValue !== criteria;
            case ">":
              return itemValue > criteria;
            case "<":
              return itemValue < criteria;
            case "<=":
              return itemValue <= criteria;
            case ">=":
              return itemValue >= criteria;
            case "between":
              return itemValue >= Math.min(...criteria) && itemValue <= Math.max(...criteria);
            case "in":
              return criteria.includes(itemValue);
            default:
              return itemValue === criteria;
          }
        });
      });
      return itemsFiltered;
    }
    return itemsSearching.value;
  });
  watch(itemsFiltering, (newVal) => {
    if (filterOptions.value) {
      emits("updateFilter", newVal);
    }
  }, { immediate: true, deep: true });
  function recursionMuiltSort(sortByArr, sortDescArr, itemsToSort, index2) {
    const sortBy = sortByArr[index2];
    const sortDesc = sortDescArr[index2];
    const sorted = (index2 === 0 ? itemsToSort : recursionMuiltSort(sortByArr, sortDescArr, itemsToSort, index2 - 1)).sort((a, b) => {
      let isAllSame = true;
      for (let i = 0; i < index2; i += 1) {
        if (getItemValue(sortByArr[i], a) !== getItemValue(sortByArr[i], b)) {
          isAllSame = false;
          break;
        }
      }
      if (isAllSame) {
        if (getItemValue(sortBy, a) < getItemValue(sortBy, b))
          return sortDesc ? 1 : -1;
        if (getItemValue(sortBy, a) > getItemValue(sortBy, b))
          return sortDesc ? -1 : 1;
        return 0;
      }
      return 0;
    });
    return sorted;
  }
  const totalItems = computed(() => {
    if (isServerSideMode.value)
      return items.value;
    if (clientSortOptions.value === null)
      return itemsFiltering.value;
    const { sortBy, sortDesc } = clientSortOptions.value;
    const itemsFilteringSorted = [...itemsFiltering.value];
    if (multiSort && Array.isArray(sortBy) && Array.isArray(sortDesc)) {
      if (sortBy.length === 0)
        return itemsFilteringSorted;
      return recursionMuiltSort(sortBy, sortDesc, itemsFilteringSorted, sortBy.length - 1);
    }
    return itemsFilteringSorted.sort((a, b) => {
      if (getItemValue(sortBy, a) < getItemValue(sortBy, b))
        return sortDesc ? 1 : -1;
      if (getItemValue(sortBy, a) > getItemValue(sortBy, b))
        return sortDesc ? -1 : 1;
      return 0;
    });
  });
  const totalItemsLength = computed(() => isServerSideMode.value ? serverItemsLength.value : totalItems.value.length);
  const selectItemsComputed = computed({
    get: () => {
      var _a;
      return (_a = itemsSelected.value) != null ? _a : [];
    },
    set: (value) => {
      emits("update:itemsSelected", value);
    }
  });
  const toggleSelectAll = (isChecked) => {
    selectItemsComputed.value = isChecked ? totalItems.value : [];
    if (isChecked)
      emits("selectAll");
  };
  const toggleSelectItem = (item) => {
    const isAlreadyChecked = item.checkbox;
    delete item.checkbox;
    delete item.index;
    if (!isAlreadyChecked) {
      const selectItemsArr = selectItemsComputed.value;
      selectItemsArr.unshift(item);
      selectItemsComputed.value = selectItemsArr;
      emits("selectRow", item);
    } else {
      selectItemsComputed.value = selectItemsComputed.value.filter((selectedItem) => JSON.stringify(selectedItem) !== JSON.stringify(item));
      emits("deselectRow", item);
    }
  };
  return {
    totalItems,
    selectItemsComputed,
    totalItemsLength,
    toggleSelectAll,
    toggleSelectItem
  };
}
var propsWithDefault = {
  alternating: {
    type: Boolean,
    default: false
  },
  buttonsPagination: {
    type: Boolean,
    default: false
  },
  checkboxColumnWidth: {
    type: Number,
    default: null
  },
  currentPage: {
    type: Number,
    default: 1
  },
  emptyMessage: {
    type: String,
    default: "No Available Data"
  },
  expandColumnWidth: {
    type: Number,
    default: 36
  },
  filterOptions: {
    type: Array,
    default: null
  },
  fixedExpand: {
    type: Boolean,
    default: false
  },
  fixedHeader: {
    type: Boolean,
    default: true
  },
  fixedCheckbox: {
    type: Boolean,
    default: false
  },
  fixedIndex: {
    type: Boolean,
    default: false
  },
  headerTextDirection: {
    type: String,
    default: "left"
  },
  bodyTextDirection: {
    type: String,
    default: "left"
  },
  hideFooter: {
    type: Boolean,
    default: false
  },
  hideRowsPerPage: {
    type: Boolean,
    default: false
  },
  hideHeader: {
    type: Boolean,
    default: false
  },
  indexColumnWidth: {
    type: Number,
    default: 60
  },
  itemsSelected: {
    type: Array,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  rowsPerPage: {
    type: Number,
    default: 25
  },
  rowsItems: {
    type: Array,
    default: () => [25, 50, 100]
  },
  rowsPerPageMessage: {
    type: String,
    default: "rows per page:"
  },
  searchField: {
    type: [String, Array],
    default: ""
  },
  searchValue: {
    type: String,
    default: ""
  },
  serverOptions: {
    type: Object,
    default: null
  },
  serverItemsLength: {
    type: Number,
    default: 0
  },
  showIndex: {
    type: Boolean,
    default: false
  },
  sortBy: {
    type: [String, Array],
    default: ""
  },
  sortType: {
    type: [String, Array],
    default: "asc"
  },
  multiSort: {
    type: Boolean,
    default: false
  },
  tableMinHeight: {
    type: Number,
    default: 180
  },
  tableHeight: {
    type: Number,
    default: null
  },
  themeColor: {
    type: String,
    default: "#42b883"
  },
  tableClassName: {
    type: String,
    default: ""
  },
  headerClassName: {
    type: String,
    default: ""
  },
  headerItemClassName: {
    type: [Function, String],
    default: ""
  },
  bodyRowClassName: {
    type: [Function, String],
    default: ""
  },
  bodyExpandRowClassName: {
    type: [Function, String],
    default: ""
  },
  bodyItemClassName: {
    type: [Function, String],
    default: ""
  },
  noHover: {
    type: Boolean,
    default: false
  },
  borderCell: {
    type: Boolean,
    default: false
  },
  mustSort: {
    type: Boolean,
    default: false
  },
  rowsOfPageSeparatorMessage: {
    type: String,
    default: "of"
  },
  clickEventType: {
    type: String,
    default: "single"
  },
  clickRowToExpand: {
    type: Boolean,
    default: false
  },
  tableNodeId: {
    type: String,
    default: ""
  },
  showIndexSymbol: {
    type: String,
    default: "#"
  },
  preventContextMenuRow: {
    type: Boolean,
    default: true
  }
};
var DataTable_vue_vue_type_style_index_0_lang = "";
var DataTable_vue_vue_type_style_index_1_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5f9b1ffa"), n = n(), popScopeId(), n);
const _hoisted_1 = ["id"];
const _hoisted_2 = ["onClick"];
const _hoisted_3 = {
  key: 3,
  class: "header-text"
};
const _hoisted_4 = {
  key: 5,
  class: "multi-sort__number"
};
const _hoisted_5 = ["onClick", "onDblclick", "onContextmenu"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = ["colspan"];
const _hoisted_8 = {
  key: 0,
  class: "vue3-easy-data-table__loading"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "vue3-easy-data-table__loading-mask" }, null, -1));
const _hoisted_10 = { class: "loading-entity" };
const _hoisted_11 = {
  key: 1,
  class: "vue3-easy-data-table__message"
};
const _hoisted_12 = {
  key: 0,
  class: "vue3-easy-data-table__footer"
};
const _hoisted_13 = {
  key: 0,
  class: "pagination__rows-per-page"
};
const _hoisted_14 = { class: "pagination__items-index" };
const _sfc_main = defineComponent({
  __name: "DataTable",
  props: {
    ...propsWithDefault,
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    draggableColumns: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "clickRow",
    "contextmenuRow",
    "selectRow",
    "deselectRow",
    "expandRow",
    "updateSort",
    "updateFilter",
    "update:itemsSelected",
    "update:serverOptions",
    "updatePageItems",
    "updateTotalItems",
    "selectAll"
  ],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "77a80df3": tableMinHeightPx.value,
      "075fbadd": tableHeightPx.value
    }));
    const {
      tableNodeId,
      clickEventType,
      bodyTextDirection,
      checkboxColumnWidth,
      currentPage,
      expandColumnWidth,
      filterOptions,
      fixedCheckbox,
      fixedExpand,
      fixedHeader,
      fixedIndex,
      headers,
      headerTextDirection,
      indexColumnWidth,
      items,
      itemsSelected,
      loading,
      mustSort,
      multiSort,
      rowsItems,
      rowsPerPage,
      searchField,
      searchValue,
      serverItemsLength,
      serverOptions,
      showIndex,
      sortBy,
      sortType,
      tableHeight,
      tableMinHeight,
      themeColor,
      rowsOfPageSeparatorMessage,
      showIndexSymbol,
      preventContextMenuRow
    } = toRefs(props);
    const tableHeightPx = computed(() => tableHeight.value ? `${tableHeight.value}px` : null);
    const tableMinHeightPx = computed(() => `${tableMinHeight.value}px`);
    provide("themeColor", themeColor.value);
    const slots = useSlots();
    const ifHasPaginationSlot = computed(() => !!slots.pagination);
    const ifHasLoadingSlot = computed(() => !!slots.loading);
    const ifHasExpandSlot = computed(() => !!slots.expand);
    const ifHasBodySlot = computed(() => !!slots.body);
    const dataTable = ref();
    const tableBody = ref();
    provide("dataTable", dataTable);
    const showShadow = ref(false);
    onMounted(() => {
      tableBody.value.addEventListener("scroll", () => {
        showShadow.value = tableBody.value.scrollLeft > 0;
      });
    });
    const isMultipleSelectable = computed(() => itemsSelected.value !== null);
    const isServerSideMode = computed(() => serverOptions.value !== null);
    const {
      serverOptionsComputed,
      updateServerOptionsPage,
      updateServerOptionsSort,
      updateServerOptionsRowsPerPage
    } = useServerOptions(serverOptions, multiSort, emits);
    const {
      clientSortOptions,
      headerColumns,
      headersForRender,
      updateSortField,
      isMultiSorting,
      getMultiSortNumber
    } = useHeaders(
      showIndexSymbol,
      checkboxColumnWidth,
      expandColumnWidth,
      fixedCheckbox,
      fixedExpand,
      fixedIndex,
      headers,
      ifHasExpandSlot,
      indexColumnWidth,
      isMultipleSelectable,
      isServerSideMode,
      mustSort,
      serverOptionsComputed,
      showIndex,
      sortBy,
      sortType,
      multiSort,
      updateServerOptionsSort,
      emits
    );
    const { rowsItemsComputed, rowsPerPageRef, updateRowsPerPage } = useRows(
      isServerSideMode,
      rowsItems,
      serverOptions,
      rowsPerPage
    );
    const { totalItems, selectItemsComputed, totalItemsLength, toggleSelectAll, toggleSelectItem } = useTotalItems(
      clientSortOptions,
      filterOptions,
      isServerSideMode,
      items,
      itemsSelected,
      searchField,
      searchValue,
      serverItemsLength,
      multiSort,
      emits
    );
    const {
      currentPaginationNumber,
      maxPaginationNumber,
      isLastPage,
      isFirstPage,
      nextPage,
      prevPage,
      updatePage,
      updateCurrentPaginationNumber
    } = usePagination(
      currentPage,
      isServerSideMode,
      loading,
      totalItemsLength,
      rowsPerPageRef,
      serverOptions,
      updateServerOptionsPage
    );
    const { currentPageFirstIndex, currentPageLastIndex, multipleSelectStatus, pageItems } = usePageItems(
      currentPaginationNumber,
      isMultipleSelectable,
      isServerSideMode,
      items,
      rowsPerPageRef,
      selectItemsComputed,
      showIndex,
      totalItems,
      totalItemsLength
    );
    const prevPageEndIndex = computed(() => {
      if (currentPaginationNumber.value === 0)
        return 0;
      return (currentPaginationNumber.value - 1) * rowsPerPageRef.value;
    });
    const { expandingItemIndexList, updateExpandingItemIndexList, clearExpandingItemIndexList } = useExpandableRow(pageItems, prevPageEndIndex, emits);
    const { fixedHeaders, lastFixedColumn, fixedColumnsInfos } = useFixedColumn(headersForRender);
    const { clickRow } = useClickRow(clickEventType, isMultipleSelectable, showIndex, emits);
    const contextMenuRow = (item, $event) => {
      if (preventContextMenuRow.value)
        $event.preventDefault();
      emits("contextmenuRow", item, $event);
    };
    const getColStyle = (header) => {
      var _a;
      const width = (_a = header.width) != null ? _a : fixedHeaders.value.length ? 100 : null;
      if (width)
        return `width: ${width}px; min-width: ${width}px;`;
      return void 0;
    };
    const getFixedDistance = (column, type = "th") => {
      if (!fixedHeaders.value.length)
        return void 0;
      const columInfo = fixedColumnsInfos.value.find((info) => info.value === column);
      if (columInfo) {
        return `left: ${columInfo.distance}px;z-index: ${type === "th" ? 3 : 1};position: sticky;`;
      }
      return void 0;
    };
    watch(loading, (newVal, oldVal) => {
      if (serverOptionsComputed.value) {
        if (newVal === false && oldVal === true) {
          updateCurrentPaginationNumber(serverOptionsComputed.value.page);
          clearExpandingItemIndexList();
        }
      }
    });
    watch(rowsPerPageRef, (value) => {
      if (!isServerSideMode.value) {
        updatePage(1);
      } else {
        updateServerOptionsRowsPerPage(value);
      }
    });
    watch([searchValue, filterOptions], () => {
      if (!isServerSideMode.value) {
        updatePage(1);
      }
    });
    watch(
      [currentPaginationNumber, clientSortOptions, searchField, searchValue, filterOptions],
      () => {
        clearExpandingItemIndexList();
      },
      { deep: true }
    );
    watch(
      pageItems,
      (value) => {
        emits("updatePageItems", value);
      },
      { deep: true }
    );
    watch(
      totalItems,
      (value) => {
        emits("updateTotalItems", value);
      },
      { deep: true }
    );
    __expose({
      currentPageFirstIndex,
      currentPageLastIndex,
      clientItemsLength: totalItemsLength,
      maxPaginationNumber,
      currentPaginationNumber,
      isLastPage,
      isFirstPage,
      nextPage,
      prevPage,
      updatePage,
      rowsPerPageOptions: rowsItemsComputed,
      rowsPerPageActiveOption: rowsPerPageRef,
      updateRowsPerPageActiveOption: updateRowsPerPage
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "dataTable",
        ref: dataTable,
        class: normalizeClass(["vue3-easy-data-table", [_ctx.tableClassName]])
      }, [
        createElementVNode("div", {
          ref_key: "tableBody",
          ref: tableBody,
          class: normalizeClass(["vue3-easy-data-table__main", {
            "fixed-header": unref(fixedHeader),
            "fixed-height": unref(tableHeight),
            "show-shadow": showShadow.value,
            "table-fixed": unref(fixedHeaders).length,
            hoverable: !_ctx.noHover,
            "border-cell": _ctx.borderCell
          }])
        }, [
          createElementVNode("table", { id: unref(tableNodeId) }, [
            unref(slots)["customize-headers"] ? renderSlot(_ctx.$slots, "customize-headers", {
              key: 0,
              headersForRender: unref(headersForRender)
            }, void 0, true) : unref(headersForRender).length && !_ctx.hideHeader ? (openBlock(), createElementBlock("thead", {
              key: 1,
              class: normalizeClass(["vue3-easy-data-table__header", [_ctx.headerClassName]])
            }, [
              createVNode(unref(draggable), {
                modelValue: unref(headersForRender),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(headersForRender) ? headersForRender.value = $event : null),
                "item-key": "index",
                tag: "tr",
                filter: ".ignore-drag",
                disabled: !__props.draggableColumns
              }, {
                item: withCtx(({ element, index: index2 }) => [
                  createElementVNode("th", {
                    class: normalizeClass([{
                      sortable: element.sortable,
                      "none": element.sortable && element.sortType === "none",
                      "desc": element.sortable && element.sortType === "desc",
                      "asc": element.sortable && element.sortType === "asc",
                      "shadow": element.value === unref(lastFixedColumn),
                      "ignore-drag": element.text === "checkbox"
                    }, typeof _ctx.headerItemClassName === "string" ? _ctx.headerItemClassName : _ctx.headerItemClassName(element, index2 + 1)]),
                    style: normalizeStyle([getColStyle(element), getFixedDistance(element.value)]),
                    onClick: withModifiers(($event) => element.sortable && element.sortType ? unref(updateSortField)(element.value, element.sortType) : null, ["stop"])
                  }, [
                    renderSlot(_ctx.$slots, "handle", {}, void 0, true),
                    element.text === "checkbox" ? (openBlock(), createBlock(MultipleSelectCheckBox, {
                      key: unref(multipleSelectStatus),
                      status: unref(multipleSelectStatus),
                      onChange: unref(toggleSelectAll)
                    }, null, 8, ["status", "onChange"])) : (openBlock(), createElementBlock("span", {
                      key: 1,
                      class: normalizeClass(["header", `direction-${unref(headerTextDirection)}`])
                    }, [
                      unref(slots)[`header-${element.value}`] ? renderSlot(_ctx.$slots, `header-${element.value}`, normalizeProps(mergeProps({ key: 0 }, element)), void 0, true) : unref(slots)[`header-${element.value.toLowerCase()}`] ? renderSlot(_ctx.$slots, `header-${element.value.toLowerCase()}`, normalizeProps(mergeProps({ key: 1 }, element)), void 0, true) : unref(slots)["header"] ? renderSlot(_ctx.$slots, "header", normalizeProps(mergeProps({ key: 2 }, element)), void 0, true) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(element.text), 1)),
                      element.sortable ? (openBlock(), createElementBlock("i", {
                        key: element.sortType ? element.sortType : "none",
                        class: normalizeClass(["sortType-icon", { desc: element.sortType === "desc" }])
                      }, null, 2)) : createCommentVNode("", true),
                      unref(multiSort) && unref(isMultiSorting)(element.value) ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(getMultiSortNumber)(element.value)), 1)) : createCommentVNode("", true)
                    ], 2))
                  ], 14, _hoisted_2)
                ]),
                _: 3
              }, 8, ["modelValue", "disabled"])
            ], 2)) : createCommentVNode("", true),
            ifHasBodySlot.value ? renderSlot(_ctx.$slots, "body", normalizeProps(mergeProps({ key: 2 }, unref(pageItems))), void 0, true) : unref(headerColumns).length ? (openBlock(), createElementBlock("tbody", {
              key: 3,
              class: normalizeClass(["vue3-easy-data-table__body", { "row-alternation": _ctx.alternating }])
            }, [
              renderSlot(_ctx.$slots, "body-prepend", normalizeProps(guardReactiveProps({
                items: unref(pageItems),
                pagination: {
                  isFirstPage: unref(isFirstPage),
                  isLastPage: unref(isLastPage),
                  currentPaginationNumber: unref(currentPaginationNumber),
                  maxPaginationNumber: unref(maxPaginationNumber),
                  nextPage: unref(nextPage),
                  prevPage: unref(prevPage)
                },
                headers: unref(headersForRender)
              })), void 0, true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pageItems), (item, index2) => {
                return openBlock(), createElementBlock(Fragment, { key: index2 }, [
                  createElementVNode("tr", {
                    class: normalizeClass([
                      { "even-row": (index2 + 1) % 2 === 0 },
                      typeof _ctx.bodyRowClassName === "string" ? _ctx.bodyRowClassName : _ctx.bodyRowClassName(item, index2 + 1)
                    ]),
                    onClick: ($event) => {
                      unref(clickRow)(item, "single", $event);
                      _ctx.clickRowToExpand && unref(updateExpandingItemIndexList)(index2 + prevPageEndIndex.value, item, $event);
                    },
                    onDblclick: ($event) => {
                      unref(clickRow)(item, "double", $event);
                    },
                    onContextmenu: ($event) => {
                      contextMenuRow(item, $event);
                    }
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(headersForRender), (column, i) => {
                      return openBlock(), createElementBlock("td", {
                        key: i,
                        style: normalizeStyle([getColStyle(column), getFixedDistance(column.value, "td")]),
                        class: normalizeClass([
                          {
                            shadow: column.value === unref(lastFixedColumn),
                            "can-expand": column.value === "expand"
                          },
                          typeof _ctx.bodyItemClassName === "string" ? _ctx.bodyItemClassName : _ctx.bodyItemClassName(column.value, index2 + 1),
                          `direction-${unref(bodyTextDirection)}`
                        ]),
                        onClick: ($event) => column.value === "expand" ? unref(updateExpandingItemIndexList)(index2 + prevPageEndIndex.value, item, $event) : null
                      }, [
                        unref(slots)[`item-${column.value}`] ? renderSlot(_ctx.$slots, `item-${column.value}`, normalizeProps(mergeProps({ key: 0 }, item)), void 0, true) : unref(slots)[`item-${column.value.toLowerCase()}`] ? renderSlot(_ctx.$slots, `item-${column.value.toLowerCase()}`, normalizeProps(mergeProps({ key: 1 }, item)), void 0, true) : column.value === "expand" ? (openBlock(), createElementBlock("i", {
                          key: 2,
                          class: normalizeClass(["expand-icon", {
                            expanding: unref(expandingItemIndexList).includes(prevPageEndIndex.value + index2)
                          }])
                        }, null, 2)) : column.value === "checkbox" ? (openBlock(), createBlock(SingleSelectCheckBox, {
                          key: 3,
                          checked: item[column.value],
                          onChange: ($event) => unref(toggleSelectItem)(item)
                        }, null, 8, ["checked", "onChange"])) : unref(slots)["item"] ? renderSlot(_ctx.$slots, "item", normalizeProps(mergeProps({ key: 4 }, { column: column.value, item })), void 0, true) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [
                          createTextVNode(toDisplayString(unref(generateColumnContent)(column.value, item)), 1)
                        ], 64))
                      ], 14, _hoisted_6);
                    }), 128))
                  ], 42, _hoisted_5),
                  ifHasExpandSlot.value && unref(expandingItemIndexList).includes(index2 + prevPageEndIndex.value) ? (openBlock(), createElementBlock("tr", {
                    key: 0,
                    class: normalizeClass([
                      { "even-row": (index2 + 1) % 2 === 0 },
                      typeof _ctx.bodyExpandRowClassName === "string" ? _ctx.bodyExpandRowClassName : _ctx.bodyExpandRowClassName(item, index2 + 1)
                    ])
                  }, [
                    createElementVNode("td", {
                      colspan: unref(headersForRender).length,
                      class: "expand"
                    }, [
                      item.expandLoading ? (openBlock(), createBlock(LoadingLine, {
                        key: 0,
                        class: "expand-loading"
                      })) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "expand", normalizeProps(guardReactiveProps(item)), void 0, true)
                    ], 8, _hoisted_7)
                  ], 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              renderSlot(_ctx.$slots, "body-append", normalizeProps(guardReactiveProps({
                items: unref(pageItems),
                pagination: {
                  isFirstPage: unref(isFirstPage),
                  isLastPage: unref(isLastPage),
                  currentPaginationNumber: unref(currentPaginationNumber),
                  maxPaginationNumber: unref(maxPaginationNumber),
                  nextPage: unref(nextPage),
                  prevPage: unref(prevPage),
                  updatePage: unref(updatePage)
                },
                headers: unref(headersForRender)
              })), void 0, true)
            ], 2)) : createCommentVNode("", true)
          ], 8, _hoisted_1),
          unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_8, [
            _hoisted_9,
            createElementVNode("div", _hoisted_10, [
              ifHasLoadingSlot.value ? renderSlot(_ctx.$slots, "loading", { key: 0 }, void 0, true) : (openBlock(), createBlock(Loading, { key: 1 }))
            ])
          ])) : createCommentVNode("", true),
          !unref(pageItems).length && !unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_11, [
            renderSlot(_ctx.$slots, "empty-message", {}, () => [
              createTextVNode(toDisplayString(_ctx.emptyMessage), 1)
            ], true)
          ])) : createCommentVNode("", true)
        ], 2),
        !_ctx.hideFooter ? (openBlock(), createElementBlock("div", _hoisted_12, [
          !_ctx.hideRowsPerPage ? (openBlock(), createElementBlock("div", _hoisted_13, [
            createTextVNode(toDisplayString(_ctx.rowsPerPageMessage) + " ", 1),
            createVNode(RowsSelector, {
              modelValue: unref(rowsPerPageRef),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(rowsPerPageRef) ? rowsPerPageRef.value = $event : null),
              "rows-items": unref(rowsItemsComputed)
            }, null, 8, ["modelValue", "rows-items"])
          ])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_14, toDisplayString(`${unref(currentPageFirstIndex)}\u2013${unref(currentPageLastIndex)}`) + " " + toDisplayString(unref(rowsOfPageSeparatorMessage)) + " " + toDisplayString(unref(totalItemsLength)), 1),
          ifHasPaginationSlot.value ? renderSlot(_ctx.$slots, "pagination", normalizeProps(mergeProps({ key: 1 }, {
            isFirstPage: unref(isFirstPage),
            isLastPage: unref(isLastPage),
            currentPaginationNumber: unref(currentPaginationNumber),
            maxPaginationNumber: unref(maxPaginationNumber),
            nextPage: unref(nextPage),
            prevPage: unref(prevPage)
          })), void 0, true) : (openBlock(), createBlock(PaginationArrows, {
            key: 2,
            "is-first-page": unref(isFirstPage),
            "is-last-page": unref(isLastPage),
            onClickNextPage: unref(nextPage),
            onClickPrevPage: unref(prevPage)
          }, createSlots({ _: 2 }, [
            _ctx.buttonsPagination ? {
              name: "buttonsPagination",
              fn: withCtx(() => [
                createVNode(ButtonsPagination, {
                  "current-pagination-number": unref(currentPaginationNumber),
                  "max-pagination-number": unref(maxPaginationNumber),
                  onUpdatePage: unref(updatePage)
                }, null, 8, ["current-pagination-number", "max-pagination-number", "onUpdatePage"])
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["is-first-page", "is-last-page", "onClickNextPage", "onClickPrevPage"]))
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var DataTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f9b1ffa"]]);
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.createApp({}).component("Vue3EasyDataTable", DataTable);
}
export { DataTable as default };
