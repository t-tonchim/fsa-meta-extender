export default (exMeta, name) => actions => (
  Object.entries(actions).reduce((acc, [key, action]) => {
    const orgCreator = action
    const type = action().type

    action = (...args) => {
      const value = orgCreator(...args)
      const meta = {...value.meta, [name]: exMeta[type]}
      return {...value, meta}
    }
    action.toString = () => type

    return {...acc, [key]: action }
  }, {})
)
