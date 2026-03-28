export type Locale = "uz-latn" | "uz-cyrl" | "ru";

export const locales: Locale[] = ["uz-latn", "uz-cyrl", "ru"];

export const localeLabels: Record<Locale, string> = {
  "uz-latn": "Oʻzbek (Lotin)",
  "uz-cyrl": "Ўзбек (Кирилл)",
  ru: "Русский",
};

export type Translations = {
  metaTitle: string;
  metaDescription: string;
  nav: {
    product: string;
    benefits: string;
    delivery: string;
    contacts: string;
    reviews: string;
    order: string;
    menu: string;
    language: string;
  };
  hero: { title: string; subtitle: string; cta: string; slideAlt: string };
  about: { title: string; body: string };
  benefits: { title: string; items: [string, string, string] };
  delivery: { title: string; lead: string; boxTitle: string; boxText: string; giftTitle: string; giftText: string };
  contacts: { title: string; telegram: string; channel: string; instagram: string; formTitle: string; formName: string; formMessage: string; formSubmit: string };
  reviews: { title: string; items: { quote: string; name: string }[]; note: string };
  footer: { rights: string };
};

export const translations: Record<Locale, Translations> = {
  "uz-latn": {
    metaTitle: "Hijabi Hadicha — hijob va aksessuarlar",
    metaDescription:
      "Zamonaviy, qulay hijoblar. Oʻzbekiston boʻylab BTS orqali 1–3 kun. Telegram orqali tez buyurtma.",
    nav: {
      product: "Mahsulot",
      benefits: "Afzalliklar",
      delivery: "Yetkazib berish",
      contacts: "Aloqa",
      reviews: "Fikrlar",
      order: "Buyurtma",
      menu: "Menyu",
      language: "Til",
    },
    hero: {
      title: "Hijabi Hadicha — har bir ayol uchun uslub va qulaylik",
      subtitle: "Yumshoq matolar, zamonaviy dizayn va muloyim ranglar — kundalik va maxsus kunlar uchun.",
      cta: "Hozir buyurtma qiling",
      slideAlt: "Hijob kolleksiyasi",
    },
    about: {
      title: "Mahsulot haqida",
      body:
        "Biz sifatli matolardan tikilgan hijoblarni taklif qilamiz: yaxshi tutadigan, nafas oladigan va uzoq muddat xizmat qiladigan modellar. Har bir detal — oʻqish va charmlilik uchun.",
    },
    benefits: {
      title: "Nima oʻziga xos?",
      items: [
        "Premium sifatdagi matolar va akkurat tikuv",
        "Rang va model tanlash kengligi",
        "Kuniga mos qulay model — bezovta qilmaydi",
      ],
    },
    delivery: {
      title: "Yetkazib berish",
      lead: "Oʻzbekiston boʻylab BTS orqali 1–3 kun ichida yetkazib beramiz.",
      boxTitle: "Chiroyli quti",
      boxText: "Har bir buyurtma alohida bezatilgan qutida joʻnatiladi — sovgʻa taʼsirini saqlaymiz.",
      giftTitle: "Kichik sovgʻa",
      giftText: "Har bir paketda siz uchun kichik bonus — minnatdorchilik bilan.",
    },
    contacts: {
      title: "Aloqa",
      telegram: "Telegram",
      channel: "Telegram kanal",
      instagram: "Instagram",
      formTitle: "Tez xabar",
      formName: "Ismingiz",
      formMessage: "Buyurtma yoki savolingiz",
      formSubmit: "Telegram orqali yuborish",
    },
    reviews: {
      title: "Mijozlar fikri",
      items: [
        { quote: "Matosi yumshoq, rangi ajoyib — kun boʻyi qulay kiyaman.", name: "Dilorom, Toshkent" },
        { quote: "Qutisi juda chiroyli edi, sovgʻa uchun rahmat!", name: "Madina, Samarqand" },
        { quote: "Tez yetkazish va muloyim muloqot. Yana buyurtma qilaman.", name: "Nilufar, Buxoro" },
      ],
      note: "Namuna fikrlar — oʻz fikrlaringizni yuboring, biz joylashtiramiz.",
    },
    footer: { rights: "Barcha huquqlar himoyalangan." },
  },
  "uz-cyrl": {
    metaTitle: "Ҳижоби Ҳадича — ҳижоб ва аксессуарлар",
    metaDescription:
      "Замонавий, қулай ҳижоблар. Ўзбекистон бўйлаб BTS орқали 1–3 кун. Telegram орқали тез буюртма.",
    nav: {
      product: "Махсулот",
      benefits: "Афзалликлар",
      delivery: "Етказиб бериш",
      contacts: "Алоқа",
      reviews: "Фикрлар",
      order: "Буюртма",
      menu: "Меню",
      language: "Тил",
    },
    hero: {
      title: "Ҳижоби Ҳадича — ҳар бир аёл учун услуб ва қулайлик",
      subtitle: "Юмшоқ матолар, замонавий дизайн ва мулойим ранглар — кундалик ва махсус кунлар учун.",
      cta: "Ҳозир буюртма қилинг",
      slideAlt: "Ҳижоб коллекцияси",
    },
    about: {
      title: "Махсулот ҳақида",
      body:
        "Биз сифатли матолардан тикилган ҳижобларни таклиф қиламиз: яхши турадиган, нафас оладиган ва узоқ муддат хизмат қиладиган моделлар. Ҳар бир детал — ўқиш ва чармлилик учун.",
    },
    benefits: {
      title: "Нима ўзига хос?",
      items: [
        "Премиум сифатдаги матолар ва акурат тикув",
        "Ранг ва модел танлаш кенглиги",
        "Кунига мос қулай модел — безовта қилмайди",
      ],
    },
    delivery: {
      title: "Етказиб бериш",
      lead: "Ўзбекистон бўйлаб BTS орқали 1–3 кун ичида етказиб берамиз.",
      boxTitle: "Чиройли қути",
      boxText: "Ҳар бир буюртма алоҳида безатилган қутида жўнатилади — совға таъсирини сақлаймиз.",
      giftTitle: "Кичик совға",
      giftText: "Ҳар бир пакетда сиз учун кичик бонус — миннатдорчилик билан.",
    },
    contacts: {
      title: "Алоқа",
      telegram: "Telegram",
      channel: "Telegram канал",
      instagram: "Instagram",
      formTitle: "Тез хабар",
      formName: "Исмингиз",
      formMessage: "Буюртма ёки саволингиз",
      formSubmit: "Telegram орқали юбориш",
    },
    reviews: {
      title: "Мижозлар фикри",
      items: [
        { quote: "Матоси юмшоқ, ранги ажойиб — кун бўйи қулай кийаман.", name: "Дилором, Тошкент" },
        { quote: "Қутиси жуда чиройли эди, совға учун раҳмат!", name: "Мадина, Самарқанд" },
        { quote: "Тез етказиш ва мулойим мулоқот. Яна буюртма қиламан.", name: "Нилуфар, Бухоро" },
      ],
      note: "Намуна фикрлар — ўз фикрларингизни юборинг, биз жойлаштирамиз.",
    },
    footer: { rights: "Барча ҳуққлар ҳимояланган." },
  },
  ru: {
    metaTitle: "Hijabi Hadicha — хиджабы и аксессуары",
    metaDescription:
      "Современные, удобные хиджабы. Доставка по Узбекистану через BTS за 1–3 дня. Быстрый заказ в Telegram.",
    nav: {
      product: "О продукте",
      benefits: "Преимущества",
      delivery: "Доставка",
      contacts: "Контакты",
      reviews: "Отзывы",
      order: "Заказ",
      menu: "Меню",
      language: "Язык",
    },
    hero: {
      title: "Хиджабы Hadicha — стиль и удобство для каждой",
      subtitle: "Нежные ткани, актуальный дизайн и мягкие оттенки — для каждого дня и особых моментов.",
      cta: "Заказать сейчас",
      slideAlt: "Коллекция хиджабов",
    },
    about: {
      title: "О продукте",
      body:
        "Мы предлагаем хиджабы из качественных материалов: модели, которые хорошо держат форму, «дышат» и служат долго. Каждая деталь — для комфорта и элегантности.",
    },
    benefits: {
      title: "Почему нам доверяют",
      items: [
        "Премиальные ткани и аккуратный пошив",
        "Широкий выбор оттенков и фасонов",
        "Удобная посадка на весь день — без дискомфорта",
      ],
    },
    delivery: {
      title: "Доставка",
      lead: "Доставка по Узбекистану через BTS за 1–3 дня.",
      boxTitle: "Красивая упаковка",
      boxText: "Каждый заказ отправляем в отдельной стильной коробке — как небольшой подарок себе.",
      giftTitle: "Маленький подарок",
      giftText: "В каждой посылке — приятный бонус от нас с благодарностью.",
    },
    contacts: {
      title: "Контакты",
      telegram: "Telegram",
      channel: "Telegram-канал",
      instagram: "Instagram",
      formTitle: "Быстрое сообщение",
      formName: "Ваше имя",
      formMessage: "Заказ или вопрос",
      formSubmit: "Отправить в Telegram",
    },
    reviews: {
      title: "Отзывы",
      items: [
        { quote: "Ткань нежная, цвет великолепный — ношу весь день с комфортом.", name: "Дилором, Ташкент" },
        { quote: "Коробка очень красивая, спасибо за подарок!", name: "Мадина, Самарканд" },
        { quote: "Быстрая доставка и тёплое общение. Закажу ещё.", name: "Нилуфар, Бухара" },
      ],
      note: "Примеры отзывов — пришлите свой, мы добавим на сайт.",
    },
    footer: { rights: "Все права защищены." },
  },
};
