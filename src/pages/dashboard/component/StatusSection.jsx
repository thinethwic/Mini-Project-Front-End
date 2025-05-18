import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function StatusCard(props) {
  const session = {
    date: "05/04/2024", // MM/DD/YYYY nnnnn
    time: "09:00 PM", // 12-hour format
  };
  return (
    <Card className="border-2 border-blue-500">
      <CardHeader>
        <CardTitle> Status: {props.status} </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-2">
          <div>
            <FaUser />
          </div>
          <div>{props.fullname}</div>
        </div>
      </CardContent>
      <CardFooter className="gap-x-4">
        <div className="flex items-center gap-x-2 gap-4">
          <div>
            <FaCalendarAlt />
          </div>
          <div> Date </div>
          <Input type="text" value={session.date} readOnly />

          <div>
            <FaClock />
          </div>
          <div> Time </div>
          <Input type="text" value={session.time} readOnly />
          <div>
            <Button className="bg-red-500 hover:bg-red-400 text-white">
              <Link to="/dashboard/medication"> Watch Medication </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default StatusCard;
