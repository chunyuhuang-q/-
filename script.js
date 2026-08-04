const questions = [
    {
        q: "当另一半在聚会上成为了全场的焦点、备受瞩目时，你内心真实的第一反应是？",
        category: "占有欲与安全感",
        options: [
            { text: "“哼，这人平时在我面前可不是这样的。”（傲娇并感到一丝隐秘的骄傲）", type: "A" },
            { text: "会默默站在人群边缘，微笑着看着他/她发光，心里满眼都是爱意。", type: "B" },
            { text: "直接挤进人群，开始当众拆对方的台，互调侃模式瞬间开启。", type: "C" },
            { text: "觉得超有面子，甚至想跟着一起起哄，把气氛搞得更嗨。", type: "D" },
            { text: "内心毫无波澜甚至想提前溜走回家点外卖：“快结束吧，累了。”", type: "E" }
        ]
    },
    {
        q: "你最向往的恋爱日常行为模式，更接近以下哪一种？",
        category: "理想相处模式",
        options: [
            { text: "毫无底线的互相撒娇与黏人，空气里随时冒粉红泡泡。", type: "A" },
            { text: "安静地各做各的事（比如你在画画他在看书），偶尔对视一眼就会心一笑。", type: "B" },
            { text: "像损友一样打打闹闹，日常互黑，但遇到事永远是彼此最坚强的后盾。", type: "C" },
            { text: "说走就走，今天去探险明天去吃路边摊，永远充满新鲜感和笑声。", type: "D" },
            { text: "一个负责运筹帷幄、照顾全局，另一个负责当个快快乐乐的甩手掌柜。", type: "E" }
        ]
    },
    {
        q: "如果另一半疲惫或情绪低落时，你最倾向于采取什么行动去治愈他/她？",
        category: "情感危机处理",
        options: [
            { text: "不管三七二十一先强行抱住，各种肉麻的情话和鬼脸齐上阵直到对方笑出来。", type: "A" },
            { text: "默默不说话，泡一杯温茶或者准备好最爱吃的甜品，静静陪在身边。", type: "B" },
            { text: "用犀利但一针见血的话帮对方分析利弊，顺便开个无伤大雅的玩笑。", type: "C" },
            { text: "直接拉出门：“走! 带你去吃顿大餐/去游乐园发泄一下！”", type: "D" },
            { text: "给对方绝对的个人空间，不打扰，但随时准备好善后。", type: "E" }
        ]
    },
    {
        q: "你对于伴侣身上“反差萌”的最高接受标准是什么？",
        category: "性格偏好",
        options: [
            { text: "外表看着高冷、不好接近，私底下其实是个极度黏人的小哭包/搞笑精。", type: "A" },
            { text: "平时大大咧咧、没心没肺，但在关键时刻比谁都成熟、靠谱、有担当。", type: "B" },
            { text: "看起来精致优雅像个贵妇，笑起来却毫无包袱、发出魔性的大妈笑。", type: "C" },
            { text: "拥有甜美可爱的外表，骨子里却极具艺术叛逆感或特立独行的酷劲。", type: "D" },
            { text: "永远精力充沛、元气满满，像个永远长不大的百变小精灵。", type: "E" }
        ]
    },
    {
        q: "在两个人的纪念日或特殊日子里，你更偏爱哪种庆祝行为？",
        category: "仪式感偏好",
        options: [
            { text: "必须要有精心布置的浪漫场地、鲜花以及海量的双人合照发圈秀恩爱。", type: "A" },
            { text: "不需要刻意搞形式，简简单单一起窝在沙发看部老电影就足够浪漫。", type: "B" },
            { text: "互赠对方早就吐槽过但其实很想要的实用小礼物，主打一个惊喜与互怼。", type: "C" },
            { text: "去尝试从来没去过的新奇刺激项目，留下深刻的青春印记。", type: "D" },
            { text: "吃顿超级丰盛的美食，把热量抛诸脑后，开心填饱肚子最大。", type: "E" }
        ]
    },
    {
        q: "你觉得一段长久舒适的亲密关系中，最核心的支柱是什么？",
        category: "爱情底层逻辑",
        options: [
            { text: "无论过多久，都能保持像热恋期一样的强烈的肢体接触与心跳感。", type: "A" },
            { text: "深度的灵魂默契，即使一整天不说话也不会觉得尴尬或疏远。", type: "B" },
            { text: "永远能互相接梗，把枯燥的生活过成每天都有笑料的脱口秀。", type: "C" },
            { text: "对世界保持共同的好奇心，一起去探索更广阔的未知领域。", type: "D" },
            { text: "绝对的真诚与坦荡，不伪装，在对方面前可以毫无保留地展现最丑的一面。", type: "E" }
        ]
    },
    {
        q: "如果和伴侣发生了意见分歧，你通常会展现出怎样的行为模式？",
        category: "冲突处理模式",
        options: [
            { text: "先撒娇耍赖把气氛搞轻松，或者用无辜的小鹿眼看着对方让对方先妥协。", type: "A" },
            { text: "冷静听对方说完，用温和而坚定的语气慢慢沟通，绝不口不择言。", type: "B" },
            { text: "直接开启辩论赛模式，讲道理摆事实，不把对方说服誓不罢休。", type: "C" },
            { text: "“行行行听你的！”表面妥协，然后通过其他好玩的行为把话题岔开。", type: "D" },
            { text: "冷战或陷入短暂的沉思，需要各自冷静消化后再重新复盘。", type: "E" }
        ]
    },
    {
        q: "你对另一半在社交圈中的“异性/同性好友边界感”持什么态度？",
        category: "安全感与边界感",
        options: [
            { text: "我的眼里揉不得沙子，希望对方的视线和重心永远多偏向我一点点。", type: "A" },
            { text: "彼此拥有绝对的信任和各自的社交空间，给对方百分百的自由。", type: "B" },
            { text: "“你的朋友就是我的朋友，一起来开派对啊！”主打一个敞亮和热闹。", type: "C" },
            { text: "只要不影响我们之间的核心默契，外界怎么社交我都无所谓。", type: "D" },
            { text: "喜欢跟对方的好友也打成一片，最后变成大家共同的搞笑核心。", type: "E" }
        ]
    },
    {
        q: "当你发现伴侣身上有一个不太完美的小缺点（比如做事拖延或有点粗心）时？",
        category: "包容度测试",
        options: [
            { text: "一边疯狂吐槽嫌弃，一边忍不住身体力行帮对方把烂摊子全收拾好。", type: "A" },
            { text: "觉得很可爱，甚至觉得这种不完美让对方更加生动真实了。", type: "B" },
            { text: "抓住这个把柄开启长期的嘲笑模式，当作日常增进感情的调味剂。", type: "C" },
            { text: "直接上手帮对方纠正，甚至带着对方一起改掉这个小习惯。", type: "D" },
            { text: "包容并接受，人无完人，谁还没有点可爱的小脾气呢。", type: "E" }
        ]
    },
    {
        q: "如果可以和另一半去一个完全没有人认识的地方隐居一段时间，你希望那是哪里？",
        category: "精神乌托邦",
        options: [
            { text: "南欧充满浪漫复古情调、随时能喝着咖啡看夕阳的海边小镇。", type: "A" },
            { text: "北欧安静到能听见雪落声音的森林木屋，围着壁炉烤火看书。", type: "B" },
            { text: "充满烟火气、夜市美食遍地、晚上可以疯狂压马路的亚洲不夜城。", type: "C" },
            { text: "辽阔壮丽、可以看极光和冰川的旷野，体验大自然的震撼。", type: "D" },
            { text: "充满艺术气息、随处都是画廊和独立书店的复古文艺街区。", type: "E" }
        ]
    },
    {
        q: "你心目中最高级的“偏爱与双标”具体表现为什么行为？",
        category: "偏爱定义",
        options: [
            { text: "对所有人冷若冰霜、礼貌疏离，唯独对你一个人毫无底线地撒娇和软弱。", type: "A" },
            { text: "在吵得最凶的时候，全场都在讲道理，他/她却转头悄悄护住你的手。", type: "B" },
            { text: "所有人面前都是高冷酷盖/女神，一到你面前就变成会学小动物叫的憨憨。", type: "C" },
            { text: "无论几点钟、不管多远，只要你一句“我想你了”，立刻出现在你门外。", type: "D" },
            { text: "把所有的特权、公开的偏爱以及专属昵称只留给你一人。", type: "E" }
        ]
    },
    {
        q: "当你的生活遭遇重大挫折、陷入低谷时，你最希望另一半对你做什么？",
        category: "终极信赖测试",
        options: [
            { text: "什么都不用说，只要紧紧抱住我，给我无条件的支持和陪伴。", type: "A" },
            { text: "用冷静理智的头破理清思路，带我走出迷茫，做我的定海神针。", type: "B" },
            { text: "讲最搞笑的笑话逗我开心，用没心没肺的快乐把阴霾一扫而空。", type: "C" },
            { text: "带我离开当前的环境去大吃一顿或者疯狂玩乐，用活力冲淡痛苦。", type: "D" },
            { text: "默默在背后把一切现实的麻烦处理好，让我可以安心躺平恢复元气。", type: "E" }
        ]
    }
];

