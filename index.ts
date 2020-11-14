// gregorian calendar -> chinese lunar calendar
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
}
