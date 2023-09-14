export function PercentageSVG({ children }: { children: React.ReactNode }) {
  return (
    <div className=" relative flex items-center  justify-center rounded-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="143"
        height="142"
        viewBox="0 0 143 142"
        fill="none"
      >
        <path
          d="M137.168 70.9621C137.168 55.4156 131.619 40.3796 121.519 28.5609C111.418 16.7422 97.4311 8.91701 82.0745 6.49399C66.718 4.07098 51.0008 7.20928 37.7523 15.344C24.5039 23.4787 14.5943 36.0754 9.80748 50.8666C5.02065 65.6579 5.671 81.6721 11.6414 96.0265C17.6119 110.381 28.5103 122.133 42.3747 129.166C56.2392 136.2 72.1591 138.053 87.2686 134.393C102.378 130.733 115.685 121.799 124.793 109.2"
          stroke="url(#paint0_radial_309_7682)"
          strokeWidth="11.3506"
          strokeLinecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_309_7682"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(127.845 110.376) rotate(-147.529) scale(143.669 143.668)"
          >
            <stop stopColor="#AD00FF" />
            <stop offset="0.754348" stopColor="#9EFF00" />
            <stop offset="0.961618" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>

      <p className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl  font-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export function PercentageSVGThird({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" relative flex items-center  justify-center rounded-full ">
      <svg
        className="scale-[0.8]"
        xmlns="http://www.w3.org/2000/svg"
        width="207"
        height="241"
        viewBox="0 0 237 241"
        fill="none"
      >
        <path
          d="M10.585 151.907C18.1634 177.078 34.4778 198.716 56.5915 212.927C78.7052 227.139 105.166 232.99 131.209 229.427C157.253 225.864 181.17 213.121 198.654 193.493C216.139 173.864 226.042 148.639 226.582 122.358C227.122 96.0774 218.262 70.467 201.599 50.1372C184.935 29.8074 161.562 16.0936 135.686 11.4644C109.81 6.83527 83.1321 11.5948 60.4535 24.8863C37.775 38.1777 20.5859 59.1281 11.9804 83.966"
          stroke="url(#paint0_radial_309_6388)"
          strokeWidth="19.1918"
          strokeLinecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_309_6388"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6.46749 83.5507) rotate(15.7148) scale(242.918 242.918)"
          >
            <stop stopColor="#AD00FF" />
            <stop offset="0.754348" stopColor="#9EFF00" />
            <stop offset="0.961618" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>

      <p className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px]  font-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export function PercentageSVGSecondTimeline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" relative flex items-center  justify-center rounded-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="142"
        viewBox="0 0 130 142"
        fill="none"
      >
        <path
          d="M81.1136 6.49399C65.757 4.07098 50.0399 7.20928 36.7914 15.344C23.5429 23.4787 13.6334 36.0754 8.84654 50.8666C4.05972 65.6579 4.71006 81.6721 10.6805 96.0265C16.6509 110.381 27.5493 122.133 41.4138 129.166C55.2783 136.2 71.1981 138.053 86.3077 134.393C101.417 130.733 114.724 121.799 123.832 109.2"
          stroke="url(#paint0_radial_309_7684)"
          strokeWidth="11.3506"
          strokeLinecap="round"
        />
        <defs>
          <radialGradient
            id="paint0_radial_309_7684"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(126.884 110.376) rotate(-147.529) scale(143.669 143.668)"
          >
            <stop stopColor="#AD00FF" />
            <stop offset="0.754348" stopColor="#FFF500" />
            <stop offset="0.961618" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>

      <p className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl  font-semibold text-white">
        {children}
      </p>
    </div>
  );
}
