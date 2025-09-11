import Page from './page.js'

class DropdownPage extends Page {
    get dropdown() {
        return $('#dropdown');
    }

    get option1() {
        return $('[value="1"]');
    }

    get option2() {
        return $('[value="2"]');
    }

    async selectOption(option) {
        await this.dropdown.selectByVisibleText(option);
    }

    async open() {
        await super.open('dropdown');
    }
}

export default new DropdownPage();