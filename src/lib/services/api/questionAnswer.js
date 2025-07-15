export const getQuestionsAnswers = async () => {
    const res = await fetch(
      "http://localhost:8000/questionAnswer",
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  };

  export const getQuestionsAnswersById = async (id) => {
    const res = await fetch(
      `http://localhost:8000/questionAnswer/${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data;
  };


export const createQuestionAnswer = async ({
    UserId,
    answer, 
  }) => {

    const token = await window.Clerk.session.getToken();
    await fetch("http://localhost:8000/questionAnswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: UserId,
        answers: answer,
      }),
    });
  };