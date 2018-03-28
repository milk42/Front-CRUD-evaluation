import { ObjetSuspect } from './objet-suspect';

export interface ObjetAffaire {

id: number;
date_cloture: string;
date_creation: string;
lieu: string;
nom: string;
rapport: string;
suspects: ObjetSuspect;
}
