import { NotifierOptions } from 'angular-notifier';


export const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})/;


export const NAME_REGEX = /^(?!\s)[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,25}$/;


export const VIA_CEP_REGEX = /^https:\/\/viacep.com.br(\/[(a-zA-z?=0-9?=\/)]+)+$/;


export const IP_STACK_REGEX = /^http:\/\/api.ipstack.com\/[(a-zA-z?=0-9)]+$/;


export const masks = {
  CPF: '999.999.999-99',
  CEP: '99999-999',
  CNPJ: '99.999.999/9999-99',
  PHONE_D: '(99) 99999-9999',
  PHONE: '(99) 9999-9999',
  CARD: '9999 9999 9999 9999 9',
  CARD_I: '999999 9999 99999 9999',
  DATE: '99/99/9999'

};


export const genders = [
  { value: 'M', title: 'Masculino' },
  { value: 'F', title: 'Feminino' }
];


export const payments =  { credit: 'CreditCard',  debit: 'DebitCard' };


export const notifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


export const faqs = [
  {
    title: 'O QUE É O BUSCA AÉREO?',
    description: `É uma ferramenta especializada na venda de passagens aéreas com preços competitivos,
      focado no público corporativo e agência de viagens.`
  },
  {
    title: 'Como posso me tornar um parceiro?',
    description: `Faça o pré-cadastro. que está disponível em nossa página.
      Após isso, um dos nossos profissionais entrará em contato com você para esclarecer suas dúvidas,
      além de solicitar informações complementares com o objetivo de dar continuidade ao cadastro da sua agência de viagem.`
  },
  {
    title: 'Há alguma taxa para eu me tornar um parceiro?',
    description: 'Não. A adesão ao Busca Aéreo é gratuita.'
  },
  {
    title: 'O Busca Aéreo atende todos os estados brasileiros?',
    description: 'Sim. Trabalhamos com clientes de todo o Brasil.'
  },
  {
    title: 'Como funciona a compra de passagens aéreas com milhas?',
    description: `Após tornar-se parceiro Busca Aéreo,você receberá um nome de usuário e uma senha.
      Acesse o nosso sistema, forneça informações sobre a viagem, tais como destino, data de ida e volta e a quantidade de passageiros.`
  },
  {
    title: 'O processo de venda de milhas está de acordo com as normas legais?',
    description: `Sim, todo o processo realizado pela Busca Aéreo está de acordo com a legislação em vigor.`
  },
  {
    title: 'Por que é vantajoso realizar compras com o Busca Aéreo?',
    description: `O nosso sistema foi desenvolvido para lhe entregar os melhores valores,
      inclusive sinalizando se é mais rentável para sua agência a emissão de passagens com milhas e o valor da sua economia por usar o Busca Aéreo.`
  },
  {
    title: 'O Busca Aéreo garante o sigilo das minhas informações e dos meus clientes?',
    description: 'Sim, desde o momento do cadastro, todas as informações são mantidas sob o mais absoluto sigilo.'
  },
  {
    title: 'Por que devo me tornar um parceiro Busca Aéreo?',
    description: `Os benefícios de  ser um parceiro Busca Aéreo vão muito além do lucro.
      Nós fazemos questão de garantir economia, qualidade no atendimento e segurança no processo, de ponta a ponta,
      desde o acesso ao site até o embarque do passageiro.`
  }
];


