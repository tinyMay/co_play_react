const PAGE_ROUTE = {
	website: '/website'
};
const FRIEND_LINK = [
	{text: "要我玩",url: "http://www.15w.com/"},
	{text: "178游戏网",url: "http://www.178.com"},
	{text: "天象互动",url: "http://www.skymoons.com/"},
	{text: "91手游网",url: "http://game.91.com/"},
	{text: "ucloud云计算",url: "http://www.ucloud.cn/"},
	{text: "搞趣网",url: "http://www.gao7.com/"},
	{text: "91门户",url: "http://www.91.com/"},
	{text: "安卓网",url: "http://www.hiapk.com/"},
	{text: "苹果园",url: "http://www.app111.com/"},
	{text: "宝宝巴士",url: "http://www.babybus.com"},
	{text: "云顶游戏",url: "http://www.go.cc/"},
	{text: "掌游网",url: "http://zhanggame.com/"},
	{text: "佳和互娱",url: "http://jiahehuyu.com/"}
]

const routeMap = {
	index: "/",
	coPlay: "/",
	special: "/",
	apply: "/",
	charge: "/",
	activity: "/",

	message: "/message",
	order: "/order",
	register: "/register",
	login: "/login",
	set: "/"
	 
}
const tabList = [{
		text: "首页",
		link: routeMap.index
	},{
		text: "找陪玩",
		link: routeMap.coPlay
	},{
		text: "特价专区",
		link: routeMap.special
	},{
		text: "申请入驻",
		link: routeMap.apply
	},,{
		text: "充值",
		link: routeMap.charge
	},,{
		text: "活动",
		link: routeMap.activity
	}]

module.exports = { PAGE_ROUTE, FRIEND_LINK, routeMap, tabList};