"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2404],{92404:function(i){i.exports=JSON.parse('{"commands":{"MOTION_MOVESTEPS":"eik %1","MOTION_TURNRIGHT":"pasisuk @turnRight %1 laipsnių","MOTION_TURNLEFT":"pasisuk @turnLeft %1 laipsnių","MOTION_POINTINDIRECTION":"žiūrėk %1 laipsnių kryptimi","MOTION_POINTTOWARDS":"žiūrėk į %1","MOTION_GOTOXY":"eik į x: %1 y: %2","MOTION_GOTO":"eik ten, kur %1","MOTION_GLIDESECSTOXY":"slink į x: %2 y: %3 per %1 s.","MOTION_GLIDETO":"slink ten, kur %2 per %1 s.","MOTION_CHANGEXBY":"x padidink %1","MOTION_SETX":"x = %1","MOTION_CHANGEYBY":"y padidink %1","MOTION_SETY":"y = %1","MOTION_SETROTATIONSTYLE":"sukimosi būdas = %1","LOOKS_SAYFORSECS":"sakyk %1 %2 s.","LOOKS_SAY":"sakyk %1","LOOKS_THINKFORSECS":"galvok %1 %2 s.","LOOKS_THINK":"galvok %1","LOOKS_SHOW":"rodyk","LOOKS_HIDE":"slėpk","LOOKS_SWITCHCOSTUMETO":"kaukė = %1","LOOKS_NEXTCOSTUME":"kita kaukė","LOOKS_NEXTBACKDROP_BLOCK":"kitas  fonas","LOOKS_SWITCHBACKDROPTO":"fonas = %1","LOOKS_SWITCHBACKDROPTOANDWAIT":"fonas = %1 (palauk, kol pasikeis)","LOOKS_CHANGEEFFECTBY":"efektą %1 padidink %2","LOOKS_SETEFFECTTO":"efektas %1 = %2","LOOKS_CLEARGRAPHICEFFECTS":"panaikink išvaizdos efektus","LOOKS_CHANGESIZEBY":"dydį padidink %1","LOOKS_SETSIZETO":"dydis = %1 %","LOOKS_GOTOFRONTBACK":"perkelk į %1 sluoksnį","LOOKS_GOFORWARDBACKWARDLAYERS":"perkelti per %2 sluoksnius %1","SOUND_PLAY":"grok %1","SOUND_CHANGEEFFECTBY":"efektą %1 padidink %2","SOUND_SETEFFECTO":"efektas %1 = %2","SOUND_CLEAREFFECTS":"pašalink garso efektus","SOUND_PLAYUNTILDONE":"grok %1 kol pasibaigs","SOUND_STOPALLSOUNDS":"išjunk garsus","music.playDrumForBeats":"groti būgnu %1 tiek taktų: %2","music.restForBeats":"pauzė tiek taktų: %1","music.playNoteForBeats":"groti natą %1 tiek taktų: %2","music.setInstrument":"instrumentą nustatyti į %1","SOUND_CHANGEVOLUMEBY":"garsą padidink %1","SOUND_SETVOLUMETO":"garsumas = %1%","music.changeTempo":"tempą padidink %1","music.setTempo":"keisti tempą į %1","pen.clear":"ištrinti viską","pen.stamp":"antspaudas","pen.penDown":"pieštukas pieš","pen.penUp":"pieštukas nebepieš","pen.setColor":"keisti pieštuko spalvą į %1","pen.changeHue":"keisk pieštuko spalvą per %1","pen.setColorParam":"piešimo %1 = %2","pen.changeColorParam":"keisk pieštuko %1per%2","pen.setHue":"piešimo atspalvis = %1","pen.changeShade":"keisk pieštuko atspalvį per %1","pen.setShade":"keisti pieštuko atspalvį į %1","pen.changeSize":"keisk pieštuko dydį per %1","pen.setSize":"keisti pieštuko dydį į %1","EVENT_WHENFLAGCLICKED":"kai spusteli @greenFlag","EVENT_WHENKEYPRESSED":"kai paspaudi %1","EVENT_WHENTHISSPRITECLICKED":"kai spusteli ant šio veikėjo","EVENT_WHENSTAGECLICKED":"kai paspaudi scenoje","EVENT_WHENBACKDROPSWITCHESTO":"kai fonas perjungiamas į %1","EVENT_WHENGREATERTHAN":"kai %1 > %2","EVENT_WHENBROADCASTRECEIVED":"kai gausi žinutę %1","EVENT_BROADCAST":"skelbti %1","EVENT_BROADCASTANDWAIT":"skelbti %1 ir palaukti","CONTROL_WAIT":"palauk %1 sek.","CONTROL_REPEAT":"kartok %1","CONTROL_FOREVER":"kartok be galo","CONTROL_IF":"jeigu %1","CONTROL_WAITUNTIL":"palauk, kol pasidarys %1","CONTROL_REPEATUNTIL":"kartok, kol pasidarys %1","CONTROL_STOP":"sustok %1","CONTROL_STARTASCLONE":"kai pradės veikti klonas","CONTROL_CREATECLONEOF":"sukurk %1 kloną","CONTROL_DELETETHISCLONE":"ištrink šį kloną","SENSING_ASKANDWAIT":"paklausk %1 ir lauk","videoSensing.videoToggle":"perjungti video į %1","videoSensing.setVideoTransparency":"nustatyk video permatomumą į%1","videoSensing.whenMotionGreaterThan":"kai judesio vaizde > %1","SENSING_RESETTIMER":"laikmatis = 0","DATA_SETVARIABLETO":"%1 = %2","DATA_CHANGEVARIABLEBY":"%1 padidink %2","DATA_SHOWVARIABLE":"rodyk %1","DATA_HIDEVARIABLE":"slėpk %1","DATA_ADDTOLIST":"pridėk %1 į %2","DATA_DELETEOFLIST":"ištrinti %1 iš %2","DATA_DELETEALLOFLIST":"ištrinti visus iš %1","MOTION_IFONEDGEBOUNCE":"jei prie krašto, atšok","DATA_INSERTATLIST":"į sąrašo %3 %2 vietą įterpti %1","DATA_REPLACEITEMOFLIST":"sąrašo %2  %1 vietai priskirti %3","DATA_SHOWLIST":"rodyti sąrašą %1","DATA_HIDELIST":"slėpti sąrašą %1","SENSING_OF_XPOSITION":"x koordinatė","SENSING_OF_YPOSITION":"y koordinatė","SENSING_OF_DIRECTION":"kryptis","SENSING_OF_COSTUMENUMBER":"kaukės nr.","LOOKS_COSTUMENUMBERNAME":"kaukė %1","SENSING_OF_SIZE":"dydis","SENSING_OF_BACKDROPNAME":"fono pavadinimas","LOOKS_BACKDROPNUMBERNAME":"fonas %1","SENSING_OF_BACKDROPNUMBER":"fono nr.","SOUND_VOLUME":"garsumas","music.getTempo":"tempas","SENSING_TOUCHINGOBJECT":"lieti %1?","SENSING_TOUCHINGCOLOR":"lieti spalvą %1?","SENSING_COLORISTOUCHINGCOLOR":"spalva %1 liečia %2?","SENSING_DISTANCETO":"atstumas iki %1","SENSING_ANSWER":"atsakas","SENSING_KEYPRESSED":"%1 paspausta?","SENSING_MOUSEDOWN":"pelė paspausta?","SENSING_MOUSEX":"pelės x","SENSING_MOUSEY":"pelės y","SENSING_SETDRAGMODE":"vilkimas pele = %1","SENSING_LOUDNESS":"garsumas","videoSensing.videoOn":"video %1iš%2","SENSING_TIMER":"laikmatis","SENSING_OF":"%2 : %1","SENSING_CURRENT":"šio momento %1","SENSING_DAYSSINCE2000":"dienų skaičius nuo 2000-ųjų","SENSING_USERNAME":"vartotojo vardas","OPERATORS_ADD":"%1 + %2","OPERATORS_SUBTRACT":"%1 - %2","OPERATORS_MULTIPLY":"%1 * %2","OPERATORS_DIVIDE":"%1 / %2","OPERATORS_RANDOM":"atsitiktinis sk. tarp %1 ir %2","OPERATORS_LT":"%1 < %2","OPERATORS_EQUALS":"%1 = %2","OPERATORS_GT":"%1 > %2","OPERATORS_AND":"%1 ir %2","OPERATORS_OR":"%1 arba %2","OPERATORS_NOT":"ne %1","OPERATORS_JOIN":"sujunk %1 ir %2","OPERATORS_LETTEROF":"%2 raidė nr. %1","OPERATORS_LENGTH":"%1 ilgis","OPERATORS_MOD":"%1 / %2 liekana","OPERATORS_ROUND":"suapvalinta %1","OPERATORS_MATHOP":"%1 ( %2 )","OPERATORS_CONTAINS":"ar %1 turi %2?","DATA_ITEMOFLIST":"%2 nr. %1","DATA_ITEMNUMOFLIST":"%1 vieta sąraše %2","DATA_LENGTHOFLIST":"%1 ilgis","DATA_LISTCONTAINSITEM":"%1 turi %2?","CONTROL_ELSE":"kitais atvejais","SENSING_USERID":"vartotojo ID","SENSING_LOUD":"garsiai?","text2speech.speakAndWaitBlock":"sakyti %1","text2speech.setVoiceBlock":"keisti balsą į %1","text2speech.setLanguageBlock":"keisti kalbą į %1","translate.translateBlock":"išversti %1 į %2","translate.viewerLanguage":"kalba","makeymakey.whenKeyPressed":"Kai %1 paspaustas","makeymakey.whenKeysPressedInOrder":"Kai seka %1 suvesta","microbit.whenButtonPressed":"kai paspaudi mygtuką %1","microbit.isButtonPressed":"ar nuspaustas mygtukas %1?","microbit.whenGesture":"kai %1","microbit.displaySymbol":"rodyti %1","microbit.displayText":"rodyti tekstą %1","microbit.clearDisplay":"išvalyti ekraną","microbit.whenTilted":"kai paversta %1","microbit.isTilted":"ar paversta %1?","microbit.tiltAngle":"paversta kampu %1","microbit.whenPinConnected":"kai prijungtas kištukas %1","ev3.motorTurnClockwise":"%1 variklį sukti šia kryptimi tiek sekundžių: %2","ev3.motorTurnCounterClockwise":"%1 variklį sukti šia kryptimi tiek sekundžių: %2","ev3.motorSetPower":"%1 varikliui nustatyti jėgą %2 %","ev3.getMotorPosition":"%1 variklio pozicija","ev3.whenButtonPressed":"kai nuspaudžiamas mygtukas %1","ev3.whenDistanceLessThan":"kai atstumas < %1","ev3.whenBrightnessLessThan":"kai šviesumas < %1","ev3.buttonPressed":"ar mygtukas %1 nuspaustas?","ev3.getDistance":"atstumas","ev3.getBrightness":"šviesumas","ev3.beepNote":"groti natą %1tiek sekundžių: %2","wedo2.motorOn":"įjungti %1","wedo2.motorOff":"išjungti %1","wedo2.startMotorPower":"%1 galia = %2","wedo2.setMotorDirection":"%1 kryptis = %2","wedo2.whenDistance":"kai atstumas %1 %2","wedo2.getDistance":"atstumas","wedo2.motorOnFor":"įjungti %1  %2 sekundžių","wedo2.setLightHue":"spalvos tonas = %1","wedo2.playNoteFor":"groti natą %1  %2 s.","wedo2.whenTilted":"kai paversta %1","wedo2.isTilted":"ar paversta %1?","wedo2.getTiltAngle":"paversta kryptimi %1","gdxfor.whenGesture":"kai %1","gdxfor.whenForcePushedOrPulled":"kai jėgos jutiklis %1","gdxfor.getForce":"jėga","gdxfor.whenTilted":"pakreipus %1","gdxfor.isTilted":"Pasukta %1?","gdxfor.getTilt":"pasvirk kampu %1","gdxfor.isFreeFalling":"krenta?","gdxfor.getSpin":"sukimosi greitis %1]","gdxfor.getAcceleration":"pagreitis %1","boost.motorOnFor":"suk variklį %1  %2 sekundes","boost.motorOnForRotation":"suk variklį %1  %2 apsukas","boost.motorOn":"įjunk variklį %1","boost.motorOff":"išjunk variklį %1","boost.setMotorPower":"nustatyti variklio %1 greitį į %2 %","boost.setMotorDirection":"nustatyti variklio %1 kryptį %2","boost.getMotorPosition":"variklio %1 pozicija","boost.whenColor":"kai %1 bloko matoma","boost.seeingColor":"matoma %1 blokų?","boost.whenTilted":"kai paversta %1","boost.getTiltAngle":"paversk kryptimi %1","boost.setLightHue":"keisti šviesos spalvą į %1"},"dropdowns":{},"ignorelt":[],"soundEffects":["garso aukštis","kairiau/dešiniau"],"microbitWhen":["pajudinta","papurtyta","šuolis"],"osis":["kitus veikėjo scenarijus"],"definePrefix":["komanda"],"defineSuffix":[],"palette":{"Motion":"Judėjimas","Looks":"Išvaizda","Sound":"Garsas","Events":"Įvykiai","Control":"Valdymas","Sensing":"Jutimas","Operators":"Matematika","Variables":"Kintamieji","My Blocks":"Mano Komandos"},"math":["teigiama reikšmė","apvalinimas žemyn","apvalinimas aukštyn","kvadratinė šaknis","sin","cos","tg","arcsin","arccos","arctg","ln","log","e ^","10 ^"],"aliases":{},"name":"Lietuvių","percentTranslated":100}')}}]);