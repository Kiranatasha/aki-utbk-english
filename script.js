const vocabularyData = [
  {
      word: "abandon",
      meaning: "meninggalkan",
      example: "They abandoned the plan.",
      difficulty: "medium",
      question: "What is the closest meaning of 'abandon'?",
      options: ["continue", "leave behind", "improve", "measure"],
      answer: "leave behind",
      explanation: "To abandon something means to leave it behind or stop supporting it."
    },
  {
      word: "accept",
      meaning: "menerima",
      example: "She accepted the offer.",
      question: "She decided to ___ the invitation.",
      options: ["accept", "except", "receive", "take"],
      answer: "accept",
      difficulty: "medium",
      confusion: "except"
    },
  {
      word: "accurate",
      meaning: "akurat",
      example: "The data is accurate.",
      question: "The result is very ___.",
      options: ["accurate", "wrong", "false", "unclear"],
      answer: "accurate",
      difficulty: "easy",
      explanation: "'Accurate' means correct and precise."
    },
  {
      word: "achieve",
      meaning: "mencapai",
      example: "She achieves goals.",
      question: "She ___ her goals.",
      options: ["achieves", "achieve", "achieved", "achieving"],
      answer: "achieves",
      difficulty: "medium"
    },
  {
      word: "adapt",
      meaning: "beradaptasi",
      example: "She adapts quickly.",
      question: "Students must ___ to changes.",
      options: ["adapt", "adapts", "adapted", "adapting"],
      answer: "adapt",
      difficulty: "easy",
      explanation: "After 'must', we use base verb -> 'adapt'."
    },
  {
      word: "adaptable",
      meaning: "mudah beradaptasi",
      example: "She is adaptable.",
      question: "He is highly ___.",
      options: ["adaptable", "rigid", "fixed", "limited"],
      answer: "adaptable",
      difficulty: "medium",
      explanation: "'Adaptable' means able to adjust easily."
    },
  {
      word: "adequate",
      meaning: "cukup",
      example: "The resources are adequate.",
      question: "The support is ___.",
      options: ["adequate", "insufficient", "lacking", "weak"],
      answer: "adequate",
      difficulty: "medium",
      explanation: "'Adequate' means enough or sufficient."
    },
  {
      word: "adjacent",
      meaning: "berdekatan",
      example: "The building is adjacent.",
      difficulty: "hard",
      question: "Which phrase best describes 'adjacent'?",
      options: ["far away", "next to", "under review", "very old"],
      answer: "next to",
      explanation: "Adjacent means next to or very close to something."
    },
  {
      word: "adjust",
      meaning: "menyesuaikan",
      example: "Adjust your plan.",
      question: "You need to ___ your strategy.",
      options: ["adjust", "adjusts", "adjusted", "adjusting"],
      answer: "adjust",
      difficulty: "easy",
      explanation: "After 'need to', use base verb -> 'adjust'."
    },
  {
      word: "advantage",
      meaning: "keuntungan",
      example: "This has an advantage.",
      question: "This method has an ___.",
      options: ["advantage", "problem", "issue", "risk"],
      answer: "advantage",
      difficulty: "easy",
      explanation: "'Advantage' means a benefit or positive aspect."
    },
  {
      word: "advice",
      meaning: "nasihat (noun)",
      example: "She gave advice.",
      question: "He gave me good ___.",
      options: ["advice", "advise", "suggestion", "tip"],
      answer: "advice",
      difficulty: "medium",
      confusion: "advise"
    },
  {
      word: "advise",
      meaning: "menyarankan (verb)",
      example: "I advise you to rest.",
      question: "I ___ you to study more.",
      options: ["advise", "advice", "suggest", "recommend"],
      answer: "advise",
      difficulty: "medium",
      confusion: "advice"
    },
  {
      word: "affect",
      meaning: "mempengaruhi (verb)",
      example: "The policy affects the economy.",
      question: "The new rule will ___ student performance.",
      options: ["affect", "effect", "impact", "influence"],
      answer: "affect",
      difficulty: "hard",
      confusion: "effect"
    },
  {
      word: "allocate",
      meaning: "mengalokasikan",
      example: "Funds are allocated.",
      difficulty: "medium",
      question: "What does 'allocate' most nearly mean?",
      options: ["distribute", "erase", "borrow", "translate"],
      answer: "distribute",
      explanation: "Allocate means to distribute or assign resources."
    },
  {
      word: "allow",
      meaning: "memungkinkan",
      example: "This allows access.",
      question: "The system ___ users to login.",
      options: ["allows", "allow", "allowed", "allowing"],
      answer: "allows",
      difficulty: "medium",
      explanation: "Singular subject 'system' requires 'allows'."
    },
  {
      word: "alter",
      meaning: "mengubah",
      example: "The plan was altered.",
      question: "They decided to ___ the plan.",
      options: ["alter", "alert", "after", "altar"],
      answer: "alter",
      difficulty: "hard"
    },
  {
      word: "ambiguous",
      meaning: "ambigu / bermakna ganda",
      example: "The sentence is ambiguous.",
      question: "The meaning is ___.",
      options: ["ambiguous", "clear", "direct", "simple"],
      answer: "ambiguous",
      difficulty: "hard"
    },
  {
      word: "analyze",
      meaning: "menganalisis",
      example: "Analyze the data.",
      question: "Researchers ___ the results.",
      options: ["analyze", "analyzes", "analyzed", "analyzing"],
      answer: "analyze",
      difficulty: "medium",
      explanation: "Plural subject 'researchers' -> base verb 'analyze'."
    },
  {
      word: "annual",
      meaning: "tahunan",
      example: "An annual event.",
      question: "This is a ___ report.",
      options: ["annual", "daily", "weekly", "monthly"],
      answer: "annual",
      difficulty: "easy",
      explanation: "'Annual' means happening once a year."
    },
  {
      word: "apparent",
      meaning: "jelas terlihat",
      example: "It is apparent now.",
      question: "It became ___ that he was right.",
      options: ["apparent", "hidden", "unclear", "unknown"],
      answer: "apparent",
      difficulty: "medium",
      explanation: "'Apparent' means clearly visible or obvious."
    },
  {
      word: "apply",
      meaning: "menerapkan",
      example: "Apply the rule.",
      question: "You should ___ this method.",
      options: ["apply", "applies", "applied", "applying"],
      answer: "apply",
      difficulty: "easy",
      explanation: "After 'should', use base verb -> 'apply'."
    },
  {
      word: "approach",
      meaning: "cara/metode",
      example: "A new approach.",
      question: "We need a different ___ to solve this.",
      options: ["approach", "method", "strategy", "way"],
      answer: "approach",
      difficulty: "hard"
    },
  {
      word: "approximate",
      meaning: "perkiraan",
      example: "The number is approximate.",
      question: "The result is only ___.",
      options: ["approximate", "approximately", "approximation", "approximating"],
      answer: "approximate",
      difficulty: "hard"
    },
  {
      word: "assess",
      meaning: "menilai",
      example: "Teachers assess students.",
      difficulty: "medium",
      question: "What does 'assess' mean?",
      options: ["evaluate", "ignore", "hide", "borrow"],
      answer: "evaluate",
      explanation: "Assess means to evaluate or judge something."
    },
  {
      word: "assign",
      meaning: "menugaskan",
      example: "They assigned tasks.",
      question: "The teacher will ___ homework.",
      options: ["assign", "remove", "cancel", "ignore"],
      answer: "assign",
      difficulty: "easy",
      explanation: "'Assign' means to give someone a task."
    },
  {
      word: "assume",
      meaning: "menganggap tanpa bukti",
      example: "He assumed she was right.",
      question: "Don't ___ things without evidence.",
      options: ["assume", "presume", "conclude", "infer"],
      answer: "assume",
      difficulty: "hard"
    },
  {
      word: "assumption",
      meaning: "asumsi",
      example: "The assumption is incorrect.",
      question: "The ___ may be wrong.",
      options: ["assumption", "assume", "assuming", "assumed"],
      answer: "assumption",
      difficulty: "hard"
    },
  {
      word: "attain",
      meaning: "mencapai",
      example: "He attained success.",
      question: "They hope to ___ their goals.",
      options: ["attain", "lose", "miss", "drop"],
      answer: "attain",
      difficulty: "medium",
      explanation: "'Attain' means to achieve something."
    },
  {
      word: "available",
      meaning: "tersedia",
      example: "The book is available.",
      question: "The resource is ___ online.",
      options: ["available", "missing", "lost", "hidden"],
      answer: "available",
      difficulty: "easy",
      explanation: "'Available' means ready to be used."
    },
  {
      word: "avoid",
      meaning: "menghindari",
      example: "Avoid mistakes.",
      question: "Try to ___ errors.",
      options: ["avoid", "avoids", "avoided", "avoiding"],
      answer: "avoid",
      difficulty: "easy",
      explanation: "After 'to', use base verb -> 'avoid'."
    },
  {
      word: "aware",
      meaning: "sadar",
      example: "She is aware of it.",
      question: "You must be ___ of risks.",
      options: ["aware", "ignorant", "blind", "careless"],
      answer: "aware",
      difficulty: "easy",
      explanation: "'Aware' means knowing something."
    },
  {
      word: "benefit",
      meaning: "manfaat",
      example: "The benefit is clear.",
      question: "This brings many ___.",
      options: ["benefits", "benefit", "benefiting", "benefited"],
      answer: "benefits",
      difficulty: "medium",
      explanation: "'Many' requires plural noun -> 'benefits'."
    },
  {
      word: "build",
      meaning: "membangun",
      example: "They build a house.",
      difficulty: "easy",
      question: "What does 'build' mean?",
      options: ["destroy", "construct", "delay", "carry"],
      answer: "construct",
      explanation: "Build means to construct or make something."
    },
  {
      word: "capacity",
      meaning: "kapasitas",
      example: "The capacity is full.",
      question: "The room has limited ___.",
      options: ["capacity", "ability", "method", "result"],
      answer: "capacity",
      difficulty: "medium",
      explanation: "'Capacity' means maximum amount something can hold."
    },
  {
      word: "cause",
      meaning: "menyebabkan",
      example: "Stress causes problems.",
      question: "Lack of sleep can ___ issues.",
      options: ["cause", "causes", "caused", "causing"],
      answer: "cause",
      difficulty: "easy",
      explanation: "After 'can', we use base verb -> 'cause'."
    },
  {
      word: "cease",
      meaning: "berhenti",
      example: "The noise ceased.",
      question: "They decided to ___ operations.",
      options: ["cease", "start", "continue", "build"],
      answer: "cease",
      difficulty: "hard",
      explanation: "'Cease' means to stop completely."
    },
  {
      word: "challenge",
      meaning: "tantangan",
      example: "This is a challenge.",
      question: "This problem is a big ___.",
      options: ["challenge", "solution", "result", "effect"],
      answer: "challenge",
      difficulty: "easy",
      explanation: "'Challenge' means something difficult."
    },
  {
      word: "change",
      meaning: "perubahan",
      example: "There is a change.",
      question: "We need a ___ in strategy.",
      options: ["change", "problem", "failure", "mistake"],
      answer: "change",
      difficulty: "easy",
      explanation: "'Change' means something becomes different."
    },
  {
      word: "choose",
      meaning: "memilih",
      example: "She chooses wisely.",
      question: "You should ___ carefully.",
      options: ["choose", "chooses", "chose", "choosing"],
      answer: "choose",
      difficulty: "easy",
      explanation: "After 'should', we use base verb -> 'choose'."
    },
  {
      word: "clarify",
      meaning: "memperjelas",
      example: "Please clarify your answer.",
      question: "Can you ___ this point?",
      options: ["clarify", "explain", "describe", "define"],
      answer: "clarify",
      difficulty: "easy"
    },
  {
      word: "coherent",
      meaning: "koheren",
      example: "Her argument is coherent.",
      difficulty: "hard",
      question: "If an argument is 'coherent', it is...",
      options: ["clear and logical", "too short", "damaged", "secret"],
      answer: "clear and logical",
      explanation: "Coherent means clear, connected, and logical."
    },
  {
      word: "coincide",
      meaning: "terjadi bersamaan",
      example: "Events coincide.",
      question: "The events ___ in time.",
      options: ["coincide", "separate", "differ", "divide"],
      answer: "coincide",
      difficulty: "hard",
      explanation: "'Coincide' means to happen at the same time."
    },
  {
      word: "collapse",
      meaning: "runtuh",
      example: "The system collapsed.",
      question: "The structure may ___.",
      options: ["collapse", "build", "expand", "grow"],
      answer: "collapse",
      difficulty: "medium",
      explanation: "'Collapse' means to fall apart suddenly."
    },
  {
      word: "compare",
      meaning: "membandingkan",
      example: "We compare results.",
      question: "We ___ the two results.",
      options: ["compare", "compares", "compared", "comparing"],
      answer: "compare",
      difficulty: "medium"
    },
  {
      word: "compile",
      meaning: "mengumpulkan",
      example: "Compile the data.",
      question: "They ___ information from sources.",
      options: ["compile", "destroy", "ignore", "forget"],
      answer: "compile",
      difficulty: "medium",
      explanation: "'Compile' means to gather together."
    },
  {
      word: "complement",
      meaning: "melengkapi",
      example: "The sauce complements the dish.",
      question: "This color ___ the design.",
      options: ["complements", "compliments", "matches", "fits"],
      answer: "complements",
      difficulty: "hard",
      confusion: "compliment"
    },
  {
      word: "compliment",
      meaning: "pujian",
      example: "She gave a compliment.",
      question: "He gave her a ___.",
      options: ["compliment", "complement", "praise", "comment"],
      answer: "compliment",
      difficulty: "hard",
      confusion: "complement"
    },
  {
      word: "conceal",
      meaning: "menyembunyikan",
      example: "He concealed the truth.",
      question: "She tried to ___ the facts.",
      options: ["conceal", "show", "reveal", "share"],
      answer: "conceal",
      difficulty: "hard",
      explanation: "'Conceal' means to hide something."
    },
  {
      word: "confirm",
      meaning: "mengonfirmasi",
      example: "Please confirm this.",
      question: "They ___ the information.",
      options: ["confirm", "confirms", "confirmed", "confirming"],
      answer: "confirm",
      difficulty: "easy",
      explanation: "Plural subject 'they' -> base verb 'confirm'."
    },
  {
      word: "consecutive",
      meaning: "berturut-turut",
      example: "Three consecutive days.",
      question: "He won for three ___ years.",
      options: ["consecutive", "random", "separate", "different"],
      answer: "consecutive",
      difficulty: "medium",
      explanation: "'Consecutive' means following one after another."
    },
  {
      word: "consequently",
      meaning: "akibatnya",
      example: "He was late; consequently, he missed it.",
      question: "He was late; ___, he missed it.",
      options: ["consequently", "however", "although", "meanwhile"],
      answer: "consequently",
      explanation: "Consequently is used to show a result.",
      difficulty: "hard"
    },
  {
      word: "consider",
      meaning: "mempertimbangkan",
      example: "Consider this option.",
      question: "We must ___ all factors.",
      options: ["consider", "considers", "considered", "considering"],
      answer: "consider",
      difficulty: "easy",
      explanation: "After 'must', use base verb -> 'consider'."
    },
  {
      word: "considerable",
      meaning: "cukup besar jumlahnya",
      example: "A considerable amount.",
      question: "There was a ___ amount of data.",
      options: ["considerable", "significant", "important", "essential"],
      answer: "considerable",
      difficulty: "hard"
    },
  {
      word: "consistent",
      meaning: "konsisten",
      example: "She is consistent.",
      question: "He is ___ in his work.",
      options: ["consistent", "consistency", "consist", "consisting"],
      answer: "consistent",
      difficulty: "medium"
    },
  {
      word: "constant",
      meaning: "konstan",
      example: "Constant change.",
      question: "The temperature remains ___.",
      options: ["constant", "variable", "changing", "unstable"],
      answer: "constant",
      difficulty: "medium",
      explanation: "'Constant' means not changing."
    },
  {
      word: "consume",
      meaning: "mengonsumsi",
      example: "Consume energy.",
      question: "Machines ___ electricity.",
      options: ["consume", "produce", "save", "store"],
      answer: "consume",
      difficulty: "easy",
      explanation: "'Consume' means to use something."
    },
  {
      word: "contemporary",
      meaning: "modern",
      example: "Contemporary issues.",
      question: "This is a ___ problem.",
      options: ["contemporary", "ancient", "old", "past"],
      answer: "contemporary",
      difficulty: "medium",
      explanation: "'Contemporary' means modern or current."
    },
  {
      word: "contradict",
      meaning: "bertentangan",
      example: "The data contradicts the claim.",
      question: "The results ___ his theory.",
      options: ["contradict", "support", "prove", "confirm"],
      answer: "contradict",
      difficulty: "medium"
    },
  {
      word: "contrary",
      meaning: "bertentangan",
      example: "Contrary to belief.",
      question: "___ to expectations, it failed.",
      options: ["Contrary", "Similar", "Equal", "Same"],
      answer: "Contrary",
      difficulty: "hard",
      explanation: "'Contrary to' means opposite of."
    },
  {
      word: "contrast",
      meaning: "kontras",
      example: "There is a contrast.",
      question: "There is a clear ___ between them.",
      options: ["contrast", "contrasts", "contrasting", "contrasted"],
      answer: "contrast",
      difficulty: "medium"
    },
  {
      word: "contribute",
      meaning: "berkontribusi",
      example: "He contributes ideas.",
      question: "Everyone can ___ to success.",
      options: ["contribute", "reduce", "stop", "avoid"],
      answer: "contribute",
      difficulty: "medium",
      explanation: "'Contribute' means to give or add something."
    },
  {
      word: "convey",
      meaning: "menyampaikan",
      example: "The message conveys meaning.",
      question: "The sentence ___ the idea clearly.",
      options: ["conveys", "convey", "conveyed", "conveying"],
      answer: "conveys",
      difficulty: "hard"
    },
  {
      word: "create",
      meaning: "menciptakan",
      example: "They create solutions.",
      question: "We need to ___ a new plan.",
      options: ["create", "creates", "created", "creating"],
      answer: "create",
      difficulty: "easy",
      explanation: "After 'to', we use base verb -> 'create'."
    },
  {
      word: "crucial",
      meaning: "sangat penting",
      example: "This step is crucial.",
      question: "This is a ___ part of the process.",
      options: ["crucial", "critical", "optional", "minor"],
      answer: "crucial",
      difficulty: "medium"
    },
  {
      word: "decide",
      meaning: "memutuskan",
      example: "She decided quickly.",
      question: "They will ___ soon.",
      options: ["decide", "decision", "deciding", "decided"],
      answer: "decide",
      difficulty: "easy",
      explanation: "After 'will', we use base verb. 'Decide' is the correct verb form."
    },
  {
      word: "decline",
      meaning: "menurun",
      example: "Sales declined.",
      question: "Sales may ___ this year.",
      options: ["decline", "increase", "grow", "rise"],
      answer: "decline",
      difficulty: "medium",
      explanation: "'Decline' means to decrease."
    },
  {
      word: "deduce",
      meaning: "menyimpulkan",
      example: "Deduce from facts.",
      question: "We can ___ the answer.",
      options: ["deduce", "guess", "assume", "ignore"],
      answer: "deduce",
      difficulty: "hard",
      explanation: "'Deduce' means to conclude logically."
    },
  {
      word: "definite",
      meaning: "pasti",
      example: "A definite answer.",
      question: "There is no ___ solution.",
      options: ["definite", "unclear", "uncertain", "vague"],
      answer: "definite",
      difficulty: "medium",
      explanation: "'Definite' means certain or clear."
    },
  {
      word: "deliver",
      meaning: "menyampaikan",
      example: "He delivers results.",
      question: "They must ___ the message clearly.",
      options: ["deliver", "delivers", "delivered", "delivering"],
      answer: "deliver",
      difficulty: "easy",
      explanation: "After 'must', we use base verb -> 'deliver'."
    },
  {
      word: "demonstrate",
      meaning: "menunjukkan",
      example: "He demonstrated skill.",
      question: "The study ___ clear results.",
      options: ["demonstrates", "demonstrate", "demonstrated", "demonstrating"],
      answer: "demonstrates",
      difficulty: "medium",
      explanation: "Singular subject 'study' -> 'demonstrates'."
    },
  {
      word: "depend",
      meaning: "bergantung",
      example: "It depends on you.",
      question: "Success may ___ on effort.",
      options: ["depend", "depends", "depended", "depending"],
      answer: "depend",
      difficulty: "medium",
      explanation: "After 'may', use base verb -> 'depend'."
    },
  {
      word: "derive",
      meaning: "berasal",
      example: "The word derives from Latin.",
      difficulty: "hard",
      question: "What does 'derive' most nearly mean?",
      options: ["originate", "forget", "replace", "cover"],
      answer: "originate",
      explanation: "Derive means to come from or originate from a source."
    },
  {
      word: "determine",
      meaning: "menentukan",
      example: "The results determine success.",
      question: "The results ___ success.",
      options: ["determine", "determines", "determined", "determining"],
      answer: "determine",
      explanation: "The plural subject 'results' uses the base verb.",
      difficulty: "medium"
    },
  {
      word: "develop",
      meaning: "mengembangkan",
      example: "They develop ideas.",
      question: "Students ___ new skills.",
      options: ["develop", "develops", "developed", "developing"],
      answer: "develop",
      difficulty: "medium",
      explanation: "Plural subject 'students' requires base form 'develop'."
    },
  {
      word: "diminish",
      meaning: "mengurangi / menurun",
      example: "The value diminished over time.",
      question: "The importance ___ gradually.",
      options: ["diminished", "diminish", "diminishes", "diminishing"],
      answer: "diminished",
      difficulty: "hard"
    },
  {
      word: "distinction",
      meaning: "perbedaan jelas",
      example: "There is a distinction.",
      question: "There is a clear ___.",
      options: ["distinction", "distinct", "distinguish", "distinguished"],
      answer: "distinction",
      difficulty: "hard"
    },
  {
      word: "distribute",
      meaning: "mendistribusikan",
      example: "Distribute goods.",
      question: "They ___ products widely.",
      options: ["distribute", "collect", "gather", "remove"],
      answer: "distribute",
      difficulty: "easy",
      explanation: "'Distribute' means to give out."
    },
  {
      word: "economic",
      meaning: "terkait ekonomi",
      example: "Economic growth increased.",
      question: "The country faces ___ challenges.",
      options: ["economic", "economical", "financial", "fiscal"],
      answer: "economic",
      difficulty: "hard",
      confusion: "economical"
    },
  {
      word: "economical",
      meaning: "hemat",
      example: "This car is economical.",
      question: "This car is very ___ to use.",
      options: ["economical", "economic", "efficient", "cheap"],
      answer: "economical",
      difficulty: "hard",
      confusion: "economic"
    },
  {
      word: "effect",
      meaning: "hasil / dampak (noun)",
      example: "The effect was immediate.",
      question: "The ___ of the policy is clear.",
      options: ["effect", "affect", "impact", "result"],
      answer: "effect",
      difficulty: "hard",
      confusion: "affect"
    },
  {
      word: "effort",
      meaning: "usaha",
      example: "Make an effort.",
      question: "This requires more ___.",
      options: ["effort", "result", "problem", "idea"],
      answer: "effort",
      difficulty: "easy",
      explanation: "'Effort' means attempt or hard work."
    },
  {
      word: "eliminate",
      meaning: "menghilangkan",
      example: "Eliminate errors.",
      question: "We must ___ mistakes.",
      options: ["eliminate", "create", "build", "add"],
      answer: "eliminate",
      difficulty: "medium",
      explanation: "'Eliminate' means remove completely."
    },
  {
      word: "emerge",
      meaning: "muncul",
      example: "New ideas emerge.",
      question: "Problems may ___ suddenly.",
      options: ["emerge", "disappear", "vanish", "hide"],
      answer: "emerge",
      difficulty: "medium",
      explanation: "'Emerge' means to appear."
    },
  {
      word: "emphasis",
      meaning: "penekanan",
      example: "Put emphasis on quality.",
      question: "The teacher gave ___ to this topic.",
      options: ["emphasis", "attention", "focus", "stress"],
      answer: "emphasis",
      difficulty: "medium",
      explanation: "'Emphasis' means special importance."
    },
  {
      word: "encourage",
      meaning: "mendorong",
      example: "Teachers encourage students.",
      question: "Parents ___ children to learn.",
      options: ["encourage", "encourages", "encouraged", "encouraging"],
      answer: "encourage",
      difficulty: "medium",
      explanation: "Plural subject 'parents' -> base verb 'encourage'."
    },
  {
      word: "enhance",
      meaning: "meningkatkan",
      example: "This enhances performance.",
      question: "This ___ performance.",
      options: ["enhances", "enhance", "enhanced", "enhancing"],
      answer: "enhances",
      difficulty: "medium"
    },
  {
      word: "establish",
      meaning: "mendirikan / menetapkan",
      example: "They established a rule.",
      question: "They ___ a rule.",
      options: ["established", "establish", "establishes", "establishing"],
      answer: "established",
      explanation: "The sentence refers to a completed action in the past.",
      difficulty: "medium"
    },
  {
      word: "evaluate",
      meaning: "menilai",
      example: "Evaluate results.",
      question: "We need to ___ performance.",
      options: ["evaluate", "ignore", "avoid", "forget"],
      answer: "evaluate",
      difficulty: "medium",
      explanation: "'Evaluate' means to assess carefully."
    },
  {
      word: "evident",
      meaning: "jelas terlihat",
      example: "The result is evident.",
      question: "It is ___ that he is correct.",
      options: ["evident", "event", "evidence", "evidently"],
      answer: "evident",
      difficulty: "medium"
    },
  {
      word: "except",
      meaning: "kecuali",
      example: "Everyone came except him.",
      question: "Everyone passed ___ one student.",
      options: ["except", "accept", "besides", "including"],
      answer: "except",
      difficulty: "medium",
      confusion: "accept"
    },
  {
      word: "expand",
      meaning: "memperluas",
      example: "The company expands.",
      question: "They want to ___ their business.",
      options: ["expand", "expands", "expanded", "expanding"],
      answer: "expand",
      difficulty: "easy",
      explanation: "After 'to', use base verb -> 'expand'."
    },
  {
      word: "expect",
      meaning: "mengharapkan",
      example: "We expect success.",
      question: "They ___ good results.",
      options: ["expect", "expects", "expected", "expecting"],
      answer: "expect",
      difficulty: "easy",
      explanation: "Plural subject 'they' -> base verb 'expect'."
    },
  {
      word: "explain",
      meaning: "menjelaskan",
      example: "He explained the idea.",
      question: "Can you ___ this concept?",
      options: ["explain", "describe", "define", "clarify"],
      answer: "explain",
      difficulty: "easy",
      explanation: "'Explain' means to make something clear or understandable."
    },
  {
      word: "explicit",
      meaning: "jelas / tersurat",
      example: "The instruction is explicit.",
      question: "The meaning is ___ and clear.",
      options: ["explicit", "implicit", "confusing", "hidden"],
      answer: "explicit",
      difficulty: "hard"
    },
  {
      word: "factor",
      meaning: "faktor",
      example: "Cost is a factor.",
      question: "Price is an important ___.",
      options: ["factor", "factors", "factoring", "factored"],
      answer: "factor",
      difficulty: "medium"
    },
  {
      word: "fail",
      meaning: "gagal",
      example: "He failed the test.",
      question: "Do not ___ again.",
      options: ["fail", "fails", "failed", "failing"],
      answer: "fail",
      difficulty: "easy",
      explanation: "After 'do not', we use base verb -> 'fail'."
    },
  {
      word: "fluctuate",
      meaning: "berubah-ubah",
      example: "Prices fluctuate daily.",
      question: "The value tends to ___.",
      options: ["fluctuate", "increase", "decrease", "remain"],
      answer: "fluctuate",
      difficulty: "hard"
    },
  {
      word: "focus",
      meaning: "fokus",
      example: "Focus on the task.",
      question: "Students should ___ on learning.",
      options: ["focus", "focuses", "focused", "focusing"],
      answer: "focus",
      difficulty: "easy",
      explanation: "After 'should', use base verb -> 'focus'."
    },
  {
      word: "function",
      meaning: "fungsi",
      example: "The function is clear.",
      question: "What is the ___ of this tool?",
      options: ["function", "result", "problem", "effect"],
      answer: "function",
      difficulty: "medium",
      explanation: "'Function' means purpose or role."
    },
  {
      word: "gain",
      meaning: "memperoleh",
      example: "She gained experience.",
      question: "Students ___ knowledge.",
      options: ["gain", "gains", "gained", "gaining"],
      answer: "gain",
      difficulty: "easy",
      explanation: "Plural subject 'students' -> base verb 'gain'."
    },
  {
      word: "generate",
      meaning: "menghasilkan",
      example: "Generate ideas.",
      question: "This system can ___ energy.",
      options: ["generate", "stop", "block", "destroy"],
      answer: "generate",
      difficulty: "easy",
      explanation: "'Generate' means to produce."
    },
  {
      word: "handle",
      meaning: "menangani",
      example: "He handles problems.",
      question: "She can ___ the situation.",
      options: ["handle", "handles", "handled", "handling"],
      answer: "handle",
      difficulty: "easy",
      explanation: "After 'can', we use base verb -> 'handle'."
    },
  {
      word: "help",
      meaning: "membantu",
      example: "She helps her friend.",
      difficulty: "easy",
      question: "What does 'help' mean?",
      options: ["ignore", "assist", "hide", "borrow"],
      answer: "assist",
      explanation: "Help means to assist or support someone."
    },
  {
      word: "highlight",
      meaning: "menyoroti",
      example: "The report highlights issues.",
      question: "The article ___ key points.",
      options: ["highlights", "shows", "explains", "states"],
      answer: "highlights",
      difficulty: "medium"
    },
  {
      word: "historic",
      meaning: "bersejarah penting",
      example: "A historic event.",
      question: "It was a ___ moment.",
      options: ["historic", "historical", "important", "ancient"],
      answer: "historic",
      difficulty: "hard",
      confusion: "historical"
    },
  {
      word: "historical",
      meaning: "terkait sejarah",
      example: "Historical data.",
      question: "This museum shows ___ artifacts.",
      options: ["historical", "historic", "ancient", "modern"],
      answer: "historical",
      difficulty: "hard",
      confusion: "historic"
    },
  {
      word: "identify",
      meaning: "mengidentifikasi",
      example: "Identify the problem.",
      question: "We must ___ the issue.",
      options: ["identify", "identifies", "identified", "identifying"],
      answer: "identify",
      difficulty: "easy",
      explanation: "After 'must', use base verb -> 'identify'."
    },
  {
      word: "ignore",
      meaning: "mengabaikan",
      example: "Ignore distractions.",
      question: "Do not ___ the warning.",
      options: ["ignore", "ignores", "ignored", "ignoring"],
      answer: "ignore",
      difficulty: "easy",
      explanation: "After 'do not', use base verb -> 'ignore'."
    },
  {
      word: "impact",
      meaning: "dampak",
      example: "The policy has impact.",
      question: "The policy has a big ___.",
      options: ["impact", "impacts", "impacted", "impacting"],
      answer: "impact",
      difficulty: "medium"
    },
  {
      word: "implicit",
      meaning: "tersirat",
      example: "The meaning is implicit.",
      question: "The idea is not stated but ___.",
      options: ["implicit", "explicit", "clear", "direct"],
      answer: "implicit",
      difficulty: "hard"
    },
  {
      word: "imply",
      meaning: "menyiratkan",
      example: "The sentence implies meaning.",
      question: "The statement ___ that he agrees.",
      options: ["implies", "imply", "implied", "implying"],
      answer: "implies",
      difficulty: "hard"
    },
  {
      word: "improve",
      meaning: "meningkatkan",
      example: "They improve skills.",
      question: "Practice helps ___ performance.",
      options: ["improve", "improves", "improved", "improving"],
      answer: "improve",
      difficulty: "medium",
      explanation: "After 'helps', base verb is commonly used -> 'improve'."
    },
  {
      word: "include",
      meaning: "termasuk",
      example: "The list includes names.",
      question: "The report ___ several points.",
      options: ["includes", "include", "included", "including"],
      answer: "includes",
      difficulty: "medium",
      explanation: "Singular subject 'report' -> 'includes'."
    },
  {
      word: "increase",
      meaning: "meningkat",
      example: "Prices increase yearly.",
      question: "Prices ___ every year.",
      options: ["increase", "increases", "increased", "increasing"],
      answer: "increase",
      difficulty: "medium"
    },
  {
      word: "indicate",
      meaning: "menunjukkan",
      example: "The graph indicates growth.",
      question: "The data ___ a trend.",
      options: ["indicates", "indicate", "indicated", "indicating"],
      answer: "indicates",
      difficulty: "medium",
      explanation: "Singular subject -> 'indicates'."
    },
  {
      word: "inevitable",
      meaning: "tidak terhindarkan",
      example: "Failure is inevitable.",
      question: "Failure is ___.",
      options: ["inevitable", "avoid", "optional", "rare"],
      answer: "inevitable",
      explanation: "Inevitable means something cannot be avoided.",
      difficulty: "hard"
    },
  {
      word: "infer",
      meaning: "menyimpulkan",
      example: "We infer meaning.",
      question: "From the text, we can ___ that he is unhappy.",
      options: ["infer", "imply", "assume", "state"],
      answer: "infer",
      difficulty: "hard",
      confusion: "imply"
    },
  {
      word: "interpret",
      meaning: "menafsirkan",
      example: "Interpret the text.",
      question: "Students must ___ the meaning of the passage.",
      options: ["interpret", "translate", "explain", "rewrite"],
      answer: "interpret",
      difficulty: "hard"
    },
  {
      word: "interpretation",
      meaning: "penafsiran",
      example: "Interpretation varies.",
      question: "Different ___ are possible.",
      options: ["interpretations", "interprets", "interpreting", "interpreted"],
      answer: "interpretations",
      difficulty: "hard"
    },
  {
      word: "involve",
      meaning: "melibatkan",
      example: "The task involves effort.",
      question: "This process ___ multiple steps.",
      options: ["involves", "involve", "involved", "involving"],
      answer: "involves",
      difficulty: "medium"
    },
  {
      word: "issue",
      meaning: "masalah penting",
      example: "A serious issue.",
      question: "Climate change is a global ___.",
      options: ["issue", "problem", "case", "topic"],
      answer: "issue",
      difficulty: "hard"
    },
  {
      word: "join",
      meaning: "bergabung",
      example: "She joined the team.",
      question: "They want to ___ the program.",
      options: ["join", "joins", "joined", "joining"],
      answer: "join",
      difficulty: "easy",
      explanation: "After 'to', we use base verb -> 'join'."
    },
  {
      word: "justify",
      meaning: "membenarkan",
      example: "He justified his actions.",
      question: "He ___ his decision.",
      options: ["justified", "justify", "justifies", "justifying"],
      answer: "justified",
      difficulty: "medium"
    },
  {
      word: "lead",
      meaning: "mengarah pada",
      example: "This leads to success.",
      question: "Hard work can ___ to success.",
      options: ["lead", "leads", "led", "leading"],
      answer: "lead",
      difficulty: "medium",
      explanation: "After 'can', we use base form -> 'lead'."
    },
  {
      word: "limit",
      meaning: "membatasi",
      example: "They limit usage.",
      question: "We should ___ distractions.",
      options: ["limit", "limits", "limited", "limiting"],
      answer: "limit",
      difficulty: "easy",
      explanation: "After 'should', base verb -> 'limit'."
    },
  {
      word: "loose",
      meaning: "longgar",
      example: "The shirt is loose.",
      question: "This shirt is too ___.",
      options: ["loose", "lose", "big", "wide"],
      answer: "loose",
      difficulty: "easy",
      confusion: "lose"
    },
  {
      word: "lose",
      meaning: "kehilangan",
      example: "Don't lose your keys.",
      question: "Try not to ___ your focus.",
      options: ["lose", "loose", "miss", "drop"],
      answer: "lose",
      difficulty: "easy",
      confusion: "loose"
    },
  {
      word: "maintain",
      meaning: "mempertahankan",
      example: "Maintain balance.",
      question: "They ___ stability.",
      options: ["maintain", "maintains", "maintained", "maintaining"],
      answer: "maintain",
      difficulty: "medium",
      explanation: "Plural subject 'they' -> base verb 'maintain'."
    },
  {
      word: "manage",
      meaning: "mengelola",
      example: "He manages time well.",
      question: "She can ___ her tasks.",
      options: ["manage", "manages", "managed", "managing"],
      answer: "manage",
      difficulty: "easy",
      explanation: "After 'can', base verb -> 'manage'."
    },
  {
      word: "measure",
      meaning: "mengukur",
      example: "Measure the result.",
      question: "Scientists ___ performance.",
      options: ["measure", "measures", "measured", "measuring"],
      answer: "measure",
      difficulty: "easy",
      explanation: "Plural subject 'scientists' -> base verb 'measure'."
    },
  {
      word: "method",
      meaning: "cara sistematis",
      example: "Scientific method.",
      question: "This ___ follows strict procedures.",
      options: ["method", "approach", "way", "style"],
      answer: "method",
      difficulty: "hard"
    },
  {
      word: "notable",
      meaning: "menonjol",
      example: "A notable difference.",
      question: "There is a ___ change.",
      options: ["notable", "small", "minor", "little"],
      answer: "notable",
      difficulty: "medium"
    },
  {
      word: "notion",
      meaning: "gagasan / ide",
      example: "The notion is widely accepted.",
      question: "The ___ is widely accepted.",
      options: ["notion", "motion", "option", "nation"],
      answer: "notion",
      difficulty: "hard"
    },
  {
      word: "observe",
      meaning: "mengamati",
      example: "Observe carefully.",
      question: "Scientists ___ behavior.",
      options: ["observe", "observes", "observed", "observing"],
      answer: "observe",
      difficulty: "easy",
      explanation: "Plural subject 'scientists' -> base verb 'observe'."
    },
  {
      word: "obtain",
      meaning: "memperoleh",
      example: "He obtained results.",
      question: "They ___ permission.",
      options: ["obtain", "get", "take", "receive"],
      answer: "obtain",
      difficulty: "medium"
    },
  {
      word: "occur",
      meaning: "terjadi",
      example: "The event occurred.",
      question: "The issue may ___ again.",
      options: ["occur", "occurs", "occurred", "occurring"],
      answer: "occur",
      difficulty: "medium",
      explanation: "After 'may', use base verb -> 'occur'."
    },
  {
      word: "offer",
      meaning: "menawarkan",
      example: "They offer help.",
      question: "We ___ support to students.",
      options: ["offer", "offers", "offered", "offering"],
      answer: "offer",
      difficulty: "easy",
      explanation: "Plural subject 'we' -> base verb 'offer'."
    },
  {
      word: "participate",
      meaning: "berpartisipasi",
      example: "They participated actively.",
      question: "They ___ in the discussion.",
      options: ["participated", "participate", "participates", "participating"],
      answer: "participated",
      difficulty: "medium"
    },
  {
      word: "perform",
      meaning: "melakukan",
      example: "Perform well.",
      question: "She ___ better under pressure.",
      options: ["performs", "perform", "performed", "performing"],
      answer: "performs",
      difficulty: "medium",
      explanation: "Singular subject 'she' -> 'performs'."
    },
  {
      word: "predict",
      meaning: "memprediksi",
      example: "Experts predict trends.",
      question: "Scientists ___ future outcomes.",
      options: ["predict", "guess", "assume", "think"],
      answer: "predict",
      difficulty: "medium"
    },
  {
      word: "prepare",
      meaning: "mempersiapkan",
      example: "She prepares daily.",
      question: "You should ___ before the test.",
      options: ["prepare", "prepares", "prepared", "preparing"],
      answer: "prepare",
      difficulty: "easy",
      explanation: "After 'should', base verb -> 'prepare'."
    },
  {
      word: "presume",
      meaning: "menganggap dengan kemungkinan",
      example: "I presume he is home.",
      question: "I ___ he has arrived already.",
      options: ["presume", "assume", "infer", "decide"],
      answer: "presume",
      difficulty: "hard"
    },
  {
      word: "prevent",
      meaning: "mencegah",
      example: "Prevent problems.",
      question: "This can ___ damage.",
      options: ["prevent", "prevents", "prevented", "preventing"],
      answer: "prevent",
      difficulty: "easy",
      explanation: "After 'can', use base verb -> 'prevent'."
    },
  {
      word: "principal",
      meaning: "kepala / utama",
      example: "The principal spoke.",
      question: "The school ___ gave a speech.",
      options: ["principal", "principle", "teacher", "leader"],
      answer: "principal",
      difficulty: "hard",
      confusion: "principle"
    },
  {
      word: "principle",
      meaning: "prinsip",
      example: "It follows a principle.",
      question: "This is an important ___.",
      options: ["principle", "principal", "principles", "principled"],
      answer: "principle",
      difficulty: "hard"
    },
  {
      word: "process",
      meaning: "proses",
      example: "The process is long.",
      question: "The ___ takes time.",
      options: ["process", "processes", "processing", "processed"],
      answer: "process",
      difficulty: "medium"
    },
  {
      word: "provide",
      meaning: "menyediakan",
      example: "They provide help.",
      question: "The program ___ support.",
      options: ["provides", "provide", "provided", "providing"],
      answer: "provides",
      difficulty: "medium",
      explanation: "Singular subject 'program' -> 'provides'."
    },
  {
      word: "reason",
      meaning: "alasan",
      example: "He gave a reason.",
      question: "She explained the ___ clearly.",
      options: ["reason", "result", "effect", "method"],
      answer: "reason",
      difficulty: "easy",
      explanation: "'Reason' explains why something happens. 'Explained' matches with giving a reason."
    },
  {
      word: "reduce",
      meaning: "mengurangi",
      example: "We reduce waste.",
      question: "They ___ waste significantly.",
      options: ["reduce", "reduces", "reduced", "reducing"],
      answer: "reduce",
      difficulty: "medium"
    },
  {
      word: "reinforce",
      meaning: "memperkuat",
      example: "This reinforces the argument.",
      question: "The data ___ the theory.",
      options: ["reinforces", "reinforce", "reinforced", "reinforcing"],
      answer: "reinforces",
      difficulty: "hard"
    },
  {
      word: "relevant",
      meaning: "relevan",
      example: "The point is relevant.",
      question: "This is ___ to the topic.",
      options: ["relevant", "relevance", "relate", "relating"],
      answer: "relevant",
      difficulty: "hard"
    },
  {
      word: "remain",
      meaning: "tetap",
      example: "He remains calm.",
      question: "The problem ___ unsolved.",
      options: ["remains", "remain", "remained", "remaining"],
      answer: "remains",
      difficulty: "medium",
      explanation: "Singular subject 'problem' -> 'remains'."
    },
  {
      word: "require",
      meaning: "membutuhkan",
      example: "This requires effort.",
      question: "The job ___ patience.",
      options: ["requires", "require", "required", "requiring"],
      answer: "requires",
      difficulty: "medium",
      explanation: "Singular subject 'job' -> 'requires'."
    },
  {
      word: "respond",
      meaning: "merespon",
      example: "He responds quickly.",
      question: "She ___ to the question.",
      options: ["responds", "respond", "responded", "responding"],
      answer: "responds",
      difficulty: "medium",
      explanation: "Singular subject 'she' -> 'responds'."
    },
  {
      word: "result",
      meaning: "hasil",
      example: "The result is clear.",
      question: "The ___ is surprising.",
      options: ["result", "results", "resulting", "resulted"],
      answer: "result",
      difficulty: "medium"
    },
  {
      word: "retain",
      meaning: "mempertahankan",
      example: "Students retain knowledge.",
      question: "Students ___ information better.",
      options: ["retain", "retains", "retained", "retaining"],
      answer: "retain",
      difficulty: "medium"
    },
  {
      word: "significant",
      meaning: "signifikan",
      example: "There is a significant change.",
      question: "There is a ___ improvement.",
      options: ["significant", "significance", "signify", "significantly"],
      answer: "significant",
      difficulty: "hard"
    },
  {
      word: "signify",
      meaning: "menandakan",
      example: "This signifies change.",
      question: "This symbol ___ peace.",
      options: ["signifies", "means", "represents", "shows"],
      answer: "signifies",
      difficulty: "hard"
    },
  {
      word: "solve",
      meaning: "menyelesaikan",
      example: "He solves problems.",
      question: "We must ___ this issue.",
      options: ["solve", "solves", "solved", "solving"],
      answer: "solve",
      difficulty: "easy",
      explanation: "After 'must', base verb -> 'solve'."
    },
  {
      word: "stable",
      meaning: "stabil",
      example: "The system is stable.",
      question: "The condition remains ___.",
      options: ["stable", "steady", "constant", "fixed"],
      answer: "stable",
      difficulty: "easy"
    },
  {
      word: "start",
      meaning: "memulai",
      example: "We start the class.",
      difficulty: "easy",
      question: "Which word is closest to 'start'?",
      options: ["begin", "forget", "close", "move back"],
      answer: "begin",
      explanation: "Start means to begin."
    },
  {
      word: "strategy",
      meaning: "strategi",
      example: "They used a strategy.",
      question: "They applied a new ___.",
      options: ["strategy", "strategies", "strategic", "strategically"],
      answer: "strategy",
      difficulty: "medium"
    },
  {
      word: "structure",
      meaning: "struktur",
      example: "The structure is clear.",
      question: "The text has a clear ___.",
      options: ["structure", "structures", "structuring", "structured"],
      answer: "structure",
      difficulty: "medium"
    },
  {
      word: "substantial",
      meaning: "besar / signifikan",
      example: "There is a substantial increase.",
      question: "There is a ___ increase.",
      options: ["substantial", "small", "minor", "weak"],
      answer: "substantial",
      explanation: "Substantial means large, important, or significant.",
      difficulty: "hard"
    },
  {
      word: "suggest",
      meaning: "menyarankan",
      example: "She suggests a plan.",
      question: "They ___ a solution.",
      options: ["suggest", "suggests", "suggested", "suggesting"],
      answer: "suggest",
      difficulty: "medium",
      explanation: "Plural subject 'they' -> base verb 'suggest'."
    },
  {
      word: "support",
      meaning: "mendukung",
      example: "The data supports the claim.",
      question: "The evidence ___ the theory.",
      options: ["supports", "support", "supported", "supporting"],
      answer: "supports",
      difficulty: "medium",
      explanation: "Singular subject 'evidence' takes verb 'supports'."
    },
  {
      word: "than",
      meaning: "daripada",
      example: "Better than before.",
      question: "She is taller ___ him.",
      options: ["than", "then", "more", "over"],
      answer: "than",
      difficulty: "easy",
      confusion: "then"
    },
  {
      word: "then",
      meaning: "kemudian",
      example: "Finish work, then rest.",
      question: "Finish this, ___ go home.",
      options: ["then", "than", "after", "next"],
      answer: "then",
      difficulty: "easy",
      confusion: "than"
    },
  {
      word: "translate",
      meaning: "menerjemahkan bahasa",
      example: "Translate into English.",
      question: "Please ___ this sentence into English.",
      options: ["translate", "interpret", "convert", "rewrite"],
      answer: "translate",
      difficulty: "medium"
    },
  {
      word: "trigger",
      meaning: "memicu",
      example: "Stress triggers reactions.",
      question: "This may ___ a response.",
      options: ["trigger", "cause", "start", "begin"],
      answer: "trigger",
      difficulty: "medium"
    },
  {
      word: "understand",
      meaning: "memahami",
      example: "I understand the topic.",
      question: "They ___ the concept well.",
      options: ["understand", "understands", "understood", "understanding"],
      answer: "understand",
      difficulty: "easy",
      explanation: "Plural subject 'they' -> base verb 'understand'."
    },
  {
      word: "valid",
      meaning: "valid",
      example: "The argument is valid.",
      question: "The argument is ___.",
      options: ["valid", "validity", "validate", "validating"],
      answer: "valid",
      difficulty: "medium"
    },
  {
      word: "vary",
      meaning: "bervariasi",
      example: "Results vary.",
      question: "The outcomes ___ widely.",
      options: ["vary", "varies", "varied", "varying"],
      answer: "vary",
      difficulty: "medium",
      explanation: "Plural subject 'outcomes' -> base verb 'vary'."
    }
];

