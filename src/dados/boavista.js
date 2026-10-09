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

function paginaAtual(slug) {
  return SITE_ATUAL + "/projeto?slug=" + slug;
}

// Empreendimentos em destaque, na ordem em que aparecem no site.
// "interno" indica a página que existe nesta proposta; os demais abrem no site atual.
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
    link: paginaAtual("bosque-dos-ipes"),
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
    link: paginaAtual("bosque-sao-cristovao"),
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
    link: paginaAtual("carnauba-palace"),
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
    link: paginaAtual("brisa-sul-residence"),
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
    link: paginaAtual("cajuina-residence"),
  },
];

// Empreendimentos já entregues e totalmente vendidos, citados na lista de projetos do site.
export const ENTREGUES = [
  { nome: "Alameda Dirceu Residence", bairro: "Parque Ideal", link: paginaAtual("alameda-dirceu-residence") },
  { nome: "Rio Poty Boulevard", bairro: "Fátima", link: paginaAtual("rio-poty-boulevard") },
  { nome: "Girassol Residence", bairro: "Campestre", link: paginaAtual("girassol-residence") },
  { nome: "Edifício Monte Claro", bairro: "Fátima", link: SITE_ATUAL + "/projetos?pagina=2" },
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
