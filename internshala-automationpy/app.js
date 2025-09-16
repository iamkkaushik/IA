// const fs = require("fs")
// require("chromedriver")
// const swd = require("selenium-webdriver")
// const By = swd.By
// const until = swd.until
// const credentials = require("./config/credentials.json")
// const answers = require("./config/answers.json")
// const url = require("./utils/urlBuilder").url

// const driver = new swd.Builder().forBrowser("chrome").build()
// driver.manage().window().maximize()

// let internships = []

// driver.get("https://internshala.com")
//     .then(async () => {
//         await driver.get(url)
//         try {
//             await driver.wait(until.elementLocated(By.className("subscription_alert")), 5000);
//             await (await driver.findElement(By.id("no_thanks"))).click()
//         }
//         catch (err) {
//             console.log(err)
//         }
//         finally {
//             let companies = await driver.findElements(By.css('.company > h4 > a'))
//             for (let i = 0; i < companies.length; i = i + 2) {
//                 let link = await companies[i].getAttribute("href")
//                 let profile = await companies[i].getText()
//                 let companyName = await companies[i + 1].getText()
//                 await internships.push({
//                     "profile": profile,
//                     "link": link,
//                     "company": companyName,
//                     "applied": "false"
//                 })
//             }
//             driver.get("https://internshala.com")
//                 .then(() => {
//                     return driver.findElement(By.className("#header > div > nav > div.nav-cta-container > button.login-cta"))
//                 })
//                 .then((loginModal) => {
//                     loginModal.click()
//                 })
//                 .then(() => {
//                     return driver.findElement(By.name("email"))
//                 })
//                 .then((email) => {
//                     email.sendKeys(credentials.email)
//                     return driver.findElement(By.name("password"))
//                 })
//                 .then((pwd) => {
//                     pwd.sendKeys(credentials.password)
//                     return driver.findElement(By.id("modal_login_submit"))
//                 })
//                 .then((loginButton) => {
//                     loginButton.click()
//                 })
//                 .then(async () => {
//                     await driver.wait(until.elementLocated(By.className("header_chat_notification link")), 15000)
//                     for (let i = 0; i < internships.length; i++) {
//                         if (internships[i].profile == "Web Development") {
//                             await driver.get(internships[i].link)
//                             await (await driver.findElement(By.className("btn btn-primary internship_detail_btn"))).click()
//                             await (await driver.findElement(By.className("btn btn-primary education_incomplete"))).click()
//                             await driver.wait(until.elementLocated(By.id("cover_letter")), 15000)
//                             let assesmentQuestion1 = await driver.findElement(By.id('cover_letter'))
//                             assesmentQuestion1.sendKeys(answers["1"])
//                             let assesmentQuestion2 = await driver.findElement(By.css('textarea[placeholder="e.g. I am available full time in Pune for the next 6 months, but will have exams for 15 days in June."]'))
//                             assesmentQuestion2.sendKeys(answers["2"])
//                             await (await driver.findElement(By.css('input[type="submit"]'))).click()
//                             console.log("Applied")
//                         }
//                     }
//                 })
//         }
//     })
//     .catch((err) => {
//         console.log(err)
//         driver.close()
//     })

// const fs = require("fs");
// require("chromedriver");
// const { Builder, By, until } = require("selenium-webdriver");
// const credentials = require("./config/credentials.json");
// const answers = require("./config/answers.json");
// const { url } = require("./utils/urlBuilder");
// const preference =require("./config/preferences.json");

// (async function applyToInternships() {
//     let driver;
//     try {
//         // Initialize WebDriver
//         driver = await new Builder().forBrowser("chrome").build();
//         await driver.manage().window().maximize();

//         // Navigate to Internshala homepage
//         await driver.get("https://internshala.com");

// //         // Close subscription alert if present
// //         // try {
// //         //     await driver.wait(until.elementLocated(By.id("no_thanks")), 5000);
// //         //     await (await driver.findElement(By.id("no_thanks"))).click();
// //         // } catch (error) {
// //         //     console.log("Subscription alert not found or already closed");
// //         // }

// //         // Retrieve internships

