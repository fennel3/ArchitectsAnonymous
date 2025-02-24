import Notepad from "@/components/app/client/Notepad";

export type SurveyData = {
  notes: string;
  id: string;
  created_at: string;
};

export default async function Home() {

  return (
    <>
      <div className="h-dvh pb-10 flex flex-col">
        <div className="flex justify-center items-center p-10">
          <div className="mx-5">Architects Anonymous</div>
          <div className="mx-10">About</div>
          <div className="mx-10">All notes</div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <div className="max-w-lg w-full h-full bg-yellow-300 mx-7 shadow-lg rounded-md transform rotate-2 relative">
            <div className="absolute -top-11 left-56 bg-red-600 w-8 h-8 rounded-full shadow-xl flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>

            <div className="absolute -top-5 left-56 bg-gray-400 w-0.5 h-16 rotate-45 transform origin-top-left"></div>

            <p className="text-gray-800 font-semibold">Survey Notes</p>
            <Notepad />
          </div>
        </div>
      </div>
    </>
  );
}
