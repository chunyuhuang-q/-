// 题目数据（保持高质量女同/恋爱沉浸式行为偏好）
const questions = [
    {
        q: "当另一半在聚会上成为了全场的焦点、备受瞩目时，你内心真实的第一反应是？",
        category: "占有欲与安全感",
        options: [
            { text: "“哼，这人平时在我面前可不是这样的。”（傲娇并散发极其强烈的独占欲）", type: "1" },
            { text: "会默默站在人群边缘，微笑着看着他/她发光，眼里只有滚烫的爱意。", type: "2" },
            { text: "直接挤进人群，当众搂住宣示主权，互调侃模式瞬间开启。", type: "3" },
            { text: "觉得超有面子，甚至想跟着一起起哄，把炽热的爱意全场撒糖。", type: "4" },
            { text: "内心毫无波澜只想把人拽回专属两人的房间：“快结束吧，只想贴贴你。”", type: "5" }
        ]
    },
    {
        q: "你最向往的百合恋爱日常行为模式，更接近以下哪一种？",
        category: "理想相处模式",
        options: [
            { text: "毫无底线的互相撒娇与黏人，空气里随时冒着浓烈粉红泡泡。", type: "6" },
            { text: "安静地依偎在一起各做各的事，偶尔对视一眼就能读懂彼此眼里的深情。", type: "7" },
            { text: "像热恋情侣一样日常打闹互黑，但遇到事永远是彼此最坚强的后盾与软肋。", type: "8" },
            { text: "说走就走深夜私奔压马路，永远充满新鲜感、心跳与疯狂的青春印记。", type: "9" },
            { text: "一个负责运筹帷幄、霸道宠溺，另一个负责当个毫无原则的娇气包。", type: "1" }
        ]
    },
    {
        q: "如果另一半疲惫或情绪低落时，你最倾向于采取什么行动去治愈他/她？",
        category: "情感危机处理",
        options: [
            { text: "不管三七二十一直接强行抱进怀里，各种温柔耳语和亲昵直到对方融化。", type: "2" },
            { text: "默默不说话，泡一杯温茶或者准备好最爱吃的甜品，静静陪在身边当靠山。", type: "3" },
            { text: "用犀利但满含爱意的话帮对方解压，顺便一个深吻把坏心情全赶跑。", type: "4" },
            { text: "直接拉出门：“走！带你去游乐园/开着车去看专属我们的日落！”", type: "5" },
            { text: "给对方绝对的私密空间，然后从背后紧紧抱住，做最踏实的避风港。", type: "6" }
        ]
    },
    {
        q: "你对于伴侣身上“反差萌”的最高接受标准是什么？",
        category: "性格偏好",
        options: [
            { text: "外表看着高冷、不好接近，私底下却是个极度黏人、离不开你的小哭包。", type: "7" },
            { text: "平时大大咧咧、没心没肺，但在私底下比谁都深情、会撩且充满主权。", type: "8" },
            { text: "看起来精致优雅像个贵妇，在你面前笑起来却毫无包袱、像个软萌的小女孩。", type: "9" },
            { text: "拥有甜美可爱的外表，骨子里却极具艺术叛逆感和对你病娇般的偏爱。", type: "1" },
            { text: "永远精力充沛、元气满满，像个只围着你转的百变小甜豆。", type: "2" }
        ]
    },
    {
        q: "在两个人的纪念日或特殊日子里，你更偏爱哪种庆祝行为？",
        category: "仪式感偏好",
        options: [
            { text: "必须要有精心布置的烛光晚餐、专属玫瑰以及海量的双人私密合照。", type: "3" },
            { text: "不需要形式，简简单单一起窝在被窝里看部浪漫老电影就足够心满意足。", type: "4" },
            { text: "互赠对方早就想要的贴心礼物，主打一个充满默契与情趣的惊喜。", type: "5" },
            { text: "去尝试从来没去过的新奇刺激项目，留下只有彼此知道的浓烈回忆。", type: "6" },
            { text: "吃顿超级丰盛的美食，把热量抛诸脑后，然后缠绵一整晚。", type: "7" }
        ]
    },
    {
        q: "你觉得一段长久舒适的百合亲密关系中，最核心的支柱是什么？",
        category: "爱情底层逻辑",
        options: [
            { text: "无论过多久，都能保持像热恋期一样强烈的肢体接触、拥抱与心跳感。", type: "8" },
            { text: "深度的灵魂默契，即使一整天不说话，空气里也全是化不开的浓情蜜意。", type: "9" },
            { text: "永远能互相接梗，把生活过成每天都充满粉红泡泡的专属二人世界。", type: "1" },
            { text: "对世界保持共同的好奇心，一起去探索只属于两个人的精神乌托邦。", type: "2" },
            { text: "绝对的真诚与病娇般的偏爱，在对方怀里可以毫无保留地展现最真实、赤诚的自己。", type: "3" }
        ]
    },
    {
        q: "如果和伴侣发生了意见分歧，你通常会展现出怎样的行为模式？",
        category: "冲突处理模式",
        options: [
            { text: "先撒娇耍赖把气氛搞轻松，或者用无辜含水的眼神看着对方让对方先妥协投降。", type: "4" },
            { text: "冷静听对方说完，用温和而坚定的语气慢慢沟通，最后用一个拥抱完美化解。", type: "5" },
            { text: "直接把人拉到墙角壁咚，讲道理摆事实，不把对方说服到求饶誓不罢休。", type: "6" },
            { text: "“行行行听你的！”表面妥协，然后用各种温柔攻势把话题彻底带偏。", type: "7" },
            { text: "陷入短暂的沉思，需要对方主动抱抱、撒个娇才能彻底哄好。", type: "8" }
        ]
    },
    {
        q: "你对另一半在社交圈中的“异性/同性好友边界感”持什么态度？",
        category: "安全感与占有欲",
        options: [
            { text: "我的眼里绝对揉不得沙子，希望对方的视线和重心永远多偏向我一点点，专属黏我。", type: "9" },
            { text: "彼此拥有绝对的信任和各自的社交空间，但回到家后必须开启两人的亲密独处。", type: "1" },
            { text: "“你的朋友就是我的朋友，一起来开派对啊！”但在人群中手永远牵得紧紧的。", type: "2" },
            { text: "只要不影响我们之间的核心默契，外界怎么社交我都无所谓，因为我知道她最爱我。", type: "3" },
            { text: "恨不得把对方藏起来不让任何人看见，全世界只要我们两个相爱就够了。", type: "4" },
        ]
    },
    {
        q: "当你发现伴侣身上有一个不太完美的小缺点（比如做事拖延或有点粗心）时？",
        category: "包容度测试",
        options: [
            { text: "一边捏着对方的脸疯狂吐槽嫌弃，一边忍不住身体力行帮对方把烂摊子全收拾好。", type: "5" },
            { text: "觉得超级可爱，甚至觉得这种不完美让对方在自己怀里显得更加生动真实。", type: "6" },
            { text: "抓住这个把柄开启长期的“爱的惩罚”调侃模式，当作日常增进情趣的调味剂。", type: "7" },
            { text: "直接上手帮对方纠正，顺便给个宠溺的摸头杀。", type: "8" },
            { text: "全盘包容并接受，人无完人，在自己眼里对方连缺点都是迷人的香气。", type: "9" }
        ]
    },
    {
        q: "如果可以和另一半去一个完全没有人认识的地方隐居一段时间，你希望那是哪里？",
        category: "精神乌托邦",
        options: [
            { text: "南欧充满浪漫复古情调、随时能依偎着喝咖啡看夕阳的海边私密小镇。", type: "1" },
            { text: "北欧安静到能听见雪落声音的森林木屋，整天围着壁炉拥抱取暖。", type: "2" },
            { text: "充满烟火气、夜市美食遍地、晚上可以十指紧扣压马路的浪漫不夜城。", type: "3" },
            { text: "辽阔壮丽、可以看极光和冰川的旷野，在天地间感受彼此唯一的炽热呼吸。", type: "4" },
            { text: "充满艺术气息、随处都是画廊和独立书店的复古文艺街区。", type: "5" },
        ]
    },
    {
        q: "你心目中最高级的“偏爱与双标”具体表现为什么行为？",
        category: "偏爱定义",
        options: [
            { text: "对所有人冷若冰霜、礼貌疏离，唯独对你一个人毫无底线地撒娇、软弱和索吻。", type: "6" },
            { text: "在吵得最凶的时候，全场都在讲道理，她却转头突然把你拉进怀里狠狠护住。", type: "7" },
            { text: "所有人面前都是高冷女神，一到你面前就变成会肆意撒娇、赖在你身上不走的小猫。", type: "8" },
            { text: "无论几点钟、不管多远，只要你一句“我想你了”，立刻买机票出现在你门外。", type: "9" },
            { text: "把世间所有的特权、公开的偏爱、温柔以及专属昵称，完完整整只留给你一人。", type: "1" }
        ]
    },
    {
        q: "当你的生活遭遇重大挫折、陷入低谷时，你最希望另一半对你做什么？",
        category: "终极信赖测试",
        options: [
            { text: "什么都不用说，只要用双臂紧紧将我环抱，给我无条件的支持、亲吻和陪伴。", type: "2" },
            { text: "用冷静理智的头脑理清思路带我走出迷茫，最后霸道地宣称：“别怕，有我养你。”", type: "3" },
            { text: "讲最搞笑的肉麻情话逗我开心，用没心没肺的甜蜜把阴霾一扫而空。", type: "4" },
            { text: "二话不说带我离开当前环境去豪华度假，用无尽的宠爱冲淡所有的痛苦。", type: "5" },
            { text: "默默在背后把一切现实麻烦处理好，让我可以安心躺在她怀里恢复元气。", type: "6" }
        ]
    }
];

