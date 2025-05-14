/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8F5F0', // 米白色
        secondary: '#2E4A3F', // 墨绿色
        accent: '#D4B886', // 淡金色
      },
      fontFamily: {
        song: [
          'FangSong', 'STFangsong', 'SimSun', 'Songti SC', 'Noto Serif SC', 'Source Han Serif SC',
          'PingFang SC', 'Microsoft YaHei', 'serif', 'Georgia', 'Times New Roman', 'Noto Serif', 'Source Han Serif',
        ], // 丰富的中文仿宋/宋体/Serif字体
        sans: [
          'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', 'Source Han Sans SC',
          'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif',
        ], // 常用无衬线字体
        serif: [
          'Georgia', 'Times New Roman', 'serif', 'Noto Serif', 'Source Han Serif',
        ], // 英文衬线字体
      },
    },
  },
  plugins: [],
}

