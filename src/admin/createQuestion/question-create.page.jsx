import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createQuestion } from "@/lib/services/api/questions";

function AdminQuestionCreatePage() {
  const [formData, setFormData] = useState({
    question: "",
    questionNumber: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createQuestion({
        question: formData.question,
        questionNumber: formData.questionNumber,
        answer1: formData.answer1,
        answer2: formData.answer2,
        answer3: formData.answer3,
        answer4: formData.answer4,
      });

      // Reset form after successful submission
      setFormData({
        question: "",
        questionNumber: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
      });
    } catch (error) {
      console.error("Error creating question:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">
              Create New PHQ-9 Question
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Add a new question to the PHQ-9 assessment questionnaire
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm border">
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Question Details */}
              <div className="lg:col-span-2">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Question Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question Number
                    </label>
                    <Input
                      type="number"
                      name="questionNumber"
                      value={formData.questionNumber}
                      onChange={handleChange}
                      placeholder="e.g., 1"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question Text
                    </label>
                    <Input
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      placeholder="Enter the question text..."
                      required
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Answer Options */}
              <div className="lg:col-span-2">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Answer Options
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Answer Option 1
                    </label>
                    <Input
                      name="answer1"
                      value={formData.answer1}
                      onChange={handleChange}
                      placeholder="e.g., Not at all"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Answer Option 2
                    </label>
                    <Input
                      name="answer2"
                      value={formData.answer2}
                      onChange={handleChange}
                      placeholder="e.g., Several days"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Answer Option 3
                    </label>
                    <Input
                      name="answer3"
                      value={formData.answer3}
                      onChange={handleChange}
                      placeholder="e.g., More than half the days"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Answer Option 4
                    </label>
                    <Input
                      name="answer4"
                      value={formData.answer4}
                      onChange={handleChange}
                      placeholder="e.g., Nearly every day"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-end space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormData({
                      question: "",
                      questionNumber: "",
                      answer1: "",
                      answer2: "",
                      answer3: "",
                      answer4: "",
                    });
                  }}
                  disabled={isSubmitting}
                >
                  Clear Form
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-w-[120px]"
                >
                  {isSubmitting ? "Creating..." : "Create Question"}
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                PHQ-9 Question Guidelines
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  PHQ-9 questions should follow the standard format asking about
                  frequency of symptoms over the last 2 weeks. The answer
                  options typically range from Not at all to Nearly every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminQuestionCreatePage;
