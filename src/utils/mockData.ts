// Mock data for demonstration purposes

export const mockQuestions = [
  {
    id: '1',
    text: 'あなたの商品は何ですか？',
    category: 'features',
    order: 1,
    isActive: true,
    helperText: '参考HP：',
    sampleAnswer: '無料ビデオ講座「ダン・ケネディの売上が倍増するコンサルタント時間術セミナー」\nhttps://www.dankennedy.jp/　を参照。（または添付ファイルがある場合は添付。）',
    isRequired: true
  },
  {
    id: '2',
    text: 'あなたの商品の特徴や独自性は何ですか？',
    category: 'features',
    order: 2,
    isActive: true,
    helperText: '他の商品と比べて、どのような特徴や強みがありますか？',
    sampleAnswer: '優先順位を明確にして生産的な時間を増やす。時間を奪いストレスを与える「タイムヴァンパイア」を退治する',
    isRequired: true
  },
  {
    id: '3',
    text: 'あなたのオファーは何ですか？',
    category: 'offer_details',
    order: 3,
    isActive: true,
    helperText: 'ユーザーに提供する具体的なオファーについて説明してください。',
    sampleAnswer: '30分の無料ビデオ講座。登録するとすぐに見える。',
    isRequired: true
  },
  {
    id: '4',
    text: '行動喚起（とってほしい行動）は何ですか？',
    category: 'cta',
    order: 4,
    isActive: true,
    helperText: 'ユーザーにどのような行動を取ってほしいですか？',
    sampleAnswer: '今すぐクリック。無料でビデオを受け取り、コンサルタントのための時間の使い方を学ぶ',
    isRequired: true
  },
  {
    id: '5',
    text: 'あなたのオファーの限定性や理由は何ですか？',
    category: 'offer_details',
    order: 5,
    isActive: true,
    helperText: 'なぜこのオファーが限定的なのか、または今行動を起こすべき理由について説明してください。',
    sampleAnswer: '有料販売していたものの一部を無料公開。がんばるコンサルタントを応援するため無料。なお、いつまで公開できるかわからない。'
  },
  {
    id: '6',
    text: 'あなたのオファーに関する社会的証明は何ですか？',
    category: 'social_proof',
    order: 6,
    isActive: true,
    helperText: 'お客様の声や実績など、商品の信頼性を高める要素があれば記入してください。',
    sampleAnswer: 'これまで3097人のコンサルタントが視聴し、生活を変化させてきた。レビューは星4.7'
  },
  {
    id: '7',
    text: '特典は何ですか？',
    category: 'benefits',
    order: 7,
    isActive: true,
    helperText: '商品購入やサービス利用時に提供される特典があれば記入してください。',
    sampleAnswer: '「明日からできる！生産的な時間を２倍にするための鉄則５箇条チェックリストシート」「面倒なクライアントとトラブルなく契約終了するためのメール事例」'
  },
  {
    id: '8',
    text: 'あなたのアバターは誰ですか？',
    category: 'problem',
    order: 8,
    isActive: true,
    helperText: 'ターゲットとなる理想的な顧客像について説明してください。',
    sampleAnswer: '時間のない30〜50代のコンサルタント。',
    isRequired: true
  },
  {
    id: '9',
    text: 'あなたのアバターの問題や悩みは何ですか？',
    category: 'problem',
    order: 9,
    isActive: true,
    helperText: 'ターゲットが抱えている問題や悩みは何ですか？',
    sampleAnswer: 'とにかく忙しい。販売、提供、顧客サポートなど全部のことを自分一人でやっていて、時間がない。忙しいのに売上が増えない。面倒なクライアントの相手に疲れる。夜中の対応がしんどい。家族との時間も取れない。',
    isRequired: true
  },
  {
    id: '10',
    text: 'あなたのアバターの問題の原因は何ですか？',
    category: 'problem',
    order: 10,
    isActive: true,
    helperText: 'その問題が発生している原因は何だと考えられますか？',
    sampleAnswer: '会社員のための時間術を実行していること。コンサルタントの時間術は、普通の会社員とは違う。'
  },
  {
    id: '11',
    text: 'あなたのアバターの欲求や理想の未来は何ですか？',
    category: 'solution',
    order: 11,
    isActive: true,
    helperText: 'ターゲットが理想とする状態や達成したい目標は何ですか？',
    sampleAnswer: '上記の問題が全て解決され、働く時間が半分で売上が２倍。ストレスも減って、家族と笑顔で過ごせている'
  },
  {
    id: '12',
    text: 'この商品は他の商品とどのように違っていますか？',
    category: 'features',
    order: 12,
    isActive: true,
    helperText: '競合製品や代替手段と比較した際の優位性について説明してください。',
    sampleAnswer: '時間管理ツールや細かい手帳術を必要としない。無理にデジタルツールを使わない。また、ただの理論やアイデアではなく、実際にビジネスの現場で効果を発揮する具体的で即効性のある戦略と戦術を提供する。'
  },
  {
    id: '13',
    text: 'あなたの商品によって得られる結果は何ですか？',
    category: 'benefits',
    order: 13,
    isActive: true,
    helperText: '商品を使用することで得られる具体的な結果や効果について説明してください。',
    sampleAnswer: '生産的な時間を２倍にし、売り上げも２倍にすること。面倒な顧客もいなくなってストレスが減ることなど。'
  },
  {
    id: '14',
    text: 'あなたが提案する「◯◯するだけ」のような簡単な行動は何ですか？',
    category: 'cta',
    order: 14,
    isActive: true,
    helperText: '商品の使い方や利用開始までの簡単なステップがあれば記入してください。',
    sampleAnswer: '30分のビデオ講座を見て、翌日から実践するだけ。'
  },
  {
    id: '15',
    text: 'あなたの商品について、アバターが驚くようなことや意外なこと、興味深いことは何ですか？',
    category: 'features',
    order: 15,
    isActive: true,
    helperText: 'ターゲットの注目を引きつける意外な事実や興味深い情報があれば記入してください。',
    sampleAnswer: '朝からメールをチェックしない。すぐに返答しない。携帯電話を投げ捨てる。仕事はすぐに受けず、一度検討し、忙しいフリをする。嫌な顧客は積極的に断る。'
  },
  {
    id: '16',
    text: 'あなたの商品や商品提供者についての社会的証明や実績は何ですか？',
    category: 'social_proof',
    order: 16,
    isActive: true,
    helperText: '過去の実績や社会的評価について説明してください。',
    sampleAnswer: '億万長者メーカーと呼ばれている。40冊以上の著書、ベストセラー作家。米国のコンサルタントやマーケターの多くが直接的または間接的にその教えを受けている。ダンケネディは１つの案件で、平均的な会社員の年収ほどのフィーを受け取る。'
  },
  {
    id: '17',
    text: 'あなたの商品やメソッドの開発秘話は何ですか？',
    category: 'features',
    order: 17,
    isActive: true,
    helperText: '製品やサービスが生まれた背景や開発ストーリーがあれば記入してください。',
    sampleAnswer: 'メソッドの開発者は、多くの人が自分の時間をどのように使っているかを知りたがっているため、また、どのようにしてすべてをスケジュールに組み込んでいるのかを知りたがっているため、この方法を公開した。ちなみに彼は、コンサルタント・経営者として非常に忙しく、安定したプライベートクライアントを抱え、コーチングの仲間のアドバイザーグループを指導し、月に1日はこれらのクライアントやグループに電話でコーチングを行っています。 また、年間20人以上のクライアント向けにダイレクト・レスポンス広告やダイレクトメールのコピーを書き、年間30日以上クライアントを訪問してコンサルティングを行っています。 さらに、5誌の月刊ニュースレターを執筆し、少なくとも年に1冊は本を執筆し、ほぼ毎週、週に2回以上ハーネスレースに出場しています。 これらに加えて、休暇も取得しています。'
  },
  {
    id: '18',
    text: 'あなたの顧客または自分自身の事例（ビフォーアフター）は何ですか？',
    category: 'social_proof',
    order: 18,
    isActive: true,
    helperText: '成功事例や導入前後の変化について具体的に記入してください。',
    sampleAnswer: '田中太郎さんは、以前は毎日朝から深夜まで働き詰めで、週末も仕事に追われる生活を送っていました。売上は増えず、プライベートの時間もままならない日々。しかし、ダン・ケネディの時間術セミナーを受講してから、彼の生活は一変しました。時間管理を根本的に改善し、優先順位を明確にしたことで、業務の効率が大幅にアップ。今では、売上も以前の倍以上に増え、家族と過ごす時間も確保できるようになりました。これもすべて、たった一つの時間術を実践しただけで達成されたのです。'
  },
  {
    id: '19',
    text: 'あなたの顧客の声はどのようなものですか？',
    category: 'social_proof',
    order: 19,
    isActive: true,
    helperText: '顧客からの実際のフィードバックや口コミがあれば記入してください。',
    sampleAnswer: '＝＝＝＝顧客の声＝＝＝＝\n「これでよかったんだ」と再確認させてくれました\nby NY\n個人事業で、しかも田舎に住んでいると、たくさんの呼び出しの電話がかかってきます。近所づきあいのために、これらの電話にすべて対応していたらどんどん時間はなくなります。 この本にかかれているノウハウは、ノウハウとしてはそれほど突飛なことは書かれていないと思いますが、文句なしの成功者であるケネディーが実践している内容となれば重みが違います。 自分の進むべき方向に生じる障害（この本で言えば「タイムバンパイア」です）へ立ち向かう、マインドを再認識する内容でした。\n\n罪悪感からの解放\nby OY\n会社勤めのころは、タイムリーにメールに返信して、不在着信があったら、早めにコールバックして、が当然の事と信じていました。 事業を始めてからは、 "どーして、自分はこんなに仕事がおそいのか" と毎日自分に❌を付けていました。 この本を読んで分かりました。万人単位の企業で担当範囲ががっちり定義されていた頃と今では、仕事中に割り込みがはいる頻度は段違い。 自分の時間を守れるのは自分だけです。 そして、自分の仕事の範囲も、優先順位も自分で決めればいいんだと、ようやく思いだしました。 覚悟を決めて、本の通りにしていますが、今の所大勢に影響はなく...。 もっと早く始めれば良かったです。 自己決定権を握っているって、清々しいですね。 顧客にとって重要な事を優先させる、 と基準を作った事で、罪悪感からも苛々からも解放されたように思います。\n\n屁理屈はいらない、書いてあることをやったら１日が変わった\nby YM\n深く突き刺さったのがタイム・バンパイア。 自分の時間が他人に吸われているのをとくに意識していなかった。 時間を吸われているのは彼らに負けたということ。 「負けをとことん憎む」ことを始めたら意識が変わり行動が変わり自分がやりたいことに没頭できる時間が増えました。 オーディオで聞けるので通勤時間も活用して何度も聴いています。 自分は経営者ではありませんがすぐに使えるエッセンスがあるのでオススメです。\n\n言い訳そのものが自分を苦しめていました。\nby lilpa\n超がつくほど実力も有り、また自信もある方には、 「あー。やっているよ」という内容かもしれません。 ですが、私自身にとっては、はっとさせられることばかりで、 言い換えると、これらを実行すれば、そのようになれる、あるいは近づける、 というイメージが、かなりの鮮明度を持って頭に浮かびました。 何かが違う。でもそれは何？ と　引っかかる何かがいつもある方には、断然オススメです。 私にとっては、答えが幾つも載っていました。 もう言い訳をしないと決めました。 この本で掲げていることも、（全部ではなく　やれる順ですが）早速実行しています。 実行してから、睡眠がよくなってきました。 健康にも良し！！\n\n人生を変える時間術\nby 谷口\nはっきり言って、本書の「収入目標の計算」をするだけでも時間に対する考え方が変わります。以前までは一分の価値を低く考えていたので、ネットサーフィンやTVなどで時間を浪費していました。しかし、「収入目標の計算」をして、一分当たりの価値を計算することで時間の浪費が少なくなりました。\n＝＝＝＝＝＝＝'
  },
  {
    id: '20',
    text: 'あなたの顧客のコントラスト（実際の顧客での成功例と失敗例）は何ですか？',
    category: 'social_proof',
    order: 20,
    isActive: true,
    helperText: '成功した顧客と失敗した顧客の違いについて説明してください。',
    sampleAnswer: ''
  },
  {
    id: '21',
    text: 'あなたの商品やオファーに関連する興味深いニュースや調査結果は何ですか？',
    category: 'features',
    order: 21,
    isActive: true,
    helperText: '関連する最新のニュースや調査結果があれば記入してください。',
    sampleAnswer: ''
  }
];

