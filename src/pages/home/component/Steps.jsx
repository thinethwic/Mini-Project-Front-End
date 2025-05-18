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
    <div>
      {" "}
      <Card className="border-none w-[400px] bg-cardHome shadow-md">
        <CardHeader>
          <CardTitle className="text-white">{props.icon}</CardTitle>
          <CardTitle className="mt-6 text-white"> {props.step}</CardTitle>
          <CardTitle className="mt-6 text-white">{props.content}</CardTitle>
        </CardHeader>
        <CardContent>
          <h4 className="text-white">
            {" "}
            User can login to the website using Google Account{" "}
          </h4>
        </CardContent>
        <CardFooter className="flex justify-items-end">
          <Link to="/sign-in">
            <Button className="bg-red-600 hover:bg-red-500">
              {" "}
              Try IT Now ?
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
export default StepsHome;
