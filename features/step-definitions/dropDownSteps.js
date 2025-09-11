import { Given, When, Then } from '@wdio/cucumber-framework'
import DropdownPage from '../pageobjects/dropDownPage.js'

Given('estoy en la página de dropdown', async () => {
    await DropdownPage.open()
})

When('selecciono la opción {string}', async (option) => {
    await DropdownPage.selectOption(option)
})

Then('la opción {string} debería estar seleccionada', async (option) => {
    const selectedText = await DropdownPage.dropdown.getText()
    expect(selectedText).toContain(option)
})