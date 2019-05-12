import classes from '../classes';

describe('classes', () => {
  it('接受 1个 className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受 2个 className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  }); 
  it('接受2个 undefined 结果不会出现 undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受各种奇怪值', () => {
    const result = classes('a', undefined, false, null, '中文');
    expect(result).toEqual('a 中文');
  });
  it('接受 0 个 参数', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });    
});