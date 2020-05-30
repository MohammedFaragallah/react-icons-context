# react-icons-context

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-icons-context.svg)](https://www.npmjs.com/package/react-icons-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

fork from [react-social-icons](https://github.com/jaketrent/react-social-icons)

## Install

```bash
npm install --save react-icons-context
```
```bash
yarn install react-icons-context
```

## Usage

```tsx
import React from 'react';

import {
	ReactIconsContext,
	defaultIcons,
	SocialIcon,
} from 'react-icons-context';

const App = () => {
	return (
		<ReactIconsContext.Provider value={defaultIcons}>
			<SocialIcon network="facebook" />
			<SocialIcon url="https://github.com/MohammedFaragallah" />
		</ReactIconsContext.Provider>
	);
};
```

## License

MIT © [MohammedFaragallah](https://github.com/MohammedFaragallah)

# react-icons-context
