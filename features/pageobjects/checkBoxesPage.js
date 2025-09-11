import Page from './page.js'

class CheckboxesPage extends Page {
    get checkboxes() {
        return $$('#checkboxes input[type="checkbox"]');
    }

    async selectCheckbox(index) {
        const checkbox = await this.checkboxes[index];
        if (!(await checkbox.isSelected())) {
            await checkbox.click();
        }
    }

    async open() {
        await super.open('checkboxes');
    }
}

export default new CheckboxesPage();