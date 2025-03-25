"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClientLogosCarousel() {
  const logos = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA2FBMVEX///8UKKAAAJkADZq9weUAHp0AAJsAGJwIIZ4MI54RJp+Llc5LXLzu7/kAEpulr9Zib8c6TbCmr955gcdJWcHx9v8AFpy0uuYAEZsACJqbpNqLlNnv8v+6vuMAAJQAEJrQ1fFqdMfIzvMrPrBSYb0AIaXd4/igqNtodcIAGqfp7P92gdD3+v8ADKG+x+N/idSVodAfM6opQKsOK7BAUsFse8IiNKd+iMvh5fySm9UqO6laZ7zP0upudb1BUbLh5/1wetDZ3fyotO6fp+K9w+8ADqtRYcR8gsAg75mjAAAJh0lEQVR4nO2afXfauBKHsRy/IBK2CcWJKQRCeMmL2RY2DaVk0812b+/3/0YraWZk2TiJ6cnuOfeeef7Csq2Rf5JGoxGNBsMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMw/4v0Z38dDA7GR/+Cqe6Rov+Pmujvb+KmdbkQviIV0eS0fPdhcOBSuOfeGNxg4ZH7wq/FygZXy7NQCBFOjzcz98YMXxoVKrZ12vu6EF/sY9G4+P3zw1hbEIvm5KRbV4KOSJrSA2ScesU6G4dGHuK8cG/p3DvfYGHvPC9Mp+7jJ9M0kGQoEVunq36Bl8QELldQ8fmA7rfySumZEb5y7JpYh+2YTATDxYdaCmSXCQkANEVxKHhwuwl3RaH3LqHUPBFcYGEnsGWe/M15+p0oWgqmtpsbv5xB0Tu4PIaKfTvsWlH+XghFM2Gu4sPcQv9ru2BCDldZDQ0OI69M+M25fxSCBHfQqmFBoKWxKI0UTeqPx1gXXsKt6/zhj37ZULz8KQ3S8XMarIKyiejxdQkGAh8+C0MfNQyunAfGqSlL5tCIqDC6foMR8NloscDCqbqQ91dGCS/XAJvsyUSIBI3685/RIFo/o0GPVI6jCMetJ3Yc3A6H0FQvOe1mB0sc2onzwBza649X5mY8cd+eggadK62/+GLK+rpp8bvfoUsW9tlbKJD+5ulpjvMvtnO5rga6XMLwOdrRYIoTMD1stS5R5+bqVQ1CHAVGrRn0uRc6a+RnaHrY3calj1JcQ8M/93QLU1gDRrqSaHOF79lnYd6oAaUvDqDH5JSmaz0N5HKib4BT6pY1GOFIS40n7aBqInc61XzB1wS05SuYFqP8CXR7CfWEW2W2gIb/PtaflPRM4bytfg8PyhpkqLaA9UqCu1jQ0lBTA+8ksZa6YUkDqmOLHQSipw+vaPCAPS/gcrWjQXZmampewrdZh1TU4EZLGdyawrVubXhzEbgV76h9Dw3cV4PIWILP3tHgA/RS8h0uceC+qgENHzS2TK81Ya4BOh618D2Qc3Q0gFYoHxqqT4rBBetlQfoN0oAG+zcaqKDhNAT21MCHpTrsVmkAi7LXPkENAqkRpTBthxvrrGGKIfkDA2ibWg6+WTUqNNArJ66DupFq2JAG/eKzygWYyXQE2CiptgZmmPl6xncXsqRBVNQgCTThaxqQK/WkmFfeX0O92igGCvmaTj2hNDBdYFyFKQs6jT9QA+s+0LF4zXbValVTgxRGrlm9u4vyOChqUJs1LdUyXY0q7r+HSaU9BDmLPPJCz6xadKKdRaorMMuCagZpYOOtTZssicPZjp3aGpiukNO31CDLI+WmmOy2DceJnoDv8KtyH9O3GjzoX8ZVnJyBGqTBU14VhS1eLC7KC1ZdDbIGxCIj1fTrN9KgMQrzCDsQF6Ud5w2MdunZZnhnuYlvVgMzIoI1PiXTPoVEjgYz11K4LgbyNWMkVbEJLRK1QcumL2jQzakhwjiMPadtm8JNjGWad+r3CQxmjFQ1uN7pRVFHzaY1OvCUslGhQWPkO+F8tCh0V00NlIvNtFEd/WXTF3yisJy/HiyrEb1K86bJ4aU7TDfgLpSPs7GEE5s+2XFgRqjZJOqFX68dtzszR1k6di2JR2co1NcAwnv9I35Bg4W1M6yjgQrtQmdHEodOszHa00PPrqN5+PuUj4OeFkut9mZZiNTjH3HwPjxvKZh+2VeD8AbHow7uvbfUoNG9FfkwlWHuGmFjiG3BeoVt+Si1GpjtpXKFZunSj1dr0Mg6jqXm9Z7xgdEAgtIt7UCqNQijSO6ngXJYE2HddtOj0n4KFcEm5bHcMEcD4zyV9YGPLV1Xa6Ce3OaWAru730MDiDSuKd6u1uB2vV7JPTVQPXlPC7jnk7uiUHphnOuFMzHKGjT0N0QtWBaCRq5BRZQ2uhySJbsz2UcD46RUzA07vGfXRmzuPhqoPQflumy1uBQ0v5qrHjrILb3w4Ggwic17W2U4ft+wGxj/YNeO+iKyZBeZuhroAWl6Rr25ehsNZj1gYzIGpxTTB1QrVBP/MFen0H3SRsu/ogYf8ZvlvembiOIEDyN7Y+njB8PHgiUj174amMBNbUneSIPT88RwDtMWB7DVAMNj7C2aGYLCDtQg0hoYRyD61/Td2GjbgoPzyHA+cy01739Gg7UJFfvHb6QBzkxMF+NO2WqALhFr7dL2l/wcRlBGg5nu2eTPhCprwcRp/0l6+QVLqKf8KQ3MIpScPpY1KO6dUQM7Ep/VAFuGyyEmkUmDGY5YyptgZqY9L74NeVadkW3+0M0607HPJ9Tge7UGqLYa0agBeB5KV+IAzD0qxUggv64r3h6WNEAXFKHPrptDoTwSCo5JZDoVIIUoCYAJWEwY4f6INIAEu/0u1MCmXGgiDaFbTs8K30ymdJSt6FPizUYqtF8YmSu9fZPevVfUAOtAD97H7YmbGKyEMlyYfcWPpJahsDbzifGvPUnA9Bpo0KHYJ/jsatDDZzHXoBTSlWVFT5Nn3iOdGcgmWFdoo2nSAEakmcLlRczWERyOsmx8j1HI4tVTliWdKSw3gx4dUbSx4ZO49M2YbKDc8nf8TjP4Tii8gK4va2Cz+PG0s1nHeJEnujCv70Xe5McU2+Ek8osa9J0tqLN/WZEJsVj4WF/hsKSaOR1LyMRPKH4L0fHj/LfpswOaG18qNBjRfgjaSRp8IktjOs2RQUJxrHUHSkJ6XcZ0YOiJPH9LS+1fcPmY73UdDayJHBm+llpvVB1PeQL7DpMHeWBIg83H5WbjakBxtQd50k/tkgaNi2HZkHSSt43jnUO/odOFJQ16iX3KPWv7UBZB1jhmUvP0vnTmKgXN0TE5TFpdMpq0rQoN6HAWQyjSoJWb2jlzDd1lKzv2C7el2Dp3W8NYQ580EzERORrofalTiWxflw7Rn6MTumfv/tQqtxGQ/z4fUcl/oICOu1vwgIDv3OIVtKmHV2vHknv23ox20oqbth9AS2QciWkhx9K7e6+5w3HQ+PHe8of7XH89Fe0oCoIoOhPNTZ1TZ8PNZpWKFP+D4Vg+Ip4r6eJVVnGV4VUxlTW4WvrmPxjRXWs3eZmddi5jX/uzu3XNDqxgNF//V7E+2TXwIt3Z+F/9L84Lhvr9fu2/jzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAM83/I36IYyLk3zyYFAAAAAElFTkSuQmCC",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
    "data:image/png;base64,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",
  ];

  // Detect theme from localStorage or system preference
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      }

      // Listen for theme changes from other components
      const handleThemeChange = () => {
        setTheme(localStorage.getItem("theme") || "light");
      };

      window.addEventListener("storage", handleThemeChange);
      return () => window.removeEventListener("storage", handleThemeChange);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-20 px-6 transition-colors duration-300">
      <div className="w-full max-w-6xl"> {/* Increased max-width */}
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 transition-colors duration-300 dark:text-white text-gray-900">
          Brands That Trust Us
        </h2>

        {/* Scrolling Logos Container */}
        <div className="relative flex w-full overflow-hidden h-36 md:h-40 rounded-lg py-8 bg-opacity-50">
          <div className="flex min-w-max animate-scroll space-x-24">
            {/* Duplicate the list twice for smooth infinite scrolling */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="relative w-44 h-28 md:w-52 md:h-32 flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 14s linear infinite;
        }
      `}</style>
    </div>
  );
}