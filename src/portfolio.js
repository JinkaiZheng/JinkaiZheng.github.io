/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// import emoji from "react-easy-emoji";

import fastreid from "./assets/images/FastReID-Logo.png";
import jkAnimation from "./assets/lottie/jkAnimation"; // Rename to your file name for custom animation
import zjk from "./assets/images/zjk2.jpg";
import chf from "./assets/images/chf.jpg";
import jxx from "./assets/images/jxx.jpg";
import yc from "./assets/images/yc.jpg";
import lmh from "./assets/images/lmh.jpg";
import dcx from "./assets/images/dcx.jpg";
import wjq from "./assets/images/wjq.jpg";
import lx from "./assets/images/lx.jpg";
import ljb from "./assets/images/ljb.jpg";
import cs from "./assets/images/cs.jpg";
import plog0 from "./assets/images/plog0.png";
import plog1 from "./assets/images/plog1.png";
import plog2 from "./assets/images/plog2.jpg";
import lw from "./assets/images/lw.png";
import lxc from "./assets/images/lxc.png";
import whl from "./assets/images/whl.jpg";
import wjx from "./assets/images/wjx.jpg";
import ysp from "./assets/images/ysp.jpg";



// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: jkAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  main: "主页",
  username: "Jinkai Zheng",
  title: "Jinkai Zheng 郑锦凯",
  subTitle1:
    "郑锦凯，男，博士，杭州电子科技大学特聘副教授，杭电丽水研究院科研管理部主任。主要从事人工智能、计算机视觉、步态识别、多模态网络等领域的技术研究和“产学研”结合的应用实现。曾担任京东探索研究院研究型算法工程师，负责智能人体分析算法研发。与海内外多家知名高校和企业保持良好的合作关系，可推荐优秀学生前往京东探索研究院、中国科学技术大学、联想研究院、华为等企业实习（联合培养）、就业或深造。以第一作者发表高水平论文多篇，包括计算机视觉和多媒体领域顶级国际学术会议IEEE CVPR、ACM MM、IEEE ISCAS等， 谷歌学术引用量达750余次，并长期担任领域内重要期刊（TIP、TMM、TCSVT等）和会议（CVPR、ICCV、ACM MM、AAAI等）的审稿人，参与科技部--国家重点研发计划等多项，授权发明专利4项。",
  subTitle2: 
    " 研究成果获2024年度吴文俊人工智能科技进步特等奖（排名第四），2023年中国图象图形学学会CSIG青年科学家会议优秀论文（排名第一），2021年度国际会议IEEE ISCAS MSA-TC最佳论文提名奖（排名第一），相关科研成果曾被中国新闻网、中国科学报、浙江省教育厅等媒体报道。",
  subtext1:
    "常年招收具有自我驱动力的优秀本科生，进行科研创新训练，欢迎与我联系。(zhengjinkai3@hdu.edu.cn)",
  subtext2:
    "现招收2025级硕士研究生，欢迎感兴趣的同学与我联系（zhengjinkai3@hdu.edu.cn）",
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const greeting_en = {
  main: "Homepage",
  username: "Jinkai Zheng",
  title: "Jinkai Zheng 郑锦凯",
  subTitle1:
    "  Jinkai Zheng is an Associate Professor at Hangzhou Dianzi University (HDU) and the Director of the Research Management Department at the Lishui Institute of HDU. His research focuses on artificial intelligence, computer vision, gait recognition, multi-modal networks, and industry-academia collaboration. He previously served as a Research Engineer at JD Explore Academy, responsible for the development of intelligent human analysis algorithms. He has good partnerships with renowned universities and enterprises. He can recommend outstanding students for internships (Joint supervision), employment, or further study at institutions such as JD Explore Academy, the University of Science and Technology of China, Lenovo Research, Huawei, etc. He has published many high-level papers as the first author including IEEE CVPR, ACM MM, etc, with over 750 Google Scholar citations. He is a regular reviewer for important journals (TIP, TMM, TCSVT, etc) and conferences (CVPR, ICCV, ACM MM, etc). Dr. Zheng has participated in several national key R&D programs and holds 4 authorized invention patents. ",
  subTitle2:
    "  The research achievements won the Grand Prize of Wu Wenjun Artificial Intelligence Science and Technology Progress Award, China, 2024 (ranked fourth); the Excellent Paper Award of CSIG, China, 2023 (ranked first); the Best Paper Award - Honorable Mention of IEEE ISCAS MSA-TC, Daegu, Korea, 2021 (ranked first). In addition, His research achievements have been reported by China News Network, China Science Bulletin, and the Zhejiang Provincial Department of Education.",
  subtext1:
    "  We are recruiting self-motivated undergraduate students in computer vision and multimedia. Please contact me (zhengjinkai3@hdu.edu.cn) if you are interested.",
  subtext2: 
    "  We are now recruiting 2025 graduate students, welcome to contact me (zhengjinkai3@hdu.edu.cn) if you are interested.",
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  googlescholar: "https://scholar.google.com.hk/citations?user=1qoGuQMAAAAJ&hl=zh-CN&oi=ao",
  github: "https://github.com/JinkaiZheng",
  email: "zhengjinkai3@hdu.edu.cn",
  display: true // Set true to display this section, defaults to false
};

