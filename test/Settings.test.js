/* eslint-disable linebreak-style */
import Settings from '../src/js/Settings';

test('Passed all new settings', () => {
  expect([...new Settings('light', 'chillout', 'normal').settings]).toEqual([
    ['theme', 'light'],
    ['music', 'chillout'],
    ['difficulty', 'normal'],
  ]);
});

test('Passed two new settings', () => {
  expect([...new Settings('', 'off', 'nightmare').settings]).toEqual([
    ['theme', 'dark'],
    ['music', 'off'],
    ['difficulty', 'nightmare'],
  ]);
});

test('Nothing is passed, returns the default settings', () => {
  expect([...new Settings().settings]).toEqual([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
});

test('Passed nonexistent value', () => {
  expect([...new Settings('asd', 'chillout', '').settings]).toEqual([
    ['theme', 'dark'],
    ['music', 'chillout'],
    ['difficulty', 'easy'],
  ]);
});
