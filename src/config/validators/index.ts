// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* Import your SVG Here.
 * Use upper camel-case for your SVG import, lower camel case for the svg.
 * import { ReactComponent as ValidatorEntityName } from './thumbnails/validatorEntityName.svg';
 */
import { ReactComponent as Amforc } from './thumbnails/amforc.svg';
import { ReactComponent as Crifferent } from './thumbnails/crifferent.svg';
import { ReactComponent as Decentradot } from './thumbnails/decentradot.svg';
import { ReactComponent as HighStake } from './thumbnails/highstake.svg';
import { ReactComponent as GDOT } from './thumbnails/gdot.svg';
import { ReactComponent as Gatotech } from './thumbnails/gatotech.svg';
import { ReactComponent as GoOpen } from './thumbnails/goopen.svg';
import { ReactComponent as Metaspan } from './thumbnails/metaspan.svg';
import { ReactComponent as ParaNodes } from './thumbnails/paranodes.svg';
import { ReactComponent as PDP } from './thumbnails/pdp.svg';
import { ReactComponent as Polkachu } from './thumbnails/polkachu.svg';
import { ReactComponent as Polkadotters } from './thumbnails/polkadotters.svg';
import { ReactComponent as Stakely } from './thumbnails/stakely.svg';
import { ReactComponent as Stakenode } from './thumbnails/stakenode.svg';
import { ReactComponent as Stakepile } from './thumbnails/stakepile.svg';
import { ReactComponent as Stakerspace } from './thumbnails/stakerspace.svg';
import { ReactComponent as Stakeworld } from './thumbnails/stakeworld.svg';
import { ReactComponent as TurboFlakes } from './thumbnails/turboflakes.svg';
import { ReactComponent as Wojdot } from './thumbnails/wojdot.svg';

