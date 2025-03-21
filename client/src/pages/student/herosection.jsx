import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600
        dark:from-gray-600 dark:to-gray-900 py-24 px-4 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the best courses for you
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Unlock your potential: Explore, learn, and elevate your skills with
          our diverse range of courses.
        </p>
        <form
          action=""
          className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
        >
          <Input
            type="text"
            placeholder="Search Courses"
            className="flex-growborder-none focus-visible:ring-0 px-6 py-3 text-gray-900
            placeholder-gray-400 dark:placeholder-gray-500 "
          />
          <Button className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hove:bg-blue-800">
            Search
          </Button>
        </form>
        <Button className="bg-white dark:bg-gary-800 text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200 dark:hove:bg-blue-800">
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
