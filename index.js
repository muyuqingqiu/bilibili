// JavaScript Document

//变量创建
//  Top Nav
var oTopNavContent = document.getElementById('topNavContent');
var aTopNavContentLi = oTopNavContent.getElementsByTagName('ul')[0];
var aTopNavContentA = oTopNavContent.getElementsByTagName('a');
var oHeadSubmit = document.getElementById('headSubmit');
var oHeadSubmitA = oHeadSubmit.getElementsByTagName('a')[0];
var oTopNavGame = document.getElementById('topNavGame');
var oTopNavLiGame = getClass('topNavLiGame')[0];
var aTopNavLiGameLi = oTopNavLiGame.getElementsByTagName('li');
var oTopNavLiGameR = document.getElementById('topNavLiGameR');
var oTopNavLiGameRA = oTopNavLiGameR.getElementsByTagName('a');
var oTopNavTrip = document.getElementById('topNavTrip');
var oTopNavLiTrip = getClass('topNavLiTrip')[0];
var oTopNavLiTripL = getClass('topNavLiTripL')[0];
var aTopNavLiTripLDiv = oTopNavLiTripL.getElementsByTagName('div');
var oTopNavLiTripR = getClass('topNavLiTripR')[0];
var aTopNavLiTripRA = oTopNavLiTripR.getElementsByTagName('a');

//  body head
var oHeadSubmitNav = document.getElementById('headSubmitNav');
var aHeadSubmitNavDiv = oHeadSubmitNav.getElementsByTagName('div');
var oHeadLink = getClass('headLink')[0];
var oHeadLinkTitle = getClass('headLinkTitle')[0];
var oHeadScearchT = getClass('headScearchT')[0];
var oHeadScearchB = getClass('headScearchB')[0];
var timeOutTimer = null;

// body main Nav
var aMainNavli = getClass('mainNavli');
var jsonMainNav = {'动画':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'番剧':['连载动画','完结动画','资讯','官方延伸','国产动画','新番index'],'音乐':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'舞蹈':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'游戏':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'科技':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'娱乐':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'鬼畜':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'电影':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'电视剧':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'时尚':['MAD·AMV','MMD·3D','短片·手书·配音','综合'],'sd':[],'直播':['MAD·AMV','MMD·3D','短片·手书·配音','综合']};

//main Index Top
	//IndexTop Banner
var oTopBannerImgUl = getClass('TopBannerImgUl')[0];
var oTopBannerIndexUl = getClass('TopBannerIndexUl')[0];
var aTopBannerImgUlImg = oTopBannerImgUl.getElementsByTagName('img');
var aTopBannerIndexLi = oTopBannerIndexUl.getElementsByTagName('li');
var oTopBannerIndexLiShow = getClass('TopBannerIndexLiShow')[0];
var oTopBannerBottomText = getClass('TopBannerBottomText')[0];
var aTopBannerBottomTextArr = ['别人世界里的科学','物语轨迹','中文歌唱贼⑥的那些歪果仁','讲故事大赛！（雾','和小电视一起环游世界吧～☆','Sugar Song and Bitter Step','万万没想到 全网首播'];
	//IndexTopRList
var oIndexTopRList = document.getElementById('IndexTopRList');
var oIndexTopRListUl = document.getElementById('IndexTopRListUl');
var aRListLi = oIndexTopRListUl.getElementsByTagName('li');
var aRListBottom = getClass('RListBottom');
var aRListBottomA = getClass('RListBottomA');
var oRListLast = getClass('RListLast')[0];
var oRListNext = getClass('RListNext')[0];
var aRListTitle = getClass('RListTitle');
var aRListUp = getClass('RListUp');
var aRListPlay = getClass('RListPlay');
var oRListarr = [
		{
			img:['01','02','03','04','05','06','07','08'],
			title:['【拜年祭品】B站B格第一钢琴演奏企划Project AB','【拜年祭品】B站B格第一钢琴演奏企划Project AB','【拜年祭品】B站B格第一钢琴演奏企划Project AB','【拜年祭品】B站B格第一钢琴演奏企划Project AB','【拜年祭品】B站B格第一钢琴演奏企划Project AB','【拜年祭品】B站B格第一钢琴演奏企划Project AB','【拜年祭品】B站B格第一钢琴演奏企划Project AB','【拜年祭品】B站B格第一钢琴演奏企划Project AB'],
			up:['h1骨头','h1骨头','h1骨头','h1骨头','h1骨头','h1骨头','h1骨头','h1骨头'],
			play:[122003,122003,122003,122003,122003,122003,122003,122003]
		},
		{
			img:['11','12','13','14','15','16','17','18'],
			title:['【恩奇时山】冬之终章','【恩奇时山】冬之终章','【恩奇时山】冬之终章','【恩奇时山】冬之终章','【恩奇时山】冬之终章','【恩奇时山】冬之终章','【恩奇时山】冬之终章','【恩奇时山】冬之终章'],
			up:['山德鲁君','山德鲁君','山德鲁君','山德鲁君','山德鲁君','山德鲁君','山德鲁君','山德鲁君'],
			play:[44604,44604,44604,44604,44604,44604,44604,44604]
		}
	
	];
	
	
