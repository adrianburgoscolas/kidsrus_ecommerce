//Server Component
import HomeHeader from '@/app/components/HomeHeader';
import HomeBody from '@/app/components/HomeBody';
import HomeFooter from '@/app/components/HomeFooter';
import HomeBestSellers from '@/app/components/HomeBody/HomeBestSellers';

export default function Home() {
  return (
    <main className='grow w-[49rem] mt-10 mx-auto'>
      {/*Server Component*/}
      <HomeHeader />

      {/*Client Component*/}
      <HomeBody>
        {/*Server Component*/}
        <HomeBestSellers />
      </HomeBody>

      {/*Server Component*/}
      <HomeFooter />
    </main>
  )
}
