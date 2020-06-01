import { CASES } from '@/utils/to-case-keys'

export default function getOption() {
  return {
    toResponseCase: CASES.CAMEL,
    toRequestCase: CASES.SNAKE,
  }
}
