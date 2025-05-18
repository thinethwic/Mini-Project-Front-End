import { Button } from "@/components/ui/button";
import QuestionSection from "./component/QuestionSection";

function QuestionDashboardPage() {
  return (
    <div>
      <h2 className="text-3xl font-extrabold">Dashboard</h2>
      <h2 className="font-light"> Questions </h2>
      <QuestionSection />
    </div>
  );
}
export default QuestionDashboardPage;
