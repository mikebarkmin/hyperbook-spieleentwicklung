"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6535],{26535:function(a){a.exports=JSON.parse('{"commands":{"MOTION_MOVESTEPS":"mugitu %1 pausu","MOTION_TURNRIGHT":"biratu @turnRight %1 gradu","MOTION_TURNLEFT":"biratu @turnLeft %1 gradu","MOTION_POINTINDIRECTION":"apuntatu norabidea: %1","MOTION_POINTTOWARDS":"jarri hona begira: %1","MOTION_GOTOXY":"joan x: %1 y: %2 kokapenera","MOTION_GOTO":"joan hona %1","MOTION_GLIDESECSTOXY":"Irristatu %1 segundotan hona x: %2 y: %3","MOTION_GLIDETO":"Irristatu %1 segundotan hona: %2","MOTION_CHANGEXBY":"aldatu x %1 unitate","MOTION_SETX":"ezarri x: %1","MOTION_CHANGEYBY":"aldatu y %1 unitate","MOTION_SETY":"ezarri y: %1","MOTION_SETROTATIONSTYLE":"ezarri biraketa modua: %1","LOOKS_SAYFORSECS":"esan %1 %2 segundoz","LOOKS_SAY":"esan %1","LOOKS_THINKFORSECS":"pentsatu %1  %2 segundoz","LOOKS_THINK":"pentsatu %1","LOOKS_SHOW":"erakutsi","LOOKS_HIDE":"ezkutatu","LOOKS_SWITCHCOSTUMETO":"aldatu tankera %1 ra","LOOKS_NEXTCOSTUME":"hurrengo tankera","LOOKS_NEXTBACKDROP_BLOCK":"hurrengo atzeko oihala","LOOKS_SWITCHBACKDROPTO":"aldatu atzeko oihala %1 ra","LOOKS_SWITCHBACKDROPTOANDWAIT":"aldatu atzeko oihala %1 ra eta itxaron","LOOKS_CHANGEEFFECTBY":"aldatu %1 efektua %2 unitate","LOOKS_SETEFFECTTO":"ezarri %1 efektua %2 ri","LOOKS_CLEARGRAPHICEFFECTS":"kendu efektu grafikoak","LOOKS_CHANGESIZEBY":"aldatu tamaina %1 unitate","LOOKS_SETSIZETO":"ezarri tamaina: % %1","LOOKS_GOTOFRONTBACK":"joan %1 geruzara","LOOKS_GOFORWARDBACKWARDLAYERS":"joan %1 geruza %2","SOUND_PLAY":"hasi %1 soinua","SOUND_CHANGEEFFECTBY":"aldatu %1 efektua %2 unitate","SOUND_SETEFFECTO":"ezarri %1 efektua: %2","SOUND_CLEAREFFECTS":"kendu soinu-efektuak","SOUND_PLAYUNTILDONE":"jo %1 soinua amaitu arte","SOUND_STOPALLSOUNDS":"gelditu soinu guztiak","music.playDrumForBeats":"jo  %1danborrean %2 pultsuz","music.restForBeats":"isilunea %1 pultsuz","music.playNoteForBeats":"jo %1 nota %2 pultsuz","music.setInstrument":"ezarri %1 tresna","SOUND_CHANGEVOLUMEBY":"aldatu bolumena %1 unitate","SOUND_SETVOLUMETO":"ezarri bolumena: %1%","music.changeTempo":"aldatu tempoa %1 unitate","music.setTempo":"ezarri %1 tempoa","pen.clear":"ezabatu guztia","pen.stamp":"zigilatu","pen.penDown":"jaitsi arkatza","pen.penUp":"igo arkatza","pen.setColor":"ezarri arkatzaren kolorea: %1","pen.changeHue":"aldatu arkatzaren kolorea %1 tonu","pen.setColorParam":"ezarri arkatzaren %1: %2","pen.changeColorParam":"aldatu arkatzaren %1%2 unitate","pen.setHue":"ezarri arkatzaren kolorea: %1","pen.changeShade":"aldatu arkatzaren itzala %1 unitate","pen.setShade":"ezarri arkatzaren itzala: %1","pen.changeSize":"aldatu arkatzaren tamaina %1 unitate","pen.setSize":"ezarri arkatzaren tamaina: %1","EVENT_WHENFLAGCLICKED":"@greenFlag klik egitean","EVENT_WHENKEYPRESSED":"%1 tekla sakatzean","EVENT_WHENTHISSPRITECLICKED":"pertsonai honetan klik egitean","EVENT_WHENSTAGECLICKED":"Eszenan klik egitean","EVENT_WHENBACKDROPSWITCHESTO":"atzeko oihala %1 ra aldatzen denean","EVENT_WHENGREATERTHAN":"%1  > %2 bada","EVENT_WHENBROADCASTRECEIVED":"%1 jasotzean","EVENT_BROADCAST":"bidali %1 guztiei","EVENT_BROADCASTANDWAIT":"bidali %1 guztiei eta itxaron","CONTROL_WAIT":"itxaron %1 segundo","CONTROL_REPEAT":"errepikatu %1 aldiz","CONTROL_FOREVER":"etengabe","CONTROL_IF":"baldin %1 orduan","CONTROL_WAITUNTIL":"itxaron %1 arte","CONTROL_REPEATUNTIL":"errepikatu %1 arte","CONTROL_STOP":"gelditu %1","CONTROL_STARTASCLONE":"klon moduan hasten naizenean","CONTROL_CREATECLONEOF":"sortu %1 ren klona","CONTROL_DELETETHISCLONE":"ezabatu klon hau","SENSING_ASKANDWAIT":"galdetu %1 eta itxaron","videoSensing.videoToggle":"%1 bideoa","videoSensing.setVideoTransparency":"ezarri bideo gardentasuna: %1","videoSensing.whenMotionGreaterThan":"bideo-mugimendua > %1 denean","SENSING_RESETTIMER":"berrabiarazi kronometroa","DATA_SETVARIABLETO":"ezarri %1: %2","DATA_CHANGEVARIABLEBY":"aldatu %1 %2 unitate","DATA_SHOWVARIABLE":"erakutsi %1 aldagaia","DATA_HIDEVARIABLE":"ezkutatu %1 aldagaia","DATA_ADDTOLIST":"batu %1 %2 ri","DATA_DELETEOFLIST":"ezabatu %1 %2 tik","DATA_DELETEALLOFLIST":"ezabatu %1-ko guztia","MOTION_IFONEDGEBOUNCE":"errebotatu ertza ukitzean","DATA_INSERTATLIST":"txertatu %1  %3 -ren %2 -an","DATA_REPLACEITEMOFLIST":"aldatu %2 -ko %1 elementua %3 -rekin","DATA_SHOWLIST":"erakutsi %1 zerrenda","DATA_HIDELIST":"ezkutatu %1 zerrenda","SENSING_OF_XPOSITION":"x kokapena","SENSING_OF_YPOSITION":"y kokapena","SENSING_OF_DIRECTION":"norabidea","SENSING_OF_COSTUMENUMBER":"# tankera","LOOKS_COSTUMENUMBERNAME":"%1 tankera","SENSING_OF_SIZE":"tamaina","SENSING_OF_BACKDROPNAME":"atzeko oihalaren izena","LOOKS_BACKDROPNUMBERNAME":"%1 atzeko oihala","SENSING_OF_BACKDROPNUMBER":"# atzeko oihala","SOUND_VOLUME":"bolumena","music.getTempo":"tempoa","SENSING_TOUCHINGOBJECT":"%1 ukitzen?","SENSING_TOUCHINGCOLOR":"%1 kolorea ukitzen?","SENSING_COLORISTOUCHINGCOLOR":"%1 koloreak %2 ukitzen du?","SENSING_DISTANCETO":"%1 rako distantzia","SENSING_ANSWER":"erantzuna","SENSING_KEYPRESSED":"%1 tekla sakatuta?","SENSING_MOUSEDOWN":"sagua sakatuta?","SENSING_MOUSEX":"saguaren x","SENSING_MOUSEY":"saguaren y","SENSING_SETDRAGMODE":"ezarri arrastea %1 moduan","SENSING_LOUDNESS":"ozentasuna","videoSensing.videoOn":"bideo- %1 hemen: %2","SENSING_TIMER":"kronometroa","SENSING_OF":"%2 tik %1","SENSING_CURRENT":"oraingo %1","SENSING_DAYSSINCE2000":"2000tik geroztiko egunak","SENSING_USERNAME":"erabiltzaile-izena","OPERATORS_ADD":"%1 + %2","OPERATORS_SUBTRACT":"%1 - %2","OPERATORS_MULTIPLY":"%1 * %2","OPERATORS_DIVIDE":"%1 / %2","OPERATORS_RANDOM":"%1 eta %2 arteko ausazko balioa","OPERATORS_LT":"%1 < %2","OPERATORS_EQUALS":"%1 = %2","OPERATORS_GT":"%1 > %2","OPERATORS_AND":"%1 eta %2","OPERATORS_OR":"%1 edo %2","OPERATORS_NOT":"%1 ez","OPERATORS_JOIN":"elkartu %1 %2 rekin","OPERATORS_LETTEROF":"%1. letra %2 tik","OPERATORS_LENGTH":"%1 ren luzera","OPERATORS_MOD":"%1 modulu %2","OPERATORS_ROUND":"biribildu %1","OPERATORS_MATHOP":"%2 tik %1","OPERATORS_CONTAINS":"%1(e)k bere baitan al du %2?","DATA_ITEMOFLIST":"%2 tik %1. elementua","DATA_ITEMNUMOFLIST":"%1 tik #. elementua %2 n","DATA_LENGTHOFLIST":"%1 ren luzera","DATA_LISTCONTAINSITEM":"%1 k bere baitan al du %2?","CONTROL_ELSE":"bestela","SENSING_USERID":"erabiltzaile-id","SENSING_LOUD":"ozen?","text2speech.speakAndWaitBlock":"esan %1","text2speech.setVoiceBlock":"ezarri ahotsa: %1","text2speech.setLanguageBlock":"ezarri hizkuntza: %1","translate.translateBlock":"itzuli %1  %2-ra","translate.viewerLanguage":"hizkuntza","makeymakey.whenKeyPressed":"when %1 key pressed","makeymakey.whenKeysPressedInOrder":"when %1 pressed in order","microbit.whenButtonPressed":"%1 botoia sakatzean","microbit.isButtonPressed":"%1 botoia sakatuta dago?","microbit.whenGesture":"%1 antzematean","microbit.displaySymbol":"bistaratu %1","microbit.displayText":"bistaratu %1 testua","microbit.clearDisplay":"garbitu pantaila","microbit.whenTilted":"%1-ra okertuta dagoenean","microbit.isTilted":"%1-ra okertuta dago?","microbit.tiltAngle":"okertu angelua %1","microbit.whenPinConnected":"%1 pina konektatuta dagoenean","ev3.motorTurnClockwise":"biratu %1 motorra norabide honetan %2 segundoz","ev3.motorTurnCounterClockwise":"biratu  %1 motorra norabide horretan %2 segundoz","ev3.motorSetPower":"ezarri %1 motorra % %2 potentzian","ev3.getMotorPosition":"%1 motorraren kokapena","ev3.whenButtonPressed":"%1 botoia sakatzean","ev3.whenDistanceLessThan":"distantzia < %1 denean","ev3.whenBrightnessLessThan":"distira < %1 denean","ev3.buttonPressed":"%1 botoia sakatuta dago?","ev3.getDistance":"distantzia","ev3.getBrightness":"distira","ev3.beepNote":"jo %1 nota %2 segundoz","wedo2.motorOn":"piztu %1","wedo2.motorOff":"itzali %1","wedo2.startMotorPower":"ezarri %1 potentzia: %2","wedo2.setMotorDirection":"ezarri %1 norabidea: %2","wedo2.whenDistance":"distantzia %1 %2 denean","wedo2.getDistance":"distantzia","wedo2.motorOnFor":"piztu %1  %2 segundoz","wedo2.setLightHue":"ezarri argiaren kolorea: %1","wedo2.playNoteFor":"jo %1 nota %2 segundoz","wedo2.whenTilted":"okertasuna %1 denean","wedo2.isTilted":"%1 okertuta?","wedo2.getTiltAngle":"inklinazio angelua %1","gdxfor.whenGesture":"when %1","gdxfor.whenForcePushedOrPulled":"when force sensor %1","gdxfor.getForce":"force","gdxfor.whenTilted":"when tilted %1","gdxfor.isTilted":"tilted %1?","gdxfor.getTilt":"tilt angle %1","gdxfor.isFreeFalling":"falling?","gdxfor.getSpin":"spin speed %1","gdxfor.getAcceleration":"acceleration %1","boost.motorOnFor":"turn motor %1 for %2 seconds","boost.motorOnForRotation":"turn motor %1 for %2 rotations","boost.motorOn":"turn motor %1 on","boost.motorOff":"turn motor %1 off","boost.setMotorPower":"set motor %1 speed to %2 %","boost.setMotorDirection":"set motor %1 direction %2","boost.getMotorPosition":"motor %1 position","boost.whenColor":"when %1 brick seen","boost.seeingColor":"seeing %1 brick?","boost.whenTilted":"when tilted %1","boost.getTiltAngle":"tilt angle %1","boost.setLightHue":"set light color to %1"},"dropdowns":{},"ignorelt":[],"soundEffects":["tonua","ezker/eskuin balantzea"],"microbitWhen":["mugitua","astindua","salto egina"],"osis":["pertsonaiaren beste script batzuk"],"definePrefix":["definitu"],"defineSuffix":[],"palette":{"Motion":"Mugimendua","Looks":"Itxura","Sound":"Soinua","Events":"Gertaerak","Control":"Kontrola","Sensing":"Sentsoreak","Operators":"Eragileak","Variables":"Aldagaiak","My Blocks":"Nire blokeak"},"math":["balio absolutu","zoru-funtzioa","sabai-funtzioa","erro karratua","sin","cos","tan","asin","acos","atan","ln","log","e ^","10 ^"],"aliases":{},"name":"Euskara","percentTranslated":100}')}}]);