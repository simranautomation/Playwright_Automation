const{test, expect}= require('@playwright/test')


test('report builder', async ({page}) => {

    //await page.goto('https://app.dev.intelliflow.in/')
    await page.goto('https://app.stage.intelliflow.in/')
    await page.click('id=LoginWorkspaceNameInput')
    await page.locator('id=LoginWorkspaceNameInput').fill('testers')
    await page.click('id=LoginEmailInput')
    await page.locator('id=LoginEmailInput').fill('simran.ghodke@intelliflow.ai')
    await page.click('id=LoginPasswordInput')
    await page.locator('id=LoginPasswordInput').fill('Simran@1996')
    await page.click('id=LoginSubmitButton')
    await page.click('id=LoginSubmitButton')
    await page.click('id=header-main-menu')
    await page.click('id=header-menu-admin-dash-img')
    await page.pause()
    await page.click('id=admin-dash-access-controller')
   //await page.locator("class=r_sel__input-container css-19bb58m").selectOption({label:'Car data'})
   //await page.locator('(//div[@class="r_sel__input-container css-19bb58m"])[1]').fill('App designer')
    //await page.locator('(//div[@class="r_sel__input-container css-19bb58m"])[1]').selectOption({index:'1'});
    await page.locator('svg').first().click();
    await page.getByRole('option', { name: 'App Designer' }).click();
    await page.locator('.selectRole > div > div > #customSelect-select > .r_sel__control > .r_sel__value-container > .r_sel__input-container').click();
    await page.getByRole('option', { name: 'DEFAULT ROLES TESTERS' }).click();
    await page.getByRole('button', { name: 'App Designer' }).click();
    await page.locator('p').filter({ hasText: /^Create Application$/ }).locator('#flexSwitchCheckDefault').uncheck();
    await page.getByRole('button', { name: 'Update' }).click();
    await page.locator('#dropdown-basic').click();
    await page.getByRole('button', { name: 'Logout' }).click();
    await page.waitForTimeout(5000)
})