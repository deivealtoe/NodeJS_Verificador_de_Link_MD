// https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

import chalk from 'chalk'
import fs from 'fs'

async function getFile(filePath) {
  try {
    const text = await fs.promises.readFile(filePath, 'utf-8')
    return extractLinks(text)
  } catch (err) {
    showError(err)
  }
}

function showError(err) {
  throw new Error(chalk.red(err))
}

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm

  const arrayResults = []
  let temp

  while ((temp = regex.exec(text)) != null) {
    arrayResults.push({
      [temp[1]]: temp[2]
    })
  }
  
  return arrayResults.length === 0 ? 'Não há links' : arrayResults
}

export default getFile