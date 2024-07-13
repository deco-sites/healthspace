import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header() {
  return (
    <nav
      class="block w-full px-6 py-3 flex justify-center space-x-10 text-white bg-[#045F73] bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <ul class="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="block mr-16 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <Image
            class="block h-20 w-20"
            src="./logo.png"
            alt=""
            decoding="async"
            loading="lazy"
          />
        </li>

        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors">
            Recipe
          </a>
        </li>
        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors">
            Personalized search
          </a>
        </li>
        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors">
            Saved
          </a>
        </li>
        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors">
            About us
          </a>
        </li>
        <button
            class="rounded-lg bg-[#FFE492] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Login
        </button>
        <button
            class="rounded-lg bg-[#4F9CF9] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Try HealthSpace free
        </button>
      </ul>
    </nav>
  );
}
