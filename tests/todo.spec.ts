import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
  });

  test('Add 3 todos, complete second, delete first', async ({ page }) => {

    const inputBox = page.getByPlaceholder('What needs to be done?');

  
    await inputBox.fill('Learn Playwright');
    await inputBox.press('Enter');

    await inputBox.fill('Buy groceries');
    await inputBox.press('Enter');

    await inputBox.fill('Read book');
    await inputBox.press('Enter');


    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(3);


    const secondCheckbox = todoItems.nth(1).getByRole('checkbox');
    await secondCheckbox.check();

    await expect(todoItems.nth(1)).toHaveClass(/completed/);

    await todoItems.nth(0).hover();
    await todoItems.nth(0).getByRole('button', { name: 'Delete' }).click();

    await expect(todoItems).toHaveCount(2);

  });

});