// 全员 36 对队内 CP 矩阵数据库 + 3对隐藏款
const cpDatabase = {
    "12": { name: "林娜琏 × 俞定延 (2yeon)", tags: "#顶峰宿敌 #年上傲娇与温柔守护 #极具张力的主权宣示", desc: "你们的爱情是经年累月后深入骨髓的笃定。表面上是你来我往、谁也不服谁的公开互怼，转过头却在无数个深夜紧紧相拥。这是真正把对方揉进生命里、带有独占欲的灵魂契合。", img: "images/cp_12.png" },
    "13": { name: "林娜琏 × Momo (NaMo)", tags: "#笨蛋美女与纯情大姐 #极致偏爱 #日常高甜狙击", desc: "在所有人面前她是光芒万丈的大明星，唯独在你面前可以毫无保留地卸下防备。充满粉红泡泡的日常里，每一个对视和喂食都写满了‘你是我的偏爱与例外’。", img: "images/cp_13.png" },
    "14": { name: "林娜琏 × Sana (SaNa)", tags: "#双顶流甜心狙击 #公开调情与极致占有 #热烈爱意", desc: "空气里随时随地都在冒着粉红泡泡的顶级热恋！每一次肌肤相亲和直视镜头的眼神拉丝，都炽热得让旁人脸红心跳。这是毫无保留、恨不得向全世界宣告的浓烈占有欲。", img: "images/cp_14.png" },
    "15": { name: "林娜琏 × 朴志效 (Nabong)", tags: "#长姐与王牌主心骨 #强强联合 #相互臣服的爱", desc: "成熟大女人之间的顶级拉扯。在外人面前各自独当一面，但在彼此怀里，却愿意卸下所有防备、甘愿臣服。这是势均力敌、灵魂深度交融的终极伴侣关系。", img: "images/cp_15.png" },
    "16": { name: "林娜琏 × Mina (MiNa)", tags: "#傲娇兔子与清冷白天鹅 #极致反差的温柔占有", desc: "清冷温柔的她，总能用最无声的宠溺包容你所有的急躁和小脾气。在你面前，她褪去所有疏离，只将最纯粹、最汹涌的爱意留给你一人独享。", img: "images/cp_16.png" },
    "17": { name: "林娜琏 × 金多贤 (DaNa)", tags: "#高甜磁场碰撞 #双向奔赴的专属偏爱 #热恋日常", desc: "眼里只有彼此的甜蜜暴击。无论身处多么喧闹的公开场合，两人的视线总能精准锁定对方。充满趣味与无限化学反应的恋爱，每天都是热恋期。", img: "images/cp_17.png" },
    "18": { name: "林娜琏 × 孙彩瑛 (ChaeNa)", tags: "#年上钓系与清冷酷盖 #反差萌热恋 #独家纵容", desc: "看似是你单方面的拿捏，实则是她心甘情愿的纵容。在无数个私密时刻，那些藏在眼神和肢体接触里的炽热火花，只有你们彼此心知肚明。", img: "images/cp_18.png" },
    "19": { name: "林娜琏 × 周子瑜 (TzuNa)", tags: "#腹黑忙内与沦陷大姐 #极致纵容 #深陷温柔乡", desc: "看似是年上在照顾，实则是年下用不动声色的占有欲将你死死圈在怀里。在绝对的偏爱面前，所有的矜持都溃不成军，眼里心里全是你。", img: "images/cp_19.png" },
    
    "23": { name: "俞定延 × Momo (JeongMo)", tags: "#霸总与专属娇妻 #公开秀恩爱 #极度安心的依靠", desc: "全网公认的官宣既视感！无论走到哪里，她的手永远自然地揽着你，眼神里的宠溺几乎要溢出来。这是安全感拉满、被当成全世界去捧着的顶级恋爱模式。", img: "images/cp_23.png" },
    "24": { name: "俞定延 × Sana (JeongSa)", tags: "#直球撩拨与纯情沦陷 #极致推拉 #心跳失控", desc: "面对她的疯狂直球和贴身撒娇，看似高冷的你总是不由自主地红了耳根。这种充满荷尔蒙张力与极致拉扯的恋爱，每一秒都在加速心跳。", img: "images/cp_24.png" },
    "25": { name: "俞定延 × 朴志效 (JeongJi)", tags: "#顶峰相见的灵魂伴侣 #相濡以沫的深沉爱意", desc: "历经风雨后依然紧紧扣在一起的双手。不需要过多的甜言蜜语，一个眼神、一个极其自然的依偎，就是对“永恒”最硬核的浪漫告白。", img: "images/cp_25.png" },
    "26": { name: "俞定延 × Mina (JeongMi)", tags: "#温柔狙击与无声依赖 #神仙眷侣 #独占温柔", desc: "最静谧也最浓烈的爱。她把所有的清冷都留给世界，却把最柔软、最毫无保留的体贴和眼神全数奉献给你。这是让人沉溺其中无法自拔的顶级温柔乡。", img: "images/cp_26.png" },
    "27": { name: "俞定延 × 金多贤 (JeongDa)", tags: "#宠溺与甜豆的日常 #高甜贴贴 #无上限纵容", desc: "被当作小朋友一样毫无原则地宠爱着。无论你做了多幼稚的举动，迎来的永远是她满眼宠溺的笑意和毫无底线的纵容。", img: "images/cp_27.png" },
    "28": { name: "俞定延 × 孙彩瑛 (JeongChae)", tags: "#酷盖与守护神 #默契热恋 #双向奔赴", desc: "外表酷飒、内心却只对你一人炽热。在彼此身边的安全感里，你们可以肆意做最真实的自己，享受不被外界打扰的二人世界。", img: "images/cp_28.png" },
    "29": { name: "俞定延 × 周子瑜 (JeongTzu)", tags: "#高个巨人的专属温柔 #公开偏爱 #极致安全感", desc: "在所有人面前高冷疏离的她，唯独在你面前会卸下所有防备，变成温顺黏人的大型犬。被全方位守护的恋爱，安全感到达顶点。", img: "images/cp_29.png" },

    "34": { name: "Momo × Sana (SaMo)", tags: "#全网认证绝美双生花 #公开热恋天花板 #蜜糖暴击", desc: "神仙级别的公开贴贴！异国他乡并肩作战多年，早已将彼此刻进骨血。每一个公开场合的拥抱和耳语，都写满了“除了彼此，眼中再无他人”的炽热宿命感。", img: "images/cp_34.png" },
    "35": { name: "Momo × 朴志效 (JiMo)", tags: "#力量与温柔的极致碰撞 #浓烈占有欲 #炽热爱恋", desc: "舞台上气场全开的性感尤物，在私底下却对你展现了极其强烈的独占欲。每一次十指紧扣，都是对爱情最深沉、最热烈的宣告。", img: "images/cp_35.png" },
    "36": { name: "Momo × Mina (MiMo)", tags: "#日line绝美氛围感 #灵魂契合的禁忌温柔 #深陷", desc: "如同文艺电影般唯美而深刻的爱恋。不需要一句多余的情话，光是并肩站在一起的呼吸声，就足以让所有人明白你们之间密不可分的浓烈羁绊。", img: "images/cp_36.png" },
    "37": { name: "Momo × 金多贤 (MoDa)", tags: "#高甜双向奔赴 #快乐源泉与挚爱 #无上限热恋", desc: "把枯燥的生活过成大型撒糖现场。只要对上视线就能默契大笑，每一个拥抱都充满阳光和让人融化的纯粹爱意。", img: "images/cp_37.png" },
    "38": { name: "Momo × 孙彩瑛 (MoChae)", tags: "#猫咪与老虎的高甜日常 #极致偏爱 #热恋沦陷", desc: "外人眼中的高冷酷盖，在你面前却化身成毫无原则的黏人精。所有的温柔和浪漫，都只对你一人全盘托出。", img: "images/cp_38.png" },
    "39": { name: "Momo × 周子瑜 (MoTzu)", tags: "#顶级神颜的致命吸引 #公开直球与沦陷 #甜度超标", desc: "走在路上让人忍不住回头尖叫的绝配组合。私底下的互动更是充满让人疯狂心跳的直球告白与极度宠溺。", img: "images/cp_39.png" },

    "45": { name: "Sana × 朴志效 (SaJi)", tags: "#双顶流强强联合 #女王与女王的极致拉扯 #占有欲", desc: "气场全开的顶级视觉与情感冲击！在耀眼的光芒背后，是彼此眼里只有对方、极其炽热且具有强烈掌控欲的顶级神仙恋爱。", img: "images/cp_45.png" },
    "46": { name: "Sana × Mina (MiSa / 三萨)", tags: "#优雅贵妇与热烈玫瑰 #全网疯狂催婚的顶级百合美学", desc: "全网呼声最高的王牌百合CP！一个是高贵清冷的白天鹅，一个是热烈明艳的红玫瑰。当清冷落入热烈怀中，产生的化学反应足以让所有人疯狂沦陷。", img: "images/cp_46.png" },
    "47": { name: "Sana × 金多贤 (DaSa / 多萨)", tags: "#小狐狸与小豆腐 #公开疯狂发糖 #极致拉扯", desc: "全网疯狂尖叫的公开绝配！一个热情似火主动出击，一个看似淡定实则疯狂沦陷。每一个对视和搂腰，都充满让人脸红心跳的恋爱实锤。", img: "images/cp_47.png" },
    "48": { name: "Sana × 孙彩瑛 (SaChae)", tags: "#年上钓系天花板与小老虎 #极致纯欲 #深陷热恋", desc: "被全网认证的“钓系绝杀”。在她无孔不入的温柔攻势下，小老虎彻底卸下防备，甘愿沉溺在独属于两个人的温柔乡里。", img: "images/cp_48.png" },
    "49": { name: "Sana × 周子瑜 (SaTzu / 纱子)", tags: "#绝美神颜百合天花板 #公开疯狂贴贴 #顶级宠溺", desc: "美貌与爱意同样惊艳世人的神仙组合！无论是在打歌后台还是海外巡演，无时无刻不在公开贴贴、宣示主权。这是满足所有百合小说幻想的顶级之恋。", img: "images/cp_49.png" },

    "56": { name: "朴志效 × Mina (JiMi)", tags: "#队长与天鹅的救赎之恋 #深沉爱意 #相守一生", desc: "在彼此最脆弱、压力最巨大的时刻，成为彼此唯一的精神支柱和避风港。这种历经千帆后依然紧紧扣在一起的双手，是超越一切的深沉之爱。", img: "images/cp_56.png" },
    "57": { name: "朴志效 × 金多贤 (JiDa)", tags: "#成熟大女人与元气小甜豆 #极度偏爱与守护", desc: "把所有的成熟稳重留给团队，却把所有的软弱、可爱和毫无保留的偏爱，全部留给了你。这是让人极有安全感的稳固恋爱。", img: "images/cp_57.png" },
    "58": { name: "朴志效 × 孙彩瑛 (JiChae)", tags: "#队长与天才艺术家的灵魂共振 #热烈深情", desc: "在艺术与现实的交织中，给予彼此最坚定的支持与炽热的爱意。每一次相拥，都是灵与肉的高度契合。", img: "images/cp_58.png" },
    "59": { name: "朴志效 × 周子瑜 (JiTzu)", tags: "#队长与忙内的顶级安全感 #公开偏爱与沦陷", desc: "在团队大姐威严之下的无限温柔，全数倾注在最小的你身上。这是公开场合里藏不住的偏爱与双向奔赴。", img: "images/cp_59.png" },

    "67": { name: "Mina × 金多贤 (MiDa / 南豆腐)", tags: "#清冷与元气的极致治愈 #全网狂嗑的绝美纯爱", desc: "宛如青春纯爱电影般干净而炙热的爱恋。当清冷安静遇上元气治愈，所有的阴霾都被温柔化解，眼里心里全是对彼此的笃定。", img: "images/cp_67.png" },
    "68": { name: "Mina × 孙彩瑛 (Michaeng / 名彩)", tags: "#全网封神的艺术灵魂之恋 #公开宣示主权 #神仙百合", desc: "百合圈顶级天花板的存在！从画作、纹身到日常私密合照，无一不在向全世界宣告“我们是一体”。这种深刻到灵魂深处的独占欲，让人一眼万年。", img: "images/cp_68.png" },
    "69": { name: "Mina × 周子瑜 (MiTzu / 南子)", tags: "#静谧神颜的顶级绝配 #温柔对视与窒息爱意", desc: "两大安静神颜的致命吸引。当她们面对面时，周围的一切仿佛都静止了，空气中只剩下彼此炽热的呼吸和化不开的浓烈爱意。", img: "images/cp_69.png" },

    "78": { name: "金多贤 × 孙彩瑛 (DubChaeng / 多彩)", tags: "#忙内赖的青梅竹马宿命之恋 #公开撒糖 #永恒热恋", desc: "从小到大一路相伴、早已将彼此写进未来的灵魂伴侣。无论是舞台上的疯狂打闹，还是私底下的紧紧依偎，都写满了“你是我的命中注定”。", img: "images/cp_78.png" },
    "79": { name: "金多贤 × 周子瑜 (DubTzu / 多子)", tags: "#高甜双向奔赴 #专属偏爱与无尽宠溺 #热恋", desc: "把最灿烂的笑容和毫无保留的温柔，只留给屏幕前和身边的彼此。每次同框都充满甜度超标的粉红泡泡。", img: "images/cp_79.png" },

    "89": { name: "孙彩瑛 × 周子瑜 (TzuChae / 忙内绝配)", tags: "#99line同岁宿命情侣 #公开贴贴 #顶级占有欲", desc: "同岁亲故最终演变成无法割舍的炽热恋人。无论是私底下的私密出游还是镜头前的自然搂抱，都充满让人疯狂心跳的绝对主权宣示。", img: "images/cp_89.png" },

    // 队外隐藏款
    "HIDDEN_YERI": { name: "林娜琏 × 金艺琳 (Red Velvet Yeri)", tags: "#大姐与忙内 #跨社神仙闺蜜 #顶流真性情爱恋", desc: "打破公司壁垒的圈内顶级真性情跨社绝配！性格极其合拍的两人，凑在一起就是全网瞩目的神仙眷侣。", img: "images/cp_yery.png" },
    "HIDDEN_MIYEON": { name: "Sana × 赵美延 ((G)I-DLE Miyeon)", tags: "#顶级神颜联动 #视觉暴击 #仙女级公开恋爱", desc: "全网轰动的神颜大美女组合！私底下的亲密互动甜度超标，犹如仙女降临般的视觉与情感双重盛宴。", img: "images/cp_miyeon.png" },
    "HIDDEN_SOMI": { name: "Somi (全昭弥) × 孙彩瑛 (Chaeyoung)", tags: "#千禧辣妹与酷盖 #青梅竹马挚友 #叛逆纯爱", desc: "JYP 出身的绝佳友情与宿命羁绊！兼具辣妹的张扬与私底下的毫无包袱，记录了青春中最疯狂、最纯粹的彼此。", img: "images/cp_somi.png" }
};

