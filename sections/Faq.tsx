export interface Feature {
  text: string;
  includedInBasic?: boolean;
}

export interface Plan {
  name: string;
  price: string;
  features: Feature[];
  highlight?: boolean;
}

export interface Props {
  title?: string;
  description?: string;
  plans?: Plan[];
}

export default function Plans({
  title = "Our Plans",
  description = "Choose the plan that suits you best. Each plan comes with personalized recipe generation to fit your needs.",
  plans = [
    {
      name: "Basic Plan",
      price: "Free",
      features: [
        { text: "Personalized Recipe Generator", includedInBasic: true },
        { text: "Access to Basic Recipes", includedInBasic: true },
        { text: "Limited Recipe Storage", includedInBasic: true },
        { text: "Premium Recipes", includedInBasic: false },
        { text: "Ad-free Experience", includedInBasic: false },
        { text: "Priority Support", includedInBasic: false },
      ],
    },
    {
      name: "Premium Plan",
      price: "$9.99/month",
      highlight: true,
      features: [
        { text: "Personalized Recipe Generator", includedInBasic: true },
        { text: "Access to Basic Recipes", includedInBasic: true },
        { text: "Unlimited Recipe Storage", includedInBasic: false },
        { text: "Premium Recipes", includedInBasic: false },
        { text: "Ad-free Experience", includedInBasic: false },
        { text: "Priority Support", includedInBasic: false },
      ],
    },
  ],
}: Props) {
  return (
    <div className="bg-white text-cyan-900 py-12 lg:py-28 font-serif">
      <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 text-cyan-900">{title}</h2>
          <p className="text-lg font-medium text-cyan-900">{description}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center">
          {plans?.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-8 rounded-2xl shadow-md ${
                plan.highlight
                  ? "bg-cyan-800 text-white flex-grow"
                  : "bg-white text-cyan-800"
              } ${plan.highlight ? "lg:w-1/3" : "lg:w-2/5"}`}
            >
              <h3 className="text-3xl font-extrabold mb-4 text-center">
                {plan.name}
              </h3>
              <p className="text-xl font-semibold mb-6 text-center">{plan.price}</p>
              {plan.highlight && (
                <div className="flex items-center justify-center space-x-4">
                  <ul className="space-y-4 flex-grow">
                    {plan.features?.map((feature) => (
                      <li
                        key={feature.text}
                        className={`flex items-center ${
                          plan.highlight
                            ? "text-white"
                            : feature.includedInBasic
                            ? "text-cyan-800"
                            : "text-gray-400"
                        }`}
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span
                          className={`text-base ${
                            !feature.includedInBasic && !plan.highlight && "line-through"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <img
                    src="https://i.ibb.co/yfgvtQB/image.png"
                    alt="Premium Plan"
                    className="w-40 lg:w-56"
                  />
                </div>
              )}
              {!plan.highlight && (
                <ul className="space-y-4 flex-grow">
                  {plan.features?.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center ${
                        plan.highlight
                          ? "text-white"
                          : feature.includedInBasic
                          ? "text-cyan-800"
                          : "text-gray-400"
                      }`}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span
                        className={`text-base ${
                          !feature.includedInBasic && !plan.highlight && "line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {plan.highlight ? (
                <a
                  href="/"
                  className="mt-8 text-center py-3 px-6 bg-white text-cyan-800 font-semibold rounded-lg border border-cyan-800 transition-colors duration-300 hover:bg-gray-100 hover:text-cyan-800"
                >
                  Choose Premium
                </a>
              ) : (
                <a
                  href="/"
                  className="mt-8 text-center py-3 px-6 bg-white text-cyan-800 font-semibold rounded-lg border border-cyan-800 transition-colors duration-300 hover:bg-gray-100 hover:text-cyan-800"
                >
                  Continue with Basic
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
