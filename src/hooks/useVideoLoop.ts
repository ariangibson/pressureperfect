import { useEffect, useRef, useState, useCallback } from 'react'

interface UseVideoLoopOptions {
  fadeDuration?: number // in seconds
  beforeEndThreshold?: number // seconds before end to start fading
}

export function useVideoLoop(options: UseVideoLoopOptions = {}) {
  const { fadeDuration = 0.5, beforeEndThreshold = 0.5 } = options
  const videoRef = useRef<HTMLVideoElement>(null)
  const opacityRef = useRef(0)
  const [opacity, setOpacity] = useState(0)
  const rafRef = useRef<number>()

  const updateOpacity = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    const { currentTime, duration } = video
    if (!duration || duration === Infinity) {
      rafRef.current = requestAnimationFrame(updateOpacity)
      return
    }

    let targetOpacity = 1

    if (currentTime < fadeDuration) {
      // Fade in at start
      targetOpacity = currentTime / fadeDuration
    } else if (currentTime > duration - (fadeDuration + beforeEndThreshold)) {
      // Fade out before end
      const remaining = duration - currentTime - beforeEndThreshold
      targetOpacity = Math.max(0, remaining / fadeDuration)
    }

    targetOpacity = Math.max(0, Math.min(1, targetOpacity))

    if (targetOpacity !== opacityRef.current) {
      opacityRef.current = targetOpacity
      setOpacity(targetOpacity)
    }

    rafRef.current = requestAnimationFrame(updateOpacity)
  }, [fadeDuration, beforeEndThreshold])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setOpacity(0)
      opacityRef.current = 0
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0
          videoRef.current.play().catch(() => { })
        }
      }, 100)
    }

    const handlePlay = () => {
      rafRef.current = requestAnimationFrame(updateOpacity)
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('play', handlePlay)

    if (!video.paused) {
      rafRef.current = requestAnimationFrame(updateOpacity)
    }

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('play', handlePlay)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [updateOpacity])

  return { videoRef, opacity }
}
