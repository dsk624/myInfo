import { Book, HistoryEvent } from './types';

export const featuredBooks: Book[] = [
  {
    id: '1',
    title: '万历十五年',
    author: '黄仁宇',
    coverUrl: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=400&q=80',
    description: '通过对明神宗万历十五年看似平平淡淡的叙述，揭示了中国传统社会在明代后期已经走向尽头。大历史观的代表作，视角独特。',
    tags: ['历史', '明朝', '经典'],
    readingTime: '约 8 小时'
  },
  {
    id: '2',
    title: '乡土中国',
    author: '费孝通',
    coverUrl: 'https://images.unsplash.com/photo-1533230676258-2936e76d05f3?auto=format&fit=crop&w=400&q=80',
    description: '洞察中国基层传统社会结构的社会学经典。通俗简洁地解读了中国人的“根”与人际关系网络，理解中国社会的必读之作。',
    tags: ['社会学', '文化', '必读'],
    readingTime: '约 5 小时'
  },
  {
    id: '3',
    title: '中国哲学简史',
    author: '冯友兰',
    coverUrl: 'https://images.unsplash.com/photo-1528642474493-2276c8c6d0d5?auto=format&fit=crop&w=400&q=80',
    description: '打通古今中外的哲学脉络，在有限的篇幅里融入了对中国传统思想、精神、智慧的深刻理解，是了解中国哲学的最佳入门。',
    tags: ['哲学', '思想', '国学'],
    readingTime: '约 10 小时'
  },
  {
    id: '4',
    title: '活着',
    author: '余华',
    coverUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=400&q=80',
    description: '讲述了福贵悲惨而坚韧的一生。展现了在动荡年代中，人是如何去忍受生活的苦难，以及“活着”本身就是力量的深刻主题。',
    tags: ['小说', '人生', '感人'],
    readingTime: '约 6 小时'
  },
  {
    id: '5',
    title: '红楼梦',
    author: '曹雪芹',
    coverUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&q=80',
    description: '中国古典小说巅峰之作。以贾史王薛四大家族兴衰为背景，描绘了一批举止见识出于须眉之上的闺阁佳人的人生百态。',
    tags: ['古典', '名著', '文学'],
    readingTime: '约 40 小时'
  },
  {
    id: '6',
    title: '邓小平时代',
    author: '傅高义',
    coverUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80',
    description: '全景式描述了邓小平跌宕起伏的一生及中国惊险崎岖的改革开放之路。理解当代中国巨变和现代化进程不可多得的巨著。',
    tags: ['传记', '政治', '改革'],
    readingTime: '约 25 小时'
  },
  {
    id: '7',
    title: '三体全集',
    author: '刘慈欣',
    coverUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
    description: '中国科幻文学的里程碑。讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。',
    tags: ['科幻', '雨果奖', '宇宙'],
    readingTime: '约 30 小时'
  },
  {
    id: '8',
    title: '明朝那些事儿',
    author: '当年明月',
    coverUrl: 'https://images.unsplash.com/photo-1555519395-5f9b4c09d571?auto=format&fit=crop&w=400&q=80',
    description: '以史料为基础，以年代和具体人物为主线，用小说笔法讲述了明朝三百年的历史，让历史变得有趣、鲜活、通俗易懂。',
    tags: ['历史', '通俗', '畅销'],
    readingTime: '约 50 小时'
  },
  {
    id: '9',
    title: '孙子兵法',
    author: '孙武',
    coverUrl: 'https://images.unsplash.com/photo-1606561021495-c49669528d22?auto=format&fit=crop&w=400&q=80',
    description: '世界上最早的兵书，被誉为“兵学圣典”。不仅是军事理论的集大成者，其中蕴含的战略思维和哲学智慧至今仍有巨大价值。',
    tags: ['军事', '智慧', '国学'],
    readingTime: '约 4 小时'
  }
];

