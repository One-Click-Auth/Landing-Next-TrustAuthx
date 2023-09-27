"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, PersonStanding } from "lucide-react";
import * as React from "react";

export function AccountDropdown() {
  return (
    //dropdown needs to be wrapped in dialog for the trigger to work
    <div>
      <div className=" showcase-9-dropdown-shadow mt-2 w-96 max-w-[80vw] cursor-pointer overflow-hidden rounded-2xl bg-white py-6">
        <div className="sticky top-0 flex items-center gap-1 bg-white px-6 pb-4">
          <img
            src="https://github.com/shadcn.png"
            className="h-10 w-10 rounded-full"
            alt="@shadcn"
          />

          <div className="ml-2">
            <p className="text-base text-black">moonlightnexus</p>
            <p className="text-xs">moonlightnexus@yahoo.com</p>
          </div>
        </div>

        {/* The component wasnt used here because of radix/shadcn having to access the ref, and the component being a Link */}

        <div className="flex cursor-pointer items-center rounded-sm px-6 py-4 hover:border-0 hover:bg-gray-100 hover:outline-none">
          <span className="mt-1 h-5 w-5">
            <LogOut size={20} />
          </span>
          <span className="ml-4"> Sign Out </span>
        </div>

        <div className="flex cursor-pointer items-center rounded-sm px-6 py-4 hover:border-0 hover:bg-gray-100 hover:outline-none">
          <span className="mt-1 h-5 w-5">
            <ProfileItemSvg />
          </span>
          <span className="ml-4"> Profile </span>
        </div>

        <div className="mt-4 flex items-center gap-2   px-6 text-sm text-[#D6D6D6]">
          <p>Secured by</p>

          <div className="flex  items-center gap-1">
            <TrustAuthXLogo />
            TrustAuthX
          </div>
        </div>
      </div>
    </div>
  );
}

interface MenuItemType {
  icon: React.ReactNode;
  title: string;
  href?: string;
}

const MenuItem = ({ icon, title, href = "#" }: MenuItemType) => {
  return (
    <DropdownMenuItem className="rounded-sm p-1 px-6 py-4 hover:border-0 hover:bg-gray-100 hover:outline-none">
      <div className="flex items-center ">
        <span className="mt-1 h-5 w-5">{icon}</span>
        <span className="ml-4"> {title} </span>
      </div>
    </DropdownMenuItem>
  );
};

export const ProfileItemSvg = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6693 14.0005V12.6672C12.6693 11.9599 12.3883 11.2816 11.8882 10.7815C11.3881 10.2814 10.7098 10.0005 10.0026 10.0005H6.0026C5.29536 10.0005 4.61708 10.2814 4.11699 10.7815C3.61689 11.2816 3.33594 11.9599 3.33594 12.6672V14.0005"
        stroke="#334155"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.0026 7.33382C9.47536 7.33382 10.6693 6.13991 10.6693 4.66716C10.6693 3.1944 9.47536 2.00049 8.0026 2.00049C6.52984 2.00049 5.33594 3.1944 5.33594 4.66716C5.33594 6.13991 6.52984 7.33382 8.0026 7.33382Z"
        stroke="#334155"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LogOutSvg = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 14.0005H3.33333C2.97971 14.0005 2.64057 13.86 2.39052 13.61C2.14048 13.3599 2 13.0208 2 12.6672V3.33382C2 2.9802 2.14048 2.64106 2.39052 2.39101C2.64057 2.14096 2.97971 2.00049 3.33333 2.00049H6"
        stroke="#334155"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6641 11.3337L13.9974 8.00033L10.6641 4.66699"
        stroke="#334155"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.00049H6"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function TrustAuthXLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 62 62"
      fill="none"
    >
      <circle
        cx="30.8762"
        cy="30.8762"
        r="30.8762"
        transform="matrix(-1 0 0 1 61.7539 0)"
        fill="#D6D6D6"
      />
      <path
        d="M30.6603 52.2892C30.8187 52.3429 30.974 52.3422 31.1319 52.2871C33.1631 51.5784 47.6484 45.9641 47.6484 29.9788V15.5288C47.6484 15.1465 47.3869 14.8132 47.014 14.7205L31.0996 10.7627C30.9662 10.7295 30.8267 10.7295 30.6933 10.7627C30.5599 10.7958 14.7789 14.7205 14.7789 14.7205C14.406 14.8132 14.1445 15.1465 14.1445 15.5288V29.9788C14.1445 46.1255 28.6266 51.6001 30.6603 52.2892Z"
        fill="white"
      />
      <path
        d="M20.8708 20.654C22.1525 19.2483 23.7155 18.1276 25.4582 17.3648C27.2009 16.6019 29.0845 16.2139 30.9869 16.2259C32.8892 16.2378 34.7678 16.6494 36.5008 17.4341C38.2338 18.2188 39.7826 19.3589 41.0466 20.7806L30.9017 29.8005L20.8708 20.654Z"
        fill="#D6D6D6"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_11691"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30.9017 29.8005) rotate(-90.0445) scale(29.9638)"
        >
          <stop offset="0.220303" />
          <stop offset="0.995966" stopOpacity ="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
