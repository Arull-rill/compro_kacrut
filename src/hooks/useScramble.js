import { useCallback, useEffect, useRef, useState } from 'react'

const GLYPHS = 'KACRUT#%&*+/<>?!01'

/**
 * Efek "kacrut": huruf awalnya acak lalu satu-satu "beres" jadi teks asli.
 * Return: [teksYangTampil, fungsiUlang]
 */
export default function useScramble(text, { duration = 1400, delay = 0, auto = true } = {}) {
  const [out, setOut] = useState(text)
  const raf = useRef(0)

  const run = useCallback(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setOut(text)
      return
    }
    cancelAnimationFrame(raf.current)
    const start = performance.now()

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const next = text
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' '
          return p >= (i + 1) / text.length ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        })
        .join('')
      setOut(next)
      if (p < 1) raf.current = requestAnimationFrame(tick)
      else setOut(text)
    }
    raf.current = requestAnimationFrame(tick)
  }, [text, duration])

  useEffect(() => {
    if (!auto) return undefined
    const t = setTimeout(run, delay)
    return () => {
      clearTimeout(t)
      cancelAnimationFrame(raf.current)
    }
  }, [auto, delay, run])

  return [out, run]
}
