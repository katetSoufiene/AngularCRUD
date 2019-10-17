import { IPolicyHolder } from './policyHolder.model';

export interface IPolicy {
    id?: number;
    policyHolder: IPolicyHolder;
}
