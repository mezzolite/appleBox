import { DeepPartial } from 'redux';
import { RootState } from '../store/configureStore';
import { createReduxStore } from '../store/test_utils/utils';

export interface PreloadWithStore {
  (store: ReturnType<typeof createReduxStore>): void;
}

export interface RenderWithContextOptions {
  preloadedState?: DeepPartial<RootState>;
  preloadWithStore?: PreloadWithStore;
}
