// https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

const caminhoDoArquivoMD = path.join(path.resolve(), 'files', 'texto_01.md')

function getFile(caminhoDoArquivoMD) {
  // fs.readFile(caminhoDoArquivoMD, 'utf-8', (err, data) => {
  //   if (err) showError(err)

  //   console.log(chalk.green(data))
  // })

  fs.promises
    .readFile(caminhoDoArquivoMD, 'utf-8')
    .then((data) => console.log(chalk.green(data)))
    .catch((err) => showError(err))
}

function showError(err) {
  throw new Error(chalk.red(err))
}

getFile(caminhoDoArquivoMD)
