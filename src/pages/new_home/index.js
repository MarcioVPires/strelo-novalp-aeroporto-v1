// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/strelo_layout/index';
// sections
import HomeView from 'src/strelo_sections/Home/view';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Strelo | Soluções Digitais</title>
      </Head>

      <HomeView />
    </>
  );
}
