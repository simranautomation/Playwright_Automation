import {test, expect} from '@playwright/test'


test('Selectors demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('simran')
    //login button 
    await page.locator('#login-button').click()
    //Using Xpath
    await page.locator('xpath=//input[@name="password"]').fill('faraday')
    await page.locator('//input[@name="password"]').fill('Ramanujan')
    //Using Text
    await page.locator('text=Login').click();
    await page.locator('input:has-text("LOGIN")').click();
    

});
