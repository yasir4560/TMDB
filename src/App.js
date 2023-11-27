// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Container from './Layouts/Container';
import Section from './Layouts/section';
import Banner from './components/Banner';
import Header from './components/Header';
import MovieList from './components/Movies/MovieList';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/Moviedetail/MovieDetail';

function App() {
  const [sectionToggle, setSectionToggle] = useState({
    first: 'Today',
    second: 'Streaming',
    third: 'Streaming',
    forth: 'Movies',
  });

  const handleToggle = (section, value) => {
    setSectionToggle((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  return (
    <BrowserRouter>
      <>
        <Header />
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  {/* Trending Section */}
                  <Section
                    title="Trending"
                    items={['Today', 'This Week']}
                    onToggle={handleToggle.bind(null, 'first')}
                    isToggled={sectionToggle.first === 'today' ? false : true}
                  >
                    <div className='bg-[url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)] bg-cover bg-center'>
                      <MovieList fetch={sectionToggle.first} />
                    </div>
                  </Section>

                  {/* What's Popular Section */}
                  <Section
                    title="What's Popular"
                    items={['Streaming', 'On TV', 'For Rent', 'In Theaters']}
                    onToggle={handleToggle.bind(null, 'third')}
                    isToggled={sectionToggle.third === 'Streaming' ? false : true}
                  >
                    <MovieList fetch={sectionToggle.third} />
                  </Section>

                  {/* Free To Watch Section */}
                  <Section
                    title="Free To Watch"
                    items={['Movies', 'TV']}
                    onToggle={handleToggle.bind(null, 'forth')}
                    isToggled={sectionToggle.forth === 'Movies' ? false : true}
                  >
                    <MovieList fetch={sectionToggle.forth} />
                  </Section>
                </>
              }
            />

            <Route path="/movie/:id" element={<MovieDetail />} />

           
          </Routes>
        </Container>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
