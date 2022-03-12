import chalk from 'chalk'
import getFile from './index.js'
import validateUrls from './http_validation.js'

const variablesPassed = process.argv

async function processText(filePath) {
  const result = await getFile(filePath[2])

  if (filePath[3] === 'validar') {
    console.log(chalk.yellow('Links validados: '), await validateUrls(result))
  } else {
    console.log(chalk.yellow('Lista de links: '), result)
  }
}

processText(variablesPassed)