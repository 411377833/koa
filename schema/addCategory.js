/**
├── schema
    └── article.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('addCategory', {
        // 分类名称ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        // 分类名称
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'categoryName',
        },
        // 上级分类
        topCategory: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'topCategory'
        },
        // 数量单位
        unit: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'unit'
        },
        // 是否显示
        visible: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'visible'
        },
        // 是否显示在导航栏
        visibleTab: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'visibleTab'
        },
        // 关键词
        antistop: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'antistop'
        },
        // 分类描述
        categoryDescription: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'categoryDescription'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}