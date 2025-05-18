import QuestionCard from "@/components/shared/Question";
import { useEffect, useState } from "react";
import { getQuestions } from "@/lib/services/api/questions";

function QuestionSection() {
  const [questions, setQuestions] = useState([]);
  const [isQuestionLoading, setIsQuestionLoading] = useState(false);
  const [isQuestionError, setIsQuestionError] = useState(false);

  useEffect(() => {
    setIsQuestionLoading(true);
    getQuestions()
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => {
        setIsQuestionError(true);
      })
      .finally(() => {
        setIsQuestionLoading(false);
      });
  }, []);

  if (isQuestionLoading) {
    return (
      <section className="py-8">
        <div className="mt-4 flex flex-col gap-y-8">
          <h2> Loading...... </h2>
        </div>
      </section>
    );
  }

  if (isQuestionError) {
    return (
      <section className="py-8">
        <div className="mt-4 flex flex-col gap-y-8">
          <h4> Error While fetching data from Database...... </h4>
        </div>
      </section>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-12 gap-8">
      {questions.map((question) => {
        return (
          <QuestionCard
            question={question.question}
            a1={question.answer1}
            a2={question.answer2}
            a3={question.answer3}
            a4={question.answer4}
            _id={question._id}
          />
        );
      })}
    </div>
  );
}
export default QuestionSection;
