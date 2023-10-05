import {After,Before,setDefaultTimeout} from "@cucumber/cucumber";
import {Browser, firefox, Page} from 'playwright';

let page: Page;
let browser : Browser;

setDefaultTimeout(60000);

Before(async ()=>{
    try{
        browser = await firefox.launch({headless:false});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://uiproject-taupe.vercel.app/");
    }catch(error){
        console.log(`error!!!!! ${error}`);
    }
    return page;
});

After(async ()=>{
    await browser.close();
});

export {page, browser};