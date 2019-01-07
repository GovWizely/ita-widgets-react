const puppeteer = require('puppeteer');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:3000');
});

test('main title is present', async () => {
  const mainTitleElement = '.root > h1';
  const mainTitleText = await page.$eval(mainTitleElement, e => e.innerHTML);
  await page.waitForSelector(mainTitleElement);
  expect(mainTitleText).toBe('ITA Search Widgets');
})

describe('consolidated screening list', () => {
  test('shows the title', async () => {
    const titleElement = '#widget-container > div > div:nth-child(3) > form > h3';
    const titleText = await page.$eval(titleElement, e => e.innerHTML);
    await page.waitForSelector(titleElement);
    expect(titleText).toBe('Search the Consolidated Screening List:');
  });

  test('searching returns results', async () => {
    const inputField = "#widget-container > div > div:nth-child(3) > form > input[type='text']";
    const searchButton = "#widget-container > div > div:nth-child(3) > form > button";
    const resultsHeader = "#widget-container > div > div:nth-child(3) > div.resultsList > p"; // this element will be present if successful, even if it's zero results
    await page.waitForSelector(inputField);
    await page.type(inputField, "Smith");
    await page.click(searchButton);
    await page.waitForSelector(resultsHeader, 20000);
    await page.click('#clearButton');
  });
});

describe('trade leads', () => {
  test('shows title and a dropdown menu', async ()=> {
    const titleElement = "#widget-container > div > div:nth-child(6) > form > h3";
    const dropdownMenu = "#widget-container > div > div:nth-child(6) > form > div.Dropdown";
    await page.waitForSelector(dropdownMenu);
    const titleText = await page.$eval(titleElement, e => e.innerHTML);
    expect(titleText).toBe('Search Trade Leads:');
  });

  test('searching with a text query returns results', async () => {
    const inputField = "#widget-container > div > div:nth-child(6) > form > input[type='text']";
    const searchButton = "#widget-container > div > div:nth-child(6) > form > button";
    const resultsHeader = "#widget-container > div > div:nth-child(6) > div.resultsList > p";
    await page.waitForSelector(inputField);
    await page.type(inputField, "computer");
    await page.click(searchButton);
    await page.waitForSelector(resultsHeader, 20000);
    await page.click('#clearButton');
  });
});

describe('trade events', () => {
  test('shows title and a dropdown menu', async ()=> {
    const titleElement = "#widget-container > div > div:nth-child(9) > form > h3";
    const dropdownMenu = "#widget-container > div > div:nth-child(9) > form > div.Dropdown";
    const titleText = await page.$eval(titleElement, e => e.innerHTML);    
    await page.waitForSelector(dropdownMenu);
    expect(titleText).toBe('Search Trade Events:');
  });

  test('searching with a text query returns results', async () => {
    const inputField = "#widget-container > div > div:nth-child(9) > form > input[type='text']";
    const searchButton = "#widget-container > div > div:nth-child(9) > form > button";
    const resultsHeader = "#widget-container > div > div:nth-child(9) > div.resultsList > p";
    await page.waitForSelector(inputField);
    await page.type(inputField, "computer");
    await page.click(searchButton);
    await page.waitForSelector(resultsHeader, 20000);
    await page.click('#clearButton');
  });
});

describe('export assistance centers', () => {
  test('shows title', async ()=> {
    const titleElement = "#widget-container > div > div:nth-child(12) > form > h3";
    const titleText = await page.$eval(titleElement, e => e.innerHTML);    
    expect(titleText).toBe('Search Export Assistance Centers:');
  });

  test('searching with a zipcode returns results', async () => {
    const inputField = "#widget-container > div > div:nth-child(12) > form > input[type='text']";
    const searchButton = "#widget-container > div > div:nth-child(12) > form > button";
    const resultsHeader = "#widget-container > div > div:nth-child(12) > div.resultsList > p";
    await page.waitForSelector(inputField);
    await page.type(inputField, "99950");
    await page.click(searchButton);
    await page.waitForSelector(resultsHeader, 20000);
    await page.click('#clearButton');
  });
});

describe('international office locations', () => {
  test('shows title and a dropdown menu', async ()=> {
    const titleElement = "#widget-container > div > div:nth-child(15) > form > h3";
    const dropdownMenu = "#widget-container > div > div:nth-child(15) > form > div.Dropdown";
    const titleText = await page.$eval(titleElement, e => e.innerHTML);    
    await page.waitForSelector(dropdownMenu);
    expect(titleText).toBe('Search International Office Locations:');
  });

  test('searching with a text query returns results', async () => {
    const inputField = "#widget-container > div > div:nth-child(15)> form > input[type='text']";
    const searchButton = "#widget-container > div > div:nth-child(15) > form > button";
    const resultsHeader = "#widget-container > div > div:nth-child(15) > div.resultsList > p";
    await page.waitForSelector(inputField);
    await page.type(inputField, "Portsmouth");
    await page.click(searchButton);
    await page.waitForSelector(resultsHeader, 20000);
    await page.click('#clearButton');
  });
});

afterAll(() => browser.close());