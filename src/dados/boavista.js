// Todos os dados da Construtora Boa Vista ficam neste arquivo.
// Para corrigir um telefone, um número ou um texto, é só mexer aqui.
// Fonte: construtoraboavista.com.br (páginas de projeto, home e notícias).

export const SITE_ATUAL = "https://www.construtoraboavista.com.br";

export const EMPRESA = {
  nome: "Construtora Boa Vista",
  assinatura: "Realizando sonhos",
  cidade: "Teresina, Piauí",
  tempo: "mais de 40 anos",
  fundador: "Francisco Reinaldo",
};

export const CONTATO = {
  telefone: "(86) 3221-8064",
  telefoneLink: "tel:+558632218064",
  whatsapp: "(86) 99412-8383",
  whatsappNumero: "5586994128383",
  endereco: ["Rua Taumaturgo de Azevedo, 3237", "Ilhotas, Teresina - PI", "CEP 64001-340"],
  instagram: "https://www.instagram.com/boavistaconstrutora",
  instagramNome: "@boavistaconstrutora",
  facebook: "https://www.facebook.com/boavistaconstrutora/",
};

// Monta o link do WhatsApp comercial já com a mensagem escrita.
export function linkWhatsApp(mensagem) {
  return "https://wa.me/" + CONTATO.whatsappNumero + "?text=" + encodeURIComponent(mensagem);
}

export const MENSAGEM_PADRAO =
  "Olá! Vim pelo site da Construtora Boa Vista e gostaria de mais informações sobre os empreendimentos.";

// Linha discreta abaixo do formulário do BV Tower (ideia de serviço adicional).
// Deixe vazio ("") para esconder.
export const NOTA_FORMULARIO =
  "Este formulário pode alimentar um CRM de pré-reservas e um painel com as salas e lojas disponíveis.";

// Palavras que se revezam no título da página inicial.
export const PALAVRAS_TITULO = ["lares", "condomínios", "bosques", "endereços"];

// Empreendimentos em destaque, na ordem em que aparecem no site.
// "interno" é o endereço da página do empreendimento nesta proposta.
export const EMPREENDIMENTOS = [
  {
    slug: "bv-tower",
    nome: "BV Tower",
    tipo: "Corporativo",
    bairro: "Zona Leste",
    status: "Lançamento",
    resumo:
      "O primeiro empreendimento corporativo de alto padrão da Boa Vista: salas, lojas térreas e uma fachada em ACM e vidros espelhados.",
    dados: ["Salas de 30,61 a 62,33 m²", "10 lojas térreas", "7 elevadores"],
    imagem: "/img/bvtower-fachada.jpg",
    alt: "Perspectiva da fachada do BV Tower ao entardecer, com o embasamento de lojas iluminado",
    foco: "50% 40%",
    interno: "/bv-tower",
  },
  {
    slug: "bosque-dos-ipes",
    nome: "Bosque dos Ipês",
    tipo: "Residencial",
    bairro: "São Cristóvão",
    status: "Em obras",
    resumo:
      "O segundo condomínio da linha Bosque recebe o morador com uma sequência de ipês e reserva quase 600 m² de área verde.",
    dados: ["82, 95 e 102 m²", "Coberturas de até 210 m²", "3 quartos, 1 suíte com closet"],
    imagem: "/img/bosque-ipes.jpg",
    alt: "Perspectiva da entrada do Bosque dos Ipês, com ipês floridos diante das duas torres",
    foco: "50% 60%",
    interno: "/empreendimentos/bosque-dos-ipes",
  },
  {
    slug: "bosque-sao-cristovao",
    nome: "Bosque São Cristóvão",
    tipo: "Residencial",
    bairro: "São Cristóvão",
    status: "Obras concluídas",
    resumo:
      "O primeiro da linha Bosque une quintal e apartamento em duas torres, com paisagismo de Benedito Abbud.",
    dados: ["Apartamentos de 78 m²", "Coberturas de 176 m²", "2 torres, 4 por andar"],
    imagem: "/img/bosque-sao-cristovao.jpg",
    alt: "Perspectiva da portaria do Bosque São Cristóvão, com jardim e as torres ao fundo",
    foco: "50% 60%",
    interno: "/empreendimentos/bosque-sao-cristovao",
  },
  {
    slug: "carnauba-palace",
    nome: "Carnaúba Palace",
    tipo: "Residencial",
    bairro: "São João",
    status: "Obras concluídas",
    resumo:
      "Uma torre com lazer completo e um rooftop com piscina de borda infinita voltado para a cidade.",
    dados: ["A partir de 67,24 m²", "Coberturas de até 136,24 m²", "Rooftop com borda infinita"],
    imagem: "/img/carnauba.jpg",
    alt: "Perspectiva da entrada do Carnaúba Palace, com palmeiras e a torre ao fundo",
    foco: "50% 55%",
    interno: "/empreendimentos/carnauba-palace",
  },
  {
    slug: "brisa-sul-residence",
    nome: "Brisa Sul Residence",
    tipo: "Residencial",
    bairro: "Triunfo",
    status: "Obras concluídas",
    resumo:
      "Condomínio pronto para morar na zona Sul, com pista de cooper privativa, pomar e piscina com raia.",
    dados: ["Apartamentos de 73 m²", "3 quartos, 1 suíte", "1 ou 2 vagas"],
    imagem: "/img/brisa-sul.jpg",
    alt: "Perspectiva da portaria do Brisa Sul Residence, com os blocos de apartamentos ao fundo",
    foco: "40% 55%",
    interno: "/empreendimentos/brisa-sul-residence",
  },
  {
    slug: "cajuina-residence",
    nome: "Cajuína Residence",
    tipo: "Residencial",
    bairro: "Santa Isabel",
    status: "Obras concluídas",
    resumo:
      "Pronto para morar na Zona Leste, leva o nome da bebida preferida do piauiense e tem lazer para toda a família.",
    dados: ["74,86 a 75,94 m²", "3 quartos, 1 suíte", "Guarita elevada com eclusa"],
    imagem: "/img/cajuina.jpg",
    alt: "Perspectiva dos blocos do Cajuína Residence, com fachada em tons de amarelo e branco",
    foco: "50% 50%",
    interno: "/empreendimentos/cajuina-residence",
  },
];

