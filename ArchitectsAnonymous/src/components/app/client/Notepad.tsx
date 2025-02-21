"use client";

type Props = {
  surveyData: SurveyData;
};



import { updateSurvey } from "@/actions/updateSurvey";
import { SurveyData } from "@/app/page";
import { FormEvent, useEffect, useState } from "react";

export default function Notepad({ surveyData }: Props) {
  const [notes, setNotes] = useState(surveyData.notes || "");
  const [survey, setSurvey] = useState("");

 
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    const savedSurvey = localStorage.getItem("survey");
    
    if (savedNotes) setNotes(savedNotes);
    if (savedSurvey) setSurvey(savedSurvey);
  }, []);


  useEffect(() => {
    if (notes) localStorage.setItem("notes", notes);
  }, [notes]);

  useEffect(() => {
    if (survey) localStorage.setItem("survey", survey);
  }, [survey]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updateSurvey(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="h-full flex flex-col p-4 pb-10">
        <div className="w-full mb-2">
          <select
            name="id"
            value={survey}
            onChange={(e) => setSurvey(e.target.value)}
            className="w-full p-2 mb-2 rounded-lg border  text-black"
          >
            <option value="">Select a survey</option>
            <option value={surveyData.id}>Note id {surveyData.id}</option>
          </select>
        </div>

        {survey && (
          <>
            <div className="flex-grow">
              <textarea
                name="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-full p-4 rounded-lg border text-black text-lg bg-transparent "
                placeholder="Enter your notes here..."
                maxLength={1000}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg px-4 py-3 mt-3 text-lg"
            >
              Save Notes
            </button>
          </>
        )}
      </form>
    </>
  );
}
