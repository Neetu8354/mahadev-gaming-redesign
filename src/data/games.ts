import sportCricket from "@/assets/sport-cricket.jpg";
import gameTeenpatti from "@/assets/game-teenpatti.jpg";
import gameAndar from "@/assets/game-andarbahar.jpg";
import gameRoulette from "@/assets/game-roulette.jpg";
import gameDragon from "@/assets/game-dragontiger.jpg";

export interface GameDef {
  slug: string;
  shortName: string;
  category: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  image: string;
  alt: string;
  features: { title: string; text: string }[];
  sections: { h2: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const GAMES: GameDef[] = [
  {
    slug: "cricket",
    shortName: "Cricket Betting",
    category: "Sports",
    title: "Cricket Betting India: IPL, T20 & Live Odds | Mahadev Book",
    h1: "Online Cricket Betting India — Live Match Odds and Markets",
    description: "Play online cricket betting in India on Mahadev Book — IPL, T20 World Cup, BBL, PSL, Tests & ODIs. Match-odds, fancy, session, lambi & toss. UPI deposit, INR withdrawal, 24x7 support.",
    intro: "Mahadev Book is an online cricket betting platform — bet on IPL matches, T20 World Cup, BBL, PSL, Tests and ODIs with live odds in INR.",
    image: sportCricket,
    alt: "Cricket stadium with players during match",
    features: [
      { title: "IPL & T20 Live Odds", text: "Ball-by-ball match-odds, bookmaker, fancy, session and toss markets." },
      { title: "60,000+ Events / Month", text: "Every league worldwide — IPL, BBL, PSL, CPL, county, women's." },
      { title: "Instant INR Payout", text: "UPI withdrawal in 5–15 minutes — PhonePe, Google Pay, Paytm." },
    ],
    sections: [
      { h2: "How to Bet on Live Cricket Matches Online", body: "Get your Mahadev Book ID via WhatsApp, deposit ₹100 minimum via UPI, and place your first match-odds bet within 2 minutes. We support session, lambi, fancy and toss markets ball-by-ball." },
      { h2: "Best Online Sports Betting Platform for Beginners", body: "Mahadev Book is built for first-timers — clean exchange interface, real INR balance, instant withdrawal, and 24x7 Hindi support to walk you through your first bet." },
      { h2: "Live Cricket Betting Tips Online", body: "Read our pro tipsters' IPL strategy guide, bankroll-management rules, and pitch-report breakdowns inside the blog. Always bet only what you can afford to lose — 18+ only." },
    ],
    faq: [
      { q: "Is online cricket betting legal in India?", a: "Online betting laws vary by state. Use exchange-style platforms responsibly and only if permitted in your state. 18+ only." },
      { q: "How fast are cricket bet payouts?", a: "Most cricket bet payouts settle to your Mahadev Book wallet within seconds of match settlement. UPI withdrawal: 5–15 minutes." },
      { q: "What is the minimum cricket bet?", a: "₹10 on most exchange markets, ₹100 minimum deposit." },
    ],
  },
  {
    slug: "teen-patti",
    shortName: "Teen Patti",
    category: "Live Casino",
    title: "Play Teen Patti Online Real Money India — Live 24x7 | Mahadev Book",
    h1: "Play Teen Patti Online Real Money — Live Indian Card Game",
    description: "Play Teen Patti online real money India on Mahadev Book — live dealers 24x7, AA Bonus, side bets, ₹100 minimum. UPI deposit & instant INR withdrawal. India's Teen Patti site.",
    intro: "Teen Patti is India's favourite 3-card game. Play live, against real dealers, 24x7 on Mahadev Book — with AA Bonus, side bets and big jackpots, all in INR.",
    image: gameTeenpatti,
    alt: "Play Teen Patti online real money India on Mahadev Book live casino",
    features: [
      { title: "Live Indian Dealers", text: "Real dealers, real-time hands, full HD streaming 24x7." },
      { title: "Multiple Variants", text: "Classic Teen Patti, 20-20, Joker, Muflis, AK47 and more." },
      { title: "Side Bets & Jackpots", text: "AA Bonus, Pair Plus and progressive jackpots up to ₹1 Cr." },
    ],
    sections: [
      { h2: "How to Play Teen Patti Online with Mahadev Book", body: "Get your Mahadev Book ID via WhatsApp, deposit ₹100 minimum via UPI, and join any live Teen Patti table. Bet from ₹10 per hand. Win in real INR, withdraw to any Indian bank." },
      { h2: "Teen Patti Strategy & Tips", body: "Bankroll discipline beats card luck. Set table limits, fold weak hands, and use AA Bonus for value plays. See our full Teen Patti strategy guide on the blog." },
    ],
    faq: [
      { q: "Can I play Teen Patti for real money in India?", a: "Yes — get a Mahadev Book ID via WhatsApp and play live Teen Patti with INR deposits. 18+ only." },
      { q: "What is the minimum Teen Patti bet?", a: "₹10 per hand on most live tables." },
      { q: "How fast is Teen Patti payout?", a: "Winnings credit to your wallet instantly. UPI withdrawal in 5–15 minutes." },
    ],
  },
  {
    slug: "andar-bahar",
    shortName: "Andar Bahar",
    category: "Live Casino",
    title: "Play Andar Bahar Online India — Live Real Money 24x7 | Mahadev Book",
    h1: "Play Andar Bahar Online — Live Indian Card Game Real Money",
    description: "Play Andar Bahar online real money India on Mahadev Book — live dealers, side bets, ₹100 min deposit. Instant UPI withdrawal in INR. Classic Indian casino game 24x7.",
    intro: "Andar Bahar is the simplest, fastest, most loved Indian casino game. Play live on Mahadev Book — real dealers, real INR, 24x7.",
    image: gameAndar,
    alt: "Play live Andar Bahar online India real money on Mahadev Book",
    features: [
      { title: "Live Dealers 24x7", text: "Indian dealers, real-time rounds, HD live stream." },
      { title: "Side Bets & Multipliers", text: "First Card, Andar/Bahar streak bonus, lucky multipliers." },
      { title: "₹10 to ₹10 Lakh", text: "Play any stake — micro to high-roller, all on the same table." },
    ],
    sections: [
      { h2: "How to Play Andar Bahar Online", body: "Pick Andar (inside) or Bahar (outside). Dealer reveals cards alternately until your side matches. Get your Mahadev Book ID, deposit ₹100 via UPI, and join any live table." },
      { h2: "Andar Bahar Strategy", body: "Statistically Bahar wins ~51% — but each round is independent. Use flat-stake strategy and side bets for value. Read our full Andar Bahar guide on the blog." },
    ],
    faq: [
      { q: "Is Andar Bahar online safe?", a: "Yes — Mahadev Book uses certified live tables with real dealers and encrypted transactions." },
      { q: "Andar Bahar payout speed?", a: "Wins credit instantly. UPI withdrawal: 5–15 minutes." },
      { q: "Minimum Andar Bahar bet?", a: "₹10 per round." },
    ],
  },
  {
    slug: "roulette",
    shortName: "Roulette",
    category: "Live Casino",
    title: "Play Online Roulette India Real Money — European & Lightning | Mahadev Book",
    h1: "Online Roulette India — Live European, Lightning & Auto Roulette",
    description: "Play online Roulette India real money on Mahadev Book — European, Lightning & Auto Roulette tables 24x7. ₹100 min deposit, INR withdrawal via UPI. Live HD dealers.",
    intro: "Spin live European, Lightning and Auto Roulette tables on Mahadev Book — real dealers, real INR, 24x7.",
    image: gameRoulette,
    alt: "Play live online Roulette India real money on Mahadev Book casino",
    features: [
      { title: "European, Lightning, Auto", text: "Lowest house edge European wheel + 500x Lightning multipliers." },
      { title: "₹50 to ₹5 Lakh", text: "Any stake — micro spins to VIP high-roller tables." },
      { title: "Real Live Dealers", text: "HD streaming, real wheels, real-time results 24x7." },
    ],
    sections: [
      { h2: "How to Play Online Roulette in India", body: "Get your Mahadev Book ID via WhatsApp, deposit ₹100 via UPI, choose any Roulette table, place chips on numbers/colours/columns and spin. Wins credit instantly to your INR balance." },
      { h2: "Best Roulette Strategy", body: "European Roulette has the lowest house edge (2.7%). Outside bets like Red/Black give ~50% win chance. Read our Roulette strategy guide for Martingale, D'Alembert and Fibonacci systems." },
    ],
    faq: [
      { q: "Is online Roulette legal in India?", a: "Online casino laws vary by state. 18+ only and play responsibly." },
      { q: "Roulette payout speed?", a: "Wins credit instantly. UPI withdrawal in 5–15 minutes." },
      { q: "Minimum Roulette bet?", a: "₹50 per spin on most live tables." },
    ],
  },
  {
    slug: "dragon-tiger",
    shortName: "Dragon Tiger",
    category: "Live Casino",
    title: "Play Dragon Tiger Online India — Live Card Game Real Money | Mahadev Book",
    h1: "Dragon Tiger Online India — Fast Live Card Game",
    description: "Play Dragon Tiger online India on Mahadev Book — fastest live card game, ₹100 min deposit, instant INR withdrawal via UPI. 30-second rounds, real dealers 24x7.",
    intro: "Dragon Tiger is the fastest live casino game — 30-second rounds, single card per side, easy 50/50 bets. Play on Mahadev Book in INR 24x7.",
    image: gameDragon,
    alt: "Dragon Tiger live casino card game online India on Mahadev Book",
    features: [
      { title: "30-Second Rounds", text: "Fastest live game — 100+ rounds per hour." },
      { title: "Simple Bets", text: "Dragon, Tiger, Tie or Suited Tie — that's it." },
      { title: "Live HD Dealers", text: "Real dealers, real cards, real-time HD streaming." },
    ],
    sections: [
      { h2: "How to Play Dragon Tiger Online", body: "Pick Dragon or Tiger (or Tie). Dealer draws one card on each side — highest card wins. Get your Mahadev Book ID via WhatsApp and play in INR with ₹100 min deposit." },
      { h2: "Dragon Tiger Strategy", body: "Avoid Tie bets (8:1 payout but high house edge). Use card-counting on shoe-based variants for small edges. Always set a session budget." },
    ],
    faq: [
      { q: "Dragon Tiger payout speed?", a: "Instant credit, UPI withdrawal in 5–15 minutes." },
      { q: "Minimum Dragon Tiger bet?", a: "₹10 per round." },
      { q: "Is Dragon Tiger online safe on Mahadev Book?", a: "Yes — certified live tables, real dealers, encrypted transactions." },
    ],
  },
];
