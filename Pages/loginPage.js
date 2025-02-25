class loginPage {
    constructor(page){
        this.page = page
        this.userId = "#email1"
        this.password = "#password1"
        this.buttonSignIn = "//button[text()='Sign in']"
    }


    async loginApplication(){
        await this.page.locator(this.userId).fill("ammar.hussain7j@gmail.com")
        await this.page.fill(this.password, "qwert123");
        await this.page.click(this.buttonSignIn);   
    }
}

export default loginPage;