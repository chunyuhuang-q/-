// 9位成员编号映射 (1-9)
// 1: 林娜琏, 2: 俞定延, 3: Momo, 4: Sana, 5: 朴志效, 6: Mina, 7: 金多贤, 8: 孙彩瑛, 9: 周子瑜
const membersMap = {
    1: "林娜琏", 2: "俞定延", 3: "Momo", 4: "Sana", 5: "朴志效", 6: "Mina", 7: "金多贤", 8: "孙彩瑛", 9: "周子瑜"
};

// 全员 36 对队内 CP 矩阵数据库 + 3对隐藏款
const cpDatabase = {
    "12": { name: "林娜琏 × 俞定延 (2yeon)", tags: "#顶峰宿敌 #年上傲娇与温柔守护", desc: "表面上是你来我往、谁也不服谁的公开互怼，转过头却在无数个深夜紧紧相拥。", img: "images/cp_12.png" },
    "13": { name: "林娜琏 × Momo (NaMo)", tags: "#笨蛋美女与纯情大姐 #极致偏爱", desc: "在所有人面前她是光芒万丈的大明星，唯独在你面前可以毫无保留地卸下防备。", img: "images/cp_13.png" },
    "14": { name: "林娜琏 × Sana (SaNa)", tags: "#双顶流甜心狙击 #公开调情与极致占有", desc: "空气里随时随地都在冒着粉红泡泡！每一次肌肤相亲都炽热得让旁人脸红心跳。", img: "images/cp_14.png" },
    "15": { name: "林娜琏 × 朴志效 (Nabong)", tags: "#长姐与王牌主心骨 #强强联合", desc: "成熟大女人之间的顶级拉扯。在外人面前各自独当一面，但在彼此怀里甘愿臣服。", img: "images/cp_15.png" },
    "16": { name: "林娜琏 × Mina (MiNa)", tags: "#傲娇兔子与清冷白天鹅 #温柔占有", desc: "清冷温柔的她，总能用最无声的宠溺包容你所有的急躁和小脾气。", img: "images/cp_16.png" },
    "17": { name: "林娜琏 × 金多贤 (DaNa)", tags: "#高甜磁场碰撞 #双向奔赴的专属偏爱", desc: "眼里只有彼此的甜蜜暴击。充满趣味与无限化学反应的恋爱，每天都是热恋期。", img: "images/cp_17.png" },
    "18": { name: "林娜琏 × 孙彩瑛 (ChaeNa)", tags: "#年上钓系与清冷酷盖 #反差萌热恋", desc: "看似是你单方面的拿捏，实则是她心甘情愿的纵容。", img: "images/cp_18.png" },
    "19": { name: "林娜琏 × 周子瑜 (TzuNa)", tags: "#腹黑忙内与沦陷大姐 #极致纵容", desc: "在绝对的偏爱面前，所有的矜持都溃不成军，眼里心里全是你。", img: "images/cp_19.png" },
    
    "23": { name: "俞定延 × Momo (JeongMo)", tags: "#霸总与专属娇妻 #公开秀恩爱", desc: "无论走到哪里，她的手永远自然地揽着你，眼神里的宠溺几乎要溢出来。", img: "images/cp_23.png" },
    "24": { name: "俞定延 × Sana (JeongSa)", tags: "#直球撩拨与纯情沦陷 #极致推拉", desc: "面对她的疯狂直球和贴身撒娇，看似高冷的你总是不由自主地红了耳根。", img: "images/cp_24.png" },
    "25": { name: "俞定延 × 朴志效 (JeongJi)", tags: "#顶峰相见的灵魂伴侣 #相濡以沫", desc: "历经风雨后依然紧紧扣在一起的双手，是对“永恒”最硬核的浪漫告白。", img: "images/cp_25.png" },
    "26": { name: "俞定延 × Mina (JeongMi)", tags: "#温柔狙击与无声依赖 #神仙眷侣", desc: "她把所有的清冷都留给世界，却把最柔软的体贴和眼神全数奉献给你。", img: "images/cp_26.png" },
    "27": { name: "俞定延 × 金多贤 (JeongDa)", tags: "#宠溺与甜豆的日常 #高甜贴贴", desc: "被当作小朋友一样毫无原则地宠爱着，迎来的永远是满眼宠溺的笑意。", img: "images/cp_27.png" },
    "28": { name: "俞定延 × 孙彩瑛 (JeongChae)", tags: "#酷盖与守护神 #默契热恋", desc: "外表酷飒、内心却只对你一人炽热，享受不被外界打扰的二人世界。", img: "images/cp_28.png" },
    "29": { name: "俞定延 × 周子瑜 (JeongTzu)", tags: "#高个巨人的专属温柔 #极致安全感", desc: "唯独在你面前会卸下所有防备，变成温顺黏人的大型犬。", img: "images/cp_29.png" },

    "34": { name: "Momo × Sana (SaMo)", tags: "#全网认证绝美双生花 #蜜糖暴击", desc: "神仙级别的公开贴贴！异国他乡并肩作战多年，早已将彼此刻进骨血。", img: "images/cp_34.png" },
    "35": { name: "Momo × 朴志效 (JiMo)", tags: "#力量与温柔的极致碰撞 #炽热爱恋", desc: "舞台上气场全开的性感尤物，在私底下却对你展现了极其强烈的独占欲。", img: "images/cp_35.png" },
    "36": { name: "Momo × Mina (MiMo)", tags: "#日line绝美氛围感 #灵魂契合", desc: "如同文艺电影般唯美而深刻的爱恋，呼吸声都写满了密不可分的羁绊。", img: "images/cp_36.png" },
    "37": { name: "Momo × 金多贤 (MoDa)", tags: "#高甜双向奔赴 #快乐源泉", desc: "把枯燥的生活过成大型撒糖现场，对上视线就能默契大笑。", img: "images/cp_37.png" },
    "38": { name: "Momo × 孙彩瑛 (MoChae)", tags: "#猫咪与老虎的高甜日常 #偏爱沦陷", desc: "外人眼中的高冷酷盖，在你面前却化身成毫无原则的黏人精。", img: "images/cp_38.png" },
    "39": { name: "Momo × 周子瑜 (MoTzu)", tags: "#顶级神颜的致命吸引 #甜度超标", desc: "走在路上让人忍不住回头尖叫的绝配组合，充满心跳的直球告白。", img: "images/cp_39.png" },

    "45": { name: "Sana × 朴志效 (SaJi)", tags: "#双顶流强强联合 #女王的极致拉扯", desc: "在耀眼的光芒背后，是彼此眼里只有对方、极其炽热的顶级神仙恋爱。", img: "images/cp_45.png" },
    "46": { name: "Sana × Mina (MiSa / 三萨)", tags: "#优雅贵妇与热烈玫瑰 #百合美学", desc: "当清冷落入热烈怀中，产生的化学反应足以让所有人疯狂沦陷。", img: "images/cp_46.png" },
    "47": { name: "Sana × 金多贤 (DaSa / 多萨)", tags: "#小狐狸与小豆腐 #极致拉扯", desc: "一个热情似火主动出击，一个看似淡定实则疯狂沦陷，充满恋爱实锤。", img: "images/cp_47.png" },
    "48": { name: "Sana × 孙彩瑛 (SaChae)", tags: "#年上钓系天花板与小老虎 #纯欲", desc: "在她无孔不入的温柔攻势下，小老虎彻底卸下防备，沉溺在温柔乡里。", img: "images/cp_48.png" },
    "49": { name: "Sana × 周子瑜 (SaTzu / 纱子)", tags: "#绝美神颜百合天花板 #顶级宠溺", desc: "无时无刻不在公开贴贴、宣示主权，满足所有百合小说幻想的顶级之恋。", img: "images/cp_49.png" },

    "56": { name: "朴志效 × Mina (JiMi)", tags: "#队长与天鹅的救赎之恋 #深沉爱意", desc: "在彼此最脆弱的时刻成为唯一的避风港，超越一切的深沉之爱。", img: "images/cp_56.png" },
    "57": { name: "朴志效 × 金多贤 (JiDa)", tags: "#成熟大女人与元气小甜豆 #偏爱", desc: "把所有的成熟稳重留给团队，却把毫无保留的偏爱全部留给了你。", img: "images/cp_57.png" },
    "58": { name: "朴志效 × 孙彩瑛 (JiChae)", tags: "#队长与天才艺术家的灵魂共振", desc: "在艺术与现实的交织中，给予彼此最坚定的支持与炽热的爱意。", img: "images/cp_58.png" },
    "59": { name: "朴志效 × 周子瑜 (JiTzu)", tags: "#队长与忙内的顶级安全感 #偏爱", desc: "大姐威严之下的无限温柔全数倾注在最小的你身上，公开的双向奔赴。", img: "images/cp_59.png" },

    "67": { name: "Mina × 金多贤 (MiDa / 南豆腐)", tags: "#清冷与元气的极致治愈 #纯爱", desc: "宛如青春纯爱电影般干净而炙热，所有的阴霾都被温柔化解。", img: "images/cp_67.png" },
    "68": { name: "Mina × 孙彩瑛 (Michaeng / 名彩)", tags: "#全网封神的艺术灵魂之恋 #神仙百合", desc: "从画作到日常合照无一不在宣告“我们是一体”，独占欲让人一眼万年。", img: "images/cp_68.png" },
    "69": { name: "Mina × 周子瑜 (MiTzu / 南子)", tags: "#静谧神颜的顶级绝配 #窒息爱意", desc: "两大安静神颜的致命吸引，空气中只剩下彼此炽热的呼吸。", img: "images/cp_69.png" },

    "78": { name: "金多贤 × 孙彩瑛 (DubChaeng / 多彩)", tags: "#忙内赖的青梅竹马宿命之恋 #永恒", desc: "从小到大一路相伴，无论是舞台打闹还是私下依偎，都写满了命中注定。", img: "images/cp_78.png" },
    "79": { name: "金多贤 × 周子瑜 (DubTzu / 多子)", tags: "#高甜双向奔赴 #专属偏爱", desc: "把最灿烂的笑容和温柔留给彼此，每次同框都充满甜度超标的粉红泡泡。", img: "images/cp_79.png" },

    "89": { name: "孙彩瑛 × 周子瑜 (TzuChae / 忙内绝配)", tags: "#99line同岁宿命情侣 #绝对占有", desc: "同岁亲故最终演变成无法割舍的炽热恋人，充满让人疯狂心跳的主权宣示。", img: "images/cp_89.png" },

    // 队外隐藏款
    "HIDDEN_YERI": { name: "林娜琏 × 金艺琳 (Red Velvet Yeri)", tags: "#大姐与忙内 #跨社神仙闺蜜", desc: "打破公司壁垒的圈内顶级真性情跨社绝配，凑在一起就是全网瞩目的神仙眷侣。", img: "images/cp_yery.png" },
    "HIDDEN_MIYEON": { name: "Sana × 赵美延 ((G)I-DLE Miyeon)", tags: "#顶级神颜联动 #视觉暴击", desc: "全网轰动的神颜大美女组合，私下互动犹如仙女降临般的视觉与情感双重盛宴。", img: "images/cp_miyeon.png" },
    "HIDDEN_SOMI": { name: "Somi (全昭弥) × 孙彩瑛 (Chaeyoung)", tags: "#千禧辣妹与酷盖 #叛逆纯爱", desc: "JYP 出身的绝佳友情与宿命羁绊，记录了青春中最疯狂、最纯粹的彼此。", img: "images/cp_somi.png" }
};

