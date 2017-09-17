# fsa-meta-extender
Flux standard action meta extender.

[![NPM](https://nodei.co/npm/fsa-meta-extender.png)](https://nodei.co/npm/fsa-meta-extender/)

# Getting Started

## Installation

```bash
$ npm install --save fsa-meta-extender
```

or

```
$ yarn add fsa-meta-extender
```

## Usage

```js
// meta/index.js

import metaExtenderCreator from 'fsa-meta-extender'

const extraMeta = {
  FOO: 'foo'
}

// second argument is meta property name.
export default metaExtenderCreator(extraMeta, 'extraMeta')
```

```js
// actions/index.js

import mapExtraMeta from './meta'

const FOO = 'FOO'
const fooAction = arg => { type: FOO, payload: arg }
export default mapExtraMeta({ fooAction })

/*
actions.fooAction
=> FOO
actions.fooAction('hello')
=>
{
  type: FOO,
  payload: 'hello',
  meta: {
    extraMeta: 'foo'
  }
}
*/
```

or if you use [redux-actions](https://github.com/reduxactions/redux-actions)

```js
import {createActions} from 'redux-actions'
import mapExtraMeta from './meta'

export default mapExtraMeta(createActions('FOO'))
```
