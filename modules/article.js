/**
├── modules
    └── article.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('../schema/article');
// 自动创建表
Article.sync({force: false});

class ArticleModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data) {
        return await Article.create({
            title: data.title, // 文章标题
            author: data.author, // 文章作者
            content: data.content, // 文章内容
            category: data.category, // 文章分类
        })
    }

    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id) {
        // console.log(Article)
        return await Article.findOne({
            where: {
                id,
            },
        })
    }
    /**
     * 查询取文章列表
     * @param 
     * @returns {Promise<Model>}
     */
    static async queryListDetail() {
        // console.log(Article)
        return await Article.findAll({
            // where: {
            //     id:1,
            // },
            // limit: 2,
            // attributes:{exclude:['id']}
            // order: [ sequelize.fn('max', sequelize.col('id'))]
            // order: sequelize.fn('max', sequelize.col('id'))
        })
    }
    //删除
    static async deleteDetail(id) {
        return await Article.destroy({
            where: {
                id:id,
            },
        })
    }
    //编辑
    static async updateDetail(id,data) {
        // const cont = await Article.findAll({
        //     where: {
        //         id:id,
        //     },
        // })
        // console.log(cont)
        return await Article.update(data,{where:{id:id}})
    }
}

module.exports = ArticleModel