const quotes = [
  "“You don’t have to be perfect. Just consistent.”",
  "“Small daily practice beats rare heroic effort.”",
  "“Clarity grows every time you return to the page.”"
];




const QUOTES = [
  "Olin, you can do this 💛 semangat -tasha",
  "Viery, stay consistent-you're getting better every day.",
  "Violin, don't rush-just keep going.",
  "Sherwin, progress is still progress.",
  "Verenita, you're closer than you think.",
  "Olin, one small step today is enough.",
  "Viery, trust your process.",
  "Violin, keep showing up-that's what matters.",
  "Sherwin, you've handled harder things than this.",
  "Verenita, believe in your effort.",
  "Olin, you're building something great.",
  "Viery, don't stop now-you're on a roll.",
  "Violin, consistency beats intensity.",
  "Sherwin, you're improving even if you don't feel it.",
  "Verenita, your effort will pay off.",
  "Olin, just 5 questions today-that's enough.",
  "Viery, you're stronger than your doubts.",
  "Violin, slow progress is still progress.",
  "Sherwin, keep the streak alive 🔥",
  "Verenita, you're doing better than yesterday.",
  "Olin, today counts.",
  "Viery, small wins matter.",
  "Violin, stay focused-you've got this.",
  "Sherwin, discipline > motivation.",
  "Verenita, keep going, no matter how small.",
  "Olin, this is your moment.",
  "Viery, show up again today.",
  "Violin, don't break the chain 🔥",
  "Sherwin, you're becoming consistent.",
  "Verenita, trust yourself 💛"
];

