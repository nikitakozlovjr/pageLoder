import nock from 'nock';
import os from 'os';
import getData from '../src/httpRequest/getData.js';
import fsp from 'node:fs/promises';
import path from 'node:path'
import  

nock.disableNetConnect();

const readFile = async (filepath) => await fsp.readFile(filepath, 'utf-8');
const getPath = (filepath) => path.join('__fixtures__', filepath); 

test('correct URL request', async () => {
    const spy = nock('https://ru.hexlet.io').get('/courses').reply(200);
    await getData('https://ru.hexlet.io/courses');
    expect(spy.isDone()).toBe(true);
});

test('correct returns Data', async () => {
    const resultRequest = JSON.parse(await readFile(getPath('resultRequest.json')));
    const dataRequest = await readFile(getPath('dataRequest.txt'));

    console.log({resultRequest, dataRequest});

    nock('https://ru.hexlet.io').get('/courses').reply(200, resultRequest);
    const result = await getData('https://ru.hexlet.io/courses');
    // console.log(result);
    expect(result).toBe(dataRequest)
})