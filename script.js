const $ = s => document.querySelector(s);
let n = 0;
let cur = 'inicio';


const img = (k, w = 640, h = 400) => {
  n++;
  const local = (typeof FOTOS !== 'undefined' && FOTOS[`${cur}${n}`]) || `imagens/${cur}${n}.jpg`;
  const auto = `https://loremflickr.com/${w}/${h}/${k}?lock=${n}`;
  const reserva = `https://picsum.photos/seed/${k}${n}/${w}/${h}`;
  return `<img src="${local}" alt="Foto: ${k}" loading="lazy" onerror="if(!this.dataset.t){this.dataset.t=1;this.src='${auto}'}else{this.onerror=null;this.src='${reserva}'}">`;
};


const P = {
  inicio: { n: 'Início', i: '🏠', k: 'sunrise,horizon' },
  noticias: { n: 'Notícias', i: '📰', k: 'newspaper,city', c: '#ff2e83',
    d: 'As principais histórias do dia, contadas com contexto para você entender o que está por trás da manchete.',
    a: [
      ['Cidades inteligentes ganham sensores e dados abertos', 'smartcity', 'Prefeituras de várias regiões testam semáforos adaptativos e painéis públicos de dados para reduzir o trânsito e melhorar a coleta de lixo. Especialistas lembram que a tecnologia só funciona com transparência e proteção de dados pessoais.'],
      ['Educação digital chega às escolas públicas', 'classroom', 'Programas de laboratórios de informática e formação de professores buscam diminuir a distância entre estudantes de grandes centros e do interior. O desafio segue sendo a conectividade estável e a manutenção dos equipamentos.'],
      ['Turismo de experiência cresce no litoral nordestino', 'beach', 'Passeios de buggy, gastronomia local e turismo comunitário atraem viajantes que procuram vivências autênticas, movimentando pequenos negócios e gerando renda fora da alta temporada.']
    ] },
  futebol: { n: 'Futebol', i: '⚽', k: 'soccer', c: '#00b341',
    d: 'Rodadas, táticas e bastidores do esporte mais popular do país, com análise além do placar.',
    a: [
      ['Clássico decide a liderança da rodada', 'soccer,stadium', 'O confronto entre os dois favoritos promete estádio lotado e disputa tática no meio-campo. A equipe da casa aposta na marcação alta, enquanto o visitante prefere os contra-ataques em velocidade.'],
      ['Base em alta: jovens talentos assumem a titularidade', 'football,youth', 'Clubes que investem em categorias de base vêm colhendo resultados dentro de campo e no mercado. A aposta em atletas formados em casa reduz custos e fortalece a identidade com a torcida.'],
      ['Futebol feminino bate recordes de público', 'womens,soccer', 'Transmissões na TV aberta e campanhas dos clubes ampliaram a audiência das competições femininas. A próxima etapa, segundo dirigentes, é profissionalizar calendário e estrutura em todas as divisões.']
    ] },
  politica: { n: 'Política', i: '🏛️', k: 'parliament', c: '#6a1bff',
    d: 'Entenda como funcionam as instituições e os debates públicos, com explicações claras e sem torcida.',
    a: [
      ['Como uma lei é aprovada no Congresso', 'congress,building', 'Um projeto passa por comissões, votações nas duas casas e sanção presidencial. Conhecer cada etapa ajuda o cidadão a acompanhar o que realmente está em discussão e a cobrar seus representantes.'],
      ['Orçamento público: para onde vai o dinheiro', 'budget,calculator', 'Saúde, educação e previdência concentram a maior parte das despesas. Portais de transparência permitem consultar gastos por órgão e são uma ferramenta importante de controle social.'],
      ['Participação popular além do voto', 'public,meeting', 'Conselhos municipais, audiências públicas e consultas online são caminhos para influenciar decisões locais. Quanto mais gente participa, mais representativas tendem a ser as políticas aprovadas.']
    ] },
  agricola: { n: 'Agrícola', i: '🌾', k: 'farm', c: '#e9a600',
    d: 'Safras, tecnologia no campo e mercado de grãos: o agronegócio explicado de forma acessível.',
    a: [
      ['Agricultura de precisão reduz desperdício', 'tractor,field', 'Drones, GPS e sensores de solo indicam onde aplicar água e adubo na medida certa. O resultado é maior produtividade com menor impacto ambiental e custo por hectare mais baixo.'],
      ['Safra de soja e milho: o que observar', 'soybean,harvest', 'Clima, preço dos insumos e câmbio influenciam a rentabilidade do produtor. Acompanhar o calendário de plantio e as projeções oficiais ajuda a entender as oscilações no preço dos alimentos.'],
      ['Agricultura familiar abastece a mesa do brasileiro', 'vegetables,market', 'Pequenos produtores respondem por boa parte dos alimentos consumidos no dia a dia. Feiras, cooperativas e compras públicas fortalecem a renda no campo e a segurança alimentar.']
    ] },
  tempo: { n: 'Previsão do tempo', i: '⛅', k: 'weather,sky', c: '#00a8ff',
    d: 'Exemplo de painel de previsão. Os valores abaixo são ilustrativos — para dados reais, use uma API como a do INMET ou Open-Meteo.' },
  aeroportos: { n: 'Aeroportos', i: '✈️', k: 'airport,airplane', c: '#ff7a00',
    d: 'Panorama dos principais aeroportos do país. Status de exemplo, para demonstração do layout.' },
  combustiveis: { n: 'Combustíveis', i: '⛽', k: 'gas,station', c: '#e0102c',
    d: 'Comparativo de preços médios (valores fictícios de exemplo). Em um projeto real, os dados viriam da ANP.' },
  ias: { n: 'Catálogo de IAs', i: '🤖', k: 'robot,technology', c: '#6a1bff',
    d: 'As inteligências artificiais mais usadas hoje: o que cada uma faz de melhor.',
    a: [
      ['ChatGPT — OpenAI', 'artificial,intelligence', 'Assistente conversacional muito popular para redigir textos, resumir conteúdos, tirar dúvidas e gerar ideias. Está disponível na web e em aplicativos.'],
      ['Claude — Anthropic', 'laptop,writing', 'Assistente focado em respostas cuidadosas, análise de documentos longos, escrita e programação, com ênfase em segurança.'],
      ['Gemini — Google', 'search,google', 'IA integrada ao ecossistema Google, útil para pesquisa, e-mails, documentos e tarefas que combinam texto e imagem.'],
      ['Copilot — Microsoft', 'office,computer', 'Assistente presente no Windows e no pacote Office, ajudando a criar planilhas, apresentações e textos dentro dos programas do dia a dia.'],
      ['Perplexity', 'research,books', 'Mecanismo de busca com IA que responde perguntas citando as fontes consultadas, ideal para pesquisa e trabalhos acadêmicos.'],
      ['Meta AI', 'smartphone,chat', 'Assistente integrado a aplicativos de mensagens e redes sociais, voltado para conversas rápidas e geração de imagens.']
    ] },
  sobre: { n: 'Sobre', i: 'ℹ️', k: 'team,students' }
};

