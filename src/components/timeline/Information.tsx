import { ReactNode } from "react";
import ArrowIcon from "../ArrowIcon";

export function Information({
  preHeader,
  header,
  children,
  buttonLink,
  whiteText,
  ButtonText,
  customButton,
  className,
  buttonbg,
}: {
  buttonbg?: boolean;
  customButton?: ReactNode;
  preHeader: string;
  header: string;
  className?: string;
  children: ReactNode;
  whiteText?: boolean;
  buttonLink: string;
  ButtonText: string;
}) {
  return (
    <div
      className={`${className ? className : ""} flex flex-col  ${
        whiteText ? "text-white" : "text-zinc-900"
      } `}
    >
      <div className="flex flex-col gap-3">
        <div className=" text-3xl font-bold leading-9 ">{preHeader} </div>

        <div
          className="  max-w-[513px] text-[43px] font-bold leading-10
 "
        >
          {header}
        </div>
      </div>

      {children}

      {!customButton ? (
        <button
          className={`${
            buttonbg ? "bg-white text-black" : "bg-black text-white"
          } mt-14 flex w-64 items-center  justify-center gap-2 rounded-full py-2 font-bold `}
        >
          {ButtonText}
          <ArrowIcon />
        </button>
      ) : (
        <>{customButton}</>
      )}
    </div>
  );
}
