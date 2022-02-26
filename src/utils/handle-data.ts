// 获取歌手字母类别
export function generateSingerAlpha() {
  let alphabets = ['热门']
  let start = 'A'.charCodeAt(0)
  let last = 'Z'.charCodeAt(0)
  for (let i = start; i <= last; i++) {
    alphabets.push(String.fromCharCode(i))
  }
  alphabets.push('其他')
  return alphabets
}

export const singerAlphas = generateSingerAlpha()
