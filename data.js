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
        desc: 'Each time you roll for a Hero cards effect, +1 to your roll.'
    },
    {
        id: 16,
        tittle: 'Doombringer',
        image: require('./HereToSlayImages/Monster/Doombringer.png'),
        category: 1,
        desc: ''
    },
    {
        id: 17,
        tittle: 'Dracos',
        image: require('./HereToSlayImages/Monster/Dracos.png'),
        category: 1,
        desc: ''
    },
    {
        id: 18,
        tittle: 'Malamammoth',
        image: require('./HereToSlayImages/Monster/Malamammoth.png'),
        category: 1,
        desc: ''
    },
    {
        id: 19,
        tittle: 'Mega slime',
        image: require('./HereToSlayImages/Monster/MegaSlime.png'),
        category: 1,
        desc: ''
    },
    {
        id: 20,
        tittle: 'Orthus',
        image: require('./HereToSlayImages/Monster/Orthus.png'),
        category: 1,
        desc: ''
    },
    {
        id: 21,
        tittle: 'Reptillian Ripper',
        image: require('./HereToSlayImages/Monster/ReptilianRipper.png'),
        category: 1,
        desc: ''
    },
    {
        id: 22,
        tittle: 'Rex Major',
        image: require('./HereToSlayImages/Monster/RexMajor.png'),
        category: 1,
        desc: ''
    },
    {
        id: 23,
        tittle: 'Terratuga',
        image: require('./HereToSlayImages/Monster/Terratuga.png'),
        category: 1,
        desc: ''
    },
    {
        id: 24,
        tittle: 'Titan Wyvern',
        image: require('./HereToSlayImages/Monster/TitanWyvern.png'),
        category: 1,
        desc: ''
    },
    {
        id: 25,
        tittle: 'Warworn Owlbear',
        image: require('./HereToSlayImages/Monster/WarwornOwlbear.png'),
        category: 1,
        desc: ''
    },
    {
        id: 26,
        tittle: 'Annihilator',
        image: require('./HereToSlayImages/Heroes/Annihilator.png'),
        category: 2,
        desc: ''
    },
    {
        id: 27,
        tittle: 'Bad Axe',
        image: require('./HereToSlayImages/Heroes/BadAxe.png'),
        category: 2,
        desc: ''
    },
    {
        id: 28,
        tittle: 'Bark Hexer',
        image: require('./HereToSlayImages/Heroes/BarkHexer.png'),
        category: 2,
        desc: ''
    },
    {
        id: 29,
        tittle: 'Bear Claw',
        image: require('./HereToSlayImages/Heroes/BearClaw.png'),
        category: 2,
        desc: ''
    },
    {
        id: 30,
        tittle: 'Beary Wise',
        image: require('./HereToSlayImages/Heroes/BearyWise.png'),
        category: 2,
        desc: ''
    },
    {
        id: 31,
        tittle: 'Beholden Retriever',
        image: require('./HereToSlayImages/Heroes/BeholdenRetriever.png'),
        category: 2,
        desc: ''
    },
    {
        id: 32,
        tittle: 'Bone Collector',
        image: require('./HereToSlayImages/Heroes/BoneCollector.png'),
        category: 2,
        desc: ''
    },
    {
        id: 33,
        tittle: 'BostonTerror',
        image: require('./HereToSlayImages/Heroes/BostonTerror.png'),
        category: 2,
        desc: ''
    },
    {
        id: 34,
        tittle: 'BrawlingSpirit',
        image: require('./HereToSlayImages/Heroes/BrawlingSpirit.png'),
        category: 2,
        desc: ''
    },
    {
        id: 35,
        tittle: 'Bullseye',
        image: require('./HereToSlayImages/Heroes/Bullseye.png'),
        category: 2,
        desc: ''
    },
    {
        id: 36,
        tittle: 'Bun Bun',
        image: require('./HereToSlayImages/Heroes/BunBun.png'),
        category: 2,
        desc: ''
    },
    {
        id: 37,
        tittle: 'Buttons',
        image: require('./HereToSlayImages/Heroes/Buttons.png'),
        category: 2,
        desc: ''
    },
    {
        id: 38,
        tittle: 'Calming Voice',
        image: require('./HereToSlayImages/Heroes/CalmingVoice.png'),
        category: 2,
        desc: ''
    },
    {
        id: 39,
        tittle: 'Dodgy Dealer',
        image: require('./HereToSlayImages/Heroes/DodgyDealer.png'),
        category: 2,
        desc: ''
    },
    {
        id: 40,
        tittle: 'Fluffy',
        image: require('./HereToSlayImages/Heroes/Fluffy.png'),
        category: 2,
        desc: ''
    },
    {
        id: 41,
        tittle: 'Fury Knuckle',
        image: require('./HereToSlayImages/Heroes/FuryKnuckle.png'),
        category: 2,
        desc: ''
    },
    {
        id: 42,
        tittle: 'Wiggles',
        image: require('./HereToSlayImages/Heroes/Wiggles.png'),
        category: 2,
        desc: ''
    },
    {
        id: 43,
        tittle: 'Fuzzy Cheeks',
        image: require('./HereToSlayImages/Heroes/FuzzyCheeks.png'),
        category: 2,
        desc: ''
    },
    {
        id: 44,
        tittle: 'Greedy Cheeks',
        image: require('./HereToSlayImages/Heroes/GreedyCheeks.png'),
        category: 2,
        desc: ''
    },
    {
        id: 45,
        tittle: 'Grim Pupper',
        image: require('./HereToSlayImages/Heroes/GrimPupper.png'),
        category: 2,
        desc: ''
    },
    {
        id: 46,
        tittle: 'Gruesome Gladiator',
        image: require('./HereToSlayImages/Heroes/GruesomeGladiator.png'),
        category: 2,
        desc: ''
    },
    {
        id: 47,
        tittle: 'Guiding Light',
        image: require('./HereToSlayImages/Heroes/GuidingLight.png'),
        category: 2,
        desc: ''
    },
    {
        id: 48,
        tittle: 'Heavy Bears',
        image: require('./HereToSlayImages/Heroes/HeavyBears.png'),
        category: 2,
        desc: ''
    },
    {
        id: 49,
        tittle: 'Hollow Husk',
        image: require('./HereToSlayImages/Heroes/HollowHusk.png'),
        category: 2,
        desc: ''
    },
    {
        id: 50,
        tittle: 'Holy Curselifter',
        image: require('./HereToSlayImages/Heroes/HolyCurselifter.png'),
        category: 2,
        desc: ''
    },
    {
        id: 51,
        tittle: 'Wise Shield',
        image: require('./HereToSlayImages/Heroes/WiseShield.png'),
        category: 2,
        desc: ''
    },
    {
        id: 52,
        tittle: 'Hook',
        image: require('./HereToSlayImages/Heroes/Hook.png'),
        category: 2,
        desc: ''
    },
    {
        id: 53,
        tittle: 'Hopper',
        image: require('./HereToSlayImages/Heroes/Hopper.png'),
        category: 2,
        desc: ''
    },
    {
        id: 54,
        tittle: 'Iron Resolve',
        image: require('./HereToSlayImages/Heroes/IronResolve.png'),
        category: 2,
        desc: ''
    },
    {
        id: 55,
        tittle: 'Kit Napper',
        image: require('./HereToSlayImages/Heroes/KitNapper.png'),
        category: 2,
        desc: ''
    },
    {
        id: 56,
        tittle: 'Lookie Rookie',
        image: require('./HereToSlayImages/Heroes/LookieRookie.png'),
        category: 2,
        desc: ''
    },
    {
        id: 57,
        tittle: 'Lucky Buck',
        image: require('./HereToSlayImages/Heroes/LuckyBuck.png'),
        category: 2,
        desc: ''
    },
    {
        id: 58,
        tittle: 'WildShot',
        image: require('./HereToSlayImages/Heroes/WildShot.png'),
        category: 2,
        desc: ''
    },
    {
        id: 59,
        tittle: 'Mellow Dee',
        image: require('./HereToSlayImages/Heroes/MellowDee.png'),
        category: 2,
        desc: ''
    },
    {
        id: 60,
        tittle: 'Meowntain',
        image: require('./HereToSlayImages/Heroes/Meowntain.png'),
        category: 2,
        desc: ''
    },
    {
        id: 61,
        tittle: 'Meowzio',
        image: require('./HereToSlayImages/Heroes/Meowzio.png'),
        category: 2,
        desc: ''
    },
    {
        id: 62,
        tittle: 'Mighty Blade',
        image: require('./HereToSlayImages/Heroes/MightyBlade.png'),
        category: 2,
        desc: ''
    },
    {
        id: 63,
        tittle: 'Napping Nibbles',
        image: require('./HereToSlayImages/Heroes/NappingNibbles.png'),
        category: 2,
        desc: ''
    },
    {
        id: 64,
        tittle: 'Pan Chucks',
        image: require('./HereToSlayImages/Heroes/PanChucks.png'),
        category: 2,
        desc: ''
    },
    {
        id: 65,
        tittle: 'Peanut',
        image: require('./HereToSlayImages/Heroes/Peanut.png'),
        category: 2,
        desc: ''
    },
    {
        id: 66,
        tittle: 'Perfect Vessel',
        image: require('./HereToSlayImages/Heroes/PerfectVessel.png'),
        category: 2,
        desc: ''
    },
    {
        id: 67,
        tittle: 'Plundering Puma',
        image: require('./HereToSlayImages/Heroes/PlunderingPuma.png'),
        category: 2,
        desc: ''
    },
    {
        id: 68,
        tittle: 'Qi Bear',
        image: require('./HereToSlayImages/Heroes/QiBear.png'),
        category: 2,
        desc: ''
    },
    {
        id: 69,
        tittle: 'Quick Draw',
        image: require('./HereToSlayImages/Heroes/QuickDraw.png'),
        category: 2,
        desc: ''
    },
    {
        id: 70,
        tittle: 'Rabid Beast',
        image: require('./HereToSlayImages/Heroes/RabidBeast.png'),
        category: 2,
        desc: ''
    },
    {
        id: 71,
        tittle: 'RadiantHorn',
        image: require('./HereToSlayImages/Heroes/RadiantHorn.png'),
        category: 2,
        desc: ''
    },
    {
        id: 72,
        tittle: 'Roaryal Guard',
        image: require('./HereToSlayImages/Heroes/RoaryalGuard.png'),
        category: 2,
        desc: ''
    },
    {
        id: 73,
        tittle: 'Serious Grey',
        image: require('./HereToSlayImages/Heroes/SeriousGrey.png'),
        category: 2,
        desc: ''
    },
    {
        id: 74,
        tittle: 'ShadowSaint',
        image: require('./HereToSlayImages/Heroes/ShadowSaint.png'),
        category: 2,
        desc: ''
    },
    {
        id: 75,
        tittle: 'Sharp Fox',
        image: require('./HereToSlayImages/Heroes/SharpFox.png'),
        category: 2,
        desc: ''
    },
    {
        id: 76,
        tittle: 'Shurikitty',
        image: require('./HereToSlayImages/Heroes/Shurikitty.png'),
        category: 2,
        desc: ''
    },
    {
        id: 77,
        tittle: 'Silent Shadow',
        image: require('./HereToSlayImages/Heroes/SilentShadow.png'),
        category: 2,
        desc: ''
    },
    {
        id: 78,
        tittle: 'Slippery Paws',
        image: require('./HereToSlayImages/Heroes/SlipperyPaws.png'),
        category: 2,
        desc: ''
    },
    {
        id: 79,
        tittle: 'Sly Pickings',
        image: require('./HereToSlayImages/Heroes/SlyPickings.png'),
        category: 2,
        desc: ''
    },
    {
        id: 80,
        tittle: 'Wily Red',
        image: require('./HereToSlayImages/Heroes/WilyRed.png'),
        category: 2,
        desc: ''
    },
    {
        id: 81,
        tittle: 'Smooth Mimimeow',
        image: require('./HereToSlayImages/Heroes/SmoothMimimeow.png'),
        category: 2,
        desc: ''
    },
    {
        id: 82,
        tittle: 'Snowball',
        image: require('./HereToSlayImages/Heroes/Snowball.png'),
        category: 2,
        desc: ''
    },
    {
        id: 83,
        tittle: 'Spooky',
        image: require('./HereToSlayImages/Heroes/Spooky.png'),
        category: 2,
        desc: ''
    },
    {
        id: 84,
        tittle: 'Tipsy Tootie',
        image: require('./HereToSlayImages/Heroes/TipsyTootie.png'),
        category: 2,
        desc: ''
    },
    {
        id: 85,
        tittle: 'Tough Teddy',
        image: require('./HereToSlayImages/Heroes/ToughTeddy.png'),
        category: 2,
        desc: ''
    },
    {
        id: 86,
        tittle: 'Unbridled Fury',
        image: require('./HereToSlayImages/Heroes/UnbridledFury.png'),
        category: 2,
        desc: ''
    },
    {
        id: 87,
        tittle: 'Vibrant Glow',
        image: require('./HereToSlayImages/Heroes/VibrantGlow.png'),
        category: 2,
        desc: ''
    },
    {
        id: 88,
        tittle: 'Vicious WildCat',
        image: require('./HereToSlayImages/Heroes/ViniciusWildCat.png'),
        category: 2,
        desc: ''
    },
    {
        id: 89,
        tittle: 'Whiskers',
        image: require('./HereToSlayImages/Heroes/Whiskers.png'),
        category: 2,
        desc: ''
    },
    {
        id: 90,
        tittle: 'Bard Mask',
        image: require('./HereToSlayImages/Itens/BardMask.png'),
        category: 3,
        desc: ''
    },
    {
        id: 91,
        tittle: 'Berserker Mask',
        image: require('./HereToSlayImages/Itens/BerserkerMask.png'),
        category: 3,
        desc: ''
    },
    {
        id: 92,
        tittle: 'Decoy Doll',
        image: require('./HereToSlayImages/Itens/DecoyDoll.png'),
        category: 3,
        desc: ''
    },
    {
        id: 93,
        tittle: 'Fighter Mask',
        image: require('./HereToSlayImages/Itens/FighterMask.png'),
        category: 3,
        desc: ''
    },
    {
        id: 94,
        tittle: 'Goblet Of Caffeination',
        image: require('./HereToSlayImages/Itens/GobletOfCaffeination.png'),
        category: 3,
        desc: ''
    },
    {
        id: 95,
        tittle: 'Guardian Mask',
        image: require('./HereToSlayImages/Itens/GuardianMask.png'),
        category: 3,
        desc: ''
    },
    {
        id: 96,
        tittle: 'Necromancer Mask',
        image: require('./HereToSlayImages/Itens/NecromancerMask.png'),
        category: 3,
        desc: ''
    },
    {
        id: 97,
        tittle: 'Particularly Rusty Coin',
        image: require('./HereToSlayImages/Itens/ParticularluRustyCoin.png'),
        category: 3,
        desc: ''
    },
    {
        id: 98,
        tittle: 'Ranger Mask',
        image: require('./HereToSlayImages/Itens/RangerMask.png'),
        category: 3,
        desc: ''
    },
    {
        id: 99,
        tittle: 'Really Big Ring',
        image: require('./HereToSlayImages/Itens/ReallyBigRing.png'),
        category: 3,
        desc: ''
    },
    {
        id: 100,
        tittle: 'Silver Lining',
        image: require('./HereToSlayImages/Itens/SilverLining.png'),
        category: 3,
        desc: ''
    },
    {
        id: 101,
        tittle: 'Thief Mask',
        image: require('./HereToSlayImages/Itens/ThiefMask.png'),
        category: 3,
        desc: ''
    },
    {
        id: 102,
        tittle: 'wizard Mask',
        image: require('./HereToSlayImages/Itens/WizardMask.png'),
        category: 4,
        desc: ''
    },
    {
        id: 103,
        tittle: 'Curse Of The Snakes Eyes',
        image: require('./HereToSlayImages/CursedItem/CurseOfTheSnakesEyes.png'),
        category: 4,
        desc: ''
    },
    {
        id: 104,
        tittle: 'Dragons Bile',
        image: require('./HereToSlayImages/CursedItem/DragonsBile.png'),
        category: 4,
        desc: ''
    },
    {
        id: 105,
        tittle: 'Sealing Key',
        image: require('./HereToSlayImages/CursedItem/SealingKey.png'),
        category: 4,
        desc: ''
    },
    {
        id: 106,
        tittle: 'Soulbould Grimoire',
        image: require('./HereToSlayImages/CursedItem/SoulboundGrimoire.png'),
        category: 4,
        desc: ''
    },
    {
        id: 107,
        tittle: 'Suspiciously Shiny Coin',
        image: require('./HereToSlayImages/CursedItem/SuspiciouslyShinyCoin.png'),
        category: 4,
        desc: ''
    },
    {
        id: 108,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/ModBerserk.png'),
        category: 5,
        desc: ''
    },
    {
        id: 109,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier.png'),
        category: 5,
        desc: ''
    },
    {
        id: 110,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier1.png'),
        category: 5,
        desc: ''
    },
    {
        id: 111,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier2.png'),
        category: 5,
        desc: ''
    },
    {
        id: 112,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier3.png'),
        category: 5,
        desc: ''
    },
    {
        id: 113,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/Modifier4.png'),
        category: 5,
        desc: ''
    },
    {
        id: 114,
        tittle: 'Modifier',
        image: require('./HereToSlayImages/Modifier/ModNecro.png'),
        category: 5,
        desc: ''
    },
    {
        id: 115,
        tittle: 'CallTo The Fallen',
        image: require('./HereToSlayImages/Magic/CallToTheFallen.png'),
        category: 6,
        desc: ''
    },
    {
        id: 116,
        tittle: 'Critical Boost',
        image: require('./HereToSlayImages/Magic/CriticalBoost.png'),
        category: 6,
        desc: ''
    },
    {
        id: 117,
        tittle: 'Destructive Spell',
        image: require('./HereToSlayImages/Magic/DestructiveSpell.png'),
        category: 6,
        desc: ''
    },
    {
        id: 118,
        tittle: 'Enchanted Spell',
        image: require('./HereToSlayImages/Magic/EnchantedSpell.png'),
        category: 6,
        desc: ''
    },
    {
        id: 119,
        tittle: 'Entangling Trap',
        image: require('./HereToSlayImages/Magic/EntanglingTrap.png'),
        category: 6,
        desc: ''
    },
    {
        id: 120,
        tittle: 'Forced Exchange',
        image: require('./HereToSlayImages/Magic/ForcedExchange.png'),
        category: 6,
        desc: ''
    },
    {
        id: 121,
        tittle: 'Forceful Winds',
        image: require('./HereToSlayImages/Magic/ForcefulWinds.png'),
        category: 6,
        desc: ''
    },
    {
        id: 122,
        tittle: 'Lightning Labrys',
        image: require('./HereToSlayImages/Magic/LightningLabrys.png'),
        category: 6,
        desc: ''
    },
    {
        id: 123,
        tittle: 'Mass Sacrifice',
        image: require('./HereToSlayImages/Magic/MassSacrifice.png'),
        category: 6,
        desc: ''
    },
    {
        id: 124,
        tittle: 'Winds Of Change',
        image: require('./HereToSlayImages/Magic/WindsOfChange.png'),
        category: 6,
        desc: ''
    },
    {
        id: 125,
        tittle: 'Berserker Challenge',
        image: require('./HereToSlayImages/ChallengesCards/BerserkerChallenge.png'),
        category: 7,
        desc: ''
    },
    {
        id: 126,
        tittle: 'Challenge',
        image: require('./HereToSlayImages/ChallengesCards/Challenge.png'),
        category: 7,
        desc: ''
    },
    {
        id: 127,
        tittle: 'Necromancer Challenge',
        image: require('./HereToSlayImages/ChallengesCards/NecromancerChallenge.png'),
        category: 7,
        desc: ''
    },
   
]

export default CARDS