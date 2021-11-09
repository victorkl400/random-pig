#!/usr/bin/env -S node -r esm
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv)).commandDir('scripts').demandCommand().help().argv
