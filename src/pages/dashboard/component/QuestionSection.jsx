import QuestionCard from "@/components/shared/Question";
import { useEffect, useState } from "react";
import { getQuestions } from "@/lib/services/api/questions";
import { createQuestionAnswer } from "@/lib/services/api/questionAnswer";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  FileText,
  ArrowRight,
} from "lucide-react";

function QuestionSection() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isQuestionLoading, setIsQuestionLoading] = useState(false);
  const [isQuestionError, setIsQuestionError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

    setIsSubmitting(true);
    const answerArray = questions.map((q) => ({
      questionId: q._id,
      answer: answers[q._id],
    }));

    try {
      await createQuestionAnswer({
        UserId: user.id,
        answer: answerArray,
        date: new Date(),
      });

      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      alert("Something went wrong while submitting answers.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgressStats = () => {
    const answered = Object.keys(answers).length;
    const total = questions.length;
    const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;
    return { answered, total, percentage };
  };

  const { answered, total, percentage } = getProgressStats();

  if (isQuestionLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-gray-700">
              Loading Questions
            </h2>
            <p className="mt-2 text-gray-500">
              Please wait while we fetch your questions...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isQuestionError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-red-700">
              Error Loading Questions
            </h2>
            <p className="mt-2 text-red-600">
              Unable to fetch questions from the database.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="mt-6 bg-red-600 hover:bg-red-700"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Assessment Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete all questions below to proceed. Take your time and answer
            thoughtfully.
          </p>
        </div>

        {/* Progress Card */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Progress Overview
                  </h3>
                  <p className="text-sm text-gray-600">
                    {answered} of {total} questions completed
                  </p>
                </div>
              </div>
              <Badge
                variant={percentage === 100 ? "default" : "secondary"}
                className="text-sm px-3 py-1"
              >
                {percentage}% Complete
              </Badge>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {questions.map((question, index) => (
            <div key={question._id} className="relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold z-10">
                {index + 1}
              </div>
              <div className="transform transition-all duration-200 hover:scale-105">
                <QuestionCard
                  question={question.question}
                  a1={question.answer1}
                  a2={question.answer2}
                  a3={question.answer3}
                  a4={question.answer4}
                  _id={question._id}
                  value={answers[question._id] || ""}
                  onChange={(value) => handleAnswerChange(question._id, value)}
                  showSubmit={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <AlertCircle className="w-4 h-4" />
                <span>
                  Make sure all questions are answered before submitting
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="px-6 py-2 border-gray-300 hover:bg-gray-50"
                  type="button"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>

                <Button
                  onClick={handleSubmitAll}
                  disabled={percentage !== 100 || isSubmitting}
                  className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit All Answers
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Message */}
        {submitSuccess && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-up">
            <CheckCircle2 className="w-5 h-5" />
            <span>All answers submitted successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionSection;
