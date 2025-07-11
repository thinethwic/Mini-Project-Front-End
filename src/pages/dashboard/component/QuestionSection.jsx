import QuestionCard from "@/components/shared/Question";
import { useEffect, useState } from "react";
import { getQuestions } from "@/lib/services/api/questions";
import { createQuestionAnswer } from "@/lib/services/api/questionAnswer";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

function QuestionSection() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isQuestionLoading, setIsQuestionLoading] = useState(false);
  const [isQuestionError, setIsQuestionError] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsQuestionLoading(true);
    getQuestions()
      .then((data) => {
        setQuestions(data);
      })
      .catch(() => {
        setIsQuestionError(true);
      })
      .finally(() => {
        setIsQuestionLoading(false);
      });
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitAll = async () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Create array of answers in the order of the questions
    const answerArray = questions.map((q) => ({
      questionId: q._id,
      answer: answers[q._id],
    }));

    console.log("Collected Answer Array:", answerArray);

    try {
      await createQuestionAnswer({
        UserId: user.id,
        answer: answerArray, // ✅ now an array of strings
      });

      alert("All answers submitted successfully!");
    } catch (err) {
      alert("Something went wrong while submitting answers.");
      console.error(err);
    }
  };

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
    <div className="flex flex-col gap-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {questions.map((question) => (
          <QuestionCard
            key={question._id}
            question={question.question}
            a1={question.answer1}
            a2={question.answer2}
            a3={question.answer3}
            a4={question.answer4}
            _id={question._id}
            value={answers[question._id] || ""}
            onChange={(value) => handleAnswerChange(question._id, value)}
            showSubmit={false} // Don't show submit on individual cards
          />
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <Button onClick={handleSubmitAll} className="w-[100px]">
          Submit
        </Button>
        <Button
          className="w-fit bg-transparent hover:bg-transparent border text-black"
          type="button"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default QuestionSection;
