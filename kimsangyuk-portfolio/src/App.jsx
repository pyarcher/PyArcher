import { useState } from "react";
import { Github, Rss, Copy, Check } from "lucide-react";
import faceImg from "./assets/face.jpg";
import bookImg from "./assets/book-cover.jpg";

export default function App() {
  const [copied, setCopied] = useState("");

  const copy = (label, value) => {
    navigator.clipboard?.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(""), 1600);
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .kp-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(15,23,50,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,50,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 30% 20%, black 40%, transparent 85%);
          mask-image: radial-gradient(ellipse 80% 60% at 30% 20%, black 40%, transparent 85%);
        }
        .kp-btn-primary { transition: transform 0.15s ease, box-shadow 0.15s ease; }
        .kp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(47,95,224,0.35); }
        .kp-btn-ghost { transition: background 0.15s ease, border-color 0.15s ease; }
        .kp-btn-ghost:hover { background: #E9ECF6; border-color: #C7CDE3; }
        .kp-social { transition: transform 0.15s ease, background 0.15s ease; }
        .kp-social:hover { transform: translateY(-2px); background: #E9ECF6; }
        .kp-copy:hover { background: #EEF1FA; }
        .kp-book:hover { transform: translateY(-3px); }
        @media (prefers-reduced-motion: reduce) {
          .kp-btn-primary, .kp-btn-ghost, .kp-social, .kp-copy, .kp-book { transition: none; }
        }
        @media (max-width: 880px) {
          .kp-layout { grid-template-columns: 1fr !important; }
          .kp-card { margin-top: 40px; }
          .kp-name { font-size: clamp(46px, 13vw, 88px) !important; }
        }
      `}</style>

      <div className="kp-bg-grid" />

      <div style={styles.wrap}>
        <p style={styles.eyebrow}>
          KIM SANG YUK <span style={styles.eyebrowDash}>&mdash;</span>{" "}
          <span style={styles.eyebrowBlue}>ARCHER &middot; RIDER &middot; AUTHOR &middot; K-ULSANER</span>
        </p>

        <div className="kp-layout" style={styles.layout}>
          <div>
            <h1 className="kp-name" style={styles.name}>
              <span style={styles.nameSolid}>KIM</span>
              <br />
              <span style={styles.nameOutline}>SANG YUK</span>
            </h1>
            <p style={styles.hanja}>김상육 &middot; 金相六</p>

            <p style={styles.tagline}>
              Reflect upon the past, walk humbly through the present,
              and answer for the future.
            </p>

            <p style={styles.desc}>
              Better the village beyond my gate than a wonder ten thousand miles
              away. Better the book and film I can hold than money I can never
              keep. Better a flower than a star.
            </p>

            <div style={styles.ctaRow}>
              <a
                href="https://github.com/pyarcher"
                className="kp-btn-primary"
                style={styles.btnPrimary}
              >
                View GitHub
              </a>
              <a
                href="https://blog.naver.com/sixpod"
                className="kp-btn-ghost"
                style={styles.btnGhost}
              >
                Read the blog
              </a>
            </div>

            <div style={styles.socialRow}>
              <a
                href="https://github.com/pyarcher"
                aria-label="GitHub"
                className="kp-social"
                style={styles.socialIcon}
              >
                <Github size={18} />
              </a>
              <a
                href="https://blog.naver.com/sixpod"
                aria-label="Naver Blog"
                className="kp-social"
                style={styles.socialIcon}
              >
                <Rss size={18} />
              </a>
            </div>
          </div>

          <div className="kp-card" style={styles.card}>
            <div style={styles.photoWrap}>
              <img src={faceImg} alt="Kim Sang Yuk portrait" style={styles.photo} />
            </div>

            <p style={styles.cardEyebrow}>K-ULSANER</p>
            <h2 style={styles.cardTitle}>김상육 &middot; Kim Sang Yuk</h2>
            <p style={styles.cardDesc}>
              Archer, rider, and author rooted in Ulsan &mdash; writing history
              and reflection into everyday life.
            </p>

            <div style={styles.roleRow}>
              <span style={styles.rolePill}>Archer</span>
              <span style={styles.rolePill}>Rider</span>
              <span style={styles.rolePill}>Author</span>
              <span style={styles.rolePill}>K-Ulsaner</span>
            </div>

            <div style={styles.cardDivider} />

            <p style={styles.cardEyebrow}>AUTHOR OF</p>
            <div className="kp-book" style={styles.bookRow}>
              <img src={bookImg} alt="Book cover" style={styles.bookCover} />
              <div>
                <p style={styles.bookTitle}>위대한 번방 울산</p>
                <p style={styles.bookMeta}>김상육 지음</p>
              </div>
            </div>

            <div style={styles.cardDivider} />

            <p style={styles.cardEyebrow}>REACH ME</p>

            <button
              className="kp-copy"
              style={styles.copyRow}
              onClick={() => copy("github", "github.com/pyarcher")}
            >
              <span style={styles.copyLabel}>GitHub</span>
              <span style={styles.copyValue}>github.com/pyarcher</span>
              {copied === "github" ? <Check size={15} /> : <Copy size={15} />}
            </button>

            <button
              className="kp-copy"
              style={styles.copyRow}
              onClick={() => copy("blog", "blog.naver.com/sixpod")}
            >
              <span style={styles.copyLabel}>Blog</span>
              <span style={styles.copyValue}>blog.naver.com/sixpod</span>
              {copied === "blog" ? <Check size={15} /> : <Copy size={15} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #EEF1FA 0%, #E7EBF7 100%)",
    fontFamily: "'Inter', sans-serif",
    color: "#0B1220",
    overflow: "hidden",
  },
  wrap: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1180,
    margin: "0 auto",
    padding: "56px 32px 90px",
  },
  eyebrow: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.14em",
    marginBottom: 34,
  },
  eyebrowDash: { color: "#0B1220" },
  eyebrowBlue: { color: "#2F5FE0" },
  layout: {
    display: "grid",
    gridTemplateColumns: "1.35fr 1fr",
    gap: 64,
    alignItems: "start",
  },
  name: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 900,
    fontSize: "clamp(52px, 6.8vw, 100px)",
    lineHeight: 0.98,
    letterSpacing: "-0.03em",
    margin: "0 0 12px",
  },
  nameSolid: { color: "#0B1220" },
  nameOutline: {
    color: "transparent",
    WebkitTextStroke: "1.6px #0B1220",
  },
  hanja: {
    fontSize: 15,
    color: "#6B7290",
    letterSpacing: "0.06em",
    margin: "0 0 30px",
  },
  tagline: {
    fontSize: "clamp(18px, 2vw, 23px)",
    fontWeight: 600,
    maxWidth: 560,
    margin: "0 0 18px",
    color: "#0B1220",
    lineHeight: 1.4,
  },
  desc: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#4A5170",
    maxWidth: 520,
    marginBottom: 34,
  },
  ctaRow: { display: "flex", gap: 14, marginBottom: 34, flexWrap: "wrap" },
  btnPrimary: {
    background: "#2F5FE0",
    color: "#fff",
    border: "none",
    borderRadius: 999,
    padding: "14px 26px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: 14.5,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
  },
  btnGhost: {
    background: "#DEE3F2",
    color: "#0B1220",
    border: "1px solid transparent",
    borderRadius: 999,
    padding: "14px 26px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: 14.5,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
  },
  socialRow: { display: "flex", gap: 12 },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#DEE3F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0B1220",
    textDecoration: "none",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: 24,
    padding: "30px 30px 28px",
    boxShadow: "0 24px 60px rgba(20,30,70,0.14)",
  },
  photoWrap: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: 20,
    border: "3px solid #EEF1FA",
    boxShadow: "0 6px 18px rgba(20,30,70,0.18)",
  },
  photo: { width: "100%", height: "100%", objectFit: "cover" },
  cardEyebrow: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.12em",
    color: "#2F5FE0",
    margin: "0 0 10px",
  },
  cardTitle: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 800,
    fontSize: 24,
    margin: "0 0 10px",
  },
  cardDesc: {
    fontSize: 14.5,
    lineHeight: 1.6,
    color: "#4A5170",
    marginBottom: 18,
  },
  roleRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  rolePill: {
    background: "#EEF1FA",
    color: "#2F5FE0",
    fontSize: 12.5,
    fontWeight: 700,
    padding: "6px 12px",
    borderRadius: 999,
  },
  cardDivider: {
    height: 1,
    background: "#E7EAF4",
    margin: "24px 0 20px",
  },
  bookRow: {
    display: "flex",
    gap: 14,
    alignItems: "center",
  },
  bookCover: {
    width: 56,
    height: 84,
    objectFit: "cover",
    borderRadius: 6,
    boxShadow: "0 8px 20px rgba(20,30,70,0.2)",
    flexShrink: 0,
  },
  bookTitle: {
    fontSize: 15.5,
    fontWeight: 700,
    color: "#0B1220",
    margin: "0 0 4px",
    lineHeight: 1.35,
  },
  bookMeta: { fontSize: 13, color: "#8A90A8", margin: 0 },
  copyRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    border: "1px solid #E7EAF4",
    borderRadius: 12,
    padding: "12px 14px",
    marginBottom: 10,
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
    textAlign: "left",
  },
  copyLabel: { fontSize: 12, color: "#8A90A8", minWidth: 50 },
  copyValue: { fontSize: 13.5, color: "#0B1220", fontWeight: 600, flex: 1 },
};