//         // Login
//         await driver.get("https://internshala.com");
//         try {
//             // Wait for the login button to be located
//             await driver.wait(until.elementLocated(By.css('#header > div > nav > div.nav-cta-container > button.login-cta')), 10000);
//             // Click on the login button
        
//             const loginButton = await driver.findElement(By.css('#header > div > nav > div.nav-cta-container > button.login-cta'));
//             await loginButton.click();
//         } catch (error) {
//             console.error("Error occurred while locating or clicking the login button:", error);
//         }
//         // await driver.findElement(By.className("hidden-xs.hidden-sm.btn.btn-primary.home_page_login_button")).click();
//         await driver.findElement(By.name("email")).sendKeys(credentials.email);
//         await driver.findElement(By.name("password")).sendKeys(credentials.password);
//         // await driver.findElement(By.id("modal_login_submit")).click();
//         await driver.findElement(By.css('#modal_login_submit')).click();
//         // await driver.wait(10000);

//         // #header > div > nav > div.collapse.navbar-collapse.navbar_desktop > ul > li:nth-child(6) > a > div
//         await driver.wait(until.elementLocated(By.css("#header > div > nav > div.collapse.navbar-collapse.navbar_desktop > ul > li:nth-child(6) > a > div")), 20000);
//         // "category": [
//         //     "Web Development",
//         //     "Front End Developer",
//         //     "Full Stack Development"#individual_internship_2488852 > div.button_container_card > div > a
//         // ],
        
//         // await driver.get(`https://internshala.com/internships/backend-development-internship/`);
//         await driver.get(`https://internshala.com/internships/${preference.category}-internship/`);
//         // #close_popup
//         try {
//             // Wait for the login button to be located
//             // await driver.wait(until.elementLocated(By.css('.hidden-xs.hidden-sm.btn.btn-primary.home_page_login_button')), 5000);
//             await driver.wait(until.elementLocated(By.css('#close_popup')), 5000);
//             // Click on the login button
//             // const loginButton = await driver.findElement(By.css('.hidden-xs.hidden-sm.btn.btn-primary.home_page_login_button'));
//             const exitButton = await driver.findElement(By.css('#close_popup'));
//             await exitButton.click();
//         } catch (error) {
//             console.error("Error occurred while locating or clicking the login button:", error);
//         }
//         //btn btn-secondary view_detail_button-outline
//         await driver.findElement(By.css('#individual_internship_2489027 > div.button_container_card > div > a > div')).click();

//         //  #details_container > div.detail_view > div.internship_details > div.buttons_container > a > button
//         await driver.findElement(By.css("#details_container > div.detail_view > div.internship_details > div.buttons_container > a > button")).click();
//         // #layout_table > div.proceed-btn-container > button
//         await driver.findElement(By.id("#layout_table > div.proceed-btn-container > button")).click();
//         // #cover_letter_holder > div.ql-editor.ql-blank
//         await driver.findElement(By.id("#cover_letter_holder > div.ql-editor.ql-blank")).sendKeys(answers.one);
//         // #options > div:nth-child(1) > label
//         await driver.findElement(By.id("#options > div:nth-child(1) > label")).click();

//         // #assessment_questions > div.custom-resume-container.form-group.has-success > label.custom-resume-label

//         // #submit
//         await driver.findElement(By.id("#submit")).click();

//         // const ao=`${preference.category}`;
//         // console.log(ao);
//         let internships = [];
//         console.log(await driver.findElements(By.css('.company > h4 > a')));
//         const companies = await driver.findElements(By.css('.company > h4 > a'));

//         for (let i = 0; i < companies.length; i += 2) {
//             const link = await companies[i].getAttribute("href");
//             const profile = await companies[i].getText();
//             const companyName = await companies[i + 1].getText();
//             internships.push({
//                 profile,
//                 link,
//                 company: companyName,
//                 applied: false
//             });
//         }

