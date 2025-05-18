import { Button } from "@/components/ui/button";
import Hero from "./component/Hero";
import { Link } from "react-router-dom";
import SideImage from "./component/SideImage";
import StepsHome from "./component/Steps";

import { FaSignInAlt, FaQuestionCircle, FaBook } from "react-icons/fa";
import TeamMemebrs from "./component/Team";
import { Separator } from "@/components/ui/separator";

function HomePage() {
  return (
    <div>
      <Hero />

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 space-y-8 lg:space-y-0">
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-6xl font-bold text-gray-900">
            Early Detection and Managment Depression{" "}
          </h1>
          <h5 className="text-lg text-gray-600 mt-4">
            Depression is a serious mental health condition characterized by
            persistent and profound feelings of sadness, hopelessness, and a
            loss of interest in activities that once brought joy. Individuals
            with depression often experience a range of symptoms, including
            fatigue, changes in appetite or weight, sleep disturbances, and
            difficulties with concentration and decision-making.
          </h5>
          <p className="text-lg text-gray-600 mt-4">
            No more stress, no more feeling confused. Get a
            <span className="text-blue-500"> step-by-step guide </span>
          </p>
          <Button
            asChild
            className="mt-6 px-6 py-3 bg-blue-500 text-white text-xl font-medium rounded-lg shadow-lg hover:bg-blue-600"
          >
            <Link to="/dashboard/">Let's Start</Link>
          </Button>
        </div>
        <SideImage />
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          <span className="text-cardHome">Step's of </span> <br />
          the Depression Detection{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:flex justify-between mt-10 gap-10">
        <StepsHome
          step={"Step 1"}
          content={"Login to The WebSite"}
          icon={<FaSignInAlt />}
        />
        <StepsHome
          step={"Step 2"}
          content={"Answer the Questionnair"}
          icon={<FaQuestionCircle />}
        />
        <StepsHome
          step={"Step 3"}
          content={"Results According to Answers"}
          icon={<FaBook />}
        />
      </div>
      <Separator className="mt-10" />
      <TeamMemebrs />
      <Separator className="mt-20" />
      <div className="mt-20 text-center">
        <h2 className="text-6xl font-bold text-gray-900">
          Enabel Your Future From Here{" "}
          <span className="text-cardHome">UniMindAI </span>
        </h2>
        <h3 className="mt-5 font-normal"> Login to System by Single Click </h3>
        <div className="mt-8">
          <Link to="/sign-in">
            <Button> Book A Session </Button>
          </Link>
        </div>
      </div>
      <Separator className="mt-10" />
    </div>
  );
}

export default HomePage;
