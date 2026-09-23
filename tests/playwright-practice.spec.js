// @ts-check
import { test, expect } from '@playwright/test';

test('practice test', async ({ page }) => {
    //navigate to https//google.com
    await page.goto('https://google.com');

    //pause for 3 seconds
    await page.waitForTimeout(3000); 

    

});
