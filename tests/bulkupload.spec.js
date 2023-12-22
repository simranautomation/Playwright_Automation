const{test, expect}= require('@playwright/test')


test('report builder', async ({page}) => {

    await page.goto('https://app.dev.intelliflow.in/')
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
    await page.click('id=admin-dash-bulk-upload')
    await page.locator('(//div[@class="r_sel__input-container css-19bb58m"])[1]').selectOption({index:1})
    await page.waitForTimeout(5000)

})