// 新しいユーザーモックデータ
export const mockUsers = [
  {
    id: 'admin-001',
    name: '管理者ユーザー',
    email: 'admin@example.com',
    role: 'admin',
    plan: 'enterprise',
    isActive: true,
    createdAt: new Date(2023, 0, 15),
    lastLoginAt: new Date(2023, 9, 5, 14, 30),
    company: '株式会社LPナビゲーター',
    position: 'システム管理者',
    phone: '03-1234-5678',
    notes: '管理者アカウント（デモ用）',
    usageLimit: 0,
    apiAccess: true,
    usage: {
      lpGenerated: 28,
      apiCalls: 156
    }
  },
  {
    id: 'user-001',
    name: '佐藤 太郎',
    email: 'taro@example.com',
    role: 'user',
    plan: 'premium',
    isActive: true,
    createdAt: new Date(2023, 1, 10),
    lastLoginAt: new Date(2023, 9, 1, 9, 45),
    company: '株式会社マーケットプラス',
    position: 'マーケティング部長',
    phone: '03-9876-5432',
    notes: 'プレミアムユーザー。サポート対応優先。',
    usageLimit: 50,
    apiAccess: true,
    usage: {
      lpGenerated: 42,
      apiCalls: 78
    }
  },
  {
    id: 'user-002',
    name: '鈴木 花子',
    email: 'hanako@example.com',
    role: 'user',
    plan: 'standard',
    isActive: true,
    createdAt: new Date(2023, 2, 5),
    lastLoginAt: new Date(2023, 9, 3, 16, 20),
    company: 'デザインスタジオMOON',
    position: 'デザイナー',
    phone: '090-1234-5678',
    notes: '',
    usageLimit: 20,
    apiAccess: false,
    usage: {
      lpGenerated: 16,
      apiCalls: 0
    }
  },
  {
    id: 'user-003',
    name: '田中 一郎',
    email: 'ichiro@example.com',
    role: 'user',
    plan: 'free',
    isActive: false,
    createdAt: new Date(2023, 3, 20),
    lastLoginAt: new Date(2023, 7, 25, 11, 15),
    company: '個人事業主',
    position: 'フリーランス',
    phone: '080-8765-4321',
    notes: '無料トライアル期間終了。アップグレード検討中。',
    usageLimit: 10,
    apiAccess: false,
    usage: {
      lpGenerated: 7,
      apiCalls: 0
    }
  },
  {
    id: 'user-004',
    name: '山田 裕子',
    email: 'yuko@example.com',
    role: 'user',
    plan: 'premium',
    isActive: true,
    createdAt: new Date(2023, 4, 3),
    lastLoginAt: new Date(2023, 9, 4, 13, 10),
    company: 'テックソリューション株式会社',
    position: 'セールスマネージャー',
    phone: '03-5678-1234',
    notes: 'エンタープライズプランへのアップグレード検討中。',
    usageLimit: 100,
    apiAccess: true,
    usage: {
      lpGenerated: 65,
      apiCalls: 120
    }
  },
  {
    id: 'user-005',
    name: '高橋 誠',
    email: 'makoto@example.com',
    role: 'user',
    plan: 'standard',
    isActive: true,
    createdAt: new Date(2023, 5, 15),
    lastLoginAt: new Date(2023, 8, 29, 10, 5),
    company: '合同会社クリエイト',
    position: 'コンテンツディレクター',
    phone: '03-2345-6789',
    notes: '',
    usageLimit: 20,
    apiAccess: false,
    usage: {
      lpGenerated: 12,
      apiCalls: 0
    }
  },
  {
    id: 'user-006',
    name: '伊藤 洋子',
    email: 'yoko@example.com',
    role: 'user',
    plan: 'enterprise',
    isActive: true,
    createdAt: new Date(2023, 6, 7),
    lastLoginAt: new Date(2023, 9, 2, 15, 30),
    company: 'グローバルマーケティング株式会社',
    position: 'CEO',
    phone: '03-3456-7890',
    notes: '大口顧客。VIP対応必須。',
    usageLimit: 0,
    apiAccess: true,
    usage: {
      lpGenerated: 124,
      apiCalls: 567
    }
  },
  {
    id: 'user-007',
    name: '中村 健太',
    email: 'kenta@example.com',
    role: 'user',
    plan: 'premium',
    isActive: true,
    createdAt: new Date(2023, 7, 12),
    lastLoginAt: new Date(2023, 9, 5, 9, 45),
    company: 'スタートアップファクトリー',
    position: 'マーケティングコンサルタント',
    phone: '090-9876-5432',
    notes: '',
    usageLimit: 50,
    apiAccess: true,
    usage: {
      lpGenerated: 32,
      apiCalls: 45
    }
  },
  {
    id: 'admin-002',
    name: '小林 直人',
    email: 'naoto@example.com',
    role: 'admin',
    plan: 'enterprise',
    isActive: true,
    createdAt: new Date(2023, 8, 1),
    lastLoginAt: new Date(2023, 9, 4, 17, 20),
    company: '株式会社LPナビゲーター',
    position: 'プロダクトマネージャー',
    phone: '03-8765-4321',
    notes: '開発チーム管理者',
    usageLimit: 0,
    apiAccess: true,
    usage: {
      lpGenerated: 18,
      apiCalls: 245
    }
  },
  {
    id: 'user-008',
    name: '斎藤 美咲',
    email: 'misaki@example.com',
    role: 'user',
    plan: 'standard',
    isActive: false,
    createdAt: new Date(2023, 8, 15),
    lastLoginAt: null,
    company: '個人事業主',
    position: 'ウェブデザイナー',
    phone: '080-1234-5678',
    notes: '登録後ログインなし。フォローアップ必要。',
    usageLimit: 20,
    apiAccess: false,
    usage: {
      lpGenerated: 0,
      apiCalls: 0
    }
  }
];

