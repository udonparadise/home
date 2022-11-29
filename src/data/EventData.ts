import { Group } from '../const';
import { eventItem, event } from '../model/Event';

const e2022: event[] = [
  {
    month: 11,
    day: 29,
    group: Group.JUICE,
    name: 'Juice=Juice CONCERT TOUR ～final: nouvelle vague～',
    site: '日本武道館',
    time: '18:00',
    note: '中止'
  },
  {
    month: 10,
    day: 24,
    group: Group.BEYO,
    name: 'BEYOOOOONDS/雨ノ森 川海 岡村美波バースデーイベント2022',
    site: 'LANDMARK HALL',
    time: '16:45/19:00',
  },
  {
    month: 10,
    day: 15,
    group: Group.JUICE,
    name: 'Hello! Project 2022 Autumn CITY CIRCUIT　Juice=Juice CONCERT TOUR ～nouvelle vague～',
    site: 'ベイシア文化ホール 大ホール',
    time: '19:00'
  },
  {
    month: 10,
    day: 15,
    group: Group.BEYO,
    name: 'Hello! Project 2022 Autumn CITY CIRCUIT　BEYOOOOO2NDS CONCERT TOUR ～天高く、ビヨ燃ゆる秋～',
    site: 'ベイシア文化ホール 大ホール',
    time: '15:30'
  },
  {
    month: 10,
    day: 8,
    group: Group.FM,
    name: '20周年記念！大感謝ライブ！～ミキティアイドルやります！秋の大集会！～AGAIN!!!!!また来てね～',
    site: '新宿BLAZE',
    time: '14:30'
  },
  {
    month: 8,
    day: 27,
    group: Group.ANGE,
    name: 'Hello! Project 2022 Summer CITY CIRCUIT　アンジュルム CONCERT TOUR 〜The ANGERME Encore〜',
    site: '中野サンプラザ',
    time: '18:00'
  },
  {
    month: 8,
    day: 27,
    group: Group.BEYO,
    name: 'Hello! Project 2022 Summer CITY CIRCUIT　BEYOOOOOND1St CONCERT TOUR 〜もういっちょどんと来い! BE HAPPY!〜',
    site: '中野サンプラザ',
    time: '14:30',
    note: 'ライブビューイング'
  },
  {
    month: 7,
    day: 9,
    group: Group.JUICE,
    name: 'Hello! Project 2022 Summer CITY CIRCUIT　Juice=Juice CONCERT TOUR 〜terzo bis〜',
    site: '中野サンプラザ',
    time: '18:00'
  },
  {
    month: 5,
    day: 30,
    group: Group.JUICE,
    name: 'Juice=Juice CONCERT TOUR 〜terzo〜 FINAL 稲場愛香卒業スペシャル',
    site: '日本武道館',
    time: '18:00'
  },
  {
    month: 4,
    day: 25,
    group: Group.BEYO,
    name: 'BEYOOOOOND1St CONCERT TOUR どんと来い! BE HAPPY! at BUDOOOOOKAN!!!!!!!!!!!!',
    site: '日本武道館',
    time: '18:00'
  },
  {
    month: 4,
    day: 3,
    group: Group.HP,
    name: 'Hello! Project ひなフェス 2022',
    site: '幕張メッセ 国際展示場1・2 ホール',
    time: '12:00',
    member: 'つばきファクトリー&BEYOOOOONDS プレミアム',
    note: 'ライブビューイング'
  },
  {
    month: 4,
    day: 2,
    group: Group.HP,
    name: 'Hello! Project ひなフェス 2022',
    site: '幕張メッセ 国際展示場1・2 ホール',
    member: 'Juice=Juice プレミアム',
    time: '12:30',
    note: 'ライブビューイング'
  },
];

