import Page from './page.js'

class AddRemoveElementsPage extends Page {
    get addElementButton() {
        return $('button=Add Element');
    }

    get deleteButton() {
        return $('button=Delete');
    }

    async addElement() {
        await this.addElementButton.click();
    }

    async deleteElement() {
        await this.deleteButton.click();
    }

    async open() {
        await super.open('add_remove_elements/');
    }
}

export default new AddRemoveElementsPage();