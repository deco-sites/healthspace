import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

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

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  return (
    <nav
  class="block w-full px-6 py-3 mx-auto text-white bg-[#045F73] bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
  <div class="flex items-center max-w-screen-xl justify-between text-blue-gray-900">
    <Image
        class="h-20 w-20"
        src="https://i.ibb.co/KWg2d5j/logo.png"
        alt=""
        decoding="async"
        loading="lazy"
      />
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors hover:text-blue-500">
            Recipe
          </a>
        </li>
        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors hover:text-blue-500">
            Personalized search
          </a>
        </li>
        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors hover:text-blue-500">
            Saved
          </a>
        </li>
        <li class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a href="#" class="flex items-center transition-colors hover:text-blue-500">
            About us
          </a>
        </li>
        <button
          class="select-none rounded-lg bg-yellow py-4 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20"
          type="button">
          Search
        </button>
      </ul>
    </div>
  </div>
</nav>
  );
}