// 12道题：选项被平均分配到 1 到 9 的各个数字，确保每个成员都有平等的出场机会
const questions = [
    {
        q: "Q1：当另一半在聚会上成为了全场的焦点、备受瞩目时，你内心真实的第一反应是？",
        category: "成员倾向 A 组",
        options: [
            { text: "“哼，这人平时在我面前可不是这样的。”（傲娇并散发极强独占欲）", member: 1 },
            { text: "会默默站在人群边缘，微笑着看着他/她发光，眼里只有爱意。", member: 2 },
            { text: "直接挤进人群，当众搂住宣示主权，互调侃模式瞬间开启。", member: 3 },
            { text: "觉得超有面子，甚至想跟着一起起哄，把炽热的爱意全场撒糖。", member: 4 },
            { text: "内心毫无波澜只想把人拽回房间：“快结束吧，只想贴贴你。”", member: 5 }
        ]
    },
    {
        q: "Q2：你最向往的百合恋爱日常行为模式，更接近以下哪一种？",
        category: "成员倾向 A 组",
        options: [
            { text: "毫无底线的互相撒娇与黏人，空气里随时冒着浓烈粉红泡泡。", member: 6 },
            { text: "安静地依偎在一起各做各的事，偶尔对视一眼就能读懂深情。", member: 7 },
            { text: "像热恋情侣一样日常打闹互黑，但遇到事永远是彼此最坚强的后盾。", member: 8 },
            { text: "说走就走深夜私奔压马路，永远充满新鲜感、心跳与疯狂印记。", member: 9 },
            { text: "一个负责运筹帷幄、霸道宠溺，另一个负责当个毫无原则的娇气包。", member: 1 }
        ]
    },
    {
        q: "Q3：如果另一半疲惫或情绪低落时，你最倾向于采取什么行动去治愈他/她？",
        category: "成员倾向 A 组",
        options: [
            { text: "不管三七二十一直接强行抱进怀里，各种温柔耳语直到对方融化。", member: 2 },
            { text: "默默不说话，泡一杯温茶或者准备好最爱吃的甜品，静静陪着。", member: 3 },
            { text: "用犀利但满含爱意的话帮对方解压，顺便一个深吻把坏心情赶跑。", member: 4 },
            { text: "直接拉出门：“走！带你去游乐园/开着车去看专属我们的日落！”", member: 5 },
            { text: "给对方绝对的私密空间，然后从背后紧紧抱住，做最踏实的避风港。", member: 6 }
        ]
    },
    {
        q: "Q4：你对于伴侣身上“反差萌”的最高接受标准是什么？",
        category: "成员倾向 A 组",
        options: [
            { text: "外表看着高冷、不好接近，私底下却是个极度黏人的小哭包。", member: 7 },
            { text: "平时没心没肺，但在私底下比谁都深情、会撩且充满主权。", member: 8 },
            { text: "看起来精致优雅像个贵妇，在你面前笑起来却毫无包袱、像个萌妹。", member: 9 },
            { text: "拥有甜美可爱的外表，骨子里却极具艺术叛逆感和病娇般的偏爱。", member: 1 },
            { text: "永远精力充沛、元气满满，像个只围着你转的百变小甜豆。", member: 2 }
        ]
    },
    {
        q: "Q5：在两个人的纪念日或特殊日子里，你更偏爱哪种庆祝行为？",
        category: "成员倾向 A 组",
        options: [
            { text: "必须要有精心布置的烛光晚餐、专属玫瑰以及海量的双人私密合照。", member: 3 },
            { text: "不需要形式，简简单单一起窝在被窝里看部浪漫老电影就足够。", member: 4 },
            { text: "互赠对方早就想要的贴心礼物，主打一个充满默契与情趣的惊喜。", member: 5 },
            { text: "去尝试从来没去过的新奇刺激项目，留下只有彼此知道的浓烈回忆。", member: 6 },
            { text: "吃顿超级丰盛的美食，把热量抛诸脑后，然后缠绵一整晚。", member: 7 }
        ]
    },
    {
        q: "Q6：你觉得一段长久舒适的百合亲密关系中，最核心的支柱是什么？",
        category: "成员倾向 A 组",
        options: [
            { text: "无论过多久，都能保持像热恋期一样强烈的肢体接触与心跳感。", member: 8 },
            { text: "深度的灵魂默契，即使一整天不说话，空气里也全是化不开的蜜意。", member: 9 },
            { text: "永远能互相接梗，把生活过成每天都充满粉红泡泡的专属世界。", member: 1 },
            { text: "对世界保持共同的好奇心，一起去探索只属于两个人的精神乌托邦。", member: 2 },
            { text: "绝对的真诚与病娇般的偏爱，在对方怀里毫无保留地展现赤诚的自己。", member: 3 }
        ]
    },
    {
        q: "Q7：如果和伴侣发生了意见分歧，你通常会展现出怎样的行为模式？",
        category: "成员倾向 B 组",
        options: [
            { text: "先撒娇耍赖把气氛搞轻松，或者用无辜含水的眼神看着对方让其妥协。", member: 4 },
            { text: "冷静听对方说完，用温和而坚定的语气慢慢沟通，最后用拥抱化解。", member: 5 },
            { text: "直接把人拉到墙角壁咚，讲道理摆事实，不把对方说服到求饶不罢休。", member: 6 },
            { text: "“行行行听你的！”表面妥协，然后用各种温柔攻势把话题彻底带偏。", member: 7 },
            { text: "陷入短暂沉思，需要对方主动抱抱、撒个娇才能彻底哄好。", member: 8 }
        ]
    },
    {
        q: "Q8：你对另一半在社交圈中的“异性/同性好友边界感”持什么态度？",
        category: "成员倾向 B 组",
        options: [
            { text: "我的眼里绝对揉不得沙子，希望对方的视线和重心永远多偏向我一点。", member: 9 },
            { text: "彼此拥有绝对信任和社交空间，但回到家后必须开启两人的亲密独处。", member: 1 },
            { text: "“你的朋友就是我的朋友，一起来开派对啊！”但在人群中手牵得紧紧的。", member: 2 },
            { text: "只要不影响核心默契，外界怎么社交无所谓，因为我知道她最爱我。", member: 3 },
            { text: "恨不得把对方藏起来不让任何人看见，全世界只要我们相爱就够了。", member: 4 }
        ]
    },
    {
        q: "Q9：当你发现伴侣身上有一个不太完美的小缺点（如做事拖延或粗心）时？",
        category: "成员倾向 B 组",
        options: [
            { text: "一边捏着脸吐槽嫌弃，一边忍不住身体力行帮对方把烂摊子收拾好。", member: 5 },
            { text: "觉得超级可爱，甚至觉得不完美让对方在怀里显得更加生动真实。", member: 6 },
            { text: "抓住把柄开启长期的“爱的惩罚”调侃模式，当作增进情趣的调味剂。", member: 7 },
            { text: "直接上手帮对方纠正，顺便给个宠溺的摸头杀。", member: 8 },
            { text: "全盘包容并接受，人无完人，在眼里对方连缺点都是迷人的香气。", member: 9 }
        ]
    },
    {
        q: "Q10：如果可以和另一半去一个完全没有人认识的地方隐居，希望是哪里？",
        category: "成员倾向 B 组",
        options: [
            { text: "南欧充满浪漫复古情调、随时能依偎着喝咖啡看夕阳的海边私密小镇。", member: 1 },
            { text: "北欧安静到能听见雪落声音的森林木屋，整天围着壁炉拥抱取暖。", member: 2 },
            { text: "充满烟火气、夜市美食遍地、晚上可以十指紧扣压马路的浪漫不夜城。", member: 3 },
            { text: "辽阔壮丽、可以看极光和冰川的旷野，在天地间感受彼此的炽热呼吸。", member: 4 },
            { text: "充满艺术气息、随处都是画廊和独立书店的复古文艺街区。", member: 5 }
        ]
    },
    {
        q: "Q11：你心目中最高级的“偏爱与双标”具体表现为什么行为？",
        category: "成员倾向 B 组",
        options: [
            { text: "对所有人冷若冰霜、礼貌疏离，唯独对你一个人毫无底线地撒娇索吻。", member: 6 },
            { text: "在吵得最凶时，全场讲道理，她却转头突然把你拉进怀里狠狠护住。", member: 7 },
            { text: "所有人面前是高冷女神，一到你面前就变成会肆意撒娇的小猫。", member: 8 },
            { text: "无论几点钟、多远，只要一句“我想你了”，立刻买机票出现在门外。", member: 9 },
            { text: "把世间所有的特权、公开的偏爱与专属昵称，完完整整只留给你一人。", member: 1 }
        ]
    },
    {
        q: "Q12：当你的生活遭遇重大挫折、陷入低谷时，你最希望另一半对你做什么？",
        category: "成员倾向 B 组",
        options: [
            { text: "什么都不用说，只要用双臂紧紧将我环抱，给我无条件的支持与亲吻。", member: 2 },
            { text: "用冷静理智的头脑理清思路带我走出迷茫，霸道宣称：“别怕，有我养你。”", member: 3 },
            { text: "讲最搞笑的肉麻情话逗我开心，用没心没肺的甜蜜把阴霾一扫而空。", member: 4 },
            { text: "二话不说带我离开当前环境去豪华度假，用无尽的宠爱冲淡痛苦。", member: 5 },
            { text: "默默在背后把一切现实麻烦处理好，让我安心在她怀里恢复元气。", member: 6 }
        ]
    }
];

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
        // 注意：这里把选项对应的成员代号传进去
        btn.innerHTML = `<span>${opt.text}</span><span class="text-pink-400 font-bold ml-2 text-sm">👉</span>`;
        btn.onclick = () => selectOption(opt.member);
        container.appendChild(btn);
    });
}

