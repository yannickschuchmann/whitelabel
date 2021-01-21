This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Setup a new project

- Create new repo on github
- `cp -r ./whitelabel ./new-project`
- `cd new-project && rm -rf .git && git init`
- `git add . && git commit -m "Initial commit"`
- `git remote add origin git@github.com:new-repo`
- `git push -u origin master`
- Import project in vercel, choose repository & grant permissions
- Configure Domain in Vercel + add A or CNAME Record to Domain Nameserver (namecheap or aws)
- Add google analytics tracking id

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Deploy by pushing to master branch.

## Forms submission

We use Google spreadsheets to store forms data. See https://github.com/jamiewilson/form-to-google-sheets
Copy code from `vendor/googleSpreadsheetsTrigger.js`.
Use `deepwebsite Form Notification` Slack App to create an incoming webhook for your channel.
Add a channel here to get a webhook url: https://api.slack.com/apps/A019M7Z1S75/incoming-webhooks?
