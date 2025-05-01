const{test,expext,brwoser} = require('@playwright/test');

test("Based on BrowserName run different script", async ({ page, browserName }) => {


    test.setTimeout(60000)

    browserName = "webkit"

    if (browserName == "chromium") {

        await page.goto("https://www.flipkart.com/");
        await page.close()

    }
    else if (browserName == "firefox") {

        await page.goto("https://www.amazon.in/");
        await page.close()

    }

    else if (browserName == "webkit") {

        await page.goto("https://www.myntra.com/");
        await page.close()


    }


})

test("Click on youtube channel that is visible list of songs",async({page})=>{

    test.setTimeout(60000)

    await page.goto("https://www.youtube.com/")

    //const Bhakti_songs="shiva songs"

    const Melody_songs="english songs"

    if(Melody_songs){

        await page.locator("//input[@placeholder='Search']",{timeout:45000}).fill(Melody_songs)

        await page.locator("(//button[@aria-label='Search'])[1]").click()

        console.log("Justean barier songs")
    }

    else if(Bhakti_songs){

        await page.locator("//input[@role='combobox']",{timeout:45000}).fill(Bhakti_songs)
        
        await page.locator("(//button[@aria-label='Search'])[1]").click()

        console.log("God mahadeva songs")
    } 



})
