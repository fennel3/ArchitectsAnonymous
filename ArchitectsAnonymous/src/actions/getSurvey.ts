"use server";

type Survey = {
  notes: string;
  id: string;
  created_at: string;
}[];

export default async function getSurvey(survey: string | undefined) {
  const apiKey = process.env.API_KEY as string;

  if (!apiKey) {
    throw new Error("API key is missing!");
  }

  const surveyResponse = await fetch(
    "https://mmyaxhazugbcfqmjryjz.supabase.co/rest/v1/survey?id=eq." +
    survey,
    {
      method: "GET",
      headers: {
        apikey: apiKey,
      },
    }
  );

  const surveyData: Survey = await surveyResponse.json();

  return surveyData[0];
}