const e2021: event[] = [
  {
    month: 12,
    day: 11,
    group: Group.HPK,
    name: 'Hello! Project 研修生発表会 2021 12月 ～RING～',
    site: 'Zepp Namba',
    time: '15:15',
  },
  {
    month: 12,
    day: 2,
    group: Group.BEYO,
    name: 'BEYOOOOONDS FCイベント2021 ～クリスマスの陣ZIN～',
    site: 'KT Zepp Yokohama',
    time: '18:40',
  },
  {
    month: 11,
    day: 24,
    group: Group.JUICE,
    name: 'Juice=Juice Concert 2021 ～FAMILIA～ 金澤朋子ファイナル',
    site: '横浜アリーナ',
    time: '18:00',
  },
  {
    month: 11,
    day: 21,
    group: Group.HPK,
    name: '演劇女子部「図書館物語～3つのブックマーク～」',
    site: '池袋シアターグリーン BIG TREE THEATER',
    time: '11:30/15:00',
    member: 'Now・Future/Past・Now'
  },
  {
    month: 11,
    day: 15,
    group: Group.ANGE,
    name: 'アンジュルム コンサート2021 「桃源郷 ～笠原桃奈 卒業スペシャル～」',
    site: '日本武道館',
    time: '18:00',
  },
  {
    month: 10,
    day: 23,
    group: Group.JUICE,
    name: 'Juice=Juice新メンバー 有澤一華・入江里咲・江端妃咲FCイベント2021',
    site: 'LANDMARK HALL',
    time: '16:40',
  },
  {
    month: 10,
    day: 20,
    group: Group.BEYO,
    name: 'BEYOOOOONDS/雨ノ森 川海 岡村美波バースデーイベント2021',
    site: 'LANDMARK HALL',
    time: '16:45/18:50',
  },
  {
    month: 10,
    day: 19,
    group: Group.BEYO,
    name: 'BEYOOOOONDS結成記念スペシャルライブ2021 ～ポップステップ付点音符.～',
    site: '豊洲PIT',
    time: '16:40',
  },
  {
    month: 10,
    day: 18,
    group: Group.TSUBAKI,
    name: 'つばきファクトリー コンサート2021 CAMELLIA～日本武道館スッペシャル～',
    site: '日本武道館',
    time: '18:00',
  },
  {
    month: 10,
    day: 9,
    group: Group.HP,
    name: 'チーム「月」選抜トークイベント2021～松永里愛×浅倉樹々×岡村美波～',
    site: 'LANDMARK HALL',
    time: '14:30/16:45',
  },
  {
    month: 10,
    day: 2,
    group: Group.HPKU,
    name: 'ハロプロ研修生ユニットFCイベント2021',
    site: 'LANDMARK HALL',
    time: '16:40',
  },
  {
    month: 9,
    day: 25,
    group: Group.HP,
    name: 'Hello! Project 2021 秋 「続・花鳥風月」',
    site: 'ハーモニーホール座間 大ホール',
    time: '14:30',
    member: 'チーム鳥'
  },
  {
    month: 9,
    day: 20,
    group: Group.HPK,
    name: 'ハロプロ研修生FCイベント2021',
    site: 'LANDMARK HALL',
    time: '16:40',
  },
  {
    month: 9,
    day: 19,
    group: Group.HPK,
    name: 'Hello! Project 研修生発表会 2021 9月 ～STARS～',
    site: 'Zepp Tokyo',
    time: '16:45',
  },
  {
    month: 9,
    day: 6,
    group: Group.BEYO,
    name: 'BEYOOOOONDS/SeasoningS FCイベント2021 ～Triple Flavor～',
    site: 'KT Zepp Yokohama',
    time: '16:40',
  },
  {
    month: 9,
    day: 4,
    group: Group.HP,
    name: 'Hello! Project 2021 Summer Sapphire & Ruby',
    site: 'TACHIKAWA STAGE GARDEN',
    time: '18:15',
    member: 'Ruby'
  },
  {
    month: 8,
    day: 25,
    group: Group.JUICE,
    name: 'Juice=Juice FCイベント2021 ～Miracle×Juice×Box×Enjoy Summer！3～',
    site: 'KT Zepp Yokohama',
    time: '16:40',
  },
  {
    month: 8,
    day: 10,
    group: Group.BEYO,
    name: 'BEYOOOOONDS/CHICA#TETSU FCイベント2021 ～CHICA#TETSU TRAVELER～',
    site: 'KT Zepp Yokohama',
    time: '16:40',
  },
  {
    month: 8,
    day: 7,
    group: Group.HP,
    name: 'Hello! Project 2021 Summer Sapphire & Ruby',
    site: '中野サンプラザ',
    time: '15:00',
    member: 'Ruby'
  },
  {
    month: 5,
    day: 29,
    group: Group.HPK,
    name: 'Hello! Project 研修生発表会2021 ～春の公開実力診断テスト～',
    note: '配信',
  },
  {
    month: 5,
    day: 12,
    group: Group.BEYO,
    name: 'BEYOOOOONDS/雨ノ森 川海FCイベント2021 ～RFRO THEATER～',
    site: 'KT Zepp Yokohama',
    time: '16:40/18:50',
  },
  {
    month: 5,
    day: 5,
    group: Group.HP,
    name: 'Hello! Project 2021 春 「花鳥風月」',
    site: '中野サンプラザ',
    time: '18:15',
    member: 'チーム月',
    note: '中止'
  },
  {
    month: 4,
    day: 25,
    group: Group.BEYO,
    name: '演劇女子部「眠れる森のビヨ」',
    site: 'こくみん共済 coop ホール（全労済ホール）／スペース・ゼロ',
    time: '11:00',
  },
  {
    month: 4,
    day: 17,
    group: Group.HPK,
    name: 'ハロプロ研修生2021 初単独ライブ〜エピソードゼロ〜',
    site: '中野サンプラザ',
    time: '18:15',
  },
  {
    month: 3,
    day: 27,
    group: Group.HP,
    name: 'Hello! Project ひなフェス 2021',
    site: '幕張メッセ 国際展示場 1・2ホール',
    time: '12:00',
    member: 'つばきファクトリー&BEYOOOOONDSプレミアム',
  },
  {
    month: 3,
    day: 13,
    group: Group.HP,
    name: 'Hello! Project 2021 春 「花鳥風月」',
    site: 'オリンパスホール八王子',
    time: '18:15',
    member: 'チーム鳥'
  },
  {
    month: 3,
    day: 3,
    group: Group.BERRYZ,
    name: '清水佐紀・須藤茉麻・熊井友理奈FCイベント2021～普通、この日なしではやってらんないでしょ！？2～',
    site: 'LANDMARK HALL',
    time: '18:50',
  },
  {
    month: 2,
    day: 28,
    group: Group.BEYO,
    name: '【第2回】BEYOOOOONDS 2ndシングル発売記念インターネットサイン会',
    member: '岡村美波',
    note: 'ランダムチェキ',
  },
  {
    month: 2,
    day: 22,
    group: Group.BEYO,
    name: 'BEYOOOOONDS 2ndシングル発売記念インターネットサイン会',
    member: '岡村美波',
    note: '色紙B',
  },
  {
    month: 2,
    day: 13,
    group: Group.ML,
    name: 'M-line Special 2021～Make a Wish!～',
    site: '中野サンプラザ',
    time: '18:00',
  },
  {
    month: 1,
    day: 4,
    group: Group.HP,
    name: 'Hello! Project 2021 Winter 〜STEP BY STEP〜',
    site: '中野サンプラザ',
    time: '18:30',
  },
  {
    month: 1,
    day: 2,
    group: Group.HP,
    name: 'Hello! Project 2021 Winter ～STEP BY STEP～',
    site: '中野サンプラザ',
    time: '19:00',
  },
];