// モックのLP記事生成履歴データ
export const mockContentHistory = [
  {
    id: '1',
    title: 'AIコンテンツ作成ツールの紹介',
    createdAt: new Date(2023, 5, 10),
    metaDescription: 'AIを活用したコンテンツ作成ツールで、効率的に高品質な記事を生成しましょう。',
    permalink: 'ai-content-tool-introduction',
    model: 'gpt-4o',
    wordCount: 1250,
  },
  {
    id: '2',
    title: 'デジタルマーケティング支援サービス',
    createdAt: new Date(2023, 5, 15),
    metaDescription: '最新のデジタルマーケティング手法を活用し、あなたのビジネスを成長させます。',
    permalink: 'digital-marketing-service',
    model: 'claude-3-opus',
    wordCount: 1500,
  },
  {
    id: '3',
    title: '自動化ワークフローツール',
    createdAt: new Date(2023, 5, 20),
    metaDescription: '業務効率を向上させる自動化ワークフローツールで、時間とコストを削減します。',
    permalink: 'workflow-automation-tool',
    model: 'gpt-4o',
    wordCount: 980,
  },
  {
    id: '4',
    title: 'プレミアムSEOコンサルティング',
    createdAt: new Date(2023, 5, 25),
    metaDescription: '検索エンジン最適化のプロフェッショナルが、あなたのウェブサイトのランキングを向上させます。',
    permalink: 'premium-seo-consulting',
    model: 'gpt-3.5-turbo',
    wordCount: 1100,
  },
  {
    id: '5',
    title: 'クラウドストレージソリューション',
    createdAt: new Date(2023, 6, 1),
    metaDescription: '安全で信頼性の高いクラウドストレージで、あなたの大切なデータを保護します。',
    permalink: 'cloud-storage-solution',
    model: 'claude-3-opus',
    wordCount: 1300,
  },
];

