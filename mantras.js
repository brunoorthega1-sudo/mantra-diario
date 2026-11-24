// Mantras y versos budistas. Las traducciones son aproximadas: cada tradición tiene matices.
// Fila: [texto, tradición, significado, transliteración opcional]

const MANTRA_ROWS = [
  ["Om Mani Padme Hum", "Budismo tibetano · Avalokiteshvara", "La joya en el loto. Invoca la compasión de todos los budas."],
  ["Gate Gate Pāragate Pārasaṃgate Bodhi Svāhā", "Sutra del Corazón · Mahāyāna", "Ido, ido, ido más allá, ido completamente más allá: ¡despertar, así sea!"],
  ["Namo Amituofo", "Tierra Pura · Amitābha", "Homenaje al Buda de la Luz Infinita."],
  ["Om Tare Tuttare Ture Soha", "Budismo tibetano · Tara Verde", "Homenaje a Tara, la que libera del miedo y de los obstáculos."],
  ["Nam Myōhō Renge Kyō", "Budismo de Nichiren · Sutra del Loto", "Me dedico a la ley mística del Sutra del Loto."],
  ["Om Ah Hum", "Vajrayāna", "Las tres sílabas del cuerpo, la palabra y la mente iluminados."],
  ["Namo Tassa Bhagavato Arahato Sammāsambuddhassa", "Theravāda · Pali", "Homenaje al Bienaventurado, Digno, Perfectamente Iluminado."],
  ["Sabbe sattā sukhī hontu", "Theravāda · Mettā", "Que todos los seres sean felices."],
  ["Buddhaṃ saraṇaṃ gacchāmi", "Theravāda · Tres Refugios", "Me refugio en el Buda."],
  ["Om Muni Muni Mahāmuniye Svāhā", "Budismo tibetano · Śākyamuni", "Om, sabio, sabio, gran sabio, así sea."],
  ["Om A Ra Pa Tsa Na Dhīḥ", "Budismo tibetano · Mañjuśrī", "Mantra de la sabiduría y la claridad mental."],
  ["Om Amideva Hrīḥ", "Budismo tibetano · Amitābha", "Mantra de Amitābha: luz y vida ilimitadas."],
  ["Namo Guan Shi Yin Pusa", "Budismo chino · Guanyin", "Homenaje al bodisatva que escucha los lamentos del mundo."],
  ["Aham avero homi, abyāpajjho homi, anīgho homi, sukhī attānaṃ pariharāmi", "Theravāda · Mettā para uno mismo", "Que yo esté libre de hostilidad, de aflicción y de angustia; que cuide de mí con bienestar."],
  ["Tayata Om Bekanze Bekanze Maha Bekanze Radza Samudgate Soha", "Budismo tibetano · Buda de la Medicina", "Mantra de sanación, dirigido al Buda Maestro de la Medicina."],
  ["Om Vajrapāṇi Hūṃ Phaṭ", "Budismo tibetano · Vajrapāṇi", "Mantra de la fuerza y la protección del bodisatva del poder."],
  ["Om Ah Hum Vajra Guru Padma Siddhi Hum", "Budismo tibetano · Guru Rinpoche", "Invocación a Padmasambhava para recibir su bendición y realización."],
  ["Om Tare Tuttare Ture Mama Ayuh Punye Jnana Pushtim Kuru Svaha", "Budismo tibetano · Tara Blanca", "Que se incrementen la larga vida, el mérito y la sabiduría."],
  ["Om Maitri Maitri Maitreya Svāhā", "Mahāyāna · Maitreya", "Om, amor bondadoso, amor bondadoso, Maitreya, así sea."],
  ["Namo Ratnatrayāya", "Mahāyāna · Tres Joyas", "Homenaje a las Tres Joyas: Buda, Dharma y Sangha."],
  ["Namu Amida Butsu", "Jōdo Shū · Tierra Pura japonesa", "Me refugio en Amida Buda."],
  ["Namo Shijiamouni Fo", "Budismo chino · Śākyamuni", "Homenaje al Buda Shakyamuni."],
  ["Namo Dizang Wang Pusa", "Budismo chino · Kṣitigarbha", "Homenaje al bodisatva Kṣitigarbha, el rey de la tierra."],
  ["Maka Hannya Haramita Shin Gyō", "Zen · Sutra del Corazón", "Sutra del Corazón de la Gran Sabiduría que va más allá."],
  ["Namo Yaoshi Liuliguang Wang Fo", "Budismo chino · Buda de la Medicina", "Homenaje al Buda Maestro de la Medicina, Rey de Luz de Lapislázuli."],
  ["Namo Wenshushili Pusa", "Budismo chino · Mañjuśrī", "Homenaje al bodisatva de la sabiduría."],
  ["Namo Puxian Pusa", "Budismo chino · Samantabhadra", "Homenaje al bodisatva de la práctica y de los grandes votos."],
  ["Namo Mile Zun Fo", "Budismo chino · Maitreya", "Homenaje al venerable Buda Maitreya."],
  ["Namu Kanzeon Bosatsu", "Budismo japonés · Kannon", "Homenaje al bodisatva que contempla los sonidos del mundo."],
  ["Namu Shaka Nyorai", "Budismo japonés · Buda Shakyamuni", "Homenaje al Buda histórico, el Tathāgata Shaka."],
  ["Namu Daishi Henjō Kongō", "Shingon · Kūkai", "Homenaje al gran maestro Kōbō Daishi, Diamante que ilumina por doquier."],
  ["Namo Buddhāya, Namo Dhammāya, Namo Saṅghāya", "Theravāda · Tres Joyas", "Homenaje al Buda, al Dhamma y a la Sangha."],
];

