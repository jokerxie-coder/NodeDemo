/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-04-27 14:38:14 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-28 15:13:00
 */

'use strict';

const webCtrl = require('../../controllers/web/web');

module.exports = (router) => {
    router.get('/',webCtrl.index);
};