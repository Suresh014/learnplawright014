const{test,expect} = require("@playwright/test")

// import data from "../test_data/swag.json"



test("Verify login with valid credentials",async({page})=>{

    const username="standard_user"
    const password="secret_sauce"

    test.setTimeout(60000)

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("//input[@data-test='username']").fill(username)

    await page.locator("//input[@data-test='password']").fill(password)

    await page.locator("//input[@type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")


})

test("Verify login with valid username and invalid password",async({page})=>{

    const username="locked_out_user"
    const password="secret_sauce"

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("//input[@data-test='username']").fill(username)

    await page.locator("//input[@data-test='password']").fill(password)

    await page.locator("//input[@type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Sorry, this user has been locked out.')]")).toBeVisible()


})

