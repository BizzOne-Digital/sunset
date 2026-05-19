import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import ScrollToTop from '../components/ScrollToTop';

const IMGS = {
  hero1:    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1800&q=80',
  hero2:    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80',
  hero3:    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80',
  hero4:    'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1800&q=80',
  about:    'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80',
  pool:     'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80',
  bedroom:  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80',
  dining:   'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80',
  terrace:  'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80',
  beach:    'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900&q=80',
  interior: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
  living:   'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&q=80',
  garden:   'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80',
  couple:   'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80',
  sunset:   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
  pool2:    'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=900&q=80',
};

const amenityCards = [
  { img: IMGS.pool,    label: 'Private Pool',    desc: 'Infinity pool overlooking the Caribbean Sea' },
  { img: IMGS.bedroom, label: 'Luxury Bedrooms', desc: 'Plush king beds & premium Egyptian cotton' },
  { img: IMGS.dining,  label: 'Gourmet Kitchen', desc: 'Fully equipped for private chef experiences' },
  { img: IMGS.terrace, label: 'Ocean Terrace',   desc: 'Private deck with panoramic sea views' },
];

const gallery = [
  { img: IMGS.hero1,   wide: true,  tall: false, cap: 'Villa at golden hour' },
  { img: IMGS.beach,   wide: false, tall: true,  cap: 'Private beach access' },
  { img: IMGS.interior,wide: false, tall: false, cap: 'Luxury interiors' },
  { img: IMGS.living,  wide: false, tall: false, cap: 'Open-plan living' },
  { img: IMGS.sunset,  wide: true,  tall: false, cap: 'Caribbean sunsets' },
  { img: IMGS.garden,  wide: false, tall: false, cap: 'Tropical gardens' },
  { img: IMGS.couple,  wide: false, tall: false, cap: 'Your perfect escape' },
];

const testimonials = [
  { av: 'EJ', name: 'Emily & James T.', origin: 'New York, USA',
    text: 'Absolutely breathtaking. Woke up every morning to that golden Jamaican sunrise. Sunset Retreat is exactly what a luxury escape should feel like — pure paradise.' },
  { av: 'SL', name: 'Sophie Laurent',   origin: 'Paris, France',
    text: 'The villa exceeded every expectation. The pool at sunset, the sound of the ocean… we did not want to leave. Already planning our return to Jamaica!' },
  { av: 'MK', name: 'Marcus & Kezia B.',origin: 'London, UK',
    text: 'From arrival to departure we were treated like royalty. The attention to detail is extraordinary. Jamaica through the lens of Sunset Retreat is unforgettable.' },
];

