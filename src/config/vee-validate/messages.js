import { configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

configure({
  generateMessage: localize({
    en: {
      messages: {
        ...en.messages,
        int_decimal: 'The {field} field must contain only numbers with up to two decimal places'
      }
    }
  })
})
