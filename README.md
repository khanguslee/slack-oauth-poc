# Slack OAuth POC

Quick POC to test out OAuth with Slack Apps.

## Getting Started

Create `.env` file in `packages/backend`

```
SLACK_CLIENT_ID="<client-id>"
SLACK_CLIENT_SECRET="<client-secret>"
```

```bash

# Run server locally
npm run backend dev

# Run front-end locally
npm run frontend dev

# Run ngrok tunnel to expose back-end port + host in HTTPS protocol
ngrok http 3000
```

Copy the generated ngrok tunnel link and add it to the `REDIRECT_URL` in `App.tsx` and to Redirect URLs in Slack App page.

### Adding slack app

#### Front-end

1. Add via front-end app via `http://localhost:5173/`
2. Click "Add to Slack" button
3. Follow steps

#### Back-end

1. Go to `<ngrok-link>/slack/install`
2. Follow steps