const cpDatabase = {
    "A": {
        name: "【2yeon】林娜琏 × 定延",
        tags: "#相爱相杀 #青梅竹马 #欢喜冤家",
        desc: "你向往的是经得起时间考验、深厚而真实的陪伴。表面上互不相让、日常互怼，但当对方真正需要时，对方永远是那个最懂你、最能给你稳稳安全感的人。"
    },
    "B": {
        name: "【Michaeng / 南彩】Mina × 彩瑛",
        tags: "#艺术气息 #灵魂共鸣 #静谧同好",
        desc: "你崇尚安静、深刻且富有精神契合度的恋爱模式。不需要轰轰烈烈的誓言，一个眼神、一个拥抱、一起听一张黑胶唱片，就能带来无与伦比的治愈感。"
    },
    "C": {
        name: "【NaMo】林娜琏 × Momo",
        tags: "#笨蛋美女 #吃货同盟 #爆笑日常",
        desc: "你的爱情观充满童心与快乐。拒绝沉闷与假正经，最适合和你一起把生活过成喜剧片。一起毫无包袱地大笑、找美食、吐槽，每一天都是轻松的狂欢。"
    },
    "D": {
        name: "【SaMo / 纱桃】Sana × Momo",
        tags: "#日line灵魂 #绝美双生花 #元气暴击",
        desc: "你是天生的乐观主义者，喜欢充满活力的热烈关系。你们的相处模式像永远过不完的夏天，阳光、沙滩、欢笑与无限的活力，让彼此的生命闪闪发光。"
    },
    "E": {
        name: "【Nabong / 娜志】林娜琏 × 志效",
        tags: "#大队主心骨 #长姐如母 #成熟依靠",
        desc: "你渴望成熟、稳重且极具责任感的成熟伴侣。在充满不确定性的世界里，你们既能像小女孩一样肆意撒娇，也能在关键时刻撑起属于两人的强大避风港。"
    },
    // 隐藏款
    "HIDDEN_YERI": {
        name: "👑【✨ 隐藏款 ✨】林娜琏 × 金艺琳 (Red Velvet Yeri)",
        tags: "#大姐与忙内 #跨社神仙闺蜜 #圈内顶流真性情",
        desc: "【罕见隐藏款触发成功！】你骨子里有着极度跳脱、古灵精怪且打破常规的灵魂。这对跨越公司壁垒、性格极度合拍的“大姐与忙内”组合，诠释了什么叫全网最让人羡慕的真性情顶级闺蜜淘，凑在一起就是行走的快乐源泉！"
    },
    "HIDDEN_MIYEON": {
        name: "🦋【✨ 隐藏款 ✨】Sana × 赵美延 ((G)I-DLE Miyeon)",
        tags: "#顶级神颜联动 #视觉暴击 #软萌温柔挂",
        desc: "【罕见隐藏款触发成功！】你对美学有着极致的追求，渴望如童话般精致、温柔且充满仙气的人际氛围。两位神颜大美女私底下的亲密互动，完美满足了你对高颜值、高情商、甜度超标的梦幻所有幻想！"
    },
    "HIDDEN_SOMI": {
        name: "🍓【✨ 隐藏款 ✨】Somi (全昭弥) × 孙彩瑛 (Chaeyoung)",
        tags: "#千禧辣妹 #青梅竹马挚友 #酷飒艺术派",
        desc: "【罕见隐藏款触发成功！】你崇尚自由、叛逆且充满千禧年复古酷感的艺术灵魂。这对 JYP 出身的宝藏友情组合，完美兼具了辣妹的张扬与私底下的毫无包袱，记录了青春中最疯狂、最纯粹的彼此印记！"
    }
};

