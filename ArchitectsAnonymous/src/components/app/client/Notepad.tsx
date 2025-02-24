"use client";

import getSurvey from "@/actions/getSurvey";
import { updateSurvey } from "@/actions/updateSurvey";
import { SurveyData } from "@/app/page";
import { FormEvent, useEffect, useState } from "react";

export default function Notepad() {
  const [notes, setNotes] = useState("");
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

  const handleSurveyChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSurvey = e.target.value;
    setSurvey(selectedSurvey);

    if (selectedSurvey) {
      const surveyData = await getSurvey(selectedSurvey);
      setNotes(surveyData?.notes || "");
    } else {
      setNotes("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="h-full flex flex-col p-4 pb-10">
        <div className="w-full mb-2">
          <select
            name="id"
            value={survey}
            onChange={handleSurveyChange}
            className="w-full p-2 mb-2 rounded-lg border text-black"
          >
            <option value="">Select a survey</option>
            <option value="3733e00f-545b-44b8-b1de-335b606e6102">
              first Survey
            </option>
            <option value="1">this would be another note</option>
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
