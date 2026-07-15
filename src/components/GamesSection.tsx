import cricket from "@/assets/sport-cricket.jpg";
import roulette from "@/assets/game-roulette.jpg";
import teenpatti from "@/assets/game-teenpatti.jpg";
import andarbahar from "@/assets/game-andarbahar.jpg";
import blackjack from "@/assets/game-blackjack.jpg";
import slots from "@/assets/game-slots.jpg";
import dragontiger from "@/assets/game-dragontiger.jpg";
import { WHATSAPP_LINK } from "@/lib/links";

const CRICKET_GAMES = [
  { img: cricket, title: "IPL Betting", desc: "Bet on every IPL match, ball-by-ball live odds.", alt: "Bet on IPL 2026 live online with Mahadev Book India" },
  { img: cricket, title: "T20 World Cup", desc: "ICC T20 & 50-over World Cup live markets.", alt: "T20 World Cup online betting on Mahadev Book India" },
  { img: cricket, title: "Test & ODI", desc: "Test matches, ODIs, BBL, PSL — every league.", alt: "Test, ODI and BBL cricket betting online on Mahadev Book" },
  { img: cricket, title: "Fancy Cricket", desc: "Session, lambi, over runs & toss markets.", alt: "Fancy cricket betting session and lambi on Mahadev Book India" },
];

const CASINO_GAMES = [
  { img: teenpatti, title: "Teen Patti", desc: "India's favourite — 3-card live action.", alt: "Play Teen Patti online real money India on Mahadev Book" },
  { img: andarbahar, title: "Andar Bahar", desc: "Classic Indian card game with live dealers.", alt: "Live Andar Bahar online India with Mahadev Book casino" },
  { img: roulette, title: "Roulette", desc: "European & Lightning roulette tables.", alt: "Play online Roulette India real money on Mahadev Book" },
  { img: blackjack, title: "Live Blackjack", desc: "Real dealers, real-time rounds, real ₹ wins.", alt: "Live Blackjack online India INR — Mahadev Book casino" },
  { img: dragontiger, title: "Dragon Tiger", desc: "Fast-paced card battle, instant results.", alt: "Dragon Tiger live casino India on Mahadev Book" },
  { img: slots, title: "777 Slots", desc: "200+ premium slots with mega jackpots.", alt: "Online 777 slots real money India — Mahadev Book casino" },
];

const Card = ({ img, title, desc, alt }: { img: string; title: string; desc: string; alt: string }) => (
  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
    className="group relative rounded-2xl overflow-hidden border border-gold/20 bg-card hover:border-gold/60 transition-all hover:-translate-y-1 shadow-card hover:shadow-gold">
    <div className="aspect-square overflow-hidden">
      <img src={img} alt={alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={800} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
      <h3 className="font-display font-bold text-lg md:text-xl text-gold mb-1">{title}</h3>
      <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{desc}</p>
      <div className="mt-3 inline-flex items-center text-xs font-semibold text-gold group-hover:gap-2 gap-1 transition-all">
        Play Now →
      </div>
    </div>
  </a>
);

export const GamesSection = () => (
  <>
    <section id="cricket" className="container py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">🏏 Cricket Markets</div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          <span className="text-gradient-gold">Cricket Betting</span> — Every Match, Every Ball
        </h2>
        <p className="text-muted-foreground">From IPL to T20 World Cup, get the best odds in INR on India's most loved sport.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {CRICKET_GAMES.map((g, i) => <Card key={i} {...g} />)}
      </div>
    </section>

    <section id="casino" className="container py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">🎰 Live Casino</div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          <span className="text-gradient-gold">Live Casino</span> & More Games
        </h2>
        <p className="text-muted-foreground">Teen Patti, Andar Bahar, Roulette, Dragon Tiger and 200+ premium slots — all in ₹ Rupees.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {CASINO_GAMES.map((g, i) => <Card key={i} {...g} />)}
      </div>
    </section>
  </>
);
