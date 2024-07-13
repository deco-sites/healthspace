import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

const quotesIcon = "https://i.ibb.co/xLWNG3N/quotation-marks-icon-1024x892-0619v5k2.png";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
    name?: string;
    position?: string;
  };
}

export interface Props {
  title?: string;
  slides?: Testimonial[];
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  title: "What Our Clients Say?",
  slides: [
    {
      content: {
        description:
          "HealthSpace has transformed our workplace with its innovative personalized recipe generation, making meal planning effortless and enjoyable.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/0f78fa1e-c564-485b-a161-7a214c660a9b",
        alt: "Oberon Shaw",
        name: "Oberon Shaw, MCH",
        position: "Head of Talent Acquisition, North America",
      },
    },
    {
      content: {
        description:
          "HealthSpace has revolutionized our team's dietary habits with its personalized recipe generation feature, fostering healthier lifestyles and greater productivity.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Oberon Shaw",
        name: "Oberon Shaw, MCH",
        position: "Head of Talent Acquisition, North America",
      },
    },
    {
      content: {
        description:
          "HealthSpace's personalized recipe generation has been a game-changer for our organization, promoting wellness and culinary diversity among our team members.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/64e0a3f1-37d8-409d-a003-8629a09d0589",
        alt: "Oberon Shaw",
        name: "Oberon Shaw, MCH",
        position: "Head of Talent Acquisition, North America",
      },
    },
  ],
};

function SliderItem({ slide, id }: { slide: Testimonial; id: string }) {
  const { content } = slide;

  return (
    <div id={id} className="relative overflow-hidden w-full mb-8">
      <div className="bg-cyan-800 text-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-start">
        <div className="relative w-8 h-8 mb-4 flex-shrink-0">
          <img src={quotesIcon} alt="Quotation mark" className="absolute top-0 left-0 w-full h-full" />
        </div>
        <p className="text-lg font-semibold leading-relaxed">{content?.description}</p>
        <hr className="border-t border-gray-200 my-4 w-full" />
        <div className="flex items-center space-x-4">
          <Image
            className="w-12 h-12 rounded-full"
            alt={content?.alt}
            src={content?.avatar || ""}
            width={48}
            height={48}
          />
          <div>
            <p className="font-bold text-lg">{content?.name}</p>
            <p className="text-lg">{content?.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dots({ slides }: Props) {
  return (
    <ul className="carousel col-span-full gap-3 z-10">
      {slides?.map((_, index) => (
        <li key={index} className="carousel-item">
          <div className="py-5">
            <div className="w-2 h-2 rounded-full bg-cyan-800" />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Buttons() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton className="flex items-center justify-center btn-circle border border-cyan-800">
          <Icon
            className="text-cyan-800"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div className="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton className="flex items-center justify-center btn-circle border border-cyan-800">
          <Icon
            className="text-cyan-800"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides, interval } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      id={id}
      className="min-h-min flex flex-col lg:container md:max-w-6xl lg:mx-auto mx-4 py-12 lg:py-28 bg-white rounded-2xl shadow-md"
    >
      <h2 className="text-5xl leading-snug lg:w-1/2 pb-12 lg:pb-16 text-center font-bold text-cyan-800 font-serif">
        {title}
      </h2>
      <Slider
        className="carousel carousel-center w-full col-span-full row-span-full gap-6"
        rootId={id}
        interval={interval && interval * 1000}
        infinite
      >
        {slides?.map((slide, index) => (
          <Slider.Item
            key={index}
            index={index}
            className="carousel-item max-w-[600px] w-full p-8 bg-cyan-800 rounded-2xl shadow-md"
          >
            <SliderItem slide={slide} id={`${id}::${index}`} />
          </Slider.Item>
        ))}
      </Slider>

      <div className="flex justify-between pt-8 lg:px-16">
        {props.dots && <Dots slides={slides} />}
        {props.arrows && <Buttons />}
      </div>
    </div>
  );
}

export default Carousel;