function selectOption(memberNum) {
    userAnswers.push(memberNum);
    currentQuestion++;
    loadQuestion();
}

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

    // 统计 1 到 9 每个数字出现的总次数
    const counts = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};
    userAnswers.forEach(num => {
        if(counts[num] !== undefined) {
            counts[num]++;
        }
    });

    // 按照得票高低排序所有成员编号
    const sortedMembers = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    
    // 取出得票最高的前两个成员作为 CP 组合（确保不相同）
    let m1 = parseInt(sortedMembers[0]);
    let m2 = parseInt(sortedMembers[1]);
    
    if (m1 === m2) {
        m2 = parseInt(sortedMembers[2]) || ((m1 % 9) + 1);
    }

    // 确保组合 key 格式规范（数字小的在前，拼成两数字字符串，如 8 和 9 组合成 "89"）
    let n1 = Math.min(m1, m2);
    let n2 = Math.max(m1, m2);
    let cpKey = `${n1}${n2}`;

    // 如果想特定测出孙彩瑛（8）和周子瑜（9），在答题时多选带 member: 8 和 member: 9 的选项即可！
    if (!cpDatabase[cpKey]) {
        cpKey = "12";
    }

    // 隐藏款触发判定
    if (userAnswers.filter(x => x === 9).length >= 5) {
        cpKey = "HIDDEN_YERI";
    } else if (userAnswers.filter(x => x === 5).length >= 5) {
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

// ==================== 包办婚姻功能 ====================
let selectedMarriageCpKey = null;

function openArrangedMarriage() {
    const modal = document.getElementById('marriage-modal');
    modal.classList.remove('hidden');

    const grid = document.getElementById('marriage-grid');
    grid.innerHTML = '';

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
    closeArrangedMarriage();
    alert(`💖 民政局温馨提示：\n\n您已成功选定结婚对象！但由于民政局尚在加急修建中，结婚视频与真实支付功能【暂未开发】，敬请期待后续版本！`);
}