export const VALIDATOR_COMMUNITY = [
  {
    name: '🍁 HIGH/STAKE 🥩',
    Thumbnail: HighStake,
    bio: 'We came for the memes, we stay for the tech. Located in Switzerland with 15+ years of experience in running reliable online services. We are exclusively running our validators on dedicated hardware in datacenters across Europe.',
    email: 'highstake@nexus-informatik.ch',
    website: 'https://highstake.tech/',
    validators: {
      polkadot: [
        '12bget8jJWnyjqYPiCwkXZjDh5tDBkta1WUcDYyndbXVDmQ1',
        '12Dw4SzhsxX3fpDiLUYXm9oGbfxcbg1Peq67gc5jkkEo1TKr',
      ],
      kusama: [
        'DbRgw96nMQcFEFZWTLd6LSPNdh8u3NBuUDfAhDmB6UU8cJC',
        'HQuPha82sRy91zZn73XRGJVV3ernBh5HZKftUcoDT8CSUwK',
      ],
    },
  },
  {
    name: 'Amforc',
    Thumbnail: Amforc,
    bio: 'We are a independent and experienced staking provider from Switzerland. We run our validators in a hybrid cloud setup across multiple geographical locations. Our validators run significantly above average and close to no blocks are missed as para-validator.',
    email: 'staking@amforc.com',
    twitter: '@amforcag',
    website: 'https://amforc.com/',
    validators: {
      polkadot: ['1y6CPLgccsysCEii3M7jQF834GZsz9A3HMcZz3w7RjGPpBL'],
      kusama: [
        'DVUNoinHdSNfismcrFaBwdJfysxc7A48QkNvTDnTSPXPw3q',
        'DpLatoXXBiSAPooF17bzUZGo7huNB7USfRqd2SgL6RBy2zr',
        'E8zY6KdAH1vuKKMaPdHYLAziht32v2BLqXk6qBw7WtiV2Dv',
        'Ff3xdNrXA47svhiTJHj9uNhxLo29PYjYcJ9cUseAd9FK6iQ',
      ],
    },
  },
  {
    name: '🌐 decentraDOT.com 🌐',
    Thumbnail: Decentradot,
    bio: 'decentraDOT is a high-quality Polkadot validator run by blockchain enthusiasts in the Netherlands. In addition to staking services we provide free of charge software such as our validator dashboard.',
    email: 'admin@decentradot.com',
    website: 'https://decentradot.com',
    validators: {
      polkadot: ['15wznkm7fMaJLFaw7B8KrJWkNcWsDziyTKVjrpPhRLMyXsr5'],
      kusama: [
        'GRSWBC1kCuNVp8KTgGyK7Bo3bP7CdLDPwfnx2L5JJLQ41Qj',
        'Em4HYqVrWX3uCvrC8NWoabfKpV9z8stdRKkXYXcZdWGxdXT',
      ],
    },
  },
  {
    name: 'GATOTECH',
    Thumbnail: Gatotech,
    bio: 'Gatotech Ltd is a Scottish IT company focused on the adoption of decentralised ledger technologies (DLT) for the benefit of humankind.',
    email: 'info@gatotech.uk',
    twitter: '@gatotech_uk',
    website: 'gatotech.uk',
    validators: {
      polkadot: [
        '15iA5hpjUecWBbf38Nfegwmtyux25o3LrGaNodfZDxq5nXXE',
        '14KHzXAZ5admFLXdgbEGpSjCGxiePniHRDM6t5r4o8kbYV7P',
      ],
      kusama: [
        'DrRBkx2Qx4sXRGZDXz6d44QCXqV2eJhn8Rq79V88FpSqAr8',
        'EeFYYF8zrLXRpfFXLn2T5bMmgiFpDpmAhVzoh9hA3188wTc',
      ],
    },
  },
  {
    name: 'GoOpen',
    Thumbnail: GoOpen,
    bio: 'Independent Polkadot Validator. Polkadot teacher on Moralis academy. With strong knowledge of Linux, making sure that the validator is running on a secure and up-to-date system with optimal hardware.',
    validators: {
      polkadot: ['16VVNbc4m6aUxwaVwgRra6Ue7fMNGcRQHTFo1TqxmnCyuwwn'],
      kusama: ['JJiV1xrj1814BVDDG2pFCsgzdbR7K29VcyXQGXEUhn7LWhK'],
    },
  },
  {
    name: 'Jimmy Tudeski | Stakenode ʕ •ᴥ•ʔ',
    Thumbnail: Stakenode,
    bio: 'Stakenode provides validation and staking services for Polkadot and Kusama relay chains and parachain networks. We are independent node operators, experienced Dotsama ambassadors, focused on community, decentralisation and ecosystem development. Come stake and build with us.',
    email: 'jimmytudeski@stakenode.dev',
    twitter: '@stakenode_dev',
    website: 'https://stakenode.medium.com/',
    validators: {
      kusama: [
        'FvdwMNP57nRWEsNZZsrHWKqnbmduy4jBAC8MeLmgi9Yp8sA',
        'D3Sr3PozgPypkBzKBheGSJbqu8m4idenBPaWtZUXLWPtjJT',
      ],
    },
  },
  {
    name: 'METASPAN',
    Thumbnail: Metaspan,
    bio: 'End-to-end blockchain solutions, building on Polkadot and Kusama.',
    email: 'hello@metaspan.com',
    twitter: '@metaspan_io',
    website: 'https://metaspan.com/',
    validators: {
      polkadot: ['16ce9zrmiuAtdi9qv1tuiQ1RC1xR6y6NgnBcRtMoQeAobqpZ'],
      kusama: ['HyLisujX7Cr6D7xzb6qadFdedLt8hmArB6ZVGJ6xsCUHqmx'],
    },
  },
  {
    name: 'G-dot Tech',
    Thumbnail: GDOT,
    bio: 'G-dot Tech is providing professional staking services on well-maintained bare metal machines with locations across Europe. Our goal is to contribute to the decentralization of Polkadot and Kusama by staying independent with a small share among the active validators. Feel free to reach out any time if you have questions.',
    email: 'g-dot.tech@protonmail.com',
    website: 'https://g-dot.tech/',
    validators: {
      polkadot: ['153Fz22gxQP8HM8RbnvEt9XWsXu9nR8jxZC2MbQFmuKhN62f'],
      kusama: [
        'G9zJwPviHn5qRHCRX4Gm75XtUob9Cagyu4fdrhrzwsbqUwX',
        'HHvov74Rs8S9zGJifq7HKw4Ua14medsxokDyyCwjSSDfSj7',
        'DPdkDRzUV56F5R8fNjZwFx2Uctn173c1UJJXjxQMVMZuCqS',
      ],
    },
  },
  {
    name: 'ParaNodes.io',
    Thumbnail: ParaNodes,
    bio: 'ParaNodes offers nominators high returns through low commissions and high reliability.  ParaNodes is a team of three (3) individuals over two timezones to ensure adequate coverage.  We take a knowledge and process based approach to ensuring security and stablility of operations.',
    email: 'support@paranodes.io',
    twitter: '@paranodes',
    website: 'https://paranodes.io/',
    validators: {
      polkadot: ['14hM4oLJCK6wtS7gNfwTDhthRjy5QJ1t3NAcoPjEepo9AH67'],
      kusama: [
        'H3DL157HL7DkvV2kXocanmKaGXNyQphUDVW33Fnfk8KNhsv',
        'HtYny8Eker9VBEKQrtBd6Y5PTkaHQFSvyMFy2bkd66wGBan',
        'FkWky3r2bryP3aaAwVWykYrKesAwkDyKZWsDyBvck7YawSi',
        'EsNZHmG4bQMGzQNK4Z2CR7Hdhu4or7p2vsLRChUEJcjJAeU',
        'EriYFJuqCeBF6SFkKxyQWwaTvT9tcoF9ZGDQ4LX3a1iBsYr',
        'ESzw1JdRfoBNUKo12qjqu4RMgro3exrit1Tr1GGFjVhyHZf',
        'DtrDM8ZZpBhTSwptMCgYEzJqbPUFArScxikZfbd9tHA47PZ',
        'EWxmJtdmRUtpgLiHzFbtQc3E2jDx9j3VYZPmjWCEaSUnCZG',
        'HyZUEZw5G18KtisetKL274g2Kh6i2XHKtFoheyKJW9vBwXu',
        'Gu6Jt8TJQ3LF7dJgVLCr1JfoxKTcWhMAoaXr8ATczMAE9vm',
        'ECLwZzFusnTr6hdztrkVaTKeQoWxKZBh9e8EzdG92QX7PAy',
        'EjHrXpRHyo1WpWEmFKTYT8wEtTXKnzZDQAth1MErwDmabmq',
        'GpZgakHH3wR1vCvYFgy8Q1iJWYqxyQiRPyeXhGKWxX88uXP',
        'CecU9j1rpC6CDSzFjtrUmNqonzVk5n1BNFiTiN9vadA1rMs',
        'FYiswPLWbZAJSBJ3AcGcXpQYxCJW3eE56QQvnshGUEKJexW',
      ],
    },
  },
  {
    name: 'PDP_Validator',
    Thumbnail: PDP,
    bio: 'Our service has its own infrastructure and a team of administrators.  The beneficiaries of our service are investment professionals.  We validate in projects from the top 10.  We will help you earn!',
    email: 'pavel.butenko@yahoo.com',
    twitter: '@PaulBAciD',
    website: 'https://t.me/go300info',
    validators: {
      polkadot: ['16Y3FmTiJ3ZYAUZrf5rZtxrQJzcHsDBdscpu2zgMD2xN6NY7'],
      kusama: [
        'J7MmkYX4dJzUbNnU9ccemPFbxtsyaSgFVwAGMxx8k9Lf5cu',
        'HCogweijHTm85qf9cSUqjNmyZZvu61r4SsTcsAT7S7pgpem',
      ],
    },
  },
  {
    name: 'polkachu.com',
    Thumbnail: Polkachu,
    bio: 'Polkachu Validators helps investors compound their crypto investments with low commission and advanced support.',
    email: 'hello@polkachu.com',
    twitter: '@polka_chu',
    website: 'https://polkachu.com/',
    validators: {
      polkadot: ['15ym3MDSG4WPABNoEtx2rAzBB1EYWJDWbWYpNg1BwuWRAQcY'],
      kusama: [
        'CsKvJ4fdesaRALc5swo5iknFDpop7YUwKPJHdmUvBsUcMGb',
        'GpyTMuLmG3ADWRxhZpHQh5rqMgNpFoNUyxA1DJAXfvsQ2Ly',
        'CeD8Kk3QLzp2HDRSciF6YQAc2xYAPurMsHAQUGwEJgCWAf2',
        'GZmbAW7rRi2qkMrHYzmeG2a3fS7nTaAZpjdum8QZ7CvmM7H',
        'G1qbViqnm6yCZwEbfB4oE38ro8VqJx21zyvW7QN8zAJC2B7',
      ],
    },
  },
  {
    name: 'Polkadotters',
    Thumbnail: Polkadotters,
    bio: 'We are Polkadot focused node operators and community builders from Czechia.',
    email: 'polkadotters@protonmail.com',
    twitter: '@Polkadotters1',
    website: 'https://polkadotters.com/',
    validators: {
      polkadot: ['16A4n4UQqgxw5ndeehPjUAobDNmuX2bBoPXVKj4xTe16ktRN'],
      kusama: ['FVAFUJhJy9tj1X4PaEXX3tDzjaBEVsVunABAdsDMD4ZYmWA'],
    },
  },
  {
    name: 'Stakely',
    Thumbnail: Stakely,
    bio: '🔥 Professional validator highly experienced in PoS 🔥 Slashing protection & Eligible for airdrops | Learn with our staking guides, video tutorials and FAQs | Part of the commission of our nodes will go to our Multicoin Faucet funds and other tools 🌱 Carbon Neutral 🌱',
    email: 'nodes@stakely.io',
    twitter: '@stakely_io',
    website: 'https://stakely.io',
    validators: {
      polkadot: [
        '15R1Th3ULXAq81QPGeEDfE1ywbw19AjZiARxH7czm83wS2w2'
      ],
      kusama: [
        'EfcQCKZJaNu2vcrpnJDCoh1ub4mGWcHVzeU8ghUH7Co9rui'
      ]
    }
  },
  {
    name: 'Stakepile.com',
    Thumbnail: Stakepile,
    bio: 'Reliable, independent staking service with low fees to help you earn better yields. We actively participate in all community on-chain governance. Our nodes are geographically distributed across several regions for better redundancy and decentralization.',
    email: 'stake@stakepile.com',
    twitter: '@stakepile',
    website: 'https://stakepile.com',
    validators: {
      polkadot: ['124X3VPduasSodAjS6MPd5nEqM8SUdKN5taMUUPtkWqF1fVf'],
      kusama: [
        'J6TTn21p46c1XzXAZPVTGuQwBxFG2JfTwRnAFwgcdE2SWdz',
        'EAChfSL6tQfjy7vD8YgYB8DCn7A9c1aAsERP9Hx8cj1tqxL',
      ],
    },
  },
  {
    name: 'Sik | crifferent.de',
    Thumbnail: Crifferent,
    bio: 'Crifferent offers reliable and secure staking services made in Germany. Combining professionals from IT, marketing, and finance, they evaluate the best projects and offer services to its full extent.',
    email: 'simon.kraus@crifferent.de',
    twitter: '@dev0_sik',
    website: 'https://crifferent.de/',
    validators: {
      polkadot: ['15wepZh1jWNqxBjsgErm8HmYiE21n79c5krQJeTsYAjHddeM'],
      kusama: [
        'HWyLYmpW68JGJYoVJcot6JQ1CJbtUQeTdxfY1kUTsvGCB1r',
        'GLSikJaXTVWvWtUhzB3Bj6xb5TcnhTUp6EuAkxaCohT9UBv',
      ],
    },
  },
  {
    name: 'Staker Space',
    Thumbnail: Stakerspace,
    bio: 'Hi! We are an independent and experienced staking provider. Our homebase is the Netherlands, but we have a run across multiple geographical locations dedicated hardware for our validators. We have been running Kusama and Polkadot validators since the start of the network are highly experienced in doing so. If you have any questions, please get in touch with us.',
    email: 'hello@staker.space',
    twitter: '@stakerspace',
    website: 'https://staker.space',
    validators: {
      polkadot: [
        '16SpacegeUTft9v3ts27CEC3tJaxgvE4uZeCctThFH3Vb24p',
        '14N5nJ4oR4Wj36DsBcPLh1JqjvrM2Uf23No2yc2ojjCvSC24',
        '1NqVmUJCyaj5yZ9jp7ZZa58hbUx2QaBZ4eSCu9bqAdZXgAm',
      ],
      kusama: [
        'FcjmeNzPk3vgdENm1rHeiMCxFK96beUoi2kb59FmCoZtkGF',
        'Eksma7JmWh8DenpNKi2uCavwaKJ9QrJJbtcnmwJr3hbHSmC',
        'Dm64aaAUyy5dvYCSmyzz3njGrWrVaki9F6BvUDSYjDDoqR2',
        'DfHkfoKa6xzNMWTNGL8SH8VyY69gajen4ijgmegeU4cZm1H',
      ],
    },
  },
  {
    name: 'STAKEWORLD',
    Thumbnail: Stakeworld,
    bio: 'STAKEWORLD is based in the Netherlands and provides highly reliable Polkadot and Kusama validator services with nodes hosted on dedicated (bare metal) hardware.',
    email: 'info@stakeworld.nl',
    website: 'https://stakeworld.nl',
    validators: {
      polkadot: [
        '14kpNbU4XjEHfYdqp95Gq3NkBWbgFd6J8Yjd2SneWNzvf1Yp',
        '13Jpq4n3PXXaSAbJTMmFD78mXAzs8PzgUUQd5ve8saw7HQS5',
      ],
      kusama: [
        'CtEni6wrP7Kz2KWus9Y6vQWuhLqJpd9mQFTmTvw8T7FLui8',
        'FZ1GFKR6tYx9gNGHV67h5aV6bfhAbh7ZRdU9ypVvXfseyfg',
        'Et9M3rrA7H2kHQEGRXHxufcp9HTEmFirMWtKHvjoJ85r1C9',
      ],
    },
  },
  {
    name: 'TurboFlakes',
    Thumbnail: TurboFlakes,
    bio: 'TurboFlakes provides validators with character running on top of dedicated and high performance servers. Raiden, Coco and Momo are our named validators serving non-stop Polkadot and Kusama. We also provide end-user tooling to help you to interact with substrate blockchain networks. Feel free to reach out.',
    email: 'hey@turboflakes.io',
    twitter: '@turboflakes',
    website: 'https://turboflakes.io',
    validators: {
      polkadot: ['12gPFmRqnsDhc9C5DuXyXBFA23io5fSGtKTSAimQtAWgueD2'],
      kusama: [
        'FZsMKYHoQG1dAVhXBMyC7aYFYpASoBrrMYsAn1gJJUAueZX',
        'GA7j1FHWXpEU4kavowEte6LWR3NgZ8bkv4spWa9joiQF5R2',
      ],
    },
  },
  {
    name: 'WOJDOT ʕ •ᴥ•ʔ',
    Thumbnail: Wojdot,
    bio: 'Independent Polkadot Validator. We run our service on bare metal machines via a cloud service with the ability to spin up validator nodes in different regions within a matter of minutes.',
    email: 'wojdot@wojdot.com',
    twitter: '@wojdot',
    validators: {
      polkadot: ['13kz33kotYa3M75u5avMS367zJY3Fx2y5ZYASEPunqfEeCjD'],
    },
  },
];
