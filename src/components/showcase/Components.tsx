import Image from "next/image";

export function ShowcaseCard({
                               className,
                               children,
                               title,
                               white,
                               description,
                             }: {
  className?: string;
  white?: boolean;
  children: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div
      className={
        className +
        " " +
        "relative w-full overflow-hidden rounded-[20px] p-10 pb-0"
      }
    >
      <div className="flex flex-col gap-2">
        {title}

        {description}
      </div>

      {children}

      <div className="absolute right-10 top-10 ">
        <RedirectButton white={white} />
      </div>
    </div>
  );
}

export function ShowcaseSocialConnectionCard({
                                               name,
                                               logo,
                                               big,
                                               bgcolor,
                                               textcolor,
                                             }: {
  name: string;
  logo: string;
  big?: boolean;
  bgcolor: string;
  textcolor: string;
}) {
  return (
    <div
      className={`flex ${
        big ? "w-[136px]" : " w-28"
      }  h-[105px]  flex-col items-center justify-center  rounded-lg `}
      style={{ backgroundColor: bgcolor }}
    >
      <Image src={logo} alt="" width={48} height={48} className="" />

      <p className="font-semibold " style={{ color: textcolor }}>
        {name}
      </p>
    </div>
  );
}

export function TableItem({
                            name,
                            validityDate,
                            logo,
                            image,
                          }: {
  name: string;
  validityDate: string;
  logo: string;
  image: string;
}) {
  return (
    <div className="p flex items-center justify-between p-2 px-5  ">
      <p>{name}</p>

      <div className="hidden items-center gap-14 sm:flex">
        <p className="text-[#999]">{validityDate}</p>
        <div
          className="h-8 w-8 rounded-full"
          style={{ backgroundColor: logo }}
        ></div>
        <Image
          src={"/showcase/multitenant/" + image}
          width={50}
          height={20}
          alt={name}
        />
      </div>
    </div>
  );
}

export function RedirectButton({ white }: { white: boolean | undefined }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
    >
      <path
        d="M15 3.19336C12.5895 3.19336 10.2332 3.90814 8.22899 5.24732C6.22477 6.5865 4.66267 8.48993 3.74022 10.7169C2.81778 12.9439 2.57643 15.3944 3.04668 17.7585C3.51694 20.1227 4.67769 22.2943 6.38214 23.9987C8.08659 25.7032 10.2582 26.8639 12.6223 27.3342C14.9865 27.8044 17.437 27.5631 19.664 26.6406C21.8909 25.7182 23.7944 24.1561 25.1335 22.1519C26.4727 20.1476 27.1875 17.7913 27.1875 15.3809C27.1841 12.1496 25.899 9.05162 23.6141 6.76676C21.3292 4.4819 18.2313 3.19677 15 3.19336ZM20.3508 16.0441L16.6008 19.7941C16.4249 19.9701 16.1863 20.0689 15.9375 20.0689C15.6887 20.0689 15.4501 19.9701 15.2742 19.7941C15.0983 19.6182 14.9995 19.3796 14.9995 19.1309C14.9995 18.8821 15.0983 18.6435 15.2742 18.4676L17.4246 16.3184H10.3125C10.0639 16.3184 9.82541 16.2196 9.64959 16.0438C9.47378 15.868 9.37501 15.6295 9.37501 15.3809C9.37501 15.1322 9.47378 14.8938 9.64959 14.7179C9.82541 14.5421 10.0639 14.4434 10.3125 14.4434H17.4246L15.2742 12.2941C15.0983 12.1182 14.9995 11.8796 14.9995 11.6309C14.9995 11.3821 15.0983 11.1435 15.2742 10.9676C15.4501 10.7917 15.6887 10.6928 15.9375 10.6928C16.1863 10.6928 16.4249 10.7917 16.6008 10.9676L20.3508 14.7176C20.438 14.8046 20.5071 14.908 20.5543 15.0219C20.6015 15.1357 20.6257 15.2577 20.6257 15.3809C20.6257 15.5041 20.6015 15.6261 20.5543 15.7399C20.5071 15.8537 20.438 15.9571 20.3508 16.0441Z"
        fill={white ? "white" : "black"}
      />
    </svg>
  );
}

