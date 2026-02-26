import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators
    this.usernameInput = page.getByTestId('username-input');
    this.passwordInput = page.getByTestId('password-input');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Action: เปิดหน้าเว็บ
  async goto() {
    await this.page.goto('https://workshop-playwright.vercel.app/');
  }

  // Action: login
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

}