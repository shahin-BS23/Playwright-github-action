import { test, expect } from '@playwright/test';

test.describe('Test for github action',async () => {
  
  test('Navigate to the login page',async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    expect(await page.url()).toEqual('https://www.saucedemo.com/');
  });

  test('Do login',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click;

    expect(await page.locator(',shopping_cart_link').isVisible);
  })

})