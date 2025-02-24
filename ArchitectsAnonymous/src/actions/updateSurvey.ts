"use server";

export async function updateSurvey(formData: FormData) {
  const apiKey = process.env.API_KEY as string;

  const formDataObject = Object.fromEntries(formData.entries());

  const requestBody = JSON.stringify({
    id: formDataObject.id as string,
    notes: formDataObject.notes,
  });

  console.log("Request Body:", requestBody);

  const response = await fetch(
    `https://mmyaxhazugbcfqmjryjz.supabase.co/rest/v1/survey?id=eq.${formDataObject.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey as string,
      },
      body: JSON.stringify({
        id: formDataObject.id as string,
        notes: formDataObject.notes,
      }),
    }
  );
}
