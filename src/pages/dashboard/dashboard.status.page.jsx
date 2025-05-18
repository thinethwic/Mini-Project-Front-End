import StatusCard from "./component/StatusSection";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function StudentStatusPage() {
  const staus = [
    {
      staus: "No Depression",
    },
    {
      staus: "Mild Level Depression",
    },
    {
      staus: "Moderate Level Depression",
    },
    {
      staus: "Severe Level Depression",
    },
  ];
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div></div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="p-4">
      <h2>Status of Students</h2>
      {staus.map((staus) => {
        return (
          <div className="m-5">
            <StatusCard status={staus.staus} fullname={user.fullName} />
          </div>
        );
      })}
    </div>
  );
}

export default StudentStatusPage;