export const ancientHistory: HistoryEvent[] = [
  {
    id: 'a1',
    era: '先秦时期',
    period: '约前2070 - 前221',
    description: '中华文明的晨曦。从夏商周的青铜礼乐，到春秋战国的百家争鸣，华夏民族的文化基因在此刻奠定。',
    keyEvents: [
      '武王伐纣：确立礼乐宗法制度。',
      '百家争鸣：孔孟老庄思想光耀千古。',
      '商鞅变法：法家思想推动秦国崛起。'
    ],
    significance: '奠定了中国传统文化的核心价值观与早期政治制度。'
  },
  {
    id: 'a2',
    era: '秦汉帝国',
    period: '前221 - 220',
    description: '大一统格局的确立。秦始皇横扫六国，汉武帝开疆拓土，丝绸之路连接东西，中华文明开始展现世界级影响力。',
    keyEvents: [
      '秦灭六国：书同文，车同轨，统一度量衡。',
      '汉武盛世：罢黜百家，独尊儒术。',
      '张骞通西域：开辟丝绸之路，文明交汇。'
    ],
    significance: '确立了中央集权制度，儒家思想成为正统，汉族形成。'
  },
  {
    id: 'a3',
    era: '魏晋南北朝',
    period: '220 - 581',
    description: '政权更迭与民族大融合。虽然战乱频繁，但精神极度自由，书法、绘画、佛教艺术大放异彩。',
    keyEvents: [
      '三国鼎立：英雄辈出的时代。',
      '孝文帝改革：推动鲜卑族汉化，促进融合。',
      '兰亭集序：王羲之书写天下第一行书。'
    ],
    significance: '民族大融合为隋唐盛世奠定了人口与文化基础。'
  },
  {
    id: 'a4',
    era: '隋唐盛世',
    period: '581 - 907',
    description: '世界帝国的巅峰。万邦来朝，气度恢弘。科举制打破门第，唐诗成为人类文学史上的璀璨明珠。',
    keyEvents: [
      '科举制确立：社会阶层流动通道打开。',
      '贞观之治：政治清明，文化包容。',
      '安史之乱：盛极而衰的历史转折。'
    ],
    significance: '中国封建社会的最高峰，开放包容的文化精神影响至今。'
  },
  {
    id: 'a5',
    era: '宋元时期',
    period: '960 - 1368',
    description: '经济文化的登峰造极与版图扩张。宋朝市民社会兴起，四大发明改变世界；元朝疆域空前辽阔。',
    keyEvents: [
      '经济重心南移：苏湖熟，天下足。',
      '清明上河图：描绘繁华的市井生活。',
      '行省制度：元朝奠定现代行政区划基础。'
    ],
    significance: '商品经济高度发达，科技文化领先世界，多元一体格局巩固。'
  },
  {
    id: 'a6',
    era: '明清时期',
    period: '1368 - 1840',
    description: '皇权的顶峰与夕阳的余晖。统一多民族国家最终定型，但闭关锁国导致逐渐落后于世界工业文明潮流。',
    keyEvents: [
      '郑和下西洋：海洋时代的绝响。',
      '康乾盛世：封建社会的最后辉煌。',
      '军机处设立：君主专制达到极限。'
    ],
    significance: '现代中国版图基本奠定，古典文化集大成，近代危机孕育。'
  }
];

export const modernHistory: HistoryEvent[] = [
  {
    id: 'm1',
    era: '晚清剧变',
    period: '1840 - 1911',
    description: '千年变局。列强入侵，山河破碎。从洋务运动到戊戌变法，仁人志士在屈辱中艰难探索救国之路。',
    keyEvents: [
      '鸦片战争：中国近代史开端，国门被迫打开。',
      '甲午海战：民族危机空前严重。',
      '辛丑条约：彻底沦为半殖民地半封建社会。'
    ],
    significance: '旧制度崩溃，民族意识觉醒，救亡图存成为时代主题。'
  },
  {
    id: 'm2',
    era: '民国风云',
    period: '1912 - 1949',
    description: '共和初创与战火洗礼。辛亥革命推翻帝制，新文化运动启蒙思想，抗日战争浴血奋战重塑民族魂。',
    keyEvents: [
      '辛亥革命：建立亚洲第一个共和国。',
      '五四运动：新民主主义革命开端。',
      '抗日战争：中华民族由衰败走向复兴的枢纽。'
    ],
    significance: '结束君主专制，实现民族独立，为新中国诞生奠定基础。'
  },
  {
    id: 'm3',
    era: '大国崛起',
    period: '1949 - 至今',
    description: '从站起来、富起来到强起来。历经曲折探索，最终找到中国特色社会主义道路，创造经济奇迹。',
    keyEvents: [
      '开国大典：中国人民从此站起来了。',
      '改革开放：伟大的历史转折，经济腾飞。',
      '全面小康：中华民族伟大复兴的关键一步。'
    ],
    significance: '创造了人类发展史上的奇迹，重回世界舞台中央。'
  }
];