const introContent = {
  title: {zh:"进组须知",
          en:"Entry Instructions"},
  content: {
    en:["The research group is affiliated with the Intelligent Information Processing Laboratory (IIPL) at Hangzhou Dianzi University, specializing in computer vision. Students will undergo rigorous training to develop professional expertise, scientific thinking, and the ability to independently identify and solve research problems. In addition, We aim to publish relevant research results in high-level conferences/journals or make core technical contributions to important engineering projects. The research group maintains good collaborative relations with many well-known universities and enterprises and can recommend outstanding students for internships (Joint supervision), employment, or further study at institutions such as JD Explore Academy, University of Science and Technology of China, Lenovo Research, Huawei, etc.",
    {
      heading:"Entry Requirements",
      items: [
        "Respect teachers, hard-working and thrifty, honest and trustworthy, modest and polite, sincere and studious.",
        "Physical and mental health, positively, encourage students to actively participate in physical exercise.",
        "Have clear goals and plans, and a good understanding of yourself: Be clear about why you want to join the research group, what you expect to gain from it, and why you fit into the group. If you are just for the diploma, please do not contact us!!! Let's be honest with each other. If you decide to give up, please inform us as early as possible! Once our positions are filled, we will forward qualified candidates to colleagues. We will also recommend outstanding candidates to supervisors whose research directions match their interests. Best of luck to all the students in your applications!",
        "Have curiosity and thirst for knowledge, full of challenging spirit: willing to explore unknown things, like to engage in innovative work rather than repetitive work, and can face setbacks with the right attitude.",
        "We have limited resources to accept undergraduate students for scientific research training. We do not consider students who work in multiple laboratories at the same time or participate in competitions. (Note: For competitions, only applications for New Seedling Program, Dachuang, Internet +, Challenge Cup, and other competitions are supported based on the projects done.) At the same time, it is required that the average working time of scientific research is more than 10 hours per week during each semester, and the working time of winter and summer vacation is more than 8 hours per day. Research is a process of sustained accumulation, please do not work by fits and starts.",
        "Regarding graduation criteria: The research group requires students to adhere strictly to academic norms. Academic misconduct (intentional or unintentional) will lose the possibility of graduation. In addition to the above extreme cases, students meeting university requirements will graduate on schedule.",
        "For graduate students, the first year of study is often filled with numerous courses, leaving limited time for research, which makes it difficult to produce high-quality research outcomes. Therefore, we encourage students who are planning to join our group to study in advance (can be remote).",
        "It is essential to ensure sufficient time for research, with one-on-one communication every week. No additional holidays except winter vacation (summer vacation will generally be unified about ten days), but do not punch in. Based on ensuring the progress of scientific research, occasionally relax or relatives and friends can visit at any time to ask for leave, it is recommended to avoid the peak flow of people and choose weekday travel.",
        "After joining the research group, it is recommended to follow the following guidelines to supplement the basic knowledge."
      ]
    },
    {
      heading: "Guidelines",
      items: [
        "Python Basics: The use of Use variables, constants, loops, judgments, functions, classes, numpy, etc.",
        "Mathematical Foundation: The most frequently used mathematical tool in research is linear algebra. For those who wish to review linear algebra, we recommend the《Essence of Linear Algebra》.<a href='https://www.bilibili.com/video/BV1ys411472E/?spm_id_from=333.1387.collection.video_card.click&vd_source=449f18121128b7d85236aa94bf8faf60' target='_blank' rel='noopener noreferrer'>[Link]</a>。.",
        "Deep Learning Basics: PyTorch, convolution, pooling, gradient descent, backpropagation, regularization, dropout, fully connected layers, batch normalization (BN), etc. We recommend the  《Dive into Deep Learning (Pytorch)》by Mu Li.<a href='https://tangshusen.me/Dive-into-DL-PyTorch/#/' target='_blank' rel='noopener noreferrer'>[Link]</a>",
        "Computer Vision Foundation: AlexNet, VGG, ResNet, Faster-RCNN, UNet, Transformer, etc. It is recommended to watch video tutorials for relevant learning.<a href='https://www.bilibili.com/video/BV1Wv411h7kN/?spm_id_from=333.337.search-card.all.click&vd_source=e60a34382e2d52dfcf6ae4d16cc2bf3f' target='_blank' rel='noopener noreferrer'>[Link]</a>.",
        "Linux Basics: For detailed learning, please refer to the Cloud Course.<a href='https://www.lanqiao.cn/courses/1' target='_blank' rel='noopener noreferrer'>[Link]</a>"
      ]
    },
    <strong>If you are interested in computer vision, image processing, machine learning, deep learning, multimedia, etc. You are welcome to choose me as your supervisor and join my research group, which will provide you with a good scientific and academic environment. If you perform well, I will be happy to recommend you to work or school for further study.</strong>
  ],
  zh: [
    "本研究小组隶属于杭州电子科技大学智能信息处理实验室IIPL，研究小组专注于计算机视觉方面的学术研究。学生加入研究小组后，经过精心组织的科研训练，将具备扎实的专业知识、缜密的科研思维、广阔的学术视野，独立发现问题、思考问题、解决问题的能力。同时，研究小组致力于在计算机视觉顶级会议和期刊上发表相关研究成果，或在重要工程项目中做出核心技术贡献。此外，研究小组与海内外多家知名高校和企业保持良好的合作关系，可推荐优秀学生前往京东研究院、中国科学技术大学、联想研究院、华为等企业实习（联合培养）、就业或深造。",
    {
      heading: "进组要求",
      items: [
        "尊敬师长、勤劳节俭、诚实守信、谦虚礼貌、笃实好学。",
        "身心健康、积极向上，鼓励学生积极参加体育锻炼。",
        "有明确的目标和规划，对自己有清楚的认识：明确自己为什么要加入研究组，自己在研究组期待得到什么，为什么自己适合这个研究组。<strong>如果只是为了混文凭，请勿联系！！！大家真诚一些，如有放弃尽早告知！！！</strong>招满会转发推荐给同事，有优秀的也会推荐给方向适合的导师，祝各位同学顺利上岸！",
        "有好奇心和求知欲，富于挑战精神：乐于探索未知事物，喜欢从事创新性工作而非重复劳动，碰到挫折能够以正确的心态面对。",
        "接收本科生开展科研训练，资源有限，不考虑同时多个实验室开展工作、或参与竞赛的同学，敬请谅解！（注：对于竞赛，仅支持以所做课题为基础，申报新苗、大创、互联网+、挑战杯等竞赛）同时，要求每学期期间能够保证平均每周科研10小时以上的工作时间，寒暑假期间能够保证每天8小时以上的工作时间。科研是一个持续积累的过程，切勿一天打鱼，三天晒网。",
        "关于毕业标准：本研究小组要求学生严格遵守学术规范，在读期间发现存在学术不端行为，不管是有意还是不良习惯导致的无意结果，都将失去毕业的可能。除上述极端情况以外，符合学校毕业要求的同学都会按照学校正常年限顺利毕业。",
        "对研究生同学而言，研一课程比较多，剩余时间太短很难产出好的研究成果，因此我们希望确定来本组的同学提前进组学习（可以远程）。",
        "务必保障充足科研时间，每周一对一交流。除寒假外不额外放假（暑假一般会统一放十天左右），但不打卡签到。在保证科研进展的基础上，偶尔放松或亲友来访可随时请假，建议避开人流高峰，选择工作日出游。",
        "确认加入研究小组之后，建议按照以下攻略进行相关学习，以补充基础知识。"
      ]
    },
    {
      heading: "攻略",
      items: [
        "Python基础：变量，常量，循环，判断，函数，类，numpy等使用。",
        "数学基础：在研究过程中用到最多的数学工具是线性代数，想复习线性代数的知识推荐看《线性代数的本质》<a href='https://www.bilibili.com/video/BV1ys411472E/?spm_id_from=333.1387.collection.video_card.click&vd_source=449f18121128b7d85236aa94bf8faf60' target='_blank' rel='noopener noreferrer'>[Link]</a>。",
        "深度学习基础：Pytorch，卷积，池化，梯度下降，反向传播，正则化，dropout，全连接，BN等，建议观看李沐的《动手学深度学习（Pytorch版）》<a href='https://tangshusen.me/Dive-into-DL-PyTorch/#/' target='_blank' rel='noopener noreferrer'>[Link]</a>进行相关学习。",
        "计算机视觉基础：AlexNet、VGG、ResNet、Faster-rcnn、UNet、Transformer等，建议观看视频教程<a href='https://www.bilibili.com/video/BV1Wv411h7kN/?spm_id_from=333.337.search-card.all.click&vd_source=e60a34382e2d52dfcf6ae4d16cc2bf3f' target='_blank' rel='noopener noreferrer'>[Link]</a>进行相关学习。",
        "linux基本操作，详见云课<a href='https://www.lanqiao.cn/courses/1' target='_blank' rel='noopener noreferrer'>[Link]</a>进行相关学习。"
      ]
    },
    <strong>如果你对计算机视觉、图像处理、机器学习、深度学习、多媒体等方向感兴趣，欢迎选择我作为你的导师，并加入我的研究小组，这里将为你提供良好的科研学术环境，表现优异者，我将非常乐意推荐工作或者学校继续深造。</strong>
  ]},
  display: true 
};

