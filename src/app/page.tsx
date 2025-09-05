import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoGameController } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Head>
        <title>IF Gamers – Digital mötesplats för barn & ungdomar med IF</title>
        <meta
          name="description"
          content="IF Gamers är en digital mötesplats där barn och ungdomar med intellektuell funktionsnedsättning kan spela spel tillsammans, prata, titta på film och ha kul på Discord. Trygg gemenskap för både spelare och föräldrar."
        />
        <meta
          name="keywords"
          content="IF Gamers, intellektuell funktionsnedsättning, crossplay, barn, ungdomar, spel, Xbox, PlayStation, Nintendo Switch, PC, mobil, Discord"
        />
        <meta name="author" content="IF Gamers" />

        {/* Open Graph för sociala medier */}
        <meta
          property="og:title"
          content="IF Gamers – Spel & gemenskap för barn med IF"
        />
        <meta
          property="og:description"
          content="En trygg digital mötesplats där barn och ungdomar med intellektuell funktionsnedsättning kan spela tillsammans, prata och ha roligt."
        />
        <meta
          property="og:image"
          content="/images/kids-gaming-intelektuell-funktionsnedsättning.png"
        />
        <meta property="og:url" content="https://din-domän.se" />
        <meta property="og:type" content="website" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IF Gamers – Spel & gemenskap för barn med IF"
        />
        <meta
          name="twitter:description"
          content="Digital mötesplats för barn och ungdomar med intellektuell funktionsnedsättning. Spela, prata och ha kul på Discord."
        />
        <meta
          name="twitter:image"
          content="/image/kids-gaming-intelektuell-funktionsnedsättning.png"
        />
      </Head>

      <main className="bg-gray-950 text-gray-100 min-h-screen">
        {/* Hero-sektion */}
        <section className="relative w-full h-[500px] md:h-[900px] flex items-center justify-center">
          <Image
            src="/images/kids-gaming-intelektuell-funktionsnedsättning.png"
            alt="IF Gamers"
            fill
            className="object-cover opacity-50"
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl animate-bounce font-extrabold text-white leading-tight flex items-center justify-center">
              <span className="inline-flex items-center">
                Välkommen till IF GA
                <IoGameController className="w-auto h-auto md:h-16 md:w-16 mx-1" />
                ERS
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-xl md:text-2xl font-medium text-sky-400">
              &quot;En digital mötesplats för barn och tonåringar med IF&quot;
            </p>
          </div>
        </section>

        {/* Om oss-sektion */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-sky-600 mb-4">
                Om vår gemenskap
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Vi har startat en rolig plats på nätet där barn och unga med
                    IF kan träffas. Här kan ni:
                    <br /> • Prata med varandra
                    <br /> • Spela spel tillsammans
                    <br /> • Titta på film eller YouTube
                    <br />
                    Du kan vara med oavsett vilken spelmaskin du har: Xbox,
                    PlayStation, dator, Nintendo Switch, mobil eller Steam Deck.
                    Det finns massor av spel som ni kan spela ihop! Viktigt att
                    veta: Du behöver oftast äga spelen själv. Men det finns
                    också gratis spel att testa!
                    <br />
                    Alla spel går inte att spela mellan olika maskiner. Men det
                    finns många spel som funkar bra att spela ihop, till exempel
                    Minecraft Bedrock, Roblox, Fortnite, Apex Legends och Among
                    Us.
                    <br /> Om du spelar på en surfplatta eller mobil kan det
                    vara lite färre spel att välja på.
                    <br />
                    Du är också välkommen att hänga med oss även om du inte
                    spelar spel! Om du bara vill prata och ha kul med andra barn
                    och unga med IF, så går det jättebra.
                  </p>
                </div>
                <div className="relative h-52 md:w-80 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/spelkonsoller.png"
                    alt="BILD"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vad är Discord-sektion */}
        <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 w-full animate-pulse rounded-lg overflow-hidden">
                <Image
                  src="/images/discord.jpg"
                  alt="En Discord-ikon"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-sky-400 mb-4">
                  Vad är Discord?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  På Discord kan vi vara tillsammans online! Vi kan skicka
                  meddelanden, prata med varandra och spela roliga spel. Det är
                  som en egen klubb för oss. I klubben har vi olika
                  &quot;rum&quot; för olika saker. Ett rum är till för spel, och
                  ett annat är till för att bara snacka, eller kanske kolla på
                  en rolig film eller YouTube-klipp tillsammans!
                </p>
                <p className="text-pink-700 font-semibold mt-10">
                  När du är på nätet, prata med en mamma, pappa eller annan
                  vuxen du litar på. De kan hjälpa dig att komma ihåg vad du får
                  och inte får prata om. Det är viktigt att du är trygg när du
                  är online.
                </p>
                <div className="mt-8 text-center">
                  <Link
                    href="https://discord.gg/PpFwrt3qPu"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gå med i vår Discord-grupp
                  </Link>
                  <p className="text-sky-700 font-semibold mt-10">
                    Om du har problem med länken, vänligen skicka ett
                    e-postmeddelande till{" "}
                    <a
                      href="mailto:josefineeriksson@live.se?subject=Problem%20med%20Discord%20IF%20Gamers&body=Hej%20jag%20har%20problem%20att%20komma%20till%20länken%20för%20Discord%20IF%20Gamers.%20Kan%20du%20hjälpa%20mig."
                      className="text-sky-500 hover:underline"
                    >
                      josefineeriksson@live.se
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* För föräldrar-sektion */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-sky-600 mb-4">
                Information till föräldrar
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Du som är förälder till barn eller ungdomar med IF får gärna
                    gå med och anordna spelkvällar. Din närvaro är också
                    värdefull om konflikter uppstår, eller om barnen har
                    taktiska frågor angående spel.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Tillsammans skapar vi en trygg och rolig miljö för alla.
                  </p>
                </div>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/kids-gamer-if-med-foralder.png"
                    alt="Föräldrar som engagerar sig i spel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ansvarsfriskrivning/Ideell information */}
        <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-sky-600 mb-4">
              Bra att veta
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Sidan och Discord-servern drivs ideellt och är nystartad. Det
              innebär att det inte alltid finns vuxna närvarande som kan höra
              allt som sägs. Vi ska försöka att anordna regelbundna spelkvällar
              med vuxennärvaro för att skapa en trygg miljö. Men först och
              främst vill vi nå ut till fler människor, då vi tror att intresset
              för detta kan vara ganska stort.
            </p>
          </div>
        </section>

        <footer className="bg-gray-950 py-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} IF Gamers. Alla rättigheter
            reserverade. Design by{" "}
            <a
              href="https://kodochdesign.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600"
            >
              Josefine Eriksson Kod & Design
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