function useReveal() {
  const [vis, setVis] = useState({});
  const refs = useRef({});
  useEffect(() => {
    const obs = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) setVis(v => ({ ...v, [e.target.dataset.key]: true })); });
    }, { threshold: 0.1 });
    Object.values(refs.current).forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);
  const setRef = key => el => { if (el) refs.current[key] = el; };
  const anim = (key, delay = 0) => ({
    opacity: vis[key] ? 1 : 0,
    transform: vis[key] ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity .85s ease ${delay}s, transform .85s ease ${delay}s`,
  });
  return { setRef, anim };
}

function CIcon({ name }) {
  const p = { width:18, height:18, fill:'none', stroke:'#C9933A', strokeWidth:'1.8', viewBox:'0 0 24 24' };
  if (name==='phone') return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
  if (name==='mail')  return <svg {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
  return <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}

export default function HomePage() {
  const { setRef, anim } = useReveal();
  const [heroIdx, setHeroIdx] = useState(0);
  const heroImgs = [IMGS.hero1, IMGS.hero2, IMGS.hero3, IMGS.hero4];

  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroImgs.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* ── HERO with slideshow ── */}
      <section style={{ position:'relative', height:'100vh', minHeight:680, overflow:'hidden' }}>
        {heroImgs.map((src, i) => (
          <div key={i} style={{
            position:'absolute', inset:0,
            backgroundImage:`url(${src})`,
            backgroundSize:'cover', backgroundPosition:'center',
            opacity: heroIdx===i ? 1 : 0,
            transition:'opacity 1.6s ease',
          }}/>
        ))}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,18,35,.55) 0%, rgba(10,18,35,.25) 45%, rgba(10,18,35,.75) 100%)', zIndex:1 }}/>

        <div className="container" style={{ position:'relative', zIndex:2, height:'100%', display:'flex', alignItems:'center' }}>
          <div style={{ maxWidth:680, animation:'fadeUp 1s ease .25s both' }}>
            <p style={{ fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:'.4em', textTransform:'uppercase', color:'#C9933A', marginBottom:18 }}>
              Luxury Vacation Rental · Jamaica
            </p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(52px,7vw,96px)', fontWeight:600, color:'#FFFFFF', lineHeight:1.08, marginBottom:22, textShadow:'0 2px 12px rgba(0,0,0,.7), 0 4px 40px rgba(0,0,0,.5)' }}>
              Where Every Sunset<br /><em style={{ color:'#E8B96A', fontStyle:'italic' }}>Tells a Story</em>
            </h1>
            <p style={{ fontSize:17, color:'rgba(255,255,255,.75)', maxWidth:460, marginBottom:40, lineHeight:1.85, fontWeight:300 }}>
              Your private luxury villa awaits at the edge of paradise. Relax · Unwind · Escape.
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ padding:'15px 38px', fontSize:12, letterSpacing:'.12em' }}>
                Book Your Stay
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/about" className="btn-outline" style={{ padding:'15px 38px', fontSize:12, letterSpacing:'.12em' }}>
                Explore Villa
              </Link>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', zIndex:3, display:'flex', gap:8 }}>
          {heroImgs.map((_,i) => (
            <button key={i} onClick={() => setHeroIdx(i)} style={{ width:heroIdx===i?28:8, height:8, background:heroIdx===i?'#C9933A':'rgba(255,255,255,.4)', border:'none', cursor:'pointer', borderRadius:4, transition:'all .4s', padding:0 }}/>
          ))}
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section style={{ background:'#1A2744', padding:'22px 0', borderBottom:'1px solid rgba(201,147,58,.15)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:20 }}>
            {[['100+','Happy Guests'],['5★','Average Rating'],['3','Bedrooms'],['24/7','Guest Support'],['1','Exclusive Villa']].map(([n,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:30, color:'#C9933A', fontWeight:500, lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:10, letterSpacing:'.18em', color:'rgba(255,255,255,.4)', textTransform:'uppercase', marginTop:4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-pad" style={{ background:'#FAF7F2' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:72, alignItems:'center' }}>
            <div ref={setRef('ab')} data-key="ab" style={anim('ab')}>
              <p className="section-label">Welcome to Paradise</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(34px,4vw,54px)', color:'#1A2744', fontWeight:400, lineHeight:1.15, margin:'18px 0 22px' }}>
                A Private Sanctuary<br />in <em style={{ color:'#C9933A' }}>Jamaica</em>
              </h2>
              <p style={{ color:'#555', fontSize:16, lineHeight:1.95, marginBottom:18 }}>
                Sunset Retreat JA is more than a vacation rental — it is an experience crafted for those who appreciate the finer things in life. Nestled in Jamaica's most breathtaking landscape, our villa blends world-class luxury with authentic Caribbean warmth.
              </p>
              <p style={{ color:'#555', fontSize:16, lineHeight:1.95, marginBottom:34 }}>
                Whether you seek romance, family bonding, or a complete personal reset — this is your home away from home in paradise.
              </p>
              <div style={{ display:'flex', gap:24, marginBottom:34, flexWrap:'wrap' }}>
                {[['Private Villa','Exclusively yours'],['Ocean Views','Every room'],['Full Amenities','Nothing missing']].map(([t,s]) => (
                  <div key={t} style={{ borderLeft:'2px solid #C9933A', paddingLeft:12 }}>
                    <div style={{ fontSize:13, fontWeight:500, color:'#1A2744' }}>{t}</div>
                    <div style={{ fontSize:12, color:'#C9933A' }}>{s}</div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary" style={{ background:'#1A2744', fontSize:12 }}>
                Discover More
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

            <div ref={setRef('abImg')} data-key="abImg" style={{ ...anim('abImg',.18), position:'relative' }}>
              <div style={{ paddingBottom:'115%', overflow:'hidden', position:'relative' }}>
                <img src={IMGS.about} alt="Jamaica beach" loading="lazy"
                  style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(26,39,68,.35) 0%,transparent 60%)' }}/>
              </div>
              <div style={{ position:'absolute', bottom:-20, left:-20, background:'#C9933A', padding:'18px 22px', zIndex:2 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:32, color:'#FFFFFF', lineHeight:1, fontWeight:600 }}>5★</div>
                <div style={{ fontSize:10, color:'rgba(255,255,255,.85)', letterSpacing:'.15em', textTransform:'uppercase', marginTop:2 }}>Guest Rating</div>
              </div>
              <div style={{ position:'absolute', top:-20, right:-20, width:130, height:130, overflow:'hidden', border:'4px solid #FAF7F2', zIndex:2 }}>
                <img src={IMGS.pool2} alt="Pool view" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITY IMAGE CARDS ── */}
      <section className="section-pad" style={{ background:'#FFFFFF' }}>
        <div className="container">
          <div ref={setRef('amen')} data-key="amen" style={{ ...anim('amen'), textAlign:'center', marginBottom:52 }}>
            <p className="section-label">Villa Highlights</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#1A2744', margin:'16px 0' }}>
              Crafted for <em style={{ color:'#C9933A' }}>Pure Indulgence</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:18 }}>
            {amenityCards.map((a,i) => (
              <div key={a.label} ref={setRef(`ac${i}`)} data-key={`ac${i}`}
                style={{ ...anim(`ac${i}`, i*.1), position:'relative', overflow:'hidden', cursor:'default' }}
                onMouseEnter={e => { e.currentTarget.querySelector('img').style.transform='scale(1.08)'; }}
                onMouseLeave={e => { e.currentTarget.querySelector('img').style.transform='scale(1)'; }}
              >
                <div style={{ paddingBottom:'100%', position:'relative', overflow:'hidden' }}>
                  <img src={a.img} alt={a.label} loading="lazy"
                    style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', transition:'transform .6s ease' }}/>
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,18,35,.82) 0%,rgba(10,18,35,.08) 55%)' }}/>
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'22px 20px' }}>
                    <div style={{ width:26, height:2, background:'#C9933A', marginBottom:9 }}/>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:'#FFFFFF', fontWeight:400 }}>{a.label}</div>
                    <div style={{ fontSize:12, color:'rgba(255,255,255,.6)', marginTop:4 }}>{a.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH PARALLAX QUOTE ── */}
      <section style={{ position:'relative', height:440, overflow:'hidden' }}>
        <img src={IMGS.sunset} alt="Jamaica sunset" loading="lazy"
          style={{ width:'100%', height:'115%', objectFit:'cover', objectPosition:'center 60%', marginTop:'-7.5%' }}/>
        <div style={{ position:'absolute', inset:0, background:'rgba(10,18,35,.55)' }}/>
        <div className="container" style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', textAlign:'center', zIndex:2 }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(26px,5vw,58px)', color:'#FFFFFF', fontWeight:300, lineHeight:1.35, textShadow:'0 2px 20px rgba(0,0,0,.4)' }}>
            "Every moment here becomes<br /><em style={{ color:'#E8B96A' }}>a memory for life"</em>
          </p>
          <div style={{ width:56, height:1, background:'#C9933A', margin:'22px auto' }}/>
          <p style={{ fontSize:12, letterSpacing:'.28em', color:'rgba(255,255,255,.6)', textTransform:'uppercase' }}>Sunset Retreat JA · Jamaica</p>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="section-pad" style={{ background:'#FAF7F2' }}>
        <div className="container">
          <div ref={setRef('pkg')} data-key="pkg" style={{ ...anim('pkg'), textAlign:'center', marginBottom:52 }}>
            <p className="section-label">Stay Packages</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#1A2744', margin:'16px 0' }}>
              Choose Your <em style={{ color:'#C9933A' }}>Perfect Stay</em>
            </h2>
            <p style={{ color:'#777', fontSize:15, maxWidth:500, margin:'0 auto' }}>Every package includes exclusive use of the entire villa — yours and yours alone.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:22 }}>
            {[
              { name:'Weekend Escape',  dur:'2 nights', price:'From $350', badge:null,           dark:false,
                feats:['Private Villa Access','Welcome Drinks','Pool Access','Free WiFi','Airport Transfer'] },
              { name:'Luxury Retreat',  dur:'5 nights', price:'From $780', badge:'Most Popular', dark:true,
                feats:['Private Villa Access','Daily Breakfast','Pool & Beach Access','Sunset Cruise','Personal Concierge','Airport Transfer'] },
              { name:'Honeymoon Bliss', dur:'7 nights', price:'From $1,200',badge:'Special Offer',dark:false,
                feats:['Premium Villa Suite','Romantic Setup','Couples Spa','Private Chef Dinner','Sunset Cruise','All Transfers'] },
            ].map((pkg,i) => (
              <div key={pkg.name} ref={setRef(`pk${i}`)} data-key={`pk${i}`}
                style={{ ...anim(`pk${i}`,i*.13), background:pkg.dark?'#1A2744':'#FFFFFF', border:pkg.dark?'2px solid #C9933A':'1px solid #E0D5C8', padding:'36px 28px', position:'relative', overflow:'hidden', transition:'transform .3s,box-shadow .3s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(0,0,0,.12)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
              >
                {pkg.badge && <div style={{ position:'absolute', top:20, right:-30, background:'#C9933A', color:'#fff', fontSize:9, letterSpacing:'.1em', textTransform:'uppercase', padding:'5px 44px', transform:'rotate(45deg)', transformOrigin:'right center' }}>{pkg.badge}</div>}
                <p style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', color:'#C9933A', marginBottom:8 }}>{pkg.dur}</p>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:pkg.dark?'#FFFFFF':'#1A2744', fontWeight:400, marginBottom:6 }}>{pkg.name}</h3>
                <div style={{ fontSize:24, color:'#C9933A', fontFamily:"'Cormorant Garamond',serif", marginBottom:22 }}>{pkg.price}</div>
                <div style={{ borderTop:`1px solid ${pkg.dark?'rgba(255,255,255,.1)':'#E0D5C8'}`, paddingTop:18, marginBottom:24 }}>
                  {pkg.feats.map(f => (
                    <div key={f} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                      <svg width="12" height="12" fill="none" stroke="#C9933A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
                      <span style={{ fontSize:13, color:pkg.dark?'rgba(255,255,255,.7)':'#555' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" style={{ display:'block', textAlign:'center', padding:'12px', background:pkg.dark?'#C9933A':'transparent', border:`1px solid #C9933A`, color:pkg.dark?'#FFFFFF':'#C9933A', fontFamily:"'Jost',sans-serif", fontSize:11, letterSpacing:'.12em', textTransform:'uppercase', transition:'all .3s' }}
                  onMouseEnter={e=>{ if(!pkg.dark){e.currentTarget.style.background='#C9933A';e.currentTarget.style.color='#fff';} }}
                  onMouseLeave={e=>{ if(!pkg.dark){e.currentTarget.style.background='transparent';e.currentTarget.style.color='#C9933A';} }}
                >Book This Package</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="section-pad" style={{ background:'#1A2744' }}>
        <div className="container">
          <div ref={setRef('gal')} data-key="gal" style={{ ...anim('gal'), textAlign:'center', marginBottom:48 }}>
            <p className="section-label" style={{ color:'#C9933A' }}>Gallery</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#FFFFFF', margin:'16px 0' }}>
              See Your <em>Paradise</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gridAutoRows:'200px', gap:8 }}>
            {gallery.map((g,i) => (
              <div key={i} ref={setRef(`gi${i}`)} data-key={`gi${i}`}
                style={{ ...anim(`gi${i}`,i*.07), gridColumn:g.wide?'span 2':'span 1', gridRow:g.tall?'span 2':'span 1', overflow:'hidden', position:'relative', cursor:'pointer' }}
                onMouseEnter={e=>{ e.currentTarget.querySelector('img').style.transform='scale(1.08)'; e.currentTarget.querySelector('.cap').style.opacity='1'; }}
                onMouseLeave={e=>{ e.currentTarget.querySelector('img').style.transform='scale(1)'; e.currentTarget.querySelector('.cap').style.opacity='0'; }}
              >
                <img src={g.img} alt={g.cap} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .6s ease' }}/>
                <div className="cap" style={{ position:'absolute', inset:0, background:'rgba(10,18,35,.52)', display:'flex', alignItems:'flex-end', padding:16, opacity:0, transition:'opacity .35s' }}>
                  <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, color:'#FFFFFF', fontStyle:'italic' }}>{g.cap}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (image + list) ── */}
      <section className="section-pad" style={{ background:'#FFFFFF' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:72, alignItems:'center' }}>
            {/* Image collage */}
            <div ref={setRef('wi')} data-key="wi" style={{ ...anim('wi'), position:'relative' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                <div style={{ paddingBottom:'130%', position:'relative', overflow:'hidden' }}>
                  <img src={IMGS.interior} alt="Villa interior" loading="lazy" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}/>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  <div style={{ flex:1, position:'relative', overflow:'hidden' }}>
                    <img src={IMGS.living} alt="Living room" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }}/>
                  </div>
                  <div style={{ flex:1, position:'relative', overflow:'hidden' }}>
                    <img src={IMGS.garden} alt="Garden" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }}/>
                  </div>
                </div>
              </div>
              <div style={{ position:'absolute', bottom:-16, right:-16, background:'#1A2744', padding:'20px 24px', zIndex:2 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:12, color:'#C9933A', letterSpacing:'.15em', textTransform:'uppercase' }}>Est.</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:'#FFFFFF', lineHeight:1 }}>2018</div>
              </div>
            </div>

            <div ref={setRef('wt')} data-key="wt" style={anim('wt',.2)}>
              <p className="section-label">The Experience</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4vw,50px)', color:'#1A2744', margin:'18px 0 24px', fontWeight:400 }}>
                Why Guests Choose<br /><em style={{ color:'#C9933A' }}>Sunset Retreat</em>
              </h2>
              {[
                { t:'Authentic Luxury',   d:'Curated with premium furnishings and local Jamaican artisan touches throughout.' },
                { t:'Total Privacy',      d:'The entire villa is exclusively yours — no shared spaces, no interruptions.' },
                { t:'Prime Location',     d:'Positioned for the best of Jamaica — beaches, culture, and breathtaking views.' },
                { t:'Warm Hospitality',   d:'Our team is available around the clock to ensure every expectation is exceeded.' },
              ].map(({ t, d }) => (
                <div key={t} style={{ display:'flex', gap:16, marginBottom:22 }}>
                  <div style={{ width:40, height:40, background:'rgba(201,147,58,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg width="16" height="16" fill="none" stroke="#C9933A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
                  </div>
                  <div>
                    <p style={{ fontWeight:500, color:'#1A2744', fontSize:15, marginBottom:4 }}>{t}</p>
                    <p style={{ fontSize:14, color:'#666', lineHeight:1.75 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad" style={{ background:'#0E1729', overflow:'hidden', position:'relative' }}>
        <div style={{ position:'absolute', top:-100, right:-100, width:450, height:450, borderRadius:'50%', background:'rgba(201,147,58,.04)', pointerEvents:'none' }}/>
        <div className="container">
          <div ref={setRef('tes')} data-key="tes" style={{ ...anim('tes'), textAlign:'center', marginBottom:52 }}>
            <p className="section-label" style={{ color:'#C9933A' }}>Guest Stories</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,48px)', color:'#FFFFFF', margin:'16px 0' }}>
              Words from Our <em>Guests</em>
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
            {testimonials.map((t,i) => (
              <div key={t.name} ref={setRef(`te${i}`)} data-key={`te${i}`}
                style={{ ...anim(`te${i}`,i*.14), background:'rgba(255,255,255,.04)', border:'1px solid rgba(201,147,58,.18)', padding:'36px 28px', transition:'border-color .3s' }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(201,147,58,.5)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(201,147,58,.18)'}
              >
                <div style={{ display:'flex', gap:2, marginBottom:18 }}>
                  {Array(5).fill(0).map((_,si)=><svg key={si} width="13" height="13" viewBox="0 0 24 24" fill="#C9933A"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
                </div>
                <svg width="22" height="16" viewBox="0 0 24 18" fill="rgba(201,147,58,.25)" style={{ marginBottom:14 }}>
                  <path d="M0 18V10.8C0 7.6.9 5 2.7 3S7.2 0 10.8 0v2.4C9 2.4 7.6 3 6.6 4.2S5.4 6.8 5.4 8.4H9V18H0zm13.2 0V10.8c0-3.2.9-5.8 2.7-7.8S20.4 0 24 0v2.4c-1.8 0-3.2.6-4.2 1.8s-1.5 2.8-1.5 4.2H22.2V18H13.2z"/>
                </svg>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:'rgba(255,255,255,.82)', lineHeight:1.78, fontStyle:'italic', marginBottom:24 }}>{t.text}</p>
                <div style={{ borderTop:'1px solid rgba(201,147,58,.18)', paddingTop:16, display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:40, height:40, borderRadius:'50%', background:'rgba(201,147,58,.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, color:'#C9933A', fontWeight:600 }}>{t.av}</div>
                  <div>
                    <p style={{ fontSize:13, color:'#FFFFFF', fontWeight:500 }}>{t.name}</p>
                    <p style={{ fontSize:11, color:'#C9933A', marginTop:1 }}>{t.origin}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section className="section-pad" style={{ background:'#1A2744' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:80, alignItems:'start' }}>
            <div ref={setRef('bk')} data-key="bk" style={anim('bk')}>
              <p className="section-label" style={{ color:'#C9933A' }}>Reservations</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,46px)', color:'#FFFFFF', margin:'18px 0 18px', fontWeight:400 }}>
                Begin Your<br /><em style={{ color:'#E8B96A' }}>Journey</em>
              </h2>
              <p style={{ color:'rgba(255,255,255,.5)', fontSize:15, lineHeight:1.85, marginBottom:36 }}>
                Fill out the form and we will get back to you within 24 hours with availability and details for your Jamaican getaway.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                {[{n:'phone',l:'Call / WhatsApp',v:'+1 876 268 9319',h:'tel:+18762689319'},{n:'mail',l:'Email',v:'sunsetretreatja@gmail.com',h:'mailto:sunsetretreatja@gmail.com'},{n:'map',l:'Location',v:'Jamaica, Caribbean',h:null}].map(({ n,l,v,h }) => (
                  <div key={l} style={{ display:'flex', alignItems:'center', gap:14 }}>
                    <div style={{ width:44,height:44,border:'1px solid rgba(201,147,58,.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                      <CIcon name={n}/>
                    </div>
                    <div>
                      <p style={{ fontSize:9,letterSpacing:'.2em',textTransform:'uppercase',color:'#C9933A',marginBottom:3 }}>{l}</p>
                      {h ? <a href={h} style={{ fontSize:14,color:'rgba(255,255,255,.7)',transition:'color .3s' }} onMouseEnter={e=>e.target.style.color='#C9933A'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.7)'}>{v}</a>
                         : <p style={{ fontSize:14,color:'rgba(255,255,255,.7)' }}>{v}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={setRef('bkf')} data-key="bkf" style={anim('bkf',.2)}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ height:420, position:'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484772.35944!2d-77.5!3d18.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed9612ecf2a7a01%3A0xd44ac90be5a9b5d3!2sJamaica!5e0!3m2!1sen!2s!4v1716000000000"
          style={{ width:'100%', height:'100%', border:0, filter:'grayscale(20%) contrast(1.05)' }}
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
        />
        <div style={{ position:'absolute', top:28, left:28, background:'#1A2744', padding:'16px 20px', borderLeft:'3px solid #C9933A', zIndex:2 }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, color:'#FFFFFF' }}>Sunset Retreat JA</p>
          <p style={{ fontSize:12, color:'rgba(255,255,255,.55)', marginTop:4 }}>Jamaica, Caribbean</p>
        </div>
      </section>

      <Footer />
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:600px){
          div[style*="repeat(4,1fr)"]{grid-template-columns:1fr 1fr!important}
        }
      `}</style>
    </>
  );
}