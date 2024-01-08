import nock from 'nock';
import os from 'os';
import getData from '../src/httpRequest/getData.js';
import fsp from 'node:fs/promises';
import path from 'node:path'
import writeData from '../src/jobfilepath/writeData.js';
import getFilename from '../src/jobfilepath/getFilename.js';
import buildPathToWrite from '../src/jobfilepath/buildPathToWrite.js';

nock.disableNetConnect();

const readFile = async (filepath) => await fsp.readFile(filepath, 'utf-8');
const getPath = (filepath) => path.join('__fixtures__', filepath); 

test('correct URL request', async () => {
    const spy = nock('https://ru.hexlet.io').get('/courses').reply(200);
    await getData('https://ru.hexlet.io/courses');
    expect(spy.isDone()).toBe(true);
});

test('correct returns data', async () => {
    const resultRequest = JSON.parse(await readFile(getPath('resultRequest.json')));
    const dataRequest = await readFile(getPath('dataRequest.txt'));

    console.log({resultRequest, dataRequest});

    nock('https://ru.hexlet.io').get('/courses').reply(200, resultRequest);
    const result = await getData('https://ru.hexlet.io/courses');
    // console.log(result);
    expect(result).toBe(dataRequest)
})

test('correct create filename', () => {
    const url = 'https://ru.hexlet.io/courses';
    const correctFilename = 'ru-hexlet-io-courses.html';
    const result = getFilename(url);

    expect(result).toBe(correctFilename);
})

test('correct build path', () => {
    const url = 'https://ru.hexlet.io/courses';

    const correctPath1 = path.join(process.cwd(), 'ru-hexlet-io-courses.html');
    const correctPath2 = path.join(process.cwd(), 'tmp', 'ru-hexlet-io-courses.html');

    const result1 = buildPathToWrite(process.cwd(), url);
    const result2 = buildPathToWrite('tmp', url);

    expect(result1).toBe(correctPath1);
    expect(result2).toBe(correctPath2);
});