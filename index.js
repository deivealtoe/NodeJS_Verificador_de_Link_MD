// https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

const filePath = path.join(path.resolve(), 'files', 'texto_01.md')

async function getFile(filePath) {
  try {
    const text = await fs.promises.readFile(filePath, 'utf-8')
    console.log(chalk.green(text))
  } catch (err) {
    showError(err)
  }
}

function showError(err) {
  throw new Error(chalk.red(err))
}

function extractLinks(text) {
  const regex = /\[([^]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const extractedLinks = text.match(regex)
  console.log(extractedLinks)
}

getFile(filePath)
extractLinks(getFile(filePath))

// \[[^]]*\]
// \(https?:\/\/[^$#\s].[^\s]*\)
// \[([^]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)
