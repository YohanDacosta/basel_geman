import Card from "./Card";
import NoCourses from "../common/NoCourses";
import useFilteredCourses from "../../hooks/useFilteredCourses";
import { basel_img } from "../../assets";
import FilterBar from "./FilterBar";

const Main = () => {
  const { filtered } = useFilteredCourses();

  return (
    <main className="flex flex-col px-2 sm:flex-row sm:px-0">
      <div className="flex-col w-full space-y-6 px-4 sm:px-0">
        {/*  */}
        <div className="flex flex-col space-y-4 bg-gray-100 p-4 md:flex-row md:h-[14rem] md:justify-center md:rounded-full md:p-0">
          <div className="flex flex-1">
            <div className="flex flex-col justify-center mx-auto space-y-1">
              <h1 className="text-lg font-semibold">
                Vergleichen Sie ganz einfach Deutschkurse in Basel
              </h1>
              <p className="text-md font-semibold text-gray-500">
                Wollen Sie Deutsch lernen?
              </p>
              <span className="text-xs font-semibold text-gray-400">
                "Wir aktualisieren die Daten für jede Schule."
              </span>
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-full shadow-lg shadow-green-100"
              src={basel_img}
              alt="basel_courses"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row space-y-4">
          <FilterBar />
          <div className="flex flex-col space-y-4 w-full">
            {filtered.length <= 0 ? (
              <NoCourses />
            ) : (
              filtered.map((course) => <Card key={course.id} course={course} />)
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