//         console.log(internships);
//         // Apply to internships
//         for (const internship of internships) {
//             if (internship.profile === "Web Development") {
//                 await driver.get(internship.link);
//                 await driver.findElement(By.className("btn.btn-primary.internship_detail_btn")).click();
//                 await driver.findElement(By.className("btn.btn-primary.education_incomplete")).click();
//                 await driver.wait(until.elementLocated(By.id("cover_letter")), 15000);
//                 await driver.findElement(By.id("cover_letter")).sendKeys(answers["1"]);
//                 await driver.findElement(By.css('textarea[placeholder="e.g. I am available full time in Pune for the next 6 months, but will have exams for 15 days in June."]')).sendKeys(answers["2"]);
//                 await driver.findElement(By.css('input[type="submit"]')).click();
//                 console.log("Applied to", internship.company);
//                 internship.applied = true;
//             }
//         }
//     } catch (error) {
//         console.error("Error occurred:", error);
//     } finally {
//         // Close the WebDriver session
//         // if (driver) {
//         //     await driver.quit();
//         // }
//     }
// })();


const fs = require("fs");
require("chromedriver");
const { Builder, By, until } = require("selenium-webdriver");
const credentials = require("./config/credentials.json");
const answers = require("./config/answers.json");
const { url } = require("./utils/urlBuilder");
const preference =require("./config/preferences.json");