// Entregues e totalmente vendidos (aparecem em lista na página inicial).
export const ENTREGUES = [
  { slug: "alameda-dirceu-residence", nome: "Alameda Dirceu Residence", bairro: "Parque Ideal" },
  { slug: "rio-poty-boulevard", nome: "Rio Poty Boulevard", bairro: "Fátima" },
  { slug: "girassol-residence", nome: "Girassol Residence", bairro: "Campestre" },
  { slug: "edificio-monte-claro", nome: "Edifício Monte Claro", bairro: "Fátima" },
];

export const HISTORIA = {
  titulo: "Uma história contada tijolo por tijolo",
  paragrafos: [
    "A Construtora Boa Vista começou com duas residências na zona Norte de Teresina, erguidas com tanto entusiasmo que se tornaram a base de tudo o que veio depois. Fundada pelo engenheiro Francisco Reinaldo, a empresa acompanhou a cidade por mais de quatro décadas.",
    "As primeiras casas viraram condomínios, obras públicas, edifícios de alto padrão, condomínios clube e, hoje, bosques que cercam torres de apartamentos. Em todas essas fases, o propósito foi o mesmo: transformar casas em lares.",
  ],
  valores: [
    {
      titulo: "100% piauiense",
      texto: "Uma construtora que homenageia o estado no nome de cada empreendimento.",
    },
    {
      titulo: "Obra Limpa",
      texto: "Destino certo para os resíduos sólidos e árvores nativas preservadas nos projetos, desde o começo.",
    },
    {
      titulo: "Pessoas em primeiro lugar",
      texto: "Cursos de formação na construção civil e espaço aberto para as mulheres nos canteiros de obra.",
    },
    {
      titulo: "Clientes que viram amigos",
      texto: "Uma empresa que cresceu sem abrir mão da boa conversa acompanhada de um cafezinho.",
    },
  ],
};

// ---------- BV Tower ----------