let currentQuestion = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('header-section').classList.add('hidden');
    const quizSec = document.getElementById('quiz-section');
    quizSec.classList.remove('hidden');
    quizSec.classList.add('fade-in');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById('progress-text').innerText = `Question ${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('category-badge').innerText = q.category;
    document.getElementById('question-title').innerText = q.q;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-card w-full text-left p-4 rounded-2xl border border-gray-200 bg-white hover:border-pink-400 hover:bg-pink-50/40 transition text-gray-700 text-sm md:text-base font-medium flex items-center justify-between shadow-sm";
        btn.innerHTML = `<span>${opt.text}</span><span class="text-pink-400 font-bold ml-2 text-sm">👉</span>`;
        btn.onclick = () => selectOption(opt.type);
        container.appendChild(btn);
    });
}

function selectOption(type) {
    userAnswers.push(type);
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    document.getElementById('quiz-section').classList.add('hidden');
    const resSec = document.getElementById('result-section');
    resSec.classList.remove('hidden');
    resSec.classList.add('fade-in');

    const counts = {};
    userAnswers.forEach(ans => { counts[ans] = (counts[ans] || 0) + 1; });

    let finalKey = "A";
    const maxCountChar = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

    if (userAnswers.includes("D") && userAnswers.filter(x => x === "A").length >= 3) {
        finalKey = "HIDDEN_YERI";
    } else if (userAnswers.includes("B") && userAnswers.filter(x => x === "E").length >= 3) {
        finalKey = "HIDDEN_MIYEON";
    } else if (userAnswers.includes("C") && userAnswers.filter(x => x === "D").length >= 3) {
        finalKey = "HIDDEN_SOMI";
    } else {
        const mapping = { "A": "A", "B": "B", "C": "C", "D": "D", "E": "E" };
        finalKey = mapping[maxCountChar] || "A";
    }

    const result = cpDatabase[finalKey];
    document.getElementById('result-title').innerText = result.name;
    document.getElementById('result-tags').innerText = result.tags;
    document.getElementById('result-desc').innerText = result.desc;

    const badge = document.getElementById('hidden-badge');
    if (finalKey.startsWith("HIDDEN")) {
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    document.getElementById('result-section').classList.add('hidden');
    const headSec = document.getElementById('header-section');
    headSec.classList.remove('hidden');
    headSec.classList.add('fade-in');
}

function shareResult() {
    alert("快截图把你的命定 TWICE CP 分享给身边的 ONCE 好友吧！✨");
}