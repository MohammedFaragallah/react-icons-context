import { createContext } from 'react';

import { defaultIcons } from './defaultIcons';
import { Icons } from './types';

export const ReactIconsContext = createContext<Icons>(defaultIcons);

export const {
	Provider: ReactIconsProvider,
	Consumer: ReactIconsConsumer,
} = ReactIconsContext;
