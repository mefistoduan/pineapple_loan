# pineapple_loan
a test website for pineapple_loan,just a meme.Don’t look so grim.

#菠萝带

#### 玩梗而已，勿要认真！

## 警告：
以下内容涉及搞笑，玩梗和无意义行为，请认真人士在虚无主义者陪同下浏览，不建议年龄0~99

本产品与菠萝贷没有一毛钱关系

用户协议（略）（反正你也不看）

## 介绍：
菠国AD 1453年 ，君士坦丁堡被奥斯曼土耳其帝国攻陷，东罗马帝国灭亡，标志欧洲中世纪结束；法国收复除加莱以外的全部领土，
标志着英法百年战争的结束。经由菠国高层一致不批准，菠国央行经由广大水友秘密决定成立了。作为菠国央行的第一批金融产品，
菠萝带也由此成立。历经五百多年的时光荏苒，菠萝带首次开放对公众运营，一切广大水友和非水友都可以阅览参观，并提交个人带款申请，
（肯定不会被批准）所申领带款一经核准立即执行，到账时间以所在行收款时间为准。

请用您的深情打动我们的审核人，您的成功带款是我们进步的最大动力。

<small>ps:CGNB</small>

###

<s>1.首页动画加 白给 字样</s>

参考 ：https://www.zcool.com.cn/work/ZMjI5MzIxODg=.html

###

1.身份验证部分，包括昵称，qq号（为了扩容打钱的问题）斗鱼昵称（非必填）；  
2.申请借带页面，金额，时间，借带理由，还款计划；  
3.进度id，查询审核进度；  

###

数据库文档


借带人信息表
loan_user

| 字段说明 | 名称 | 数据类型  | 大小 | Null | 默认值 | 备注 |  
| ------- | ---- | -------- | --- | ---- | ----- | ---- |   
| 借带人id | id   | int      |     | N    |       |      |
| 昵称     | nickname   | varchar| 20 | N |       |      |
| qq      | qq          | varchar|  20 | N |       |      |
| 斗鱼昵称 | douyu_nick  | varchar|  200 |  |       |      |


借带申请表  
loan_apply

| 字段说明 | 名称 | 数据类型  | 大小 | Null | 默认值 | 备注 |  
| ------- | ---- | -------- | --- | ---- | ----- | ---- |   
| 借带id   | loan_id   | int |     | N    |       |      |
| 金额   | value   | int |   999  | N    |   0  |      |
| 还款类型   | type   | tinyint |     | N    |   0  |   0是永远不还的烂账   1是固定期限|
| 还款时间   | paytime   | datetime |     |     |     |      |
| 申请原因   | idea   | varchar |   250  |   N  |     |      |
| 申请状态   | state   | tinyint |   0  |   N  |     |  0已申请1已通过2已否决3已付款4预审通过99已删除    |
| 复核回复   | resp   | varchar |   250  |     |     |      |


审核人信息表(todo)  
loan_Auditor   

###

1.借带申请接口  
POST: v1/applyLoan
Description:提交菠萝带的申请  
Operation: * nickname,* qq,douyu_nick,*  value,type,paytime,idea  
Responses:  200  
    {  
        Result:0,  
        Code:123456,//申请的借带id  
        Memo:'申请已提交',  
    }


2.预申请审核接口  
POST: v1/applyLoan  
Description: 审核提交的申请，只有通过后才能在 菠菠 的总审核接口看见   
Operation: * loan_id,* state，resp  
Responses:  200   
    {  
        Result:0,  
        Memo:'预申请已完成',  
    }  
    
3.总申请审核接口  
POST: v1/applyLoan  
Description:  菠菠 审核已提交并通过已预审的申请，    
Operation: * loan_id,* state，resp  
Responses:  200  
    {  
        Result:0,  
        Code:123456,//申请的借带id  
        Memo:'申请已提交',  
    }  

4.进度查询接口  
POST: v1/applyLoan
Description:查询申请的申请单，默认只显示最近的100条     
Operation: loan_id,state//loan_id传NULL值时为查询全部结果  
Responses:  200  
    {  
        Result:0,  
        Rs:[  
        {  
            nickname:' 一个孤独的借带人 ',  
            qq: 12345678 ,//前台隐藏，后台按需显示  
            douyu_nick:' mefisto ',  
            loan_id:123456,  
            value:0.01,  
            type:2,  
            paytime: ' 2050-01-01',  
            idea:' 坑害河马人人有责 ',  
            state:1,  
            resp:' 钱太少，不配给',  
        }
        ]  
        Memo:'申请已提交',  
    }  
5.图形验证码  
POST: v1/imgValid  
Description:  图形验证码，防止多次提交，    
Operation: null 
Responses:  200  
    {  
        Result:0,  
        imgRs:base64,//图片的base64  
        Memo:'验证图片',  
    }  
