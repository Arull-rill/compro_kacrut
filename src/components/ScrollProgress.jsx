import { useEffect, useRef } from 'react'

/** Garis emas tipis di paling atas yang mengikuti progres scroll. */
export default function ScrollProgress() {
  const bar = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]" aria-hidden="true">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-gold" />
    </div>
  )
}
