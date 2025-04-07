import CustomButton from "../common/CustomButton";
import CustomCheckBox from "../common/CustomCheckBox";
import { useDisptachFilters, useFilters } from "../../contexts/CoursesContext";

const FilterBar = () => {
  const { dispatchFilter } = useDisptachFilters();
  const { filters } = useFilters();

  const handleOnChange = (ev) => {
    const { checked, value, id } = ev.target;

    dispatchFilter({ type: "FILTER_COURSES", payload: { value, checked, id } });
  };

  const cleanChecked = () => {
    dispatchFilter({ type: "CLEAN_FILTERS" });
  };

  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-50 px-4 rounded-lg md:order-first">
      <div className="flex justify-end md:justify-start md:mb-2">
        <span className="text-xs font-serif">
          Letzte Änderung:{" "}
          <strong>{date.toLocaleDateString("de-CH", options)}</strong>
        </span>
      </div>
      <div className="flex items-center">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 md:hidden"
          aria-label="Main menu"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold">Filter</h2>
      </div>
      <CustomButton
        title={"Löschen"}
        classes={"bg-violet-300 text-white px-4 py-2 rounded-md w-full"}
        fnc={cleanChecked}
      />
      <div className="mt-4 space-y-4">
        <div className="flex border-t-[0.01rem] pt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <h3 className="font-semibold mx-1 text-xs px-2 py-2 hover:cursor-pointer hover:bg-violet-400 hover:rounded-full hover:transition-colors hover:duration-500 hover:ease-in-out">
            Schule
          </h3>
        </div>

        <div className="bg-[rgba(235,234,234,1)] p-2 text-xs">
          <CustomCheckBox
            checked={filters.school.ecap}
            id={["school"]}
            value={"ecap"}
            label={"ECAP"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.school.k5}
            id={["school"]}
            value={"k5"}
            label={"K5"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.school.academia}
            id={["school"]}
            value={"academia"}
            label={"Academia"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.school.bilingua}
            id={["school"]}
            value={"bilingua"}
            label={"Bilingua"}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex border-t-[0.01rem] pt-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
          </svg>

          <h3 className="font-semibold mx-1 text-xs px-2 py-2 hover:cursor-pointer hover:bg-violet-400 hover:rounded-full hover:transition-colors hover:duration-500 hover:ease-in-out">
            Zielniveau
          </h3>
        </div>
        <div className="bg-[rgba(235,234,234,1)] p-2 text-xs">
          <CustomCheckBox
            checked={filters.level.a1}
            id={["level"]}
            value={"a1"}
            label={"A1"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.level.a2}
            id={["level"]}
            value={"a2"}
            label={"A2"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.level.b1}
            id={["level"]}
            value={"b1"}
            label={"B1"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.level.b2}
            id={["level"]}
            value={"b2"}
            label={"B2"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.level.c1}
            id={["level"]}
            value={"c1"}
            label={"C1"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.level.c2}
            id={["level"]}
            value={"c2"}
            label={"C2"}
            onChange={handleOnChange}
          />
          <CustomCheckBox
            checked={filters.level.alpha}
            id={["level"]}
            value={"alpha"}
            label={"Alpha"}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
