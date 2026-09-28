import { test } from "@playwright/test";


  test(' @env-test Testing environment variables ', async ({ page }) => {
    

    console.log('Username is: ' + process.env.PRACTICE_USERNAME);
    console.log('Password is: ' + process.env.PRACTICE_PASSWORD);


});


test("Bypass Authentication by encoding the credentials in base64 format", async ({page,}) => {
  
  let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

  page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCredentials}` });

  page.goto("https://the-internet-5chk.onrender.com/basic_auth");

  await page.waitForTimeout(2000);
});




