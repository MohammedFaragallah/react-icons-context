import { createContext } from 'react';

import { defaultIcon } from './defaults';
import { Icons } from './types';

export const ReactIconsContext = createContext<Icons>({ default: defaultIcon });