export const BV_TOWER = {
  nome: "BV Tower",
  assinatura: "Elegância em cada detalhe",
  local: "Zona Leste de Teresina",
  status: "Lançamento",
  chamada: "Um endereço à altura das grandes marcas.",
  apresentacao: [
    "Em sintonia com os grandes mercados, a Boa Vista lança seu primeiro empreendimento corporativo de alto padrão. O BV Tower nasce em uma das áreas mais valorizadas da Zona Leste para se tornar referência.",
    "Arquitetura, funcionalidade e sofisticação se encontram em um projeto pensado para marcas que desejam ocupar um endereço de prestígio.",
  ],
  numeros: [
    { valor: "30,61 a 62,33", unidade: "m²", legenda: "Salas comerciais" },
    { valor: "10", unidade: "lojas", legenda: "Térreas, com pé-direito duplo" },
    { valor: "7", unidade: "elevadores", legenda: "Para atender todo o edifício" },
  ],
  publicos: [
    {
      titulo: "Consultórios e clínicas",
      texto: "Recepção mobiliada, estacionamento rotativo para pacientes e sete elevadores para o fluxo do dia a dia.",
    },
    {
      titulo: "Advocacia e escritórios",
      texto: "Salas de 30,61 a 62,33 m², acesso por reconhecimento facial e um condomínio com gestão profissional.",
    },
    {
      titulo: "Empresas e equipes",
      texto: "Espaço para refeitório, gerador para as áreas compartilhadas e quatro banheiros de uso comum por pavimento.",
    },
    {
      titulo: "Lojistas",
      texto: "Dez lojas no térreo, com pé-direito duplo e vitrines voltadas para a rua, sob a fachada do edifício.",
    },
  ],
  blocos: [
    {
      titulo: "Salas",
      medida: "30,61 a 62,33 m²",
      texto: "Metragens para o consultório, o escritório ou a sede da empresa, com infraestrutura compartilhada de alto padrão.",
      itens: ["Recepção mobiliada", "4 banheiros de uso comum por pavimento", "Espaço para refeitório"],
    },
    {
      titulo: "Lojas",
      medida: "10 lojas térreas",
      texto: "Unidades no embasamento do edifício, com pé-direito duplo e frente para a rua.",
      itens: ["Pé-direito duplo", "Estacionamento rotativo", "Circuito fechado de câmeras"],
    },
  ],
  diferenciais: [
    { icone: "fachada", titulo: "Fachada em ACM e vidros espelhados" },
    { icone: "sala", titulo: "Salas de 30,61 m² a 62,33 m²" },
    { icone: "loja", titulo: "10 lojas térreas com pé-direito duplo" },
    { icone: "elevador", titulo: "7 elevadores" },
    { icone: "rosto", titulo: "Acesso com reconhecimento facial" },
    { icone: "gestao", titulo: "Condomínio com gestão profissional" },
    { icone: "estacionamento", titulo: "Estacionamento rotativo" },
    { icone: "recepcao", titulo: "Recepção mobiliada" },
    { icone: "refeitorio", titulo: "Espaço para refeitório" },
    { icone: "gerador", titulo: "Gerador de energia para as áreas compartilhadas" },
    { icone: "camera", titulo: "Circuito fechado de câmeras de monitoramento" },
    { icone: "banheiro", titulo: "4 banheiros de uso comum por pavimento" },
  ],
  // Só entram aqui as linhas confirmadas pela construtora (página do projeto e notícia no site).
  ficha: [
    ["Empreendimento", "Edifício corporativo, de uso exclusivamente comercial"],
    ["Localização", "Zona Leste de Teresina"],
    ["Situação", "Lançamento, com obras em andamento"],
    ["Salas", "De 30,61 m² a 62,33 m²"],
    ["Lojas", "10 unidades térreas, com pé-direito duplo"],
    ["Elevadores", "7"],
    ["Subsolos", "2"],
    ["Fachada", "ACM e vidros espelhados"],
    ["Fundação", "Estacas em hélice contínua"],
    ["Banheiros de uso comum", "4 por pavimento"],
    ["Incorporação e construção", "Construtora Boa Vista"],
  ],
  galeria: [
    { src: "/img/bvtower-fachada.jpg", nome: "Fachada principal" },
    { src: "/img/bvtower-perspectiva.jpg", nome: "Vista lateral da torre" },
    { src: "/img/bvtower-lojas.jpg", nome: "Embasamento e lojas térreas" },
    { src: "/img/bvtower-obra.jpg", nome: "Obra: escavação dos subsolos" },
  ],
  metragens: ["Até 40 m²", "De 40 a 50 m²", "De 50 a 62,33 m²", "Ainda não sei"],
};