const groupMembers = {
  display: true,
  instructors: [
    {
      name: {
        en: "Jinkai Zheng",
        zh: "郑锦凯"
      },
      role: {
        en: "Associate Professor",
        zh: "副教授"
      },
      image: zjk,
      description: {
        en: "Hangzhou Dianzi University",
        zh: "杭州电子科技大学"
      },
      socialLinks: {
        googlescholar:
          "https://scholar.google.com/citations?user=1qoGuQMAAAAJ&hl=zh-CN&oi=ao",
        github: "https://github.com/JinkaiZheng",
        email: "zhengjinkai3@hdu.edu.cn"
      }
    },
    {
      name: {
        en: "Xinchen Liu",
        zh: "刘鑫辰"
      },
      role: {
        en: "Senior Researcher",
        zh: "资深高级研究员"
      },
      image: lxc,
      description: {
        en: "JD Explore Academy",
        zh: "京东探索研究院"
      },
      socialLinks: {
        googlescholar:
          "https://scholar.google.com/citations?user=1qoGuQMAAAAJ&hl=zh-CN&oi=ao",
        github: "https://linkedin.com/in/johndoe",
        email: "https://twitter.com/joh"
      }
    },
    {
      name: {
        en: "Wu Liu",
        zh: "刘武"
      },
      role: {
        en: "Professor",
        zh: "教授"
      },
      image: lw,
      description: {
        en: "University of Science and Technology of China",
        zh: "中国科学技术大学"
      },
      socialLinks: {
        googlescholar:
          "https://scholar.google.com/citations?user=1qoGuQMAAAAJ&hl=zh-CN&oi=ao",
        github: "https://linkedin.com/in/johndoe",
        email: "https://twitter.com/joh"
      }
    }
  ],
  graduated: [
    {
      name: {
        en: "Jinxin Wang",
        zh: "王锦欣"
      },
      role: {
        en: "Grade of 21",
        zh: "21级"
      },
      image: wjx,
      description: {
        en: "Join Huawei",
        zh: "入职华为"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    }
  ],
  graduateStudents: [
    {
      name: {
        en: "Lihao Wang",
        zh: "王立昊"
      },
      role: {
        en: "Grade of 22",
        zh: "22级"
      },
      image: whl,
      description: {
        en: "Gait recognition",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Shuping Yuan",
        zh: "袁淑萍"
      },
      role: {
        en: "Grade of 23",
        zh: "23级"
      },
      image: ysp,
      description: {
        en: "Gait recognition",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Xuan Li",
        zh: "李轩"
      },
      role: {
        en: "Grade of 24",
        zh: "24级"
      },
      image: lx,
      description: {
        en: "Gait recognition",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Xinxiang Jin",
        zh: "金新翔"
      },
      role: {
        en: "Grade of 24",
        zh: "24级"
      },
      image: jxx,
      description: {
        en: "Gait recognition",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Ce Yu",
        zh: "于策"
      },
      role: {
        en: "Grade of 24",
        zh: "24级"
      },
      image: yc,
      description: {
        en: "Gait recognition",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Jiaqing Wei",
        zh: "韦嘉庆"
      },
      role: {
        en: "Grade of 24",
        zh: "24级"
      },
      image: wjq,
      description: {
        en: "Gait recognition",
        zh: "步态识别"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Haofeng Chen",
        zh: "陈浩枫"
      },
      role: {
        en: "Grade of 25",
        zh: "25级"
      },
      image: chf,
      description: {
        en: "Video quality assessment",
        zh: "视频质量评价"
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    }
  ],
  undergraduateStudents: [
    {
      name: {
        en: "Minhao Lin",
        zh: "林敏豪"
      },
      role: {
        en: "Grade of 23",
        zh: "23级"
      },
      image: lmh,
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Jiabin Li",
        zh: "李家彬"
      },
      role: {
        en: "Grade of 23",
        zh: "23级"
      },
      image: ljb,
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Sen Chen",
        zh: "陈森"
      },
      role: {
        en: "Grade of 23",
        zh: "23级"
      },
      image: cs,
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    },
    {
      name: {
        en: "Chenxi Deng",
        zh: "邓晨曦"
      },
      role: {
        en: "Grade of 23",
        zh: "23级"
      },
      image: dcx,
      description: {
        en: "",
        zh: ""
      },
      socialLinks: {
        github: "https://linkedin.com/in/janesmith"
      }
    }
  ]
};

