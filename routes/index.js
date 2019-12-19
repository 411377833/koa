/**
 ├── routes
 └── index.js
 */
const Router = require('koa-router')
const ArticleController = require('../controllers/article')
const AddCategoryController = require('../controllers/addCategory')

const router = new Router({
    prefix: '/api/v1'
})

/**
 * 文章接口
 */
// 创建文章接口（路由）
router.post('/article', ArticleController.create);
// 获取文章详情接口（路由）
router.get('/article/:id', ArticleController.detail);
// 获取文章列表
router.get('/article/', ArticleController.queryList);
// 根据id删除某条数据
router.delete('/article/:id', ArticleController.deleteDetail);
// 根据id编辑某条数据
router.put('/article/:id', ArticleController.updateDetail);

// 创建分类（路由）
router.post('/addCategory', AddCategoryController.create);
//获取分类列表
router.get('/addCategory', AddCategoryController.getCategoryList);
//根据id获取分类
router.get('/addCategory/:id', AddCategoryController.getCategoryById);
//根据id获取分类
router.put('/addCategory/:id', AddCategoryController.updateCategory);
module.exports = router