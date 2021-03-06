// gregorian calendar -> chinese lunar calendar

const infoMap = {
  digitCN: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
  heavenlyStems: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'],
  earthlyBranches: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
  chineseZodiac: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
  term: [
    '冬至',
    '小寒',
    '大寒',
    '立春',
    '雨水',
    '惊蛰',
    '春分',
    '清明',
    '谷雨',
    '立夏',
    '小满',
    '芒种',
    '夏至',
    '小暑',
    '大暑',
    '立秋',
    '处暑',
    '白露',
    '秋分',
    '寒露',
    '霜降',
    '立冬',
    '小雪',
    '大雪',
  ],
  monthCn: ['十一', '十二', '正', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
  dateCn: [
    '初一',
    '初二',
    '初三',
    '初四',
    '初五',
    '初六',
    '初七',
    '初八',
    '初九',
    '初十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
    '二十',
    '廿一',
    '廿二',
    '廿三',
    '廿四',
    '廿五',
    '廿六',
    '廿七',
    '廿八',
    '廿九',
    '三十',
    '卅一',
  ],
};
class LunarCalendar {
  private lunar = Array.from(new Array(201).keys(), (x) => 1900 + x);
  private solarMonth: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  private Gan: Array<string> = [
    '\u7532',
    '\u4e59',
    '\u4e19',
    '\u4e01',
    '\u620a',
    '\u5df1',
    '\u5e9a',
    '\u8f9b',
    '\u58ec',
    '\u7678',
  ];
  private Zhi: Array<string> = [
    '\u5b50',
    '\u4e11',
    '\u5bc5',
    '\u536f',
    '\u8fb0',
    '\u5df3',
    '\u5348',
    '\u672a',
    '\u7533',
    '\u9149',
    '\u620c',
    '\u4ea5',
  ];
  private Attr: Array<string> = [
    '\u9f20',
    '\u725b',
    '\u864e',
    '\u5154',
    '\u9f99',
    '\u86c7',
    '\u9a6c',
    '\u7f8a',
    '\u7334',
    '\u9e21',
    '\u72d7',
    '\u732a',
  ];

  public totalDays(y: number) {}

  public leapMonth(y: number) {}

  public leapDays(y: number) {}

  public monthDays(y, m) {}

  public gregorianDays(y, m) {}

  public getHeavenlyStem() {}
  public getEarthlyBranches() {}
  public getChineseZodiac() {}
  public getTerm() {}
}
