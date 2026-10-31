import SectionTitle from '../components/SectionTitle.jsx'
import MemberCard from '../components/MemberCard.jsx'
import { members } from '../data/members.js'

export default function Members() {
  return (
    <section id="members" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          number="03"
          label="Members"
          title={
            <>
              Orang-orang di <em className="text-gold">balik bising</em>
            </>
          }
        />
        <div className="grid grid-cols-2 gap-x-5 gap-y-14 pb-10 lg:grid-cols-4 lg:gap-x-8">
          {members.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
