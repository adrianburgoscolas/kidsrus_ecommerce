import Image from 'next/image';

import slider1 from './images/slider-1.jpg';
import girlsPower from './images/girls-power.jpg';

export default function Home() {
  return (
    <main className="grow">
      <header>
        <Image src={slider1} alt='Slider 1'/>
        <Image src={girlsPower} alt='Girls Power'/>
      </header>
      <nav></nav>
      <aside></aside>
      <section></section>
      <section></section>
    </main>
  )
}
