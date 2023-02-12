const CARDS = [
    {
        id: 1,
        tittle: 'The Carismatic Song',
        image: require('./HereToSlayImages/PartyLeader/TheCarismaticSong.png'),
        category: 0,
        desc: 'Cada vez que você rolar para usar o efeito de uma carta de Herói, +1 para sua jogada.'
    },
    {
        id: 2,
        tittle: 'The Cloaked Sage',
        image: require('./HereToSlayImages/PartyLeader/TheCloakedSage.png'),
        category: 0,
        desc: 'Cada vez que você jogar uma carta de Magica, COMPRE uma carta.'
    },
    {
        id: 3,
        tittle: 'The Divine Arrow',
        image: require('./HereToSlayImages/PartyLeader/TheDivineArrow.png'),
        category: 0,
        desc: 'Cada vez que você rola para ATACAR uma carta de Monstro, +1 na sua rolagem.'
    },
    {
        id: 4,
        tittle: 'The Fist Of Reason',
        image: require('./HereToSlayImages/PartyLeader/TheFirstOfReason.png'),
        category: 0,
        desc: 'Cada vez que você rolar para DESAFIO, +2 para o seu teste.'
    },
    {
        id: 5,
        tittle: 'The Gnawing Dread',
        image: require('./HereToSlayImages/PartyLeader/TheGnawingDread.png'),
        category: 0,
        desc: 'Uma vez por turno, você pode gastar 2 pontos de ação para procurar uma carta na pilha de descarte e adicioná-la à sua mão.'
    },
    {
        id: 6,
        tittle: 'The Protecting Horn',
        image: require('./HereToSlayImages/PartyLeader/TheProtectingHorn.png'),
        category: 0,
        desc: 'Cada vez que você jogar uma carta Modificadora em uma jogada, +1 ou -1 para aquela jogada.'
    },
    {
        id: 7,
        tittle: 'The Ragning Manticore',
        image: require('./HereToSlayImages/PartyLeader/TheRagingManticore.png'),
        category: 0,
        desc: 'Cada vez que você MATAR uma carta de Monstro, COMPRE 2 cartas.'
    },
    {
        id: 8,
        tittle: 'The Shadow Claw',
        image: require('./HereToSlayImages/PartyLeader/TheShadowClaw.png'),
        category: 0,
        desc: 'Uma vez por turno, você pode gastar um ponto de ação para retirar uma carta da mão de outro jogador.'
    },
    {
        id: 9,
        tittle: 'Abyss Queen',
        image: require('./HereToSlayImages/Monster/AbyssQueen.png'),
        category: 1,
        desc: 'Cada vez que outro jogador jogar uma carta modificadora em uma de suas jogadas, +1 para sua jogada.'
    },
    {
        id: 10,
        tittle: 'Anuran Cauldron',
        image: require('./HereToSlayImages/Monster/AnuranCauldron.png'),
        category: 1,
        desc: 'Cada vez que você rolar, +1 para sua rolagem.'
    },
    {
        id: 11,
        tittle: 'ArticAries',
        image: require('./HereToSlayImages/Monster/ArticAries.png'),
        category: 1,
        desc: 'Cada vez que você rolar com sucesso para usar o efeito de um Herói, COMPRE uma carta.'
    },
    {
        id: 12,
        tittle: 'Bloodwing',
        image: require('./HereToSlayImages/Monster/Bloodwing.png'),
        category: 1,
        desc: 'Sempre que um jogador DESAFIAR você, ele deve DESCARTAR uma carta.'
    },
    {
        id: 13,
        tittle: 'Corrupted Sabretooth',
        image: require('./HereToSlayImages/Monster/CorruptedSabretooth.png'),
        category: 1,
        desc: 'Cada vez que você DESTRUIR uma carta de Herói, você pode ROUBAR essa carta de Herói.'
    },
    {
        id: 14,
        tittle: 'Crowned Serpent',
        image: require('./HereToSlayImages/Monster/CrownedSerpent.png'),
        category: 1,
        desc: 'Cada vez que qualquer jogador (incluindo você) jogar uma carta Modificadora, você pode COMPRAR uma carta.'
    },
    {
        id: 15,
        tittle: 'Dark Dragon King',
        image: require('./HereToSlayImages/Monster/DarkDragonKing.png'),
        category: 1,
        desc: 'Cada vez que você rolar para obter um efeito de cartas de Herói, +1 para sua rolagem.'
    },
    {
        id: 16,
        tittle: 'Doombringer',
        image: require('./HereToSlayImages/Monster/Doombringer.png'),
        category: 1,
        desc: 'Cada vez que você SACRIFICA uma carta, você pode escolher uma carta da pilha de descarte e adicioná-la à sua mão.'
    },
    {
        id: 17,
        tittle: 'Dracos',
        image: require('./HereToSlayImages/Monster/Dracos.png'),
        category: 1,
        desc: 'Cada vez que uma carta de Herói do seu Grupo for destruída, você pode COMPRAR uma carta.'
    },
    {
        id: 18,
        tittle: 'Malamammoth',
        image: require('./HereToSlayImages/Monster/Malamammoth.png'),
        category: 1,
        desc: 'Cada vez que você COMPRAR uma carta de item, você pode jogá-la imediatamente.'
    },
    {
        id: 19,
        tittle: 'Mega slime',
        image: require('./HereToSlayImages/Monster/MegaSlime.png'),
        category: 1,
        desc: 'Você pode gastar um ponto de ação extra em cada um de seus turnos.'
    },
    {
        id: 20,
        tittle: 'Orthus',
        image: require('./HereToSlayImages/Monster/Orthus.png'),
        category: 1,
        desc: 'Cada vez que você COMPRAR uma carta de Magic, você pode jogá-la imediatamente.'
    },
    {
        id: 21,
        tittle: 'Reptillian Ripper',
        image: require('./HereToSlayImages/Monster/ReptilianRipper.png'),
        category: 1,
        desc: 'Cada vez que você rola para ATACAR uma carta de Monstro, +2 na sua rolagem.'
    },
    {
        id: 22,
        tittle: 'Rex Major',
        image: require('./HereToSlayImages/Monster/RexMajor.png'),
        category: 1,
        desc: 'Cada vez que você COMPRAR uma carta modificadora, você pode revelá-la e COMPRAR uma segunda carta.'
    },
    {
        id: 23,
        tittle: 'Terratuga',
        image: require('./HereToSlayImages/Monster/Terratuga.png'),
        category: 1,
        desc: 'Suas cartas de Herói não podem ser destruídas.'
    },
    {
        id: 24,
        tittle: 'Titan Wyvern',
        image: require('./HereToSlayImages/Monster/TitanWyvern.png'),
        category: 1,
        desc: 'Cada vez que você rola uma carta de Desafio, +1 em sua rolagem.'
    },
    {
        id: 25,
        tittle: 'Warworn Owlbear',
        image: require('./HereToSlayImages/Monster/WarwornOwlbear.png'),
        category: 1,
        desc: 'As cartas de itens que você joga não podem ser desafiadas.'
    },
    {
        id: 26,
        tittle: 'Annihilator',
        image: require('./HereToSlayImages/Heroes/Annihilator.png'),
        category: 2,
        desc: 'Procure na pilha de descarte por uma carta de Desafio e adicione-a à sua mão.'
    },
    {
        id: 27,
        tittle: 'Bad Axe',
        image: require('./HereToSlayImages/Heroes/BadAxe.png'),
        category: 2,
        desc: 'DESTRUA uma carta de Herói'
    },
    {
        id: 28,
        tittle: 'Bark Hexer',
        image: require('./HereToSlayImages/Heroes/BarkHexer.png'),
        category: 2,
        desc: 'DESCARTE uma carta. Cada outro jogador deve DESCARTAR 2 cartas.'
    },
    {
        id: 29,
        tittle: 'Bear Claw',
        image: require('./HereToSlayImages/Heroes/BearClaw.png'),
        category: 2,
        desc: 'Puxe uma carta da mão de outro jogador. Se for uma carta de Herói, puxe uma segunda carta da mão daquele jogador.'
    },
    {
        id: 30,
        tittle: 'Beary Wise',
        image: require('./HereToSlayImages/Heroes/BearyWise.png'),
        category: 2,
        desc: 'Cada outro jogador deve DESCARTAR uma carta. Escolha uma das cartas descartadas e adicione-a à sua mão.'
    },
    {
        id: 31,
        tittle: 'Beholden Retriever',
        image: require('./HereToSlayImages/Heroes/BeholdenRetriever.png'),
        category: 2,
        desc: 'SACRIFIQUE uma carta de Herói. Procure na pilha de descarte uma carta de Herói ou Item, adicione-a à sua mão e jogue-a imediatamente.'
    },
    {
        id: 32,
        tittle: 'Bone Collector',
        image: require('./HereToSlayImages/Heroes/BoneCollector.png'),
        category: 2,
        desc: 'SACRIFIQUE uma carta de Item. Procure na pilha de descarte uma carta de Herói, adicione-a à sua mão e jogue-a imediatamente.'
    },
    {
        id: 33,
        tittle: 'Boston Terror',
        image: require('./HereToSlayImages/Heroes/BostonTerror.png'),
        category: 2,
        desc: 'Escolha um jogador. Esse jogador pode lhe dar uma carta da mão dele. Caso contrário, você pode escolher 2 cartas da pilha de descarte e adicioná-las à sua mão.'
    },
    {
        id: 34,
        tittle: 'BrawlingSpirit',
        image: require('./HereToSlayImages/Heroes/BrawlingSpirit.png'),
        category: 2,
        desc: 'Cada jogador (incluindo você) com mais de 3 cartas em seu Grupo deve SACRIFICAR uma carta.'
    },
    {
        id: 35,
        tittle: 'Bullseye',
        image: require('./HereToSlayImages/Heroes/Bullseye.png'),
        category: 2,
        desc: 'Olhe as 3 primeiras cartas do baralho. Adicione um à sua mão e devolva os outros dois ao topo do baralho em qualquer ordem.'
    },
    {
        id: 36,
        tittle: 'Bun Bun',
        image: require('./HereToSlayImages/Heroes/BunBun.png'),
        category: 2,
        desc: 'Procure na pilha de descarte por um card de Magic e adicione-o à sua mão.'
    },
    {
        id: 37,
        tittle: 'Buttons',
        image: require('./HereToSlayImages/Heroes/Buttons.png'),
        category: 2,
        desc: 'Puxe uma carta da mão de outro jogador. Se for uma carta de Magic, você pode jogá-la imediatamente.'
    },
    {
        id: 38,
        tittle: 'Calming Voice',
        image: require('./HereToSlayImages/Heroes/CalmingVoice.png'),
        category: 2,
        desc: 'As cartas de herói do seu grupo não podem ser roubadas até o próximo turno.'
    },
    {
        id: 39,
        tittle: 'Dodgy Dealer',
        image: require('./HereToSlayImages/Heroes/DodgyDealer.png'),
        category: 2,
        desc: 'Trade hands with another player.'
    },
    {
        id: 40,
        tittle: 'Fluffy',
        image: require('./HereToSlayImages/Heroes/Fluffy.png'),
        category: 2,
        desc: 'DESTROY 2 Hero cards'
    },
    {
        id: 41,
        tittle: 'Fury Knuckle',
        image: require('./HereToSlayImages/Heroes/FuryKnuckle.png'),
        category: 2,
        desc: 'Puxe uma carta da mão de outro jogador. Se for uma carta de Desafio, puxe uma segunda carta da mão daquele jogador.'
    },
    {
        id: 42,
        tittle: 'Wiggles',
        image: require('./HereToSlayImages/Heroes/Wiggles.png'),
        category: 2,
        desc: 'ROUBE um Herói e role para usar seu efeito imediatamente'
    },
    {
        id: 43,
        tittle: 'Fuzzy Cheeks',
        image: require('./HereToSlayImages/Heroes/FuzzyCheeks.png'),
        category: 2,
        desc: 'COMPRE uma carta e jogue uma carta de Herói de sua mão imediatamente.'
    },
    {
        id: 44,
        tittle: 'Greedy Cheeks',
        image: require('./HereToSlayImages/Heroes/GreedyCheeks.png'),
        category: 2,
        desc: 'Cada outro jogador deve dar a você uma carta de sua mão.'
    },
    {
        id: 45,
        tittle: 'Grim Pupper',
        image: require('./HereToSlayImages/Heroes/GrimPupper.png'),
        category: 2,
        desc: 'Cada jogador (incluindo você) deve SACRIFICAR uma carta.'
    },
    {
        id: 46,
        tittle: 'Gruesome Gladiator',
        image: require('./HereToSlayImages/Heroes/GruesomeGladiator.png'),
        category: 2,
        desc: 'Olhe para a mão de cada um dos outros jogadores. Escolha uma carta da mão de cada jogador e adicione-a à sua mão.'
    },
    {
        id: 47,
        tittle: 'Guiding Light',
        image: require('./HereToSlayImages/Heroes/GuidingLight.png'),
        category: 2,
        desc: 'Procure na pilha de descarte uma carta de Herói e adicione-a à sua mão.'
    },
    {
        id: 48,
        tittle: 'Heavy Bears',
        image: require('./HereToSlayImages/Heroes/HeavyBears.png'),
        category: 2,
        desc: 'Escolha um jogador. Esse jogador deve DESCARTAR 2 cartas.'
    },
    {
        id: 49,
        tittle: 'Hollow Husk',
        image: require('./HereToSlayImages/Heroes/HollowHusk.png'),
        category: 2,
        desc: 'Olhe para a mão de outro jogador. Escolha uma carta de Magic (se houver) e adicione-a à sua mão. Você pode jogá-lo imediatamente.'
    },
    {
        id: 50,
        tittle: 'Holy Curselifter',
        image: require('./HereToSlayImages/Heroes/HolyCurselifter.png'),
        category: 2,
        desc: 'Devolva uma carta de Item Amaldiçoado equipada a uma carta de Herói do seu Grupo para a sua mão.'
    },
    {
        id: 51,
        tittle: 'Wise Shield',
        image: require('./HereToSlayImages/Heroes/WiseShield.png'),
        category: 2,
        desc: '+3 em todas as suas rolagens até o final do seu turno.'
    },
    {
        id: 52,
        tittle: 'Hook',
        image: require('./HereToSlayImages/Heroes/Hook.png'),
        category: 2,
        desc: 'Jogue uma carta de item de sua mão imediatamente e COMPRE uma carta.'
    },
    {
        id: 53,
        tittle: 'Hopper',
        image: require('./HereToSlayImages/Heroes/Hopper.png'),
        category: 2,
        desc: 'Escolha um jogador. Esse jogador deve SACRIFICAR uma carta de Herói.'
    },
    {
        id: 54,
        tittle: 'Iron Resolve',
        image: require('./HereToSlayImages/Heroes/IronResolve.png'),
        category: 2,
        desc: 'As cartas que você joga não podem ser desafiadas pelo resto do seu turno.'
    },
    {
        id: 55,
        tittle: 'Kit Napper',
        image: require('./HereToSlayImages/Heroes/KitNapper.png'),
        category: 2,
        desc: 'ROUBAR uma carta de Herói.'
    },
    {
        id: 56,
        tittle: 'Lookie Rookie',
        image: require('./HereToSlayImages/Heroes/LookieRookie.png'),
        category: 2,
        desc: 'Procure na pilha de descarte por uma carta de item e adicione-a à sua mão.'
    },
    {
        id: 57,
        tittle: 'Lucky Buck',
        image: require('./HereToSlayImages/Heroes/LuckyBuck.png'),
        category: 2,
        desc: 'Puxe uma carta da mão de outro jogador. Se essa carta for uma carta de Herói, você pode jogá-la imediatamente'
    },
    {
        id: 58,
        tittle: 'WildShot',
        image: require('./HereToSlayImages/Heroes/WildShot.png'),
        category: 2,
        desc: 'COMPRE 3 cartas e DESCARTE uma carta.'
    },
    {
        id: 59,
        tittle: 'Mellow Dee',
        image: require('./HereToSlayImages/Heroes/MellowDee.png'),
        category: 2,
        desc: 'COMPRE uma carta. Se essa carta for uma carta de Herói, você pode jogá-la imediatamente.'
    },
    {
        id: 60,
        tittle: 'Meowntain',
        image: require('./HereToSlayImages/Heroes/Meowntain.png'),
        category: 2,
        desc: 'SACRIFÍCIO uma carta. +5 em todas as suas rolagens até o final do seu turno.'
    },
    {
        id: 61,
        tittle: 'Meowzio',
        image: require('./HereToSlayImages/Heroes/Meowzio.png'),
        category: 2,
        desc: 'Escolha um jogador. ROUBE um Herói daquele jogador e puxe uma carta da mão daquele jogador.'
    },
    {
        id: 62,
        tittle: 'Mighty Blade',
        image: require('./HereToSlayImages/Heroes/MightyBlade.png'),
        category: 2,
        desc: 'As cartas de herói do seu Grupo não podem ser destruídas até o seu próximo turno.'
    },
    {
        id: 63,
        tittle: 'Napping Nibbles',
        image: require('./HereToSlayImages/Heroes/NappingNibbles.png'),
        category: 2,
        desc: 'Fazer nada.'
    },
    {
        id: 64,
        tittle: 'Pan Chucks',
        image: require('./HereToSlayImages/Heroes/PanChucks.png'),
        category: 2,
        desc: 'COMPRE 2 cartas. Se pelo menos uma dessas cartas for uma carta de Desafio, você pode revelá-la e depois DESTRUIR uma carta de Herói.'
    },
    {
        id: 65,
        tittle: 'Peanut',
        image: require('./HereToSlayImages/Heroes/Peanut.png'),
        category: 2,
        desc: 'COMPRE 2 cartas.'
    },
    {
        id: 66,
        tittle: 'Perfect Vessel',
        image: require('./HereToSlayImages/Heroes/PerfectVessel.png'),
        category: 2,
        desc: 'SACRIFICE esta carta, depois ROUBE uma carta de Herói.'
    },
    {
        id: 67,
        tittle: 'Plundering Puma',
        image: require('./HereToSlayImages/Heroes/PlunderingPuma.png'),
        category: 2,
        desc: 'Puxe 2 cartas da mão de outro jogador. Esse jogador pode COMPRAR uma carta.'
    },
    {
        id: 68,
        tittle: 'Qi Bear',
        image: require('./HereToSlayImages/Heroes/QiBear.png'),
        category: 2,
        desc: 'DESCARTE até 3 cartas. Para cada carta descartada, DESTRUA uma carta de Herói.'
    },
    {
        id: 69,
        tittle: 'Quick Draw',
        image: require('./HereToSlayImages/Heroes/QuickDraw.png'),
        category: 2,
        desc: 'COMPRE 2 cartas. Se pelo menos uma dessas cartas for uma carta de item, você pode jogar uma delas imediatamente.'
    },
    {
        id: 70,
        tittle: 'Rabid Beast',
        image: require('./HereToSlayImages/Heroes/RabidBeast.png'),
        category: 2,
        desc: 'SACRIFICE any number of cards, then DESTROY the same number of cards.'
    },
    {
        id: 71,
        tittle: 'RadiantHorn',
        image: require('./HereToSlayImages/Heroes/RadiantHorn.png'),
        category: 2,
        desc: 'Procure na pilha de descarte uma carta modificadora e adicione-a à sua mão.'
    },
    {
        id: 72,
        tittle: 'Roaryal Guard',
        image: require('./HereToSlayImages/Heroes/RoaryalGuard.png'),
        category: 2,
        desc: 'Escolha uma aula. Devolva cada carta de Herói daquela Classe para a mão de seu respectivo jogador.'
    },
    {
        id: 73,
        tittle: 'Serious Grey',
        image: require('./HereToSlayImages/Heroes/SeriousGrey.png'),
        category: 2,
        desc: 'DESTRUA um Herói e COMPRE uma carta.'
    },
    {
        id: 74,
        tittle: 'ShadowSaint',
        image: require('./HereToSlayImages/Heroes/ShadowSaint.png'),
        category: 2,
        desc: 'DESCARTE uma carta modificadora. Nenhum outro jogador pode jogar cartas modificadoras até o final do seu turno.'
    },
    {
        id: 75,
        tittle: 'Sharp Fox',
        image: require('./HereToSlayImages/Heroes/SharpFox.png'),
        category: 2,
        desc: 'Olhe para a mão de outro jogador'
    },
    {
        id: 76,
        tittle: 'Shurikitty',
        image: require('./HereToSlayImages/Heroes/Shurikitty.png'),
        category: 2,
        desc: 'DESTRUA uma carta de Herói. Se aquela carta de Herói tiver uma carta de item equipada, adicione essa carta de item à sua mão em vez de movê-la para a pilha de descarte.'
    },
    {
        id: 77,
        tittle: 'Silent Shadow',
        image: require('./HereToSlayImages/Heroes/SilentShadow.png'),
        category: 2,
        desc: 'Olhe para a mão de outro jogador. Escolha uma carta e adicione-a à sua mão.'
    },
    {
        id: 78,
        tittle: 'Slippery Paws',
        image: require('./HereToSlayImages/Heroes/SlipperyPaws.png'),
        category: 2,
        desc: 'Pull 2 cards from another players hand, then DISCARD one of those cards.'
    },
    {
        id: 79,
        tittle: 'Sly Pickings',
        image: require('./HereToSlayImages/Heroes/SlyPickings.png'),
        category: 2,
        desc: 'Puxe uma carta da mão de outro jogador. Se essa carta for uma carta de item, você pode jogá-la imediatamente.'
    },
    {
        id: 80,
        tittle: 'Wily Red',
        image: require('./HereToSlayImages/Heroes/WilyRed.png'),
        category: 2,
        desc: 'COMPRE cartas até que você tenha 7 cartas em sua mão.'
    },
    {
        id: 81,
        tittle: 'Smooth Mimimeow',
        image: require('./HereToSlayImages/Heroes/SmoothMimimeow.png'),
        category: 2,
        desc: 'Puxe uma carta da mão de cada outro jogador com um ladrão em seu grupo.'
    },
    {
        id: 82,
        tittle: 'Snowball',
        image: require('./HereToSlayImages/Heroes/Snowball.png'),
        category: 2,
        desc: 'COMPRE uma carta. Se for uma carta de Magic, você pode jogá-la imediatamente e COMPRAR uma segunda carta.'
    },
    {
        id: 83,
        tittle: 'Spooky',
        image: require('./HereToSlayImages/Heroes/Spooky.png'),
        category: 2,
        desc: 'Cada outro jogador deve SACRIFICAR uma carta de Herói.'
    },
    {
        id: 84,
        tittle: 'Tipsy Tootie',
        image: require('./HereToSlayImages/Heroes/TipsyTootie.png'),
        category: 2,
        desc: 'Escolha um jogador. ROUBE uma carta de Herói do Grupo daquele jogador e mova Tipsy Tootie para o Grupo daquele jogador.'
    },
    {
        id: 85,
        tittle: 'Tough Teddy',
        image: require('./HereToSlayImages/Heroes/ToughTeddy.png'),
        category: 2,
        desc: 'Cada outro jogador com um lutador em seu grupo deve DESCARTAR uma carta.'
    },
    {
        id: 86,
        tittle: 'Unbridled Fury',
        image: require('./HereToSlayImages/Heroes/UnbridledFury.png'),
        category: 2,
        desc: 'DESTRUA uma carta de Herói. Se essa carta de Herói for um Berserker, você pode gastar um ponto de ação extra neste turno.'
    },
    {
        id: 87,
        tittle: 'Vibrant Glow',
        image: require('./HereToSlayImages/Heroes/VibrantGlow.png'),
        category: 2,
        desc: '+5 em todas as suas rolagens até o final do seu turno.'
    },
    {
        id: 88,
        tittle: 'Vicious WildCat',
        image: require('./HereToSlayImages/Heroes/ViniciusWildCat.png'),
        category: 2,
        desc: 'SLAY any Monster card, then end your turn.'
    },
    {
        id: 89,
        tittle: 'Whiskers',
        image: require('./HereToSlayImages/Heroes/Whiskers.png'),
        category: 2,
        desc: 'ROUBE uma carta de Herói e DESTRUA uma carta de Herói.'
    },
    {
        id: 90,
        tittle: 'Bard Mask',
        image: require('./HereToSlayImages/Itens/BardMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Bardo em vez de sua classe original.'
    },
    {
        id: 91,
        tittle: 'Berserker Mask',
        image: require('./HereToSlayImages/Itens/BerserkerMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Berserker em vez de sua classe original.'
    },
    {
        id: 92,
        tittle: 'Decoy Doll',
        image: require('./HereToSlayImages/Itens/DecoyDoll.png'),
        category: 3,
        desc: 'Se a carta de Herói equipada for sacrificada ou destruída, mova a Boneca Chamariz para a pilha de descarte.'
    },
    {
        id: 93,
        tittle: 'Fighter Mask',
        image: require('./HereToSlayImages/Itens/FighterMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Lutador em vez de sua classe original.'
    },
    {
        id: 94,
        tittle: 'Goblet Of Caffeination',
        image: require('./HereToSlayImages/Itens/GobletOfCaffeination.png'),
        category: 3,
        desc: 'Se você rolar sem sucesso para usar o efeito da carta do Herói equipado, você pode SACRIFICAR esta carta, então role para usar aquele efeito novamente imediatamente.'
    },
    {
        id: 95,
        tittle: 'Guardian Mask',
        image: require('./HereToSlayImages/Itens/GuardianMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Guardião em vez de sua classe original.'
    },
    {
        id: 96,
        tittle: 'Necromancer Mask',
        image: require('./HereToSlayImages/Itens/NecromancerMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Necromante em vez de sua classe original.'
    },
    {
        id: 97,
        tittle: 'Particularly Rusty Coin',
        image: require('./HereToSlayImages/Itens/ParticularluRustyCoin.png'),
        category: 3,
        desc: 'Se você rolar sem sucesso para usar o efeito da carta do Herói equipado, COMPRE uma carta.'
    },
    {
        id: 98,
        tittle: 'Ranger Mask',
        image: require('./HereToSlayImages/Itens/RangerMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Ranger em vez de sua classe original.'
    },
    {
        id: 99,
        tittle: 'Biggest Ring Ever',
        image: require('./HereToSlayImages/Itens/BiggestRingEver.png'),
        category: 3,
        desc: 'Cada vez que rolar para usar o efeito da carta do Herói equipado, você pode DESCARTAR até 3 cartas. Para cada carta descartada, +2 na rolagem.'
    },
    {
        id: 100,
        tittle: 'Really Big Ring',
        image: require('./HereToSlayImages/Itens/ReallyBigRing.png'),
        category: 3,
        desc: 'Cada vez que você rola para usar o efeito da carta do Herói equipado, +2 para sua rolagem.'
    },
    {
        id: 101,
        tittle: 'Silver Lining',
        image: require('./HereToSlayImages/Itens/SilverLining.png'),
        category: 3,
        desc: 'Se você rolar sem sucesso para usar o efeito da carta de Herói equipada, +2 em todas as suas jogadas pelo resto do seu turno.'
    },
    {
        id: 102,
        tittle: 'Thief Mask',
        image: require('./HereToSlayImages/Itens/ThiefMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Ladrão em vez de sua classe original.'
    },
    {
        id: 103,
        tittle: 'wizard Mask',
        image: require('./HereToSlayImages/Itens/WizardMask.png'),
        category: 3,
        desc: 'A carta de Herói equipada é considerada um Mago em vez de sua classe original.'
    },
    {
        id: 104,
        tittle: 'Curse Of The Snakes Eyes',
        image: require('./HereToSlayImages/CursedItem/CurseOfTheSnakesEyes.png'),
        category: 4,
        desc: 'A carta de Herói equipada é considerada um Mago em vez de sua classe original.'
    },
    {
        id: 105,
        tittle: 'Dragons Bile',
        image: require('./HereToSlayImages/CursedItem/DragonsBile.png'),
        category: 4,
        desc: 'Se você rolar sem sucesso para usar o efeito da carta de Herói equipada, SACRIFICE uma carta de Herói.'
    },
    {
        id: 106,
        tittle: 'Sealing Key',
        image: require('./HereToSlayImages/CursedItem/SealingKey.png'),
        category: 4,
        desc: 'Você não pode usar o efeito da carta de Herói equipada.'
    },
    {
        id: 107,
        tittle: 'Soulbould Grimoire',
        image: require('./HereToSlayImages/CursedItem/SoulboundGrimoire.png'),
        category: 4,
        desc: 'Rolar para usar o efeito da carta do Herói equipado custa 2 pontos de ação.'
    },
    {
        id: 108,
        tittle: 'Suspiciously Shiny Coin',
        image: require('./HereToSlayImages/CursedItem/SuspiciouslyShinyCoin.png'),
        category: 4,
        desc: 'Se você rolar com sucesso para usar o efeito da carta do Herói equipado, DESCARTE uma carta.'
    },
    {
        id: 109,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/ModBerserk.png'),
        category: 5,
        desc: 'Jogue esta carta depois que qualquer jogador (incluindo você) lançar os dados. DESCARTE sua mão. +7 para esse teste.'
    },
    {
        id: 110,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier.png'),
        category: 5,
        desc: 'Jogue esta carta depois que qualquer jogador (incluindo você) lançar os dados. -4 nessa rolagem.'
    },
    {
        id: 111,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier1.png'),
        category: 5,
        desc: 'Jogue esta carta depois que qualquer jogador (incluindo você) lance os dados. +4 para esse teste.'
    },
    {
        id: 112,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier2.png'),
        category: 5,
        desc: 'Jogue esta carta depois que qualquer jogador (incluindo você) lançar os dados. +3 ou -1 para essa rolagem.'
    },
    {
        id: 113,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier3.png'),
        category: 5,
        desc: 'Jogue esta carta depois que qualquer jogador (incluindo você) lançar os dados. +2 ou -2 para essa rolagem.'
    },
    {
        id: 114,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier4.png'),
        category: 5,
        desc: 'Jogue esta carta depois que qualquer jogador (incluindo você) lançar os dados. +1 ou -3 para essa rolagem.'
    },
    {
        id: 115,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/ModNecro.png'),
        category: 5,
        desc: 'Jogue esta carta depois que qualquer jogador (incluindo você) lançar os dados. +2 ou -2 para essa rolagem. Se você estiver atacando uma carta de Monstro, em vez disso, +4 para essa rolagem.'
    },
    {
        id: 116,
        tittle: 'CallTo The Fallen',
        image: require('./HereToSlayImages/Magic/CallToTheFallen.png'),
        category: 6,
        desc: 'Procure na pilha de descarte uma carta de Herói e adicione-a à sua mão.'
    },
    {
        id: 117,
        tittle: 'Critical Boost',
        image: require('./HereToSlayImages/Magic/CriticalBoost.png'),
        category: 6,
        desc: 'Procure na pilha de descarte uma carta de Herói e adicione-a à sua mão.'
    },
    {
        id: 118,
        tittle: 'Destructive Spell',
        image: require('./HereToSlayImages/Magic/DestructiveSpell.png'),
        category: 6,
        desc: 'DESCARTE uma carta, depois DESTRUA uma carta de Herói.'
    },
    {
        id: 119,
        tittle: 'Enchanted Spell',
        image: require('./HereToSlayImages/Magic/EnchantedSpell.png'),
        category: 6,
        desc: '+2 em todas as suas rolagens até o final do seu turno.'
    },
    {
        id: 120,
        tittle: 'Entangling Trap',
        image: require('./HereToSlayImages/Magic/EntanglingTrap.png'),
        category: 6,
        desc: 'DESCARTE 2 cartas, depois ROUBE uma carta de Herói.'
    },
    {
        id: 121,
        tittle: 'Forced Exchange',
        image: require('./HereToSlayImages/Magic/ForcedExchange.png'),
        category: 6,
        desc: 'Escolha um jogador. ROUBE uma carta de Herói do Grupo daquele jogador, então mova uma carta de Herói do seu Grupo para o Grupo daquele jogador.'
    },
    {
        id: 122,
        tittle: 'Forceful Winds',
        image: require('./HereToSlayImages/Magic/ForcefulWinds.png'),
        category: 6,
        desc: 'Devolva cada carta de item equipado para a mão de seu respectivo jogador.'
    },
    {
        id: 123,
        tittle: 'Lightning Labrys',
        image: require('./HereToSlayImages/Magic/LightningLabrys.png'),
        category: 6,
        desc: 'DESCARTE até 3 cartas. Para cada carta descartada, escolha um jogador. Esse jogador deve SACRIFICAR uma carta de Herói.'
    },
    {
        id: 124,
        tittle: 'Mass Sacrifice',
        image: require('./HereToSlayImages/Magic/MassSacrifice.png'),
        category: 6,
        desc: 'DESCARTE sua mão e, em seguida, COMPRE 5 cartas.'
    },
    {
        id: 125,
        tittle: 'Winds Of Change',
        image: require('./HereToSlayImages/Magic/WindsOfChange.png'),
        category: 6,
        desc: 'Devolva uma carta de Item equipada à carta de Herói de qualquer jogador para a mão daquele jogador e, em seguida, COMPRE uma carta.'
    },
    {
        id: 126,
        tittle: 'Berserker Challenge',
        image: require('./HereToSlayImages/ChallengesCards/BerserkerChallenge.png'),
        category: 7,
        desc: 'Você pode jogar esta carta quando outro jogador tentar jogar uma carta de Herói, Item ou Magic. DESAFIE essa carta. +3 em sua rolagem.'
    },
    {
        id: 127,
        tittle: 'Challenge',
        image: require('./HereToSlayImages/ChallengesCards/Challenge.png'),
        category: 7,
        desc: 'Você pode jogar esta carta quando outro jogador tentar jogar uma carta de Herói, Item ou Magic. DESAFIE essa carta.'
    },
    {
        id: 128,
        tittle: 'Necromancer Challenge',
        image: require('./HereToSlayImages/ChallengesCards/NecromancerChallenge.png'),
        category: 7,
        desc: 'Você pode jogar esta carta quando outro jogador tentar jogar uma carta de Herói, Item ou Magic. DESAFIE essa carta. +3 em sua rolagem.'
    },
   
]

export default CARDS