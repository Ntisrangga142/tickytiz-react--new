import Header     from '../templates/Header.jsx'
import Hero       from '../organisms/Home/Hero.jsx'
import ChooseUs   from '../organisms/Home/ChooseUs.jsx'
import Trending from '../organisms/Home/Trending.jsx'
import Upcoming from '../organisms/Home/Upcoming.jsx'
import Subscribe from '../organisms/Home/Subscribe.jsx'
import Footer from '../templates/Footer.jsx'


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ChooseUs />
      <Trending />
      <Upcoming />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home