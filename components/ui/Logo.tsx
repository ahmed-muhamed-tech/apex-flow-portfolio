import Link from "next/link";

export default function Logo({textSize}: {textSize?: string}) {
  return (
    
      <Link
        href="/"
        className={`${textSize ? textSize : "text-lg lg:text-2xl"} font-bold  uppercase tracking-wide`}
      >
        <h2>
          <span className="text-foreground">
            {/* تأثير خاص على حرف A */}
            <span className="font-extrabold  inline-block -rotate-6 scale-110">
              A
            </span>
            pex-
          </span>
          <span className="text-primary">
            {/* تأثير خاص على حرف F */}
            <span className="font-extrabold  inline-block underline decoration-wavy">
              F
            </span>
            low
          </span>
        </h2>
      </Link>
    
  );
}
