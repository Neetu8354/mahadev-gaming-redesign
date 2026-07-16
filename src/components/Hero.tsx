import heroImg from "@/assets/hero-cricket.jpg";
import { WHATSAPP_LINK } from "@/lib/links";
import { Trophy, Zap, ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cricket stadium with players on field during match" className="w-full h-full object-cover opacity-60" width={1920} height={1080} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative container py-16 sm:py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Trusted Cricket Betting ID
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            <span className="text-gradient-gold">Mahadev Book</span>
            <br />
            <span className="text-foreground">India's Most Trusted</span>
            <br />
            <span className="text-foreground/90 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Online Cricket Betting ID</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Bet on IPL, T20 World Cup, every cricket league plus live casino games like Teen Patti, Andar Bahar, Roulette and more. Instant UPI deposit & withdrawal in <span className="text-gold font-semibold">Indian Rupees ₹</span>. 24x7 WhatsApp support.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="group inline-flex justify-center items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Mahadev Book ID
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full border-2 border-gold/40 text-foreground font-semibold text-sm sm:text-base hover:bg-gold/10 transition-all">
              <svg className="w-5 h-5 text-whatsapp" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="w-4 h-4 text-gold" /> Safe & Secure</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Zap className="w-4 h-4 text-gold" /> Instant UPI Withdrawal</div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Trophy className="w-4 h-4 text-gold" /> 60,000+ Live Events / Month</div>
          </div>
        </div>
      </div>
    </section>
  );
};