const UTBK_TIPS = [
  "Focus on keywords, not every word.",
  "Eliminate 2 wrong answers first before choosing.",
  "Don't panic-skip and return later.",
  "Look for connectors: however, therefore, although.",
  "Time management is more important than perfection.",
  "Practice reading faster, not just understanding.",
  "Watch out for trap answers that sound correct.",
  "Always read the question BEFORE the passage.",
  "Don't overthink simple questions.",
  "Pay attention to verb tenses in sentences.",
  "Scan the text for specific information.",
  "Identify the main idea quickly.",
  "Be careful with synonyms-they may change meaning.",
  "Read options carefully-they often contain clues.",
  "Trust your first instinct (if you understood it).",
  "Practice consistency, not intensity.",
  "Understand question types: inference, detail, main idea.",
  "Watch out for extreme words: always, never.",
  "Train your eyes to spot signal words.",
  "Don't translate everything into Indonesian.",
  "Focus on structure, not just vocabulary.",
  "Use context clues to guess unknown words.",
  "Stay calm when facing difficult passages.",
  "Accuracy improves with repetition.",
  "Break long sentences into smaller chunks.",
  "Don't get stuck-move forward.",
  "Look at paragraph structure for answers.",
  "Compare answer choices carefully.",
  "Speed comes with familiarity.",
  "Confidence comes from practice."
];

