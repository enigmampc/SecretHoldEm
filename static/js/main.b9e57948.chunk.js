(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{216:function(e,t){},317:function(e,t,a){"use strict";(function(e){var n=a(8),s=a.n(n),r=a(37),l=a(318),i=a(319),c=a(338),o=a(339),d=a(0),u=a.n(d),p=a(67),h=a(130),g=a(68),m=a(786),y=a(89),_=a(336),f=(a(662),a(663),a(664),a(665).Hand),b=new Intl.NumberFormat,v={game_address:"",all_rooms:[],community_cards:[],my_hand:[{},{}],player_a_hand:[{},{}],player_b_hand:[{},{}],player_a:"",player_a_bet:0,player_a_wallet:0,player_b:"",player_b_bet:0,player_b_wallet:0,stage:"",turn:"",new_room_name:"",createLoading:!1,joinLoading:!1,checkLoading:!1,callLoading:!1,raiseLoading:!1,raiseAmount:0},E=function(t){Object(o.a)(n,t);var a=Object(c.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).state=Object.assign({},v,{game_address:window.location.hash.replace("#","")}),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,n,l,i,c,o,d,g,m=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.onhashchange=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.setState(Object.assign({},v,{game_address:window.location.hash.replace("#","")}));case 1:case"end":return e.stop()}}),e)}))),(t=localStorage.getItem("mnemonic"))||(t=h.generateMnemonic(),localStorage.setItem("mnemonic",t)),(a=localStorage.getItem("tx_encryption_seed"))?a=Uint8Array.from(JSON.parse("[".concat(a,"]"))):(a=p.EnigmaUtils.GenerateNewSeed(),localStorage.setItem("tx_encryption_seed",a)),e.next=7,p.Secp256k1Pen.fromMnemonic(t);case 7:n=e.sent,l=p.pubkeyToAddress(p.encodeSecp256k1Pubkey(n.pubkey),"secret"),i=new p.SigningCosmWasmClient("https://bootstrap.int.testnet.enigma.co",l,(function(e){return n.sign(e)}),a,{init:{amount:[{amount:"0",denom:"uscrt"}],gas:"500000"},exec:{amount:[{amount:"0",denom:"uscrt"}],gas:"500000"}}),this.setState({secretJsClient:i,myWalletAddress:l,mnemonic:t}),c=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===window.location.hash){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,i.getContracts(19);case 5:t=e.sent,m.setState({all_rooms:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("refreshAllRooms",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(c,0),setInterval(c,200),o=function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==window.location.hash){e.next=2;break}return e.abrupt("return");case 2:if(m.state.player_a&&m.state.player_b){e.next=4;break}return e.abrupt("return");case 4:if(m.state.player_a===m.state.myWalletAddress||m.state.player_b===m.state.myWalletAddress){e.next=6;break}return e.abrupt("return");case 6:if(JSON.stringify(m.state.my_hand)===JSON.stringify([{},{}])){e.next=8;break}return e.abrupt("return");case 8:return t=+localStorage.getItem(m.state.game_address),e.prev=9,e.next=12,i.queryContractSmart(m.state.game_address,{get_my_hand:{secret:t}});case 12:a=e.sent,m.setState({my_hand:a}),m.state.myWalletAddress===m.state.player_a?m.setState({player_a_hand:m.state.my_hand}):m.state.myWalletAddress===m.state.player_b&&m.setState({player_b_hand:m.state.my_hand}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.log("refreshMyHand",e.t0);case 20:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(o,0),setInterval(o,200),d=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.getAccount(l);case 3:(t=e.sent)?m.setState({myWalletBalance:"(".concat(b.format(+t.balance[0].amount/1e6)," SCRT)")}):m.setState({myWalletBalance:u.a.createElement("span",null,"(No funds - Go get some at"," ",u.a.createElement("a",{href:"https://faucet.testnet.enigma.co",rel:"noopener noreferrer",target:"_blank"},"https://faucet.testnet.enigma.co"),")")}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("refreshMyWalletBalance",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(d,0),setInterval(d,2500),g=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==window.location.hash){e.next=2;break}return e.abrupt("return");case 2:if(!m.state.stage.includes("Ended")){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,i.queryContractSmart(m.state.game_address,{get_public_data:{}});case 7:0===(t=e.sent).player_a_hand.length&&(t.player_a_hand=[{},{}]),0===t.player_b_hand.length&&(t.player_b_hand=[{},{}]),m.state.myWalletAddress===t.player_a?m.setState({player_a_hand:m.state.my_hand,player_b_hand:t.player_b_hand}):m.state.myWalletAddress===t.player_b?m.setState({player_a_hand:t.player_a_hand,player_b_hand:m.state.my_hand}):m.setState({player_a_hand:t.player_a_hand,player_b_hand:t.player_b_hand}),m.setState({community_cards:t.community_cards,player_a:t.player_a,player_a_bet:t.player_a_bet,player_a_wallet:t.player_a_wallet,player_b:t.player_b,player_b_bet:t.player_b_bet,player_b_wallet:t.player_b_wallet,stage:t.stage,starter:t.starter,turn:t.turn,last_play:t.last_play}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log("refreshTableState",e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}(),setTimeout(g,0),setInterval(g,200);case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createRoom",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({createLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.instantiate(19,{},this.state.new_room_name);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("createRoom",e.t0);case 9:this.setState({new_room_name:"",createLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"joinRoom",value:function(){var t=Object(r.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.game_address){t.next=2;break}return t.abrupt("return");case 2:return this.setState({joinLoading:!0}),(a=+localStorage.getItem(this.state.game_address))||(n=p.EnigmaUtils.GenerateNewSeed(),a=e.from(n.slice(0,8)).readUInt32BE(0)),t.prev=5,t.next=8,this.state.secretJsClient.execute(this.state.game_address,{join:{secret:a}});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(5),console.log("join",t.t0);case 13:localStorage.setItem(this.state.game_address,a),this.setState({joinLoading:!1});case 15:case"end":return t.stop()}}),t,this,[[5,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"fold",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({foldLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{fold:{}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("fold",e.t0);case 9:this.setState({foldLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"check",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({checkLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{check:{}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("check",e.t0);case 9:this.setState({checkLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"call",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({callLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{call:{}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("call",e.t0);case 9:this.setState({callLoading:!1});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"raise",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({raiseLoading:!0}),e.prev=1,e.next=4,this.state.secretJsClient.execute(this.state.game_address,{raise:{amount:this.state.raiseAmount}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("raise",e.t0);case 9:this.setState({raiseLoading:!1,raiseAmount:0});case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"getMe",value:function(){return this.state.myWalletAddress?this.state.myWalletAddress===this.state.player_a?{player:"A",address:this.state.player_a,bet:this.state.player_a_bet,wallet:this.state.player_a_wallet}:this.state.myWalletAddress===this.state.player_b?{player:"B",address:this.state.player_b,bet:this.state.player_b_bet,wallet:this.state.player_b_wallet}:null:null}},{key:"getOther",value:function(){return this.state.myWalletAddress?this.state.myWalletAddress!==this.state.player_a?{player:"A",address:this.state.player_a,bet:this.state.player_a_bet,wallet:this.state.player_a_wallet}:this.state.myWalletAddress!==this.state.player_b?{player:"B",address:this.state.player_b,bet:this.state.player_b_bet,wallet:this.state.player_b_wallet}:null:null}},{key:"render",value:function(){var e=this;if(""===window.location.hash)return u.a.createElement("div",{style:{color:"white"}},u.a.createElement(g.Table,{style:{overflow:"visible"}},u.a.createElement("div",{style:{position:"absolute",top:0,left:0,padding:10}},u.a.createElement("div",null,"You: ",this.state.myWalletAddress," ",this.state.myWalletBalance)),u.a.createElement("div",{style:{textAlign:"center"}},u.a.createElement(m.a.Input,{placeholder:"Room name",value:this.state.new_room_name,onChange:function(t,a){var n=a.value;return e.setState({new_room_name:n})}}),u.a.createElement(y.a,{loading:this.state.createLoading,disabled:this.state.createLoading,onClick:this.createRoom.bind(this)},"Create!")),u.a.createElement("br",null),u.a.createElement("center",null,u.a.createElement("table",{id:"room-list"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Room Name"),u.a.createElement("th",null,"Address"))),u.a.createElement("tbody",null,this.state.all_rooms.map((function(e,t){return u.a.createElement("tr",{key:t},u.a.createElement("td",null,e.label),u.a.createElement("td",null,u.a.createElement("a",{href:"#"+e.address},e.address)))})))))));var t=this.state.player_a_hand.concat(this.state.community_cards).map(k).filter((function(e){return e})),a="Unknown";if(t.length>=5)try{a=f.solve(t).descr}catch(h){}var n=this.state.player_b_hand.concat(this.state.community_cards).map(k).filter((function(e){return e})),s="Unknown";if(n.length>=5)try{s=f.solve(n).descr}catch(h){}var r=this.state.stage;if(r.includes("EndedWinner")){var l=r.replace("EndedWinner","");r=u.a.createElement("span",null,u.a.createElement("div",null,u.a.createElement("b",null,"Player ",l," Wins!")),"string"!==typeof this.state.last_play||this.state.last_play.includes("fold")?null:u.a.createElement("div",null,u.a.createElement("b",null,"A"===l?a:s)," vs a lousy"," ",u.a.createElement("b",null,"A"===l?s:a)))}else r.includes("EndedDraw")?r="It's a Tie of ".concat(a,"!"):"WaitingForPlayersToJoin"===r?r=u.a.createElement("span",null,u.a.createElement("div",null,"Waiting for players"),u.a.createElement(y.a,{loading:this.state.joinLoading,hidden:!0,disabled:this.state.joinLoading||this.state.myWalletBalance&&"string"!==typeof this.state.myWalletBalance,onClick:this.joinRoom.bind(this)},"Join")):r&&(r+=" betting round");var i="Player A",c="->",o=this.state.last_play||"";if(this.state.turn===this.state.player_b&&(i="Player B",c="<-"),i="Turn: "+i,this.state.stage&&this.state.turn&&!this.state.stage.includes("Ended")&&!this.state.stage.includes("Waiting")||(i="",c="",o=""),"string"===typeof this.state.last_play)if(this.state.last_play.includes("fold"))o=this.state.last_play;else if(this.state.last_play.includes("raised"))try{var d=+this.state.last_play.match(/\d+/g)[0];o=this.state.last_play.replace("".concat(d),b.format(d))}catch(h){}var p="";return this.state.game_address&&(p="Room: "+this.state.game_address),u.a.createElement("div",{style:{color:"white"}},u.a.createElement(g.Table,null,u.a.createElement("div",{style:{position:"absolute",top:0,left:0,padding:10}},u.a.createElement("div",null,"You: ",this.state.myWalletAddress," ",this.state.myWalletBalance)),u.a.createElement("div",{style:{position:"absolute",top:0,right:0,padding:10}},u.a.createElement("a",{href:"/#"},"Return to loby")),u.a.createElement("div",{style:{position:"absolute",width:"100%",textAlign:"center"}},u.a.createElement("div",null,p),u.a.createElement("div",null,r),u.a.createElement("div",null,i),u.a.createElement("div",null,c),u.a.createElement("br",null),this.state.community_cards.map((function(e,t){return w(e,!0,t)})),u.a.createElement("div",{style:{padding:35,textAlign:"center"}},u.a.createElement("span",{style:{marginRight:125}},"B Total Bet: ",b.format(this.state.player_b_bet)),u.a.createElement("span",{style:{marginLeft:125}},"A Total Bet: ",b.format(this.state.player_a_bet))),u.a.createElement("div",{hidden:!o,style:{padding:35,textAlign:"center"}},o)),u.a.createElement("div",{style:{position:"absolute",bottom:0,right:0,padding:10,textAlign:"center"}},i.includes("Player A")?u.a.createElement("div",{className:"ui active inline loader"}):null,u.a.createElement("div",null,"Player A",this.state.player_a===this.state.myWalletAddress?" (You)":""),u.a.createElement("div",null,"Hand: ",u.a.createElement("b",null,a)),u.a.createElement("div",null,"Credits left: ",b.format(this.state.player_a_wallet)),u.a.createElement("div",null,this.state.player_a)),u.a.createElement(g.Hand,{style:{position:"absolute",right:"35vw"},cards:this.state.player_a_hand.map((function(e){return w(e)}))}),u.a.createElement("div",{style:{position:"fixed",bottom:0,padding:10,width:"100%",textAlign:"center"},hidden:!this.getMe()||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")},u.a.createElement(y.a,{loading:this.state.checkLoading,onClick:this.check.bind(this),disabled:this.state.player_a_bet!==this.state.player_b_bet||!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading},"Check"),u.a.createElement(y.a,{loading:this.state.callLoading,onClick:this.call.bind(this),disabled:this.state.player_a_bet===this.state.player_b_bet||!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading},"Call"),u.a.createElement(y.a,{loading:this.state.raiseLoading,onClick:this.raise.bind(this),disabled:!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading||this.state.raiseAmount<=0},"Raise ",b.format(this.state.raiseAmount)),u.a.createElement(y.a,{loading:this.state.foldLoading,onClick:this.fold.bind(this),disabled:!this.state.turn||this.state.turn!==this.state.myWalletAddress||this.state.stage.includes("Ended")||this.state.stage.includes("Waiting")||this.state.callLoading||this.state.raiseLoading||this.state.foldLoading||this.state.checkLoading},"Fold"),u.a.createElement("center",null,u.a.createElement("div",{style:{padding:10,width:"300px"}},u.a.createElement(_.a,{min:0,value:this.state.raiseAmount,max:this.getOther()&&this.getMe()?1e6-this.getOther().bet:0,onChange:function(t){return e.setState({raiseAmount:t})}})))),u.a.createElement("div",{style:{position:"absolute",bottom:0,left:0,padding:10,textAlign:"center"}},i.includes("Player B")?u.a.createElement("div",{className:"ui active inline loader"}):null,u.a.createElement("div",null,"Player B"," ",this.state.player_b===this.state.myWalletAddress?" (You)":""),u.a.createElement("div",null,"Hand: ",u.a.createElement("b",null,s)),u.a.createElement("div",null,"Credits left: ",b.format(this.state.player_b_wallet)),u.a.createElement("div",null,this.state.player_b)),u.a.createElement(g.Hand,{style:{position:"absolute",left:"23vw"},cards:this.state.player_b_hand.map((function(e){return w(e)}))})))}}]),n}(u.a.Component);function w(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0;if(!e.value||!e.suit)return t?u.a.createElement(g.Card,{key:a}):{};var n={Spade:"S",Club:"C",Heart:"H",Diamond:"D"}[e.suit],s={Two:"2",Three:"3",Four:"4",Five:"5",Six:"6",Seven:"7",Eight:"8",Nine:"9",Ten:"T",Jack:"J",Queen:"Q",King:"K",Ace:"A"}[e.value];return t?u.a.createElement(g.Card,{key:a,face:s,suit:n}):{face:s,suit:n}}function k(e){if(!e.value||!e.suit)return null;var t={Spade:"s",Club:"c",Heart:"h",Diamond:"d"}[e.suit];return{Two:"2",Three:"3",Four:"4",Five:"5",Six:"6",Seven:"7",Eight:"8",Nine:"9",Ten:"T",Jack:"J",Queen:"Q",King:"K",Ace:"A"}[e.value]+t}t.a=E}).call(this,a(22).Buffer)},350:function(e,t,a){e.exports=a(785)},355:function(e,t,a){},359:function(e,t){},381:function(e,t){},383:function(e,t){},434:function(e,t){},435:function(e,t){},479:function(e,t){},481:function(e,t){},530:function(e,t){},572:function(e,t,a){var n={"./2C.png":573,"./2D.png":574,"./2H.png":575,"./2S.png":576,"./3C.png":577,"./3D.png":578,"./3H.png":579,"./3S.png":580,"./4C.png":581,"./4D.png":582,"./4H.png":583,"./4S.png":584,"./5C.png":585,"./5D.png":586,"./5H.png":587,"./5S.png":588,"./6C.png":589,"./6D.png":590,"./6H.png":591,"./6S.png":592,"./7C.png":593,"./7D.png":594,"./7H.png":595,"./7S.png":596,"./8C.png":597,"./8D.png":598,"./8H.png":599,"./8S.png":600,"./9C.png":601,"./9D.png":602,"./9H.png":603,"./9S.png":604,"./AC.png":605,"./AD.png":606,"./AH.png":607,"./AS.png":608,"./BACK.png":609,"./JC.png":610,"./JD.png":611,"./JH.png":612,"./JS.png":613,"./KC.png":614,"./KD.png":615,"./KH.png":616,"./KS.png":617,"./QC.png":618,"./QD.png":619,"./QH.png":620,"./QS.png":621,"./TC.png":622,"./TD.png":623,"./TH.png":624,"./TS.png":625,"./extra/aces.png":626,"./extra/back.png":627,"./extra/bridge-back-blue.png":628,"./extra/bridge-back-gray.png":629,"./extra/bridge-back-green.png":630,"./extra/bridge-back-purple.png":631,"./extra/bridge-back-red.png":632,"./extra/bridge-back-yellow.png":633,"./extra/bridge-backs.png":634,"./extra/honor-clubs.png":635,"./extra/honor-diamonds.png":636,"./extra/honor-hearts.png":637,"./extra/honor-spades.png":638};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=572},639:function(e,t,a){var n={"./black.png":640,"./blue.png":641,"./green.png":642,"./red.png":643,"./white.png":644};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=639},645:function(e,t,a){var n={"./burlap.png":646,"./cardboard.png":647,"./default-light.png":648,"./default.png":649,"./fabric.png":650,"./felt.png":651,"./leather.png":652,"./noise.png":653,"./paper.png":654,"./pinstripe.png":655,"./slate.png":656,"./subtle.png":657,"./suede.png":658,"./twill.png":659};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=645},664:function(e,t,a){},785:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),l=a.n(r),i=(a(355),a(317));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(i.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[350,1,2]]]);
//# sourceMappingURL=main.b9e57948.chunk.js.map