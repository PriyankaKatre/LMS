import Course from "./course";

const MyLearning = () => {
  const isLoading = false;
  const myLearningCourses = [1, 2];
  return (
    <div className="max-w-5xl my-24 mx-auto px-4 md:px-0">
      <h1 className="font-bold text-2xl">MY Learning</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : myLearningCourses.length === 0 ? (
          <p>You are not enrolled in any courses</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index}>
                <Course />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;

const MyLearningSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-400 dark:bg-gray-700 rounded-lg h-40 "
        ></div>
      ))}
    </div>
  );
};