const collocationData = [
  {
      phrase: "address a problem",
      meaning: "menangani masalah",
      example: "They addressed the problem.",
      question: "They ___ the problem.",
      options: ["addressed", "made", "did", "took"],
      answer: "addressed",
      difficulty: "hard"
    },
  {
      phrase: "address an issue",
      meaning: "menangani masalah",
      example: "They addressed the issue.",
      question: "We must ___ the issue.",
      options: ["address", "solve", "handle", "fix"],
      answer: "address",
      difficulty: "medium",
      explanation: "'Address an issue' means deal with it, not necessarily solve it."
    },
  {
      phrase: "bear in mind",
      meaning: "ingatlah",
      example: "Bear this in mind.",
      question: "___ this in mind.",
      options: ["Bear", "Make", "Do", "Take"],
      answer: "Bear",
      difficulty: "hard"
    },
  {
      phrase: "bear responsibility",
      meaning: "menanggung tanggung jawab",
      example: "He bears responsibility.",
      question: "He ___ responsibility.",
      options: ["bears", "makes", "does", "takes"],
      answer: "bears",
      explanation: "The fixed expression is 'bear responsibility'.",
      difficulty: "hard"
    },
  {
      phrase: "build confidence",
      meaning: "membangun kepercayaan diri",
      example: "Practice builds confidence.",
      question: "Practice ___ confidence.",
      options: ["builds", "makes", "creates", "forms"],
      answer: "builds",
      difficulty: "medium",
      explanation: "Correct collocation is 'build confidence'."
    },
  {
      phrase: "carry out research",
      meaning: "melakukan penelitian",
      example: "They carried out research.",
      question: "They ___ research.",
      options: ["carried out", "did", "made", "took"],
      answer: "carried out",
      difficulty: "medium",
      explanation: "Correct phrase is 'carry out research'."
    },
  {
      phrase: "come to a decision",
      meaning: "membuat keputusan",
      example: "They came to a decision.",
      question: "They ___ to a decision.",
      options: ["came", "made", "did", "took"],
      answer: "came",
      difficulty: "medium"
    },
  {
      phrase: "commit a mistake",
      meaning: "❌ WRONG (trap)",
      example: "-",
      question: "Which is CORRECT?",
      options: ["make a mistake", "commit a mistake", "do a mistake", "take a mistake"],
      answer: "make a mistake",
      difficulty: "hard"
    },
  {
      phrase: "do a job",
      meaning: "melakukan pekerjaan",
      example: "She did a good job.",
      question: "She ___ a good job.",
      options: ["did", "made", "took", "gave"],
      answer: "did",
      difficulty: "medium"
    },
  {
      phrase: "do a task",
      meaning: "melakukan tugas",
      example: "He did a task.",
      question: "He ___ a task.",
      options: ["did", "made", "took", "gave"],
      answer: "did",
      difficulty: "medium"
    },
  {
      phrase: "do business",
      meaning: "berbisnis",
      example: "They do business.",
      question: "They ___ business internationally.",
      options: ["do", "make", "take", "give"],
      answer: "do",
      difficulty: "medium"
    },
  {
      phrase: "do damage",
      meaning: "menyebabkan kerusakan",
      example: "The storm did damage.",
      question: "The storm ___ damage.",
      options: ["did", "made", "took", "gave"],
      answer: "did",
      difficulty: "medium"
    },
  {
      phrase: "do homework",
      meaning: "mengerjakan PR",
      example: "He does his homework.",
      question: "He ___ his homework.",
      options: ["does", "makes", "takes", "creates"],
      answer: "does",
      explanation: "We say 'do homework', not 'make homework'.",
      difficulty: "easy"
    },
  {
      phrase: "do research",
      meaning: "melakukan penelitian",
      example: "They did research.",
      question: "They ___ research.",
      options: ["did", "made", "took", "gave"],
      answer: "did",
      difficulty: "easy"
    },
  {
      phrase: "draw a comparison",
      meaning: "membandingkan",
      example: "They drew a comparison.",
      question: "They ___ a comparison.",
      options: ["drew", "made", "did", "took"],
      answer: "drew",
      difficulty: "hard"
    },
  {
      phrase: "draw a conclusion",
      meaning: "menarik kesimpulan",
      example: "They drew a conclusion.",
      question: "They ___ a conclusion.",
      options: ["drew", "made", "did", "took"],
      answer: "drew",
      explanation: "We say 'draw a conclusion'.",
      difficulty: "hard"
    },
  {
      phrase: "draw a distinction",
      meaning: "membedakan",
      example: "They drew a distinction.",
      question: "They ___ a distinction.",
      options: ["drew", "made", "did", "took"],
      answer: "drew",
      difficulty: "hard"
    },
  {
      phrase: "draw attention",
      meaning: "menarik perhatian",
      example: "This draws attention.",
      question: "The issue ___ attention.",
      options: ["draws", "brings", "gets", "calls"],
      answer: "draws",
      difficulty: "medium",
      explanation: "Correct form is 'draw attention'."
    },
  {
      phrase: "draw attention to",
      meaning: "menarik perhatian pada",
      example: "This draws attention to errors.",
      question: "This ___ attention to mistakes.",
      options: ["draws", "makes", "does", "takes"],
      answer: "draws",
      difficulty: "hard"
    },
  {
      phrase: "exert influence",
      meaning: "memberi pengaruh",
      example: "They exert influence.",
      question: "They ___ influence.",
      options: ["exert", "make", "do", "take"],
      answer: "exert",
      difficulty: "hard"
    },
  {
      phrase: "express an idea",
      meaning: "mengungkapkan ide",
      example: "He expressed an idea.",
      question: "She ___ an idea.",
      options: ["expressed", "said", "told", "gave"],
      answer: "expressed",
      difficulty: "medium",
      explanation: "Correct collocation is 'express an idea'."
    },
  {
      phrase: "face a challenge",
      meaning: "menghadapi tantangan",
      example: "They faced challenges.",
      question: "We ___ a challenge.",
      options: ["face", "meet", "see", "get"],
      answer: "face",
      difficulty: "easy",
      explanation: "Correct collocation is 'face a challenge'."
    },
  {
      phrase: "gain experience",
      meaning: "mendapat pengalaman",
      example: "He gained experience.",
      question: "She ___ experience.",
      options: ["gained", "got", "received", "took"],
      answer: "gained",
      difficulty: "easy",
      explanation: "Correct is 'gain experience'."
    },
  {
      phrase: "give a reason",
      meaning: "memberi alasan",
      example: "He gave a reason.",
      question: "She ___ a reason.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "easy",
      explanation: "Correct is 'give a reason'."
    },
  {
      phrase: "give a response",
      meaning: "memberi respon",
      example: "He gave a response.",
      question: "She ___ a response.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "medium"
    },
  {
      phrase: "give a solution",
      meaning: "memberi solusi",
      example: "He gave a solution.",
      question: "They ___ a solution.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "medium",
      explanation: "Correct is 'give a solution'."
    },
  {
      phrase: "give advice",
      meaning: "memberi nasihat",
      example: "She gave advice.",
      question: "He ___ advice.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "easy",
      explanation: "Correct is 'give advice'."
    },
  {
      phrase: "give an answer",
      meaning: "memberi jawaban",
      example: "He gave an answer.",
      question: "She ___ an answer.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "easy"
    },
  {
      phrase: "give an example",
      meaning: "memberi contoh",
      example: "She gave an example.",
      question: "She ___ an example.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "easy"
    },
  {
      phrase: "give an opinion",
      meaning: "memberi pendapat",
      example: "He gave an opinion.",
      question: "She ___ an opinion.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "easy",
      explanation: "Correct is 'give an opinion'."
    },
  {
      phrase: "give attention",
      meaning: "memberi perhatian",
      example: "Give attention to details.",
      question: "You must ___ attention to this.",
      options: ["give", "make", "do", "take"],
      answer: "give",
      difficulty: "medium"
    },
  {
      phrase: "give consideration",
      meaning: "mempertimbangkan",
      example: "They gave consideration.",
      question: "They ___ consideration to the issue.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "hard"
    },
  {
      phrase: "give feedback",
      meaning: "memberi masukan",
      example: "They gave feedback.",
      question: "They ___ feedback.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "medium"
    },
  {
      phrase: "give permission",
      meaning: "memberi izin",
      example: "They gave permission.",
      question: "They ___ permission.",
      options: ["gave", "made", "did", "took"],
      answer: "gave",
      difficulty: "medium"
    },
  {
      phrase: "give support",
      meaning: "memberi dukungan",
      example: "They gave support.",
      question: "We ___ support.",
      options: ["give", "make", "do", "take"],
      answer: "give",
      difficulty: "easy",
      explanation: "Correct phrase is 'give support'."
    },
  {
      phrase: "have difficulty",
      meaning: "kesulitan",
      example: "She has difficulty.",
      question: "I ___ difficulty understanding this.",
      options: ["have", "make", "do", "take"],
      answer: "have",
      difficulty: "hard"
    },
  {
      phrase: "hold a meeting",
      meaning: "mengadakan rapat",
      example: "They held a meeting.",
      question: "They ___ a meeting yesterday.",
      options: ["held", "made", "did", "took"],
      answer: "held",
      difficulty: "easy",
      explanation: "Correct is 'hold a meeting'."
    },
  {
      phrase: "hold a position",
      meaning: "memegang jabatan",
      example: "She holds a position.",
      question: "She ___ a position.",
      options: ["holds", "makes", "does", "takes"],
      answer: "holds",
      explanation: "The natural collocation is 'hold a position'.",
      difficulty: "hard"
    },
  {
      phrase: "hold a view",
      meaning: "memiliki pandangan",
      example: "They hold a view.",
      question: "They ___ a strong view.",
      options: ["hold", "make", "do", "take"],
      answer: "hold",
      difficulty: "hard"
    },
  {
      phrase: "hold an opinion",
      meaning: "memiliki pendapat",
      example: "He holds an opinion.",
      question: "He ___ an opinion.",
      options: ["holds", "makes", "does", "takes"],
      answer: "holds",
      difficulty: "hard"
    },
  {
      phrase: "hold responsibility",
      meaning: "memegang tanggung jawab",
      example: "She holds responsibility.",
      question: "She ___ responsibility.",
      options: ["holds", "makes", "does", "takes"],
      answer: "holds",
      difficulty: "hard"
    },
  {
      phrase: "make a change",
      meaning: "melakukan perubahan",
      example: "They made a change.",
      question: "We need to ___ a change.",
      options: ["make", "do", "take", "give"],
      answer: "make",
      difficulty: "easy"
    },
  {
      phrase: "make a choice",
      meaning: "membuat pilihan",
      example: "She made a choice.",
      question: "She ___ a choice.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make a comparison",
      meaning: "membuat perbandingan",
      example: "We made a comparison.",
      question: "We ___ a comparison.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make a conclusion",
      meaning: "menarik kesimpulan",
      example: "They made a conclusion.",
      question: "They ___ a conclusion.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make a decision",
      meaning: "membuat keputusan",
      example: "She made a decision quickly.",
      question: "She ___ a decision.",
      options: ["made", "did", "took", "created"],
      answer: "made",
      explanation: "We say 'make a decision', not 'do a decision'.",
      difficulty: "easy"
    },
  {
      phrase: "make a difference",
      meaning: "membuat perubahan",
      example: "It makes a difference.",
      question: "This ___ a difference.",
      options: ["makes", "does", "takes", "gives"],
      answer: "makes",
      difficulty: "medium"
    },
  {
      phrase: "make a move",
      meaning: "bergerak / bertindak",
      example: "He made a move.",
      question: "It's time to ___ a move.",
      options: ["make", "do", "take", "give"],
      answer: "make",
      difficulty: "medium",
      explanation: "Correct phrase is 'make a move'."
    },
  {
      phrase: "make a plan",
      meaning: "membuat rencana",
      example: "We made a plan.",
      question: "We ___ a plan.",
      options: ["made", "did", "took", "created"],
      answer: "made",
      explanation: "The natural collocation is 'make a plan'.",
      difficulty: "easy"
    },
  {
      phrase: "make a prediction",
      meaning: "membuat prediksi",
      example: "They made a prediction.",
      question: "Experts ___ a prediction.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make a statement",
      meaning: "memberi pernyataan",
      example: "She made a statement.",
      question: "She ___ a statement.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make a suggestion",
      meaning: "memberi saran",
      example: "She made a suggestion.",
      question: "She ___ a suggestion.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make an appointment",
      meaning: "membuat janji",
      example: "She made an appointment.",
      question: "She ___ an appointment.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "easy",
      explanation: "Correct collocation is 'make an appointment'."
    },
  {
      phrase: "make an argument",
      meaning: "mengemukakan argumen",
      example: "He made an argument.",
      question: "He ___ an argument.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make an assumption",
      meaning: "membuat asumsi",
      example: "He made an assumption.",
      question: "He ___ an assumption.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make an attempt",
      meaning: "mencoba",
      example: "She made an attempt.",
      question: "He ___ an attempt.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium",
      explanation: "Correct collocation is 'make an attempt'."
    },
  {
      phrase: "make an effort",
      meaning: "berusaha",
      example: "She made an effort to improve.",
      question: "She ___ an effort.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      explanation: "The correct collocation is 'make an effort'.",
      difficulty: "medium"
    },
  {
      phrase: "make an improvement",
      meaning: "melakukan peningkatan",
      example: "They made an improvement.",
      question: "They ___ an improvement.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make an inference",
      meaning: "menarik kesimpulan tersirat",
      example: "She made an inference.",
      question: "She ___ an inference.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "hard"
    },
  {
      phrase: "make an observation",
      meaning: "melakukan pengamatan",
      example: "She made an observation.",
      question: "She ___ an observation.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "medium"
    },
  {
      phrase: "make progress",
      meaning: "membuat kemajuan",
      example: "She made progress.",
      question: "He ___ progress.",
      options: ["made", "did", "took", "gave"],
      answer: "made",
      difficulty: "easy",
      explanation: "Correct is 'make progress'."
    },
  {
      phrase: "make sense",
      meaning: "masuk akal",
      example: "It makes sense.",
      question: "It ___ sense.",
      options: ["makes", "does", "takes", "gives"],
      answer: "makes",
      difficulty: "medium"
    },
  {
      phrase: "meet a requirement",
      meaning: "memenuhi persyaratan",
      example: "They meet the requirement.",
      question: "They ___ the requirement.",
      options: ["meet", "make", "do", "take"],
      answer: "meet",
      explanation: "The correct collocation is 'meet a requirement'.",
      difficulty: "medium"
    },
  {
      phrase: "meet expectations",
      meaning: "memenuhi harapan",
      example: "The product meets expectations.",
      question: "The product ___ expectations.",
      options: ["meets", "makes", "does", "takes"],
      answer: "meets",
      difficulty: "medium"
    },
  {
      phrase: "overcome difficulties",
      meaning: "mengatasi kesulitan",
      example: "She overcame difficulties.",
      question: "He ___ many difficulties.",
      options: ["overcame", "passed", "went", "did"],
      answer: "overcame",
      difficulty: "medium",
      explanation: "Correct collocation is 'overcome difficulties'."
    },
  {
      phrase: "pay attention",
      meaning: "memperhatikan",
      example: "Please pay attention.",
      question: "Please ___ attention.",
      options: ["pay", "make", "do", "take"],
      answer: "pay",
      explanation: "The standard collocation is 'pay attention'.",
      difficulty: "medium"
    },
  {
      phrase: "pose a question",
      meaning: "mengajukan pertanyaan",
      example: "She posed a question.",
      question: "She ___ a question.",
      options: ["posed", "made", "did", "took"],
      answer: "posed",
      difficulty: "hard"
    },
  {
      phrase: "pose a threat",
      meaning: "menimbulkan ancaman",
      example: "This issue poses a threat.",
      question: "This issue ___ a threat.",
      options: ["poses", "makes", "does", "takes"],
      answer: "poses",
      explanation: "The usual phrase is 'pose a threat'.",
      difficulty: "hard"
    },
  {
      phrase: "raise a question",
      meaning: "mengangkat pertanyaan",
      example: "He raised a question.",
      question: "She ___ a question.",
      options: ["raised", "lifted", "made", "asked"],
      answer: "raised",
      difficulty: "medium",
      explanation: "Correct collocation is 'raise a question'."
    },
  {
      phrase: "raise an issue",
      meaning: "mengangkat isu",
      example: "She raised an issue.",
      question: "She ___ an issue.",
      options: ["raised", "made", "did", "took"],
      answer: "raised",
      difficulty: "hard"
    },
  {
      phrase: "raise awareness",
      meaning: "meningkatkan kesadaran",
      example: "Campaigns raise awareness.",
      question: "Campaigns ___ awareness.",
      options: ["raise", "make", "do", "take"],
      answer: "raise",
      explanation: "We use 'raise awareness' for increasing public understanding.",
      difficulty: "medium"
    },
  {
      phrase: "reach a conclusion",
      meaning: "mencapai kesimpulan",
      example: "They reached a conclusion.",
      question: "They ___ a conclusion.",
      options: ["reached", "arrived", "got", "came"],
      answer: "reached",
      difficulty: "medium",
      explanation: "Correct collocation is 'reach a conclusion'."
    },
  {
      phrase: "reach a decision",
      meaning: "mencapai keputusan",
      example: "They reached a decision.",
      question: "They finally ___ a decision.",
      options: ["reached", "made", "did", "took"],
      answer: "reached",
      difficulty: "hard"
    },
  {
      phrase: "reach a goal",
      meaning: "mencapai tujuan",
      example: "He reached his goal.",
      question: "She ___ her goal.",
      options: ["reached", "got", "made", "did"],
      answer: "reached",
      difficulty: "easy",
      explanation: "Correct phrase is 'reach a goal'."
    },
  {
      phrase: "reach an agreement",
      meaning: "mencapai kesepakatan",
      example: "They reached an agreement.",
      question: "They ___ an agreement.",
      options: ["reached", "made", "did", "took"],
      answer: "reached",
      explanation: "The natural collocation is 'reach an agreement'.",
      difficulty: "hard"
    },
  {
      phrase: "set a goal",
      meaning: "menetapkan tujuan",
      example: "She set a goal.",
      question: "He ___ a goal.",
      options: ["set", "made", "did", "took"],
      answer: "set",
      difficulty: "easy",
      explanation: "Correct collocation is 'set a goal'."
    },
  {
      phrase: "solve a problem",
      meaning: "menyelesaikan masalah",
      example: "He solved the problem.",
      question: "They ___ the problem.",
      options: ["solved", "fixed", "did", "made"],
      answer: "solved",
      difficulty: "easy",
      explanation: "Correct is 'solve a problem'."
    },
  {
      phrase: "take a break",
      meaning: "beristirahat",
      example: "Let's take a break.",
      question: "Let's ___ a break.",
      options: ["take", "make", "do", "give"],
      answer: "take",
      explanation: "The natural collocation is 'take a break'.",
      difficulty: "easy"
    },
  {
      phrase: "take a chance",
      meaning: "mengambil kesempatan",
      example: "He took a chance.",
      question: "He ___ a chance.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      explanation: "We say 'take a chance'.",
      difficulty: "easy"
    },
  {
      phrase: "take a decision",
      meaning: "mengambil keputusan",
      example: "They took a decision.",
      question: "They ___ a decision.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "medium",
      explanation: "British English uses 'take a decision'."
    },
  {
      phrase: "take a moment",
      meaning: "meluangkan waktu",
      example: "Take a moment.",
      question: "Please ___ a moment.",
      options: ["take", "make", "do", "give"],
      answer: "take",
      difficulty: "easy",
      explanation: "Correct collocation is 'take a moment'."
    },
  {
      phrase: "take a position",
      meaning: "mengambil posisi/sikap",
      example: "He took a position.",
      question: "He ___ a position on the issue.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "medium"
    },
  {
      phrase: "take a risk",
      meaning: "mengambil risiko",
      example: "They took a risk.",
      question: "They ___ a risk.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "medium"
    },
  {
      phrase: "take a step",
      meaning: "mengambil langkah",
      example: "He took a step forward.",
      question: "We must ___ a step.",
      options: ["take", "make", "do", "give"],
      answer: "take",
      difficulty: "easy",
      explanation: "Correct phrase is 'take a step'."
    },
  {
      phrase: "take action",
      meaning: "mengambil tindakan",
      example: "They took action.",
      question: "They ___ action.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "medium"
    },
  {
      phrase: "take advantage",
      meaning: "memanfaatkan",
      example: "Take advantage of this.",
      question: "You should ___ advantage of this.",
      options: ["take", "make", "do", "give"],
      answer: "take",
      difficulty: "medium"
    },
  {
      phrase: "take control",
      meaning: "mengambil kendali",
      example: "He took control.",
      question: "He ___ control.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "medium"
    },
  {
      phrase: "take into account",
      meaning: "mempertimbangkan",
      example: "We take it into account.",
      question: "We ___ it into account.",
      options: ["take", "make", "do", "give"],
      answer: "take",
      difficulty: "medium"
    },
  {
      phrase: "take into consideration",
      meaning: "mempertimbangkan",
      example: "We take it into consideration.",
      question: "We ___ it into consideration.",
      options: ["take", "make", "do", "give"],
      answer: "take",
      difficulty: "medium"
    },
  {
      phrase: "take notes",
      meaning: "mencatat",
      example: "He took notes.",
      question: "He ___ notes.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "easy"
    },
  {
      phrase: "take part",
      meaning: "ikut serta",
      example: "She took part.",
      question: "She ___ part in the event.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "easy"
    },
  {
      phrase: "take responsibility",
      meaning: "bertanggung jawab",
      example: "He took responsibility.",
      question: "He ___ responsibility.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      explanation: "We naturally say 'take responsibility'.",
      difficulty: "medium"
    },
  {
      phrase: "take steps",
      meaning: "mengambil langkah",
      example: "They took steps.",
      question: "They ___ steps to improve.",
      options: ["took", "made", "did", "gave"],
      answer: "took",
      difficulty: "medium"
    },
  {
      phrase: "undertake a task",
      meaning: "melakukan tugas besar",
      example: "She undertook the task.",
      question: "She ___ a task.",
      options: ["undertook", "made", "did", "took"],
      answer: "undertook",
      difficulty: "hard"
    }
];

