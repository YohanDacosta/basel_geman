import CustomButton from "../common/CustomButton";

const Card = ({ course = null }) => {
  return (
    <div className="p-4 bg-[rgba(235,234,234,1)] md:flex md:items-center md:space-x-12 rounded-2xl">
      <div className="flex flex-col space-y-0.5 px-2">
        <h2 className="text-xl font-semibold">{course.name}</h2>
        <div className="flex items-center space-x-2">
          <strong className="font-semibold text-xs">Schule:</strong>{" "}
          <p className="bg-violet-400 font-mono text-sm rounded-full px-3 py-1">
            {course.school}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="font-semibold text-xs">Daten:</strong>
          <p className="font-mono text-sm">{course.date}</p>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="font-semibold text-xs">Kurszeiten:</strong>{" "}
          <p className="font-mono text-sm">{course.duration_course}</p>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="font-semibold text-xs">Zielniveau:</strong>{" "}
          <p className="font-mono text-sm">{course.level_description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="font-semibold text-xs">Preis:</strong>{" "}
          <p className="font-mono text-sm">{course.price}</p>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="font-semibold text-xs">Ratenpreis:</strong>{" "}
          <p className="font-mono text-sm">{course.lessons}</p>
        </div>
        <div className="flex items-center space-x-2">
          <strong className="font-semibold text-xs">Anmeldeschluss:</strong>{" "}
          <p className="font-mono text-sm rounded-full bg-red-300 px-4 py-1">
            {course.registration_deadline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