const academicAchievements = {
  display:true,
  items:[
    {
      "year": "2024",
      "papers": [
        {
          "title": "It Takes Two: Accurate Gait Recognition in the Wild via Cross-granularity Alignment",
          "authors": "Jinkai Zheng, Xinchen Liu, Boyue Zhang, Chenggang Yan, Jiyong Zhang, Wu Liu, Yongdong Zhang",
          "conference": "Proceedings of the 32nd ACM International Conference on Multimedia, 8786-8794",
          "links": [
            {
              "type": "PAPER",
              "url": "https://dl.acm.org/doi/10.1145/3664647.3680577"
            },
            {
              "type": "arXiv",
              "url": "https://arxiv.org/abs/2411.10742"
            },
            {
              "type": "CODE",
              "url": "https://github.com/Gait3D/Gait3D-Benchmark"
            }
          ]
        }
      ]
    },
    {
      "year": "2023",
      "papers": [
        {
          "title": "Parsing is all you need for accurate gait recognition in the wild",
          "authors": "Jinkai Zheng, Xinchen Liu, Shuai Wang, Lihao Wang, Chenggang Yan, Wu Liu",
          "conference": "Proceedings of the 31st ACM International Conference on Multimedia, 116-124",
          "links": [
            {
              "type": "PROJECT",
              "url": "https://gait3d.github.io/gait3d-parsing-hp/"
            },
            {
              "type": "PAPER",
              "url": "https://dl.acm.org/doi/abs/10.1145/3581783.3612052"
            },
            {
              "type": "arXiv",
              "url": "https://arxiv.org/abs/2308.16739"
            },
            {
              "type": "CODE",
              "url": "https://github.com/Gait3D/Gait3D-Benchmark"
            }
          ]
        }
      ]
    },
    {
      "year": "2022",
      "papers": [
        {
          "title": "Gait recognition in the wild with multi-hop temporal switch",
          "authors": "Jinkai Zheng, Xinchen Liu, Xiaoyan Gu, Yaoqi Sun, Chuang Gan, Jiyong Zhang, Wu Liu, Chenggang Yan",
          "conference": "Proceedings of the 30th ACM International Conference on Multimedia, 6136-6145",
          "links": [
            {
              "type": "PAPER",
              "url": "https://dl.acm.org/doi/abs/10.1145/3503161.3547897"
            },
            {
              "type": "arXiv",
              "url": "https://arxiv.org/abs/2209.00355"
            },
            {
              "type": "CODE",
              "url": "https://github.com/Gait3D/Gait3D-Benchmark"
            }
          ]
        },
        {
          "title": "Gait recognition in the wild with dense 3d representations and a benchmark",
          "authors": "Jinkai Zheng, Xinchen Liu, Wu Liu, Lingxiao He, Chenggang Yan, Tao Mei",
          "conference": "Proceedings of the IEEE/CVF conference on computer vision and pattern, 20196-20205",
          "links": [
            {
              "type": "PROJECT",
              "url": "https://gait3d.github.io/"
            },
            {
              "type": "PAPER",
              "url": "https://openaccess.thecvf.com/content/CVPR2022/html/Zheng_Gait_Recognition_in_the_Wild_With_Dense_3D_Representations_and_CVPR_2022_paper.html"
            },
            {
              "type": "arXiv",
              "url": "https://arxiv.org/abs/2204.02569"
            },
            {
              "type": "CODE",
              "url": "https://github.com/Gait3D/Gait3D-Benchmark"
            }
          ]
        }
      ]
    },
    {
      year: "2021",
      papers: [
        {
          title:
            "Trand: Transferable neighborhood discovery for unsupervised cross-domain gait recognition",
          authors:
            "Jinkai Zheng, Xinchen Liu, Chenggang Yan, Jiyong Zhang, Wu Liu, Xiaoping Zhang, Tao Mei",
          conference:
            "2021 IEEE International Symposium on Circuits and Systems (ISCAS), 1-5",
          award: "MSA-TC <strong>Best Paper Award - Honorable Mention</strong>",
          links: [
            { type: "PAPER", url: "https://ieeexplore.ieee.org/document/9401218"},
            { type: "arXiv", url: "https://arxiv.org/abs/2102.04621"},
            { type: "CODE", url: "https://github.com/JinkaiZheng/TraND"}
          ]
        }
      ]
    },
    {
      year: "2020",
      papers: [
        {
          title:
            "Beyond the parts: Learning multi-view cross-part correlation for vehicle re-identification",
          authors: "Xinchen Liu, Wu Liu, Jinkai Zheng, Chenggang Yan, Tao Mei",
          conference:
            "Proceedings of the 28th ACM international conference on multimedia, 907-915",
          links: [
            { type: "PROJECT", url: "https://xinchenliu.com/MVP.html"},
            {
              type: "PAPER",
              url: "https://dl.acm.org/doi/10.1145/3394171.3413578" 
            },
            {
              type: "arXiv",
              url: "https://xinchenliu.com/papers/2020_ACMMM_PCRNet.pdf"
            },
            {
              type: "CODE",
              url: "https://github.com/lxc86739795/vehicle_reid_by_parsing"
            }
          ]
        }
      ]
    },
  ],
}

