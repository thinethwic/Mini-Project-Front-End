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