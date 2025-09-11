import { Given, When, Then } from '@wdio/cucumber-framework'
import AddRemoveElementsPage from '../pageobjects/addRemoveElementsPage.js'

Given('estoy en la página de Add-Remove Elements', async () => {
    await AddRemoveElementsPage.open();
});

When('agrego un nuevo elemento', async () => {
    await AddRemoveElementsPage.addElement();
});

Then('debería ver el botón de Delete', async () => {
    await expect(AddRemoveElementsPage.deleteButton).toBeDisplayed();
});

When('elimino el elemento', async () => {
    await AddRemoveElementsPage.deleteElement();
});

Then('el botón de Delete no debería estar visible', async () => {
    await expect(AddRemoveElementsPage.deleteButton).not.toBeDisplayed();
});