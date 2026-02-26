import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';

test.describe('Login using Page Object Model', () => {

  test('Login Success', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    // เปิดหน้า login
    await loginPage.goto();

    // login
    await loginPage.login('admin', 'admin123');

    // ตรวจสอบว่าไปหน้า home
    await homePage.expectHomeVisible();

  });

});