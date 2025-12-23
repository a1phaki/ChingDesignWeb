import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useBreakpoint() {
  const width = ref(window.innerWidth)

  const onResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })

  const isXs = () => width.value < 400 // 0 ~ 374
  const isSm = () => width.value >= 375 && width.value < 768 // 375 ~ 767
  const isMd = () => width.value >= 768 && width.value < 992 // 768 ~ 991
  const isLg = () => width.value >= 992 && width.value < 1200 // 992 ~ 1199
  const isXl = () => width.value >= 1200 && width.value < 1400 //1200 ~ 1399
  const isXxl = () => width.value >= 1400

  return { width, isXs, isSm, isMd, isLg, isXl, isXxl }
}
