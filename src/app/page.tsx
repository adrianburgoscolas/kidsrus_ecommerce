import HomeHeader from '@/app/components/HomeHeader';
import HomeNav from '@/app/components/HomeNav';

export default function Home() {
  return (
    <main className='grow w-[49rem] mt-10 mx-auto'>
      <HomeHeader />
      <HomeNav />
      <aside></aside>
      <section></section>
      <footer></footer>
    </main>
  )
}
