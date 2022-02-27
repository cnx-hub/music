export interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void
  next: () => void
  prev: () => void
  autoPlay: (palyType?: 'update' | 'leave' | 'blur') => void
  innerSlider: any
}
