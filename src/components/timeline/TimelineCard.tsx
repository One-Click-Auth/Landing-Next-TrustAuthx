import ArrowIcon from "../ArrowIcon";

export function TimelineCard({
  header,
  children,
  footerText,
  footerLink,
  footerButtonText,
}: {
  header: string;
  children: React.ReactNode;
  footerText: string;
  footerLink: string;
  footerButtonText: string;
}) {
  return (
    <div className="shad rounded-2xl bg-black shadow-lg shadow-zinc-800 ">
      <div className=" px-16 py-12 ">
        <div className="  w-96 text-center">
          <span className="bg-gradient-to-r  from-yellow-400 to-orange-500 bg-clip-text text-4xl font-bold leading-10 text-transparent">
            {header}
          </span>
        </div>

        {children}
      </div>

      <div className=" rounded-b-2xl bg-[#1A1A1A] px-12 py-7">
        <div className=" w-96 text-lg font-bold leading-loose text-neutral-50">
          {footerText}
        </div>

        <button
          className="mt-6 flex items-center justify-center 
            gap-2 rounded-full border-white  py-1 font-bold text-white"
        >
          {footerButtonText} <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
