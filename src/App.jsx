import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import eddyProfile from './assets/eddy-profile.jpg';

function App() {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player('yt-player-bg', {
          videoId: 'V2aTjthmw7M',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            loop: 1,
            playlist: 'V2aTjthmw7M',
            cc_load_policy: 3,
            iv_load_policy: 3
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
              try {
                event.target.unloadModule("captions");
                event.target.unloadModule("cc");
              } catch (err) {}
            }
          }
        });
      };
    }
  }, []);

  const togglePlay = () => {
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      if (playing) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setPlaying(!playing);
    }
  };

  const toggleMute = () => {
    if (playerRef.current && typeof playerRef.current.unMute === 'function') {
      if (muted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setMuted(!muted);
    }
  };

  return (
    <>
      <div className="video-background">
        <div id="yt-player-bg" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '100vw', minHeight: '56.25vw', width: '177.77vh', height: '100vh', pointerEvents: 'none', opacity: 0.3 }}></div>
      </div>
      <div className="noise-overlay"></div>
      <nav className="navbar fade-in">
          <div className="logo" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>E.C</div>
          
          <div className="media-controls" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button onClick={togglePlay} aria-label={playing ? 'Pausar' : 'Play'} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
              {playing ? '⏸' : '▶'}
            </button>
            <button onClick={toggleMute} aria-label={muted ? 'Activar Sonido' : 'Mutear'} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
              {muted ? '🔈' : '🔊'}
            </button>
          </div>

          <a href="https://wa.me/34625871008?text=Hola%20Eddy,%20vengo%20de%20tu%20web%20y%20me%20interesa%20contactarte%20para..." target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Contactar</a>
      </nav>

      <header className="hero">
          <div className="hero-content">
              <h1 className="reveal-text">EDDY <br/> CASTAÑO</h1>
              <p className="subtitle fade-in" style={{ letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--accent)', textAlign: 'center' }}>Cantautor | Compositor | Live Performer</p>
              <div className="social-links fade-in" style={{ marginTop: '1rem', gap: '1.5rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href="https://www.youtube.com/watch?v=V2aTjthmw7M" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', background: '#ff0000', color: 'white', border: 'none', boxShadow: '0 0 15px rgba(255,0,0,0.5)', textTransform: 'uppercase', fontWeight: 'bold' }}>▶ VER NUEVO VIDEOCLIP</a>
                  <a href="https://www.instagram.com/eddycamusic/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Instagram</a>
                  <a href="https://www.facebook.com/eddycamusic/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', fontSize: '0.9rem' }}>Facebook</a>
                  <a href="https://soundcloud.com/eddycastano" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', fontSize: '0.9rem' }}>SoundCloud</a>
                  <a href="mailto:eddycamusic1@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'var(--font-sans)', letterSpacing: '0.1em', fontSize: '0.9rem', fontWeight: 'bold' }}>Contacto</a>
              </div>
          </div>
          <div className="scroll-indicator fade-in">
              <span>Descubre</span>
              <div className="line"></div>
          </div>
      </header>

      <main>
          <section className="about-section">
              <div className="container">
                  <h2 className="section-title">El Artista</h2>
                  <div className="bio-grid">
                      <div className="bio-text">
                          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>Originario de Colombia y establecido en España, <strong>Eddy Castaño</strong> es un cantautor y virtuoso de la guitarra que transita con absoluta maestría entre el rock alternativo y el pop contemporáneo.</p>
                          <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>Con un catálogo original consolidado que incluye potentes sencillos como <i>"Me Tienes Mal"</i> y <i>"Paraíso"</i>, Eddy destaca por su fascinante dualidad en el escenario: es capaz de desatar la fuerza eléctrica del rock y, al instante siguiente, dominar la intimidad pura del formato acústico. Una propuesta musical de altísimo nivel, diseñada tanto para vibrar en grandes salas como para elevar sesiones privadas exclusivas.</p>
                      </div>
                      <div className="bio-image" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)' }}>
                          <img src={eddyProfile} alt="Eddy Castaño" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '3/4' }} />
                      </div>
                  </div>
              </div>
          </section>

          <section className="discography-section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="container">
                  <h2 className="section-title">Escucha</h2>
                  <div className="music-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
                      
                      {/* YouTube Video Embed 1 */}
                      <div className="youtube-embed" style={{ width: '100%' }}>
                          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>
                              Último Lanzamiento <span style={{ color: 'var(--accent)' }}>| Me Tienes Mal</span>
                          </h3>
                          <div style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(229, 142, 38, 0.3)', boxShadow: '0 10px 40px rgba(138, 43, 226, 0.2)' }}>
                              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AWJFq-pVeGs?autoplay=0&rel=0" title="Eddy Castaño - Me Tienes Mal" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          </div>
                      </div>

                      {/* YouTube Video Embed 2 */}
                      <div className="youtube-embed" style={{ width: '100%' }}>
                          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>
                              En Directo <span style={{ color: 'var(--accent)' }}>| Sesiones</span>
                          </h3>
                          <div style={{ aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(229, 142, 38, 0.3)', boxShadow: '0 10px 40px rgba(138, 43, 226, 0.2)' }}>
                              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rAaXIxU1M3o?autoplay=0&rel=0" title="Eddy Castaño - Sesión en Vivo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          </div>
                      </div>

                  </div>

                  {/* Channel Link and Streaming Platforms Links */}
                  <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                      <a href="https://www.youtube.com/@EDDYMUSICA" target="_blank" rel="noreferrer" style={{ display: 'inline-block', fontSize: '0.9rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 'bold' }}>▶ Suscribirse al Canal Oficial</a>
                  </div>
                  <div className="streaming-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                      <a href="https://open.spotify.com/artist/6c14Cph5lRro0lzSOiQGTS" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '50px' }}>
                          🎧 Abrir en Spotify
                      </a>
                      <a href="https://music.apple.com/co/artist/eddy-casta%C3%B1o/1837016024" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '50px' }}>
                          🎵 Apple Music
                      </a>
                      <a href="https://www.youtube.com/@EDDYMUSICA" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '50px' }}>
                          ▶ YouTube
                      </a>
                  </div>

                  {/* Spotify Embed */}
                  <div className="spotify-embed-container" style={{ marginTop: '4rem', maxWidth: '900px', margin: '4rem auto 0 auto' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center' }}>
                          Discografía Oficial <span style={{ color: '#1DB954' }}>| Spotify</span>
                      </h3>
                      <div style={{ boxShadow: '0 10px 40px rgba(29, 185, 84, 0.1)', borderRadius: '12px' }}>
                          <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/artist/6c14Cph5lRro0lzSOiQGTS?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      </div>
                  </div>
              </div>
          </section>

          {/* Secciones de Lives y Covers ocultas temporalmente para limpiar el diseño y hacer la web más compacta y premium */}
          
          <section className="repertoire-section">
              <div className="container">
                  <h2 className="section-title">Servicios & Booking</h2>
                  <ul className="repertoire-list">
                      <li>
                          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Eventos Privados</h3>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Sesiones acústicas exclusivas para terrazas, inauguraciones y eventos VIP.</p>
                      </li>
                      <li>
                          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Clases Privadas</h3>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Aprende guitarra y composición con un cantautor y músico de sesión. (Presencial/Online)</p>
                      </li>
                      <li>
                          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem' }}>Producción</h3>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Grabación de guitarras y arreglos para proyectos musicales y de estudio.</p>
                      </li>
                  </ul>
              </div>
          </section>

          <section className="cta-section">
              <div className="container">
                  <h2 className="section-title">Conecta</h2>
                  <div className="cta-buttons">
                      <a href="https://wa.me/34625871008?text=Hola%20Eddy,%20vengo%20de%20tu%20web%20y%20me%20interesa%20contactarte%20para..." target="_blank" rel="noreferrer" className="btn btn-primary">Contratación (WhatsApp)</a>
                      <a href="https://paypal.me/eddycamusic" target="_blank" rel="noreferrer" className="btn btn-secondary">PayPal</a>
                      <a href="#" className="btn btn-secondary" onClick={(e) => {
                          e.preventDefault();
                          navigator.clipboard.writeText('$eddy22');
                          alert('¡Cashtag $eddy22 copiado al portapapeles! Abre tu DolarApp y pégalo para enviarle apoyo.');
                      }}>DolarApp ($eddy22)</a>
                  </div>
              </div>
          </section>
      </main>

      <footer className="footer">
          <div className="container">
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} Eddy Castaño. Todos los derechos reservados.</p>
              
              <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(229, 142, 38, 0.05)', border: '1px solid rgba(229, 142, 38, 0.2)', borderRadius: '12px', display: 'inline-block', maxWidth: '100%' }}>
                  <p style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: 0, letterSpacing: '0.05em' }}>
                      ⚡ Diseñado y Desarrollado por
                  </p>
                  <a href="https://danisid.com" target="_blank" rel="noreferrer" style={{ color: 'var(--bg-color)', background: 'var(--accent)', padding: '0.5rem 1.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.9rem', boxShadow: '0 4px 15px rgba(229, 142, 38, 0.3)' }}>
                      danisid.com
                  </a>
                  <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginTop: '0.8rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                      Maison Quintessence
                  </p>
              </div>
          </div>
      </footer>
    </>
  );
}

export default App;
