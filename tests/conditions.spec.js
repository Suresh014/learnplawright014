const{browser, test, expect}  = require('@playwright/test');
const { TIMEOUT } = require('node:dns');

test("click one of the elements that is visible out of five",async({page})=>{

    test.setTimeout(60000)

    await page.goto("https://www.website.com/?source=SC&country=IN")

    const start_for_free = page.getByRole("link",{name:"START FOR FREE"})

    const get_email = page.getByRole("link",{name:"GET EMAIL"})

    const buy_domain = page.getByRole("link",{name:"BUY DOMAIN"})

    const get_scheduling = page.getByRole("link",{name:"GET SCHEDULING"})

    const sell_products = page.getByRole("link",{name:"SELL PRODUCTS"})

    if(await get_email.isVisible()){

        await page.locator("//div[@class='sitebuilder']/following-sibling::div[1]")

        await page.locator("//a[@title='Get Email']",{timeout:10000}).click()

        console.log("Clicked on get email")

    }
    else if(await start_for_free.isVisible()){

        await page.locator("//a[@title='Start For Free']",{timeout:10000}).click()

        console.log("Clicked on start for free")

    }
    else if(await buy_domain.isVisible()){

        await page.locator("//a[@title='Buy Domain']",{timeout:10000}).click()

        console.log("Clicked on Buy_domain")
    }    
    else if(await get_scheduling.isVisible()){

        await page.locator("//a[@title='Get Scheduling']",{timeout:10000}).click()
        console.log("Click on get_scheduling")
    }
    else if(await sell_products.isVisible()){

        await page.locator("//a[@title='Sell Products']",{timeout:10000}).click()
        console.log("Click on sell_products")
    }


    
})