// ---------- Páginas dos residenciais ----------
// Uma entrada por empreendimento, com o que a página dele no site atual informa.
// "capa" é a imagem grande; "faixa" é a imagem larga; "galeria" é opcional.
export const RESIDENCIAIS = {
  "bosque-dos-ipes": {
    nome: "Bosque dos Ipês",
    bairro: "São Cristóvão",
    status: "Em obras",
    venda: "Compre já",
    chamada: "Mais verde na vida urbana.",
    capa: { src: "/img/bosque-ipes.jpg", alt: "Perspectiva da entrada do Bosque dos Ipês, com ipês floridos diante das duas torres" },
    faixa: { src: "/img/bosque-ipes-faixa.jpg", alt: "Perspectiva das torres do Bosque dos Ipês vistas por entre as copas dos ipês", legenda: "As torres do Bosque dos Ipês vistas do bosque." },
    numeros: [
      { valor: "82, 95 e 102", unidade: "m²", legenda: "Apartamentos" },
      { valor: "210", unidade: "m²", legenda: "Coberturas de até" },
      { valor: "600", unidade: "m²", legenda: "Quase, de área verde" },
    ],
    descricao: [
      "Chegar em casa acompanhado, logo na entrada, por uma sequência de ipês: é assim que o empreendimento que leva o nome da árvore símbolo da época mais bonita do Piauí começa a encantar.",
      "O segundo condomínio da linha Bosque reserva quase 600 m² de área verde e reúne pet place, playground, brinquedoteca, academia com vista para a vegetação, piscinas e salão de festas.",
      "O projeto arquitetônico é de Gustavo Almeida e João Almeida, e o paisagismo, de Marina Campanhã. Fica perto do balão do São Cristóvão, de escolas, faculdades, farmácias, academias, supermercados e das principais vias para várias zonas da cidade.",
    ],
    condominio: [
      "Bosque com quase 600 m² de área verde",
      "Piscina adulto, piscina infantil, deck molhado, deck seco e ducha",
      "Salão de festas com bar, cozinha, 2 lavabos e depósito",
      "2 salões gourmet com bar e lavabo",
      "Salão de jogos com espaço para churrasco",
      "Academia",
      "Playground e brinquedoteca com fraldário",
      "Pet place",
      "Coworking",
      "Bicicletário",
      "2 markets in house",
    ],
    apartamento: [
      "3 quartos, sendo 1 suíte com closet",
      "Sala de estar e jantar, com opção de varanda ou sala estendida",
      "Cozinha e despensa",
      "Área de serviço",
      "1 banheiro social",
      "2 a 3 vagas de garagem",
    ],
    ficha: [
      ["Situação", "Em obras"],
      ["Localização", "Perto do balão do São Cristóvão, Teresina"],
      ["Apartamentos", "82 m², 95 m² e 102 m²"],
      ["Coberturas", "Até 210 m²"],
      ["Arquitetura", "Gustavo Almeida e João Almeida"],
      ["Paisagismo", "Marina Campanhã"],
    ],
  },
  "bosque-sao-cristovao": {
    nome: "Bosque São Cristóvão",
    bairro: "São Cristóvão",
    status: "Obras concluídas",
    venda: "Últimas unidades",
    chamada: "Um quintal e um apartamento ao mesmo tempo.",
    capa: { src: "/img/bosque-sao-cristovao.jpg", alt: "Perspectiva da portaria do Bosque São Cristóvão, com jardim e as torres ao fundo" },
    faixa: { src: "/img/bosque-sao-cristovao-faixa.jpg", alt: "Perspectiva das duas torres do Bosque São Cristóvão vistas de baixo, entre palmeiras", legenda: "As duas torres do Bosque São Cristóvão." },
    numeros: [
      { valor: "78", unidade: "m²", legenda: "Apartamentos" },
      { valor: "176", unidade: "m²", legenda: "Coberturas" },
      { valor: "2", unidade: "torres", legenda: "Com 4 apartamentos por andar" },
    ],
    descricao: [
      "Respeitar, cuidar e valorizar o verde está no DNA da Construtora Boa Vista. A linha Bosque nasceu para levar mais qualidade de vida aos espaços urbanos, e o Bosque São Cristóvão é o primeiro empreendimento dela.",
      "O projeto integra áreas arborizadas e cria um ambiente de muito frescor, perto do Balão do São Cristóvão, na região mais dinâmica da Zona Leste, a poucos passos de supermercados, farmácias, faculdades, escolas e grandes vias de acesso.",
      "O projeto arquitetônico é de Gustavo Almeida e João Almeida, com paisagismo de alto padrão assinado por Benedito Abbud.",
    ],
    condominio: [
      "2 torres, com 4 apartamentos por andar",
      "Bosque",
      "Piscina adulto com raia, deck molhado, deck seco e piscina infantil",
      "Salão e terraço para festas com bar e cozinha",
      "2 lounges gourmet com bar e cozinha",
      "Fitness center",
      "Playground",
      "Pet place",
      "Guarita elevada com eclusa e duas portarias",
    ],
    apartamento: [
      "3 quartos, sendo 1 suíte e 1 suíte com WC reversível",
      "Sala de estar, jantar e varanda",
      "Cozinha e despensa",
      "Área de serviço",
      "2 vagas de garagem",
    ],
    ficha: [
      ["Situação", "Obras concluídas, últimas unidades"],
      ["Endereço", "Rua Vereador Edmundo Genuíno Oliveira, 2865, São Cristóvão, Teresina/PI"],
      ["Apartamentos", "78 m²"],
      ["Coberturas", "176 m²"],
      ["Arquitetura", "Gustavo Almeida e João Almeida"],
      ["Paisagismo", "Benedito Abbud"],
    ],
  },
  "carnauba-palace": {
    nome: "Carnaúba Palace",
    bairro: "São João",
    status: "Obras concluídas",
    venda: "Compre já",
    chamada: "Beleza e imponência, como a palmeira símbolo do Piauí.",
    capa: { src: "/img/carnauba.jpg", alt: "Perspectiva da entrada do Carnaúba Palace, com palmeiras e a torre ao fundo" },
    numeros: [
      { valor: "67,24 e 68,24", unidade: "m²", legenda: "Apartamentos tipo" },
      { valor: "136,24", unidade: "m²", legenda: "Coberturas de até" },
      { valor: "6", unidade: "por andar", legenda: "Apartamentos, em 1 torre" },
    ],
    descricao: [
      "O Carnaúba Palace é um condomínio completo, que acompanha as tendências mais modernas da arquitetura e inclui um rooftop com piscina de borda infinita.",
      "Foi feito para quem deseja morar perto de tudo: próximo ao centro e às zonas Sul e Leste, à Ponte Wall Ferraz, ao SESC Cajuína, ao Teresina Shopping e à Floresta Fóssil.",
      "O lazer reúne academia, playground, salão de festas com varanda descoberta, piscinas adulto e infantil com deck molhado, brinquedoteca e quadras de futsal e de streetball.",
    ],
    condominio: [
      "1 torre, com 6 apartamentos por andar",
      "Rooftop com piscina adulto, deck molhado e borda infinita",
      "Piscina infantil",
      "Salão de festas com varanda descoberta",
      "Espaço gourmet com apoio de cozinha e varanda descoberta",
      "Churrasqueira",
      "Espaço fitness",
      "Quadras de futsal e streetball",
      "Brinquedoteca",
      "Portaria com recepção",
    ],
    apartamento: [
      "3 quartos, sendo 1 suíte",
      "Sala de estar e jantar",
      "Cozinha",
      "Área de serviço",
      "1 banheiro social",
      "1 ou 2 vagas de garagem",
    ],
    ficha: [
      ["Situação", "Obras concluídas"],
      ["Localização", "Próximo ao centro e às zonas Sul e Leste de Teresina"],
      ["Apartamento tipo A", "68,24 m²"],
      ["Apartamento tipo B", "67,24 m²"],
      ["Cobertura 01", "136,24 m²"],
      ["Cobertura 02", "129,01 m²"],
    ],
    galeria: [
      { src: "/img/carnauba-aerea.jpg", nome: "O Carnaúba Palace ao pôr do sol" },
      { src: "/img/carnauba-rooftop.jpg", nome: "Rooftop com piscina de borda infinita" },
      { src: "/img/carnauba-entrada.jpg", nome: "Entrada do condomínio" },
      { src: "/img/carnauba-playground.jpg", nome: "Playground" },
      { src: "/img/carnauba-quadra.jpg", nome: "Quadra" },
      { src: "/img/carnauba.jpg", nome: "Perspectiva da fachada" },
    ],
  },
  "brisa-sul-residence": {
    nome: "Brisa Sul Residence",
    bairro: "Triunfo",
    status: "Obras concluídas",
    venda: "Últimas unidades",
    chamada: "Vida tranquila e confortável na zona Sul.",
    capa: { src: "/img/brisa-sul.jpg", alt: "Perspectiva da portaria do Brisa Sul Residence, com os blocos de apartamentos ao fundo" },
    numeros: [
      { valor: "73", unidade: "m²", legenda: "Apartamentos" },
      { valor: "3", unidade: "quartos", legenda: "Sendo 1 suíte" },
      { valor: "8", unidade: "por bloco", legenda: "Apartamentos" },
    ],
    descricao: [
      "O Brisa Sul é o lugar para quem busca uma vida tranquila e confortável, com uma infraestrutura completa de lazer e convivência para aproveitar bons momentos sem sair de casa.",
      "Fica entre as avenidas Henry Wall de Carvalho e Prefeito Wall Ferraz, o que facilita o acesso a pontos importantes da região Sul, como a nova Ceasa e a Chesf Teresina, além de escolas e centros comerciais.",
      "O condomínio já está pronto para morar, com piscina com raia, pomar, playground, academia e uma pista de cooper privativa.",
    ],
    condominio: [
      "8 apartamentos por bloco",
      "Piscina com raia e piscina infantil",
      "Pista de cooper",
      "Academia",
      "Pomar",
      "Clube com cozinha, bar e churrasqueira",
      "Campinho de futebol",
      "2 playgrounds",
      "Praças com caramanchão",
      "Pet place",
      "Guarita elevada com eclusa",
    ],
    apartamento: [
      "3 quartos, sendo 1 suíte",
      "Sala de estar, jantar e varanda",
      "Cozinha e despensa",
      "Área de serviço",
      "1 banheiro social",
      "1 ou 2 vagas de garagem",
    ],
    ficha: [
      ["Situação", "Pronto para morar, últimas unidades"],
      ["Endereço", "Rua Agenor Veloso, 1200, Triunfo, Teresina/PI"],
      ["Apartamentos", "73 m²"],
    ],
  },
  "cajuina-residence": {
    nome: "Cajuína Residence",
    bairro: "Santa Isabel",
    status: "Obras concluídas",
    venda: "Últimas unidades",
    chamada: "A sensação de ter feito a melhor escolha.",
    capa: { src: "/img/cajuina.jpg", alt: "Perspectiva dos blocos do Cajuína Residence, com fachada em tons de amarelo e branco" },
    faixa: { src: "/img/cajuina-faixa.jpg", alt: "Perspectiva dos blocos do Cajuína Residence vistos do estacionamento", legenda: "Os blocos do Cajuína Residence." },
    numeros: [
      { valor: "74,86 a 75,94", unidade: "m²", legenda: "Apartamentos" },
      { valor: "3", unidade: "quartos", legenda: "Sendo 1 suíte" },
      { valor: "8", unidade: "por bloco", legenda: "Apartamentos" },
    ],
    descricao: [
      "O condomínio que leva o nome da bebida preferida do piauiense fica no bairro Santa Isabel e já está disponível para morar.",
      "Pode ser o lar ou o clube: dá para jogar bola, aproveitar a piscina, fazer um churrasco com a família e ainda curtir uma sala de jogos completa. Para os momentos de tranquilidade, os apartamentos oferecem privacidade e conforto.",
      "E, para aproveitar o melhor da Zona Leste, fica a poucos minutos do Show Auto Mall, da Havan, de lojas de carros e de supermercados.",
    ],
    condominio: [
      "8 apartamentos por bloco",
      "Piscina adulto e infantil",
      "Salão de festas com cozinha, bar e churrasqueira",
      "Salão de jogos",
      "Quadra poliesportiva",
      "Playground",
      "Guarita elevada com eclusa",
    ],
    apartamento: ["3 quartos, sendo 1 suíte", "Sala de estar e jantar com varanda", "Cozinha", "Área de serviço", "Banheiro social"],
    ficha: [
      ["Situação", "Pronto para morar, últimas unidades"],
      ["Endereço", "Rua Cel. Osvaldo Duarte, 5186, Santa Isabel, Teresina/PI"],
      ["Apartamentos", "74,86 m² a 75,94 m²"],
    ],
  },
  "alameda-dirceu-residence": {
    nome: "Alameda Dirceu Residence",
    bairro: "Parque Ideal",
    status: "Obras concluídas",
    venda: "100% vendido",
    chamada: "No coração da região Sudeste.",
    faixa: { src: "/img/alameda-dirceu-faixa.jpg", alt: "Perspectiva da portaria do Alameda Dirceu Residence, com o letreiro do condomínio" },
    numeros: [
      { valor: "46,34", unidade: "m²", legenda: "Apartamentos" },
      { valor: "2", unidade: "quartos", legenda: "Com 1 vaga de garagem" },
      { valor: "2", unidade: "torres", legenda: "Com 3 apartamentos por andar" },
    ],
    descricao: [
      "No coração da região Sudeste, o Alameda Dirceu Residence tem no entorno um comércio robusto, espaços de lazer, hospitais, clínicas, maternidade, supermercados e grandes instituições de educação.",
      "O empreendimento reúne apartamentos funcionais e uma área coletiva confortável e segura, com piscinas, playground e salão de festas. O condomínio está pronto para morar.",
    ],
    condominio: [
      "2 torres, com 3 apartamentos por andar",
      "Piscina adulto e infantil",
      "Clube com cozinha, bar e churrasqueira",
      "Playground",
      "Guarita de segurança",
    ],
    apartamento: ["2 quartos", "Sala de estar e jantar", "Cozinha", "Área de serviço", "Banheiro social", "1 vaga de garagem"],
    ficha: [
      ["Situação", "Pronto para morar, 100% vendido"],
      ["Endereço", "Rua Poncion Caldas, 5271, Parque Ideal, Zona Sudeste, Teresina/PI"],
      ["Apartamentos", "46,34 m²"],
    ],
  },
  "rio-poty-boulevard": {
    nome: "Rio Poty Boulevard",
    bairro: "Fátima",
    status: "Obras concluídas",
    venda: "100% vendido",
    chamada: "A elegância de morar bem.",
    faixa: { src: "/img/rio-poty-faixa.jpg", alt: "Fachada do Rio Poty Boulevard vista de baixo, contra o céu" },
    numeros: [
      { valor: "103 a 108", unidade: "m²", legenda: "Apartamentos tipo" },
      { valor: "253", unidade: "m²", legenda: "Cobertura de até" },
      { valor: "3", unidade: "por andar", legenda: "Apartamentos" },
    ],
    descricao: [
      "O Rio Poty Boulevard representa a elegância de morar bem em um dos locais mais valorizados de Teresina. O edifício fica perto da Avenida Nossa Senhora de Fátima, de universidades, supermercados, farmácias, galerias comerciais, padarias, restaurantes e pubs.",
      "Combina praticidade, qualidade e sofisticação, tanto nas áreas comuns quanto nos apartamentos de alto padrão.",
    ],
    condominio: [
      "3 apartamentos por andar",
      "Piscina adulto com deck molhado e piscina infantil",
      "Salão de festas com cozinha, bar e churrasqueira",
      "Salão de jogos",
      "Espaço fitness",
      "Playground",
      "Guarita elevada com eclusa",
    ],
    apartamento: ["3 quartos, sendo 1 suíte", "Sala de estar, jantar e varanda", "Cozinha", "Área de serviço", "1 banheiro social", "2 vagas de garagem"],
    ficha: [
      ["Situação", "Obras concluídas, 100% vendido"],
      ["Endereço", "Av. Rio Poty com Av. Gal. Adelmar Rocha, Fátima, Teresina/PI"],
      ["Apartamentos", "103 m² a 108 m²"],
      ["Cobertura", "Até 253 m²"],
    ],
  },
  "girassol-residence": {
    nome: "Girassol Residence",
    bairro: "Campestre",
    status: "Obras concluídas",
    venda: "100% vendido",
    chamada: "Um apartamento para chamar de seu.",
    faixa: { src: "/img/girassol-faixa.jpg", alt: "Perspectiva dos blocos do Girassol Residence, com fachada em tons de verde e bege" },
    numeros: [
      { valor: "77", unidade: "m²", legenda: "Apartamentos" },
      { valor: "3", unidade: "quartos", legenda: "Sendo 1 suíte" },
      { valor: "8", unidade: "por bloco", legenda: "Apartamentos" },
    ],
    descricao: [
      "O Girassol Residence é para quem deseja um apartamento para chamar de seu, para viver com a família ou sozinho. Pronto para morar, fica nas proximidades da Morada do Sol, perto de supermercados, farmácias e espaços de lazer, a alguns minutos das avenidas Dom Severino e Presidente Kennedy.",
      "Associa conforto, praticidade, bem-estar, bom acabamento e um diferencial importante: a segurança.",
    ],
    condominio: [
      "8 apartamentos por bloco",
      "Piscina adulto com raia e piscina infantil",
      "Salão de festas com cozinha e bar",
      "Pista de cooper",
      "Playground",
      "Guarita elevada com eclusa",
    ],
    apartamento: ["3 quartos, sendo 1 suíte", "Sala de estar e jantar", "Cozinha", "Área de serviço", "1 banheiro social", "1 ou 2 vagas de garagem"],
    ficha: [
      ["Situação", "Pronto para morar, 100% vendido"],
      ["Endereço", "Rua Antônia Miryan Eduardo Pereira, 4935, Campestre, Teresina/PI"],
      ["Apartamentos", "77 m²"],
    ],
  },
  "edificio-monte-claro": {
    nome: "Edifício Monte Claro",
    bairro: "Fátima",
    status: "Obras concluídas",
    venda: "100% vendido",
    chamada: "O equilíbrio entre a sofisticação e a funcionalidade.",
    faixa: { src: "/img/monte-claro-faixa.jpg", alt: "Perspectiva da fachada do Edifício Monte Claro, em tons neutros" },
    numeros: [
      { valor: "130", unidade: "m²", legenda: "Apartamentos tipo" },
      { valor: "216", unidade: "m²", legenda: "Cobertura de até" },
      { valor: "3", unidade: "suítes", legenda: "Uma com WC reversível" },
    ],
    descricao: [
      "O Edifício Monte Claro fica perto de galerias comerciais, clínicas, restaurantes, academias, escolas e faculdades da Zona Leste, com fácil acesso à Avenida Nossa Senhora de Fátima.",
      "É um projeto nobre, com o requinte dos tons neutros e um toque de exclusividade, somado à solidez e à qualidade que a Construtora Boa Vista oferece há mais de 40 anos.",
    ],
    condominio: [
      "3 apartamentos por andar",
      "Piscina adulto com deck molhado e piscina infantil",
      "Salão de festas com cozinha, bar e churrasqueira",
      "Salão de jogos",
      "Espaço fitness",
      "Playground",
      "Guarita elevada com eclusa",
    ],
    apartamento: ["3 suítes, sendo uma com WC reversível", "Sala de estar, jantar e varanda", "Cozinha e despensa", "Área de serviço", "2 vagas de garagem"],
    ficha: [
      ["Situação", "Obras concluídas, 100% vendido"],
      ["Endereço", "Av. Rio Poty com Av. Aviador Irapuã Rocha, Fátima, Teresina/PI"],
      ["Apartamentos", "130 m²"],
      ["Cobertura", "Até 216 m²"],
    ],
  },
};

