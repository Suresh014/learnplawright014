import { test, expect } from '@playwright/test';
import data from "../test_data/login.json"

test("verify login with valid credentials", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@placeholder='Username']").fill(data.username)

    await page.locator("//input[@type='password']").fill(data.password)

    await page.locator("//button[contains(.,'Login')]").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    
})

test("verify login with valid username and invalid password", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@placeholder='Username']").fill("Admin")

    await page.locator("//input[@type='password']").fill("admin1234")

    await page.locator("//button[contains(.,'Login')]").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    
})

test("verify login with invalid username and valid password", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@placeholder='Username']").fill("Admin")

    await page.locator("//input[@type='password']").fill("admin123")

    await page.locator("//button[contains(.,'Login')]").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    
})

test("verify login with invalid username and invalid password", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@placeholder='Username']").fill("Admin")

    await page.locator("//input[@type='password']").fill("admin123")

    await page.locator("//button[contains(.,'Login')]").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

    

    
})