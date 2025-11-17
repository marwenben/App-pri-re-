// ═══════════════════════════════════════════════════════════════════
// BASE DE HADITHS AUTHENTIQUES (SAHIH)
// Collections: Bukhari, Muslim, Abu Dawud, Tirmidhi, An-Nasa'i, Ibn Majah
// ═══════════════════════════════════════════════════════════════════

const hadithsDatabase = [
    // ───────────────────────────────────────────────────────────────
    // BUKHARI - صحيح البخاري
    // ───────────────────────────────────────────────────────────────
    {
        id: 1,
        collection: 'Bukhari',
        bookNumber: 1,
        hadithNumber: 1,
        arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        french: 'Les actions ne valent que par les intentions et chacun n\'aura que ce qu\'il a eu réellement l\'intention de faire.',
        theme: 'Intention',
        reference: 'Sahih Bukhari 1'
    },
    {
        id: 2,
        collection: 'Bukhari',
        bookNumber: 2,
        hadithNumber: 8,
        arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
        french: 'Le musulman est celui dont les musulmans sont à l\'abri de la langue et de la main.',
        theme: 'Comportement',
        reference: 'Sahih Bukhari 10'
    },
    {
        id: 3,
        collection: 'Bukhari',
        bookNumber: 2,
        hadithNumber: 13,
        arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
        french: 'Aucun d\'entre vous ne sera véritablement croyant tant qu\'il n\'aimera pas pour son frère ce qu\'il aime pour lui-même.',
        theme: 'Foi',
        reference: 'Sahih Bukhari 13'
    },
    {
        id: 4,
        collection: 'Bukhari',
        bookNumber: 8,
        hadithNumber: 466,
        arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ',
        french: 'Que celui qui croit en Allah et au Jour Dernier honore son hôte.',
        theme: 'Comportement',
        reference: 'Sahih Bukhari 6018'
    },
    {
        id: 5,
        collection: 'Bukhari',
        bookNumber: 76,
        hadithNumber: 437,
        arabic: 'الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ',
        french: 'La bonne parole est une aumône.',
        theme: 'Parole',
        reference: 'Sahih Bukhari 6023'
    },
    
    // ───────────────────────────────────────────────────────────────
    // MUSLIM - صحيح مسلم
    // ───────────────────────────────────────────────────────────────
    {
        id: 6,
        collection: 'Muslim',
        bookNumber: 1,
        hadithNumber: 1,
        arabic: 'بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ',
        french: 'L\'Islam est bâti sur cinq piliers: le témoignage qu\'il n\'y a de dieu qu\'Allah et que Muhammad est Son messager, l\'accomplissement de la prière, l\'acquittement de la Zakat, le pèlerinage et le jeûne du Ramadan.',
        theme: 'Piliers de l\'Islam',
        reference: 'Sahih Muslim 16'
    },
    {
        id: 7,
        collection: 'Muslim',
        bookNumber: 1,
        hadithNumber: 99,
        arabic: 'الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ',
        french: 'La foi comporte plus de soixante-dix branches. La plus élevée est le témoignage qu\'il n\'y a de dieu qu\'Allah et la plus modeste consiste à ôter de la route ce qui peut nuire aux passants.',
        theme: 'Foi',
        reference: 'Sahih Muslim 35'
    },
    {
        id: 8,
        collection: 'Muslim',
        bookNumber: 2,
        hadithNumber: 577,
        arabic: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
        french: 'L\'invocation est l\'essence même de l\'adoration.',
        theme: 'Invocation',
        reference: 'Sahih Muslim 577'
    },
    {
        id: 9,
        collection: 'Muslim',
        bookNumber: 32,
        hadithNumber: 6232,
        arabic: 'مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ',
        french: 'Celui qui soulage un croyant d\'un souci de ce monde, Allah le soulagera d\'un souci du Jour de la Résurrection.',
        theme: 'Entraide',
        reference: 'Sahih Muslim 2699'
    },
    {
        id: 10,
        collection: 'Muslim',
        bookNumber: 45,
        hadithNumber: 34,
        arabic: 'الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا',
        french: 'Le croyant est pour le croyant comme un édifice dont les parties se soutiennent mutuellement.',
        theme: 'Fraternité',
        reference: 'Sahih Muslim 2585'
    },
    
    // ───────────────────────────────────────────────────────────────
    // ABU DAWUD - سنن أبي داود
    // ───────────────────────────────────────────────────────────────
    {
        id: 11,
        collection: 'Abu Dawud',
        bookNumber: 4,
        hadithNumber: 4031,
        arabic: 'مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الإِيمَانِ',
        french: 'Celui d\'entre vous qui voit un mal, qu\'il le change de sa main; s\'il ne peut pas, alors de sa langue; et s\'il ne peut pas, alors de son cœur et c\'est le degré de foi le plus faible.',
        theme: 'Responsabilité',
        reference: 'Abu Dawud 4031'
    },
    {
        id: 12,
        collection: 'Abu Dawud',
        bookNumber: 41,
        hadithNumber: 4800,
        arabic: 'مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ، مُعَافًى فِي جَسَدِهِ، عِنْدَهُ قُوتُ يَوْمِهِ، فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا',
        french: 'Celui qui se réveille en sécurité, en bonne santé et ayant sa subsistance quotidienne, c\'est comme si le monde entier lui appartenait.',
        theme: 'Gratitude',
        reference: 'Abu Dawud 4800'
    },
    
    // ───────────────────────────────────────────────────────────────
    // TIRMIDHI - جامع الترمذي
    // ───────────────────────────────────────────────────────────────
    {
        id: 13,
        collection: 'Tirmidhi',
        bookNumber: 25,
        hadithNumber: 1924,
        arabic: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي',
        french: 'Le meilleur d\'entre vous est celui qui est le meilleur avec sa famille, et je suis le meilleur d\'entre vous avec ma famille.',
        theme: 'Famille',
        reference: 'Tirmidhi 3895'
    },
    {
        id: 14,
        collection: 'Tirmidhi',
        bookNumber: 27,
        hadithNumber: 1987,
        arabic: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
        french: 'Crains Allah où que tu sois, fais suivre le mal par le bien qui l\'effacera et comporte-toi avec les gens d\'une manière bienveillante.',
        theme: 'Morale',
        reference: 'Tirmidhi 1987'
    },
    {
        id: 15,
        collection: 'Tirmidhi',
        bookNumber: 34,
        hadithNumber: 2376,
        arabic: 'الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ',
        french: 'Ce monde est une prison pour le croyant et un paradis pour le mécréant.',
        theme: 'Vie d\'ici-bas',
        reference: 'Tirmidhi 2324'
    },
    
    // ───────────────────────────────────────────────────────────────
    // AN-NASA'I - سنن النسائي
    // ───────────────────────────────────────────────────────────────
    {
        id: 16,
        collection: 'An-Nasa\'i',
        bookNumber: 22,
        hadithNumber: 3104,
        arabic: 'الطُّهُورُ شَطْرُ الإِيمَانِ',
        french: 'La propreté représente la moitié de la foi.',
        theme: 'Purification',
        reference: 'An-Nasa\'i 1'
    },
    {
        id: 17,
        collection: 'An-Nasa\'i',
        bookNumber: 49,
        hadithNumber: 5028,
        arabic: 'لَا ضَرَرَ وَلَا ضِرَارَ',
        french: 'On ne doit ni se nuire à soi-même ni nuire à autrui.',
        theme: 'Justice',
        reference: 'An-Nasa\'i 5028'
    },
    
    // ───────────────────────────────────────────────────────────────
    // IBN MAJAH - سنن ابن ماجه
    // ───────────────────────────────────────────────────────────────
    {
        id: 18,
        collection: 'Ibn Majah',
        bookNumber: 37,
        hadithNumber: 4107,
        arabic: 'أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ',
        french: 'Les gens les plus aimés d\'Allah sont ceux qui sont les plus utiles aux autres.',
        theme: 'Utilité',
        reference: 'Ibn Majah 4217'
    },
    {
        id: 19,
        collection: 'Ibn Majah',
        bookNumber: 33,
        hadithNumber: 3849,
        arabic: 'مَنْ كَظَمَ غَيْظًا وَهُوَ قَادِرٌ عَلَى أَنْ يُنْفِذَهُ دَعَاهُ اللَّهُ يَوْمَ الْقِيَامَةِ',
        french: 'Celui qui retient sa colère alors qu\'il est capable de la manifester, Allah l\'appellera le Jour de la Résurrection.',
        theme: 'Maîtrise de soi',
        reference: 'Ibn Majah 4186'
    },
    {
        id: 20,
        collection: 'Ibn Majah',
        bookNumber: 25,
        hadithNumber: 2954,
        arabic: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ',
        french: 'Les miséricordieux bénéficient de la miséricorde du Tout-Miséricordieux.',
        theme: 'Miséricorde',
        reference: 'Ibn Majah 1924'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS QUDSI - الأحاديث القدسية
    // ───────────────────────────────────────────────────────────────
    {
        id: 21,
        collection: 'Hadith Qudsi',
        bookNumber: 0,
        hadithNumber: 1,
        arabic: 'أَنَا عِنْدَ ظَنِّ عَبْدِي بِي، وَأَنَا مَعَهُ إِذَا ذَكَرَنِي',
        french: 'Je suis tel que Mon serviteur pense de Moi et Je suis avec lui quand il M\'invoque.',
        theme: 'Proximité divine',
        reference: 'Hadith Qudsi (Bukhari)'
    },
    {
        id: 22,
        collection: 'Hadith Qudsi',
        bookNumber: 0,
        hadithNumber: 2,
        arabic: 'يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلَا تَظَالَمُوا',
        french: 'Ô Mes serviteurs, Je Me suis interdit l\'injustice et Je l\'ai rendue illicite entre vous, ne soyez donc pas injustes les uns envers les autres.',
        theme: 'Justice divine',
        reference: 'Hadith Qudsi (Muslim)'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LA PRIÈRE - أحاديث الصلاة
    // ───────────────────────────────────────────────────────────────
    {
        id: 23,
        collection: 'Bukhari',
        bookNumber: 10,
        hadithNumber: 505,
        arabic: 'الصَّلَاةُ نُورٌ',
        french: 'La prière est lumière.',
        theme: 'Prière',
        reference: 'Sahih Muslim 223'
    },
    {
        id: 24,
        collection: 'Muslim',
        bookNumber: 4,
        hadithNumber: 668,
        arabic: 'أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ',
        french: 'Le serviteur est plus proche de son Seigneur lorsqu\'il est prosterné.',
        theme: 'Prosternation',
        reference: 'Sahih Muslim 482'
    },
    {
        id: 25,
        collection: 'Abu Dawud',
        bookNumber: 2,
        hadithNumber: 425,
        arabic: 'مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ فَكَأَنَّمَا قَامَ نِصْفَ اللَّيْلِ',
        french: 'Celui qui prie l\'Isha en groupe, c\'est comme s\'il avait prié la moitié de la nuit.',
        theme: 'Prière en groupe',
        reference: 'Abu Dawud 425'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LE CORAN - أحاديث القرآن
    // ───────────────────────────────────────────────────────────────
    {
        id: 26,
        collection: 'Tirmidhi',
        bookNumber: 45,
        hadithNumber: 2910,
        arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
        french: 'Le meilleur d\'entre vous est celui qui apprend le Coran et l\'enseigne.',
        theme: 'Coran',
        reference: 'Sahih Bukhari 5027'
    },
    {
        id: 27,
        collection: 'Muslim',
        bookNumber: 6,
        hadithNumber: 798,
        arabic: 'اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ',
        french: 'Lisez le Coran car il viendra le Jour de la Résurrection comme intercesseur pour les siens.',
        theme: 'Coran',
        reference: 'Sahih Muslim 804'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LE JEÛNE - أحاديث الصيام
    // ───────────────────────────────────────────────────────────────
    {
        id: 28,
        collection: 'Bukhari',
        bookNumber: 30,
        hadithNumber: 1771,
        arabic: 'الصِّيَامُ جُنَّةٌ',
        french: 'Le jeûne est une protection.',
        theme: 'Jeûne',
        reference: 'Sahih Bukhari 1771'
    },
    {
        id: 29,
        collection: 'Muslim',
        bookNumber: 13,
        hadithNumber: 1151,
        arabic: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        french: 'Celui qui jeûne le Ramadan avec foi et en espérant la récompense, ses péchés passés lui seront pardonnés.',
        theme: 'Ramadan',
        reference: 'Sahih Bukhari 38'
    },
    {
        id: 30,
        collection: 'Tirmidhi',
        bookNumber: 7,
        hadithNumber: 764,
        arabic: 'لِلصَّائِمِ فَرْحَتَانِ: فَرْحَةٌ عِنْدَ فِطْرِهِ، وَفَرْحَةٌ عِنْدَ لِقَاءِ رَبِّهِ',
        french: 'Le jeûneur a deux joies: une joie lors de la rupture du jeûne et une joie lors de la rencontre avec son Seigneur.',
        theme: 'Jeûne',
        reference: 'Sahih Bukhari 1904'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LA CHARITÉ - أحاديث الصدقة
    // ───────────────────────────────────────────────────────────────
    {
        id: 31,
        collection: 'Bukhari',
        bookNumber: 24,
        hadithNumber: 1411,
        arabic: 'الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ',
        french: 'L\'aumône éteint le péché comme l\'eau éteint le feu.',
        theme: 'Charité',
        reference: 'Tirmidhi 614'
    },
    {
        id: 32,
        collection: 'Muslim',
        bookNumber: 12,
        hadithNumber: 1006,
        arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ',
        french: 'Ton sourire à ton frère est une aumône.',
        theme: 'Charité',
        reference: 'Tirmidhi 1956'
    },
    {
        id: 33,
        collection: 'Abu Dawud',
        bookNumber: 16,
        hadithNumber: 1664,
        arabic: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ',
        french: 'L\'aumône ne diminue jamais les biens.',
        theme: 'Charité',
        reference: 'Sahih Muslim 2588'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LA PATIENCE - أحاديث الصبر
    // ───────────────────────────────────────────────────────────────
    {
        id: 34,
        collection: 'Muslim',
        bookNumber: 45,
        hadithNumber: 2574,
        arabic: 'عَجَبًا لِأَمْرِ الْمُؤْمِنِ، إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ',
        french: 'Étonnante est la situation du croyant, car toute sa situation est bonne.',
        theme: 'Patience',
        reference: 'Sahih Muslim 2999'
    },
    {
        id: 35,
        collection: 'Bukhari',
        bookNumber: 23,
        hadithNumber: 1469,
        arabic: 'مَنْ يَسْتَعْفِفْ يُعِفَّهُ اللَّهُ، وَمَنْ يَسْتَغْنِ يُغْنِهِ اللَّهُ، وَمَنْ يَتَصَبَّرْ يُصَبِّرْهُ اللَّهُ',
        french: 'Celui qui cherche la chasteté, Allah le rendra chaste; celui qui cherche l\'indépendance, Allah le rendra indépendant; et celui qui s\'efforce d\'être patient, Allah lui accordera la patience.',
        theme: 'Patience',
        reference: 'Sahih Bukhari 1469'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LA CONNAISSANCE - أحاديث العلم
    // ───────────────────────────────────────────────────────────────
    {
        id: 36,
        collection: 'Ibn Majah',
        bookNumber: 1,
        hadithNumber: 224,
        arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
        french: 'La quête du savoir est une obligation pour tout musulman.',
        theme: 'Connaissance',
        reference: 'Ibn Majah 224'
    },
    {
        id: 37,
        collection: 'Abu Dawud',
        bookNumber: 25,
        hadithNumber: 3641,
        arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ',
        french: 'Celui qui emprunte un chemin dans la quête du savoir, Allah lui facilitera le chemin vers le Paradis.',
        theme: 'Connaissance',
        reference: 'Abu Dawud 3641'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LES PARENTS - أحاديث الوالدين
    // ───────────────────────────────────────────────────────────────
    {
        id: 38,
        collection: 'Bukhari',
        bookNumber: 78,
        hadithNumber: 5971,
        arabic: 'الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ',
        french: 'Le Paradis se trouve sous les pieds des mères.',
        theme: 'Parents',
        reference: 'An-Nasa\'i 3104'
    },
    {
        id: 39,
        collection: 'Muslim',
        bookNumber: 32,
        hadithNumber: 6180,
        arabic: 'رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ، وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ',
        french: 'La satisfaction du Seigneur est dans la satisfaction du parent, et le mécontentement du Seigneur est dans le mécontentement du parent.',
        theme: 'Parents',
        reference: 'Tirmidhi 1899'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LA MORT - أحاديث الموت
    // ───────────────────────────────────────────────────────────────
    {
        id: 40,
        collection: 'Tirmidhi',
        bookNumber: 34,
        hadithNumber: 2307,
        arabic: 'أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ',
        french: 'Évoquez souvent celle qui met fin aux plaisirs (la mort).',
        theme: 'Mort',
        reference: 'Tirmidhi 2307'
    },
    {
        id: 41,
        collection: 'Bukhari',
        bookNumber: 81,
        hadithNumber: 6416,
        arabic: 'كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ',
        french: 'Sois dans ce monde comme un étranger ou un voyageur de passage.',
        theme: 'Vie d\'ici-bas',
        reference: 'Sahih Bukhari 6416'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LA CONFIANCE EN ALLAH - أحاديث التوكل
    // ───────────────────────────────────────────────────────────────
    {
        id: 42,
        collection: 'Tirmidhi',
        bookNumber: 33,
        hadithNumber: 2344,
        arabic: 'لَوْ أَنَّكُمْ تَوَكَّلْتُمْ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ',
        french: 'Si vous vous en remettiez vraiment à Allah, Il vous accorderait votre subsistance comme Il la donne aux oiseaux.',
        theme: 'Confiance',
        reference: 'Tirmidhi 2344'
    },
    {
        id: 43,
        collection: 'Muslim',
        bookNumber: 48,
        hadithNumber: 6751,
        arabic: 'مَنْ أَصْبَحَ وَهَمُّهُ الآخِرَةُ جَعَلَ اللَّهُ غِنَاهُ فِي قَلْبِهِ',
        french: 'Celui qui se réveille avec pour seul souci l\'Au-delà, Allah mettra la richesse dans son cœur.',
        theme: 'Confiance',
        reference: 'Ibn Majah 4105'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR L'HUMILITÉ - أحاديث التواضع
    // ───────────────────────────────────────────────────────────────
    {
        id: 44,
        collection: 'Muslim',
        bookNumber: 32,
        hadithNumber: 6264,
        arabic: 'مَا نَقَصَ مَالُ عَبْدٍ مِنْ صَدَقَةٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ',
        french: 'L\'aumône ne diminue jamais les biens, Allah n\'augmente le serviteur qui pardonne qu\'en honneur, et quiconque s\'humilie pour Allah, Allah l\'élève.',
        theme: 'Humilité',
        reference: 'Sahih Muslim 2588'
    },
    {
        id: 45,
        collection: 'Abu Dawud',
        bookNumber: 41,
        hadithNumber: 4803,
        arabic: 'إِنَّ اللَّهَ أَوْحَى إِلَيَّ أَنْ تَوَاضَعُوا حَتَّى لَا يَفْخَرَ أَحَدٌ عَلَى أَحَدٍ',
        french: 'Allah m\'a révélé que vous devez vous humilier jusqu\'à ce que personne ne se vante sur personne.',
        theme: 'Humilité',
        reference: 'Abu Dawud 4803'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LA SINCÉRITÉ - أحاديث الإخلاص
    // ───────────────────────────────────────────────────────────────
    {
        id: 46,
        collection: 'Ibn Majah',
        bookNumber: 37,
        hadithNumber: 4227,
        arabic: 'مَنْ أَخْلَصَ لِلَّهِ أَرْبَعِينَ صَبَاحًا ظَهَرَتْ يَنَابِيعُ الْحِكْمَةِ مِنْ قَلْبِهِ عَلَى لِسَانِهِ',
        french: 'Celui qui est sincère envers Allah pendant quarante matins, les sources de sagesse jailliront de son cœur vers sa langue.',
        theme: 'Sincérité',
        reference: 'Shu\'ab al-Iman'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS SUR LE RAPPEL D'ALLAH - أحاديث الذكر
    // ───────────────────────────────────────────────────────────────
    {
        id: 47,
        collection: 'Bukhari',
        bookNumber: 75,
        hadithNumber: 6407,
        arabic: 'مَنْ قَالَ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، فِي يَوْمٍ مِئَةَ مَرَّةٍ، حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ',
        french: 'Celui qui dit cent fois par jour \"Gloire et louange à Allah\", ses péchés seront effacés même s\'ils sont aussi nombreux que l\'écume de la mer.',
        theme: 'Dhikr',
        reference: 'Sahih Bukhari 6405'
    },
    {
        id: 48,
        collection: 'Muslim',
        bookNumber: 48,
        hadithNumber: 6800,
        arabic: 'أَلَا أُنَبِّئُكُمْ بِخَيْرِ أَعْمَالِكُمْ، وَأَزْكَاهَا عِنْدَ مَلِيكِكُمْ، وَأَرْفَعِهَا فِي دَرَجَاتِكُمْ، وَخَيْرٌ لَكُمْ مِنْ إِنْفَاقِ الذَّهَبِ وَالْوَرِقِ؟ ذِكْرُ اللَّهِ',
        french: 'Ne vous informerai-je pas de la meilleure de vos actions, la plus pure auprès de votre Souverain, celle qui élève le plus vos degrés? C\'est le rappel d\'Allah.',
        theme: 'Dhikr',
        reference: 'Tirmidhi 3377'
    },
    
    // ───────────────────────────────────────────────────────────────
    // HADITHS FINAUX
    // ───────────────────────────────────────────────────────────────
    {
        id: 49,
        collection: 'Muslim',
        bookNumber: 1,
        hadithNumber: 57,
        arabic: 'الْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ',
        french: 'La pudeur fait partie de la foi.',
        theme: 'Morale',
        reference: 'Sahih Muslim 35'
    },
    {
        id: 50,
        collection: 'Bukhari',
        bookNumber: 78,
        hadithNumber: 6011,
        arabic: 'لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ، وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ',
        french: 'La richesse ne consiste pas dans l\'abondance des biens, mais la richesse est celle de l\'âme.',
        theme: 'Richesse',
        reference: 'Sahih Bukhari 6446'
    }
];

// ═══════════════════════════════════════════════════════════════════
// FONCTION DE CHARGEMENT
// ═══════════════════════════════════════════════════════════════════

function loadHadiths(filter = 'all', searchTerm = '') {
    let filtered = hadithsDatabase;
    
    // Filtre par collection
    if (filter !== 'all') {
        if (filter === 'favorites') {
            const favorites = JSON.parse(localStorage.getItem('favoriteHadiths') || '[]');
            filtered = filtered.filter(h => favorites.includes(h.id));
        } else {
            filtered = filtered.filter(h => h.collection.toLowerCase() === filter.toLowerCase());
        }
    }
    
    // Filtre par recherche
    if (searchTerm) {
        const search = searchTerm.toLowerCase();
        filtered = filtered.filter(h => 
            h.arabic.includes(searchTerm) ||
            h.french.toLowerCase().includes(search) ||
            h.theme.toLowerCase().includes(search) ||
            h.collection.toLowerCase().includes(search)
        );
    }
    
    return filtered;
}

// ═══════════════════════════════════════════════════════════════════
// SYSTÈME DE FAVORIS
// ═══════════════════════════════════════════════════════════════════

function toggleFavorite(hadithId) {
    let favorites = JSON.parse(localStorage.getItem('favoriteHadiths') || '[]');
    
    if (favorites.includes(hadithId)) {
        favorites = favorites.filter(id => id !== hadithId);
    } else {
        favorites.push(hadithId);
    }
    
    localStorage.setItem('favoriteHadiths', JSON.stringify(favorites));
    return favorites.includes(hadithId);
}

function isFavorite(hadithId) {
    const favorites = JSON.parse(localStorage.getItem('favoriteHadiths') || '[]');
    return favorites.includes(hadithId);
}

// ═══════════════════════════════════════════════════════════════════
// AFFICHAGE DES HADITHS
// ═══════════════════════════════════════════════════════════════════

function displayHadiths(hadiths) {
    const container = document.getElementById('hadiths-list');
    if (!container) return;
    
    if (hadiths.length === 0) {
        container.innerHTML = '<p class="no-results">Aucun hadith trouvé.</p>';
        return;
    }
    
    container.innerHTML = hadiths.map(hadith => `
        <div class="hadith-card" data-id="${hadith.id}">
            <div class="hadith-header">
                <span class="hadith-number">#${hadith.id}</span>
                <button class="favorite-btn" onclick="handleFavoriteClick(${hadith.id})" title="Ajouter aux favoris">
                    ${isFavorite(hadith.id) ? '⭐' : '☆'}
                </button>
            </div>
            <div class="hadith-source">${hadith.collection} - ${hadith.reference}</div>
            <div class="hadith-theme">📖 ${hadith.theme}</div>
            <div class="hadith-arabic">${hadith.arabic}</div>
            <div class="hadith-french">${hadith.french}</div>
        </div>
    `).join('');
    
    console.log(`✅ ${hadiths.length} hadiths affichés`);
}

function handleFavoriteClick(hadithId) {
    const isFav = toggleFavorite(hadithId);
    const button = document.querySelector(`.hadith-card[data-id="${hadithId}"] .favorite-btn`);
    if (button) {
        button.textContent = isFav ? '⭐' : '☆';
    }
    console.log(`${isFav ? '⭐ Ajouté aux' : '☆ Retiré des'} favoris: Hadith #${hadithId}`);
}

// ═══════════════════════════════════════════════════════════════════
// INITIALISATION
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    console.log('📚 Base de hadiths chargée: ' + hadithsDatabase.length + ' hadiths');
    
    // Afficher tous les hadiths au chargement
    displayHadiths(hadithsDatabase);
    
    // Recherche
    const searchInput = document.getElementById('hadith-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            const hadiths = loadHadiths(filter, this.value);
            displayHadiths(hadiths);
        });
    }
    
    // Filtres
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const searchTerm = searchInput?.value || '';
            const hadiths = loadHadiths(filter, searchTerm);
            displayHadiths(hadiths);
            
            console.log(`🔍 Filtre appliqué: ${filter}`);
        });
    });
});

// Export pour utilisation externe
window.loadHadiths = loadHadiths;
window.displayHadiths = displayHadiths;
window.toggleFavorite = toggleFavorite;
window.handleFavoriteClick = handleFavoriteClick;

console.log('✅ Module hadiths.js chargé avec ' + hadithsDatabase.length + ' hadiths sahih');
