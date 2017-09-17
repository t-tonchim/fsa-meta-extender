var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default ((exMeta, name) => actions => Object.entries(actions).reduce((acc, [key, action]) => {
  const orgCreator = action;
  const type = action().type;

  action = (...args) => {
    const value = orgCreator(...args);
    const meta = _extends({}, value.meta, { [name]: exMeta[type] });
    return _extends({}, value, { meta });
  };
  action.toString = () => type;

  return _extends({}, acc, { [key]: action });
}, {}));