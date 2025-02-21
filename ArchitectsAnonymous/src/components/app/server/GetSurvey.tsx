"use server";

type Survey = {
  notes: string;
  id: string;
  created_at: string;
  } []
  //| null;

  

export default async function GetSurvey() {
    const apiKey = process.env.API_KEY as string;
    console.log(process.env.API_KEY)

    if (!apiKey) {
      throw new Error("API key is missing!");
    }

    const surveyResponse = await fetch(
        "https://mmyaxhazugbcfqmjryjz.supabase.co/rest/v1/survey?id=eq." + "3733e00f-545b-44b8-b1de-335b606e6102",
        {
          method: "GET",
          headers: {
            "apikey": apiKey,
          },
        }
      );

      const surveyData: Survey = await surveyResponse.json();

      return surveyData[0]
    }
    

//3733e00f-545b-44b8-b1de-335b606e6102