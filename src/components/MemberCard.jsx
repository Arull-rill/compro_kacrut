import Reveal from './Reveal.jsx'

const tilts = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']
const offsets = ['md:mt-0', 'md:mt-10', 'md:mt-4', 'md:mt-14']

/** Kartu personel gaya foto polaroid yang ditempel selotip. */
export default function MemberCard({ member, index }) {
  return (
    <Reveal delay={index * 120} className={offsets[index % offsets.length]}>
      <figure
        className={`group relative bg-ivory p-3 pb-5 text-ink shadow-[0_20px_50px_-20px_rgba(0,0,0,.9)] transition duration-500 hover:rotate-0 hover:-translate-y-2 ${tilts[index % tilts.length]}`}
      >
        {/* selotip */}
        <span
          aria-hidden="true"
          className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-gold/80 shadow-sm"
        />
        <div className="aspect-[4/5] overflow-hidden bg-coal">
          <img
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
        <figcaption className="px-1 pt-4">
          <p className="font-display text-3xl leading-none">{member.name}</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold-dark">{member.role}</p>
          {member.quote && <p className="mt-3 font-display text-lg italic leading-snug text-ink/70">“{member.quote}”</p>}
        </figcaption>
      </figure>
    </Reveal>
  )
}
