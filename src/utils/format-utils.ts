export function getSizeImage(imgUrl: string, size: number) {
  return `${imgUrl}?param=${size}x${size}`
}