const grammarData = [
  {
    name: "Present Simple",
    formula: "S + V1 (s/es)",
    explanation: "Used for habits and general truths.",
    example: "She studies every day."
  },
  {
    name: "Present Continuous",
    formula: "S + am/is/are + V-ing",
    explanation: "Used for actions happening now.",
    example: "She is studying now."
  },
  {
    name: "Present Perfect",
    formula: "S + have/has + V3",
    explanation: "Used for past actions with present relevance.",
    example: "She has finished her work."
  },
  {
    name: "Present Perfect Continuous",
    formula: "S + have/has + been + V-ing",
    explanation: "Used for actions started in the past and still continuing.",
    example: "She has been studying for 2 hours."
  },
  {
    name: "Past Simple",
    formula: "S + V2",
    explanation: "Used for completed actions in the past.",
    example: "She studied yesterday."
  },
  {
    name: "Past Continuous",
    formula: "S + was/were + V-ing",
    explanation: "Used for actions in progress in the past.",
    example: "She was studying at 8 PM."
  },
  {
    name: "Past Perfect",
    formula: "S + had + V3",
    explanation: "Used for actions completed before another past action.",
    example: "She had finished before he arrived."
  },
  {
    name: "Past Perfect Continuous",
    formula: "S + had been + V-ing",
    explanation: "Used for actions continuing up to a point in the past.",
    example: "She had been studying before the test."
  },
  {
    name: "Future Simple",
    formula: "S + will + V1",
    explanation: "Used for decisions and predictions.",
    example: "She will study tomorrow."
  },
  {
    name: "Future Continuous",
    formula: "S + will be + V-ing",
    explanation: "Used for actions that will be in progress in the future.",
    example: "She will be studying at 8 PM."
  },
  {
    name: "Future Perfect",
    formula: "S + will have + V3",
    explanation: "Used for actions completed before a future time.",
    example: "She will have finished by tomorrow."
  },
  {
    name: "Future Perfect Continuous",
    formula: "S + will have been + V-ing",
    explanation: "Used for duration before a future time.",
    example: "She will have been studying for 2 hours."
  },
  {
    name: "Past Future Simple",
    formula: "S + would + V1",
    explanation: "Future from the perspective of the past.",
    example: "She said she would come."
  },
  {
    name: "Past Future Continuous",
    formula: "S + would be + V-ing",
    explanation: "Ongoing future action seen from the past.",
    example: "She said she would be studying."
  },
  {
    name: "Past Future Perfect",
    formula: "S + would have + V3",
    explanation: "Completed future action seen from the past.",
    example: "She said she would have finished."
  },
  {
    name: "Past Future Perfect Continuous",
    formula: "S + would have been + V-ing",
    explanation: "Duration of action from past perspective.",
    example: "She said she would have been studying for hours."
  }
];

