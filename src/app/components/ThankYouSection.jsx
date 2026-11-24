"use client";
import { MapPin, Camera } from "lucide-react";
export default function ThankYouSection() {
  return (
    <>
      <section className="relative w-full min-h-[500px] md:min-h-[580px] overflow-hidden flex justify-center">
        {/* Top Left Floral Decoration */}
        <img
          src="/assets/element6.png"
          alt="Floral Decoration"
          className="absolute top-0 left-0 w-[180px] md:w-[300px] h-auto object-contain object-left-top"
        />

        {/* Center Content */}
        <div className="relative z-10 w-full max-w-[700px] flex flex-col justify-center  items-center text-center px-6 pt-24 md:pt-28 pb-48 md:pb-32">
          <img src="/assets/element1.png" alt="element1" className="w-40" />
          <h2 className="cormorant-garamond text-[#887344] text-xl md:text-[36px] mt-4">
            A Heartfelt Thank You
          </h2>

          <img
            src="/assets/element2.png"
            alt="element2"
            className="md:w-40 w-20 mb-4"
          />

          <h3 className="montserrat text-[#83775C] text-[11px] md:text-[18px] mb-3">
            Your Presence Made Our Day Special
          </h3>

          <p className="montserrat text-[#827953] text-[9px] md:text-[12px] lg:text-[14px] px-0 md:px-30 lg:px-0  leading-[1.8]">
            With Hearts Full Of Gratitude, We Thank You For Being A Part Of This
            Blessed And Beautiful Occasion. Your Love, Prayers And Blessings
            Have Made This Special Milestone Even More Memorable. May God's
            Grace And Love Continue To Shine Upon You And Your Family.
          </p>

          <p className="montserrat italic text-[#827953] text-[10px] md:text-[14px] mt-4">
            With Love, Prayers & Blessings
          </p>

          <p className="montserrat text-[#827953] text-[10px] md:text-[16px] mt-2">
            Thank You For Celebrating With Us!
          </p>
        </div>

        {/* Bottom Right Communion Illustration */}
        <img
          src="/assets/church.png"
          alt="First Holy Communion Illustration"
          className="absolute bottom-0 right-0 w-[220px] md:w-[350px] h-auto object-contain object-bottom"
        />
      </section>

      <section className="w-full flex flex-row items-center justify-center gap-0 px-2 md:py-12 pt-12 overflow-hidden">
        <img
          src="/assets/element7_n.png"
          alt="Floral Decoration"
          className="w-25 md:w-40 shrink-0 object-contain md:mt-100 mt-80 -mr-3 md:-mr-8 z-0"
        />

        <div
          className="relative z-10 w-full max-w-[300px] md:max-w-[390px] shrink-0 min-h-[290px] md:min-h-[310px] bg-[#FFFAF5] 
      shadow-[0_12px_25px_rgba(90,75,45,0.10)] border border-[#F0E7DA] flex flex-col items-center justify-center text-center px-5 py-8"
        >
          {/* <p className="montserrat text-[11px] md:text-[12px] tracking-[2px] text-[#82795A]">
            SACRED MATRIMONY
          </p> */}

          <h2 className="cormorant-garamond text-[23px] md:text-[35px] tracking-[9px] text-[#84733D] mt-1 ml-2">
            RSVP
          </h2>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <span className="w-7 h-px bg-[#D8C99F]" />
            <span className="text-[#A18A4D] text-[9px]">◆</span>
            <span className="w-7 h-px bg-[#D8C99F]" />
          </div>

          <p className="montserrat italic text-[12px] md:text-[13px] text-[#82795A]">
            We have reserved seats in your honour.
          </p>

          <p className="montserrat text-[11px] md:text-[12px] text-[#82795A] mt-4">
            A favor of your reply is requested by
          </p>

          <p className="montserrat font-semibold text-[14px] text-[#806C35] mt-1">
            8th of December 2026
          </p>

          <div className="mt-7">
            <p className="montserrat text-[12px] md:text-[13px] tracking-[1px] text-[#82795A]">
              KINDLY RESPOND DIRECTLY
            </p>

            <p className="montserrat text-[12px] text-[#82795A] mt-0.5">
              Please RSVP to
              <a
                href="tel:8446044440"
                className="underline font-medium text-[#6F613B] ml-1"
              >
                8446044440
              </a>
            </p>
          </div>

       <img
          src="/assets/element8.png"
          alt="Floral Decoration"
          className="w-8 md:mt-4"
        />
          
        </div>
        <img
          src="/assets/element7.png"
          alt="Floral Decoration"
          className="w-25 md:w-40 shrink-0 object-contain md:mt-100 mt-80 -ml-3 md:-ml-8 z-0"
        />
      </section>

       <img
          src="/assets/element9.png"
          alt="Floral Decoration"
          className="w-16 mt-24"
        />
        
      <h2 className="montserrat text-[15px] md:text-xl lg:text-[20px] text-[#827953] font-bold mt-4">
        A HEARTFELT NOTE
      </h2>
      <h2 className="cormorant-garamond text-3xl md:text-xl lg:text-[60px] text-[#7E6628] text-center">
        Gift Guide
      </h2>
      <h2 className="montserrat text-[15px] md:text-xl lg:text-[18px] text-[#827953] text-center mt-2 font-semibold px-4">
        Strictly no gifts - Your presence is the greatest gift
      </h2>

      <h2 className="cormorant-garamond text-xl md:text-xl lg:text-[30px] italic text-[#827953] md:mt-32 mt-20">
        With Love,
      </h2>
      <h2 className="cormorant-garamond text-3xl md:text-3xl lg:text-[50px] text-[#7E6628] text-center">
        Lloyd & Ruth
      </h2>
 <div className="flex items-center gap-3 my-4">
            <span className="w-7 h-px bg-[#D8C99F]" />
            <span className="text-[#A18A4D] text-[9px]">◆</span>
            <span className="w-7 h-px bg-[#D8C99F]" />
          </div>
      <div className="relative z-10 w-full max-w-[700px] flex flex-col justify-center  items-center text-center px-6 pt-14 md:pt-28">
        {/* <img src="/assets/element1.png" alt="element1" className="w-40" /> */}
        <h2 className="cormorant-garamond text-[#887344] text-xl md:text-[30px] mt-4">
          Address:-
        </h2>
        <img src="/assets/element2.png" alt="element2" className="w-40 my-2" />
        <h2 className="cormorant-garamond text-[#887344] text-xl md:text-[36px]">
          Almodarwadi Ground,
          <br />
          Vasai West 401201
        </h2>
           <a
                href="https://maps.app.goo.gl/PhQbSuw2f2EReetR8"
                className="text-[#887344] underline md:text-xl text-[16px] cormorant-garamond"
                target="_blank"
              >
                View Location
              </a>
        <img src="/assets/element2.png" alt="element2" className="w-40 my-2" />
        <img src="/assets/qr.png" alt="element2" className="md:w-50 w-30 my-2" />

        <div className="mb-1 flex flex-col-1 items-center justify-center gap-2 md:pb-40 pb-20 mt-6">
       <MapPin className="text-[#7E6628]"/>

          <p className="cormorant-garamond text-[#7E6628] text-[15px] md:text-[22px] font-semibold">
            SCAN FOR LOCATION
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <a
          href="https://invitearc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center"
        >
         
          <img
            src="/assets/logo.png"
            alt="Wedding Logo"
            className="md:w-17 w-13"
          />
        </a>
      </div>

      <div className="mb-1 flex flex-col items-center justify-center gap-2 md:pb-40 pb-20">
        <a
          href="https://www.instagram.com/theinvitearc/"
          target="_blank"
          rel="noopener noreferrer"
          className="cormorant-garamond font-bold flex items-center gap-3 font-serif text-[18px] text-[#827953]"
        >
           <Camera className="text-[#827953]"/>

          <span>Follow us on Instagram</span>
        </a>
      </div>
    </>
  );
}
