"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import IntroVideo from "./components/IntroVideo";
import ThankYouSection from "./components/ThankYouSection";
import {
  DoorOpen,
  Cross,
  Cake,
  Star,
  Utensils,
  Grid2X2,
  Music,
  Heart,
} from "lucide-react";

const verses = [
  ["Beautiful", "PSALM 139:14"],
  ["Chosen", "PSALM 139:14"],
  ["A Child Of God", "PSALM 139:14"],
  ["Created In His Image", "PSALM 139:14"],
  ["Made For A Purpose", "PSALM 139:14"],
  ["A Conqueror", "JEREMIAH 31:3"],
  ["Loved Forever", "JEREMIAH 31:3"],
];
const palettes = ["#D0C5A5", "#F1E8D6", "#C5AD89", "#9E9077"];
const events = [
  { title: "Grand Entry", time: "8:15 PM", icon: DoorOpen },
  { title: "Prayer", time: "8:30 PM", icon: Cross },
  { title: "Cake Cutting", time: "8:45 PM", icon: Cake },
  { title: "Surprise Performance", time: "9:00 PM", icon: Star },
  {
    title: "Buffet Opens",
    subtitle: "Dinner for guests",
    time: "9:15 PM",
    icon: Utensils,
  },
  {
    title: "Games",
    subtitle: "Fun games for guests",
    time: "9:30 PM",
    icon: Grid2X2,
  },
  {
    title: "Music & Dance",
    subtitle: "Open floor for all guests",
    time: "9:45 PM",
    icon: Music,
  },
  { title: "Thank You & Close", time: "11:30 PM", icon: Heart },
];

