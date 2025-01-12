What is CMS

CMS ( Content Management System ) ek software h jo website content ko manage karne keliye use hota h.

Isse non-technical log easily content edit our publish kar sakhte h bina code likhe.

---------------------------------------------------------------------------

What is Headless Sanity

Sanity aik headless CMS h, jo content ko backend per store karta h aur API ke through deliver karta h

Headless ka matlab h ke iska frontend pre-defined nahi hota, ap apna custom frontend bana sakhte ho ( React, Nextjs, etc)

---------------------------------------------------------------------------

Why we use Sanity CMS, why not others?

Sanity ko use karne ke liye kuch reasons:

Real-time editing: Content changes live update hoti h

Custom schemas: Apne data model ko customize karna assan h

Developer Friendly: API's aur SDK's kafi flexible h, especially with React/Next.js

Scalability: Large-scale projects ke liye perfect h

Rich Text Editor: Content Studio ke UI modern aur user friendly h.

Sanity un projects keliye best h jaha custumization aur scalibility zarurat ho. lekin agar apko pre-defined templates aur less technical tools chahiye, tw wordpress jaise CMS better ho sakhte h

---------------------------------------------------------------------------

Any other Headless CMS Systems except Sanity?

Sanity ke ilawa kuch popular headless CMS options:

Contentful: Developer-friendly aur scalable CMS.

Strapi: Open-source 









Step 01 : Setup Nextjs
run this cammand : npx create-next-app@14

Step 02 : Sanity (https://www.sanity.io/docs/cli)
# Installing the CLI globally
npm install --global sanity@latest

Step 03 : Sanity
npm create sanity@latest -- --template clean --create-project "learning-sanity-project" --dataset production






This step will help you create a Sanity project.
Step 1: Create a new Next.js project
npx create-next-app .
Step 2: Install Sanity Studio
You start by setting up your content editing environment. It’s called Sanity Studio, and you can configure and customize it with JavaScript. It runs in the browser. To develop locally, we need to run a development server so you can see your changes instantly.

To get started, run this in your command line:
npm create sanity@latest -- --template clean --create-project "learning-sanity-project" --dataset production
This will take you through a setup process by guiding you through the following steps:

Create an account. Select a login provider from the list of options, and confirm with Enter. After creating an account in the browser, come back to the command line window.
It will ask you the following questions.
Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
Would you like an embedded Sanity Studio? Yes
Would you like to use the Next.js app directory for routes? Yes
What route do you want to use for the Studio? /studio
Select project template to use Clean project with no predefined schemas
Would you like to add the project ID and dataset to your .env file? Yes
Wait a bit for the installation process to complete. When you get a Success! message, you're good to move on to the next step!! 🎉
Step 3: Run the Studio locally
npm run dev
This will start the next js project. Once the build is complete, you can head over to http://localhost:3000/studio. It will ask you to add the URL as a CORS origin. Click on Continue to open the Sanity management dashboard. From there, you need to add the CORS origin.

You should now see the Sanity Studio running in your browser
As you modify and save the code, the server will automatically rebuild the studio and refresh the browser.