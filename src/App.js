import "./App.css";
import videoBg from "./assets/intro.mp4";
import logo from "./assets/logo-sakura.png";
import kost1 from "./assets/Kost1.jpeg";
import kost2 from "./assets/Kost2.jpeg";
import kost3 from "./assets/Kost3.jpeg";
import { useState } from "react";


function App() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const images = [kost1, kost2, kost3];

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <h1>Sakura Kost Putri</h1>
            <p>Kost nyaman, bersih & aesthetic</p>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-video">
        <video autoPlay loop muted className="video-bg">
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="overlay">
          <h2>Hunian Nyaman dengan Nuansa Pink Sakura</h2>
          <p>Cocok untuk mahasiswi & pekerja</p>
        </div>
      </section>

      {/* STATUS */}
      <section className="status">
        <h2>Status Kamar</h2>

        <div className="status-container">

          <div className="status-card available">
            <div className="icon">🟢</div>
            <p>2</p>
            <span>Available</span>
          </div>

          <div className="status-card occupied">
            <div className="icon">🔴</div>
            <p>6</p>
            <span>Not Available</span>
          </div>

        </div>
      </section>

      {/* ABOUT */}
    <section className="about">
      <h2>Tentang Kami</h2>

      <p className="about-text">
        Sakura Kost Putri hadir sebagai solusi hunian yang nyaman, aman, dan estetik,
        dirancang khusus untuk para wanita yang sedang bekerja atau berkuliah karena tempat yang nyaman dan strategis dekat dengan kampus & perkotaan.
      </p>

      <p className="about-text">
        Membawa konsep desain modern dengan nuansa pink yang manis layaknya bunga Sakura,
        kami sangat mengutamakan kebersihan dan kenyamanan penghuni.
      </p>

      <div className="about-features">
        <div>🛏️ Full Furnished</div>
        <div>📶 Free WiFi</div>
        <div>📹 CCTV</div>
        <div>🚿 Kamar Mandi Dalam</div>
      </div>

      <p className="about-text">
        Berlokasi strategis di Dusun Kaumjaya, Telukjambe Timur,Karawang,Jawa Barat, 
        dengan akses mudah ke kampus dan perkotaan.
      </p>

      <h3 className="price">Rp 800.000 / bulan</h3>
    </section>

      {/* GALLERY */}
      <section className="gallery">
        <h2>Gallery</h2>

        <div className="grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => {
                setCurrentIndex(index);
                setZoom(1);
              }}
            />
          ))}
        </div>
      </section>

      {currentIndex !== null && (
        <div className="modal">

          {/* CLOSE */}
          <span className="close" onClick={() => setCurrentIndex(null)}>✖</span>

          {/* PREV */}
          <span
            className="nav prev"
            onClick={() =>
              setCurrentIndex((currentIndex - 1 + images.length) % images.length)
            }
          >
            ❮
          </span>

          {/* IMAGE */}
          <img
            src={images[currentIndex]}
            className="modal-img"
            style={{ transform: `scale(${zoom})` }}
          />

          {/* NEXT */}
          <span
            className="nav next"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % images.length)
            }
          >
            ❯
          </span>

          {/* ZOOM */}
          <div className="zoom-controls">
            <button onClick={() => setZoom(zoom + 0.2)}>+</button>
            <button onClick={() => setZoom(Math.max(1, zoom - 0.2))}>-</button>
          </div>

        </div>
      )}

      <footer className="footer">

        <div className="footer-container">

          {/* KOLOM 1 */}
          <div className="footer-col">
            <h3>Sakura Kost Putri 🌸</h3>
            <p>Kost nyaman, bersih & aesthetic di Karawang.</p>
          </div>

          {/* KOLOM 2 */}
          <div className="footer-col">
            <h3>Contact</h3>
            <p>📞 081284838026</p>
            <a href="https://wa.me/6281284838026" className="footer-btn">
              Chat WhatsApp
            </a>
          </div>

          {/* KOLOM 3 */}
          <div className="footer-col">
            <h3>Location</h3>

            <p className="address">
              📍 M8H4+426, Dusun Kaumjaya, RT.015/RW.004,<br />
              Puseurjaya, Telukjambe Timur,<br />
              Karawang, Jawa Barat 41361
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9882.825003457212!2d107.29045049496564!3d-6.3262980111217635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e697700374d81b7%3A0xca5180a23de9c64b!2sSakura%20Kost%20Putri!5e1!3m2!1sid!2sid!4v1775535030815!5m2!1sid!2sid"
              className="map"
              loading="lazy"
            ></iframe>
          </div>

        </div>

        <p className="footer-bottom">
          © 2026 Sakura Kost Putri
        </p>

      </footer>

    </div>
  );
}

export default App;