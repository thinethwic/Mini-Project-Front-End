import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function StepsHome(props) {
  return (
    <Card className="border-none w-[400px] bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl text-white/90 group-hover:text-white transition-colors duration-300">
            {props.icon}
          </div>
          <div className="text-2xl font-bold text-white/30">
            {props.step?.replace("Step ", "")}
          </div>
        </div>

        <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
          {props.step}
        </CardTitle>

        <CardTitle className="text-xl font-semibold text-white/90 leading-relaxed">
          {props.content}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
          {props.description ||
            "User can login to the website using Google Account"}
        </p>

        {/* Progress indicator */}
        <div className="mt-6 flex items-center space-x-2">
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/60 rounded-full transition-all duration-500 group-hover:bg-white"
              style={{
                width: `${
                  (parseInt(props.step?.replace("Step ", "") || "1") / 3) * 100
                }%`,
              }}
            ></div>
          </div>
          <span className="text-white/60 text-sm font-medium">
            {props.step?.replace("Step ", "")}/3
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end relative z-10 pt-2">
        <Link to="/sign-in">
          <Button className="bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center space-x-2">
            <span>Try IT Now</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
export default StepsHome;
