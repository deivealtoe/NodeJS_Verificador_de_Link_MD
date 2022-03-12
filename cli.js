import chalk from 'chalk'
import getFile from './index.js'

const variablesPassed = process.argv

async function processText(filePath) {
  const result = await getFile(filePath[2])
  console.log(chalk.yellow('Lista de links'), result)
}

processText(variablesPassed)