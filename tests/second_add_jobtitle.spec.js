const {test,expect} = require('@playwright/test');

import data from "../test_data/login.json"

import job_data from "../test_data/add_jobdetails.json"

test('Verify add job title with mandatory fields',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@placeholder='Username']").fill(data.username)

    await page.locator("//input[@type='password']").fill(data.password)

    await  page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()

    await page.locator("//li[contains(.,'Job')]").click()

    await page.locator("//a[normalize-space(text())='Job Titles']").click()

    await page.locator("//button[contains(.,'Add')]").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
 
    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(job_data.Jobtitle)

    await page.locator("//textarea[@placeholder='Type description here']").fill(job_data.Jobdescription)

    await page.locator("//button[@type='submit']").click()



})
