"use client"

import React, { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type Props = {
  images: string[]
}

export default function EmblaCarousel({ images }: Props) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: 'center' })
  const autoplayRef = useRef<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Start autoplay when embla is ready
  useEffect(() => {
    if (!embla) return

    // clear any previous interval
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }

    const play = () => {
      if (!embla) return
      try {
        embla.scrollNext()
      } catch {
        // if embla is not ready, stop autoplay
        if (autoplayRef.current) {
          window.clearInterval(autoplayRef.current)
          autoplayRef.current = null
        }
      }
    }

    autoplayRef.current = window.setInterval(play, 3000)

    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap())
    embla.on('select', onSelect)
    onSelect()

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
      embla.off('select', onSelect)
    }
  }, [embla])

  // Pause on hover/focus
  const pause = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }
  const play = () => {
    if (!embla) return
    if (autoplayRef.current) return
    autoplayRef.current = window.setInterval(() => embla.scrollNext(), 3000)
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className="cursor-grab active:cursor-grabbing"
        ref={viewportRef}
        onMouseEnter={pause}
        onMouseLeave={play}
        onFocus={pause}
        onBlur={play}
      >
        <div className="flex gap-4">
          {images.map((img, i) => (
            <div className="relative flex-[0_0_85%] md:flex-[0_0_45%] min-w-0 rounded-xl overflow-hidden shadow-md" key={i}>
              <div className="aspect-[4/3] relative">
                <Image
                  src={`/img/${img}`}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 85vw, 45vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          aria-label="Previous"
          onClick={() => embla && embla.scrollPrev()}
          className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 shadow-sm cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="flex gap-2 overflow-hidden max-w-[200px] px-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => embla && embla.scrollTo(idx)}
              aria-current={selectedIndex === idx}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 flex-shrink-0 cursor-pointer ${
                selectedIndex === idx ? 'bg-amber-500 w-6' : 'bg-zinc-800 hover:bg-zinc-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <button
          aria-label="Next"
          onClick={() => embla && embla.scrollNext()}
          className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-300 shadow-sm cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
