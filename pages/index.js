import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData }) {
  return (
    <div className=''>
      <Head>
        <title>AirBnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold py-5'>Explore Nearby</h2>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, id) => (
              <SmallCard
                key={id}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className=''>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