let currentQuestion = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('header-section').classList.add('hidden');
    const quizSec = document.getElementById('quiz-section');
    quizSec.classList.remove('hidden');
    quizSec.classList.add('fade-in');
    currentQuestion = 0;
    userAnswers = [];
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const prevBtn = document.getElementById('prev-btn');
    if (currentQuestion > 0) {
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
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

// 反悔/上一题功能
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        userAnswers.pop();
        loadQuestion();
    }
}

function showResult() {
    document.getElementById('quiz-section').classList.add('hidden');
    const resSec = document.getElementById('result-section');
    resSec.classList.remove('hidden');
    resSec.classList.add('fade-in');

    const counts = {};
    userAnswers.forEach(ans => { counts[ans] = (counts[ans] || 0) + 1; });

    const sortedTypes = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    let m1 = sortedTypes[0] || "1";
    let m2 = sortedTypes[1] || "2";
    if (m1 === m2) {
        m2 = sortedTypes[1] || String((parseInt(m1) % 9) + 1);
    }

    let n1 = parseInt(m1);
    let n2 = parseInt(m2);
    let cpKey = n1 < n2 ? `${n1}${n2}` : `${n2}${n1}`;

    if (!cpDatabase[cpKey]) {
        cpKey = "12";
    }

    if (userAnswers.filter(x => x === "9").length >= 4) {
        cpKey = "HIDDEN_YERI";
    } else if (userAnswers.filter(x => x === "5").length >= 4) {
        cpKey = "HIDDEN_MIYEON";
    }

    const result = cpDatabase[cpKey];
    document.getElementById('result-title').innerText = result.name;
    document.getElementById('result-tags').innerText = result.tags;
    document.getElementById('result-desc').innerText = result.desc;

    const imgElement = document.getElementById('result-img');
    if (result.img) {
        imgElement.src = result.img;
    }

    const badge = document.getElementById('hidden-badge');
    if (cpKey.startsWith("HIDDEN")) {
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
    alert("快截图把你的命定 TWICE 百合 CP 分享给身边的 ONCE 好友吧！✨");
}

// ==================== 包办婚姻功能（含暂未开发提示） ====================
let selectedMarriageCpKey = null;

function openArrangedMarriage() {
    const modal = document.getElementById('marriage-modal');
    modal.classList.remove('hidden');

    const grid = document.getElementById('marriage-grid');
    grid.innerHTML = '';

    // 仅渲染 36 对队内 CP
    Object.keys(cpDatabase).forEach(key => {
        if (!key.startsWith("HIDDEN")) {
            const cp = cpDatabase[key];
            const btn = document.createElement('button');
            btn.className = "text-left p-3 rounded-xl border border-gray-200 hover:border-pink-500 hover:bg-pink-50 transition text-xs font-medium text-gray-700 flex items-center justify-between";
            btn.innerHTML = `<span>💍 ${cp.name}</span> <span class="text-pink-500 font-bold">选择</span>`;
            btn.onclick = () => selectMarriageCp(key, cp.name);
            grid.appendChild(btn);
        }
    });
}

function closeArrangedMarriage() {
    document.getElementById('marriage-modal').classList.add('hidden');
}

function selectMarriageCp(key, name) {
    selectedMarriageCpKey = key;
    document.getElementById('selected-marriage-preview').classList.remove('hidden');
    document.getElementById('target-cp-name').innerText = name;
}

function payAndMarry(price) {
    if (!selectedMarriageCpKey) {
        alert("请先在上方的 36 对队内 CP 中选择一位您的包办对象！");
        return;
    }

    // 关闭包办婚姻选择窗，弹出“暂未开发”提示
    closeArrangedMarriage();
    alert(`💖 民政局温馨提示：\n\n您已成功选定结婚对象！但由于民政局尚在加急修建中，结婚视频与真实支付功能【暂未开发】，敬请期待后续版本！`);
}