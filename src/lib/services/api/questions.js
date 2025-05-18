export const getQuestions = async () => {
    const res = await fetch(
      "http://localhost:8000/questions",
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  };

  export const createQuestion = async ({
    question,
    questionNumber,
    answer1,
    answer2,
    answer3,
    answer4,
  }) => {

    const token = await window.Clerk.session.getToken();
    await fetch("http://localhost:8000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        question,
        questionNumber,
        answer1,
        answer2,
        answer3,
        answer4,
      }),
    });
  };