const VERSE_ROWS = [
  // Refugio, bendiciones y dedicatoria
  ["Dhammaṃ saraṇaṃ gacchāmi, Saṅghaṃ saraṇaṃ gacchāmi", "Theravāda · Tres Refugios", "Me refugio en el Dhamma; me refugio en la Sangha."],
  ["Sangyé chö dang tsok kyi chok nam la, jangchub bar du dak ni kyab su chi", "Budismo tibetano · Refugio", "Hasta alcanzar la iluminación, me refugio en el Buda, el Dharma y la Sangha."],
  ["Itipi so Bhagavā Arahaṃ Sammāsambuddho", "Theravāda · Recuerdo del Buda", "Así es el Bienaventurado: digno, perfectamente iluminado."],
  ["Etena saccena suvatthi hotu", "Theravāda · Ratana Sutta", "Por esta verdad, que haya bienestar."],
  ["Sabbe sattā averā hontu, abyāpajjhā hontu, anīghā hontu", "Theravāda · Mettā (amor bondadoso)", "Que todos los seres estén libres de hostilidad, de aflicción y de angustia."],
  ["Sabbe sattā dukkhā muccantu", "Theravāda · Karuṇā (compasión)", "Que todos los seres se liberen del sufrimiento."],
  ["Sabbe sattā laddhasampattito mā vigacchantu", "Theravāda · Muditā (alegría empática)", "Que ningún ser se separe de la dicha que ha alcanzado."],
  ["Sabbe sattā kammassakā", "Theravāda · Upekkhā (ecuanimidad)", "Todos los seres son dueños de sus acciones y heredan sus resultados."],
  ["Pāṇātipātā veramaṇī sikkhāpadaṃ samādiyāmi", "Theravāda · Primer precepto", "Asumo el entrenamiento de abstenerme de quitar la vida."],
  ["Idaṃ me puññaṃ nibbānassa paccayo hotu", "Theravāda · Dedicatoria de mérito", "Que este mérito mío sea condición para alcanzar el nibbāna."],
  ["Sukhino vā khemino hontu, sabbasattā bhavantu sukhitattā", "Theravāda · Mettā Sutta", "Que todos los seres sean felices y vivan en seguridad."],
  ["Na paro paraṃ nikubbetha, nātimaññetha katthaci naṃ kañci", "Theravāda · Mettā Sutta", "Que nadie engañe a otro ni lo desprecie en ningún lugar."],
  ["Mātā yathā niyaṃ puttaṃ āyusā ekaputtamanurakkhe", "Theravāda · Mettā Sutta", "Como una madre protege con su vida a su hijo único, cultiva así un corazón sin límites hacia todos."],
  ["Asevanā ca bālānaṃ, paṇḍitānañca sevanā", "Theravāda · Maṅgala Sutta", "No frecuentar a los necios y acercarse a los sabios: esta es una gran bendición."],
  ["Svākkhāto Bhagavatā dhammo sandiṭṭhiko akāliko ehipassiko", "Theravāda · Recuerdo del Dhamma", "El Dhamma está bien expuesto: se ve aquí y ahora, no depende del tiempo e invita a venir y ver."],
  ["Vayadhammā saṅkhārā, appamādena sampādetha", "Mahāparinibbāna Sutta · Últimas palabras del Buda", "Todo lo compuesto está sujeto a desaparecer; esfuércense con atención."],

  // Mahāyāna / Zen
  ["Shujō muhen seigan do", "Zen · Primer Gran Voto", "Los seres son innumerables: hago el voto de liberarlos."],
  ["Bonnō mujin seigan dan", "Zen · Segundo Gran Voto", "Las aflicciones son inagotables: hago el voto de transformarlas."],
  ["Hōmon muryō seigan gaku", "Zen · Tercer Gran Voto", "Las puertas del Dharma son infinitas: hago el voto de entrarlas."],
  ["Butsudō mujō seigan jō", "Zen · Cuarto Gran Voto", "El camino del Buda es insuperable: hago el voto de realizarlo."],
  ["Rūpaṃ śūnyatā, śūnyataiva rūpam", "Sutra del Corazón", "La forma es vacío; el vacío es forma."],
  ["應無所住而生其心", "Sutra del Diamante", "Que la mente surja sin apoyarse en nada.", "Yīng wú suǒ zhù ér shēng qí xīn"],
  ["一切有為法，如夢幻泡影，如露亦如電，應作如是觀", "Sutra del Diamante", "Todo lo condicionado es como un sueño, una ilusión, una burbuja, una sombra, el rocío, un relámpago: así hay que contemplarlo.", "Yīqiè yǒuwéi fǎ, rú mèng huàn pào yǐng, rú lù yì rú diàn, yīng zuò rúshì guān"],

  // Dhammapada
  ["Manopubbaṅgamā dhammā, manoseṭṭhā manomayā", "Dhammapada 1", "La mente precede a los estados; la mente los dirige; están hechos de mente."],
  ["Manasā ce pasannena, bhāsati vā karoti vā; tato naṃ sukhamanveti, chāyāva anapāyinī", "Dhammapada 2", "Quien habla o actúa con la mente serena, la felicidad lo sigue como una sombra que no se va."],
  ["Na hi verena verāni sammantīdha kudācanaṃ; averena ca sammanti, esa dhammo sanantano", "Dhammapada 5", "El odio nunca cesa con odio; cesa con no-odio. Esta es una ley eterna."],
  ["Appamādo amatapadaṃ, pamādo maccuno padaṃ", "Dhammapada 21", "La atención es el camino a lo inmortal; la negligencia, el camino de la muerte."],
  ["Uṭṭhānavato satimato sucikammassa nisammakārino", "Dhammapada 24", "Crece la fama de quien es enérgico, atento, puro en sus actos y reflexivo."],
  ["Mā pamādamanuyuñjetha, mā kāmaratisanthavaṃ", "Dhammapada 27", "No te entregues a la negligencia ni al apego a los placeres; quien medita con atención alcanza gran felicidad."],
  ["Cittaṃ dantaṃ sukhāvahaṃ", "Dhammapada 35", "Una mente domada trae felicidad."],
  ["Na taṃ mātā pitā kayirā, aññe vāpi ca ñātakā; sammāpaṇihitaṃ cittaṃ, seyyaso naṃ tato kare", "Dhammapada 43", "Una mente bien dirigida nos beneficia más que una madre, un padre o cualquier pariente."],
  ["Na paresaṃ vilomāni, na paresaṃ katākataṃ; attano va avekkheyya, katāni akatāni ca", "Dhammapada 50", "No mires las faltas ajenas, sino lo que tú has hecho y lo que no."],
  ["Yathāpi rahado gambhīro, vippasanno anāvilo; evaṃ dhammāni sutvāna, vippasīdanti paṇḍitā", "Dhammapada 82", "Como un lago profundo, claro y sereno, así se aquietan los sabios al escuchar el Dhamma."],
  ["Ekaṃ atthapadaṃ seyyo, yaṃ sutvā upasammati", "Dhammapada 100", "Mejor una sola palabra con sentido que, al oírla, trae calma, que mil palabras vacías."],
  ["Yo sahassaṃ sahassena saṅgāme mānuse jine, ekañca jeyyamattānaṃ sa ve saṅgāmajuttamo", "Dhammapada 103", "Más grande que vencer a mil en batalla es vencerse a uno mismo."],
  ["Abhittharetha kalyāṇe, pāpā cittaṃ nivāraye", "Dhammapada 116", "Apresúrate hacia el bien y protege tu mente del mal."],
  ["Māvamaññetha puññassa, na mantaṃ āgamissatīti", "Dhammapada 122", "No menosprecies el bien pequeño pensando que no te alcanzará: gota a gota se llena la vasija."],
  ["Sabbe tasanti daṇḍassa, sabbe bhāyanti maccuno; attānaṃ upamaṃ katvā, na haneyya na ghātaye", "Dhammapada 129", "Todos temen el castigo y la muerte; ponte en el lugar del otro y no dañes."],
  ["Attānañce piyaṃ jaññā, rakkheyya naṃ surakkhitaṃ", "Dhammapada 157", "Si te estimas, cuídate bien."],
  ["Attānañce tathā kayirā, yathāññamanusāsati", "Dhammapada 159", "Hazte a ti mismo lo que enseñas a otros."],
  ["Attā hi attano nātho, ko hi nātho paro siyā", "Dhammapada 160", "Uno es su propio protector; ¿qué otro protector podría haber?"],
  ["Attanā va kataṃ pāpaṃ, attanā saṅkilissati; attanā akataṃ pāpaṃ, attanāva visujjhati", "Dhammapada 165", "Por uno mismo se hace el mal y uno se mancha; por uno mismo se evita y uno se purifica."],
  ["Yassa pāpaṃ kataṃ kammaṃ kusalena pithīyati, so imaṃ lokaṃ pabhāseti abbhā mutto va candimā", "Dhammapada 173", "Quien cubre el mal con el bien ilumina el mundo, como la luna libre de nubes."],
  ["Sabbapāpassa akaraṇaṃ, kusalassa upasampadā; sacittapariyodapanaṃ, etaṃ buddhāna sāsanaṃ", "Dhammapada 183", "No hacer el mal, cultivar el bien, purificar la propia mente: esta es la enseñanza de los budas."],
  ["Sukho buddhānaṃ uppādo, sukhā saddhammadesanā; sukhā saṅghassa sāmaggī", "Dhammapada 194", "Dichosa es la aparición de los budas, dichosa la enseñanza del Dhamma, dichosa la armonía de la Sangha."],
  ["Susukhaṃ vata jīvāma, verinesu averino", "Dhammapada 197", "¡Qué felices vivimos sin odio entre quienes odian!"],
  ["Jayaṃ veraṃ pasavati, dukkhaṃ seti parājito; upasanto sukhaṃ seti, hitvā jayaparājayaṃ", "Dhammapada 201", "La victoria engendra odio y el vencido vive en pesar; el sereno vive feliz, sin victoria ni derrota."],
  ["Natthi santiparaṃ sukhaṃ", "Dhammapada 202", "No hay mayor felicidad que la paz."],
  ["Santuṭṭhiparamaṃ dhanaṃ", "Dhammapada 204", "El contentamiento es la mayor riqueza."],
  ["Akkodhena jine kodhaṃ, asādhuṃ sādhunā jine; jine kadariyaṃ dānena, saccenālikavādinaṃ", "Dhammapada 223", "Vence la ira con la no-ira, el mal con el bien, la avaricia con la generosidad y la mentira con la verdad."],
  ["Anupubbena medhāvī, thokaṃ thokaṃ khaṇe khaṇe; kammāro rajatasseva, niddhame malamattano", "Dhammapada 239", "Poco a poco, momento a momento, el sabio se limpia de sus impurezas, como el orfebre quita la escoria de la plata."],
  ["Maggānaṭṭhaṅgiko seṭṭho", "Dhammapada 273", "El mejor de los caminos es el Óctuple."],
  ["Tumhehi kiccaṃ ātappaṃ, akkhātāro tathāgatā", "Dhammapada 276", "El esfuerzo les corresponde a ustedes; los budas solo señalan el camino."],
  ["Sabbe saṅkhārā aniccā", "Dhammapada 277", "Todas las cosas condicionadas son impermanentes."],
  ["Sabbe saṅkhārā dukkhā", "Dhammapada 278", "Todas las cosas condicionadas son insatisfactorias."],
  ["Sabbe dhammā anattā", "Dhammapada 279", "Todos los fenómenos carecen de un yo fijo."],
  ["Yogā ve jāyatī bhūri, ayogā bhūrisaṅkhayo", "Dhammapada 282", "De la práctica nace la sabiduría; de la falta de práctica, se pierde."],
  ["Eko care mātaṅgaraññeva nāgo", "Dhammapada 329", "Si no encuentras un compañero prudente, camina solo, como el elefante por el bosque."],
  ["Sabbadānaṃ dhammadānaṃ jināti", "Dhammapada 354", "El regalo del Dhamma supera a todos los regalos."],
  ["Natthi jhānaṃ apaññassa, paññā natthi ajhāyato", "Dhammapada 372", "Sin sabiduría no hay meditación; sin meditación no hay sabiduría."],

  // Noble Óctuple Sendero
  ["Sammā diṭṭhi", "Noble Óctuple Sendero", "Visión correcta: ver las cosas como son."],
  ["Sammā saṅkappo", "Noble Óctuple Sendero", "Intención correcta: renuncia, buena voluntad y no violencia."],
  ["Sammā vācā", "Noble Óctuple Sendero", "Palabra correcta: verdadera, amable, útil y sin división."],
  ["Sammā kammanto", "Noble Óctuple Sendero", "Acción correcta: actuar sin dañar."],
  ["Sammā ājīvo", "Noble Óctuple Sendero", "Medio de vida correcto: ganarse la vida sin dañar a otros."],
  ["Sammā vāyāmo", "Noble Óctuple Sendero", "Esfuerzo correcto: cultivar lo sano y soltar lo dañino."],
  ["Sammā sati", "Noble Óctuple Sendero", "Atención plena correcta: estar presente en el cuerpo, las sensaciones, la mente y los fenómenos."],
  ["Sammā samādhi", "Noble Óctuple Sendero", "Concentración correcta: una mente unificada y serena."],
];

// Mezcla ambas listas de forma pareja para que mantras y versos se alternen.
const MANTRAS = (function () {
  const toObj = (kind) => (r) => ({ kind, text: r[0], tradition: r[1], meaning: r[2], roman: r[3] || "" });
  const a = MANTRA_ROWS.map(toObj("Mantra"));
  const b = VERSE_ROWS.map(toObj("Verso"));
  return a.map((m, i) => ({ m, k: (i + 0.5) / a.length }))
    .concat(b.map((m, i) => ({ m, k: (i + 0.5) / b.length })))
    .sort((x, y) => x.k - y.k)
    .map((x) => x.m);
})();
