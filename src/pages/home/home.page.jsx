import { Button } from "@/components/ui/button";
import Hero from "./component/Hero";
import { Link } from "react-router-dom";
import SideImage from "./component/SideImage";
import StepsHome from "./component/Steps";

import { FaSignInAlt, FaQuestionCircle, FaBook } from "react-icons/fa";
import TeamMemebrs from "./component/Team";
import { Separator } from "@/components/ui/separator";

import { useUser } from "@clerk/clerk-react";
import ContactUs from "./component/contactUs";

function HomePage() {
  const { isSignedIn } = useUser();
  return (
    <div className="animate-fade-in-up">
      {/* Hero section with fade-in-down */}
      <div className="animate-fade-in-down">
        <Hero />
      </div>

      {/* Info Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 space-y-8 lg:space-y-0 animate-slide-in-right">
        <div className="text-center lg:text-left max-w-lg animate-fade-in-up">
          <h1 className="text-6xl font-bold text-gray-900">
            Early Detection and Management of Depression
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
            className="mt-6 px-6 py-3 bg-blue-500 text-white text-xl font-medium rounded-lg shadow-lg hover:bg-blue-600 animate-scale-in"
          >
            <Link to="/dashboard/">Let's Start</Link>
          </Button>
        </div>

        <div className="animate-slide-in-left">
          <SideImage />
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Clinically Validated Process
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Step s of
              </span>
              <br />
              <span className="text-gray-700">the Depression Detection</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our scientifically-backed assessment process helps you understand
              your mental health in just three simple steps. Safe, private, and
              professionally designed.
            </p>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:flex justify-between gap-10 animate-fade-in-up">
            <StepsHome
              step="Step 1"
              content="Login to The WebSite"
              icon={<FaSignInAlt />}
              description="Securely access our platform using your Google account. Your privacy and data security are our top priorities."
              url="/sign-in"
            />
            <StepsHome
              step="Step 2"
              content="Answer the Questionnaire"
              icon={<FaQuestionCircle />}
              description="Complete our clinically validated questionnaire. It takes just 5-10 minutes and helps us understand your mental wellness."
              url="/dashboard/question"
            />
            <StepsHome
              step="Step 3"
              content="Results According to Answers"
              icon={<FaBook />}
              description="Receive personalized insights and recommendations based on your responses, along with helpful resources for your journey."
              url="/dashboard/status/"
            />
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">
                  Complete assessment in under 10 minutes
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Ready to begin your wellness journey?
              </h3>
              <Link to={isSignedIn ? "/dashboard" : "/sign-in"}>
                <Button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 hover:scale-105 transform">
                  Start Free Assessment
                </Button>
              </Link>
            </div>
          </div>

          {/* Separator */}
          <Separator className="mt-16 border-t border-gray-200" />
        </div>
      </div>
      {/* Team Section */}
      <div>
        <TeamMemebrs />
      </div>

      <Separator className="mt-2" />

      {/* CTA Section */}
      <div className="relative overflow-hidden mt-1">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

        <div className="relative z-10 py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              Transform Your Mental Wellness Journey
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Enable Your Future From Here{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UniMindAI
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-4">
              Login to System by Single Click
            </p>

            <div className="mt-8 flex gap-4 justify-center">
              <Link to={isSignedIn ? "/dashboard" : "/sign-in"}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl">
                  Start Your Assessment
                </Button>
              </Link>
              <Link to={isSignedIn ? "/dashboard" : "/sign-in"}>
                <Button variant="outline" className="px-8 py-4 rounded-xl">
                  Book A Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-5" />
      <ContactUs className="mt-5" />
      <Separator className="mt-5" />
    </div>
  );
}

export default HomePage;
