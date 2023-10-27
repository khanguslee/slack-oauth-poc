import express from "express";

import { InstallProvider } from "@slack/oauth";

import "dotenv/config";

const PORT = 3000;

console.log(process.env.SLACK_CLIENT_ID);
const installer = new InstallProvider({
  clientId: process.env.SLACK_CLIENT_ID || "",
  clientSecret: process.env.SLACK_CLIENT_SECRET || "",
  stateVerification: false, // NOTE: Some scenarios will mean "state" does not exist.
  stateSecret: "my-state-secret", // NOTE: Replace with a proper secret key
  // Instead of showing an "Add to Slack" page, just go straight to install
  // directInstall: true,
  // Render custom add to slack page. Can only be HTML
  //   renderHtmlForInstallPath: (url) => `<html><body><a href="${url}">Install my app!</a></body></html>`
  stateStore: {
    // generateStateParam's first argument is the entire InstallUrlOptions object which was passed into generateInstallUrl method
    // the second argument is a date object
    // the method is expected to return a string representing the state
    generateStateParam: async (installUrlOptions) => {
      console.log(installUrlOptions);

      return "";
    },
    // verifyStateParam's first argument is a date object and the second argument is a string representing the state
    // verifyStateParam is expected to return an object representing installUrlOptions
    verifyStateParam: async () => {
      // fetch saved installOptions from DB using state reference
      return {
        scopes: [""],
        userScopes: ["identity.basic,identity.email"],
        metadata: "random-metadata-here",
      };
    },
  },
});

const start = () => {
  const app = express();

  // Page to install slack app
  app.get("/slack/install", async (req, res) => {
    await installer.handleInstallPath(req, res, undefined, {
      scopes: [""],
      userScopes: ["identity.basic,identity.email"],
      metadata: "random-metadata-here",
    });
  });

  // Route to handle redirect url
  app.get("/slack/redirect_url", async (req, res) => {
    await installer.handleCallback(req, res);
  });

  // Default route
  app.use("/", (req, res) => {
    return res.send("JavaScript is AWESOME");
  });

  app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}...`);
  });
};

export default { start };
