
export interface Address {
  id: number;
  fabrica: string;
  rua: string;
  number: string;
  complement?: string;
  city: string;
  estado: string;
  pais: string;
  CodigoPostal: string; //CEP
  fone: string;
  horario: string;
}