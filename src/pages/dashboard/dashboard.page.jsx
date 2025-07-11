import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { Component } from "./component/lineChartComponent";
function HomeDashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div></div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }
  return (
    <div className="p-4 w-max">
      <h1> Welcome UniMind AI </h1>
      <h2 className="mt-6">
        {" "}
        Hi {user.firstName} {user.lastName}
      </h2>
      <br />
      <Component />
      <h3 className="mt-6">
        Introduction of UniMind AI as a Depression Detection Tool for University
        Students
      </h3>
      <h4 className="mt-4">
        As third-year HICT (Health Information and Communication Technology)
        students from the Gampaha Wickramarachchi University of Indigenous
        Medicine, we are excited to present UniMind AI a groundbreaking tool
        designed to detect depression among university students.
      </h4>
      <h4 className="mt-2">
        This initiative will be implemented as part of our Mini Project, with a
        focus on leveraging advanced technology to address mental health
        challenges in academic environments. We believe this marks an important
        step in promoting mental well-being and fostering a supportive campus
        atmosphere.
      </h4>

      <h2 className="mt-2">Let’s get started on this impactful journey!</h2>
    </div>
  );
}
export default HomeDashboardPage;