const cidades = [['Fortaleza', '☀️', 31, 10], ['São Paulo', '⛅', 24, 40], ['Rio de Janeiro', '🌤️', 29, 25], ['Brasília', '🌦️', 27, 60], ['Porto Alegre', '🌧️', 19, 85], ['Manaus', '⛈️', 30, 75]];
const aero = [['Guarulhos', 'GRU', 'São Paulo', 'Operando normal'], ['Santos Dumont', 'SDU', 'Rio de Janeiro', 'Operando normal'], ['Pinto Martins', 'FOR', 'Fortaleza', 'Operando normal'], ['Brasília', 'BSB', 'Brasília', 'Atrasos leves'], ['Salgado Filho', 'POA', 'Porto Alegre', 'Atrasos leves'], ['Confins', 'CNF', 'Belo Horizonte', 'Operando normal']];
const comb = [['Gasolina comum', 6.1], ['Etanol', 4.2], ['Diesel S10', 6.0], ['GNV', 4.9]];

// ---------- RENDERIZADORES ----------
const hero = (p, extra = '') => `<section class="hero" style="--c:${p.c || '#6a1bff'}"><h1>${p.i} ${p.n}</h1><p>${p.d || ''}</p>${extra}</section>`;
const card = ([t, k, x]) => `<article class="card">${img(k)}<div><h3>${t}</h3><p>${x}</p></div></article>`;

