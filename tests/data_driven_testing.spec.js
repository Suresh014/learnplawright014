import { test, expect } from '@playwright/test';

  const creds={
    username:"Admin",
    password:"admin123",
 }
 const employer = {

      empo01 : "SrDeveloper",
      empo02 : "SrTester",
      empo03 : "SrITSupport",
      empo04 : "SrSecurity",
 }


for(let empo in employer){

test(`data driven testing   - ${employer[empo]}`,async ({page}) => {

   test.setTimeout(60000)

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.locator("input[name='username']").fill(creds.username)

   await page.locator("input[type='password']").fill(creds.password)

   await page.locator("button[type='submit']").click()

   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

   await expect(page.locator('ul[class="oxd-main-menu"]')).toBeVisible()
   await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

   
   await page.locator("//li[contains(.,'Job')]").click();
   await page.locator("//a[normalize-space(text())='Employment Status']").click();
   await page.locator("//button[contains(.,'Add')]").click();

   await page.locator("//label[normalize-space(text())='Name']/following::input").fill(employer[empo]);
   await page.locator("//button[contains(.,'Save')]").click();
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")
})
}