const e2020: event[] = [
  {
    month: 12,
    day: 19,
    group: Group.HPK,
    name: 'Hello! Project 研修生発表会 2020 12月 〜光〜',
    site: 'LANDMARK HALL',
    time: '18:45',
  },
  {
    month: 12,
    day: 18,
    group: Group.JUICE,
    name: 'Juice=Juice FCイベント2020 ～メリクリ×Juice×BoxⅤ～',
    site: '大田区民ホール・アプリコ 大ホール',
    time: '16:30',
  },
  {
    month: 12,
    day: 13,
    group: Group.BEYO,
    name: 'BEYOOOOONDS FCイベント2020 ～クリスマスの陣ZIN～',
    site: '大田区民ホール・アプリコ 大ホール',
    time: '16:30',
  },
  {
    month: 12,
    day: 10,
    group: Group.JUICE,
    name: 'Juice=Juice コンサート2020 ～続いていくSTORY～ 宮本佳林卒業スペシャル',
    site: '日本武道館',
    time: '18:30',
  },
  {
    month: 12,
    day: 9,
    group: Group.ANGE,
    name: 'アンジュルム コンサート2020 ～起承転結～ 船木結卒業スペシャル',
    site: '日本武道館',
    time: '18:30',
  },
  {
    month: 12,
    day: 2,
    group: Group.HP,
    name: 'Hello! Project 2020 ～The Ballad～ Special Number',
    site: '日本武道館',
    time: '18:30',
  },
  {
    month: 10,
    day: 21,
    group: Group.BEYO,
    name: 'BEYOOOOONDS/雨ノ森 川海 岡村美波バースデーイベント2020',
    site: 'LANDMARK HALL',
    time: '17:15/19:45',
  },
  {
    month: 10,
    day: 18,
    group: Group.BEYO,
    name: '演劇女子部「アラビヨーンズナイト」',
    site: 'こくみん共済 coop ホール（全労済ホール）／スペース・ゼロ',
    time: '11:30',
  },
  {
    month: 8,
    day: 13,
    group: Group.JUICE,
    name: 'Juice=Juice 高木紗友希バースデーイベント2020',
    site: 'LANDMARK HALL',
    time: '17:00',
  },
  {
    month: 7,
    day: 26,
    group: Group.HPK,
    name: 'Hello! Project 研修生発表会2020 ～夏の公開実力診断テスト～',
    note: '配信'
  },
  {
    month: 7,
    day: 12,
    group: Group.HP,
    name: 'Hello! Project 2020 Summer COVERS 〜The Ballad〜',
    site: '中野サンプラザ',
    time: '14:45',
    member: 'Bチーム'
  },
  {
    month: 7,
    day: 7,
    group: Group.HP,
    name: 'ハロー！プッチカフェ',
    site: 'パシフィックヘブン',
    time: '16:00',
  },
  {
    month: 1,
    day: 2,
    group: Group.HP,
    name: 'Hello! Project 2020 Winter HELLO! PROJECT IS [　　　]',
    site: '中野サンプラザ',
    time: '18:30',
    member: 'side A'
  },
];

