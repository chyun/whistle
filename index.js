module.exports = function init(options, callback) {
	require('./lib/config').extend(options);
	//进入./lib/index.js中的proxy函数
	return require('./lib')(callback);
};