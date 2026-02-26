import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {

  readonly page: Page;
  readonly inputBox: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputBox = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(text: string) {
    await this.inputBox.fill(text);
    await this.inputBox.press('Enter');
  }

  async expectTodoCount(count: number) {
    await expect(this.todoItems).toHaveCount(count);
  }

  async completeTodo(index: number) {
    await this.todoItems.nth(index).getByRole('checkbox').check();
  }

  async expectTodoCompleted(index: number) {
    await expect(this.todoItems.nth(index)).toHaveClass(/completed/);
  }

  async deleteTodo(index: number) {

  const item = this.todoItems.nth(index);

  await item.hover();

  await item.locator('button.destroy').click();

}

}