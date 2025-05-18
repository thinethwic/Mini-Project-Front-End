import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

function MedicationCard() {
  const staus = [
    {
      staus: "No Depression",
    },
  ];

  const session = {
    date: "05/04/2024", // MM/DD/YYYY
    time: "09:00 PM", // 12-hour format
  };

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div></div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div>
      {staus.map((staus) => {
        return (
          <Card className="border-2 border-blue-500">
            <CardHeader>
              <CardTitle> Status: {staus.staus}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-x-2">
                <div>
                  <h2>UniMind AI </h2>
                </div>
              </div>
              <div className="flex items-center gap-x-2 mt-4">
                <div>
                  <FaCalendarAlt className="text-2xl" />
                </div>
                <div> Date </div>
                <Input type="text" value={session.date} readOnly />

                <div>
                  <FaClock className="text-2xl" />
                </div>
                <div> Time </div>
                <Input type="text" value={session.time} readOnly />

                <div>
                  <FaUser className="text-2xl" />
                </div>
                <div>{user.fullName}</div>
              </div>
              <Separator className="mt-4" />
              <div className="mt-4">
                <div>
                  <h3>Recomendation</h3>
                </div>
                <div className="w-full mt-4">
                  <Textarea
                    type="text"
                    className="bg-transparent"
                    value={
                      "Daily ExecrsisesRegular physical activity" +
                      "\n" +
                      "Eating a balanced diet with whole foods" +
                      "\n" +
                      "Maintaining a consistent sleep schedule and creating a restful sleep environment can improve mood and energy."
                    }
                    readOnly
                  />
                </div>
              </div>
              <Separator className="mt-4" />
              <div className="mt-4">
                <div>
                  <h3>Treatments</h3>
                </div>
                <div className="w-full mt-4">
                  <Textarea
                    type="text"
                    className="bg-transparent"
                    value={
                      "Daily ExecrsisesRegular physical activity" +
                      "\n" +
                      "Eating a balanced diet with whole foods" +
                      "\n" +
                      "Maintaining a consistent sleep schedule and creating a restful sleep environment can improve mood and energy."
                    }
                    readOnly
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-x-4">
              <div className="flex items-center gap-6">
                <div>
                  <Button className="bg-green-500 hover:bg-green-400 text-white">
                    <Link> Accept Medication </Link>
                  </Button>
                </div>
                <div>
                  <Button className="bg-red-500 hover:bg-red-400 text-white">
                    <Link> Decline Medication </Link>
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default MedicationCard;
