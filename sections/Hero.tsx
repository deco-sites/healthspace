import { asset, Head } from "$fresh/runtime.ts";

export default function HeroFlats() {
  return (
    <div class="intro intro3">
        <div class="container mx-auto sm:px-4">
            <div class="flex flex-wrap  center-content">
                <div class="md:w-2/5 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
                    <h3 class="intro-text text-[#045F73]">Get More Healthy with HealthSpace!</h3>
                    <p class="intro-text-2">Get the healthiest recipes for your favorite dishes! Personalize your recipes according to dietary restrictions or preferences with HealthSpace.</p>
                    <div class="space30"></div>
                    <div class="dual-btn">
                       <button
                          class="rounded-lg bg-[#003642] py-3 px-6 text-center align-middle font-serif text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button">
                          Try HealthSpace free
                      </button>
                    </div>

                </div>
                <div class="md:w-3/5 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 no-padding">
                </div>
            </div>
        </div>
    </div>
  );
}
