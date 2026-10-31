import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { story } from '../data/story.js'

export default function Story() {
  return (
    <section id="story" className="relative bg-coal py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          number="04"
          label="Story"
          title={
            <>
              Dari ruang latihan, <em className="text-gold">sampai sini</em>
            </>
          }
        />

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-gold via-gold-dark to-transparent md:left-1/2"
          />
          {story.map((s, i) => {
            const left = i % 2 === 0
            return (
              <Reveal
                as="li"
                key={s.title}
                className={`relative pb-14 pl-10 md:w-1/2 md:pb-20 ${
                  left ? 'md:pl-0 md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-3 left-0 h-[15px] w-[15px] rotate-45 border border-gold bg-ink ${
                    left ? 'md:left-auto md:-right-[7.5px]' : 'md:-left-[7.5px]'
                  }`}
                />
                <p className="outline-text font-display text-5xl leading-none text-gold md:text-6xl">{s.when}</p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-ivory/70 md:inline-block">{s.text}</p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
