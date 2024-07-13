import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-800 text-white py-12 font-serif">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col space-y-6"> {/* Increased space between lines */}
            <Image
              src="https://i.ibb.co/KWg2d5j/logo.png"
              alt="HealthSpace Logo"
              width="150"
              height="50"
            />
            <p className="max-w-xs">
              HealthSpace was created for the new ways we live and eat.{" "}
              <br className="hidden md:block" />
              We make a better lifestyle around the world.
            </p>
            <div className="flex space-x-3">
              <a href="/" className="hover:underline">Terms & privacy</a>
              <a href="/" className="hover:underline">Security</a>
              <a href="/" className="hover:underline">Status</a>
            </div>
            <p className="text-xs">&copy; 2024 HealthSpace LLC.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full mt-8 md:mt-0">
            <div className="flex flex-col space-y-6 md:space-y-0 md:space-x-16 md:flex-row md:ml-20">
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul>
                  <li className="mb-2"><a href="/" className="hover:underline">Overview</a></li>
                  <li className="mb-2"><a href="/" className="hover:underline">Pricing</a></li>
                  <li className="mb-2"><a href="/" className="hover:underline">Customer stories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul>
                  <li className="mb-2"><a href="/" className="hover:underline">Blog</a></li>
                  <li className="mb-2"><a href="/" className="hover:underline">Guides & tutorials</a></li>
                  <li className="mb-2"><a href="/" className="hover:underline">Help center</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul>
                  <li className="mb-2"><a href="/" className="hover:underline">About us</a></li>
                  <li className="mb-2"><a href="/" className="hover:underline">Careers</a></li>
                  <li className="mb-2"><a href="/" className="hover:underline">Media kit</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center mt-8 md:mt-0 md:ml-16">
              <h4 className="font-semibold mb-4">Try It Today</h4>
              <p className="mb-4 text-center">
                Get started for free.
              </p>
              <button className="bg-white text-cyan-800 p-2 rounded hover:bg-cyan-800 hover:text-white">Start today</button>
              <div className="flex space-x-6 mt-6">
                <a href="/" className="hover:underline">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png"
                    alt="Apple Store"
                    width="32"
                    height="32"
                  />
                </a>
                <a href="/" className="hover:underline">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Microsoft_Store.svg/800px-Microsoft_Store.svg.png"
                    alt="Windows Store"
                    width="32"
                    height="32"
                  />
                </a>
                <a href="/" className="hover:underline">
                  <Image
                    src="https://static-00.iconduck.com/assets.00/google-play-icon-1917x2048-e4qduz99.png"
                    alt="Google Play Store"
                    width="32"
                    height="32"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-8">
          <a href="/" className="hover:underline">
            <Image
              src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-43imev7v.png"
              alt="Facebook"
              width="24"
              height="24"
            />
          </a>
          <a href="/" className="hover:underline">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
              alt="X"
              width="24"
              height="24"
            />
          </a>
          <a href="/" className="hover:underline">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
              alt="Instagram"
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
