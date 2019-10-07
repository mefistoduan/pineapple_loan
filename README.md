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
user

| 字段说明 | 名称 | 数据类型  | 大小 | Null | 默认值 | 备注 |
| ------- | ---- | -------- | --- | ---- | ----- | ---- |
| 借带人id | id   | int      |     | N    |       |      |
| 昵称     | name   | varchar| 20 | N |       |      |
| email  | qq          | varchar|  20 | N |       |      |
| 斗鱼昵称 | douyu_name | varchar|  200 | Y |       |      |

借带申请表 
loan

| 字段说明 | 名称 | 数据类型  | 大小 | Null | 默认值 | 备注 |
| ------- | ---- | -------- | --- | ---- | ----- | ---- |
| 借带id   | id  | int |     | N    |       |      |
| 借带人id | user_id | int | | N | | |
| 申请状态 | state | tinyint | 1 | Y | 0 | 0已申请1预审通过2已付款3已否决 |
| 金额   | value   | int |   999  | N    |   0  |  |
| 还款时间   | paytime   | datetime |     | N |     |      |
| 申请原因   | reason | varchar |   250  |   N  |     |      |
| 复核回复   | opinion | varchar |   250  |     |     |      |

`baseUrl=https://baigei.wblnb.com/api/v1`

1. 图形验证码  

   ```
   POST: /vcode
   Description:  图形验证码，防止多次提交，    
   Operation: null 
   Responses:  200  
   {  
   	code:0,
   	msg:"ok",
   	data:{
   		imgRes:"base64"//图片的base64  
   	}
   }  
   ```

2. 借带申请接口  

   ```
   POST: /loan/add
   Description:提交菠萝带的申请  
   Operation: * name,*email,*value,*paytime,*reason,*vcode(验证码),douyu_name  
   Responses:  200  
   {  
   	code:0,
   	msg:"申请已提交"
   }
   ```

3. 展示与查询接口（仅显示`state=1` 和 `state=2` 的row）

   ```
   POST: /loan/list
   Description:展示与查询接口 
   Operation: page,size,nickname,email,douyu_nick
   Responses:  200  
   {  
   	code:0,  
   	msg:"ok",
   	data:[
   		{
   			state:1,
   			value:3000,
   			paytime:2050-01-01,
   			reason:"成王败寇",
   			"opinion":"可",
   			user:{
       			name:"曾今别人眼里的好孩子",
       			douyu_name,"斗鱼用户xxxxxx"
       		}
   		},
   		{
   			state:1,
   			value:3000,
   			paytime:2050-01-01,
   			reason:"成王败寇",
   			"opinion":"可",
   			user:{
       			name:"曾今别人眼里的好孩子",
       			douyu_name,"斗鱼用户xxxxxx"
       		}
   		}
   	]
   }
