'use strict';

module.exports = (function () {
  const containerWrapper = {}

  let Repository = (splits, create, context) => {
    let result = context || containerWrapper;
    for (let i = 0, s; result && (s = splits[i]); i++) {
      result = (s in result ? result[s] : (create ? result[s] = {} : undefined))
    }
    return result
  }

  const set = (name, value, context) => {
    const splits = name.split('.')
    const s = splits.pop()
    const result = Repository(splits, true, context)
    return result && s ? (result[s] = value) : undefined
  }

  const get = (name, create, context) => {
    if (!name) return false
    return Repository(name.split('.'), create, context);
  }

  const exists = (name, context) => {
    return get(name, false, context) !== undefined;
  }

  return { set, get, exists }
}())