const e2019: event[] = [
  {
    month: 12,
    day: 21,
    group: Group.BEYO,
    name: 'BEYOOOOONDS FCイベント2019 ～クリスマスの陣ZIN～',
    site: 'TFTホール 500',
    time: '15:45',
  },
  {
    month: 12,
    day: 21,
    group: Group.JUICE,
    name: 'Juice=Juice FCイベント2019 ～メリクリ×Juice×BoxⅣ～',
    site: 'TFTホール 1000',
    time: '14:00',
  },
  {
    month: 12,
    day: 7,
    group: Group.BEYO,
    name: 'LIVE BEYOOOOOND1St サンリオピューロランドSP',
    site: 'サンリオピューロランド エンターテイメントホール',
    time: '17:30',
  },
  {
    month: 12,
    day: 4,
    group: Group.JUICE,
    name: 'Juice=Juice Concert 2019 ～octopic!～',
    site: '国立代々木競技場第一体育館',
    time: '18:30',
  },
  {
    month: 12,
    day: 2,
    group: Group.BEYO,
    name: 'LIVE BEYOOOOOND1St',
    site: 'Zepp DiverCity',
    time: '18:30',
  },
  {
    month: 10,
    day: 18,
    group: Group.BEYO,
    name: 'BEYOOOOONDS/雨ノ森 川海 岡村美波バースデーイベント2019',
    site: 'LANDMARK HALL',
    time: '17:45/19:45',
  },
  {
    month: 10,
    day: 10,
    group: Group.JUICE,
    name: 'Juice=Juice LIVE TOUR 2019～Con Amor J=J DAY SPECIAL～',
    site: 'マイナビBLITZ赤坂',
    time: '18:30',
  },
  {
    month: 10,
    day: 5,
    group: Group.BEYO,
    name: 'BEYOOOOOND1St 発売記念ランダムチェキサイン&握手会',
    site: '渋谷TSUTAYA 2階特設会場',
    time: '18:00',
    member: '岡村美波'
  },
  {
    month: 9,
    day: 11,
    group: Group.JUICE,
    name: 'Juice=Juice LIVE TOUR 2019～Con Amor～',
    site: '新宿ReNY',
    time: '18:30',
  },
  {
    month: 8,
    day: 4,
    group: Group.BEYO,
    name: 'BEYOOOOONDS メジャーデビューシングル発売記念個別チェキ会',
    site: 'ベルサール高田馬場',
    member: '岡村美波',
  },
  {
    month: 6,
    day: 29,
    group: Group.BEYO,
    name: 'BEYOOOOONDS メジャーデビューシングル発売記念ミニライブ＆握手会',
    site: 'ラクーアガーデンステージ',
    time: '14:00',
  },
  {
    month: 6,
    day: 18,
    group: Group.ANGE,
    name: 'アンジュルム コンサートツアー 2019春 ファイナル 和田彩花卒業スペシャル 輪廻転生 ～あるとき生まれた愛の提唱～',
    site: '日本武道館',
    time: '18:00',
  },
  {
    month: 4,
    day: 19,
    group: Group.JUICE,
    name: 'Juice=Juice高木紗友希バースデーイベント2019',
    site: '山野ホール',
    time: '17:30/20:00',
  },
];

