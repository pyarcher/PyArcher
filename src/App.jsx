import { useState } from "react";
import { Github, Copy, Check } from "lucide-react";
import faceImg from "./assets/face.jpg";
import bookImg from "./assets/book.png";
import whalingImg from "./assets/whaling.jpeg";

function NaverIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect width="24" height="24" rx="6" fill="#03C75A" />
      <path d="M14.6 12.86L9.4 5H5v14h4.4v-7.86L14.6 19H19V5h-4.4z" fill="#fff" />
    </svg>
  );
}

function GmailIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#fff" stroke="#DADCE0" />
      <path d="M2.6 6.2 12 13l9.4-6.8" fill="none" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 6.6v10.4C2 17.6 2.4 18 3 18h2.2V9.4z" fill="#4285F4" />
      <path d="M22 6.6v10.4c0 .6-.4 1-1 1h-2.2V9.4z" fill="#34A853" />
      <path d="M2.6 6.1 12 12.9l9.4-6.8-1-1.3L12 10.6 3.6 4.8z" fill="#FBBC05" />
    </svg>
  );
}

// Published books — shown under "AUTHOR OF", each cover links out.
const BOOKS = [
  {
    title: "위대한 번방 울산",
    meta: "김상육 지음",
    cover: bookImg,
    url: "https://product.kyobobook.co.kr/detail/S000061694894",
  },
  {
    title: "고래와 고래잡이, 그리고 고래특구",
    meta: "울산광역시 남구",
    cover: whalingImg,
    url: "https://dl.nanet.go.kr/search/searchInnerDetail.do?searchType=INNER_SEARCH&resultType=INNER_SEARCH_DETAIL&searchMehtod=L&searchClass=S&controlNo=MONO1201244487&queryText=&prevQueryText=%EA%B3%A0%EB%9E%98%EC%9E%A1%EC%9D%B4%3AALL_NI_TOC%3AAND&zone=&fieldText=&prevPubYearFieldText=&languageCode=&synonymYn=&refineSearchYn=&ddcPopSearchYn=&pageNum=&pageSize=&orderBy=&topMainMenuCode=&topSubMenuCode=&totalSize=118&totalSizeByMenu=118&seqNo=&hanjaYn=Y&knowPub=&isdb=&isdbsvc=&tt1=&down=&frgnLangMtrlYn=&targetLangCode=&checkedDbIdList=&baseDbId=&selectedDbIndexIdList=&caller=&asideState=&dpBranch=ALL&journalKind=&degreeDiv=&searchQuery=%EA%B3%A0%EB%9E%98%EC%9E%A1%EC%9D%B4",
  },
];

