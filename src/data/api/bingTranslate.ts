import { v4 as uuidv4 } from 'uuid'
import { BING_TRANSLATE_API_KEY } from '~/constants/env'
import { Lang } from '~/constants/language'
import axios from '~/plugins/axios'

const endpoint = 'https://api.cognitive.microsofttranslator.com'

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
const location = 'japaneast'

export type Translate = {
  detectedLanguage: {
    language: Lang
    score: number
  }
  translations: { text: string; to: string }
}

type TranslateResult = {
  detectedLanguage: {
    language: Lang
    score: number
  }
  translations: { text: string; to: string }[]
}

/**
 * To translate
 *
 * @param {string} text content to be translated
 * @param {string} lang target language code.
 */
export const translate = async (
  text: string,
  lang: Lang = 'ja'
): Promise<Translate> => {
  const res = await axios({
    baseURL: endpoint,
    url: '/translate',
    method: 'post',
    headers: {
      'Ocp-Apim-Subscription-Key': BING_TRANSLATE_API_KEY,
      'Ocp-Apim-Subscription-Region': location,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString(),
    },
    params: {
      'api-version': '3.0',
      to: lang,
    },
    data: [
      {
        text,
      },
    ],
    responseType: 'json',
  })
  const data: TranslateResult[] = res.data
  if (data.length > 0 && data[0].translations.length > 0) {
    return {
      detectedLanguage: data[0].detectedLanguage,
      translations: data[0].translations[0],
    }
  } else {
    throw new Error()
  }
}
