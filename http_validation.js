import axios from 'axios'

function handlingError(err) {
  throw new Error(err.message)
}

function generateLinksArray(objectArray) {
  return objectArray.map((linkObject) => {
    return Object.values(linkObject).join()
  })
}

async function statusCheck(urlsArray) {
  try {
    const statusArray = await Promise.all(urlsArray.map(async (url) => {
      const response = await axios.get(url)
      return response.status
    }))
  
    return statusArray
  } catch (err) {
    handlingError(err)
  }
}

async function validateUrls(objectArray) {
  const links = generateLinksArray(objectArray)
  const statusLinks = await statusCheck(links)
  
  const results = objectArray.map((linkObject, index) => {
    return {
      ...linkObject,
      status: statusLinks[index]
    }
  })

  return results
}

export default validateUrls