import { BOOKING_URL, ELEKTROEPILIACIJA_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/site-data";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1817] text-white/70 py-14 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl tracking-[0.25em] text-white mb-4">URSANA</div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md mb-4">
              Grožio ir estetinės priežiūros studija Vilniaus centre. Profesionali aparatūra, ilgametė patirtis ir individualus dėmesys kiekvienai klientei.
            </p>
            <p className="text-xs text-white/40">
              UAB „Ursana“ · Įm. k. 125580836 · A. Goštauto g. 3-2, Vilnius
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-medium mb-4">Paslaugos ir nuorodos</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#paslaugos" className="hover:text-white transition-colors">Paslaugų kainoraštis</a>
              </li>
              <li>
                <a
                  href={ELEKTROEPILIACIJA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--gold)] hover:underline"
                >
                  Elektroepiliacija (plaukeliusalinimas.lt)
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="#apie" className="hover:text-white transition-colors">Apie studiją</a>
              </li>
              <li>
                <a href="#galerija" className="hover:text-white transition-colors">Nuotraukų galerija</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-medium mb-4">Rezervacija ir kontaktai</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Treatwell registracija
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="tel:+37065030443" className="hover:text-white transition-colors">+370 650 30443</a>
              </li>
              <li>
                <a href="mailto:ursanasalonas@gmail.com" className="hover:text-white transition-colors">ursanasalonas@gmail.com</a>
              </li>
              <li className="pt-2 flex items-center gap-4 text-xs">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--gold)] transition-colors">Instagram</a>
                <span>·</span>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[var(--gold)] transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} UAB „Ursana“. Visos teisės saugomos.</p>
          <p className="tracking-wide">Goštauto g. 3-2, Vilnius · ursana.lt</p>
        </div>
      </div>
    </footer>
  );
}