export const workSteps = [
  {
    step: 1,
    title: 'Cadastro',
    icon: 'form',
    text: `Após efetuar o seu pré-cadastro no ${'<a class="link-work-step" href="#contact">nosso portal</a>'}, aguarde o contato de algum dos nossos profissionais. Após a aprovação do seu cadastro, você vai receber no seu e-mail, um usuário e senha para acesso ao portal.`
  },
  {
    step: 2,
    title: 'Cotação',
    icon: 'search',
    text: `Após informar detalhes do voo, nosso sistema mostrará os melhores valores para a sua solicitação. Inclusive sinalizando se é mais lucrativo a emissão de passagem por meio de milhas ou tarifa.`
  },
  {
    step: 3,
    title: 'ESCOLHA SUA PASSAGEM',
    icon: 'computer',
    text: `Após o detalhamento dos voos, escolha a passagem que melhor te atende. Após isso, siga as instruções do nosso sistema.`
  },
  {
    step: 4,
    title: 'pagamento',
    icon: 'ticket',
    text: 'O pagamento pode ser feito por meio de cartão de crédito ou pelo Pagseguro.'
  }
];


export const flux = {
  busca: {
    route: 'busca', previous: '*'
  },
  emissoes: {
    route: 'emissoes', previous: '*'
  },
  passagem: {
    route: 'passagem', previous: 'busca'
  },
  pagamento: {
    route: 'pagamento', previous: '*'
  },
};


export const gatewayBrand = [
  { label: 'Amex', value: 'Amex' },
  { label: 'Aura', value: 'Aura' },
  { label: 'Elo', value: 'Elo' },
  { label: 'Diners', value: 'Diners' },
  { label: 'Discover', value: 'Discover' },
  { label: 'Master', value: 'Master' },
  { label: 'Visa', value: 'Visa' }
];


export const typePhone = [
  { label: 'Celular', value: 'cellphone' },
  { label: 'Residencial', value: 'phone' },
  { label: 'Compercial', value: 'company_phone' },
  { label: 'Recado', value: 'message' },
  { label: 'Cobrança', value: 'collection' },
  { label: 'Temporário', value: 'temporary' }

];


export const ufs = [
  { value: 'AC', label: 'AC' },
  { value: 'AL', label: 'AL' },
  { value: 'AM', label: 'AM' },
  { value: 'AP', label: 'AP' },
  { value: 'BA', label: 'BA' },
  { value: 'CE', label: 'CE' },
  { value: 'DF', label: 'DF' },
  { value: 'ES', label: 'ES' },
  { value: 'GO', label: 'GO' },
  { value: 'MA', label: 'MA' },
  { value: 'MG', label: 'MG' },
  { value: 'MS', label: 'MS' },
  { value: 'MT', label: 'MT' },
  { value: 'PA', label: 'PA' },
  { value: 'PB', label: 'PB' },
  { value: 'PE', label: 'PE' },
  { value: 'PI', label: 'PI' },
  { value: 'PR', label: 'PR' },
  { value: 'RJ', label: 'RJ' },
  { value: 'RN', label: 'RN' },
  { value: 'RO', label: 'RO' },
  { value: 'RR', label: 'RR' },
  { value: 'RS', label: 'RS' },
  { value: 'SC', label: 'SC' },
  { value: 'SE', label: 'SE' },
  { value: 'SP', label: 'SP' },
  { value: 'TO', label: 'TO' }
];


export const bankAccounts = [
  {
    name: 'BANCO DO BRASIL',
    data: [
      {name: 'Agência', data: '7 - 8'},
      {name: 'Conta', data: '44791 - 9'}
    ]
  },
  {
    name: 'CAIXA ECONÔMICA',
    data: [
      {name: 'Agência', data: '1581'},
      {name: 'Conta', data: '1475 - 6'},
      {name: 'Operação', data: '003'}
    ]
  },
  {
    name: 'SANTANDER',
    data: [
      {name: 'Agência', data: '3295'},
      {name: 'Conta', data: '13090445 - 1'},
    ]
  },
  {
    name: 'BRADESCO',
    data: [
      {name: 'Agência', data: '3209'},
      {name: 'Conta', data: '48 - 5'},
    ]
  },
  {
    name: 'ITAÚ',
    data: [
      {name: 'Agência', data: '9246'},
      {name: 'Conta', data: '24411 - 6'},
    ]
  }
];
