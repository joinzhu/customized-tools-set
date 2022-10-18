const unitRulesJson = {
  // 半角数字
  EN_NUMBER: {
    reg: '\\u0030-\\u0039',
    zhkey: '数字',
    describe: '半角数字'
  },
  // 半角小写字母
  EN_LOWER_LETTER: {
    reg: '\\u0061-\\u007A',
    zhkey: '小写字母',
    describe: '半角小写字母'
  },
  // 半角大写字母
  EN_UPPER_LETTER: {
    reg: '\\u0041-\\u005A',
    zhkey: '大写字母',
    describe: '半角大写字母'
  },
  // 半角符号
  EN_MARK: {
    reg: '\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e',
    zhkey: '半角符号',
    describe: '英文半角符号'
  },
  // 符号、数字、大小写字母
  EN_MARK_NUMBER_LETTER: {
    reg: '\\u0021-\\u007E',
    zhkey: '半角符号、数字、大小写字母',
    describe: '英文半角符号、数字、大小写字母'
  },
  // 符号、数字、大小写字母、回车、空格
  EN_ALL: {
    reg: '\\u0000-\\u007E',
    zhkey: '半角符号、数字、大小写字母、回车、空格',
    describe: '英文半角符号、数字、大小写字母、回车、空格'
  },
  // 半角空格
  EN_SPACE: {
    reg: '\\u0020',
    zhkey: '空格',
    describe: '半角空格'
  },
  // 半角感叹号 !
  'EN_!': {
    reg: '\\u0021',
    zhkey: '!',
    describe: '!'
  },
  // 半角单引号 '
  "EN_'": {
    reg: '\\u0027',
    zhkey: "'",
    describe: "'"
  },
  // 半角双引号 "
  'EN_"': {
    reg: '\\u0022',
    zhkey: '"',
    describe: '"'
  },
  // 半角井号 #
  'EN_#': {
    reg: '\\u0023',
    zhkey: '#',
    describe: '#'
  },
  // 半角美元 $
  EN_$: {
    reg: '\\u0024',
    zhkey: '$',
    describe: '$'
  },
  // 半角百分符 %
  'EN_%': {
    reg: '\\u0025',
    zhkey: '%',
    describe: '%'
  },
  // 半角和符 &
  'EN_&': {
    reg: '\\u0026',
    zhkey: '&',
    describe: '&'
  },
  // 半角括号 ()
  'EN_()': {
    reg: '\\u0028-\\u0029',
    zhkey: '()',
    describe: '()'
  },
  // 半角星号 *
  'EN_*': {
    reg: '\\u002A',
    zhkey: '*',
    describe: '*'
  },
  // 半角加号 +
  'EN_+': {
    reg: '\\u002b',
    zhkey: '+',
    describe: '+'
  },
  // 半角逗号 ,
  'EN_,': {
    reg: '\\u002c',
    zhkey: ',',
    describe: ','
  },
  // 半角短横杠 -
  'EN_-': {
    reg: '\\u002d',
    zhkey: '-',
    describe: '-'
  },
  // 半角点 .
  'EN_.': {
    reg: '\\u002e',
    zhkey: '.',
    describe: '.'
  },
  // 半角斜杠 /
  'EN_/': {
    reg: '\\u002f',
    zhkey: '/',
    describe: '/'
  },
  // 半角冒号 :
  'EN_:': {
    reg: '\\u003a',
    zhkey: ':',
    describe: ':'
  },
  // 半角分号 ;
  'EN_;': {
    reg: '\\u003b',
    zhkey: ';',
    describe: ';'
  },
  // 半角左括号 <
  'EN_<': {
    reg: '\\u003c',
    zhkey: '<',
    describe: '<'
  },
  // 半角等号 =
  'EN_=': {
    reg: '\\u003d',
    zhkey: '=',
    describe: '='
  },
  // 半角右括号 >
  'EN_>': {
    reg: '\\u003e',
    zhkey: '>',
    describe: '>'
  },
  // 半角问号 ?
  'EN_?': {
    reg: '\\u003f',
    zhkey: '?',
    describe: '?'
  },
  // 半角艾特 @
  'EN_@': {
    reg: '\\u0040',
    zhkey: '@',
    describe: '@'
  },
  // 半角左中括号 [
  'EN_[': {
    reg: '\\u005b',
    zhkey: '[',
    describe: '['
  },
  // 半角右中括号 ]
  'EN_]': {
    reg: '\\u005d',
    zhkey: ']',
    describe: ']'
  },
  // 半角反斜杠 \
  'EN_\\': {
    reg: '\\u005c',
    zhkey: '\\',
    describe: '\\'
  },
  // 半角上箭头 ^
  'EN_^': {
    reg: '\\u005e',
    zhkey: '^',
    describe: '^'
  },
  // 半角下划线 _
  EN__: {
    reg: '\\u005f',
    zhkey: '_',
    describe: '_'
  },
  // 半角反引号 `
  'EN_`': {
    reg: '\\u0060',
    zhkey: '`',
    describe: '`'
  },
  // 半角左大括号 {
  'EN_{': {
    reg: '\\u007b',
    zhkey: '{',
    describe: '{'
  },
  // 半角右大括号
  'EN_}': {
    reg: '\\u007d',
    zhkey: '}',
    describe: '}'
  },
  // 半角分割 |
  'EN_|': {
    reg: '\\u007c',
    zhkey: '|',
    describe: '|'
  },
  // 半角波浪 ~
  'EN_~': {
    reg: '\\u007e',
    zhkey: '~',
    describe: '～'
  }
} as {
  [key: string]: {
    reg: string
    zhkey: string
    describe: string
  }
}

export default unitRulesJson
