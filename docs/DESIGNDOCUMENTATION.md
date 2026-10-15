# DOUTOR DO HVAC

Sistema de Design & Especificações de Interface (UI/UX)
Versão: 3.0.0 (Complete Edition — Map Location & Social Proof Highlights)
Autor: Luna — UI/UX & Design System Specialist
Status: Pronto para Implementação e Handoff Técnico
Destinatário Técnico: Kira (Senior Code Partner)

## 1. Resumo do Produto

## 1.1 Visão Geral
O Doutor do HVAC é uma plataforma digital B2B de alto impacto visual e autoridade técnica voltada para a fabricação, montagem e instalação de sistemas industriais e comerciais de ventilação, exaustão e dutos de ar condicionado (HVAC).
O site foi projetado para causar um impacto visual imediato ("Efeito Uau / Bater o Olho e Confiar"), posicionando a empresa como referência absoluta no mercado B2B, fortalecendo sua presença física/geográfica e maximizando a conversão de novos clientes corporativos.

### 1.2 Proposta de Valor & Objetivos do Design
Impacto Visual Supremo (High-Impact UI): Combinação de tipografia marcante, fotografia industrial de alta resolução, microinterações fluidas e estética Clean Industrial.
Prova Social de Grande Porte (Carrossel de Logos & Depoimentos de Colaboradores/Parceiros): Exibição em carrossel contínuo das marcas atendidas (Hospitais, Shoppings, Redes como McDonald's, Indústrias) e seção dedicada a depoimentos de colaboradores, engenheiros e clientes, humanizando a marca e reforçando a cultura de excelência.
Localização Interativa & Cobertura Geográfica: Módulo com mapa interativo indicando a sede/fábrica principal, unidades técnicas e raio de atendimento para obras em todo o território.
Showcase de Portfólio Dinâmico: Seção rica para exibição visual das obras executadas, categorizadas por tipo de duto, aplicação e setor.
Conversão de Alta Performance: Fluxo guiado para orçamento B2B com anexo de plantas (PDF/DWG) e integração fluida com o WhatsApp Business.

## 2. Identidade Visual & Conceito
### 2.1 Conceito Visual ("Clean Industrial & Engineering Power")
O conceito combina a solidez da engenharia pesada de dutos metálicos com a sofisticação visual de marcas tech/B2B modernas.
Fotografia & Textura: Imagens reais de fábricas, soldagens de precisão, dutos de aço galvanizado polidos, grandes instalações em galpões e a equipe técnica em ação.
Contraste de Impacto: Fundos escuros profundos no Hero, Carrossel de Clientes e Rodapé mesclados com seções de conteúdo em tons sutilmente frios/limpos, simulando o ambiente de ar filtrado e climatizado.

### 2.2 Atributos da Marca
Autoridade Industrial & Humana: Transmite capacidade operacional para atender multinacionais e valorização dos profissionais que executam as obras.
Precisão & Rigor Técnico: Conformidade com normas ABNT e PMOC expressa em cards e badges de selo de qualidade.
Inovação & Transparência: Interface rápida, clara, com mapa interativo de localização e contatos diretos.

## 3. Paleta de Cores & Design Tokens
A paleta atende rigorosamente às diretrizes de acessibilidade WCAG 2.1 Nível AA (taxa de contraste superior a 4.5:1 para texto normal e 3.0:1 para elementos gráficos/texto grande).

### 3.1 Cores Primárias e Accent
Nome Token	Valor Hex	Descrição / Uso	Ratio de Contraste
```
--color-brand-primary	#0A192F	Azul Marinho Sombra Industrial: Headers, Hero background, botões de alto impacto.	16.5:1 (AAA)
--color-brand-secondary	#0084FF	Azul Ciano Fluidez: Destaques de fluxo de ar, elementos ativos, pin do mapa.	4.6:1 (AA)
--color-brand-accent	#FF6B00	Laranja Energia/Engenharia: Botões CTA primários de orçamento, destaques visuais.	3.2:1 (AA para texto grande)
--color-brand-accent-hover	#E05E00	Hover dos botões de ação e estados pressionados.	4.2:1 (AA)
```

### 3.2 Cores Neutras e Superfícies
Nome Token	Valor Hex	Descrição / Uso

```
--color-bg-main	#F8FAFC	Fundo das seções gerais da página.
--color-bg-dark	#07111E	Fundo do Hero, Carrossel de Clientes e Footer.
--color-surface-white	#FFFFFF	Cards de serviços, depoimentos, formulário e modais.
--color-surface-muted	#EDF2F7	Fundos de especificações técnicas, tabelas e fita do carrossel.
--color-border-subtle	#CBD5E1	Linhas divisórias, bordas de cards e inputs.
--color-text-main	#0F172A	Texto de leitura principal e títulos de seções claras.
--color-text-muted	#475569	Subtítulos, textos de apoio e dados secundários.
--color-text-light	#F1F5F9	Textos sobre fundos escuros (Hero / Dark Sections).
```

### 3.3 Cores Semânticas
Nome Token	Valor Hex	Descrição / Uso
```
--color-success	#10B981	Status de arquivo anexado com sucesso, mensagens enviadas.
--color-whatsapp	#25D366	Cor oficial do CTA de atendimento rápido WhatsApp.
```

## 4. Tipografia
Adotamos a Plus Jakarta Sans para títulos (moderna, imponente e geométrica) e a Inter para o corpo de texto e formulários (alta legibilidade em telas).
code
CSS

```
:root {
  --font-family-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-family-body: 'Inter', system-ui, sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;

  /* Font Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1.00rem;  /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.50rem;   /* 24px */
  --font-size-3xl: 2.25rem;   /* 36px */
  --font-size-4xl: 3.25rem;   /* 52px - H1 Hero Impacto */
  --font-size-5xl: 4.25rem;   /* 68px - Números de Destaque */

  /* Line Heights */
  --line-height-tight: 1.15;
  --line-height-snug: 1.30;
  --line-height-relaxed: 1.60;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
}
```

## 5. Iconografia & MídiaLucide Icons Set: Ícones de traço vetorial de 2px, otimizados e leves.Fan, Wind: 
Circulação de ar, vazão e exaustão.MapPin, Navigation, Compass: Módulo do mapa, rotas e localização da fábrica.Quote, Users, HeartHandshake: Depoimentos de colaboradores e equipe.Building2, Hospital, ShoppingBag, Factory: Categorias de clientes e obras.ShieldCheck, Award: Certificações ABNT, PMOC e garantia industrial.UploadCloud, FileCode: Anexo de projetos DWG/PDF.Tratamento de Mídia:Logos dos Clientes: Estilo monocromático com transição de opacidade no hover.Fotos de Depoimentos: Retratos profissionais dos colaboradores e engenheiros da equipe com borda arredondada e avatar com anel em --color-brand-secondary.Mapa: Estilo customizado (Dark/Silver map style) com pin animado da marca Doutor do HVAC.6. Especificação de Componentes6.1 Carrossel Infinito de Empresas Parceiras (.infinite-logo-marquee)Faixa horizontal contínua (infinite scroll loop) contendo as marcas parceiras (McDonald's, Shoppings, Hospitais, Indústrias).6.2 Seção de Depoimentos & Voz da Equipe (.testimonials-grid)Estilo: Grid de Cards de Depoimento ou Carrossel de Avaliações.Conteúdo dos Cards:Ícone de aspas destacadas em --color-brand-secondary.Depoimento real ressaltando orgulho, rigor técnico, cultura de segurança e compromisso com o cliente.Foto do Colaborador / Engenheiro / Gerente de Obras.Nome, Cargo e Tempo de Casa (Ex: Eng. Roberto Silva — Engenheiro Chefe de Instalações, 8 anos no Doutor do HVAC).Tag de categoria (Ex: "Voz da Nossa Equipe" ou "Depoimento do Cliente").6.3 Módulo de Localização & Mapa Interativo (.location-map-section)Layout: Duas colunas em Desktop (Lado Esquerdo: Dados de Contato e Horários; Lado Direito: Mapa Interativo incorporado via Google Maps / Mapbox).Elementos do Card de Endereço:Pin de Destaque com o endereço físico da fábrica e escritório central.Botão de Ação Rápida: [Como Chegar / Traçar Rota].Raio de Atendimento: Tag visual informando "Atendimento e Instalação em Todo o Brasil / Atuação Regional Garantida".Informações de Funcionamento: Horário comercial da fábrica e plantão técnico 24h para emergências industriais.6.4 Showcase do Portfólio de Serviços e Obras (.portfolio-grid)Abas de navegação por categoria, cards responsivos com ficha técnica da engenharia e modal pop-up de visualização.6.5 Formulário Estruturado de Orçamento & WhatsApp DirectUpload Drag & Drop (DWG/PDF até 15MB) e botão com envio automático para o WhatsApp do departamento comercial.7. Layouts & Estrutura de Seções (Wireframes Descritos)7.1 Seção 1: Top Bar & Header Persistente (Glassmorphism)Top Bar informativa + Header com links para (Início, A Empresa, Tipos de Dutos, Portfólio, Depoimentos, Localização, Contato) + CTA "Solicitar Orçamento".7.2 Seção 2: Hero Section ("Impacto Visual & Autoridade")Título impactante H1, subtítulo B2B, botões de ação e estatísticas de volume de dutos e obras executadas.7.3 Seção 3: Carrossel Infinito de Empresas ParceirasFaixa contínua com as logos (McDonald's, Shoppings, Hospitais, Indústrias).7.4 Seção 4: Catálogo de Dutos & Soluções TécnicasGrid de serviços (Dutos Retangulares TDC, Spiroductos, Exaustão e Isolamentos).7.5 Seção 5: Showcase de Portfólio & Obras ExecutadasGaleria de fotos de instalações industriais com filtros interativos.7.6 Seção 6: Quem Faz Acontecer (Depoimentos de Colaboradores & Clientes)Título: "EXCELÊNCIA RECONHECIDA: A VOZ DA NOSSA EQUIPE E PARCEIROS"Estrutura: Cards com depoimentos do time de engenharia e montadores destacando a paixão pela qualidade, precisão técnica e segurança no canteiro de obras.7.7 Seção 7: Localização da Fábrica & Raio de Atendimento (Mapa)Título: "ONDE ESTAMOS E ONDE ATUAMOS"Subtítulo: "Fábrica moderna com infraestrutura própria e equipes preparadas para atender obras industriais em todo o país."Conteúdo: Endereço completo, mapa vetorial/interativo com pin em destaque e botão para traçar rotas.7.8 Seção 8: Form de Orçamento Integrado + Direct WhatsAppFormulário em 3 etapas para requisição de proposta técnica e anexo de projeto.7.9 Seção 9: Rodapé de Alta Performance (Footer Dark)Dados cadastrais, endereço técnico, links rápidos, mapa do site, política de privacidade e selo de navegação segura HTTPS.8. Responsividade & BreakpointsBreakpointResoluçãoAjuste VisualMobile (sm)< 640pxMenu hambúrguer, mapa com altura ajustada (300px), cards de depoimento em carrossel único touch/swipe, CTAs 100% de largura.Tablet (md)641px - 1024pxMapa e informações de contato empilhados com bom espaçamento, depoimentos em grid 2 colunas.Desktop (lg)1025px - 1280pxLayout de 12 colunas, mapa lado a lado com informações de atendimento (50%/50%).Wide Screen (xl)> 1280pxContainer centralizado em 1280px com máxima respiro e legibilidade.9. Design Tokens (CSS Output)CSS/* DESIGN TOKENS — DOUTOR DO HVAC V3.0 */

```
:root {
  /* Colors */
  --color-brand-primary: #0A192F;
  --color-brand-secondary: #0084FF;
  --color-brand-accent: #FF6B00;
  --color-brand-accent-hover: #E05E00;

  --color-bg-main: #F8FAFC;
  --color-bg-dark: #07111E;
  --color-surface-white: #FFFFFF;
  --color-surface-muted: #EDF2F7;
  --color-border-subtle: #CBD5E1;

  --color-text-main: #0F172A;
  --color-text-muted: #475569;
  --color-text-light: #F1F5F9;
  --color-whatsapp: #25D366;

  /* Typography */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Shadows */
  --shadow-subtle: 0 4px 20px rgba(0, 0, 0, 0.05);
  --shadow-card-hover: 0 12px 32px rgba(10, 25, 47, 0.12);
  --shadow-glow-accent: 0 0 24px rgba(255, 107, 0, 0.35);

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 10. Regras de Acessibilidade (WCAG 2.1 AA)Acessibilidade no Mapa: 
Garantir que o mapa incorporado possua atributo title descritivo (ex: title="Mapa de localização da fábrica Doutor do HVAC") e que todas as informações de endereço estejam disponíveis também em formato de texto acessível.Textos Alternativos para Fotos da Equipe: As imagens dos colaboradores nos depoimentos devem ter tags alt completas (ex: alt="Foto de Roberto Silva, Engenheiro Chefe de Instalações").Navegação por Teclado: Foco visível (outline: 3px solid var(--color-brand-secondary)) em botões de filtro, links de rota do mapa e cards interativos.11. Recomendações para Implementação (Handoff para Kira)Integração Eficiente de Mapa:Carregar o mapa com lazy loading (loading="lazy") para não impactar o score do Google PageSpeed/Core Web Vitals na renderização inicial da página.Carrossel de Depoimentos Responsivo:Utilizar biblioteca leve como SwiperJS ou scroll-snap nativo do CSS para navegação por swipe no mobile.Processamento do Formulário e WhatsApp:Garantir validação de anexo até 15MB client-side e envio limpo de mensagens pré-formatadas para o WhatsApp Comercial. Adicionar também logs de conversão integrados ao Google Analytics 4.