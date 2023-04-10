var B6;
(function (B6) {
    //枚举类型  对象所有取值可能性集合
    //数字枚举
    var Direction;
    (function (Direction) {
        Direction[Direction["TOP"] = 0] = "TOP";
        Direction[Direction["LEFT"] = 1] = "LEFT";
        Direction[Direction["RIGHT"] = 2] = "RIGHT";
        Direction[Direction["BOTTOM"] = 3] = "BOTTOM";
    })(Direction || (Direction = {}));
    var d1 = Direction.TOP; //0
    //可以通过值获取属性名
    console.log(Direction[0]); //'TOP'
    //设置默认值 只能通过属性获取值
    var Sex;
    (function (Sex) {
        Sex[Sex["MAN"] = 0] = "MAN";
        Sex[Sex["WOMAN"] = 4] = "WOMAN";
        Sex[Sex["MIDDLE"] = 5] = "MIDDLE";
    })(Sex || (Sex = {}));
    //字符串枚举
    var Person;
    (function (Person) {
        Person["HEAD"] = "HEAD";
        Person["HAND"] = "HAND";
        Person["FOOT"] = "FOOT";
    })(Person || (Person = {}));
    var a1 = 0 /* ANIMAL.CAT */; //0
    //异构枚举 混合字符串枚举和数字枚举
    var STR;
    (function (STR) {
        STR["A"] = "A";
        STR[STR["B"] = 3] = "B";
        STR[STR["C"] = 6] = "C";
        STR["D"] = "D";
        STR["E"] = "D";
    })(STR || (STR = {}));
    console.log(STR[3]); //B
})(B6 || (B6 = {}));
