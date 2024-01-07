#!/usr/bin/env node

import { program } from 'commander';

program
    .name('pageloader')
    .description('Page loader utility')
    .version('1.0.0')
    .option('-o, --output <dir>', 'output dir (default: "/home/user/current-dir")')
    .argument('<url>')
    .action((__url) => {
        console.log(`Go! -> ${program.opts().format}`);
    })

program.parse();