export function PercentageSVGFirst({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <div className="showcase-percentage-first-gradient relative flex items-center  justify-center rounded-full p-1">
      <svg
        className=" "
        xmlns="http://www.w3.org/2000/svg"
        width="212"
        height="212"
        viewBox="0 0 212 212"
        fill="none"
      >
        <path
          d="M193.998 102.681C193.998 85.8679 189.147 69.4095 180.022 55.2669C170.897 41.1243 157.884 29.8938 142.533 22.9137C127.182 15.9335 110.14 13.4981 93.4388 15.8976C76.7374 18.2971 61.0806 25.4304 48.3341 36.4474C35.5875 47.4643 26.2888 61.9005 21.5458 78.0355C16.8029 94.1705 16.8158 111.324 21.583 127.452C26.3501 143.58 35.6706 158.002 48.4337 169"
          stroke="white"
          strokeWidth ="13"
          strokeLinecap ="round"
        />
      </svg>

      <p className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl  font-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export function PercentageSVGSecond({
                                      className,
                                      children,
                                    }: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={
        className +
        " " +
        "showcase-percentage-first-gradient hidden items-center justify-center rounded-full  p-1 opacity-40 sm:flex"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="190"
        height="190"
        viewBox="0 0 212 213"
        fill="none"
      >
        <g clipPath ="url(#clip0_156_3915)">
          <path
            d="M195.38 110.842C197.967 61.4812 160.047 19.3691 110.684 16.782C61.3205 14.195 19.2064 52.1128 16.6195 101.474C14.0326 150.835 51.9525 192.947 101.316 195.534C150.679 198.121 192.793 160.203 195.38 110.842Z"
            stroke="white"
            strokeOpacity ="0.4"
            strokeWidth ="13"
            strokeDasharray ="562.34 562.34"
          />
          <path
            d="M195.38 110.842C197.967 61.4812 160.047 19.3691 110.684 16.782C61.3205 14.195 19.2064 52.1128 16.6195 101.474C14.0326 150.835 51.9525 192.947 101.316 195.534C150.679 198.121 192.793 160.203 195.38 110.842Z"
            stroke="white"
            strokeWidth ="13"
            strokeLinecap ="round"
            strokeDasharray ="562.34 562.34"
          />
        </g>
        <defs>
          <clipPath id="clip0_156_3915">
            <rect
              width="201.997"
              height="202.007"
              fill="white"
              transform="translate(-0.150391 201.732) rotate(-87)"
            />
          </clipPath>
        </defs>
      </svg>

      <p className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl  font-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export function StartWithAiSparkles() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M17.5654 9.14034C17.5654 9.41731 17.3648 9.65152 17.0961 9.71859C16.2395 9.93243 15.3285 10.3418 14.3634 10.9466C13.2045 11.6633 12.1297 12.6849 11.1385 14.0114C10.2665 15.1651 9.67179 16.319 9.35459 17.4726C9.2795 17.746 9.03714 17.9453 8.75381 17.9453C8.47594 17.9453 8.23639 17.7536 8.16015 17.4864C7.8371 16.3553 7.31268 15.2656 6.58703 14.2172C5.74834 13.0127 4.74202 12.0064 3.56794 11.1982C2.52204 10.4833 1.48771 9.99251 0.464719 9.72598C0.196783 9.65597 0 9.42011 0 9.14326C0 8.86324 0.201111 8.62559 0.472738 8.5575C1.086 8.40361 1.71364 8.16317 2.3558 7.83604C3.14866 7.4244 3.91097 6.89833 4.64299 6.25796C5.35961 5.60231 6.00762 4.87029 6.58703 4.06228C7.33559 3.00619 7.86154 1.93267 8.16473 0.841576C8.23919 0.573895 8.47747 0.379911 8.75521 0.379911C9.03727 0.379911 9.27746 0.57975 9.35205 0.851631C9.5417 1.5433 9.84757 2.25521 10.2694 2.98723C10.7878 3.87161 11.4053 4.69502 12.1219 5.45746C12.8234 6.21977 13.5629 6.845 14.3405 7.33288C15.3076 7.93889 16.2256 8.34875 17.0946 8.56208C17.3642 8.62839 17.5654 8.86285 17.5654 9.14034Z"
        fill="url(#paint0_radial_156_3568)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_156_3568"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(9.45829 1.59598) rotate(91.8183) scale(17.0335)"
        >
          <stop stopColor ="#9EFF00" />
          <stop offset="0.319445" stopColor ="#26B4E1" />
          <stop offset="0.621528" stopColor ="#AE75DB" />
          <stop offset="0.939236" stopColor ="#FF9228" />
        </radialGradient>
      </defs>
    </svg>
  );
}
