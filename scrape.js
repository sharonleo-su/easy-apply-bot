const { chromium } = require('playwright');

(async () => {
    // Launch Google Chrome using a specific path
    const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
    
    // Create a new page
    const page = await browser.newPage();
    
    // Navigate to a URL
    await page.goto('https://www.google.com');
    
    // Extract data from the page
    const title = await page.title();
    console.log('Page title:', title);
    
    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });
    
    // Close the browser
    await browser.close();
})();
