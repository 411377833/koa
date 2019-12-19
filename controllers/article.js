/**
├── controllers
    └── article.js
*/
const ArticleModel = require('../modules/article')

class articleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body;
        if (req.title // 文章标题
            && req.author // 文章作者
            && req.content // 文章内容
            && req.category // 文章分类
        ) {
            try {
                // 创建文章模型
                const ret = await ArticleModel.createArticle(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await ArticleModel.getArticleDetail(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 0,
                    msg: '创建文章成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 400,
                    msg: '创建文章失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 400,
                msg: '参数不齐全',
            }
        }

    }

    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.getArticleDetail(id);
                ctx.response.status = 200;
                if(data){
                    ctx.body = {
                        code: 0,
                        msg: '查询成功',
                        data
                    }
                }else{
                    ctx.body = {
                        code: 400,
                        msg: 'id不存在',
                        data:'id不存在'
                    }
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 400,
                    msg: '查询失败',
                    data
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 400,
                msg: '文章ID必须传'
            }
        }
    }
    /**
     * 获取文章列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async queryList(ctx) {
        try {
            // 查询文章详情模型
            let data = await ArticleModel.queryListDetail();
            ctx.response.status = 200;
            ctx.body = {
                code: 0,
                msg: '查询成功',
                data
            }

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 400,
                msg: '查询失败',
                data
            }
        }
    }
    /**
     * 根据id删除某条数据
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async deleteDetail(ctx) {
        let id = ctx.params.id;
        if(id){
            try {
                // 查询文章详情模型
                let data = await ArticleModel.deleteDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 0,
                    msg: '删除成功',
                    data
                }
    
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 400,
                    msg: '删除失败',
                    data
                }
            }
        }else {
            ctx.response.status = 400;
            ctx.body = {
                code: 400,
                msg: '文章ID必须传'
            }
        }
        
    }
    /**
     * 根据id删除某条数据
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async updateDetail(ctx) {
        let id = ctx.params.id;
        console.log(ctx.request.body)
        if(id){
            try {
                // 查询文章详情模型
                let data = await ArticleModel.updateDetail(id,ctx.request.body);
                ctx.response.status = 200;
                ctx.body = {
                    code: 0,
                    msg: '编辑成功',
                    // data
                }
    
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 400,
                    msg: '编辑失败',
                    // data
                }
            }
        }else {
            ctx.response.status = 416;
            ctx.body = {
                code: 400,
                msg: '文章ID必须传'
            }
        }
        
    }
}

module.exports = articleController