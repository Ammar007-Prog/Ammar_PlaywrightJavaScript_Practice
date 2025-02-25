class homePage {
    constructor(page){
        this.page = page
        this.menu = "//img[@alt='menu']"
        this.signOut = "//button[text()='Sign out']"
    }

    async logOutAction(){
        await this.page.click(this.menu);
        await this.page.click(this.signOut)
    }
}


export default homePage;