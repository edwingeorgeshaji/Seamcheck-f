import type { components, paths } from './generated/index';
type Product=components['schemas']['Product'];
export const total=(p:Product):number=>p.price * 2;
export type Request=paths['/products']['get']['parameters']['query'];
export const query:Request=undefined;
