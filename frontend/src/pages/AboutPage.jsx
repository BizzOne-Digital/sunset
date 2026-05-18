import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const IMGS = {
  hero:    'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1800&q=80',
  story:   'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80',
  villa:   'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',
  pool:    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80',
  palm:    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80',
  terrace: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      {/* Hero */}
      <section style={{ position:'relative', height:520, overflow:'hidden' }}>
        <img src={IMGS.hero} alt="Jamaica beach" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 40%' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,18,35,.65) 0%, rgba(10,18,35,.45) 60%, rgba(10,18,35,.7) 100%)' }}/>
        <div className="container" style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', zIndex:2 }}>
          <div style={{ animation:'fadeUp .9s ease .2s both' }}>
            <p className="section-label" style={{ color:'#C9933A' }}>Our Story</p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,6vw,80px)', color:'#FFFFFF', fontWeight:300, margin:'14px 0 16px' }}>About Sunset Retreat JA</h1>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.65)', maxWidth:520 }}>A labour of love — created to share the magic of Jamaica with the world.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background:'#FAF7F2' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:72, alignItems:'center' }}>
            <div>
              <p className="section-label">Who We Are</p>
              <div className="gold-line left"/>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4vw,50px)', color:'#1A2744', margin:'16px 0 20px', fontWeight:400 }}>Born from a Love<br /><em style={{ color:'#C9933A' }}>of Jamaica</em></h2>
              <p style={{ color:'#555', lineHeight:1.95, marginBottom:18, fontSize:16 }}>Sunset Retreat JA was born from a simple belief: everyone deserves to experience the breathtaking beauty of Jamaica in pure luxury and comfort. We have created a private villa experience that blends the warmth of Jamaican hospitality with world-class amenities.</p>
              <p style={{ color:'#555', lineHeight:1.95, marginBottom:34, fontSize:16 }}>From the iconic sunsets over the Caribbean Sea to the sound of waves and tropical birds, every detail of Sunset Retreat JA is designed to make your stay unforgettable. This is not just a rental — it is your home away from home in paradise.</p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:22, marginBottom:36 }}>
                {[['100+','Happy Guests'],['5★','Average Rating'],['7+','Years of Excellence'],['24/7','Guest Support']].map(([n,l]) => (
                  <div key={l} style={{ borderLeft:'2px solid #C9933A', paddingLeft:14 }}>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:34, color:'#1A2744', fontWeight:500 }}>{n}</div>
                    <div style={{ fontSize:11, color:'#888', letterSpacing:'.12em', textTransform:'uppercase' }}>{l}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary" style={{ fontSize:12 }}>Book Your Stay</Link>
            </div>
            <div style={{ position:'relative' }}>
              <div style={{ paddingBottom:'115%', overflow:'hidden', position:'relative' }}>
                <img src={IMGS.story} alt="Jamaica" loading="lazy" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}/>
              </div>
              <div style={{ position:'absolute', top:-16, right:-16, width:130, height:130, overflow:'hidden', border:'4px solid #FAF7F2', zIndex:2 }}>
                <img src={IMGS.pool} alt="Pool" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              </div>
              <div style={{ position:'absolute', bottom:-16, left:-16, background:'#1A2744', padding:'18px 22px', zIndex:2 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:12, color:'#C9933A', letterSpacing:'.15em' }}>EST.</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:30, color:'#FFFFFF', lineHeight:1 }}>2018</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full width image */}
      <section style={{ position:'relative', height:400, overflow:'hidden' }}>
        <img src={IMGS.palm} alt="Paradise" loading="lazy" style={{ width:'100%', height:'115%', objectFit:'cover', marginTop:'-7.5%' }}/>
        <div style={{ position:'absolute', inset:0, background:'rgba(10,18,35,.5)' }}/>
        <div className="container" style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:2, textAlign:'center' }}>
          <div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(24px,4vw,52px)', color:'#FFFFFF', fontWeight:300, lineHeight:1.3 }}>
              "Where the Caribbean sea meets<br /><em style={{ color:'#E8B96A' }}>pure luxury living"</em>
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background:'#1A2744' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <p className="section-label" style={{ color:'#C9933A' }}>Our Promise</p>
            <div className="gold-line"/>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,46px)', color:'#FFFFFF', margin:'16px 0' }}>What Sets Us Apart</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:2 }}>
            {[
              { img: IMGS.villa,   t:'Authentic Luxury',  d:'Every corner of our villa is curated with premium furnishings and local artisan touches.' },
              { img: IMGS.pool,    t:'Warm Hospitality',  d:"Our team is available around the clock to ensure your stay exceeds every expectation." },
              { img: IMGS.terrace, t:'Prime Location',    d:'Positioned to give you the best of Jamaica — beaches, culture, and breathtaking views.' },
              { img: IMGS.story,   t:'Total Privacy',     d:'Your exclusive retreat. No shared spaces, no interruptions — just you and paradise.' },
            ].map(v => (
              <div key={v.t} style={{ position:'relative', overflow:'hidden', height:340 }}
                onMouseEnter={e=>{ e.currentTarget.querySelector('img').style.transform='scale(1.07)'; }}
                onMouseLeave={e=>{ e.currentTarget.querySelector('img').style.transform='scale(1)'; }}
              >
                <img src={v.img} alt={v.t} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .6s ease' }}/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,18,35,.88) 0%,rgba(10,18,35,.2) 55%)' }}/>
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'24px 20px' }}>
                  <div style={{ width:26, height:2, background:'#C9933A', marginBottom:10 }}/>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:'#FFFFFF', fontWeight:400, marginBottom:8 }}>{v.t}</h3>
                  <p style={{ fontSize:13, color:'rgba(255,255,255,.6)', lineHeight:1.7 }}>{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position:'relative', overflow:'hidden', padding:'90px 0', textAlign:'center', background:'#C9933A' }}>
        <div className="container">
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,5vw,56px)', color:'#FFFFFF', fontWeight:300, marginBottom:14 }}>Ready to Experience Jamaica?</h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.8)', marginBottom:36, maxWidth:480, margin:'0 auto 36px' }}>Let Sunset Retreat JA be the backdrop to your most cherished memories.</p>
          <Link to="/contact" style={{ display:'inline-block', background:'#1A2744', color:'#FFFFFF', padding:'15px 40px', fontFamily:"'Jost',sans-serif", fontSize:12, letterSpacing:'.15em', textTransform:'uppercase', transition:'all .3s' }}
            onMouseEnter={e=>e.currentTarget.style.background='#0E1729'}
            onMouseLeave={e=>e.currentTarget.style.background='#1A2744'}
          >Book Your Stay</Link>
        </div>
      </section>

      <Footer />
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </>
  );
}