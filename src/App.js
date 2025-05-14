import React from 'react';

function Navbar() {
  return (
    <nav className="fixed w-full z-10 bg-primary bg-opacity-95 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold text-secondary font-song tracking-widest">时光书</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#product" className="hover:text-accent transition">产品介绍</a>
          <a href="#showcase" className="hover:text-accent transition">纪念书展示</a>
          <a href="#pricing" className="hover:text-accent transition">定价信息</a>
          <a href="#about" className="hover:text-accent transition">关于我们</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-24 pb-16 bg-primary flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-song mb-4 text-secondary">写给爸妈的一本书</h1>
      <p className="text-lg md:text-xl text-secondary mb-8">AI帮你整理父母的一生，生成一本文字与照片交织的纪念书</p>
      <a href="#product" className="px-8 py-3 rounded-full bg-secondary text-primary font-semibold shadow hover:bg-accent hover:text-secondary transition mb-8">了解我们怎么做的</a>
    </section>
  );
}

function ProductIntro() {
  const features = [
    { icon: '🎤', title: '语音讲述', desc: '用手机或微信语音，轻松讲述人生故事' },
    { icon: '🤖', title: 'AI整理', desc: 'AI自动整理内容，结构清晰，情感真实' },
    { icon: '📖', title: '自动排版', desc: '专业排版，图文并茂，适合珍藏' },
    { icon: '🎁', title: '可打印纪念书', desc: '生成电子版和精美纸质纪念书' },
  ];
  return (
    <section id="product" className="py-16 bg-primary">
      <h2 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-8 font-song">产品介绍</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="text-4xl mb-2">{f.icon}</div>
            <div className="font-semibold text-lg mb-1">{f.title}</div>
            <div className="text-sm text-secondary/80">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BookShowcase() {
  return (
    <section id="showcase" className="py-16 bg-primary flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-8 font-song">纪念书展示</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={require('./assets/a8b782e7-4e01-4b44-b230-d69d8ea531b1.png')} alt="纪念书展示" className="w-48 h-64 object-cover rounded-xl shadow-lg bg-primary" style={{background:'#F8F5F0'}} />
        <div className="max-w-xs text-secondary/90 text-center md:text-left">
          <div className="mb-2 font-semibold">80~100页、彩印、可插图、礼品包装</div>
          <div className="text-sm">每一本纪念书都由AI与人工精心打磨，适合送给父母、亲友，永久珍藏。</div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-primary">
      <h2 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-8 font-song">定价信息</h2>
      <div className="max-w-md mx-auto">
        <table className="w-full text-center border border-accent rounded-lg overflow-hidden">
          <thead className="bg-accent/20">
            <tr>
              <th className="py-2">服务类型</th>
              <th className="py-2">价格</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-accent/40">
              <td className="py-3">电子纪念版</td>
              <td className="py-3 text-accent font-bold">88元起</td>
            </tr>
            <tr className="border-t border-accent/40">
              <td className="py-3">精装纪念书</td>
              <td className="py-3 text-accent font-bold">398~1280元</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="py-16 bg-primary flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-4 font-song">关于我们</h2>
      <div className="max-w-xl text-center text-secondary/90 mb-4">
        <p className="mb-2 font-semibold">品牌愿景：</p>
        <p>为每一个普通人，留下一本不普通的人生回忆。</p>
      </div>
      <div className="text-secondary/70">联系方式：shiguangshu2025@163.com</div>
    </section>
  );
}

function App() {
  React.useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary font-song">
      <Navbar />
      <main>
        <Hero />
        <ProductIntro />
        <BookShowcase />
        <Pricing />
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
