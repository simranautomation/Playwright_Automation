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
    await page.waitForTimeout(3000)
    await page.click('id=header-main-menu')
    await page.click('id=header-menu-admin-dash-img')
    await page.click('id=admin-report-builder')
    await page.locator('//input[@class="px-1 py-1 mt-1 report-name"]').fill('App2')
    await page.locator('//select[@class="data-model-btn px-1 py-1 mt-1"]').selectOption({value:'home-page.Data'})
    await page.click('// button[@class="secondaryButton secondaryButtonColor create-report-btn "]')
    await page.locator('.Droppable > div').click();
    await page.locator('//div[@class="px-2 pt-2 pb-3 datamodel-body"]').dragTo('Droppable py-2')
    await page.waitForTimeout(5000)
    

})