const R = {
  inicio() {
    const outros = Object.keys(P).filter(k => k !== 'inicio' && k !== 'sobre');
    return `<section class="hero"><h1>O horizonte da informação e da inteligência artificial</h1>
      <p>Notícias, esporte, previsão do tempo, aeroportos, combustíveis e um guia das IAs mais usadas, tudo em um só portal.</p>
      <a class="btn" href="#ias">Conhecer as IAs</a></section>
      <h2>Explore as seções</h2>
      <div class="grid">${outros.map(k => `<a class="card" href="#${k}">${img(P[k].k)}<div><h3>${P[k].i} ${P[k].n}</h3><p>${P[k].d.split('.')[0]}.</p></div></a>`).join('')}</div>`;
  },
  tempo(p) {
    return hero(p) + `<div class="grid">${cidades.map(([c, e, t, r]) => `<div class="card clima"><span>${e}</span><b>${t}°C</b><h3>${c}</h3><p>Chance de chuva: ${r}%</p><div class="barra"><i style="width:${r}%"></i></div></div>`).join('')}</div>`;
  },
  aeroportos(p) {
    return hero(p) + `<div class="tabela"><table><tr><th>Aeroporto</th><th>Código</th><th>Cidade</th><th>Status</th></tr>${aero.map(([a, c, ci, s]) => `<tr><td>${a}</td><td>${c}</td><td>${ci}</td><td class="${s.includes('Atraso') ? 'atraso' : 'ok'}">${s}</td></tr>`).join('')}</table></div>
      <div class="grid">${card(['Dicas para viajar com tranquilidade', 'airport,travel', 'Chegue com antecedência, confira o portão de embarque no aplicativo da companhia e mantenha os documentos à mão. Em voos nacionais, duas horas antes costumam ser suficientes.'])}</div>`;
  },
  combustiveis(p) {
    return hero(p) + `<div class="grid">${comb.map(([nome, v]) => `<div class="card clima"><span class="sel">preço médio por litro</span><h3>${nome}</h3><b>R$ ${v.toFixed(2).replace('.', ',')}</b><div class="barra"><i style="width:${v / 7 * 100}%"></i></div></div>`).join('')}</div>
      <div class="grid">${card(['Quando compensa abastecer com etanol?', 'ethanol,fuel', 'Uma regra prática: se o preço do etanol for até cerca de 70% do da gasolina, ele costuma compensar. Divida o valor do etanol pelo da gasolina para conferir.'])}</div>`;
  },
  sobre(p) {
    return hero({ ...p, c: '#ff2e83', d: 'Um projeto acadêmico de front-end em três camadas.' }) + `<div class="texto"><p>O Portal Horizonte foi construído como trabalho de faculdade para demonstrar a separação de responsabilidades no desenvolvimento web: <b>HTML</b> para a estrutura, <b>CSS</b> para o visual e <b>JavaScript</b> para a navegação e o conteúdo dinâmico.</p><p>O site possui 10 páginas navegáveis, layout responsivo para celular e computador, imagens carregadas por tema e componentes reutilizáveis como cartões, tabelas e barras de progresso.</p><p>Observação: textos de notícias, previsões, status de aeroportos e preços de combustíveis são exemplos para fins didáticos.</p></div>`;
  }
};

// ---------- NAVEGAÇÃO ----------
$('#menu').innerHTML = Object.entries(P).map(([k, p]) => `<a href="#${k}">${p.n}</a>`).join('');
$('#menuBtn').onclick = () => $('#menu').classList.toggle('on');

function ir() {
  const k = P[location.hash.slice(1)] ? location.hash.slice(1) : 'inicio';
  const p = P[k];
  cur = k;
  n = 0;
  $('#app').innerHTML = R[k] ? R[k](p) : hero(p) + `<div class="grid">${p.a.map(card).join('')}</div>`;
  document.title = p.n + ' · Portal Horizonte';
  $('#menu').classList.remove('on');
  document.querySelectorAll('#menu a').forEach(a => a.classList.toggle('on', a.hash === '#' + k));
  scrollTo(0, 0);
}
addEventListener('hashchange', ir);
ir();