const e2018: event[] = [
  {
    month: 9,
    day: 17,
    group: Group.TSUBAKI,
    name: 'つばきファクトリーライブツアー2018秋 -微熱-',
    site: '新潟LOTS',
    time: '14:30/18:00',
  },
  {
    month: 8,
    day: 4,
    group: Group.HP,
    name: 'Hello! Project 20th Anniversary!! Hello! Project 2018 SUMMER',
    site: '中野サンプラザ',
    time: '15:00/18:30',
    member: 'ALL FOR ONE/ONE FOR ALL'
  },
  {
    month: 5,
    day: 5,
    group: Group.ANGE,
    name: 'アンジュルムコンサートツアー2018春 十人十色＋',
    site: '中野サンプラザ',
    time: '15:00',
  },
  {
    month: 5,
    day: 4,
    group: Group.JUICE,
    name: 'Juice=Juice LIVE GEAR 2018 ～Go ahead SPECIAL～',
    site: '中野サンプラザ',
    time: '18:30',
  },
  {
    month: 4,
    day: 21,
    group: Group.JUICE,
    name: 'Juice=Juice高木紗友希バースデーイベント2018',
    site: 'TFTホール 1000',
    time: '13:15/15:45',
  },
];

const e2017: event[] = [
  {
    month: 11,
    day: 19,
    group: Group.ANGE,
    name: 'アンジュルムライブツアー2017秋 Black&White',
    site: 'NEXS NIIGATA',
    time: '13:30',
  },
  {
    month: 8,
    day: 5,
    group: Group.HP,
    name: 'Hello!Project 2017 SUMMER ～HELLO!MEETING～',
    site: '中野サンプラザ',
    time: '15:00',
  },
  {
    month: 7,
    day: 31,
    group: Group.ANGE,
    name: 'アンジュルム23rdシングル発売記念トーク&握手会',
    site: 'イオンモール新潟南',
    member: '室田/笠原',
    time: '17:00',
  },
  {
    month: 6,
    day: 11,
    group: Group.TSUBAKI,
    name: 'つばきファクトリー 2ndシングル発売記念ミニライブ&握手会',
    site: '万代シティパーク',
    time: '12:30',
  },
  {
    month: 5,
    day: 14,
    group: Group.FM,
    name: '藤本美貴15周年記念！大感謝ライブ！～ミキティアイドルやります！春の大集会！～',
    site: '新宿ReNY',
    time: '14:30',
  },
  {
    month: 3,
    day: 4,
    group: Group.JUICE,
    name: 'Juice=Juice LIVE AROUND 2017～NEXT ONE～',
    site: 'NEXS NIIGATA',
    time: '14:30/18:00',
  },
];

const e2016: event[] = [
  {
    month: 11,
    day: 7,
    group: Group.JUICE,
    name: 'Juice=Juice LIVE MISSION FINAL at 日本武道館',
    site: '日本武道館',
    time: '18:00',
    note: 'ライブビューイング'
  },
  {
    month: 6,
    day: 16,
    group: Group.KOBUSHI,
    name: 'こぶしファクトリー3rdシングル発売記念トーク&握手会',
    site: 'イオンモール新潟南',
    member: '広瀬/浜浦/田口',
    time: '18:30',
  },
  {
    month: 4,
    day: 9,
    group: Group.JUICE,
    name: 'Juice=Juice LIVE MISSION 220～Code3→Growing！～',
    site: 'NEXS NIIGATA',
    time: '14:30',
  },
];