(async function applyToInternships() {
    let driver;
    try {
        // Initialize WebDriver
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();

        // Navigate to Internshala homepage and login
        await driver.get("https://internshala.com");
        await driver.findElement(By.css('#header > div > nav > div.nav-cta-container > button.login-cta')).click();
        await driver.findElement(By.name("email")).sendKeys(credentials.email);
        await driver.findElement(By.name("password")).sendKeys(credentials.password);
        await driver.findElement(By.css('#modal_login_submit')).click();

        // Wait for the dashboard to load
        await driver.wait(until.urlIs('https://internshala.com/student/dashboard'), 10000);

        // Navigate to internship page based on preferences
        await driver.get(`https://internshala.com/internships/${preference.category}-internship/`);

        // Close any pop-ups if present
        // try {
        //     await driver.wait(until.elementLocated(By.css('#close_popup')), 5000);
        //     const exitButton = await driver.findElement(By.css('#close_popup'));
        //     await exitButton.click();
        // } catch (error) {
        //     console.error("Error occurred while locating or clicking the close button:", error);
        // }

        // Get a list of internships  #internship_list_container_1\
        // await driver.wait(until.elementLocated(By.css('.company > a')), 10000);
        // await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.company > a'))), 10000);
        
        // await driver.wait(until.elementLocated(By.css('.btn.btn-secondary.view_detail_button_outline')), 10000);
        // await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.btn.btn-secondary.view_detail_button_outline'))), 10000);
        // //btn btn-secondary view_detail_button_outline
        // const companiesa = await driver.findElements(By.css('.btn.btn-secondary.view_detail_button_outline'));
        // container-fluid individual_internship view_detail_button
        // await driver.wait(until.elementLocated(By.css('.button_easy_apply_t.view_detail_button')), 10000);
        // await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.button_easy_apply_t.view_detail_button'))), 10000);
        // const companiesa = await driver.findElements(By.css('.button_easy_apply_t.view_detail_button'));
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(By.css('.container-fluid.individual_internship.easy_apply.button_easy_apply_t')), 10000);
        await driver.wait(until.elementIsVisible(await driver.findElement(By.css('.container-fluid.individual_internship.easy_apply.button_easy_apply_t'))), 10000);
        const companiesa = await driver.findElements(By.css('.container-fluid.individual_internship.easy_apply.button_easy_apply_t'));

        // const companies = await driver.findElements(By.css('.company > a'));
        // console.log(companiesa);
        // await driver.wait(until.elementIsVisible(await driver.findElement(By.css('#internship_list_container_1'))), 10000);
        // console.log(companies);
        let internships = [];
        // for (let company of companiesa) {
        //     const href = await company.getAttribute('data-href');
        //     internships.push(href);
        // }
        for (let i = 2; i < companiesa.length; i += 3) {
            // const link = await companies[i].getAttribute("href");
            // console.log(link);
            // const profile = await companies[i].getText();
            // const companyName = await companies[i + 1].getText();
            // internships.push({
            //     profile,
            //     link,
            //     company: companyName,
            //     applied: false
            // });
            const link = await companiesa[i].getAttribute("data-source-cta");
            // console.log(link);
            internships.push({link});
        }
        console.log(internships);

        // Apply to internships//*[@id="cover_letter_holder"]/div[1]
        for (const internship of internships) {
            // await driver.get(internship.link);
            // await driver.findElement(By.css("#apply_now_button")).click();
            // await driver.findElement(By.css("#layout_table > div.proceed-btn-container > button ")).click();
            // await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[19]/div/div/div[2]/div[2]/form/div/div[2]/div[1]/div[4]/div/div[1]')), 15000);
            // const element = await driver.findElement(By.xpath('/html/body/div[1]/div[19]/div/div/div[2]/div[2]/form/div/div[2]/div[1]/div[4]/div/div[1]'));
            // await element.sendKeys(answers.one);
            // const label = await driver.findElement(By.css('label[for="check"]'));
            // await label.click();
            // await driver.findElement(By.css('input[type="submit"]')).click();
            // await sleep(5000);

            // await driver.get(internship.link);
            // await driver.findElement(By.css("#easy_apply_button")).click();
            // // await driver.findElement(By.css("#layout_table > div.proceed-btn-container > button ")).click();
            // await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[1]/div[3]/div/div[1]')), 15000);
            // const element = await driver.findElement(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[1]/div[3]/div/div[1]'));
            // await element.sendKeys(answers.one);

            await driver.get(internship.link);
            await driver.findElement(By.css("#apply_now_button")).click();
            // await driver.findElement(By.css("#layout_table > div.proceed-btn-container > button ")).click();
            await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[1]/div[3]/div/div[1]')), 15000);
            const element = await driver.findElement(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[1]/div[3]/div/div[1]'));
            await element.sendKeys(answers.one);
            
            try {
                await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[5]/div[2]/textarea')), 15000);
                const element1 = await driver.findElement(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[5]/div[2]/textarea'));
                await element1.sendKeys(answers.one);
            } catch (error) {
                console.error("Error occurred while locating or clicking the close button:", error);
            }

            try {
                await driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[6]/div[2]/textarea')), 15000);
                const element2 = await driver.findElement(By.xpath('/html/body/div[1]/div[20]/div/div/div[2]/div[2]/form/div/div[2]/div[6]/div[2]/textarea'));
                await element2.sendKeys(answers.one);
            } catch (error) {
                console.error("Error occurred while locating or clicking the close button:", error);
            }

            try {
                const label = await driver.findElement(By.css('label[for="check"]'));
                await label.click();
            } catch (error) {
                console.error("Error occurred while locating or clicking the close button:", error);
            }

            
            await driver.findElement(By.css('input[type="submit"]')).click();
            await driver.sleep(5000);

            // await driver.findElement(By.id('check')).sendKeys();
            // await driver.findElement(By.css("#assessment_questions > input[type=hidden]:nth-child(1)")).sendKeys("HELLO EVERONE ");
            // const checkbox = await driver.findElement(By.name('location_single'));
            // if (!(await checkbox.isSelected())) {
            //     // If not selected, click the checkbox to select it
            //     await checkbox.click();
            // }
            
            
            
            // if (internship.profile === "Web Development") {
            //     await driver.get(internship.link);
            //     await driver.findElement(By.className("btn.btn-primary.internship_detail_btn")).click();
            //     await driver.findElement(By.className("btn.btn-primary.education_incomplete")).click();
            //     await driver.wait(until.elementLocated(By.id("cover_letter")), 15000);
            //     await driver.findElement(By.id("cover_letter")).sendKeys(answers["1"]);
            //     await driver.findElement(By.css('textarea[placeholder="e.g. I am available full time in Pune for the next 6 months, but will have exams for 15 days in June."]')).sendKeys(answers["2"]);
            //     await driver.findElement(By.css('input[type="submit"]')).click();
            //     console.log("Applied to", internship.company);
            //     internship.applied = true;
            // }
        }
    } catch (error) {
        console.error("Error occurred:", error);
    } 
    finally {
        // Close the WebDriver session
        if (driver) {
            await driver.quit();
        }
    }
})();





