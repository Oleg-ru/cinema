import './App.css'
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
      <>
          <Header/>
          <div className="header__banner">
              <div>
                  <p>REACT CINEMA</p>
                  <p>Subheading that sets up context, shares more info about the website, or generally gets people
                      psyched to keep scrolling. </p>
                  <div>
                      <a href="#movies">Movies</a>
                      <button>Favorites</button>
                  </div>
              </div>
              <video autoPlay muted loop>
                  <source
                      src="./assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4"
                      type="video/mp4"/>
              </video>
              <img src="./assets/background.jpg" alt=""/>
          </div>
          <Content />
          <Footer />
      </>
  )
}

export default App
