import "./App.css";

function App() {
  const SLACK_CLIENT_ID = "3779108016802.6091136053718";
  const SCOPE = "";
  const USER_SCOPE = "identity.basic,identity.email";
  const REDIRECT_URL = "https://de1c-60-240-93-213.ngrok.io/auth/slack/callback";
  const addToSlackUrl = `https://slack.com/oauth/v2/authorize?client_id=${SLACK_CLIENT_ID}&scope=${SCOPE}&user_scope=${USER_SCOPE}&redirect_uri=${REDIRECT_URL}`;
  return (
    <>
      <div>
        <a href={addToSlackUrl}>
          <img
            alt="Add to Slack"
            height="40"
            width="139"
            src="https://platform.slack-edge.com/img/add_to_slack.png"
            srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          />
        </a>
      </div>
    </>
  );
}

export default App;