const grammarQuizData = [
  {
    tense: "Present Simple",
    question: "She ___ every day.",
    options: ["studies", "study", "studying", "studied"],
    answer: "studies",
    explanation: "Singular subject uses V+s."
  },
  {
    tense: "Present Simple",
    question: "They ___ football on weekends.",
    options: ["play", "plays", "playing", "played"],
    answer: "play",
    explanation: "Plural subject uses base verb."
  },
  {
    tense: "Present Simple",
    question: "He ___ coffee every morning.",
    options: ["drinks", "drink", "drinking", "drank"],
    answer: "drinks",
    explanation: "He/she/it uses V+s."
  },
  {
    tense: "Present Simple",
    question: "We ___ English at school.",
    options: ["learn", "learns", "learning", "learned"],
    answer: "learn",
    explanation: "Plural subject uses base verb."
  },
  {
    tense: "Present Simple",
    question: "The sun ___ in the east.",
    options: ["rises", "rise", "rising", "rose"],
    answer: "rises",
    explanation: "General truth uses present simple."
  },
  {
    tense: "Present Continuous",
    question: "She ___ now.",
    options: ["is studying", "studies", "study", "studied"],
    answer: "is studying",
    explanation: "Use am/is/are + V-ing."
  },
  {
    tense: "Present Continuous",
    question: "They ___ TV right now.",
    options: ["are watching", "watch", "watched", "watching"],
    answer: "are watching",
    explanation: "Ongoing action."
  },
  {
    tense: "Present Continuous",
    question: "He ___ a book.",
    options: ["is reading", "reads", "read", "reading"],
    answer: "is reading",
    explanation: "Present continuous form."
  },
  {
    tense: "Present Continuous",
    question: "We ___ dinner now.",
    options: ["are eating", "eat", "ate", "eating"],
    answer: "are eating",
    explanation: "Current activity."
  },
  {
    tense: "Present Continuous",
    question: "I ___ to music.",
    options: ["am listening", "listen", "listened", "listening"],
    answer: "am listening",
    explanation: "Use am + V-ing."
  },
  {
    tense: "Present Perfect",
    question: "She ___ finished her work.",
    options: ["has", "have", "had", "is"],
    answer: "has",
    explanation: "Present perfect uses has/have."
  },
  {
    tense: "Present Perfect",
    question: "They ___ gone home.",
    options: ["have", "has", "had", "are"],
    answer: "have",
    explanation: "Plural subject uses have."
  },
  {
    tense: "Present Perfect",
    question: "He ___ completed the task.",
    options: ["has", "have", "had", "was"],
    answer: "has",
    explanation: "He uses has."
  },
  {
    tense: "Present Perfect",
    question: "We ___ seen that movie.",
    options: ["have", "has", "had", "are"],
    answer: "have",
    explanation: "Plural subject."
  },
  {
    tense: "Present Perfect",
    question: "I ___ already eaten.",
    options: ["have", "has", "had", "am"],
    answer: "have",
    explanation: "I uses have."
  },
  {
    tense: "Present Perfect Continuous",
    question: "She ___ for 2 hours.",
    options: ["has been studying", "is studying", "studies", "studied"],
    answer: "has been studying",
    explanation: "Have/has + been + V-ing."
  },
  {
    tense: "Present Perfect Continuous",
    question: "They ___ all day.",
    options: ["have been working", "are working", "worked", "work"],
    answer: "have been working",
    explanation: "Ongoing duration."
  },
  {
    tense: "Present Perfect Continuous",
    question: "He ___ since morning.",
    options: ["has been running", "runs", "ran", "running"],
    answer: "has been running",
    explanation: "Duration from past."
  },
  {
    tense: "Present Perfect Continuous",
    question: "We ___ for hours.",
    options: ["have been talking", "talk", "talked", "talking"],
    answer: "have been talking",
    explanation: "Continuous duration."
  },
  {
    tense: "Present Perfect Continuous",
    question: "I ___ too much lately.",
    options: ["have been eating", "eat", "ate", "eating"],
    answer: "have been eating",
    explanation: "Recent ongoing activity."
  },
  {
    tense: "Past Simple",
    question: "She ___ yesterday.",
    options: ["studied", "study", "studies", "studying"],
    answer: "studied",
    explanation: "Past simple uses V2."
  },
  {
    tense: "Past Simple",
    question: "They ___ last night.",
    options: ["played", "play", "plays", "playing"],
    answer: "played",
    explanation: "Past event."
  },
  {
    tense: "Past Simple",
    question: "He ___ a book.",
    options: ["read", "reads", "reading", "reads"],
    answer: "read",
    explanation: "Past form of read."
  },
  {
    tense: "Past Simple",
    question: "We ___ home early.",
    options: ["went", "go", "going", "goes"],
    answer: "went",
    explanation: "Irregular verb."
  },
  {
    tense: "Past Simple",
    question: "I ___ him yesterday.",
    options: ["met", "meet", "meets", "meeting"],
    answer: "met",
    explanation: "Past simple."
  },
  {
    tense: "Past Continuous",
    question: "She ___ when I called.",
    options: ["was studying", "studied", "study", "studies"],
    answer: "was studying",
    explanation: "Past continuous."
  },
  {
    tense: "Past Continuous",
    question: "They ___ TV at 8 PM.",
    options: ["were watching", "watch", "watched", "watching"],
    answer: "were watching",
    explanation: "Ongoing past."
  },
  {
    tense: "Past Continuous",
    question: "He ___ a book.",
    options: ["was reading", "reads", "read", "reading"],
    answer: "was reading",
    explanation: "Past continuous."
  },
  {
    tense: "Past Continuous",
    question: "We ___ dinner.",
    options: ["were eating", "eat", "ate", "eating"],
    answer: "were eating",
    explanation: "Ongoing action."
  },
  {
    tense: "Past Continuous",
    question: "I ___ music.",
    options: ["was listening", "listen", "listened", "listening"],
    answer: "was listening",
    explanation: "Past continuous."
  },
  {
    tense: "Past Perfect",
    question: "She ___ before he arrived.",
    options: ["had finished", "has finished", "finished", "finishes"],
    answer: "had finished",
    explanation: "Past perfect = earlier past."
  },
  {
    tense: "Past Perfect",
    question: "They ___ before the test.",
    options: ["had studied", "study", "studied", "studying"],
    answer: "had studied",
    explanation: "Earlier action."
  },
  {
    tense: "Past Perfect",
    question: "He ___ already left.",
    options: ["had", "has", "have", "is"],
    answer: "had",
    explanation: "Past perfect uses had."
  },
  {
    tense: "Past Perfect",
    question: "We ___ dinner before 8.",
    options: ["had eaten", "eat", "ate", "eating"],
    answer: "had eaten",
    explanation: "Earlier past."
  },
  {
    tense: "Past Perfect",
    question: "I ___ him before.",
    options: ["had seen", "see", "saw", "seeing"],
    answer: "had seen",
    explanation: "Past perfect."
  },
  {
    tense: "Future Simple",
    question: "She ___ tomorrow.",
    options: ["will study", "studies", "study", "studied"],
    answer: "will study",
    explanation: "Future uses will + V1."
  },
  {
    tense: "Future Simple",
    question: "They ___ later.",
    options: ["will come", "come", "came", "coming"],
    answer: "will come",
    explanation: "Future simple."
  },
  {
    tense: "Future Simple",
    question: "He ___ the task.",
    options: ["will finish", "finishes", "finish", "finished"],
    answer: "will finish",
    explanation: "Future prediction."
  },
  {
    tense: "Future Simple",
    question: "We ___ soon.",
    options: ["will leave", "leave", "left", "leaving"],
    answer: "will leave",
    explanation: "Future."
  },
  {
    tense: "Future Simple",
    question: "I ___ you.",
    options: ["will call", "call", "called", "calling"],
    answer: "will call",
    explanation: "Future simple."
  },
  {
    tense: "Past Perfect Continuous",
    question: "She ___ before the exam.",
    options: ["had been studying", "was studying", "studied", "studies"],
    answer: "had been studying",
    explanation: "Past perfect continuous = had been + V-ing."
  },
  {
    tense: "Past Perfect Continuous",
    question: "They ___ for hours before dinner.",
    options: ["had been working", "were working", "worked", "work"],
    answer: "had been working",
    explanation: "This tense shows duration before another past event."
  },
  {
    tense: "Past Perfect Continuous",
    question: "He ___ all night.",
    options: ["had been sleeping", "was sleeping", "slept", "sleep"],
    answer: "had been sleeping",
    explanation: "Had been + V-ing expresses ongoing past duration."
  },
  {
    tense: "Past Perfect Continuous",
    question: "We ___ before it rained.",
    options: ["had been walking", "were walking", "walked", "walk"],
    answer: "had been walking",
    explanation: "The action continued up to another moment in the past."
  },
  {
    tense: "Past Perfect Continuous",
    question: "I ___ before you came.",
    options: ["had been waiting", "was waiting", "waited", "wait"],
    answer: "had been waiting",
    explanation: "Past perfect continuous emphasizes ongoing action before another past event."
  },
  {
    tense: "Future Continuous",
    question: "She ___ at 8 PM.",
    options: ["will be studying", "will study", "studies", "studied"],
    answer: "will be studying",
    explanation: "Future continuous uses will be + V-ing."
  },
  {
    tense: "Future Continuous",
    question: "They ___ tomorrow evening.",
    options: ["will be traveling", "travel", "traveled", "travels"],
    answer: "will be traveling",
    explanation: "This tense shows an action in progress at a future time."
  },
  {
    tense: "Future Continuous",
    question: "He ___ at this time tomorrow.",
    options: ["will be working", "works", "worked", "working"],
    answer: "will be working",
    explanation: "Use will be + V-ing for future ongoing activity."
  },
  {
    tense: "Future Continuous",
    question: "We ___ dinner at 7.",
    options: ["will be eating", "eat", "ate", "eating"],
    answer: "will be eating",
    explanation: "This describes something in progress at a future time."
  },
  {
    tense: "Future Continuous",
    question: "I ___ when you arrive.",
    options: ["will be sleeping", "sleep", "slept", "sleeping"],
    answer: "will be sleeping",
    explanation: "Future continuous describes an ongoing future action."
  },
  {
    tense: "Future Perfect",
    question: "She ___ by tomorrow.",
    options: ["will have finished", "will finish", "finishes", "finished"],
    answer: "will have finished",
    explanation: "Future perfect uses will have + V3."
  },
  {
    tense: "Future Perfect",
    question: "They ___ before noon.",
    options: ["will have left", "leave", "left", "leaving"],
    answer: "will have left",
    explanation: "This tense describes completion before a future time."
  },
  {
    tense: "Future Perfect",
    question: "He ___ the work by then.",
    options: ["will have done", "does", "did", "doing"],
    answer: "will have done",
    explanation: "Future perfect focuses on completed future actions."
  },
  {
    tense: "Future Perfect",
    question: "We ___ by next week.",
    options: ["will have completed", "complete", "completed", "completing"],
    answer: "will have completed",
    explanation: "Use will have + past participle."
  },
  {
    tense: "Future Perfect",
    question: "I ___ by 5 PM.",
    options: ["will have arrived", "arrive", "arrived", "arriving"],
    answer: "will have arrived",
    explanation: "This action will be complete before 5 PM."
  },
  {
    tense: "Future Perfect Continuous",
    question: "She ___ for 2 hours by 6 PM.",
    options: ["will have been studying", "will study", "studies", "studied"],
    answer: "will have been studying",
    explanation: "Future perfect continuous uses will have been + V-ing."
  },
  {
    tense: "Future Perfect Continuous",
    question: "They ___ all day.",
    options: ["will have been working", "work", "worked", "working"],
    answer: "will have been working",
    explanation: "This tense emphasizes duration up to a future point."
  },
  {
    tense: "Future Perfect Continuous",
    question: "He ___ for hours.",
    options: ["will have been running", "runs", "ran", "running"],
    answer: "will have been running",
    explanation: "Use will have been + V-ing."
  },
  {
    tense: "Future Perfect Continuous",
    question: "We ___ for a long time.",
    options: ["will have been waiting", "wait", "waited", "waiting"],
    answer: "will have been waiting",
    explanation: "This focuses on duration before a future moment."
  },
  {
    tense: "Future Perfect Continuous",
    question: "I ___ by then.",
    options: ["will have been studying", "study", "studied", "studying"],
    answer: "will have been studying",
    explanation: "The action continues up to a future reference point."
  },
  {
    tense: "Past Future Simple",
    question: "She said she ___ come.",
    options: ["would", "will", "comes", "came"],
    answer: "would",
    explanation: "Past future simple uses would + V1."
  },
  {
    tense: "Past Future Simple",
    question: "They said they ___ help.",
    options: ["would", "will", "help", "helped"],
    answer: "would",
    explanation: "This expresses future from a past viewpoint."
  },
  {
    tense: "Past Future Simple",
    question: "He said he ___ go.",
    options: ["would", "will", "goes", "went"],
    answer: "would",
    explanation: "Would is used for future-in-the-past."
  },
  {
    tense: "Past Future Simple",
    question: "We thought we ___ win.",
    options: ["would", "will", "win", "won"],
    answer: "would",
    explanation: "Past future simple uses would."
  },
  {
    tense: "Past Future Simple",
    question: "I knew she ___ arrive.",
    options: ["would", "will", "arrives", "arrived"],
    answer: "would",
    explanation: "This structure shows future from a past perspective."
  },
  {
    tense: "Past Future Continuous",
    question: "She said she ___ studying.",
    options: ["would be", "will be", "is", "was"],
    answer: "would be",
    explanation: "Past future continuous uses would be + V-ing."
  },
  {
    tense: "Past Future Continuous",
    question: "They said they ___ working.",
    options: ["would be", "will be", "are", "were"],
    answer: "would be",
    explanation: "This shows an ongoing future action seen from the past."
  },
  {
    tense: "Past Future Continuous",
    question: "He said he ___ traveling.",
    options: ["would be", "will be", "is", "was"],
    answer: "would be",
    explanation: "Would be + V-ing is the correct form."
  },
  {
    tense: "Past Future Continuous",
    question: "We thought we ___ waiting.",
    options: ["would be", "will be", "are", "were"],
    answer: "would be",
    explanation: "This expresses continuous future from the past."
  },
  {
    tense: "Past Future Continuous",
    question: "I knew she ___ sleeping.",
    options: ["would be", "will be", "is", "was"],
    answer: "would be",
    explanation: "The form is would be + V-ing."
  },
  {
    tense: "Past Future Perfect",
    question: "She said she ___ finished.",
    options: ["would have", "will have", "has", "had"],
    answer: "would have",
    explanation: "Past future perfect uses would have + V3."
  },
  {
    tense: "Past Future Perfect",
    question: "They said they ___ completed it.",
    options: ["would have", "will have", "have", "had"],
    answer: "would have",
    explanation: "This shows completed future action from a past perspective."
  },
  {
    tense: "Past Future Perfect",
    question: "He thought he ___ done it.",
    options: ["would have", "will have", "has", "had"],
    answer: "would have",
    explanation: "Use would have for future perfect in the past."
  },
  {
    tense: "Past Future Perfect",
    question: "We believed we ___ won.",
    options: ["would have", "will have", "have", "had"],
    answer: "would have",
    explanation: "This expresses completion relative to a past viewpoint."
  },
  {
    tense: "Past Future Perfect",
    question: "I knew she ___ left.",
    options: ["would have", "will have", "has", "had"],
    answer: "would have",
    explanation: "Past future perfect uses would have."
  },
  {
    tense: "Past Future Perfect Continuous",
    question: "She said she ___ studying.",
    options: ["would have been", "will have been", "has been", "had been"],
    answer: "would have been",
    explanation: "This tense uses would have been + V-ing."
  },
  {
    tense: "Past Future Perfect Continuous",
    question: "They said they ___ working.",
    options: ["would have been", "will have been", "have been", "had been"],
    answer: "would have been",
    explanation: "It shows duration from a past future perspective."
  },
  {
    tense: "Past Future Perfect Continuous",
    question: "He thought he ___ running.",
    options: ["would have been", "will have been", "has been", "had been"],
    answer: "would have been",
    explanation: "The correct form is would have been + V-ing."
  },
  {
    tense: "Past Future Perfect Continuous",
    question: "We believed we ___ waiting.",
    options: ["would have been", "will have been", "have been", "had been"],
    answer: "would have been",
    explanation: "This describes duration seen from a past point of view."
  },
  {
    tense: "Past Future Perfect Continuous",
    question: "I knew she ___ studying.",
    options: ["would have been", "will have been", "has been", "had been"],
    answer: "would have been",
    explanation: "Past future perfect continuous uses would have been + V-ing."
  },
  {
    tense: "Present Simple",
    question: "She ___ every morning.",
    options: ["runs", "run", "running", "ran"],
    answer: "runs"
  },
  {
    tense: "Present Continuous",
    question: "They ___ now.",
    options: ["are studying", "study", "studied", "studying"],
    answer: "are studying"
  },
  {
    tense: "Present Perfect",
    question: "He ___ finished.",
    options: ["has", "have", "had", "is"],
    answer: "has"
  },
  {
    tense: "Past Simple",
    question: "She ___ yesterday.",
    options: ["left", "leave", "leaves", "leaving"],
    answer: "left"
  },
  {
    tense: "Past Continuous",
    question: "They ___ at 9 PM.",
    options: ["were working", "work", "worked", "working"],
    answer: "were working"
  },
  {
    tense: "Past Perfect",
    question: "He ___ before I arrived.",
    options: ["had left", "has left", "left", "leaves"],
    answer: "had left"
  },
  {
    tense: "Future Simple",
    question: "She ___ tomorrow.",
    options: ["will go", "go", "goes", "went"],
    answer: "will go"
  },
  {
    tense: "Future Continuous",
    question: "They ___ at 8 PM.",
    options: ["will be working", "work", "worked", "working"],
    answer: "will be working"
  },
  {
    tense: "Future Perfect",
    question: "He ___ by then.",
    options: ["will have finished", "will finish", "finishes", "finished"],
    answer: "will have finished"
  },
  {
    tense: "Past Future",
    question: "She said she ___ come.",
    options: ["would", "will", "comes", "came"],
    answer: "would"
  },
  {
    tense: "Present Perfect",
    question: "She ___ here since 2020.",
    options: ["has lived", "lives", "lived", "living"],
    answer: "has lived"
  },
  {
    tense: "Past Perfect",
    question: "He ___ before I arrived.",
    options: ["had left", "has left", "left", "leaves"],
    answer: "had left"
  },
  {
    tense: "Present Continuous",
    question: "They ___ right now.",
    options: ["are working", "work", "worked", "working"],
    answer: "are working"
  },
  {
    tense: "Future Perfect",
    question: "She ___ by tomorrow.",
    options: ["will have finished", "will finish", "finishes", "finished"],
    answer: "will have finished"
  },
  {
    tense: "Past Continuous",
    question: "I ___ when you called.",
    options: ["was sleeping", "slept", "sleep", "sleeping"],
    answer: "was sleeping"
  },
  {
    tense: "Future Continuous",
    question: "They ___ at 9 PM.",
    options: ["will be studying", "study", "studied", "studying"],
    answer: "will be studying"
  },
  {
    tense: "Present Simple",
    question: "Water ___ at 100°C.",
    options: ["boils", "boil", "boiled", "boiling"],
    answer: "boils"
  },
  {
    tense: "Past Simple",
    question: "She ___ the book yesterday.",
    options: ["read", "reads", "reading", "has read"],
    answer: "read"
  },
  {
    tense: "Present Perfect Continuous",
    question: "He ___ for hours.",
    options: ["has been working", "is working", "worked", "works"],
    answer: "has been working"
  },
  {
    tense: "Future Simple",
    question: "I ___ call you later.",
    options: ["will", "am", "was", "have"],
    answer: "will"
  },
  {
    tense: "Present Simple",
    question: "She usually ___ at 7 AM.",
    options: ["wakes", "wake", "woke", "waking"],
    answer: "wakes"
  },
  {
    tense: "Present Continuous",
    question: "They ___ dinner now.",
    options: ["are eating", "eat", "ate", "eating"],
    answer: "are eating"
  },
  {
    tense: "Present Perfect",
    question: "He ___ finished his work.",
    options: ["has", "have", "had", "is"],
    answer: "has"
  },
  {
    tense: "Past Simple",
    question: "She ___ to school yesterday.",
    options: ["went", "go", "goes", "going"],
    answer: "went"
  },
  {
    tense: "Past Continuous",
    question: "They ___ when I arrived.",
    options: ["were talking", "talk", "talked", "talking"],
    answer: "were talking"
  },
  {
    tense: "Past Perfect",
    question: "He ___ before she came.",
    options: ["had left", "has left", "left", "leaves"],
    answer: "had left"
  },
  {
    tense: "Future Simple",
    question: "I ___ visit you tomorrow.",
    options: ["will", "am", "was", "have"],
    answer: "will"
  },
  {
    tense: "Future Continuous",
    question: "She ___ at this time tomorrow.",
    options: ["will be studying", "studies", "studied", "studying"],
    answer: "will be studying"
  },
  {
    tense: "Future Perfect",
    question: "They ___ by next week.",
    options: ["will have completed", "will complete", "complete", "completed"],
    answer: "will have completed"
  },
  {
    tense: "Present Perfect Continuous",
    question: "She ___ for two hours.",
    options: ["has been working", "is working", "worked", "works"],
    answer: "has been working"
  },
  {
    tense: "Present Perfect",
    question: "She ___ her homework already.",
    options: ["has finished", "finished", "finishes", "finishing"],
    answer: "has finished"
  },
  {
    tense: "Past Perfect",
    question: "They ___ before we arrived.",
    options: ["had eaten", "have eaten", "ate", "eating"],
    answer: "had eaten"
  },
  {
    tense: "Present Continuous",
    question: "He ___ for the test now.",
    options: ["is studying", "studies", "studied", "studying"],
    answer: "is studying"
  },
  {
    tense: "Future Perfect",
    question: "By next year, she ___ her degree.",
    options: ["will have completed", "will complete", "completes", "completed"],
    answer: "will have completed"
  },
  {
    tense: "Past Continuous",
    question: "I ___ when the phone rang.",
    options: ["was reading", "read", "reads", "reading"],
    answer: "was reading"
  },
  {
    tense: "Future Continuous",
    question: "They ___ at this time tomorrow.",
    options: ["will be traveling", "travel", "traveled", "traveling"],
    answer: "will be traveling"
  },
  {
    tense: "Present Simple",
    question: "He ___ coffee every morning.",
    options: ["drinks", "drink", "drank", "drinking"],
    answer: "drinks"
  },
  {
    tense: "Past Simple",
    question: "She ___ the answer correctly.",
    options: ["gave", "gives", "giving", "given"],
    answer: "gave"
  },
  {
    tense: "Present Perfect Continuous",
    question: "They ___ for three hours.",
    options: ["have been waiting", "are waiting", "waited", "wait"],
    answer: "have been waiting"
  },
  {
    tense: "Future Simple",
    question: "I ___ help you later.",
    options: ["will", "am", "was", "have"],
    answer: "will"
  },
  {
    tense: "Present Perfect vs Past Simple",
    question: "I ___ him yesterday.",
    options: ["met", "have met", "meet", "meeting"],
    answer: "met"
  },
  {
    tense: "Present Perfect",
    question: "I ___ him before.",
    options: ["have met", "met", "meet", "meeting"],
    answer: "have met"
  },
  {
    tense: "Past Perfect",
    question: "She ___ before the meeting started.",
    options: ["had left", "has left", "left", "leaves"],
    answer: "had left"
  },
  {
    tense: "Future Perfect",
    question: "By next week, they ___ the project.",
    options: ["will have completed", "will complete", "complete", "completed"],
    answer: "will have completed"
  },
  {
    tense: "Present Perfect Continuous",
    question: "She ___ for two hours.",
    options: ["has been studying", "studied", "studies", "study"],
    answer: "has been studying"
  },
  {
    tense: "Past Continuous vs Past Simple",
    question: "I ___ when the phone rang.",
    options: ["was sleeping", "slept", "sleep", "sleeping"],
    answer: "was sleeping"
  },
  {
    tense: "Future Continuous",
    question: "At 9 PM, they ___ dinner.",
    options: ["will be having", "have", "had", "having"],
    answer: "will be having"
  },
  {
    tense: "Present Simple vs Continuous",
    question: "She usually ___ coffee, but today she ___ tea.",
    options: ["drinks / is drinking", "drink / drinks", "drinking / drinks", "drinks / drinks"],
    answer: "drinks / is drinking"
  },
  {
    tense: "Past Perfect vs Past Simple",
    question: "After he ___, we started.",
    options: ["had arrived", "arrived", "arrives", "arriving"],
    answer: "had arrived"
  },
  {
    tense: "Future Simple vs Be Going To",
    question: "Look at the clouds! It ___ rain.",
    options: ["is going to", "will", "was", "has"],
    answer: "is going to"
  }
];

