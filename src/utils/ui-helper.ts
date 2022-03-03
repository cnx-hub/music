export function scrollTo(
  element: HTMLDivElement,
  to: number,
  duration: number
) {
  if (duration <= 0) return
  let difference = to - element.scrollTop
  let perTick = (difference / duration) * 10

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}
