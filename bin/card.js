#!/usr/bin/env node
// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
}

const colors = {
  yellow: '#FCC603',
  cyan: '#a6f87e',
  green: '#9BEF8A',
  purple: '#ff80ed',
  magenta: '#F9618C',
  grey800: '#6D6D6D',
  grey300: '#C0C0C0'
}

// Text style using chalk lib:
const data = {
  name: chalk.hex(colors.yellow).bold('Felipe Rodrigues /'),
  handle: chalk.hex(colors.grey300)('rodriguesfelipe'),
  work: chalk.hex(colors.purple)('FullStack Developer'),
  github: chalk.hex(colors.purple)('https://github.com/rodriguesfelipeti'),
  linkedin: chalk.hex(colors.purple)('https://www.linkedin.com/in/felipe-eduardo-rodrigues-bb432490/'),
  npx: chalk.hex(colors.magenta)('npx rodriguesfelipe'),
  labelWork: chalk.hex(colors.cyan).bold('     Title:'),
  labelGitHub: chalk.hex(colors.cyan).bold('    GitHub:'),
  labelLinkedIn: chalk.hex(colors.cyan).bold('  LinkedIn:'),
  labelCard: chalk.hex(colors.yellow).bold('      Card:')
}

// Output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Concat all vars in just one
const output = heading + newline + newline + working + newline + newline + githubing + newline + linkedining + newline + newline + newline + carding

console.log(chalk.hex(colors.grey800)(boxen(output, options)))