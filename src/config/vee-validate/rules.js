import { defineRule } from 'vee-validate'
import { required, integer, min_value } from '@vee-validate/rules'

defineRule('required', required)
defineRule('integer', integer)
defineRule('min_value', min_value)
defineRule('int_decimal', (value) => {
  if (!value || !value.length) {
    return true
  }

  if (!/^-?\d+(\.\d{1,2})?$/.test(value)) {
    return false
  }

  return true
})
