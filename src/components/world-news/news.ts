let idProvider: number = 0;

export class Website {
    readonly id: number;

    constructor(
        public readonly name: string,
        public readonly url: string
    ) {
        this.id = ++idProvider;
    }
}

export class Country {
    readonly id: number;

    constructor(
        public readonly name: string,
        public readonly websites: Website[]
    ) {
        this.id = ++idProvider;
    }
}

export class Section {
    readonly id: number;

    constructor(
        public readonly countries: Country[]
    ) {
        this.id = ++idProvider;
    }
}

export class News {
    readonly id: number;

    constructor(
        public readonly sections: Section[]
    ) {
        this.id = ++idProvider;
    }
}

const newsSources = new News(
    [
        new Section(
            [
                new Country(
                    "United Kingdom",
                    [
                        new Website("The Guardian", "https://www.theguardian.com"),
                        new Website("British Broadcasting Corporation (BBC)", "https://www.bbc.com/"),
                        new Website("The Telegraph", "https://www.telegraph.co.uk"),
                        new Website("Financial Times", "https://www.ft.com/"),
                        new Website("The Independent", "https://www.independent.co.uk/")
                    ]
                ),
                new Country(
                    "United States",
                    [
                        new Website("Cable News Network (CNN)", "https://cnn.com/"),
                        new Website("The New York Times", "https://www.nytimes.com/"),
                        new Website("Fox News", "https://www.foxnews.com/"),
                        new Website("NBC News", "https://www.nbcnews.com/"),
                        new Website("Washington Post", "https://www.washingtonpost.com/"),
                        new Website("The Wall Street Journal", "https://www.wsj.com/"),
                        new Website("USA Today", "https://www.usatoday.com/"),
                        new Website("Los Angeles Times", "https://www.latimes.com/"),
                        new Website("Bloomberg", "https://www.bloomberg.com"),
                        new Website("Reuters", "https://www.reuters.com/"),
                        new Website("Public Radio International", "https://www.pri.org/"),
                        new Website("CNBC", "https://www.cnbc.com/"),
                        new Website("New York Post", "https://nypost.com/"),
                        new Website("Time", "https://time.com/"),
                        new Website("The Atlantic", "https://www.theatlantic.com"),
                        new Website("U.S. News", "https://www.usnews.com/"),
                        new Website("CBS News", "https://www.cbsnews.com/"),
                        new Website("Houston Chronicle", "https://www.chron.com/"),
                        new Website("SFGate", "https://www.sfgate.com/")
                    ]
                ),
                new Country("Australia",
                    [
                        new Website("ABC News", "https://abcnews.go.com/"),
                        new Website("news.com.au", "https://www.news.com.au/")
                    ]
                ),
                new Country("Canada",
                    [
                        new Website("Canadian Broadcasting Corporation (CBC)", "https://www.cbc.ca/")
                    ]
                ),
                new Country("France",
                    [
                        new Website("France 24", "https://www.france24.com/en/")
                    ]
                ),
                new Country("Germany",
                    [
                        new Website("Deutsche Welle", "https://www.dw.com/en/"),
                        new Website("Spiegel", "https://www.spiegel.de/international/")
                    ]
                )
            ]),
        new Section([
            new Country("Japan",
                [
                    new Website("Nikkei Asian Review", "https://asia.nikkei.com/"),
                    new Website("The Asahi Shimbun", "https://www.asahi.com/ajw/"),
                    new Website("The Japan News", "https://the-japan-news.com/"),
                    new Website("The Japan Times", "https://www.japantimes.co.jp/")
                ]
            ),
            new Country("South Korea",
                [
                    new Website("The Chosun Ilbo", "https://english.chosun.com/"),
                    new Website("Korea Joongang Daily", "https://koreajoongangdaily.joins.com/"),
                    new Website("The Hankyoreh", "https://english.hani.co.kr/"),
                    new Website("Daily NK", "https://www.dailynk.com/english/")
                ]
            ),
            new Country("Taiwan",
                [
                    new Website("Taipei Times", "https://www.taipeitimes.com/")
                ]
            ),
            new Country("Singapore",
                [
                    new Website("Straits Times", "https://www.straitstimes.com/")
                ]
            ),
            new Country("Malaysia",
                [
                    new Website("New Straits Times", "https://www.nst.com.my")
                ]
            ),
            new Country("Qatar",
                [
                    new Website("Al Jazeera", "https://www.aljazeera.com/")
                ]
            ),
            new Country("United Arab Emirates",
                [
                    new Website("Gulf news", "https://gulfnews.com/")
                ]
            ),
            new Country("Saudi Arabia",
                [
                    new Website("Arab news", "https://www.arabnews.com/")
                ]
            ),
            new Country("India",
                [
                    new Website("India Times", "https://www.indiatimes.com/"),
                    new Website("Hindustan Times", "https://www.hindustantimes.com/"),
                    new Website("The Hindu", "https://www.thehindu.com/"),
                    new Website("TFIPost", "https://tfipost.com/")
                ]
            ),
            new Country("Israel",
                [
                    new Website("The Jerusalem Post", "https://www.jpost.com/")
                ]
            )
        ]),
        new Section([
                new Country("Russia",
                    [
                        new Website("Russia Today", "https://www.rt.com"),
                        new Website("Pravda", "https://english.pravda.ru/"),
                        new Website("Sputnik News", "https://sputniknews.com/"),
                        new Website("Itar Tass", "https://tass.com/")
                    ]
                ),
                new Country("China",
                    [
                        new Website("South China Morning Post", "https://www.scmp.com/"),
                        new Website("CGTN", "https://www.cgtn.com/"),
                        new Website("CCTV", "https://english.cctv.com/"),
                        new Website("Xinhua", "https://english.news.cn/"),
                        new Website("People's Daily", "http://en.people.cn/"),
                        new Website("China Daily", "https://www.chinadaily.com.cn/"),
                        new Website("Caixin", "https://www.caixinglobal.com/")
                    ]
                ),
                new Country("Turkey",
                    [
                        new Website("Anadolu Agency", "https://aa.com.tr/en")
                    ]
                ),
                new Country("North Korea",
                    [
                        new Website("Rodong Sinmun", "http://rodong.rep.kp/en/")
                    ]
                )
            ]
        )
    ]
);

export default newsSources
