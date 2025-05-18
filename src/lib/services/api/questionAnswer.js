export const createQuestionAnswer = async ({
    data,
    id,
    userId, 
  }) => {

    const token = await window.Clerk.session.getToken();
    await fetch("http://localhost:8000/questionAnswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data,
        id,
        userId,
      }),
    });
  };