const projects = {
  display: true,
  items: [
    {
      title: "FastReID: a Pytorch Toolbox for General Instance Re-identification",
      description: (<span className="github-star-count"><strong>Github 3.5k+ star.</strong></span>),
      image: fastreid,
      imageAlt: "FastReID",
      url: "https://github.com/JDAI-CV/fast-reid",
    },
  ],
};


const directionContent = {
    title: { zh:"研究方向",
             en:"Research Directions"},
    subtitle:{ zh: "步态识别",
               en: "Gait recognition" },
    description: { zh:[
      "步态是一种极具潜力的生物特征，能反映人们的行走方式。由于个体运动和体型等差异，每个人都具有独特的步态特征，因此可以利用步态特征对视频中的目标行人进行身份识别。相比其他生物特征，步态具有远程获取、非侵犯性和难以伪装等优势。步态识别技术在智能安防、健康医疗、智慧城市等多个领域均有着巨大的优势和发展潜力。"],               
                   en: [ "Gait, as a potential biometric trait, reflects the unique pattern of human walking. Due to the differences in individual movement and body type, each person has a unique gait characteristic, which can be leveraged to identify the target pedestrian in the video. Compared with other biometric features, gait has the advantages of being remotely accessible, non-contacting, and hard to impersonate, etc. Gait recognition has great advantages and development potential in various fields, including intelligent security, healthcare, smart cities, etc."]
                  },
    display: true
};




const plogContent = {
  display: true,
  items:{ zh:[
    {
      title: "",
      description: "为鼓励大家好好备战期末，学期末最后一次组会，请大家吃披萨!",
      image: plog0,
      imageAlt: "plog0",
    },
    {
      title: "",
      description: "欢送即将毕业学生",
      image: plog1,
      imageAlt: "plog1",
    },
    {
      title: "",
      description: "开学聚餐",
      image: plog2,
      imageAlt: "plog2",
    },
  ],en: [
    {
      title: "",
      description:  "To encourage everyone to prepare well for the final exams, at the last group meeting of the semester, we will treat everyone to pizza.",
      image: plog0,
      imageAlt: "plog0",
    },
    {
      title: "",
      description: "Farewell to the students about to graduate",
      image: plog1,
      imageAlt: "plog1",
    },
    {
      title: "",
      description: "Back-to-school dinner party",
      image: plog2,
      imageAlt: "plog2",
    },]},
};


export {
  illustration,
  greeting,
  greeting_en,
  groupMembers,
  introContent,
  academicAchievements,
  projects,
  directionContent,
  plogContent,
  splashScreen,
  socialMediaLinks,
};
