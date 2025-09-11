import { Given, When, Then } from '@wdio/cucumber-framework'
import CheckboxesPage from '../pageobjects/checkboxesPage.js'

Given('estoy en la página de checkboxes', async () => {
    await CheckboxesPage.open();
});

When('selecciono la primera casilla', async () => {
    await CheckboxesPage.selectCheckbox(0);
});

Then('la primera casilla debería estar seleccionada', async () => {
    const isSelected = await CheckboxesPage.checkboxes[0].isSelected();
    await expect(isSelected).toBe(true);
});