//Server Component
import HomeHeader from '@/app/components/HomeHeader';
import HomeBody from '@/app/components/HomeBody';
import HomeFooter from '@/app/components/HomeFooter';
import HomeBestSellers from '@/app/components/HomeBody/HomeBestSellers';
import AcceptCookies from '@/app/AcceptCookies';

export default function Home({params}:{params:{category:string}}) {

  const category = params.category || '';
  console.log(params)
  return (
    <main className='grow w-[50rem] mt-10 mx-auto'>
      {/*Server Component*/}
      <HomeHeader />

      {/*Client Component*/}
      <HomeBody category={category}>
        {/*Server Component*/}

        {/* @ts-expect-error Async Server Component */}
        <HomeBestSellers />
      </HomeBody>

      {/*Server Component*/}
      <HomeFooter />
      <AcceptCookies />
    </main>
  )
}