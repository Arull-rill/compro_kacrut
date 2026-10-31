import SectionTitle from '../components/SectionTitle.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { gallery } from '../data/gallery.js'

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionTitle
          number="05"
          label="Gallery"
          title={
            <>
              Potongan <em className="text-gold">kacau</em> kami
            </>
          }
        />
        <GalleryGrid items={gallery} />
      </div>
    </section>
  )
}
