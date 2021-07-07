/* eslint-disable linebreak-style */
export default class Settings {
  constructor(theme, music, difficulty) {
    const themes = ['dark', 'light', 'grey'];
    const allMusic = ['trance', 'pop', 'rock', 'chillout', 'off'];
    const difficulties = ['easy', 'normal', 'hard', 'nightmare'];

    this.settingsDefaultMap = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.settingUserMap = new Map();

    if (themes.includes(theme)) {
      this.settingUserMap.set('theme', theme);
    }
    if (allMusic.includes(music)) {
      this.settingUserMap.set('music', music);
    }
    if (difficulties.includes(difficulty)) {
      this.settingUserMap.set('difficulty', difficulty);
    }
  }

  get settings() {
    [...this.settingUserMap].forEach((el) => this.settingsDefaultMap.set(el[0], el[1]));

    return this.settingsDefaultMap;
  }
}
