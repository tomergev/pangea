# Simple Pangea App 

This app uses the redact and the secure audit log apis. It's a simple app where a user can write a message which is then sent to the redact api to remove any senstive information. The message is then posted to the secure audit log. There is also a simple table of all the audits logs as well.

## Getting Started

1. Clone this repo

```
  git clone https://github.com/tomergev/pangea.git  
```
2. Run `npm init`
3. Create a `.env.local` file in the root directory   
4. In your pangea developer's console, create a token and enable redact and secure audit log
5. Create the variable: `NEXT_PUBLIC_PANGEA_TOKEN` and assign it to the newly created token in the `.env.local` file  

```
  NEXT_PUBLIC_PANGEA_TOKEN=<TOKEN>
```
6. Head to the secure audit log dashboard and copy the `config_id` and assign this value to the `NEXT_PUBLIC_PANGEA_AUDIT_CONFIG_ID` variable in the `.env.local` file as well
```
  NEXT_PUBLIC_PANGEA_AUDIT_CONFIG_ID=<CONFIG_ID>
```

7. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To see a working example of this application headover to this url: [https://pangea-pk38.vercel.app/](https://pangea-pk38.vercel.app/)

## Notes

Here's the prompt I received to make this application: 

Demo the usage of 2 or more services and share your app with us through a public github repository, with a README.md file that layouts which services are used, a description of the application, and instructions with how to run/use the applications locally

It's not a lot of information to make an application with. I decided to make an extremely barebones application. There's no custom CSS however, I did use React Bootstrap just to be able to display polished components without needing to write any CSS. 

I placed all of the business logic of the application in `src/app/page.js` and `utils/pangea.js`. I wanted to make the simple business logic as easy as possible for anyone to read so therefore I didnt want to place this logic in to too many componenets/files. 

I would appreciate any feedback. I can continue to add on to this project if I receive more guidance in what you guys are looking for. Currently, I dont have a lot to go on so that's why I decided to make such a barebones application. Thanks for taking the time to read this and hope that you have a great day!  