let currentIndex = 0;
let filteredVocabulary = [...vocabularyData];
let currentDifficulty = "all";
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let collocationIndex = 0;
let filteredCollocations = [...collocationData];
let currentCollocationDifficulty = "all";
let colQuiz = [];
let colQIndex = 0;
let colScore = 0;
let colUserAnswers = [];
let grammarQuiz = [];
let grammarIndex = 0;
let grammarScore = 0;
let grammarAnswers = [];
let currentTense = null;
let isMixedMode = false;

const STORAGE_KEYS = {
  streak: "sb_streak",
  lastDate: "sb_last_date",
  stats: "sb_stats",
  recent: "sb_recent",
  totalDone: "sb_total_done"
};

function initStats() {
  if (!localStorage.getItem(STORAGE_KEYS.stats)) {
    localStorage.setItem(
      STORAGE_KEYS.stats,
      JSON.stringify({
        vocabulary: { correct: 0, total: 0 },
        grammar: { correct: 0, total: 0 },
        collocation: { correct: 0, total: 0 }
      })
    );
  }

  if (!localStorage.getItem(STORAGE_KEYS.recent)) {
    localStorage.setItem(STORAGE_KEYS.recent, JSON.stringify([]));
  }
}

function updateStreak() {
  const today = new Date().toDateString();
  const lastDate = localStorage.getItem(STORAGE_KEYS.lastDate);
  let streak = parseInt(localStorage.getItem(STORAGE_KEYS.streak), 10) || 0;

  if (!lastDate) {
    streak = 1;
  } else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate === today) {
      return streak;
    } else if (lastDate === yesterday.toDateString()) {
      streak += 1;
    } else {
      streak = 1;
    }
  }

  localStorage.setItem(STORAGE_KEYS.streak, String(streak));
  localStorage.setItem(STORAGE_KEYS.lastDate, today);
  return streak;
}

function updateProgress(type, isCorrect) {
  const stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.stats));
  if (!stats[type]) {
    return;
  }

  stats[type].total += 1;
  if (isCorrect) {
    stats[type].correct += 1;
  }

  localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(stats));
}

function getProgressPercent(type) {
  const stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.stats));
  const data = stats[type];

  if (!data || data.total === 0) {
    return 0;
  }

  return Math.round((data.correct / data.total) * 100);
}

function recordRecentPerformance(label, scoreValue, totalValue) {
  const recent = JSON.parse(localStorage.getItem(STORAGE_KEYS.recent));
  recent.unshift({ label, score: scoreValue, total: totalValue });
  localStorage.setItem(STORAGE_KEYS.recent, JSON.stringify(recent.slice(0, 3)));
}

function updateTotalExercises(count) {
  const total = parseInt(localStorage.getItem(STORAGE_KEYS.totalDone), 10) || 0;
  localStorage.setItem(STORAGE_KEYS.totalDone, String(total + count));
}

function getTotalExercises() {
  return parseInt(localStorage.getItem(STORAGE_KEYS.totalDone), 10) || 0;
}

function renderRecentPerformance() {
  const recentEl = document.getElementById("recentPerformance");
  if (!recentEl) {
    return;
  }

  const recent = JSON.parse(localStorage.getItem(STORAGE_KEYS.recent));
  if (!recent.length) {
    recentEl.innerHTML = `
      <div class="recent-item">
        <span>No quiz history yet</span>
        <strong>--</strong>
      </div>
    `;
    return;
  }

  recentEl.innerHTML = recent
    .map(
      (item) => `
      <div class="recent-item">
        <span>${item.label}</span>
        <strong>${item.score}/${item.total}</strong>
      </div>
    `
    )
    .join("");
}

function renderProgressUI() {
  const streak = parseInt(localStorage.getItem(STORAGE_KEYS.streak), 10) || 0;
  const vocab = getProgressPercent("vocabulary");
  const grammar = getProgressPercent("grammar");
  const collocation = getProgressPercent("collocation");

  const streakEl = document.getElementById("streakCount");
  if (streakEl) {
    streakEl.innerText = streak ? "🔥 ".repeat(Math.min(streak, 7)).trim() : "🔥";
  }

  const vocabEl = document.getElementById("vocabPercent");
  const grammarEl = document.getElementById("grammarPercent");
  const collEl = document.getElementById("collPercent");
  if (vocabEl) {
    vocabEl.innerText = `${vocab}% complete`;
  }
  if (grammarEl) {
    grammarEl.innerText = `${grammar}% complete`;
  }
  if (collEl) {
    collEl.innerText = `${collocation}% complete`;
  }

  const vocabBar = document.getElementById("vocabBar");
  const grammarBar = document.getElementById("grammarBar");
  const collBar = document.getElementById("collBar");
  if (vocabBar) {
    vocabBar.style.width = `${vocab}%`;
  }
  if (grammarBar) {
    grammarBar.style.width = `${grammar}%`;
  }
  if (collBar) {
    collBar.style.width = `${collocation}%`;
  }

  renderRecentPerformance();
}

function getDayIndex() {
  const start = new Date("2025-01-01");
  const today = new Date();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return diff % QUOTES.length;
}

function renderDailyQuote() {
  const quoteEl = document.getElementById("dailyQuote");
  if (!quoteEl) {
    return;
  }

  const firstVisit = !localStorage.getItem("sb_first_visit");
  if (firstVisit) {
    quoteEl.innerText = QUOTES[0];
    localStorage.setItem("sb_first_visit", "true");
    return;
  }

  const index = getDayIndex();
  quoteEl.innerText = QUOTES[index];
}

function getHourIndex() {
  const now = new Date();
  return now.getHours() % UTBK_TIPS.length;
}

function renderUTBKTip() {
  const tipEl = document.getElementById("utbkTip");
  if (!tipEl) {
    return;
  }

  const index = getHourIndex();
  tipEl.innerText = `"${UTBK_TIPS[index]}"`;
}

function startUTBKRotation() {
  renderUTBKTip();

  window.setInterval(() => {
    renderUTBKTip();
  }, 1000 * 60 * 60);
}

function openDBPopup() {
  const popup = document.getElementById("dbPopup");
  if (!popup) {
    return;
  }

  document.getElementById("dbVocab").innerText = vocabularyData?.length || 0;
  document.getElementById("dbColl").innerText = collocationData?.length || 0;
  document.getElementById("dbGrammar").innerText = grammarQuizData?.length || 0;
  popup.hidden = false;
}

function closeDBPopup() {
  const popup = document.getElementById("dbPopup");
  if (popup) {
    popup.hidden = true;
  }
}

function renderHomeStats() {
  const streak = parseInt(localStorage.getItem(STORAGE_KEYS.streak), 10) || 0;
  const total = getTotalExercises();

  const streakText = document.getElementById("homeStreakText");
  const exercisesText = document.getElementById("homeExercisesText");

  if (streakText) {
    streakText.innerText = `${streak} day streak`;
  }

  if (exercisesText) {
    exercisesText.innerText = `${total} exercises done`;
  }
}