const e2015: event[] = [
  {
    month: 11,
    day: 24,
    group: Group.KOBUSHI,
    name: 'こぶしファクトリーメジャーデビューシングル発売記念トーク&握手会',
    site: 'イオンモール新潟南',
    member: '藤井/広瀬/小川',
    time: '18:30',
  },
  {
    month: 11,
    day: 23,
    group: Group.KOBUSHI,
    name: 'こぶしファクトリーライブツアー2015～The First Ring!～',
    site: '新潟LOTS',
    time: '14:00/17:30',
  },
  {
    month: 9,
    day: 23,
    group: Group.HP,
    name: 'Hello!Project New Fes! II',
    site: '五反田ゆうぽうとホール',
    time: '14:15/18:15',
  },
  {
    month: 8,
    day: 13,
    group: Group.KOBUSHI,
    name: 'こぶしファクトリーメジャーデビューシングル発売記念ミニライブ&握手会',
    site: '万代シティパーク',
    time: '19:00',
  },
  {
    month: 3,
    day: 3,
    group: Group.BERRYZ,
    name: 'Berryz工房ラストコンサート2015 Berryz工房行くべぇ～!',
    site: '日本武道館',
    time: '18:00',
    note: 'ライブビューイング'
  },
  {
    month: 2,
    day: 28,
    group: Group.BERRYZ,
    name: 'Berryz工房祭り',
    site: '有明コロシアム',
    time: '16:00',
    note: '1日目'
  },
  {
    month: 2,
    day: 8,
    group: Group.BERRYZ,
    name: 'Berryz工房「完熟Berryz工房」発売記念イベント',
    site: '中野サンプラザ',
    time: '16:00',
  },
  {
    month: 1,
    day: 25,
    group: Group.BERRYZ,
    name: 'Berryz工房ラストシングル発売記念イベント',
    site: '日テレ らんらんホール（よみうりランド）',
    time: '14:45',
  },
];

const e2014: event[] = [
  {
    month: 12,
    day: 23,
    group: Group.BERRYZ,
    name: 'Hello! Project FCイベント2014 ～Hello! Xmas Days2♥～ Berryz工房',
    site: '山野ホール',
    time: '13:15',
  },
  {
    month: 11,
    day: 24,
    group: Group.BERRYZ,
    name: 'Berryz工房デビュー10周年記念コンサートツアー2014秋 ～プロフェッショナル～',
    site: '中野サンプラザ',
    time: '15:00',
  },
  {
    month: 11,
    day: 16,
    group: Group.JUICE,
    name: 'Juice=Juiceファーストライブツアー2014～2015 News=News～各地よりお届けします!～',
    site: 'LIVE HALL GOLDEN PIGS RED STAGE',
    time: '14:30',
  },
  {
    month: 11,
    day: 6,
    group: Group.BERRYZ,
    name: 'ナルチカ2014秋 Berryz工房',
    site: '新潟LOTS',
    time: '18:30',
  },
  {
    month: 4,
    day: 19,
    group: Group.BERRYZ,
    name: 'Berryz工房デビュー10周年記念コンサートツアー2014春 ～リアルBerryz工房～',
    site: '渋谷公会堂',
    time: '15:00',
  },
];

const e2013: event[] = [
  {
    month: 11,
    day: 29,
    group: Group.BERRYZ,
    name: 'Berryz工房10周年記念 日本武道館スッペシャルライブ2013 ～やっぱりあなたなしでは生きてゆけない～',
    site: '日本武道館',
    time: '18:30',
  },
];

export const events: eventItem[] = [
  { year: 2022, data: e2022 },
  { year: 2021, data: e2021 },
  { year: 2020, data: e2020 },
  { year: 2019, data: e2019 },
  { year: 2018, data: e2018 },
  { year: 2017, data: e2017 },
  { year: 2016, data: e2016 },
  { year: 2015, data: e2015 },
  { year: 2014, data: e2014 },
  { year: 2013, data: e2013 },
];