const headerMenu = [
  {
    title: {
      en: 'Learn',
      'fr-fr': 'Apprendre',
      'pt-br': 'Aprenda',
    },
    items: [
      {
        title: {
          en: 'What is eBPF?',
          'fr-fr': 'Qu’est-ce qu’eBPF',
          'pt-br': 'O que é o eBPF',
        },
        to: {
          en: '/what-is-ebpf',
          'fr-fr': '/fr-fr/what-is-ebpf',
          'pt-br': '/pt-br/what-is-ebpf',
        },
      },
      {
        title: {
          en: 'Get Started',
          'fr-fr': 'Commencer',
          'pt-br': 'Comece',
        },
        to: {
          en: '/get-started',
          'fr-fr': '/fr-fr/get-started',
          'pt-br': '/pt-br/get-started',
        },
      },
      {
        title: {
          en: 'Case Studies',
          'fr-fr': 'Études de cas',
          'pt-br': 'Estudos de Caso',
        },
        to: {
          en: '/case-studies',
          'fr-fr': '/fr-fr/case-studies',
          'pt-br': '/pt-br/case-studies',
        },
      },
      {
        title: 'Labs',
        to: {
          en: '/labs',
          'fr-fr': '/fr-fr/labs',
          'pt-br': '/pt-br/labs',
        },
      },
    ],
  },
  {
    title: {
      en: 'Project Landscape',
      'fr-fr': 'Paysage du projet',
      'pt-br': 'Landscape do Projeto',
    },
    items: [
      {
        title: {
          en: 'Applications',
          'fr-fr': 'Applications',
          'pt-br': 'Aplicações',
        },
        to: {
          en: '/applications',
          'fr-fr': '/fr-fr/applications',
          'pt-br': '/pt-br/applications',
        },
      },
      {
        title: {
          en: 'Infrastructure',
          'fr-fr': 'Infrastructure',
          'pt-br': 'Infraestrutura',
        },
        to: {
          en: '/infrastructure',
          'fr-fr': '/fr-fr/infrastructure',
          'pt-br': '/pt-br/infrastructure',
        },
      },
    ],
  },

  {
    title: {
      en: 'Events',
      'fr-fr': 'Événements',
      'pt-br': 'Eventos',
    },
    items: [
      {
        title: {
          en: 'All Events',
          'fr-fr': 'Tous les évènements',
          'pt-br': 'Todos os Eventos',
        },
        to: {
          en: '/events?overview',
          'fr-fr': '/fr-fr/events?overview',
          'pt-br': '/pt-br/events?overview',
        },
      },
      {
        title: 'eBPF Summit',
        to: {
          en: '/events?conference=eBPF%20Summit',
          'fr-fr': '/fr-fr/events?conference=eBPF%20Summit',
          'pt-br': '/pt-br/events?conference=eBPF%20Summit',
        },
      },
      {
        title: 'eBPF Meetup',
        to: 'https://www.meetup.com/ebpf-user-group/',
        target: '_blank',
      },
      {
        title: 'eBPF Track (LPC)',
        to: {
          en: '/events?conference=eBPF%20Track%20%28LPC%29',
          'fr-fr': '/fr-fr/events?conference=eBPF%20Track%20%28LPC%29',
          'pt-br': '/pt-br/events?conference=eBPF%20Track%20%28LPC%29',
        },
      },
      {
        title: 'bpfconf (LSF/MM/BPF)',
        to: {
          en: '/events?conference=bpfconf%20%28LSF%2FMM%2FBPF%29',
          'fr-fr': '/fr-fr/events?conference=bpfconf%20%28LSF%2FMM%2FBPF%29',
          'pt-br': '/pt-br/events?conference=bpfconf%20%28LSF%2FMM%2FBPF%29',
        },
      },
    ],
  },
  {
    title: {
      en: 'Community',
      'fr-fr': 'Communauté',
      'pt-br': 'Comunidade',
    },
    items: [
      {
        title: {
          en: 'Get Started',
          'fr-fr': 'Commencer',
          'pt-br': 'Comece',
        },
        to: {
          en: '/get-started/#docs',
          'fr-fr': '/fr-fr/get-started/#docs',
          'pt-br': '/pt-br/get-started/#docs',
        },
      },
      {
        title: 'Slack',
        to: 'https://ebpf.io/slack',
      },
      {
        title: 'eBPF Meetup',
        to: 'https://www.meetup.com/ebpf-user-group/',
      },
      {
        title: 'Stack Overflow',
        to: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf+or+xdp-ebpf+or+bcc-bpf+or+libbpf+or+bpftrace',
        target: '_blank',
      },
      {
        title: 'r/eBPF',
        to: 'https://www.reddit.com/r/eBPF/',
        target: '_blank',
      },
      {
        title: 'Wikipedia',
        to: 'https://en.wikipedia.org/wiki/EBPF',
        target: '_blank',
      },
      {
        title: 'eCHO',
        to: 'https://github.com/isovalent/eCHO',
        target: '_blank',
      },
      {
        title: {
          en: 'Newsletter',
          'fr-fr': 'Newsletter',
          'pt-br': 'Boletim informativo',
        },
        to: '/newsletter',
      },
      {
        title: {
          en: 'Contribute',
          'fr-fr': 'Contribuer',
          'pt-br': 'Contribua',
        },
        to: {
          en: '/contribute',
          'fr-fr': '/fr-fr/contribute',
          'pt-br': '/pt-br/contribute',
        },
      },
    ],
  },
  {
    title: 'Blog',
    to: '/blog',
  },
  {
    title: {
      en: 'Foundation',
      'fr-fr': 'Fondation',
      'pt-br': 'Fundação',
    },
    to: 'https://ebpf.foundation/',
  },
];

export default headerMenu;