export default function Home() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch {}
  }, [started]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [startMusic]);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#AF6327] text-white px-3 py-2 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/christian.mp3" loop preload="auto" playsInline />
 <IntroVideo onFinish={() => setIntroDone(true)} />
      <div className="relative w-full min-h-screen bg-[url('/assets/hero-image.webp')] bg-cover bg-center bg-no-repeat">
        {/* <img src="/assets/hero_top.webp" alt="hero_top" className="w-full" /> */}

        <div className="relative z-10 flex flex-col justify-center items-center pt-15">
          {/* <img src="/assets/element1.png" alt="element1" className="w-40" /> */}

          <h2 className="cormorant-garamond text-2xl md:text-3xl lg:text-[40px] text-[#AF630E] mt-4">
            A Journey of Faith
          </h2>

          <img
            src="/assets/element2.png"
            alt="element2"
            className="md:w-40 w-20 mt-4"
          />
        </div>

        <section className="relative z-10 w-full flex justify-center py-10 px-4">
          <div className="relative w-full max-w-[500px] aspect-[493/640] overflow-hidden">
            {/* <div className="absolute top-[16%] left-[14%] z-10">
              <span className="pinyon-script-regular md:text-3xl  text-2xl text-[#77663d]">
                I AM
              </span>
            </div> */}

            <img
              src="/assets/sign.webp"
              alt="Floral Cross"
              className="absolute inset-0 w-full h-full object-contain"
            />

            <div className="absolute left-[14%] top-[49%] z-10">
              <span
                className="pinyon-script-regular md:text-[60px] text-[50px] text-[#77663d]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Carlson
              </span>
            </div>

            <div className="absolute md:right-[1%] left-[65%]  top-[44%] z-10 flex flex-col md:gap-[13px] gap-[7px]">
              {verses.map(([title, verse]) => (
                <div key={title}>
                  <p className="font-serif italic md:text-[17px] text-[12px] text-[#82775e]">
                    {title}
                  </p>
                  <p className="text-[8px] tracking-wide text-[#82775e] mt-0.5">
                    {verse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <p className="pinyon-script-regular md:text-6xl text-4xl text-[#77663d] text-center my-20">
          Carlson’s First <br />
          Holy Communion
        </p>

        <div className="flex flex-col items-center justify-center">
          <div className="relative z-10 flex flex-col items-center pl-5 md:pl-12 bg-[url('/assets/communicant.webp')] bg-cover bg-center bg-no-repeat w-90 h-90 md:w-200 md:h-200 md:pt-40 pt-12 md:mt-20">
            <img src="/assets/element1.png" alt="element1" className="md:w-40 w-20" />

            <h2 className="cormorant-garamond text-[16px] md:text-2xl lg:text-[40px] text-[#AF630E] mt-4">
              Meet Out
            </h2>
            <h2 className="pinyon-script-regular text-2xl md:text-5xl lg:text-[60px] text-[#AF630E]">
              Communicant
            </h2>
            <img
              src="/assets/element2.png"
              alt="element2"
              className="w-20 md:w-40 mb-2 md:mb-4"
            />
            <h2 className="montserrat text-[12px] md:text-xl lg:text-[20px] text-[#AF630E]">
              A Heart Full of Faith & Gratitude
            </h2>
            <h2 className="montserrat text-[10px] md:text-xl lg:text-[14px] text-[#AF630E] text-center mt-2 px-20 md:px-40">
              With profound faith and immense gratitude, I am honoured to invite you to rejoice with me in celebrating this sacred milestone, as I received Jesus in the Holy Eucharist for the first time.
            </h2>
          </div>

          <img
            src="/assets/element3.webp"
            alt="element2"
            className="md:w-3/7 w-2/3 md:mt-40 mt-30"
          />

          <img
            src="/assets/element2.png"
            alt="element2"
            className="w-40 mb-4 mt-10"
          />

          <section className="w-full py-4 px-4 md:px-8">
            <div className="max-w-[650px] mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-[17px] top-5 bottom-5 w-px bg-[#d9c9a8]" />

              <div className="flex flex-col gap-4">
                {events.map((event, index) => {
                  const Icon = event.icon;

                  return (
                    <div
                      key={index}
                      className="relative flex items-center gap-4"
                    >
                      {/* Icon Circle */}
                      <div className="relative z-10 w-[35px] h-[35px] shrink-0 rounded-full border border-[#c9b58b] bg-[#fffdf8] flex items-center justify-center text-[#8c805d]">
                        <Icon size={16} strokeWidth={1.6} />
                      </div>

                      {/* Event Card */}
                      <div className="flex-1 min-w-0 flex items-center justify-between gap-2 border border-[#e8ddcc] rounded-[13px] px-4 py-3 bg-white/20 shadow-[0_1px_3px_rgba(120,90,50,0.03)]">
                        <div className="min-w-0">
                          <h3 className="montserrat font-semibold text-[#827953] text-[16px] md:text-[19px] leading-tight">
                            {event.title}
                          </h3>

                          {event.subtitle && (
                            <p className="text-[11px] md:text-[12px] italic text-[#82715d] mt-1">
                              {event.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Time */}
                        <span className="shrink-0 rounded-full border border-[#ded4c2] bg-[#fffdf8] px-3 py-1 text-[12px] md:text-[15px] font-semibold text-[#827d5e] leading-none">
                          {event.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <h2 className="montserrat text-[15px] md:text-xl lg:text-[20px] text-[#827953] font-bold mt-24">
            SARTORIAL ETIQUETTE
          </h2>
          <h2 className="cormorant-garamond text-3xl md:text-3xl lg:text-[60px] text-[#7E6628] text-center">
            Attire Guide
          </h2>
          <h2 className="montserrat text-[15px] md:text-xl lg:text-[18px] text-[#827953] text-center mt-2 font-semibold">
            We would love to see you in your formal attire.
          </h2>

          <section className="w-full py-10 px-5 md:px-8">
            <div className="max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 items-center">
              {/* Card 1 - Gentlemen */}
              <div className="bg-[#FFFCF7] rounded-[18px] md:min-h-[435px] px-6 py-8 flex flex-col items-center text-center justify-between">
                <div>
                  <p className="montserrat text-[14px] tracking-widest text-[#77652E]">
                    01 / CURATED
                  </p>
                  <h2 className="cormorant-garamond text-[28px] text-[#786637] leading-tight font-semibold">
                    Gentlemen
                  </h2>
                  <p className="montserrat text-[16px] text-[#858065]">
                    Black and White
                  </p>
                </div>

                {/* Black & White Circles */}
                <div className="flex items-center justify-center -space-x-6 py-5">
                  <div className="w-[84px] h-[84px] rounded-full bg-[#1C1C19] shadow-lg" />
                  <div className="w-[84px] h-[84px] rounded-full bg-white border border-[#D8D0B7] shadow-lg" />
                </div>

                {/* <p className="montserrat text-[14px] leading-[19px] text-[#817D63] max-w-[220px]">
                  Classic tuxedo or bespoke dark suit paired with crisp linen
                  and formal accents.
                </p> */}
              </div>

              {/* Card 2 - Ladies */}
              <div className="bg-[#FFFCF7] rounded-[18px] md:min-h-[455px] px-6 py-8 flex flex-col items-center justify-between text-center">
                <div>
                  <p className="montserrat text-[14px] tracking-widest text-[#77652E]">
                    02 / PALETTE
                  </p>
                  <h2 className="cormorant-garamond font-semibold text-[28px] text-[#786637] leading-tight">
                    Ladies
                  </h2>
                  <p className="montserrat text-[16px] text-[#858065]">
                    Shades of Beige
                  </p>
                </div>

                {/* Beige Palette */}
                <div className="flex items-center justify-center gap-3 py-5">
                  {palettes.map((color, index) => (
                    <div
                      key={index}
                      className="w-[47px] h-[85px] rounded-full border border-[#E7DDCB]"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* <p className="montserrat text-[14px] leading-[19px] text-[#817D63] max-w-[240px]">
                  Floor-length evening gowns or refined cocktail silhouette in
                  soft warm neutrals.
                </p> */}
              </div>

              {/* Card 3 - Kids */}
              <div className="bg-[#FFFCF7] rounded-[18px] min-h-[435px] px-6 py-8 flex flex-col items-center text-center">
                <div>
                  <p className="montserrat text-[14px] tracking-widest text-[#77652E] leading-4">
                    03 / LITTLE
                    <br />
                    GUESTS
                  </p>
                  <h2 className="cormorant-garamond font-semibold text-[28px] text-[#786637] leading-tight">
                    Kids
                  </h2>
                  <p className="montserrat text-[16px] text-[#858065]">
                    Charming Details
                  </p>
                </div>

                {/* Boys */}
                <div className="flex items-center gap-4 mt-6 justify-center">
                  <img
                    src="/assets/element4.png"
                    alt="element2"
                    className="w-1/5"
                  />
                  <div className="text-left">
                    <p className="libre-caslon-text-regular text-[12px] font-bold text-[#786637]">
                      BOYS
                    </p>
                    <p className="montserrat text-[14px] text-[#817D63]">
                      Black
                    </p>
                    <p className="montserrat text-[14px] text-[#817D63]">
                      Bow Tie
                    </p>
                  </div>
                </div>

                <div className="w-14 h-px bg-[#E1D7C5] my-5" />

                {/* Girls */}
                <div className="flex items-center gap-4 justify-center">
                  <img
                    src="/assets/element5.png"
                    alt="element2"
                    className="w-1/5"
                  />
                  <div className="text-left">
                    <p className="libre-caslon-text-regular text-[12px] font-bold text-[#786637]">
                      GIRLS
                    </p>
                    <p className="montserrat text-[14px] text-[#817D63]">
                      Beige
                    </p>
                    <p className="montserrat text-[14px] text-[#817D63]">
                      Bow in <br/> Hair
                    </p>
                  </div>
                </div>

                <p className="montserrat text-[14px] leading-[19px] text-[#817D63] mt-auto pt-5">
                  Delightful accents for our cherished young celebrants.
                </p>
              </div>
            </div>
          </section>


          <ThankYouSection/>
        </div>
      </div>

      
    </>
  );
}
