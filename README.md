# ArchitectsAnonymous

A simple note taking app for architects / surveyors. This was a take home tech test that was to be completed within 3-4 hours!

to run this project

git clone this repo
cd the repo folder

npm install
(This should install Next.js and all other dependencies listed in package.json)

npm run dev

you also need to make a file called .env and within this type the following

API_KEY=

then whack in the api key after the = and youre good to go.

05/03/2025
Realised I hadn't listed the assumptions/future improvements made with this project!

Assumptions:
 - Local storage was used to store notes on the browser. This wouldnt work across multiple devices for offline notes.
 - For this task only one existing survey is being updated. And with that only the notes section of this survey.

Future improvements:

Realistic
 - styling needs improvement.
 - update states - user needs feedback on clicking buttons to show it has worked.
 - more error handling - this was made very quickly and needs more error handling in the codebase.
 - review accessibility - text size? 

Super duper:
 - extend the survey type to add more features. Images? make a login.
 - speed of app - remove use effects for survey? its only being used once.
 - text to speech.
 - adding 2 ai features - neaten notes and generate a survey. ChatGPT has a way of sending and receiving json it has edited using prerequisites like making notes neater. It would be really cool to use this to have your notes neatened or even have final surveys generated.
