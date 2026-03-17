import heroImg from './assets/hero.png'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <header className="profile-header">
          <div className="profile-avatar">
            <img src={heroImg} alt="Profile" />
          </div>
          <span className="profile-name">Ivan Acha</span>
          <span className="profile-sep">💻</span>
          <span className="profile-role">Software Developer</span>
        </header>

        <section className="hero-section">
          <h1 className="hero-headline">
            Building robust<br />solutions?<br />
            I'm here <mark className="hero-mark">to code.</mark>
          </h1>
          <div className="availability-status">
            <span>Currently available for Software Engineer and freelance opportunities.</span>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
