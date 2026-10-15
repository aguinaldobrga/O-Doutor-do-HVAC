// Define as categorias permitidas
export type CategoriaParceiro = 
  | "Hospitais & Saúde"
  | "Rede de Restauração"
  | "Shopping Centers"
  | "Indústria de Grande Porte"
  | "Aviação & Infraestrutura"
  | "Indústria Pesada"
  | "Varejo & Supermercados";

export interface ParceirosLogos {
  id: number;
  name: string;
  category: CategoriaParceiro; // Tipagem estrita
  logoText: string;
  logoUrl?: string;
}

