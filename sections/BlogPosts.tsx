import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
  readingTime?: string;
  tags: string[];
}

export interface Props {
  title?: string;
  description?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

const BlogPosts = ({
  title = "Enter your dietary preferences here",
  description = "Please fill out this form to help us understand your dietary needs.",
  posts = [],
}: Props) => {
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div className="space-y-16">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-4xl leading-snug font-serif text-cyan-900 font-bold">
              {title}
            </h2>
            <p className="text-lg font-serif text-cyan-900">
              {description}
            </p>

            {/* Form section */}
            <form onSubmit={handleSubmit} className="mt-8 border border-white rounded-lg p-6">
              <fieldset className="border border-gray-300 rounded-lg p-6">
                <legend className="text-lg font-semibold mb-4 font-serif text-cyan-900">
                  Section 1: Typical Dietary Instructions
                </legend>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="vegetarian" className="font-serif text-cyan-900">
                      Vegetarian: &nbsp;
                      <select id="vegetarian" name="vegetarian" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="vegan" className="font-serif text-cyan-900">
                      Vegan: &nbsp;
                      <select id="vegan" name="vegan" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="gluten-free" className="font-serif text-cyan-900">
                      Gluten-free: &nbsp;
                      <select id="gluten-free" name="gluten-free" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lactose-intolerant" className="font-serif text-cyan-900">
                      Lactose intolerant: &nbsp;
                      <select id="lactose-intolerant" name="lactose-intolerant" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="halal" className="font-serif text-cyan-900">
                      Halal: &nbsp;
                      <select id="halal" name="halal" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="kosher" className="font-serif text-cyan-900">
                      Kosher: &nbsp;
                      <select id="kosher" name="kosher" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="low-carb" className="font-serif text-cyan-900">
                      Low-carb: &nbsp;
                      <select id="low-carb" name="low-carb" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="low-fat" className="font-serif text-cyan-900">
                      Low-fat: &nbsp;
                      <select id="low-fat" name="low-fat" className="border border-gray-300 rounded-md p-2">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="other" className="font-serif text-cyan-900">
                      Other (please specify): &nbsp;
                      <input type="text" id="other" name="other" className="border border-gray-300 rounded-md p-2" />
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="border border-gray-300 rounded-lg p-6 mt-8">
                <legend className="text-lg font-semibold mb-4 font-serif text-cyan-900">
                  Section 2: Unique Restrictions
                </legend>
                <div className="flex flex-col gap-4">
                  <label htmlFor="unique-restrictions" className="font-serif text-cyan-900">
                    Do you have any other dietary restrictions or preferences not listed above?
                  </label>
                  <textarea
                    id="unique-restrictions"
                    name="unique-restrictions"
                    rows={4}
                    className="border border-gray-300 rounded-lg p-2"
                    placeholder="Enter your unique restrictions..."
                  />
                </div>
              </fieldset>

              <fieldset className="border border-gray-300 rounded-lg p-6 mt-8">
                <legend className="text-lg font-semibold mb-4 font-serif text-cyan-900">
                  Additional Options (optional)
                </legend>
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col">
                    <label className="font-serif text-cyan-900">
                      Allergies: &nbsp;
                      <div className="flex gap-2 mt-2">
                        <label htmlFor="allergy-peanuts" className="inline-flex items-center">
                          <input type="checkbox" id="allergy-peanuts" name="allergies" value="peanuts" className="mr-2" />
                          Peanuts
                        </label>
                        <label htmlFor="allergy-nuts" className="inline-flex items-center">
                          <input type="checkbox" id="allergy-nuts" name="allergies" value="nuts" className="mr-2" />
                          Tree Nuts
                        </label>
                      </div>
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="food-dislikes" className="font-serif text-cyan-900">
                      Food dislikes: &nbsp;
                      <input type="text" id="food-dislikes" name="food-dislikes" className="border border-gray-300 rounded-md p-3 mt-4" placeholder="Enter foods you dislike or prefer to avoid..." />
                    </label>
                  </div>
                </div>
              </fieldset>

              <button
                type="submit"
                className="bg-cyan-800 text-white px-4 py-2 rounded-md mt-8 hover:bg-cyan-900 font-serif"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
