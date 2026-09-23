import { test, expect } from "@playwright/test";

test("practice test", async ({ page }) => {
  //navigate to https//google.com
  await page.goto("https://google.com");

  //pause for 3 seconds
  await page.waitForTimeout(3000);

  let searchBox = page.locator("//textarea[@class = 'gLFyf']");

  await page.waitForTimeout(3000);

  await searchBox.type("CYDEO");

  await page.waitForTimeout(3000);

  await searchBox.press("Enter");

  await page.waitForTimeout(3000);


});



/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" 
autofocus="" aria-label="Search" placeholder="" aria-autocomplete="both" 
aria-expanded="true" aria-haspopup="false" autocapitalize="off" autocomplete="off" 
autocorrect="off" id="ti6dpd" maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" data-ved="0ahUKEwje9bHJ6-yWAxXYmWoFHYotFCAQ39UDCBI" 
aria-activedescendant="" style=""></textarea>
*/

//textarea[@class = "gLFyf"]

