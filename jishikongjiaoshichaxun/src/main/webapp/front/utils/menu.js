const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                        ],
                        "menu":"教室信息",
                        "menuJump":"列表",
                        "tableName":"jiaoshi"
                    }
                ],
                "menu":"教室信息"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"我的座位使用",
                        "menuJump":"列表",
                        "tableName":"jiaoshiOrder"
                    }
                ],
                "menu":"我的座位使用"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除",
                        ],
                        "menu":"教室申请",
                        "menuJump":"列表",
                        "tableName":"jiaoshishenqing"
                    }
                ],
                "menu":"教室申请"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;
