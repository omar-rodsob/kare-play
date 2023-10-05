import {Given, When, Then, BeforeAll} from "@cucumber/cucumber";
import { expect} from '@playwright/test';
import { page } from "../config";

Given('A List of documents from a user',async ()=>{
   expect(page.locator('.documentsList')).toHaveCount(3);
});

When('A Kare Employee clicks in a document to open',async ()=>{
    page.locator('tr:nth-child(2) td:nth-child(1) a:nth-child(1)').click();
});

Then('Verify that everything correspond with the user and expiration date',async ()=>{
    let dateGiven = (await page.locator('tr:nth-child(2) td:nth-child(2)').innerText()).valueOf();
    let todayDate = new Date();
    let dateGiven1 = new Date(dateGiven);
    expect(todayDate < dateGiven1 ).toBeTruthy();
});

Then('The user update the status to approved',async ()=>{
    await expect(page.locator('tr:nth-child(2) td:nth-child(4) button:nth-child(1)')).toBeDisabled();
    await page.selectOption('.documentSelect1',"approve");
    await expect(page.locator('tr:nth-child(2) td:nth-child(4) button:nth-child(1)')).toBeEnabled();
    await page.locator('tr:nth-child(2) td:nth-child(4) button:nth-child(1)').click();
});

Then('the document is updated',async ()=>{
    await expect(page.locator('tr:nth-child(2) td:nth-child(5) span:nth-child(1)')).toHaveText('approve');
});