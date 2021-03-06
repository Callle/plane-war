/**
 * Created by newuser on 2017/6/19.
 */

//碰撞检测
function impact(obj, dobj) {
    var o = {
        x: getDefaultStyle(obj, 'left'),
        y: getDefaultStyle(obj, 'top'),
        w: getDefaultStyle(obj, 'width'),
        h: getDefaultStyle(obj, 'height')
    }

    var d = {
        x: getDefaultStyle(dobj, 'left'),
        y: getDefaultStyle(dobj, 'top'),
        w: getDefaultStyle(dobj, 'width'),
        h: getDefaultStyle(dobj, 'height')
    }

    var px, py;

    px = o.x <= d.x ? d.x : o.x;
    py = o.y <= d.y ? d.y : o.y;

    // 判断点是否都在两个对象中  
    if (px >= o.x && px <= o.x + o.w && py >= o.y && py <= o.y + o.h && px >= d.x && px <= d.x + d.w && py >= d.y && py <= d.y + d.h) {
        return true;
    } else {
        return false;
    }
}

/** 获取对象属性
 * @param obj       对象
 * @param attribute 属性
 */
function getDefaultStyle(obj, attribute) {
    return parseInt(obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute]);
}
