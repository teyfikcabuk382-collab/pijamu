"use client";
import { useMemo, useState } from "react";
import { products } from "./products";

const categories = ["Todos", "Mujer", "Hombre", "Niños", "Parejas", "Navidad"];
const instagram = "https://www.instagram.com/pijamustore/";
const tiktok = "https://www.tiktok.com/@pijamu.oficial";
const whatsappNumber = "573027406626";

function money(value:number) {
  return new Intl.NumberFormat("es-CO", { style:"currency", currency:"COP", maximumFractionDigits:0 }).format(value);
}
function orderLink(name:string) {
  const message = encodeURIComponent(`Hola PIJAMU 💗 Quiero información sobre: ${name}. ¿Me compartes disponibilidad y cómo comprar?`);
  return whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${message}` : instagram;
}

export default function Home() {
  const [category,setCategory] = useState("Todos");
  const [query,setQuery] = useState("");
  const visible = useMemo(() => products.filter(p => (category==="Todos" || p.category===category) && p.name.toLowerCase().includes(query.toLowerCase())),[category,query]);
  return <main>
    <div className="topline">✨ Pijamas que abrazan tus sueños · Envíos en Colombia ✨</div>
    <header className="nav wrap">
      <a className="brand" href="#"><img src="/images/brand/logo.png" alt="PIJAMU" /></a>
      <nav><a href="#catalogo">Catálogo</a><a href="#nosotros">Nuestra esencia</a><a href="#contacto">Contacto</a></nav>
      <a className="nav-cta" href={instagram} target="_blank" rel="noreferrer">Síguenos <span>↗</span></a>
    </header>
    <section className="hero wrap">
      <div className="hero-copy">
        <span className="eyebrow">DULCES SUEÑOS, MOMENTOS BONITOS</span>
        <h1>Tu momento más <em>cómodo</em> del día.</h1>
        <p>Descubre pijamas llenas de ternura, color y comodidad para ti y para quienes más quieres.</p>
        <div className="hero-actions"><a className="button primary" href="#catalogo">Explorar pijamas <span>♡</span></a><a className="text-link" href={instagram} target="_blank" rel="noreferrer">Ver novedades en Instagram ↗</a></div>
        <div className="trust"><span>♡ Diseños encantadores</span><span>♡ Para toda la familia</span><span>♡ Atención cercana</span></div>
      </div>
      <div className="hero-art"><img src="/images/brand/hero-banner.png" alt="Colección PIJAMU: pijamas y detalles cute" /></div>
      <div className="floating-heart heart-one">♡</div><div className="floating-heart heart-two">♡</div>
    </section>
    <section className="benefits"><div className="wrap benefits-grid"><div><b>01</b><span>Comodidad total</span></div><div><b>02</b><span>Diseños que enamoran</span></div><div><b>03</b><span>Opciones para todos</span></div><div><b>04</b><span>Detalles llenos de amor</span></div></div></section>
    <section className="catalog wrap" id="catalogo">
      <div className="section-head"><div><span className="eyebrow">ENCUENTRA TU FAVORITA</span><h2>Un look bonito para <em>soñar bonito</em></h2><p>Explora nuestras colecciones y encuentra tu próxima pijama favorita.</p></div><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar pijama..." /></div></div>
      <div className="filters">{categories.map(c=><button key={c} className={category===c?"active":""} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="product-grid">{visible.map(p=><article className="product-card" key={p.id}><div className="product-photo"><img src={p.image} alt={p.name}/><span className="tag">{p.tag}</span><a className="quick" href={orderLink(p.name)} target="_blank" rel="noreferrer" aria-label={`Consultar ${p.name}`}>♡</a></div><div className="product-info"><div className="product-category">{p.category}</div><h3>{p.name}</h3><p className="sizes">{p.sizes}</p><div className="product-bottom"><strong>{money(p.price)}</strong><a href={orderLink(p.name)} target="_blank" rel="noreferrer">Consultar <span>↗</span></a></div></div></article>)}</div>
      {visible.length===0 && <p className="empty">No encontramos productos con esa búsqueda. Prueba con otra palabra.</p>}
      <p className="price-note">Precios de venta al público tomados de tu archivo de control. La disponibilidad de modelos y tallas se confirma al realizar el pedido.</p>
    </section>
    <section className="story" id="nosotros"><div className="wrap story-inner"><div className="story-image"><img src="/images/brand/brand-promo.png" alt="Universo PIJAMU"/></div><div className="story-copy"><span className="eyebrow">UN POQUITO DE PIJAMU</span><h2>Pequeños detalles, <em>grandes momentos.</em></h2><p>Creemos que descansar también puede ser un momento especial. Por eso reunimos pijamas con diseños alegres y opciones para compartir en familia, en pareja o disfrutar a tu manera.</p><a className="button light" href={instagram} target="_blank" rel="noreferrer">Conoce más de PIJAMU ↗</a></div></div></section>
    <section className="social wrap" id="contacto"><span className="eyebrow">SIGAMOS CONECTADOS</span><h2>Elige tu próximo <em>momento cute.</em></h2><p>Escríbenos para consultar referencias, tallas y disponibilidad.</p><div className="social-actions"><a className="button primary" href={whatsappNumber?`https://wa.me/${whatsappNumber}`:instagram} target="_blank" rel="noreferrer"> {whatsappNumber?"Comprar por WhatsApp":"Escríbenos por Instagram"} ↗</a><a className="button outline" href={tiktok} target="_blank" rel="noreferrer">TikTok ↗</a><a className="button outline" href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div></section>
    <footer><div className="wrap footer-inner"><img src="/images/brand/logo.png" alt="PIJAMU"/><p>Pijamas & detalles cute</p><span>© {new Date().getFullYear()} PIJAMU. Hecho con cariño 💗</span></div></footer>
    <a className="floating-contact" href={whatsappNumber?`https://wa.me/${whatsappNumber}`:instagram} target="_blank" rel="noreferrer" aria-label="Contactar PIJAMU">♡</a>
  </main>;
}