// Column & Essay archive — grouped by year, newest first.
// To add a new piece, just add a new object to the matching year's `items`
// array (or create a new year group at the top).
const ARTICLES = [
  {
    year: "2026",
    items: [
      { title: "울산 전통 활쏘기의 종가, 원학정", date: "2026.7.8", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1061475" },
      { title: "울주 개지변과 울산 팰리세이드", date: "2026.7.2", url: "http://www.ujeil.com/news/articleView.html?idxno=388196" },
      { title: "18세기 울산 동헌 풍경", date: "2026.6.11", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1063979" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "울산 병영의 칼과 펜", date: "2025.9.18", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1037083" },
      { title: "울산읍성과 좌병영 사이, 부평 단장골", date: "2025.8.6", url: "https://www.ulsanpress.net/news/articleView.html?idxno=556483" },
      { title: "흥례(興禮), 울주 흥업(興業), 울산", date: "2025.7.1", url: "http://www.ujeil.com/news/articleView.html?idxno=369550" },
      { title: "울산의 태화, 열두 길", date: "2025.4.28", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1050897" },
      { title: "태화, 원융과 태평을 품다", date: "2025.2.14", url: "http://www.ulsanilbo.co.kr/news/articleView.html?idxno=92566" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "기후대응댐, 회야댐 다시 음수사원", date: "2024.8.28", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1045173" },
      { title: "심원권 일기, 일기의 쓸모", date: "2024.7.7", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1042788" },
      { title: "돈 먹는 물, 돈 같은 물, 돈 되는 물", date: "2024.6.23", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1041940" },
      { title: "장춘오의 기나긴 봄", date: "2024.4.30", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1039082" },
      { title: "말은 언제 오나?", date: "2024.4.18", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1038382" },
      { title: "울산과 샌디에고, 두 고래도시 이야기", date: "2024.3.12", url: "https://www.ulsanpress.net/news/articleView.html?idxno=523761" },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "울산의 꽃, 화유십일홍", date: "2022.10.27", url: "https://www.iusm.co.kr/news/articleView.html?idxno=1001695" },
      { title: "이순신 장군과 일촌 맺기", date: "2022.8.31", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=945584" },
      { title: "고래, 발가락이 닮았다", date: "2022.7.4", url: "https://www.iusm.co.kr/news/articleView.html?idxno=951047" },
      { title: "접항(接港), 방어진의 용(龍)가자미", date: "2022.5.6", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=934565" },
      { title: "부상효채, 동대삼객(扶桑曉彩 東臺三客)", date: "2022.4.25", url: "https://www.iusm.co.kr/news/articleView.html?idxno=944513" },
      { title: "세계 조선산업도시 열전", date: "2022.3.3", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=928187" },
      { title: "항(港)과 항(巷), 두 도시 이야기", date: "2022.2.14", url: "http://www.ujeil.com/news/articleView.html?idxno=297480" },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "숟가락과 젓가락 사이, 울산", date: "2021.11.28", url: "https://www.iusm.co.kr/news/articleView.html?idxno=930522" },
      { title: "특별하고 일반적인 도시가 따로 있나?", date: "2021.11.23", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=919214" },
      { title: "단계적 일상회복과 공공의료", date: "2021.10.26", url: "https://www.iusm.co.kr/news/articleView.html?idxno=926671" },
      { title: "코로나19에서 울산이 살아남는 법", date: "2021.10.11", url: "https://www.ulsanpress.net/news/articleView.html?idxno=385954" },
      { title: "약방의 시대, 의료원의 시대", date: "2021.6.2", url: "https://www.iusm.co.kr/news/articleView.html?idxno=912521" },
      { title: "신라의 태화! 울산의 태화!", date: "2021.3.24", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=792304" },
      { title: "코로나19와의 전쟁 1년… 부적과 과학", date: "2021.2.22", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=789115" },
      { title: "현곡 이유수 선생과 울산향토사", date: "2021.1.12", url: "https://www.ulsanpress.net/news/articleView.html?idxno=368777" },
    ],
  },
  {
    year: "2020",
    items: [
      { title: "울산 동해 바이킹 시즌2", date: "2020.11.8", url: "http://www.ulsanilbo.co.kr/news/articleView.html?idxno=16812" },
      { title: "반구대 암각화와 운문댐 물값", date: "2020.8.23", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=770840" },
      { title: "낙동강 물로 하나되는 영남", date: "2020", url: null },
    ],
  },
  {
    year: "2018",
    items: [
      { title: "북송 등문고에서 울산 신문고까지", date: "2018.8.26", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=655130" },
    ],
  },
  {
    year: "2016",
    items: [
      { title: "신고리 5·6호기 건설로 울산 경기회복 물꼬 터야", date: "2016.6.22", url: "https://www.iusm.co.kr/news/articleView.html?idxno=668772" },
      { title: "제9회 울산 조선해양의날: 골리앗 크레인은 무너지지 않는다", date: "2016.1.7", url: "https://m.blog.naver.com/sixpod/220590562287" },
    ],
  },
  {
    year: "2015",
    items: [
      { title: "[뉴스] 제9회 울산조선해양의 날 특집 '조선해양산업 현재와 미래 전망'", date: "2015.7.1", url: "http://www.ulsan-news.com/news/view.php?idx=24020" },
      { title: "백경을 쫓은 피쿼드호는 이양선이었다", date: "2015.5.24", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=501872" },
      { title: "울산형 경제건설, 창조경제적 어프로치", date: "2015.3.20", url: "https://www.iusm.co.kr/news/articleView.html?idxno=583862" },
    ],
  },
  {
    year: "2013",
    items: [
      { title: "4월, 고래의 달, 고래바다여행선을 띄우며", date: "2013.4.1", url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=405481" },
    ],
  },
];

export default function KimSangYukPortfolio() {
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
        .kp-essay-link { transition: background 0.15s ease, padding-left 0.15s ease, border-color 0.15s ease; }
        .kp-essay-link:hover { background: #EEF1FA; padding-left: 12px; border-color: #C7CDE3 !important; }
        .kp-essay-static { opacity: 0.55; }
        @media (prefers-reduced-motion: reduce) {
          .kp-btn-primary, .kp-btn-ghost, .kp-social, .kp-copy, .kp-book, .kp-essay-link { transition: none; }
        }
        @media (max-width: 880px) {
          .kp-layout { grid-template-columns: 1fr !important; }
          .kp-card { margin-top: 40px; }
          .kp-name { font-size: clamp(46px, 13vw, 88px) !important; }
          .kp-essay-cols { grid-template-columns: 1fr !important; }
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
                GitHub
              </a>
              <a
                href="https://blog.naver.com/sixpod"
                className="kp-btn-ghost"
                style={styles.btnGhost}
              >
                Blog
              </a>
              <a
                href="mailto:sixpodman@gmail.com"
                className="kp-btn-ghost"
                style={styles.btnGhost}
              >
                Email
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
                <NaverIcon size={18} />
              </a>
              <a
                href="mailto:sixpodman@gmail.com"
                aria-label="Email"
                className="kp-social"
                style={styles.socialIcon}
              >
                <GmailIcon size={18} />
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
            {BOOKS.map((book, i) => (
              <a
                key={i}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="kp-book"
                style={{
                  ...styles.bookRow,
                  marginBottom: i === BOOKS.length - 1 ? 0 : 16,
                }}
              >
                <img src={book.cover} alt={book.title} style={styles.bookCover} />
                <div>
                  <p style={styles.bookTitle}>{book.title}</p>
                  <p style={styles.bookMeta}>{book.meta}</p>
                </div>
              </a>
            ))}

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

            <button
              className="kp-copy"
              style={styles.copyRow}
              onClick={() => copy("email", "sixpodman@gmail.com")}
            >
              <span style={styles.copyLabel}>Email</span>
              <span style={styles.copyValue}>sixpodman@gmail.com</span>
              {copied === "email" ? <Check size={15} /> : <Copy size={15} />}
            </button>
          </div>
        </div>

        {/* ---------------- Column and Essay ---------------- */}
        <div style={styles.essaySection}>
          <p style={styles.eyebrow}>
            COLUMN <span style={styles.eyebrowDash}>&amp;</span>{" "}
            <span style={styles.eyebrowBlue}>ESSAY</span>
          </p>

          <div className="kp-essay-cols" style={styles.essayCols}>
            {ARTICLES.map((group) => (
              <div key={group.year} style={styles.yearBlock}>
                <div style={styles.yearHeader}>
                  <span style={styles.yearNumber}>{group.year}</span>
                  <span style={styles.yearLine} />
                </div>

                <div style={styles.yearItems}>
                  {group.items.map((item, i) =>
                    item.url ? (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="kp-essay-link"
                        style={styles.essayItem}
                      >
                        <span style={styles.essayTitle}>{item.title}</span>
                        <span style={styles.essayDate}>{item.date}</span>
                      </a>
                    ) : (
                      <div
                        key={i}
                        className="kp-essay-static"
                        style={styles.essayItem}
                      >
                        <span style={styles.essayTitle}>{item.title}</span>
                        <span style={styles.essayDate}>비공개</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
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
  ctaRow: { display: "flex", gap: 12, marginBottom: 34, flexWrap: "wrap" },
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
    textDecoration: "none",
    color: "inherit",
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

  /* ---- Column & Essay ---- */
  essaySection: {
    marginTop: 88,
    paddingTop: 44,
    borderTop: "1px solid #D7DCEE",
  },
  essayCols: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: 56,
  },
  yearBlock: {
    breakInside: "avoid",
    marginBottom: 20,
  },
  yearHeader: {
    display: "flex",
    alignItems: "baseline",
    gap: 14,
    marginBottom: 5,
  },
  yearNumber: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    color: "#6D4FE0",
    letterSpacing: "0.14em",
  },
  yearLine: {
    flex: 1,
    height: 1,
    background: "#D7DCEE",
  },
  yearItems: {
    display: "flex",
    flexDirection: "column",
  },
  essayItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 16,
    padding: "5px 6px",
    borderRadius: 8,
    borderLeft: "2px solid transparent",
    textDecoration: "none",
    color: "#0B1220",
  },
  essayTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#0B1220",
    lineHeight: 1.5,
  },
  essayDate: {
    fontSize: 12,
    color: "#9096AC",
    fontWeight: 500,
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
};