// Ordem de navegação entre as páginas ("próximo empreendimento").
export const ORDEM = ["bv-tower", ...Object.keys(RESIDENCIAIS)];

export function enderecoDaPagina(slug) {
  return slug === "bv-tower" ? "/bv-tower" : "/empreendimentos/" + slug;
}

export function nomeDoEmpreendimento(slug) {
  return slug === "bv-tower" ? BV_TOWER.nome : RESIDENCIAIS[slug].nome;
}

// ---------- Notícias (as três em destaque no site atual) ----------
export const NOTICIAS = [
  {
    data: "17/04/2026",
    titulo: "Edifício comercial une tecnologia e elegância em Teresina; obras avançam",
    resumo: "O BV Tower entra na fase de escavação dos dois subsolos, com fundação em hélice contínua.",
    imagem: "/img/bvtower-obra.jpg",
    alt: "Máquinas trabalhando na escavação do terreno do BV Tower",
    link: SITE_ATUAL + "/noticia?slug=edificio-comercial-une-tecnologia-e-elegancia-em-teresina-obras-avancam",
  },
  {
    data: "19/11/2025",
    titulo: "Construtora Boa Vista entrega o Carnaúba Palace na zona Leste de Teresina",
    resumo: "São 114 apartamentos em 22 andares, com um rooftop voltado para uma das vistas mais bonitas da cidade.",
    imagem: "/img/carnauba-aerea.jpg",
    alt: "Vista aérea do Carnaúba Palace ao pôr do sol",
    link: SITE_ATUAL + "/noticia?slug=construtora-boa-vista-entrega-o-carnauba-palace-na-zona-leste-de-teresina",
  },
  {
    data: "03/06/2025",
    titulo: "Boa Vista firma parceria com o IFPI para soluções tecnológicas na construção civil",
    resumo: "O projeto de pesquisa busca reduzir resíduos e controlar materiais nas obras, com a participação de estudantes.",
    imagem: "/img/noticia-ifpi.jpg",
    alt: "Assinatura do termo de parceria entre a Construtora Boa Vista e o IFPI",
    link:
      SITE_ATUAL +
      "/noticia?slug=construtora-boa-vista-firma-parceria-com-o-ifpi-para-desenvolvimento-de-solucoes-tecnologicas-na-construcao-civil",
  },
];

