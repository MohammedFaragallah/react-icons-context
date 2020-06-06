# react-icons-context

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-icons-context.svg)](https://www.npmjs.com/package/react-icons-context) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

fork from [react-social-icons](https://github.com/jaketrent/react-social-icons)

## Install

```bash
npm install --save react-icons-context @material-ui/core
```
```bash
yarn add react-icons-context @material-ui/core
```

## Usage

```tsx
import React from 'react';

import {
	ReactIconsProvider,
	defaultIcons,
	SocialIcon,
} from 'react-icons-context';

const App = () => {
	return (
		<ReactIconsProvider value={defaultIcons}>
			<SocialIcon network="facebook" />
			<SocialIcon url="https://github.com/MohammedFaragallah" />
		</ReactIconsProvider>
	);
};
```
## TODO
- [ ] tree shaking support
- [ ] more default icons
- [ ] remove material-ui dependency (maybe)


## License

MIT © [MohammedFaragallah](https://github.com/MohammedFaragallah)

# react-icons-context
