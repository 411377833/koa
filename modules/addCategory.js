/**
├── modules
    └── article.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const AddCategory = Sequelize.import('../schema/addCategory');
// 自动创建表
AddCategory.sync({force: false});

class AddCategoryModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createAddCategory(data) {
        return await AddCategory.create({
            categoryName: data.categoryName, // 分类名称
            topCategory: data.topCategory, // 上级分类
            unit: data.unit, // 数量单位
            visible: data.visible, // 是否显示
            visibleTab: data.visibleTab, // 是否显示在导航栏
            antistop: data.antistop, // 关键词
            categoryDescription: data.categoryDescription, // 分类描述
        })
    }

    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getCategoryById(id) {
        // console.log(Article)
        return await AddCategory.findOne({
            where: {
                id,
            },
        })
    }
    // /**
    //  * 查询取文章列表
    //  * @param 
    //  * @returns {Promise<Model>}
    //  */
    static async getCategoryList() {
        // console.log(Article)
        return await AddCategory.findAll({
            // where: {
            //     id:1,
            // },
            // limit: 2,
            // attributes:{exclude:['id']}
            // order: [ sequelize.fn('max', sequelize.col('id'))]
            // order: sequelize.fn('max', sequelize.col('id'))
        })
    }
    // //删除
    // static async deleteDetail(id) {
    //     return await Article.destroy({
    //         where: {
    //             id:id,
    //         },
    //     })
    // }
    // //编辑
    static async updateCategory(id,data) {
        // const cont = await Article.findAll({
        //     where: {
        //         id:id,
        //     },
        // })
        // console.log(cont)
        return await AddCategory.update(data,{where:{id:id}})
    }
}

module.exports = AddCategoryModel