import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { FaCalendarAlt, FaClock, FaUser, FaEye } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function StatusCard(props) {
  // Status color mapping for depression levels
  const getStatusColor = (statu) => {
    const statusLower = statu?.toLowerCase();
    if (statusLower.includes("no depression")) {
      return "text-green-600 bg-green-50 border-green-200";
    } else if (statusLower.includes("mild")) {
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    } else if (statusLower.includes("moderate")) {
      return "text-orange-600 bg-orange-50 border-orange-200";
    } else if (statusLower.includes("severe")) {
      return "text-red-600 bg-red-50 border-red-200";
    }
    return "text-blue-600 bg-blue-50 border-blue-200";
  };

  // Get severity icon based on status
  const getSeverityIcon = (statu) => {
    const statusLower = statu?.toLowerCase();
    if (statusLower.includes("no depression")) {
      return "✓";
    } else if (statusLower.includes("mild")) {
      return "!";
    } else if (statusLower.includes("moderate")) {
      return "⚠";
    } else if (statusLower.includes("severe")) {
      return "⚠⚠";
    }
    return "?";
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Mental Health Assessment
          </CardTitle>
          <div
            className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center space-x-2 ${getStatusColor(
              props.status
            )}`}
          >
            <span className="text-lg">{getSeverityIcon(props.status)}</span>
            <span>{props.status}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Assessment Description */}
        {props.description && (
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="text-sm text-blue-800 font-medium">
              {props.description}
            </p>
          </div>
        )}

        {/* Patient Information */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-full">
            <FaUser className="text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">
              Student Name
            </p>
            <p className="text-lg font-semibold text-gray-800">
              {props.fullname}
            </p>
          </div>
        </div>

        {/* Date and Time Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="p-2 bg-green-100 rounded-full">
              <FaCalendarAlt className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600 mb-1">
                Assessment Date
              </p>
              <Input
                type="text"
                value={props.date}
                readOnly
                className="border-0 bg-transparent p-0 text-gray-800 font-semibold focus:ring-0"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="p-2 bg-purple-100 rounded-full">
              <FaClock className="text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600 mb-1">
                Assessment Time
              </p>
              <Input
                type="text"
                value={props.time}
                readOnly
                className="border-0 bg-transparent p-0 text-gray-800 font-semibold focus:ring-0"
              />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 bg-gray-50 border-t">
        <div className="w-full">
          <Button
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Link
              to={`/dashboard/medication/${props._id}`}
              className="flex items-center justify-center space-x-2"
            >
              <FaEye className="text-sm" />
              <span>View Treatment Details</span>
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default StatusCard;
