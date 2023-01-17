"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5591],{45591:function(O){O.exports=JSON.parse('{"commands":{"MOTION_MOVESTEPS":"移动 %1 步","MOTION_TURNRIGHT":"右转 @turnRight %1 度","MOTION_TURNLEFT":"左转 @turnLeft %1 度","MOTION_POINTINDIRECTION":"面向 %1 方向","MOTION_POINTTOWARDS":"面向 %1","MOTION_GOTOXY":"移到 x: %1 y: %2","MOTION_GOTO":"移到 %1","MOTION_GLIDESECSTOXY":"在 %1 秒内滑行到 x: %2 y: %3","MOTION_GLIDETO":"在 %1 秒内滑行到 %2","MOTION_CHANGEXBY":"将x坐标增加 %1","MOTION_SETX":"将x坐标设为 %1","MOTION_CHANGEYBY":"将y坐标增加 %1","MOTION_SETY":"将y坐标设为 %1","MOTION_SETROTATIONSTYLE":"将旋转方式设为 %1","LOOKS_SAYFORSECS":"说 %1 %2 秒","LOOKS_SAY":"说 %1","LOOKS_THINKFORSECS":"思考 %1 %2 秒","LOOKS_THINK":"思考 %1","LOOKS_SHOW":"显示","LOOKS_HIDE":"隐藏","LOOKS_SWITCHCOSTUMETO":"换成 %1 造型","LOOKS_NEXTCOSTUME":"下一个造型","LOOKS_NEXTBACKDROP_BLOCK":"下一个背景","LOOKS_SWITCHBACKDROPTO":"换成 %1 背景","LOOKS_SWITCHBACKDROPTOANDWAIT":"换成 %1 背景并等待","LOOKS_CHANGEEFFECTBY":"将 %1 特效增加 %2","LOOKS_SETEFFECTTO":"将 %1 特效设定为 %2","LOOKS_CLEARGRAPHICEFFECTS":"清除图形特效","LOOKS_CHANGESIZEBY":"将大小增加 %1","LOOKS_SETSIZETO":"将大小设为 %1","LOOKS_GOTOFRONTBACK":"移到最 %1","LOOKS_GOFORWARDBACKWARDLAYERS":"%1 %2 层","SOUND_PLAY":"播放声音 %1","SOUND_CHANGEEFFECTBY":"将 %1 音效增加 %2","SOUND_SETEFFECTO":"将 %1 音效设为 %2","SOUND_CLEAREFFECTS":"清除音效","SOUND_PLAYUNTILDONE":"播放声音 %1 等待播完","SOUND_STOPALLSOUNDS":"停止所有声音","music.playDrumForBeats":"击打 %1 %2 拍","music.restForBeats":"休止%1拍","music.playNoteForBeats":"演奏音符%1%2拍","music.setInstrument":"将乐器设为 %1","SOUND_CHANGEVOLUMEBY":"将音量增加 %1","SOUND_SETVOLUMETO":"将音量设为 %1%","music.changeTempo":"将演奏速度增加%1","music.setTempo":"将演奏速度设定为%1","pen.clear":"全部擦除","pen.stamp":"图章","pen.penDown":"落笔","pen.penUp":"抬笔","pen.setColor":"将笔的颜色设为%1","pen.changeHue":"将笔的颜色增加%1","pen.setColorParam":"将笔的 %1 设为%2","pen.changeColorParam":"将笔的 %1 增加%2","pen.setHue":"将笔的颜色设为%1","pen.changeShade":"将笔的亮度增加%1","pen.setShade":"将笔的亮度设为%1","pen.changeSize":"将笔的粗细增加%1","pen.setSize":"将笔的粗细设为%1","EVENT_WHENFLAGCLICKED":"当 @greenFlag 被点击","EVENT_WHENKEYPRESSED":"当按下 %1 键","EVENT_WHENTHISSPRITECLICKED":"当角色被点击","EVENT_WHENSTAGECLICKED":"当舞台被点击","EVENT_WHENBACKDROPSWITCHESTO":"当背景换成 %1","EVENT_WHENGREATERTHAN":"当 %1 > %2","EVENT_WHENBROADCASTRECEIVED":"当接收到 %1","EVENT_BROADCAST":"广播 %1","EVENT_BROADCASTANDWAIT":"广播 %1 并等待","CONTROL_WAIT":"等待 %1 秒","CONTROL_REPEAT":"重复执行 %1 次","CONTROL_FOREVER":"重复执行","CONTROL_IF":"如果 %1 那么","CONTROL_WAITUNTIL":"等待 %1","CONTROL_REPEATUNTIL":"重复执行直到 %1","CONTROL_STOP":"停止 %1","CONTROL_STARTASCLONE":"当作为克隆体启动时","CONTROL_CREATECLONEOF":"克隆 %1","CONTROL_DELETETHISCLONE":"删除此克隆体","SENSING_ASKANDWAIT":"询问 %1 并等待","videoSensing.videoToggle":"%1摄像头","videoSensing.setVideoTransparency":"将视频透明度设为%1","videoSensing.whenMotionGreaterThan":"当视频运动 > %1","SENSING_RESETTIMER":"计时器归零","DATA_SETVARIABLETO":"将 %1 设为 %2","DATA_CHANGEVARIABLEBY":"将 %1 增加 %2","DATA_SHOWVARIABLE":"显示变量 %1","DATA_HIDEVARIABLE":"隐藏变量 %1","DATA_ADDTOLIST":"将 %1 加入 %2","DATA_DELETEOFLIST":"删除 %2 的第 %1 项","DATA_DELETEALLOFLIST":"删除 %1 的全部项目","MOTION_IFONEDGEBOUNCE":"碰到边缘就反弹","DATA_INSERTATLIST":"在 %3 的第 %2 项前插入 %1","DATA_REPLACEITEMOFLIST":"将 %2 的第 %1 项替换为 %3","DATA_SHOWLIST":"显示列表 %1","DATA_HIDELIST":"隐藏列表 %1","SENSING_OF_XPOSITION":"x 坐标","SENSING_OF_YPOSITION":"y 坐标","SENSING_OF_DIRECTION":"方向","SENSING_OF_COSTUMENUMBER":"造型编号","LOOKS_COSTUMENUMBERNAME":"造型 %1","SENSING_OF_SIZE":"大小","SENSING_OF_BACKDROPNAME":"背景名称","LOOKS_BACKDROPNUMBERNAME":"背景 %1","SENSING_OF_BACKDROPNUMBER":"背景编号","SOUND_VOLUME":"音量","music.getTempo":"演奏速度","SENSING_TOUCHINGOBJECT":"碰到 %1 ?","SENSING_TOUCHINGCOLOR":"碰到颜色 %1 ?","SENSING_COLORISTOUCHINGCOLOR":"颜色 %1 碰到 %2 ?","SENSING_DISTANCETO":"到 %1 的距离","SENSING_ANSWER":"回答","SENSING_KEYPRESSED":"按下 %1 键?","SENSING_MOUSEDOWN":"按下鼠标?","SENSING_MOUSEX":"鼠标的x坐标","SENSING_MOUSEY":"鼠标的y坐标","SENSING_SETDRAGMODE":"将拖动模式设为 %1","SENSING_LOUDNESS":"响度","videoSensing.videoOn":"相对于%2的视频%1","SENSING_TIMER":"计时器","SENSING_OF":"%2 的 %1","SENSING_CURRENT":"当前时间的 %1","SENSING_DAYSSINCE2000":"2000年至今的天数","SENSING_USERNAME":"用户名","OPERATORS_ADD":"%1 + %2","OPERATORS_SUBTRACT":"%1 - %2","OPERATORS_MULTIPLY":"%1 * %2","OPERATORS_DIVIDE":"%1 / %2","OPERATORS_RANDOM":"在 %1 和 %2 之间取随机数","OPERATORS_LT":"%1 < %2","OPERATORS_EQUALS":"%1 = %2","OPERATORS_GT":"%1 > %2","OPERATORS_AND":"%1 与 %2","OPERATORS_OR":"%1 或 %2","OPERATORS_NOT":"%1 不成立","OPERATORS_JOIN":"连接 %1 和 %2","OPERATORS_LETTEROF":"%2 的第 %1 个字符","OPERATORS_LENGTH":"%1 的字符数","OPERATORS_MOD":"%1 除以 %2 的余数","OPERATORS_ROUND":"四舍五入 %1","OPERATORS_MATHOP":"%1 %2","OPERATORS_CONTAINS":"%1 包含 %2 ?","DATA_ITEMOFLIST":"%2 的第 %1 项","DATA_ITEMNUMOFLIST":"%2 中第一个 %1 的编号","DATA_LENGTHOFLIST":"%1 的项目数","DATA_LISTCONTAINSITEM":"%1 包含 %2 ?","CONTROL_ELSE":"否则","SENSING_USERID":"用户id","SENSING_LOUD":"响声？","text2speech.speakAndWaitBlock":"朗读 %1","text2speech.setVoiceBlock":"使用 %1 嗓音","text2speech.setLanguageBlock":"将朗读语言设置为%1","translate.translateBlock":"将 %1 译为 %2","translate.viewerLanguage":"访客语言","makeymakey.whenKeyPressed":"当按下 %1 键","makeymakey.whenKeysPressedInOrder":"当依次按下%1键时","microbit.whenButtonPressed":"当按下%1按钮","microbit.isButtonPressed":"按下%1按钮？","microbit.whenGesture":"当被%1","microbit.displaySymbol":"显示%1","microbit.displayText":"显示文本%1","microbit.clearDisplay":"清空屏幕","microbit.whenTilted":"当向%1倾斜","microbit.isTilted":"向%1倾斜？","microbit.tiltAngle":"向%1倾角","microbit.whenPinConnected":"当引脚%1接地","ev3.motorTurnClockwise":"马达%1正转%2秒","ev3.motorTurnCounterClockwise":"马达%1反转%2秒","ev3.motorSetPower":"马达%1功率设为%2%","ev3.getMotorPosition":"马达%1的位置","ev3.whenButtonPressed":"当按下按钮%1","ev3.whenDistanceLessThan":"当距离 < %1","ev3.whenBrightnessLessThan":"当亮度 < %1","ev3.buttonPressed":"按下按钮%1？","ev3.getDistance":"距离","ev3.getBrightness":"亮度","ev3.beepNote":"鸣笛%1%2秒","wedo2.motorOn":"开启%1","wedo2.motorOff":"关闭%1","wedo2.startMotorPower":"将%1功率设为%2","wedo2.setMotorDirection":"将%1转向设为%2","wedo2.whenDistance":"当距离%1%2","wedo2.getDistance":"距离","wedo2.motorOnFor":"开启%1%2秒","wedo2.setLightHue":"将灯光颜色设为%1","wedo2.playNoteFor":"演奏音符%1%2秒","wedo2.whenTilted":"当向%1倾斜","wedo2.isTilted":"向%1倾斜？","wedo2.getTiltAngle":"向%1倾角","gdxfor.whenGesture":"当传感器%1","gdxfor.whenForcePushedOrPulled":"当力传感器被%1","gdxfor.getForce":"受力","gdxfor.whenTilted":"当向%1倾斜","gdxfor.isTilted":"向%1倾斜？","gdxfor.getTilt":"向%1倾角","gdxfor.isFreeFalling":"自由落体？","gdxfor.getSpin":"向%1的旋转速度","gdxfor.getAcceleration":"向%1的加速度","boost.motorOnFor":"使马达 %1转动 %2 秒","boost.motorOnForRotation":"使马达 %1转动 %2 圈","boost.motorOn":"开启马达 %1","boost.motorOff":"关闭马达 %1","boost.setMotorPower":"将马达 %1 速度设为 %2%","boost.setMotorDirection":"将马达%1 方向设为 %2","boost.getMotorPosition":"马达 %1 位置","boost.whenColor":"当看到%1积木","boost.seeingColor":"看到 %1积木 ?","boost.whenTilted":"当向%1倾斜","boost.getTiltAngle":"向%1倾角","boost.setLightHue":"将灯光颜色设为%1"},"dropdowns":{},"ignorelt":[],"soundEffects":["音调","左右平衡"],"microbitWhen":["移动","晃动","抛起"],"osis":["该角色的其他脚本"],"definePrefix":["定义"],"defineSuffix":[],"palette":{"Motion":"运动","Looks":"外观","Sound":"声音","Events":"事件","Control":"控制","Sensing":"侦测","Operators":"运算","Variables":"变量","My Blocks":"自制积木"},"math":["绝对值","向下取整","向上取整","平方根","sin","cos","tan","asin","acos","atan","ln","log","e ^","10 ^"],"aliases":{"左转 %1 度":"MOTION_TURNLEFT","右转 %1 度":"MOTION_TURNRIGHT","点击绿旗时":"EVENT_WHENFLAGCLICKED","结束":"scratchblocks:end"},"name":"简体中文","percentTranslated":100}')}}]);