//  Promote
var oPromote = document.getElementById('promote');
var promoteArr = [
			{
				title:'麻麻快看，弹幕飞上CCTV啦！ 魅族手机12年工匠精神 央视春晚首个弹幕广告',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg1.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'【哔哩哔哩2016拜年祭】',
				up:'哔哩哔哩弹幕网',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg2.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'504.5万',
				danmu:'24.8万',
				collection:'18.5万',
				icons:'49.5万'
			},
			{
				title:'【优灯吃莲】发财发福中国年【祝大家新年快乐！】',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg3.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'香格里拉神秘之猴.2015.Mystery.Monkeys.of.Shangri-La.720p.3E字幕组-中英特效字',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg4.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'学友偷走了重要的东西（音频首发）',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg5.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			}
		];
//onLive
var oOnLiveLList = getClass('onLiveLList')[0];
var aOnLiveListLi = getClass('onLiveListLi');
var aOnLiveImg = getClass('onLiveImg');
var aonLiveHeadImg = getClass('onLiveHeadImg');
var aonLiveOnline = getClass('onLiveOnline');
var aonLiveup = getClass('onLiveup');
var aOnLiveListLiTitle = oOnLiveLList.getElementsByTagName('h3');
var oOnLiveRHead = getClass('onLiveRHead')[0];
var oOnLiveRHeadLi = oOnLiveRHead.getElementsByTagName('li');
var oOnLiveRBodyContent = getClass('onLiveRBodyContent')[0];
var oOnLiveRBodyUl = oOnLiveRBodyContent.getElementsByTagName('ul');
var oOnLiveLArr = [
	{
		img:'onLiveImg00.jpg',
		headImg:'onLiveHeadImg00.jpg',
		title:'重播2016年拜年祭！',
		up:'bilibili直播',
		online:'6089'
	},
	{
		img:'onLiveImg01.jpg',
		headImg:'onLiveHeadImg01.jpg',
		title:'火影忍者之究极风暴4（没有手柄想狗带系列',
		up:'Sora白菜子',
		online:'1511'
	},
	{
		img:'onLiveImg02.jpg',
		headImg:'onLiveHeadImg02.jpg',
		title:'灵魂歌姬 耳朵怀孕系列~',
		up:'一闪一闪小萌萌',
		online:''
	},
	{
		img:'onLiveImg03.jpg',
		headImg:'onLiveHeadImg03.jpg',
		title:'【七七】英雄联盟 D1匹配',
		up:'七七见奈波丶',
		online:'1511'
	},
	{
		img:'onLiveImg04.jpg',
		headImg:'onLiveHeadImg04.jpg',
		title:'NICONICONI',
		up:'元气少女麻麻',
		online:'1511'
	},
	{
		img:'onLiveImg05.jpg',
		headImg:'onLiveHeadImg05.jpg',
		title:'腐漫"诺林牧师',
		up:'paplo',
		online:'1511'
	},
	{
		img:'onLiveImg06.jpg',
		headImg:'onLiveHeadImg06.jpg',
		title:'【猫耳】CSGO僵尸逃跑',
		up:'猫耳爱丽丝',
		online:'1511'
	},
	{
		img:'onLiveImg07.jpg',
		headImg:'onLiveHeadImg07.jpg',
		title:'大家新年快乐，今天就随便玩点游戏吧',
		up:'邪玖',
		online:'1511'
	},
	{
		img:'onLiveImg08.jpg',
		headImg:'onLiveHeadImg08.jpg',
		title:'米米酱的粘土世界',
		up:'米米酱的粘土世界',
		online:'1511'
	},
	{
		img:'onLiveImg09.jpg',
		headImg:'onLiveHeadImg09.jpg',
		title:'闻香 Inside™',
		up:'闻香识',
		online:'1511'
	}
]; 
//music
var oMusic = document.getElementById('music');
var oMusicLArr1 = [
	{
		img:'oMusicLImg00.jpg',
		title:'【欲宅女总攻们】《红颜绝》剑三八大门派群女歌',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'block'
	},
	{
		img:'oMusicLImg01.jpg',
		title:'【泠鸢·填词】神的随波逐流-中文版【神的自我催眠= =b】',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg02.jpg',
		title:'【歌之王子殿下】 4th live 演唱会',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'block'
	},
	{
		img:'oMusicLImg03.jpg',
		title:'【初音ミク(40mP)】巨大少女',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'block'
	},
	{
		img:'oMusicLImg04.jpg',
		title:'【电吉他】天空之城',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg05.jpg',
		title:'【洛天依原创】烈三国【归墟原创团队】【PV付】【猴年贺岁】【章鱼烧正太】',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg06.jpg',
		title:'【年榜】VOCALOID中文曲 2015',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg07.jpg',
		title:'【洛天依原创】Electric Power（电子力量）【GhostFinal】',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg08.jpg',
		title:'【泠鸢调教】依+心「黑白回忆」',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg09.jpg',
		title:'学园孤岛OP「想・要・成・为・好・朋・友」由纪、胡桃、里姐 solo ver.（tv size）',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	}
];
var oMusicLArr2 = [
	{
		img:'oMusicLImg10.jpg',
		title:'【Ellie Goulding】Love Me Like You Do(720P+英文字幕)！',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg11.jpg',
		title:'(电吉他）Metallica - Enter Sandman  guitar cover 一半',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg12.jpg',
		title:'【DJ Cassidy (｡･∀･)ﾉ】 Calling All Hearts （Bitch字幕组）',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg13.jpg',
		title:'【樱花蘑菇】开始的季节【森林音乐会live版】！',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg14.jpg',
		title:'【Jess Glynne】Ain\'t Got Far To Go(720P+英文字幕）',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg15.jpg',
		title:'【MJ在中国】迈克尔杰克逊危险巡演台湾台北站-JAM-高仿16:9宽屏',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg16.jpg',
		title:'【茶柒w】unravel',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg17.jpg',
		title:'【耳机福利】鹿乃曲集！',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg18.jpg',
		title:'【Tyler, The Creator】 - PERFECT Featuring Kali Uchis And Aust',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	},
	{
		img:'oMusicLImg19.jpg',
		title:'[柴郡ver.]Meru',
		danmu:'6089',
		play:'1.2万',
		timeLength:'1:20',
		medal:'none'
	}
];
var oMusicLArr3 = [
			{
				title:'麻麻快看，弹幕飞上CCTV啦！ 魅族手机12年工匠精神 央视春晚首个弹幕广告',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg1.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'【哔哩哔哩2016拜年祭】',
				up:'哔哩哔哩弹幕网',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg2.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'504.5万',
				danmu:'24.8万',
				collection:'18.5万',
				icons:'49.5万'
			},
			{
				title:'【优灯吃莲】发财发福中国年【祝大家新年快乐！】',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg3.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'香格里拉神秘之猴.2015.Mystery.Monkeys.of.Shangri-La.720p.3E字幕组-中英特效字',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg4.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'学友偷走了重要的东西（音频首发）',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg5.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
		{
				title:'麻麻快看，弹幕飞上CCTV啦！ 魅族手机12年工匠精神 央视春晚首个弹幕广告',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg1.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'麻麻快看，弹幕飞上CCTV啦！ 魅族手机12年工匠精神 央视春晚首个弹幕广告',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg1.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'麻麻快看，弹幕飞上CCTV啦！ 魅族手机12年工匠精神 央视春晚首个弹幕广告',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg1.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'麻麻快看，弹幕飞上CCTV啦！ 魅族手机12年工匠精神 央视春晚首个弹幕广告',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg1.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			},
			{
				title:'麻麻快看，弹幕飞上CCTV啦！ 魅族手机12年工匠精神 央视春晚首个弹幕广告',
				up:'魅族科技官方',
				date:'2016-01-05 17:54',
				img:'img/promoteLListImg1.jpg',
				interduction:'这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
				playtimes:'12.6万',
				danmu:'6000',
				collection:'264',
				icons:'38'
			}
		];
		
var oSince = document.getElementById('since');
var oGame = document.getElementById('game');
var oAnime = document.getElementById('anime');
var oMovie = document.getElementById('movie');
var oCartoon = document.getElementById('cartoon');
var oTv = document.getElementById('tv');
var oDance = document.getElementById('dance');
var oFashion = document.getElementById('fashion');
var oEntertainment = document.getElementById('entertainment');
var oGuichu = document.getElementById('guichu');
var divIdArr = [oMusic,oSince,oGame,oAnime,oMovie,oCartoon,oTv,oDance,oFashion,oEntertainment,oGuichu];

//函数调用
//top Nav
for(var i=1;i<aTopNavContentA.length-2;i++){
	if(aTopNavContentA[i].className == 'trip'){
		continue;
	}
	aTopNavContentA[i].onmouseover = function(){
		fnTimeOut(this,'background','rgba(255,255,255,0.4)',60);
	}
}
aTopNavContentA[0].onmouseover = function(){
	fnTimeOut(this,'background','url(img/icons.png) -848px -74px rgba(255,255,255,0.4)',60);
}
oHeadSubmitA.onmouseover = function(){
	fnTimeOut(this,'background','url(img/headSubmithoverBg.png)',60);
}
fnOutChangeBg(aTopNavContentA);
fnHoverChangeBg(aTopNavLiGameLi);
fnOutChangeBg(aTopNavLiGameLi);
fnHoverChangeBg(oTopNavLiGameRA);
fnOutChangeBg(oTopNavLiGameRA);
displayOn(oTopNavGame,oTopNavLiGame);
displayOff(oTopNavGame,oTopNavLiGame);
fnHoverChangeBg(aTopNavLiTripLDiv);
fnOutChangeBg(aTopNavLiTripLDiv);
fnHoverChangeBg(aTopNavLiTripRA);
fnOutChangeBg(aTopNavLiTripRA);
displayOn(oTopNavTrip,oTopNavLiTrip);
displayOff(oTopNavTrip,oTopNavLiTrip);

// body head
fnHoverChangeBg(aHeadSubmitNavDiv);
fnOutChangeBg(aHeadSubmitNavDiv);
displayOn(oHeadSubmit,oHeadSubmitNav);
displayOff(oHeadSubmit,oHeadSubmitNav);
displayOn(oHeadLink,oHeadLinkTitle);
displayOff(oHeadLink,oHeadLinkTitle);
console.log(oHeadScearchT)
oHeadScearchT.onfocus = function(){
	oHeadScearchT.style.background = '#fff';
	oHeadScearchB.style.background = '#fff';
};
oHeadScearchT.onblur = function(){
	oHeadScearchT.style.background = 'transparent';
	oHeadScearchB.style.background = 'transparent';
};
// body head Nav List
for(var i=0;i<aMainNavli.length;i++){      //创建主题选项卡的ul
		appAMainNavList(aMainNavli[i])
}
aMainNavList()     //主体选项卡的出现隐藏

// main Index Top
TopBanner(oTopBannerImgUl,oTopBannerBottomText,aTopBannerIndexLi,aTopBannerBottomTextArr,aTopBannerImgUlImg);   //顶部左边轮播图
IndexTopRList();
//推广
fnListLi(oPromote,promoteArr,'ListLi');
//OnLive
fnOnLiveR()
fnOnLiveL()
//music
fnDiv(oMusic,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oSince,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oGame,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oAnime,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oMovie,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oCartoon,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oTv,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oDance,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oFashion,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oEntertainment,oMusicLArr1,oMusicLArr2,oMusicLArr3);
fnDiv(oGuichu,oMusicLArr1,oMusicLArr2,oMusicLArr3);




//封装的函数






function appAMainNavList(obj){     //创建主题选项卡的ul函数
		var oNewUl = document.createElement('ul');
		var last = getLastChild(obj.children[0]);
		var oMainNavliList = getClass('mainNavliList')[0];
		oNewUl.className = 'mainNavliList';
		for(var arrt in jsonMainNav){
			if(last.innerHTML == arrt){
				var oNewLi = [];
				for(var j=0;j<jsonMainNav[arrt].length;j++){
					oNewLi[j] = document.createElement('li');
					oNewLi[j].innerHTML = '<a href="#"><b>' + jsonMainNav[arrt][j] + 
					'<em></em></b></a>'
					oNewLi[j].className = 'mainNavliListLi';
					oNewUl.appendChild(oNewLi[j]);
				}
				oNewUl.className = 'mainNavliList';
				obj.appendChild(oNewUl);
			}
		}
	}


function aMainNavList(){    //主体选项卡的出现隐藏函数
	var timer = null;
	var aNewUl = getClass('mainNavliList');
	for(var i=0;i<aMainNavli.length;i++){
		aMainNavliOver(aMainNavli[i],aNewUl[i]);
		appAMainNavList(aMainNavli[i])
	}
		
	function aMainNavliOver(obj1,obj2){
		obj1.onmouseover = function(){
			clearTimeout(timer);
			for(var i=0;i<aNewUl.length;i++){
				aNewUl[i].style.display = 'none';
			}
			obj2.style.display = 'block';
		}
		obj1.onmouseout = function(){
			timer = setTimeout(function(){
				obj2.style.display = 'none';
			},100);
		}
	}
}




function TopBanner(obj1,obj2,arr1,arr2,arr3){    // topindex左边轮播图
	var num = 0;
	var timer = null;
	for(var i=0;i<arr1.length;i++){
		arr1[i].index = i;
		arr1[i].onclick = function(){
			for(var i=0;i<arr1.length;i++){
				arr1[i].className = '';
			}
			this.className = 'TopBannerIndexLiShow';
			obj2.innerHTML = arr2[this.index];
			num = -this.index;
			obj1.style.marginLeft = num*100 + '%';
			clearInterval(timer);
			setTimer();
			
		}
		
	}

	for(var i=0;i<arr3.length;i++){
		arr3[i].onmouseover = function(){
			clearInterval(timer);
		}
		arr3[i].onmouseout = function(){
			setTimer();
		}
	}
	setTimer();
	function setTimer(){
		timer = setInterval(function(){
			for(var i=0;i<arr1.length;i++){
				arr1[i].className = '';
			}
			num--;
			if(num == -7){
				num = 0;
			}
			obj1.style.marginLeft = num*100 + '%';
			arr1[-num].className = 'TopBannerIndexLiShow';
			obj2.innerHTML = arr2[-num];
		},4500);
	}
}



function IndexTopRList(){    //IndexTopRList 整体控制
	var num = 0;
	oIndexTopRList.onmouseover = function(){
		oRListLast.style.display = 'block';
		oRListNext.style.display = 'block';
	}
	oIndexTopRList.onmouseout = function(){
		oRListLast.style.display = 'none';
		oRListNext.style.display = 'none';
	}
	for(var i=0;i<aRListLi.length;i++){
		aRListLi[i].index = i;
		aRListBottomA[i].title  = oRListarr[num].title[i];
		aRListLi[i].onmouseover = function(){
			aRListBottom[this.index].style.display = 'none';
			aRListBottomA[this.index].style.display = 'block';
		}
		aRListLi[i].onmouseout = function(){
			aRListBottom[this.index].style.display = 'block';
			aRListBottomA[this.index].style.display = 'none';
		}
	}
	oRListLast.onclick = function(){
		num--;
		if(num < 0){
			num = oRListarr.length-1;
		}
		for(var i=0;i<aRListLi.length;i++){
			aRListLi[i].children[0].src = 'img/RListImage'+oRListarr[num].img[i]+'.jpg';
			aRListBottom[i].innerHTML = oRListarr[num].title[i];
			aRListTitle[i].innerHTML = oRListarr[num].title[i];
			aRListUp[i].innerHTML = 'up主: '+oRListarr[num].up[i];
			aRListPlay[i].innerHTML = '播放: '+oRListarr[num].play[i];
			aRListBottomA[i].title  = oRListarr[num].title[i];
		}
	}
	oRListNext.onclick = function(){
		num++;
		oRListLast.index = num;
		if(num > oRListarr.length-1){
			num = 0;
		}
		for(var i=0;i<aRListLi.length;i++){
			aRListLi[i].children[0].src = 'img/RListImage'+oRListarr[num].img[i]+'.jpg';
			aRListBottom[i].innerHTML = oRListarr[num].title[i];
			aRListTitle[i].innerHTML = oRListarr[num].title[i];
			aRListUp[i].innerHTML = 'up主: '+oRListarr[num].up[i];
			aRListPlay[i].innerHTML = '播放: '+oRListarr[num].play[i];
			aRListBottomA[i].title  = oRListarr[num].title[i];
		}
	}
}



function fnListLi(obj,arrt,classstr){                      // 列表移入移除出现说明
	var aListLi = getClassIn(obj,classstr);
	var oNewDiv = null;
	var timer = null;
	var timer2 = null;
	var arr = arrt;
	for(var i=0;i<aListLi.length;i++){
		aListLi[i].index = i;
		aListLi[i].onmouseover = function(){
			var This = this;
			oNewDiv = document.getElementById('listLiShow');
			clearTimeout(timer);
			if(oNewDiv){
				timer2 = setTimeout(function(){
					document.body.removeChild(oNewDiv);
				},450)
			}
			timer = setTimeout(function(){
				oNewDiv = document.createElement('div');
				oNewDiv.id = 'listLiShow';
				oNewDiv.innerHTML = '<div class="ShowContent">'+
											'<h3 class="ShowTitle">'+arr[This.index].title+'</h3>'+ 
											'<p class="ShowUpDate">'+
												'<em>'+arr[This.index].up+'</em>'+
												'<i>'+arr[This.index].date+'</i>'+
											'</p>'+
											'<div class="ShowBody">'+
												'<img src="'+arr[This.index].img+'">'+
												'<p>'+arr[This.index].interduction+'</p>'+
											'</div>'+
											'<div class="ShowFoot">'+
												'<ul>'+
													'<li>'+arr[This.index].playtimes+'</li>'+
													'<li>'+arr[This.index].danmu+'</li>'+
													'<li>'+arr[This.index].collection+'</li>'+
													'<li>'+arr[This.index].icons+'</li>'+
												'</ul>'+
											'</div>'+
										'</div>'
				document.body.appendChild(oNewDiv);	
				oNewDiv.style.left = posLeft(This) + 'px';
				oNewDiv.style.top = (posTop(This) - 187) + 'px';
			},500);
		}
		aListLi[i].onmouseout = function(){
			oNewDiv = document.getElementById('listLiShow');
			clearTimeout(timer);
			clearTimeout(timer2);
			if(oNewDiv){
				timer = setTimeout(function(){
					document.body.removeChild(oNewDiv);
				},80)
			}
		}
	}
}




function fnTimeOut(obj,sty,str,time){       //延迟改变属性
	timeOutTimer = setTimeout(function(){
		obj.style[sty] = str;
	},time);	        
}
function fnOnLiveL(){
	for(var i=0;i<aOnLiveListLi.length;i++){
		aOnLiveImg[i].src = 'img/'+oOnLiveLArr[i].img;
		aonLiveHeadImg[i].children[0].src = 'img/'+oOnLiveLArr[i].headImg;
		aOnLiveListLiTitle[i].innerHTML = oOnLiveLArr[i].title;
		aonLiveup[i].innerHTML = oOnLiveLArr[i].up;
		aonLiveOnline[i].innerHTML = oOnLiveLArr[i].online;
	}
}

function fnOnLiveR(){  						//OnLiveR
	for(var i=0;i<oOnLiveRHeadLi.length;i++){
		var timer = null;
		var num = null;
		oOnLiveRHeadLi[i].index = i;
		oOnLiveRHeadLi[i].onclick = function(){
			clearInterval(timer);
			var oOnLiveRHeadOn = getClass('onLiveRHeadOn')[0];
			if(this.index < oOnLiveRHeadOn.index){
				num = 100;
				for(var i=0;i<oOnLiveRHeadLi.length;i++){
					oOnLiveRHeadLi[i].className = '';
					oOnLiveRBodyUl[i].style.display = 'block';
				}
				if(Math.abs(this.index - oOnLiveRHeadOn.index) == 1){
					if(this.index == 0){
						oOnLiveRBodyContent.style.marginLeft = '-100%';
						oOnLiveRBodyUl[oOnLiveRHeadLi.length-1].style.display = 'none';
					}
					else{
						oOnLiveRBodyUl[0].style.display = 'none';
					}
				}
				else if(Math.abs(this.index - oOnLiveRHeadOn.index) > 1){
					oOnLiveRBodyUl[1].style.display = 'none';
				}
				timer = setInterval(function(){
					num -= 10;
					oOnLiveRBodyContent.style.marginLeft = -num +'%';
					if(num == 0){
						clearInterval(timer);
					}
				},10)
			}
			else if(this.index > oOnLiveRHeadOn.index){
				num = 0;
				for(var i=0;i<oOnLiveRHeadLi.length;i++){
					oOnLiveRHeadLi[i].className = '';
					oOnLiveRBodyUl[i].style.display = 'block';
				}
				if(Math.abs(this.index - oOnLiveRHeadOn.index) == 1){
					if(this.index == oOnLiveRHeadLi.length-1){
						oOnLiveRBodyContent.style.marginLeft = '-0%';
						oOnLiveRBodyUl[0].style.display = 'none';
					}
					else{
						oOnLiveRBodyUl[oOnLiveRHeadLi.length-1].style.display = 'none';
					}
				}
				else if(Math.abs(this.index - oOnLiveRHeadOn.index) > 1){
					oOnLiveRBodyUl[1].style.display = 'none';
				}
				timer = setInterval(function(){
					num += 10;
					oOnLiveRBodyContent.style.marginLeft = -num +'%';
					if(num == 100){
						clearInterval(timer);
					}
				},10)
			}
			this.className = 'onLiveRHeadOn';
		}
	}
}


function fnDiv(obj,arr1,arr2,arr3){               //所有分区的统一函数
	var objLList = getClassIn(obj,'divLList')[0];
	var objListLi = getClassIn(obj,'ListLi');
	var objListLiBottom = getClassIn(obj,'ListLiBottom');
	var objTime = getClassIn(obj,'time');
	var objMedal = getClassIn(obj,'medal');
	var objDivLTitle = getClassIn(obj,'divLTitle')[0];
	var objLHeadOnOff = objDivLTitle.children[1].getElementsByTagName('li');
	var arrt = [arr1,arr2];
	var objRHead = getClassIn(obj,'divRHead')[0];
	var objRBodyList = getClassIn(obj,'divRBodyList');
	var objRHeadTurn = getClassIn(obj,'divRHeadTurn')[0];
	var objRHeadTurnLi = objRHeadTurn.getElementsByTagName('li');
	var objRBodyContent = getClassIn(obj,'divRBodyContent')[0];
	var objRHeadDay = getClassIn(obj,'divRHeadDay')[0];
	var objRHeadDaySpan = objRHeadDay.getElementsByTagName('span')[0];
	var objRHeadDayOnLi = objRHeadDay.getElementsByTagName('li');;
	var timer = null;
	var num = 0;	
	append(arr1);
	for(var i=0;i<objLHeadOnOff.length;i++){
		objLHeadOnOff[i].index = i;
		objLHeadOnOff[i].onclick = function(){
			for(var i=0;i<objLHeadOnOff.length;i++){
				objLHeadOnOff[i].className = '';
			}
			this.className = 'divLHeadOn';
			append(arrt[this.index]);
			appendImg(arrt[this.index]);
		}
	}
	window.onscroll = function(){
		for(var i=0;i<divIdArr.length;i++){
			
			if(divIdArr[i].children[0].children[0].children[1].children[0].className == 'divLHeadOn'){
				
				if(getScrollY() + viewHeight() >= posTop(divIdArr[i])){
					
					appendImg2(divIdArr[i],arrt[0]);
   				}
			}			
		}
	};
	fnListLi(obj,arr3,'ListLi');
	fnListLi(objRBodyContent.children[0],arr3,'on');
	fnListLi(objRBodyContent.children[0],arr3,'off');
	fnListLi(objRBodyContent.children[1],arr3,'on');
	fnListLi(objRBodyContent.children[1],arr3,'off');
	for(var i=0;i<objRHeadTurnLi.length;i++){
		objRHeadTurnLi[i].index = i;
		objRHeadTurnLi[i].onclick = function(){
			var oDivRHeadOn = getClassIn(objRHeadTurn,'divLHeadOn')[0];
			var This = this;
			for(var i=0;i<objRHeadTurnLi.length;i++){
				objRHeadTurnLi[i].className = '';
			}
			this.className = 'divLHeadOn';
			if(this.index != oDivRHeadOn.index){
				timer = setInterval(function(){
					if(This.index == 0){
						num -= 10;
					}
					else if(This.index == 1){
						num += 10;
					}
					objRBodyContent.style.marginLeft = -num +'%';
					if(num == 0 || num == 100){
						clearInterval(timer);
					}
				},10);
			}
		}
	}
	objRHeadDay.onmouseover = function(){
		this.className = 'divRHeadDayOn';
		objRHeadDayOn = getClassIn(objRHead,'divRHeadDayOn')[0];
	}
	objRHeadDay.onmouseout = function(){
		this.className = 'divRHeadDay';
	}
	objRHeadDay.onclick = function(){
		this.className = 'divRHeadDay';
	}
	for(var i=0;i<objRHeadDayOnLi.length;i++){
		objRHeadDayOnLi[i].onclick = function(){
			objRHeadDaySpan.innerHTML = this.innerHTML;
			for(var i=0;i<objRHeadDayOnLi.length;i++){
				objRHeadDayOnLi[i].className = '';
			}
			this.className = 'divRHeadDayUlOn';
		}
	}
	function append(arr){
		for(var i=0;i<objListLi.length;i++){
			objListLi[i].children[1].src = 'img/onLoading.jpg';
			objListLi[i].children[2].innerHTML = arr[i].title;
			objListLiBottom[i].children[0].innerHTML = arr[i].play;
			objListLiBottom[i].children[1].innerHTML = arr[i].danmu;
			objTime[i].innerHTML = arr[i].timeLength;
			objMedal[i].style.display = arr[i].medal;
		}
	}
	function appendImg(arr){
		for(var i=0;i<objListLi.length;i++){
			objListLi[i].children[1].src = 'img/'+arr[i].img;
		}
	}
	function appendImg2(obj,arr){
		var timer2 = setTimeout(function(){
			for(var i=0;i<objListLi.length;i++){
				obj.children[0].children[1].children[i].children[1].src = 'img/'+arr[i].img;
			}
		},300)
	}
}



function getClass(obj){                          //获取class
	var arr = [];
	var allElements = document.getElementsByTagName('*');
	for(var i=0;i<allElements.length;i++){
		if(allElements[i].className == obj){
			arr.push(allElements[i]);
		}
	}
	return arr;
}
function getClassIn(obj1,obj2){                          //获取id下class
	var arr = [];
	var allElements = obj1.getElementsByTagName('*');
	for(var i=0;i<allElements.length;i++){
		if(allElements[i].className == obj2){
			arr.push(allElements[i]);
		}
	}
	return arr;
}

function fnHoverChangeBg(obj,timer){                    //延迟改变背景颜色
	for(var i=0;i<obj.length;i++){
		obj[i].onmouseover = function(){
			fnTimeOut(this,'background','rgba(0,0,0,0.1)',60);
		}
	}
}
function fnOutChangeBg(obj){                      //延迟还原背景颜色
	for(var i=0;i<obj.length;i++){
		obj[i].onmouseout = function(){
			clearTimeout(timeOutTimer);
			fnTimeOut(this,'background','',60);
		}
	}
}
function displayOn(obj1,obj2){              //出现选项卡
	obj1.onmouseover = function(){
		obj2.style.display = 'block';
	}
}
function displayOff(obj1,obj2,time){              //关闭选项卡
	obj1.onmouseout = function(){
		obj2.style.display = 'none';
	}
}

function getFirstChild(obj){                        //获得兄弟和子元素
	return obj. firstElementChild || obj. firstChild
}
function getLastChild(obj){
	return obj. lastElementChild || obj. lastChild
}
function getNextSibling(obj){
	return obj. nextElementSibling || obj. nextSibling
}
function getPreviousSibling(obj){
	return obj. previousElementSibling || obj. previousSibling
}

function posLeft(obj){                     //获得元素距离body的left
	var result = 0;
	while(obj){
		result += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return result;
}

function posTop(obj){                       //获得元素距离body的top
	var result = 0;
	while(obj){
		result += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return result;
}
function getScrollY(){                     //获取窗口的滚动条高度
	return document.documentElement.scrollTop || document.body.scrollTop;
}

function viewWidth(){              //浏览器的可视宽度
	return window.innerWidth || document.documentElement.clientWidth
}

function viewHeight(){              //浏览器的可视高度
	return window.innerHeight || document.documentElement.clientHeight
}