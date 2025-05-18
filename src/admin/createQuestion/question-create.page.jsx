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

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    await createQuestion({
      question: formData.question,
      questionNumber: formData.questionNumber,
      answer1: formData.answer1,
      answer2: formData.answer2,
      answer3: formData.answer3,
      answer4: formData.answer4,
    });
  };

  return (
    <div>
      <div className="p-6">
        <h2> Create Question PHQ-9</h2>
      </div>
      <form className="p-6" onSubmit={handelSubmit}>
        <div>
          <h3> Question Name </h3>
          <Input
            className="mt-2"
            required
            name="question"
            value={formData.question}
            onChange={handelChange}
          />
        </div>
        <div>
          <h3> Question Number </h3>
          <Input
            className="mt-2"
            required
            name="questionNumber"
            value={formData.questionNumber}
            onChange={handelChange}
          />
        </div>
        <div className="mt-4">
          <h3> Answer 1 </h3>
          <Input
            className="mt-2"
            name="answer1"
            required
            value={formData.answer1}
            onChange={handelChange}
          />
        </div>
        <div className="mt-4">
          <h3> Answer 2 </h3>
          <Input
            className="mt-2"
            name="answer2"
            required
            value={formData.answer2}
            onChange={handelChange}
          />
        </div>
        <div className="mt-4">
          <h3> Answer 3 </h3>
          <Input
            className="mt-2"
            name="answer3"
            required
            value={formData.answer3}
            onChange={handelChange}
          />
        </div>
        <div className="mt-4">
          <h3> Answer 4 </h3>
          <Input
            className="mt-2"
            name="answer4"
            required
            value={formData.answer4}
            onChange={handelChange}
          />
        </div>

        <Button type="submit" className="mt-8 text-card-foreground">
          Submit
        </Button>
      </form>
    </div>
  );
}
export default AdminQuestionCreatePage;
