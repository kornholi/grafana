import { parseQuery } from './query_utils';

describe('parseQuery', () => {
  it('returns empty for empty string', () => {
    expect(parseQuery('')).toEqual({
      query: '',
      regexp: '',
    });
  });

  it('returns regexp for strings without query', () => {
    expect(parseQuery('test')).toEqual({
      query: '',
      regexp: 'test',
    });
  });

  it('returns query for strings without regexp', () => {
    expect(parseQuery('{foo="bar"}')).toEqual({
      query: '{foo="bar"}',
      regexp: '',
    });
  });

  it('returns query for strings with query and search string', () => {
    expect(parseQuery('x {foo="bar"}')).toEqual({
      query: '{foo="bar"}',
      regexp: 'x',
    });
  });

  it('returns query for strings with query and regexp', () => {
    expect(parseQuery('{foo="bar"} x|y')).toEqual({
      query: '{foo="bar"}',
      regexp: 'x|y',
    });
  });

  it('returns query for selector with two labels', () => {
    expect(parseQuery('{foo="bar", baz="42"}')).toEqual({
      query: '{foo="bar", baz="42"}',
      regexp: '',
    });
  });
});