function showPage(pageId) {
  const pages = ["landingPage", "vocabPage", "grammarPage", "collocationPage"];

  pages.forEach((id) => {
    document.getElementById(id).style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";

  if (pageId === "vocabPage") {
    showCard();
  }

  if (pageId === "collocationPage") {
    showCollocation();
  }

  if (pageId === "grammarPage") {
    renderGrammarList();
    showGrammar(0);
  }
}

function showCard() {
  const card = document.getElementById("card");

  if (filteredVocabulary.length === 0) {
    card.innerHTML = "No words available for this level.";
    return;
  }

  const word = filteredVocabulary[currentIndex];
  const difficultyTone =
    word.difficulty === "hard"
      ? "background:#eed6d7;color:#8d545d;"
      : word.difficulty === "medium"
        ? "background:#efe0bc;color:#7b6525;"
        : "background:#dde8ce;color:#546742;";

  card.innerHTML = `
    <h2>
      ${word.word}
      <button class="speak-button" onclick="speakWord('${word.word}')" aria-label="Speak ${word.word}">
        🔊
      </button>
    </h2>
    <p>${word.meaning}</p>
    <i>${word.example}</i>
    <br><br>
    <small style="${difficultyTone}">Level: ${word.difficulty}</small>
    ${
      word.confusion
        ? `<div class="confusion-note">⚠️ Often confused with: <strong>${word.confusion}</strong></div>`
        : ""
    }
  `;

  card.animate(
    [
      { opacity: 0, transform: "scale(0.985)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    {
      duration: 260,
      easing: "ease",
      fill: "forwards"
    }
  );
}

function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}

function speakCollocation(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function nextCard() {
  if (filteredVocabulary.length === 0) {
    return;
  }

  currentIndex = (currentIndex + 1) % filteredVocabulary.length;
  showCard();
}

function prevCard() {
  if (filteredVocabulary.length === 0) {
    return;
  }

  currentIndex =
    (currentIndex - 1 + filteredVocabulary.length) % filteredVocabulary.length;
  showCard();
}

function shuffleCard() {
  if (filteredVocabulary.length === 0) {
    return;
  }

  currentIndex = Math.floor(Math.random() * filteredVocabulary.length);
  showCard();
}

function setDifficulty(level) {
  currentDifficulty = level;

  if (level === "all") {
    filteredVocabulary = [...vocabularyData];
  } else {
    filteredVocabulary = vocabularyData.filter((item) => item.difficulty === level);
  }

  currentIndex = 0;
  updateDifficultyUI(level);
  showCard();

  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = "";
}

function updateDifficultyUI(level) {
  document.querySelectorAll("#vocabularyDifficulty button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const selected = document.querySelector(
    `#vocabularyDifficulty [onclick="setDifficulty('${level}')"]`
  );
  if (selected) {
    selected.classList.add("active");
  }
}

function setCollocationDifficulty(level) {
  currentCollocationDifficulty = level;

  if (level === "all") {
    filteredCollocations = [...collocationData];
  } else {
    filteredCollocations = collocationData.filter((c) => c.difficulty === level);
  }

  collocationIndex = 0;
  updateCollocationDifficultyUI(level);
  showCollocation();
  document.getElementById("colQuizContainer").innerHTML = "";
}

function updateCollocationDifficultyUI(level) {
  document.querySelectorAll("#collocationSection .difficulty button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const selected = document.querySelector(
    `#collocationSection [onclick="setCollocationDifficulty('${level}')"]`
  );

  if (selected) {
    selected.classList.add("active");
  }
}

function showCollocation() {
  const card = document.getElementById("collocationCard");

  if (!filteredCollocations.length) {
    card.innerHTML = "No collocations available.";
    return;
  }

  const c = filteredCollocations[collocationIndex];
  const difficultyTone =
    c.difficulty === "hard"
      ? "background:#eed6d7;color:#8d545d;"
      : c.difficulty === "medium"
        ? "background:#efe0bc;color:#7b6525;"
        : "background:#dde8ce;color:#546742;";

  card.innerHTML = `
    <h2>
      ${c.phrase}
      <button class="speak-button" onclick="speakCollocation('${c.phrase.replace(/'/g, "\\'")}')" aria-label="Speak ${c.phrase}">
        🔊
      </button>
    </h2>
    <p>${c.meaning}</p>
    <i>${c.example}</i>
    <br><br>
    <small style="${difficultyTone}">Level: ${c.difficulty}</small>
  `;

  card.animate(
    [
      { opacity: 0, transform: "scale(0.985)" },
      { opacity: 1, transform: "scale(1)" }
    ],
    {
      duration: 260,
      easing: "ease",
      fill: "forwards"
    }
  );
}

function nextCollocation() {
  if (!filteredCollocations.length) {
    return;
  }

  collocationIndex = (collocationIndex + 1) % filteredCollocations.length;
  showCollocation();
}

function prevCollocation() {
  if (!filteredCollocations.length) {
    return;
  }

  collocationIndex =
    (collocationIndex - 1 + filteredCollocations.length) % filteredCollocations.length;
  showCollocation();
}

function shuffleCollocation() {
  if (!filteredCollocations.length) {
    return;
  }

  collocationIndex = Math.floor(Math.random() * filteredCollocations.length);
  showCollocation();
}

function startCollocationQuiz() {
  if (filteredCollocations.length < 5) {
    document.getElementById("colQuizContainer").innerHTML =
      "Not enough collocations for this quiz level yet.";
    return;
  }

  colQuiz = [...filteredCollocations].sort(() => 0.5 - Math.random()).slice(0, 5);
  colQIndex = 0;
  colScore = 0;
  colUserAnswers = [];

  showCollocationQuestion();
}

function startColQuiz() {
  startCollocationQuiz();
}

function showCollocationQuestion() {
  const q = colQuiz[colQIndex];

  document.getElementById("colQuizContainer").innerHTML = `
    <div class="card">
      <h3>Question ${colQIndex + 1}/5</h3>
      <p style="margin:12px 0;">${q.question}</p>
      <div class="options">
        ${q.options
          .map(
            (opt) => `
          <button class="option-btn" onclick="answerCollocation('${opt.replace(/'/g, "\\'")}')">
            ${opt}
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function showColQuestion() {
  showCollocationQuestion();
}

function answerCollocation(choice) {
  const q = colQuiz[colQIndex];
  const buttons = document.querySelectorAll("#colQuizContainer .option-btn");
  const isCorrect = choice === q.answer;

  if (isCorrect) {
    colScore++;
  }

  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  buttons.forEach((btn) => {
    const text = btn.innerText;

    if (text === q.answer) {
      btn.style.backgroundColor = "#4CAF50";
      btn.style.color = "white";
    }

    if (text === choice && choice !== q.answer) {
      btn.style.backgroundColor = "#e74c3c";
      btn.style.color = "white";
    }
  });

  colUserAnswers.push({
    question: q.question,
    selected: choice,
    correct: q.answer,
    explanation: q.explanation || "",
    isCorrect
  });

  window.setTimeout(() => {
    colQIndex++;

    if (colQIndex < colQuiz.length) {
      showCollocationQuestion();
    } else {
      showCollocationResult();
    }
  }, 900);
}

function answerCol(selected) {
  answerCollocation(selected);
}

function showCollocationResult() {
  updateStreak();
  colUserAnswers.forEach((item) => {
    updateProgress("collocation", item.isCorrect);
  });
  updateTotalExercises(colQuiz.length || 0);
  recordRecentPerformance("Collocation Quiz", colScore, colQuiz.length || 5);

  let feedback = "";

  if (colScore === 5) {
    feedback = "Okay… you’re kind of dangerous 🔥";
  } else if (colScore >= 3) {
    feedback = "Not bad. You’re getting there.";
  } else {
    feedback = "It’s okay—this is fixable.";
  }

  document.getElementById("colQuizContainer").innerHTML = `
    <div class="card">
      <h2>Your Score: ${colScore}/5</h2>
      <p>${feedback}</p>
      <div style="text-align:left; margin-top:20px;">
        ${colUserAnswers
          .map((item, index) => {
            if (!item.isCorrect) {
              return `
          <div style="margin-bottom:16px;">
            <p style="color:#e74c3c;"><strong>Q${index + 1}: ${item.question}</strong></p>
            <p style="color:#e74c3c;">Your answer: ${item.selected}</p>
            <p style="color:#4CAF50;">Correct answer: ${item.correct}</p>
            <p><em>${item.explanation}</em></p>
          </div>
        `;
            }

            return `
          <div style="margin-bottom:16px;">
            <p><strong>Q${index + 1}: ${item.question}</strong></p>
            <p>Your answer: ${item.selected}</p>
          </div>
        `;
          })
          .join("")}
      </div>
      <button class="flashcard-button flashcard-button-primary" onclick="startCollocationQuiz()">
        Try Again
      </button>
    </div>
  `;

  renderProgressUI();
  renderHomeStats();
}

function showColResult() {
  showCollocationResult();
}

function renderGrammarList() {
  const container = document.getElementById("grammarList");

  container.innerHTML = grammarData
    .map(
      (g, i) => `
    <button onclick="showGrammar(${i})">${g.name}</button>
  `
    )
    .join("");
}

function showGrammar(index) {
  const g = grammarData[index];
  currentTense = g.name;

  document.getElementById("grammarContent").innerHTML = `
    <h3>${g.name}</h3>
    <p><strong>Formula:</strong> ${g.formula}</p>
    <p>${g.explanation}</p>
    <i>${g.example}</i>
    <br><br>
    <button class="flashcard-button flashcard-button-primary" onclick="startGrammarQuiz()">
      Start Quiz
    </button>
  `;

  document.querySelectorAll("#grammarList button").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });
}

function startGrammarQuiz() {
  isMixedMode = false;

  if (!currentTense) {
    document.getElementById("grammarQuizContainer").innerHTML =
      "Please select a tense first.";
    return;
  }

  const filtered = grammarQuizData.filter((q) => q.tense === currentTense);

  if (filtered.length < 5) {
    document.getElementById("grammarQuizContainer").innerHTML =
      "Not enough questions for this tense yet.";
    return;
  }

  grammarQuiz = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);
  grammarIndex = 0;
  grammarScore = 0;
  grammarAnswers = [];

  showGrammarQuestion();
}

function startMixedGrammarQuiz() {
  const valid = grammarQuizData;
  isMixedMode = true;

  grammarQuiz = [...valid].sort(() => 0.5 - Math.random()).slice(0, 5);
  grammarIndex = 0;
  grammarScore = 0;
  grammarAnswers = [];

  showGrammarQuestion();
}

function showGrammarQuestion() {
  const q = grammarQuiz[grammarIndex];

  document.getElementById("grammarQuizContainer").innerHTML = `
    <div class="card">
      <h3>Question ${grammarIndex + 1}/5</h3>
      <p>${q.question}</p>
      ${q.options
        .map(
          (opt) => `
        <button class="option-btn" onclick="answerGrammar('${opt.replace(/'/g, "\\'")}')">${opt}</button>
      `
        )
        .join("")}
    </div>
  `;
}

function answerGrammar(selected) {
  const q = grammarQuiz[grammarIndex];
  const buttons = document.querySelectorAll("#grammarQuizContainer .option-btn");
  const isCorrect = selected === q.answer;

  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  buttons.forEach((btn) => {
    if (btn.innerText === q.answer) {
      btn.style.backgroundColor = "#4CAF50";
      btn.style.color = "white";
    }

    if (btn.innerText === selected && selected !== q.answer) {
      btn.style.backgroundColor = "#e74c3c";
      btn.style.color = "white";
    }
  });

  if (isCorrect) {
    grammarScore++;
  }

  grammarAnswers.push({
    tense: q.tense || currentTense,
    question: q.question,
    selected,
    correct: q.answer,
    explanation: q.explanation,
    isCorrect
  });

  window.setTimeout(() => {
    grammarIndex++;

    if (grammarIndex < grammarQuiz.length) {
      showGrammarQuestion();
    } else {
      showGrammarResult();
    }
  }, 900);
}

function showGrammarResult() {
  updateStreak();
  grammarAnswers.forEach((item) => {
    updateProgress("grammar", item.isCorrect);
  });
  updateTotalExercises(grammarQuiz.length || 0);
  recordRecentPerformance(
    isMixedMode ? "Mixed Tense Quiz" : `${currentTense || "Grammar"} Quiz`,
    grammarScore,
    grammarQuiz.length || 5
  );

  if (isMixedMode) {
    let feedback = "";

    if (grammarScore === 5) {
      feedback = "🔥 You’re strong across all tenses";
    } else if (grammarScore >= 3) {
      feedback = "⚠️ Some tenses need attention";
    } else {
      feedback = "🚨 You need to review your tenses";
    }

    document.getElementById("grammarQuizContainer").innerHTML = `
      <div class="card">
        <h2>Your Score: ${grammarScore}/5</h2>
        <p>${feedback}</p>
        <div style="text-align:left; margin-top:20px;">
          ${grammarAnswers
            .map((item, index) => {
              if (!item.isCorrect) {
                return `
            <div style="margin-bottom:16px;">
              <p style="color:#e74c3c;">
                <strong>Q${index + 1}: ${item.question}</strong>
              </p>
              <p style="color:#e74c3c;">Your answer: ${item.selected}</p>
              <p style="color:#4CAF50;">Correct answer: ${item.correct}</p>
              <p style="color:#333;">🧠 Tense: <strong>${item.tense || "Unknown"}</strong></p>
              <p style="font-style:italic;">${item.explanation || ""}</p>
            </div>
          `;
              }

              return `
            <div style="margin-bottom:16px;">
              <p><strong>Q${index + 1}: ${item.question}</strong></p>
              <p>Your answer: ${item.selected}</p>
              <p style="color:#888;">🧠 ${item.tense || ""}</p>
            </div>
          `;
            })
            .join("")}
        </div>
        <button class="flashcard-button flashcard-button-primary" onclick="startMixedGrammarQuiz()">
          Try Mixed Again
        </button>
      </div>
    `;

    renderProgressUI();
    renderHomeStats();
    isMixedMode = false;
    return;
  }

  document.getElementById("grammarQuizContainer").innerHTML = `
    <div class="card">
      <h2>Your Score: ${grammarScore}/5</h2>
      ${grammarAnswers
        .map((a, i) => {
          if (!a.isCorrect) {
            return `
        <p style="color:red;"><strong>Q${i + 1}: ${a.question}</strong></p>
        <p style="color:red;">Your: ${a.selected}</p>
        <p style="color:green;">Correct: ${a.correct}</p>
      `;
          }
          return `
        <p><strong>Q${i + 1}: ${a.question}</strong></p>
        <p>Your: ${a.selected}</p>
      `;
        })
        .join("")}
      <button class="flashcard-button flashcard-button-primary" onclick="startGrammarQuiz()">Try Again</button>
    </div>
  `;

  renderProgressUI();
  renderHomeStats();
}

function startQuiz() {
  const source = filteredVocabulary.length ? filteredVocabulary : vocabularyData;
  const valid = source.filter((item) => item.question && item.options && item.answer);

  if (valid.length < 5) {
    document.getElementById("quizContainer").innerHTML =
      "Not enough quiz data yet (need at least 5 questions).";
    return;
  }

  quizQuestions = [...valid].sort(() => 0.5 - Math.random()).slice(0, 5);
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  showQuestion();
}

function showQuestion() {
  const q = quizQuestions[currentQuestionIndex];

  document.getElementById("quizContainer").innerHTML = `
    <div class="card">
      <h3>Question ${currentQuestionIndex + 1}/5</h3>
      <p style="margin:12px 0;">${q.question}</p>
      <div class="options" id="options">
        ${q.options
          .map(
            (opt) => `
          <button class="option-btn" onclick="selectAnswer('${opt.replace(/'/g, "\\'")}')">
            ${opt}
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function selectAnswer(selected) {
  const q = quizQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".option-btn");
  const isCorrect = selected === q.answer;

  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  buttons.forEach((btn) => {
    const text = btn.innerText;

    if (text === q.answer) {
      btn.style.backgroundColor = "#4CAF50";
      btn.style.color = "white";
    }

    if (text === selected && selected !== q.answer) {
      btn.style.backgroundColor = "#e74c3c";
      btn.style.color = "white";
    }
  });

  if (isCorrect) {
    score++;
  }

  userAnswers.push({
    question: q.question,
    selected,
    correct: q.answer,
    explanation: getExplanation(q),
    isCorrect,
    confusion: q.confusion || ""
  });

  window.setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 900);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  updateStreak();
  userAnswers.forEach((item) => {
    updateProgress("vocabulary", item.isCorrect);
  });
  updateTotalExercises(quizQuestions.length || 0);
  recordRecentPerformance("Vocabulary Quiz", score, quizQuestions.length || 5);

  let feedback = "";

  if (score === 5) {
    feedback = "Okay… you’re kind of dangerous 🔥";
  } else if (score >= 3) {
    feedback = "Not bad. You’re getting there.";
  } else {
    feedback = "It’s okay—this is fixable.";
  }

  document.getElementById("quizContainer").innerHTML = `
    <div class="card">
      <h2>Your Score: ${score}/5</h2>
      <p>${feedback}</p>
      <div style="text-align:left; margin-top:20px;">
        ${userAnswers
          .map(
            (item, index) => {
              if (!item.isCorrect) {
                return `
          <div style="margin-bottom:16px;">
            <p style="color:#e74c3c;"><strong>Q${index + 1}: ${item.question}</strong></p>
            <p style="color:#e74c3c;">Your answer: ${item.selected}</p>
            <p style="color:#4CAF50;">Correct answer: ${item.correct}</p>
            <p><em>${item.explanation || ""}</em></p>
            ${
              item.confusion
                ? `<p>Note: This word is often confused with '${item.confusion}'</p>`
                : ""
            }
          </div>
        `;
              }

              return `
          <div style="margin-bottom:16px;">
            <p><strong>Q${index + 1}: ${item.question}</strong></p>
            <p>Your answer: ${item.selected}</p>
            ${
              item.confusion
                ? `<p>Note: This word is often confused with '${item.confusion}'</p>`
                : ""
            }
          </div>
        `;
            }
          )
          .join("")}
      </div>
      <button class="flashcard-button flashcard-button-primary" onclick="startQuiz()">Try Again</button>
    </div>
  `;

  renderProgressUI();
  renderHomeStats();
}

function getExplanation(item) {
  return item.explanation || "No explanation available.";
}

const quoteText = document.getElementById("quote-text");
const dots = Array.from(document.querySelectorAll(".dot"));

function setQuote(index) {
  quoteText.textContent = quotes[index];
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setQuote(Number(dot.dataset.quote));
  });
});

const settingsButton = document.getElementById("settingsButton");
const dbCloseBtn = document.getElementById("dbCloseBtn");
const dbOverlay = document.getElementById("dbOverlay");

if (settingsButton) {
  settingsButton.addEventListener("click", openDBPopup);
}

if (dbCloseBtn) {
  dbCloseBtn.addEventListener("click", closeDBPopup);
}

if (dbOverlay) {
  dbOverlay.addEventListener("click", closeDBPopup);
}

initStats();
showPage("landingPage");
updateDifficultyUI(currentDifficulty);
updateCollocationDifficultyUI(currentCollocationDifficulty);
renderGrammarList();
showGrammar(0);
showCard();
showCollocation();
renderProgressUI();
renderHomeStats();
renderDailyQuote();
startUTBKRotation();

let currentQuote = 0;
window.setInterval(() => {
  currentQuote = (currentQuote + 1) % quotes.length;
  setQuote(currentQuote);
}, 5000);