// ---------- Seções sugeridas (não existem no site atual) ----------
// Cada uma leva no canto a nota abaixo e, ao passar o mouse, o motivo.
export const NOTA_SUGESTAO = "Seção sugerida";

export const VISITA = {
  titulo: "Agende uma visita",
  texto: "Escolha o empreendimento e o melhor dia. A equipe comercial confirma o horário pelo WhatsApp.",
  periodos: ["Manhã", "Tarde"],
  motivo:
    "O site atual só tem um formulário genérico de contato. Um pedido de visita com empreendimento, dia e período chega ao corretor já qualificado e encurta o caminho até o estande.",
};

// Etapas do BV Tower, conforme a notícia publicada pela construtora em 17/04/2026.
export const ANDAMENTO = {
  titulo: "Acompanhe a obra",
  texto: "As etapas do BV Tower, do lançamento à entrega.",
  referencia: "Situação informada pela construtora em abril de 2026.",
  imagem: "/img/bvtower-obra.jpg",
  alt: "Escavadeiras trabalhando no terreno do BV Tower, já com a contenção das extremidades concluída",
  etapas: [
    { nome: "Lançamento", situacao: "Concluído" },
    { nome: "Contenção do terreno", situacao: "Concluída" },
    { nome: "Fundação em hélice contínua", situacao: "Em andamento" },
    { nome: "Escavação dos dois subsolos", situacao: "Em andamento" },
    { nome: "Estrutura", situacao: "A seguir" },
    { nome: "Fachada em ACM e vidros espelhados", situacao: "A seguir" },
    { nome: "Acabamentos e entrega", situacao: "A seguir" },
  ],
  motivo:
    "Quem compra na planta quer ver a obra andar. Uma linha de etapas com foto recente, atualizada pela própria construtora, dá segurança ao comprador e reduz as perguntas ao time de vendas.",
};

export const MAPA = {
  titulo: "Como chegar",
  motivo:
    "As páginas de projeto do site atual trazem o endereço só em texto. Com o mapa na própria página, o visitante entende a vizinhança e traça a rota sem sair do site.",
};
