import { Routes, Route } from 'react-router-dom'
import { Grid } from '@chakra-ui/react'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Screens
import Main from './Main'
import NotFound from './NotFound'
import About from './About'
import Levels from './Levels'
import Player from './Player'

// Help functions
import paths from '../helper/paths'

export default function Root() {
  return (
    <Grid h="100%" templateRows="repeat(3, max-content)" templateColumns="1fr">
      <Navbar />
      <Routes>
        <Route path={paths('/')} element={<Main />} />
        <Route path={paths('lvl')} element={<Levels />} />
        <Route path={paths('about')} element={<About />} />
        <Route path={paths('player/:playerName')} element={<Player />} />
        <Route path={paths('*')} element={<NotFound />} />
      </Routes>
      <Footer />
    </Grid>
  )
}