// フォーミュラ（プロンプトテンプレート）のモックデータ
export const mockFormulas = [
  {
    id: 'formula-basic-001',
    name: '基本情報テンプレート',
    type: 'basic_info',
    template: `以下は、{{会社名}}が提供する{{商品・サービス名}}に関する基本情報です。

【商品・サービスの概要】
{{商品・サービスの概要説明}}

【主な特徴】
- {{特徴1}}
- {{特徴2}}
- {{特徴3}}

【想定されるお客様】
{{ターゲット顧客の説明}}

【解決できる課題】
{{顧客の課題や問題点}}

【提供価値】
{{商品・サービスの提供価値}}

【料金体系】
{{料金体系の説明}}

【導入事例】
{{導入事例や成功事例}}

【お問い合わせ方法】
{{連絡先情報}}`,
    variables: ['会社名', '商品・サービス名', '商品・サービスの概要説明', '特徴1', '特徴2', '特徴3', 'ターゲット顧客の説明', '顧客の課題や問題点', '商品・サービスの提供価値', '料金体系の説明', '導入事例や成功事例', '連絡先情報'],
    isActive: true,
    createdAt: new Date(2023, 3, 15),
    updatedAt: new Date(2023, 3, 15),
    summary: '会社や商品・サービスの基本情報を簡潔にまとめるためのテンプレートです。概要、特徴、ターゲット顧客、解決課題、提供価値、料金体系などの重要情報を構造化して表示します。'
  },
  {
    id: 'formula-basic-002',
    name: 'SEO特化型',
    type: 'basic_info',
    template: `# {{メインキーワード}} - {{サブキーワード}}

## {{メインキーワード}}とは

{{メインキーワードの詳細な説明（300-500文字）}}

## {{メインキーワード}}の主な特徴

### 1. {{特徴1のキーワード}}

{{特徴1の詳細説明（150-200文字）}}

### 2. {{特徴2のキーワード}}

{{特徴2の詳細説明（150-200文字）}}

### 3. {{特徴3のキーワード}}

{{特徴3の詳細説明（150-200文字）}}

## {{メインキーワード}}のメリット

- {{メリット1}}
- {{メリット2}}
- {{メリット3}}
- {{メリット4}}
- {{メリット5}}

## {{メインキーワード}}の選び方

{{選び方の詳細説明（200-300文字）}}

### おすすめの{{メインキーワード}}

1. **{{おすすめ製品/サービス1}}**: {{簡単な説明}}
2. **{{おすすめ製品/サービス2}}**: {{簡単な説明}}
3. **{{おすすめ製品/サービス3}}**: {{簡単な説明}}

## {{メインキーワード}}に関するよくある質問

### Q: {{よくある質問1}}
A: {{回答1}}

### Q: {{よくある質問2}}
A: {{回答2}}

### Q: {{よくある質問3}}
A: {{回答3}}

## まとめ: {{メインキーワード}}について

{{まとめの文章（200-300文字）}}

【お問い合わせ】
{{会社名}}
{{連絡先情報}}`,
    variables: ['メインキーワード', 'サブキーワード', 'メインキーワードの詳細な説明', '特徴1のキーワード', '特徴1の詳細説明', '特徴2のキーワード', '特徴2の詳細説明', '特徴3のキーワード', '特徴3の詳細説明', 'メリット1', 'メリット2', 'メリット3', 'メリット4', 'メリット5', '選び方の詳細説明', 'おすすめ製品/サービス1', '簡単な説明', 'おすすめ製品/サービス2', 'おすすめ製品/サービス3', 'よくある質問1', '回答1', 'よくある質問2', '回答2', 'よくある質問3', '回答3', 'まとめの文章', '会社名', '連絡先情報'],
    isActive: false,
    createdAt: new Date(2023, 3, 20),
    updatedAt: new Date(2023, 3, 20),
    summary: '検索エンジン最適化（SEO）を重視した基本情報テンプレートです。見出し構造、キーワード配置、よくある質問（FAQ）セクションなどを活用してSEOスコアを高め、検索結果での上位表示を目指します。'
  },
  {
    id: 'formula-001',
    name: '質問型（ほかにいませんか？）',
    type: 'ad_copy',
    template: `{{ニュースキャッチの抽出。トピックに関連する内容}}

・{{ニュースにつき好奇心を持つような質問文}}？
・{{ニュースにつき好奇心を持つような質問文}}？
・{{ニュースにつき好奇心を持つような質問文}}？

{{署名}}によると、{{意外で面白い内容を2-3行で解説}}したそうです。

さらに、調べれば調べるほどに、{{さらに意外で面白い内容を紹介}}することがわかりました。また、{{アバターにとって意味のある結論。大きなチャレンジ、または大きな機会が訪れそうだ}}ということです。

それならば、{{アバターが望める結果}}を得るためには、どうすれば良いのでしょうか？

{{よくある懸念}}や{{よくある懸念}}はどう考えればいいのでしょうか？

この情報は、{{権威}}である、あなたにとっての{{価値}}です。

{{200文字で商品の説明}}

{{200文字で商品のベネフィット}}

{{100文字で行動リンク}}`,
    variables: ['ニュースキャッチの抽出', 'ニュースにつき好奇心を持つような質問文', '署名', '意外で面白い内容', 'さらに意外で面白い内容', 'アバターにとって意味のある結論', 'アバターが望める結果', 'よくある懸念', '権威', '価値', '商品の説明', '商品のベネフィット', '行動リンク'],
    isActive: true,
    createdAt: new Date(2023, 4, 10),
    updatedAt: new Date(2023, 4, 10),
    summary: '好奇心を刺激する質問を通して読者の興味を引き、ニュースやトピックに関連する意外な情報を提供し、商品・サービスの価値を伝えるフォーミュラです。読者に「もっと知りたい」と思わせる広告文に最適です。'
  },
  {
    id: 'formula-002',
    name: '誠実型',
    type: 'ad_copy',
    template: `{{商品名}}

この{{対象}}を手にしたとき、
私は自分の目が信じられませんでした。
あなたもきっと同じ感動を覚えるでしょう。

From：{{名前}}

これからお話しすることは本当の話です。信じていただけるか不安ですが、信じていただけないあなたには、人生を変える価値があることを知っていただけるようにしたいと思います。まずは最後まで読んでください。

{{新しい商品を紹介された人}}は{{精通している、または、優れた眼力を持つなどの状況}}でした。彼の隣で{{新しい商品を紹介したときのシーンを描写}}と言われました。

{{新しい商品に対する、あなたの疑問や難点。または、紹介者とのあいだの具体的なシーンの描写}}

{{新しい商品を使ってみた}}みたところ私が目を疑いました。そして何度か{{再び新しい商品を使うシーン}}して、本当に{{商品の効果を確認する}}のかどうか確認したのです。すると、確かに{{商品の効果}}していました。これは明らかでした。{{既存の商品や手法}}と比較してみましたが、とても及ばないものになりません。私はとても驚きました。{{商品のベネフィット}}したのです。ではなぜこの商品はこれほど{{商品ベネフィット}}できるのでしょうか？その理由をねくり返してみました。

　　{{3つの理由}}

{{商品の仕組み}}は、{{メカニズムによる特徴}}します。

これには理由が２つあります。まず、{{理由}}。そのため、{{ベネフィット}}えます。{{理由とベネフィットの因果関係を具体的に描写する}}するため、{{ベネフィット}}できるようになるのです。

その理由はさらに一層鮮明です。{{既存のものからのデメリットや欠点}}です。{{既存のものからのデメリットや欠点}}えます。そのため、{{既存のものから来るリスク}}。

そして最後に、{{既存のデメリットや欠点が解消される}}すると、{{利点}}えます。{{その理由と利点を描写}}。

　　{{既存のものからの欠点を裏・表現する見解}}

しかしね、肝心かなめの点は既存の{{名称、手法、なが}}などにだまされているということでした。{{その理由で生じる問題を具体的に、より詳細に説明}}。

{{新しい商品}}は{{理由}}から、{{既存のデメリットを防ぐメカニズム}}えます。{{その理由を保証するような社会的証明}}。

{{この理由}}は{{物理的な事実}}なので、どんな{{ベネフィット}}をもたらすでしょう。{{この理由}}は{{物理的な事実からベネフィットの関係}}です。

また、{{理由とベネフィット}}です。

まず{{提案の行動}}をしてから、{{ベネフィット}}を体験してください。そして{{既存のもの}}と{{新しい商品}}と比べてみてください。{{新しい商品}}を{{理由}}するとどれだけ{{ベネフィット}}があるか、{{新しい商品}}を{{理由}}せず{{ベネフィット}}があるか確認してみてください。もし{{結果の変化}}を認めないということであれば、30日以内におわ返しします。購入代金に返金いたします。

　　最後的な違い

直接自分の目で確認するなら、一度試した後ポンと返品保証を使うことはないでしょう。

実際に{{対象者の属性の人}}たちは{{ベネフィット}}を得るために{{新しい商品}}を使っています。そして、{{対象者の属性の人}}や{{対象者の属性の人}}、{{対象者の属性の人}}など、{{テーマに関連する属性}}をしている人は皆、これが手放せなくなっているのです。

あなたにも、{{ベネフィット}}する同じような{{ベネフィット}}が待っているでしょう。さあ注文してみてください。気に入らなければお支払いは不要です。

{{購入リンク}}`,
    variables: ['商品名', '対象', '名前', '新しい商品を紹介された人', '精通している、または、優れた眼力を持つなどの状況', '新しい商品を紹介したときのシーンを描写', '新しい商品に対する、あなたの疑問や難点', '新しい商品を使ってみた', '再び新しい商品を使うシーン', '商品の効果を確認する', '商品の効果', '既存の商品や手法', '商品のベネフィット', '商品ベネフィット', '3つの理由', '商品の仕組み', 'メカニズムによる特徴', '理由', 'ベネフィット', '理由とベネフィットの因果関係を具体的に描写する', '既存のものからのデメリットや欠点', '既存のものから来るリスク', '既存のデメリットや欠点が解消される', '利点', 'その理由と利点を描写', '既存のものからの欠点を裏・表現する見解', '名称、手法、なが', 'その理由で生じる問題を具体的に、より詳細に説明', '新しい商品', '既存のデメリットを防ぐメカニズム', 'その理由を保証するような社会的証明', 'この理由', '物理的な事実', '物理的な事実からベネフィットの関係', '理由とベネフィット', '提案の行動', '既存のもの', '結果の変化', '対象者の属性の人', 'テーマに関連する属性', '購入リンク'],
    isActive: true,
    createdAt: new Date(2023, 4, 12),
    updatedAt: new Date(2023, 4, 12),
    summary: '商品やサービスを誠実かつ詳細に説明し、ユーザーの信頼を獲得するフォーミュラです。商品の効果や仕組みを丁寧に解説し、既存の商品との違いを明確にすることで、ユーザーの購入意欲を高めます。透明性と信頼性を重視した広告文作成に適しています。'
  },
  {
    id: 'formula-003',
    name: '問題共感型',
    type: 'ad_copy',
    template: `{{地域}}にお住まいの皆様

今日、あなたが{{悩み}}で悩んでいたら、ぜひお読みください。

はじめまして、{{社名または責任者の名前}}です。{{商品カテゴリー}}の中でもハイクオリティなものを探したことがある人なら、本当に良い{{商品カテゴリー}}はとても高価です。{{商品}}も{{高額}}円するのですが、{{地域}}では{{安価であることを伝える}}ところです。 

なぜ、そんなに高価なのに、業者さんが宣伝をしないのかという合理的な理由が1つあります。それはどこに行っても{{効果}}がないような{{症状}}や{{効果}}を与える{{技術などの要因}}があるからです。

それでなければ、このような高価設定はしませんし、お客さんが集まるわけもありません。

もしも、あなたが「{{トピックに関して困っていること}}していてもなかなか{{症状が良くならない}}」という方に悩んでいたら、{{地域}}で最も高価な優れた{{商品やサービス}}を一度お試しください。この悩みが解消する自信があります。そして、{{従来品や類似商品}}をお持ちであれば、今すぐ、時間をかけていられないと感じるものを探してきていただきたいのです。このような意味では、優れた{{商品やサービス}}は、どうしても「必要」と思います。

とはいえですが、上にも書いてあるように、優れた{{商品やサービス}}は高価です。{{高額}}円というのは一般的に、それなりの金額だと思います。なのでこの度、特別にモニター募集を打ち出してみることにしました。

本件につき、アンケートに答えていただけるかたに、{{モニター価格}}円で、通常の施術を受けられるようにしました。このモニター枠は、{{人数}}名の枠しか設けていないので、早いものに埋まってしまいますと思います。{{地域}}で最も人気のある、最も効果の優れたものをお探しの方は、今すぐご連絡でご予約ください。

TEL番号。「モニターハイクオリティー申込み」とお電話下さい。
詳しく{{社名}}を知りたい方はネットで〜〜〜〜〜を検索`,
    variables: ['地域', '悩み', '社名または責任者の名前', '商品カテゴリー', '商品', '高額', '安価であることを伝える', '効果', '症状', '技術などの要因', 'トピックに関して困っていること', '症状が良くならない', '商品やサービス', '従来品や類似商品', 'モニター価格', '人数'],
    isActive: true,
    createdAt: new Date(2023, 4, 15),
    updatedAt: new Date(2023, 4, 15),
    summary: 'ユーザーの問題や悩みに共感し、解決策を提案するフォーミュラです。地域密着型のサービスや商品に特に効果的で、高品質な商品やサービスを特別価格で提供する「モニター募集」の形式でユーザーの興味を引きます。共感と解決策の提示を通じて信頼関係を構築します。'
  },
  {
    id: 'formula-004',
    name: 'ニュース提供型',
    type: 'ad_copy',
    template: `【{{ニュースのトピック}}】最新情報をお届けします

{{挨拶}}

先日、{{ニュースソース}}による最新の報告で、{{ニュースの内容}}という情報が発表されました。

これはあなたにとって非常に重要な情報です。なぜなら、この変化によって{{ユーザーへの影響}}ことになるからです。

具体的には、以下の3つの変化が起こります：

1. {{具体的な変化1}}
2. {{具体的な変化2}}
3. {{具体的な変化3}}

特に注目すべきは、{{特に重要な変化や数字}}という点です。これは{{その重要性の説明}}ということを意味します。

{{業界の専門家}}によると、「{{専門家の引用}}」と述べています。

この状況に対応するために、私たちは{{提供するソリューション}}をご用意しました。これによって、あなたは{{ソリューションのメリット}}ことができます。

今回限定で、{{期間限定オファー}}をご提供しています。

詳細については、以下のリンクからご確認いただけます。
{{CTA}}

ご質問がございましたら、お気軽にお問い合わせください。

{{署名}}`,
    variables: ['ニュースのトピック', '挨拶', 'ニュースソース', 'ニュースの内容', 'ユーザーへの影響', '具体的な変化1', '具体的な変化2', '具体的な変化3', '特に重要な変化や数字', 'その重要性の説明', '業界の専門家', '専門家の引用', '提供するソリューション', 'ソリューションのメリット', '期間限定オファー', 'CTA', '署名'],
    isActive: true,
    createdAt: new Date(2023, 4, 18),
    updatedAt: new Date(2023, 4, 18),
    summary: '最新のニュースや業界情報を提供することで、ユーザーの関心を引き、価値ある情報源としての地位を確立するフォーミュラです。情報提供を通じて信頼性を構築し、その上で関連するソリューションを提案することで、自然な形での商品・サービスの紹介が可能になります。'
  },
  {
    id: 'formula-005',
    name: '一緒に疑う',
    type: 'ad_copy',
    template: `【{{トピック}}】あなたは本当にこれを信じますか？

{{挨拶}}

あなたは{{一般的な誤解や業界の通説}}と聞いたことがありますか？

多くの人がこれを信じていますが、実は完全な真実ではないかもしれません。

私たちは何年もの間、{{業界や分野}}において{{一般的な慣行や方法}}を当然のように受け入れてきました。しかし、最近の{{研究や調査}}によると、実はこれが{{問題点や誤解}}であることが明らかになってきました。

例えば：

- {{具体的な誤解や問題点1}}
- {{具体的な誤解や問題点2}}
- {{具体的な誤解や問題点3}}

特に{{特定の例}}の場合、従来の方法では{{具体的な欠点や限界}}という結果になりがちです。

なぜこのような誤解が広まっているのでしょうか？

それは{{誤解が広まった理由}}からです。多くの{{既存の権威や企業}}は、あなたに{{現状維持の理由}}と信じ込ませることで利益を得ています。

しかし、今こそ真実を知る時です。

私たちが{{期間}}かけて行った{{独自の研究や検証}}の結果、{{新しい発見や真実}}が明らかになりました。

この新しいアプローチによって：

1. {{メリット1}}
2. {{メリット2}}
3. {{メリット3}}

が可能になります。

このアプローチの詳細を知りたい方は、以下の{{資料や情報}}をご覧ください。

{{CTA}}

今だけ、{{限定オファー}}もご用意しています。

これからも、業界の「常識」に疑問を持ち、より良い方法を追求していきましょう。

{{署名}}`,
    variables: ['トピック', '挨拶', '一般的な誤解や業界の通説', '業界や分野', '一般的な慣行や方法', '研究や調査', '問題点や誤解', '具体的な誤解や問題点1', '具体的な誤解や問題点2', '具体的な誤解や問題点3', '特定の例', '具体的な欠点や限界', '誤解が広まった理由', '既存の権威や企業', '現状維持の理由', '期間', '独自の研究や検証', '新しい発見や真実', 'メリット1', 'メリット2', 'メリット3', '資料や情報', 'CTA', '限定オファー', '署名'],
    isActive: true,
    createdAt: new Date(2023, 4, 20),
    updatedAt: new Date(2023, 4, 20),
    summary: '一般的な通説や業界の常識に疑問を投げかけ、新しい視点や解決策を提案するフォーミュラです。ユーザーと一緒に「常識」を疑うことで共感を生み出し、既存の方法に不満や疑問を持っているユーザーの興味を強く引きます。革新的な商品やサービスの紹介に特に効果的です。'
  },
  {
    id: 'formula-006',
    name: '成果保証型',
    type: 'ad_copy',
    template: `【保証】{{具体的な成果}}または全額返金！

{{挨拶}}

「{{ユーザーの一般的な不満や問題}}」

このような悩みを抱えていませんか？

実は、この問題を抱えているのはあなただけではありません。多くの{{ターゲットユーザー}}が同じ悩みを持っています。

しかし、今日からはその悩みとサヨナラできます。

私たちの{{商品・サービス名}}は、{{具体的な成果や効果}}を保証します。もし結果が出なければ、全額返金いたします。

なぜそこまで自信があるのか？

それは、すでに{{数字}}人以上の{{ユーザー層}}が実際に結果を出しているからです。

例えば：

- {{事例1：氏名や属性}} → {{達成した具体的な成果}}
- {{事例2：氏名や属性}} → {{達成した具体的な成果}}
- {{事例3：氏名や属性}} → {{達成した具体的な成果}}

私たちの{{商品・サービス}}が選ばれる理由は以下の3つです：

1. {{特徴・メリット1}}：{{詳細説明}}
2. {{特徴・メリット2}}：{{詳細説明}}
3. {{特徴・メリット3}}：{{詳細説明}}

さらに、今回限定で以下の特典もご用意しました：

【特典1】{{特典内容}} （{{価格}}相当）
【特典2】{{特典内容}} （{{価格}}相当）
【特典3】{{特典内容}} （{{価格}}相当）

合計{{総額}}円相当の価値をご提供します！

《全額返金保証について》

私たちは、お客様に100%満足していただきたいと考えています。

そのため、{{保証期間}}以内に{{条件}}を満たさなかった場合、ご購入代金の全額を返金いたします。証明書や領収書は必要ありません。あなたの正直な声をお聞かせいただくだけです。

この保証があるということは、リスクはすべて私たちが負うということです。あなたにリスクはありません。

{{予約や購入方法の説明}}

《期間限定》

この特別なオファーは{{期限}}までの限定となります。それ以降は通常価格の{{通常価格}}円に戻りますので、今すぐお申し込みください。

{{CTA}}

{{署名}}

P.S. {{追伸メッセージ}}`,
    variables: ['具体的な成果', '挨拶', 'ユーザーの一般的な不満や問題', 'ターゲットユーザー', '商品・サービス名', '具体的な成果や効果', '数字', 'ユーザー層', '事例1：氏名や属性', '達成した具体的な成果', '事例2：氏名や属性', '事例3：氏名や属性', '商品・サービス', '特徴・メリット1', '詳細説明', '特徴・メリット2', '特徴・メリット3', '特典内容', '価格', '総額', '保証期間', '条件', '予約や購入方法の説明', '期限', '通常価格', 'CTA', '署名', '追伸メッセージ'],
    isActive: true,
    createdAt: new Date(2023, 4, 25),
    updatedAt: new Date(2023, 4, 25),
    summary: '具体的な成果を保証し、リスクを取り除くことでユーザーの購入障壁を下げるフォーミュラです。「全額返金保証」という強力な約束と、実際の成功事例を組み合わせることで信頼性を高め、限定特典や期間限定オファーで即時行動を促します。結果に自信がある商品やサービスに特に効果的です。'
  },
  {
    id: 'formula-007',
    name: 'お願い型',
    type: 'ad_copy',
    template: `{{緊急性の高いタイトル}}

{{挨拶}}

今日は少し恥ずかしいお願いをしようと思います。でも、私たちが抱えている{{課題や問題}}を解決するためには、あなたのお力が必要なのです。

実は、私たちは現在{{現状の説明}}という状況に直面しています。

このままでは、{{放置した場合の悪影響}}という深刻な事態になりかねません。

特に{{特に影響を受ける人々や対象}}にとっては、{{具体的な影響}}という結果になるでしょう。

私たちは今までも{{これまでの取り組み}}を行ってきましたが、残念ながらそれだけでは不十分です。この状況を打開するためには、あなたのような{{ターゲットの特性}}の方々のサポートが必要不可欠なのです。

お願いは簡単です。

{{具体的な依頼内容}}をしていただけないでしょうか？

これによって得られる効果は計り知れません：

1. {{効果・メリット1}}
2. {{効果・メリット2}}
3. {{効果・メリット3}}

もちろん、あなた自身にとっても{{相手へのメリット}}というメリットがあります。

さらに、今回お願いに応えてくださった方には、感謝の気持ちとして{{特典や謝礼}}をご用意しています。

{{特典の詳細説明}}

お忙しいところ恐縮ですが、{{期限}}までにご対応いただけると大変助かります。

{{依頼の行動手順}}

あなたのご協力が、{{目指す結果や社会的意義}}につながります。どうか力を貸してください。

心よりお願い申し上げます。

{{署名}}

P.S. {{追加のお願いや情報}}`,
    variables: ['緊急性の高いタイトル', '挨拶', '課題や問題', '現状の説明', '放置した場合の悪影響', '特に影響を受ける人々や対象', '具体的な影響', 'これまでの取り組み', 'ターゲットの特性', '具体的な依頼内容', '効果・メリット1', '効果・メリット2', '効果・メリット3', '相手へのメリット', '特典や謝礼', '特典の詳細説明', '期限', '依頼の行動手順', '目指す結果や社会的意義', '署名', '追加のお願いや情報'],
    isActive: true,
    createdAt: new Date(2023, 4, 28),
    updatedAt: new Date(2023, 4, 28),
    summary: '読者に対して直接的かつ誠実にお願いする形式で、共感や協力意識を呼び起こすフォーミュラです。問題や課題を明確に伝え、読者の協力が必要な理由と、協力することによる効果やメリットを強調します。社会的意義のある取り組みや、支援が必要なプロジェクトの広告に特に効果的です。'
  },
  {
    id: 'formula-008',
    name: '写真と割引型',
    type: 'ad_copy',
    template: `【最大{{割引率}}％OFF】{{商品・サービス名}}の特別キャンペーン実施中！

{{画像の説明や挿入指示}}

{{挨拶}}

今日は特別なお知らせがあります！

期間限定で、当社の人気商品「{{商品・サービス名}}」が通常価格{{通常価格}}円から、最大{{割引率}}％OFFの{{割引後価格}}円でご提供いたします！

{{商品・サービスの概要説明}}

この{{商品・サービス名}}の特徴は：

✓ {{特徴・メリット1}}
✓ {{特徴・メリット2}}
✓ {{特徴・メリット3}}
✓ {{特徴・メリット4}}

【お客様の声】

{{顧客の声1：名前・属性}}：「{{体験談や感想}}」

{{顧客の声2：名前・属性}}：「{{体験談や感想}}」

{{画像の説明や挿入指示}}

当社の{{商品・サービス名}}がなぜこれほど人気なのか？それは{{理由や背景}}があるからです。

【今回の特別キャンペーン内容】

◆ 通常価格：{{通常価格}}円
◆ キャンペーン価格：{{割引後価格}}円（{{割引率}}％OFF）
◆ キャンペーン期間：{{開始日}}～{{終了日}}まで

さらに、今回のキャンペーンでは以下の特典もご用意！

① {{特典1}}
② {{特典2}}
③ {{特典3}}

{{画像の説明や挿入指示}}

【ご注文方法】

{{注文方法の説明}}

※在庫には限りがございます。売り切れる前にお早めにご注文ください。

【お客様へのお約束】

{{保証や安心ポイント}}

この機会をお見逃しなく！

{{CTA}}

{{署名}}

P.S. {{追加情報や限定オファー}}`,
    variables: ['割引率', '商品・サービス名', '画像の説明や挿入指示', '挨拶', '通常価格', '割引後価格', '商品・サービスの概要説明', '特徴・メリット1', '特徴・メリット2', '特徴・メリット3', '特徴・メリット4', '顧客の声1：名前・属性', '体験談や感想', '顧客の声2：名前・属性', '理由や背景', '開始日', '終了日', '特典1', '特典2', '特典3', '注文方法の説明', '保証や安心ポイント', 'CTA', '署名', '追加情報や限定オファー'],
    isActive: true,
    createdAt: new Date(2023, 5, 2),
    updatedAt: new Date(2023, 5, 2),
    summary: 'ビジュアル要素（写真や画像）と割引キャンペーンを組み合わせた、商品やサービスの購入を直接的に促すフォーミュラです。視覚的な魅力と価格メリットを前面に押し出し、特典や期間限定性を強調することで即時行動を促します。実店舗や商品、サービスの魅力を視覚的にアピールできる広告に最適です。'
  },
  {
    id: 'formula-009',
    name: '招待状型',
    type: 'ad_copy',
    template: `【ご招待】{{特別なイベントやオファー}}へのご案内

{{挨拶}}

この度、{{会社・団体名}}では、厳選された方々に向けて、{{特別なイベントやオファー}}へのご招待をお送りしています。

あなたは{{招待理由}}から、特別にお選びした{{人数限定}}名様の中のお一人です。

◆ 開催日時：{{日時}}
◆ 開催場所：{{場所}}
◆ 参加費：{{金額}}（通常{{通常金額}}）

【このイベントで得られるもの】

このイベントでは、以下のような価値ある内容をご提供いたします：

1. {{提供内容・メリット1}}
2. {{提供内容・メリット2}}
3. {{提供内容・メリット3}}

参加された方からは、以下のような声をいただいています：

「{{参加者の声1}}」 - {{氏名・属性1}}

「{{参加者の声2}}」 - {{氏名・属性2}}

【限定特典】

さらに、今回のご招待に応えていただいた方には、以下の特別特典をご用意しております：

★ {{特典1}}（{{価値}}相当）
★ {{特典2}}（{{価値}}相当）

これらの特典だけでも総額{{総額}}円相当の価値があります。

【お申し込み方法】

お申し込みは簡単です。以下の方法でご予約ください：

{{予約方法}}

※ご招待枠には限りがございます。満席になり次第、締め切らせていただきますので、お早めにお申し込みください。

また、このご招待は{{招待期限}}までの期間限定となっております。

【なぜこのようなご招待をお送りしているのか】

{{背景や理由}}

私たちは{{企業理念やミッション}}を大切にしています。このイベントを通じて、{{期待される成果}}を実現したいと考えております。

あなたのご参加を心よりお待ちしております。

{{署名}}

P.S. {{追加情報・緊急性}}`,
    variables: ['特別なイベントやオファー', '挨拶', '会社・団体名', '招待理由', '人数限定', '日時', '場所', '金額', '通常金額', '提供内容・メリット1', '提供内容・メリット2', '提供内容・メリット3', '参加者の声1', '氏名・属性1', '参加者の声2', '氏名・属性2', '特典1', '価値', '特典2', '総額', '予約方法', '招待期限', '背景や理由', '企業理念やミッション', '期待される成果', '署名', '追加情報・緊急性'],
    isActive: true,
    createdAt: new Date(2023, 5, 5),
    updatedAt: new Date(2023, 5, 5),
    summary: '特別なイベントや限定オファーへの招待状形式で、選ばれた人だけが参加できるという特別感を演出するフォーミュラです。限定性と特別感を強調し、招待された側に価値を感じさせることで参加率を高めます。セミナー、イベント、会員限定オファーなどの告知に効果的です。'
  },
  {
    id: 'formula-010',
    name: '悩み（2人比較型）',
    type: 'ad_copy',
    template: `「{{問題や悩み}}」を乗り越えた{{成功者}}と、いまだに苦しむ{{失敗者}}の違い

{{挨拶}}

あなたは、{{問題や悩み}}に悩まされていませんか？

この問題に直面している人はあなただけではありません。実は、多くの{{ターゲット層}}が同じ悩みを抱えているのです。

しかし、同じ悩みを持っていた人の中にも、すでにこの問題を解決し、{{理想的な状態}}を実現している人がいます。一方で、いまだに苦しみ続けている人もいます。

ではなぜ、こんなにも大きな差が生まれるのでしょうか？

【成功している{{成功者}}の場合】

{{成功者}}さん（{{成功者の属性}}）は、以前は{{成功者の過去の状況}}という状況でした。

しかし、ある重要な転機をきっかけに、{{成功者の取った行動}}ことを始めました。その結果：

✓ {{成功者の達成した結果1}}
✓ {{成功者の達成した結果2}}
✓ {{成功者の達成した結果3}}

という成果を手に入れることができました。

【現在も苦しんでいる{{失敗者}}の場合】

一方、{{失敗者}}さん（{{失敗者の属性}}）は、相変わらず{{失敗者の現状}}という状況が続いています。

その理由は：

✗ {{失敗の原因1}}
✗ {{失敗の原因2}}
✗ {{失敗の原因3}}

にあります。

この結果、{{失敗者}}さんは{{失敗の結果}}という状態に陥っているのです。

【成功者と失敗者の決定的な違い】

成功者と失敗者の間にある最大の違いは何でしょうか？

それは{{決定的な違い}}です。

具体的には：

1. {{違いの詳細1}}
2. {{違いの詳細2}}
3. {{違いの詳細3}}

【あなたがすべきこと】

もしあなたが{{成功者}}さんのように{{理想的な状態}}を実現したいなら、今すぐ行動を起こす必要があります。

そのために、私たちは{{提供するソリューション}}をご用意しました。

このソリューションを活用することで：

• {{メリット1}}
• {{メリット2}}
• {{メリット3}}

といった成果を得ることが可能です。

実際に、このソリューションを活用した方々からは：

「{{ユーザーの声}}」 - {{ユーザー名}}

といった声をいただいています。

【期間限定オファー】

今なら、通常{{通常価格}}円のところ、期間限定で{{特別価格}}円でご提供しています。

さらに、今すぐお申し込みいただいた方には：

★ {{特典1}}
★ {{特典2}}

もプレゼント！

このチャンスをお見逃しなく。

{{CTA}}

{{署名}}

P.S. {{追加情報・緊急性}}`,
    variables: ['問題や悩み', '成功者', '失敗者', '挨拶', 'ターゲット層', '理想的な状態', '成功者の属性', '成功者の過去の状況', '成功者の取った行動', '成功者の達成した結果1', '成功者の達成した結果2', '成功者の達成した結果3', '失敗者の属性', '失敗者の現状', '失敗の原因1', '失敗の原因2', '失敗の原因3', '失敗の結果', '決定的な違い', '違いの詳細1', '違いの詳細2', '違いの詳細3', '提供するソリューション', 'メリット1', 'メリット2', 'メリット3', 'ユーザーの声', 'ユーザー名', '通常価格', '特別価格', '特典1', '特典2', 'CTA', '署名', '追加情報・緊急性'],
    isActive: true,
    createdAt: new Date(2023, 5, 8),
    updatedAt: new Date(2023, 5, 8),
    summary: '同じ問題を抱えていた2人の対照的な結果を比較することで、正しい選択の重要性を強調するフォーミュラです。成功者と失敗者の違いを明確に示し、読者が望む側（成功者）になるための具体的な方法を提案します。読者の共感を呼び起こし、行動を促すのに効果的です。'
  },
  {
    id: 'formula-011',
    name: 'サブスクレター型',
    type: 'ad_copy',
    template: `【無料】{{メルマガやニュースレターの名称}}のご案内

{{挨拶}}

あなたは最近、{{業界・分野}}において以下のような変化に気づいていませんか？

• {{業界トレンド1}}
• {{業界トレンド2}}
• {{業界トレンド3}}

これらの変化に対応し、常に最新の情報を得ることは、{{ターゲット層}}にとって非常に重要です。しかし、質の高い情報を効率的に集めるのは容易ではありません。

そこで、{{会社・個人名}}が提供する「{{メルマガやニュースレターの名称}}」をご紹介します。

【{{メルマガやニュースレターの名称}}とは】

「{{メルマガやニュースレターの名称}}」は、{{頻度}}で配信される無料のニュースレターです。

このニュースレターでは、以下のような価値ある情報を毎回お届けしています：

✓ {{提供情報1}}
✓ {{提供情報2}}
✓ {{提供情報3}}
✓ {{提供情報4}}

現在、{{購読者数}}人以上の{{ターゲット層}}が購読し、日々の{{活動や業務}}に役立てています。

【読者からの声】

「{{読者の声1}}」 - {{読者名1}}（{{読者の属性1}}）

「{{読者の声2}}」 - {{読者名2}}（{{読者の属性2}}）

「{{読者の声3}}」 - {{読者名3}}（{{読者の属性3}}）

【今すぐ登録いただくと】

今すぐご登録いただいた方には、通常非公開の以下の特典をプレゼントします：

1. {{特典1}}：{{特典1の説明}}
2. {{特典2}}：{{特典2の説明}}
3. {{特典3}}：{{特典3の説明}}

これらの特典だけでも合計{{特典の価値}}円相当の価値があります。

【登録はとても簡単】

登録はわずか30秒で完了します。以下の2ステップだけです：

1. {{登録方法ステップ1}}
2. {{登録方法ステップ2}}

メールアドレスの管理には細心の注意を払っており、スパムメールを送信することは一切ありません。また、いつでも簡単に配信を停止することができます。

【あなたの人生を変える可能性がある情報】

「{{メルマガやニュースレターの名称}}」を購読することで得られる情報は、あなたの{{得られるメリット}}を大きく向上させる可能性があります。

情報は力です。そして、正しい情報を持つ人だけが、{{業界・分野}}で成功できるのです。

今すぐ下記のボタンをクリックして、「{{メルマガやニュースレターの名称}}」にご登録ください。

{{CTA}}

{{署名}}

P.S. {{追伸メッセージ}}`,
    variables: ['メルマガやニュースレターの名称', '挨拶', '業界・分野', '業界トレンド1', '業界トレンド2', '業界トレンド3', 'ターゲット層', '会社・個人名', '頻度', '提供情報1', '提供情報2', '提供情報3', '提供情報4', '購読者数', '活動や業務', '読者の声1', '読者名1', '読者の属性1', '読者の声2', '読者名2', '読者の属性2', '読者の声3', '読者名3', '読者の属性3', '特典1', '特典1の説明', '特典2', '特典2の説明', '特典3', '特典3の説明', '特典の価値', '登録方法ステップ1', '登録方法ステップ2', '得られるメリット', 'CTA', '署名', '追伸メッセージ'],
    isActive: true,
    createdAt: new Date(2023, 5, 10),
    updatedAt: new Date(2023, 5, 10),
    summary: 'メールマガジンやニュースレターへの登録を促すフォーミュラです。業界の最新情報や価値ある情報を定期的に受け取ることのメリットを強調し、登録者限定の特典を提供することで即時行動を促します。長期的な顧客関係構築の第一歩として、メールリストの獲得に効果的です。'
  },
  {
    id: 'formula-lp-001',
    name: 'セミナー型',
    type: 'lp_article',
    template: `#フォーミュラ：

あなたは優秀なダイレクトレスポンスのコピーライターです。
下記のデータを使い、完全に以下のフォーミュラで、誤字脱字なく、記事を作成してください。なお、以下の参考テキストの構造や表現方法を参考にしてください。

#フォーミュラ：

あなたは{{希望}}したいけど、
いつ、どう、勉強を始めればいいかわからないなあ・・・
この悩みは今日、たった{{時間}}で解決できます…

新規開催！
{{セミナー名}}


「{{希望}}したい。
でも、どこから始めればいいですか？」

これは、人がよく思う疑問の中で、でてくるものです。そして、この悩みを解決するために、今回、新しいセミナーを開催します。詳しくお知らせしていきます。

人間は延べ計{{延べ人数}}人にこれを教えていました。「これから、{{希望}}したい」と考える人の中で、まず最初の大きな壁になるのは、『いつ、どう学べばいいか？どこから始めればいいか？』という壁です。よく聞くと、この壁の存在によって、多くの人が{{希望達成していない}}と言われていて、悔しくはありません。

学びについても、あらゆるのものを検討すると困る。何の情報が正しいのかわからない。

まさに私の話で言えば、どうやって{{情報源}}すればいいのか？どれが{{情報源}}なのか・・・？など、わからないことだらけ、不明点だらけが故に、結局なにも出来ないでしまうのです。

{{ネガティブな状況の一例}}よう感覚です。{{一例の続き}}なのです。{{何か}}しようとしても、{{何か}}できない・・・。

そして、どうやればいいか悩むようになります。


「{{悩みのセリフ}}・・・？」

でも、この悩みは誰かに相談できるものではありません。多くの人で、自信で学べる成功のプロのような人たちめったにいない・・・という現実はあると思います。{{あなたが繰り返すフレーズ}}。そしてだれにも相談できず、一人で悩み、考えたりすることになるのでは..

もしときない中で、この不安がいろいろなタイミングで発生してしまっているのではないでしょうか？

例えば、{{不安や悩みが発生するときのシーン}}しているとき・・・。{{仕事か}}んだり、一人で帰る途中で・・・。あるいは{{不安や悩みが発生するときのシーン}}で・・・。「{{不安な悩みのセリフ}}・・・？」この気持ちは、よくわかります。


{{セミナーのテーマ}}は重要。
でも、ああ、

このあとできちんと伝えられることは、{{セミナーのテーマ}}は、{{対象者}}にとってとても重要だということです。実際、どんなに{{何か}}していても、{{何か}}できなければ、{{ネガティブな結果}}になってしまいます。こんなこと続けていると自分自身でし思っていても、相手の子様でも、いつも怖いと思ってしまい、すごく辛いですよね。

{{何か}}することで、{{ベネフィット}}することができます。また、{{何か}}を{{何か}}して、{{ベネフィット}}することができます。それまでできなかった、{{何か}}ができるようになります。


では、どうすれば、この不安をなくすことができるのか？

多くの人が、先ほど話した悩みを持っています。そのうえで、{{何か}}できない。あるいは、{{対象者}}という{{何か}}まで、望むように{{何か}}できな... あるいは{{観客的な事}}の状態で悩んでます。

それは、自力で解決するのは簡単ではありません。ネット記事や、あるいはYouTubeに転がってる動画を見て、整理できるものではありません。だからこそ考えたのが、このセミナーを開催することでした。

{{セミナー名}}
日時：{{日時や時間}}

このセミナーの目的はシンプルです。

「{{希望}}するために、成果を出すために、いつ、どう、勉強を始めればいいか？」先ほど話した悩みを解決するために、セミナーします。

これまで、人たちはいろいろな人に{{テーマ}}について伝えてきました。そして、この間にいろいろな人が、{{何か}}しながら、{{セミナーで学ぶ知識やスキル}}を使って、{{何か}}を{{何か}}してきました。数多くの人を見てきました。

・{{悩んでた対象者}}が{{理想の状態}}できるよう
・{{悩んでた対象者}}が{{理想の状態}}できるよう
・{{悩んでた対象者}}が{{理想の状態}}できるよう

それ以外にも、

・{{悩んでた対象者}}が{{理想の状態}}した人
・{{悩んでた対象者}}が{{理想の状態}}した人・・・

数多くの人を見てきました。なぜ彼らが{{得られる結果}}できたのか？彼らの知恵で、何が一番計算したのか？{{希望}}するために、彼らが{{何か}}できた結果・・・などに彼らの実際の様子を見て、人たちがどうだったかをお伝えします。

また、{{対象者}}が{{希望}}できる最短ルートです。いつ、どう、勉強を始めればいいか？。セミナーでは、話をするだけでなく、学びたいことができるようにワーク演習も行います。さらに、わからないことを質問していただき、質疑応答のセッションもあります。

{{テーマ}}導入に不安があった・失敗していたに関わらずの悩みを解消し、あなたが成果を得るスピードを速めることが、このセミナーの目的です。セミナーでは、以下の内容をお話しします。

（以下、セミナーのアジェンダや、優先順位がわかるような形式で、内容を伝える）`,
    variables: ['希望', '時間', 'セミナー名', '延べ人数', '希望達成していない', '情報源', 'ネガティブな状況の一例', '一例の続き', '何か', '悩みのセリフ', 'あなたが繰り返すフレーズ', '不安や悩みが発生するときのシーン', '仕事か', '不安な悩みのセリフ', 'セミナーのテーマ', '対象者', 'ネガティブな結果', 'ベネフィット', '観客的な事', '日時や時間', 'テーマ', 'セミナーで学ぶ知識やスキル', '悩んでた対象者', '理想の状態', '得られる結果'],
    isActive: true,
    isDefault: true,
    createdAt: new Date(2023, 5, 15),
    updatedAt: new Date(2023, 5, 15),
    summary: 'セミナーやイベントを告知するためのLP記事フォーミュラです。読者の悩みや課題に共感し、セミナーで得られる具体的な解決策やメリットを提示します。参加意欲を高め、申し込みにつなげるための効果的な構成になっています。'
  },
  {
    id: 'formula-lp-002',
    name: '万能型',
    type: 'lp_article',
    template: `#フォーミュラ：

あなたは優秀なダイレクトレスポンスのコピーライターです。
下記のデータを使い、完全に以下のフォーミュラで、誤字脱字なく、記事を作成してください。なお、以下の参考テキストの構造や表現方法を参考にしてください。

#フォーミュラ：

{{魅力的な事実の要素など（あれば記入）}}

{{商品名}}

もしも、{{得られる結果}}できたら、
あなたの{{人生}}はどう変わるでしょうか？

宜しければちょっと...
{{理想の状況}}だけを、お試しください...

{{行動ボタンの文言}}

■{{商品との違い1}}
{{商品との違い1の短い説明}}

■{{商品との違い2}}
{{商品との違い2の短い説明}}

■{{商品との違い3}}
{{商品との違い3の短い説明}}


あなたはこんな経験ありませんか？

「{{押し寄せている不満}}でも、{{問題}}できない…」
「{{押し寄せている不満}}していても、{{問題}}できない…」
「{{ネガティブな事}}してても…」

こんな時は「{{客観的なセリフ}}」と{{ネガティブな感情}}いる…まさにね…

だからね、もしも{{不安な事}}でも、{{不安な事}}でも、{{理想の結果}}だったら…

そして、{{事業の要素やサービスなど}}を使って、{{ベネフィット}}できるようになったら…

{{理想の結果}}し放題だったらどれだけ{{ベネフィット}}できるでしょうか？そして、どれだけ{{ベネフィット}}できるでしょうか？

この結果、{{人間関係の視点において、理想の結果}}でしょうか？

こんな想像に答えるために生まれたのが、{{事業要素}}の「{{商品名}}」です。

では、なぜあなたがこの{{商品カテゴリー}}を{{考慮}}するべきなのか？この{{商品カテゴリー}}とは何が違うのか？それについて3点お伝えします。


1.{{商品との違い1}}
{{商品との違い1の短い説明}}

{{商品との違い1を200文字の説明。 #参考テキストを参考に、明確に、端的に記述する}}


2.{{商品との違い2}}
{{商品との違い2の短い説明}}

{{商品との違い2を200文字の説明。 #参考テキストを参考に、明確に、端的に記述する}}


3.{{商品との違い3}}
{{商品との違い3の短い説明}}

{{商品との違い3を200文字の説明。 #参考テキストを参考に、明確に、端的に記述する}}



{{権威の例などあれば記入）}}

{{目次や商品紹介の概要などなど（あれば記入）}}

{{保証の記述（キャッシュバックの場合のみ）}}

{{著者紹介（あれば記入）}}

{{会社を読んだ方の声（あれば記入）}}

{{購入リンクとオファー}}`,
    variables: ['魅力的な事実の要素など', '商品名', '得られる結果', '人生', '理想の状況', '行動ボタンの文言', '商品との違い1', '商品との違い1の短い説明', '商品との違い2', '商品との違い2の短い説明', '商品との違い3', '商品との違い3の短い説明', '押し寄せている不満', '問題', 'ネガティブな事', '客観的なセリフ', 'ネガティブな感情', '不安な事', '理想の結果', '事業の要素やサービスなど', 'ベネフィット', '人間関係の視点において、理想の結果', '事業要素', '商品カテゴリー', '考慮', '権威の例などあれば記入', '目次や商品紹介の概要などなど', '保証の記述', '著者紹介', '会社を読んだ方の声', '購入リンクとオファー'],
    isActive: true,
    isDefault: false,
    createdAt: new Date(2023, 5, 20),
    updatedAt: new Date(2023, 5, 20),
    summary: '商品やサービスの紹介に適した汎用的なLP記事フォーミュラです。読者の悩みや課題に共感し、その解決策となる商品・サービスの特徴やベネフィットを論理的に提示します。商品の差別化ポイントを明確に伝え、購入意欲を高める構成になっています。'
  }
];

// 「農薩」を「農薬」に修正する部分を探してすべて修正します
export const mockBasicInfos = [
  // ... existing code ...
];

// ... existing code ...