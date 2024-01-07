#!/usr/bin/env node

import { program } from 'commander';
import pageloader from '../src/index.js';

program
    .name('pageloader')
    .description('Page loader utility')
    .version('1.0.0')
    .option('-o, --output [dir]', 'output dir (default: "/home/user/current-dir")')
    .argument('<url>')
    .action(async (url) => {
        await pageloader(url, program.opts().output);
    })

program.parse();