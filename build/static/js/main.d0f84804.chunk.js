(this["webpackJsonpeth-bulksend-wallet"]=this["webpackJsonpeth-bulksend-wallet"]||[]).push([[0],{324:function(e,t,n){e.exports=n.p+"static/media/btcaddr.f786f355.png"},325:function(e,t,n){e.exports=n.p+"static/media/ethaddr.91096758.png"},326:function(e,t,n){e.exports=n.p+"static/media/Group 6.92ce4a40.svg"},327:function(e,t,n){e.exports=n.p+"static/media/Group 4.86b249d0.svg"},328:function(e,t,n){e.exports=n.p+"static/media/logo.43601354.svg"},329:function(e,t,n){e.exports=n.p+"static/media/header-left.0adc50a7.png"},330:function(e,t,n){e.exports=n.p+"static/media/Group 5.df156f7d.svg"},331:function(e,t,n){e.exports=n.p+"static/media/metamask.037ef93b.svg"},332:function(e,t,n){e.exports=n.p+"static/media/link.17ce23e6.svg"},333:function(e,t,n){e.exports=n.p+"static/media/add.950f04f8.svg"},334:function(e,t,n){e.exports=n.p+"static/media/send.a5a183cb.svg"},335:function(e,t,n){e.exports=n.p+"static/media/error.b2138751.svg"},337:function(e,t,n){e.exports=n.p+"static/media/diagonal-arr.19bbdff7.svg"},338:function(e,t,n){e.exports=n.p+"static/media/right-arr.43e17682.svg"},339:function(e,t,n){e.exports=n.p+"static/media/beta.eb120d05.svg"},340:function(e,t,n){e.exports=n.p+"static/media/google-sheet.95d9d33e.svg"},341:function(e,t,n){e.exports=n.p+"static/media/donate.0f0a7323.svg"},348:function(e,t,n){e.exports=n(766)},354:function(e,t,n){},355:function(e,t,n){},360:function(e,t,n){},361:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){},365:function(e,t,n){},381:function(e,t){},406:function(e,t){},408:function(e,t){},487:function(e,t){},489:function(e,t){},521:function(e,t){},522:function(e,t){},527:function(e,t){},529:function(e,t){},536:function(e,t){},555:function(e,t){},573:function(e,t){},589:function(e,t){},591:function(e,t){},623:function(e,t){},625:function(e,t){},632:function(e,t){},633:function(e,t){},656:function(e,t){},666:function(e,t){},668:function(e,t){},746:function(e,t,n){},764:function(e,t,n){},765:function(e,t,n){},766:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),s=n(166),c=n.n(s),l=(n(353),n(354),n(774)),u=n(776),i=n(772),m=(n(355),n(324)),d=n.n(m),p=n(325),h=n.n(p),f=n(326),b=n.n(f),g=n(327),E=n.n(g),v=n(328),y=n.n(v),w=n(329),k=n.n(w),x=n(330),N=n.n(x),A=n(331),C=n.n(A),S=n(332),O=n.n(S),M=n(333),T=n.n(M),j=n(334),_=n.n(j),I=n(335),D=n.n(I),R={btcaddr:d.a,ethaddr:h.a,leftBars:b.a,multisendIcon:E.a,multisendWithIcon:y.a,miniMultisend:k.a,rightBars:N.a,metamask:C.a,link:O.a,add:T.a,send:_.a,error:D.a},B=n(111),F=n(10),H=n.n(F),G=n(19),W=n(775),z=["history","to","btnText"],L=function(e){var t=e.to,n=e.history,a=e.btnText,r=e.handleClick,s=e.customStyle;return o.a.createElement("button",{className:s,onClick:function(){var e=Object(G.a)(H.a.mark((function e(a){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!r){e.next=10;break}return e.next=4,r();case 4:if(!e.sent||!t){e.next=7;break}return e.abrupt("return",n.push(t));case 7:e.next=11;break;case 10:return e.abrupt("return",n.push(t));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},a,e.children)},P=Object(W.a)((function(e){var t=e.history,n=e.to,a=e.btnText,r=Object(B.a)(e,z);return o.a.createElement(L,Object.assign({history:t,to:n,btnText:a},r))})),U=n(345),Y=n(4),V=n(8),q=n(13),K=n(12),J=o.a.createContext({}),Q=function(e){return function(t){return o.a.createElement(J.Consumer,null,(function(n){return o.a.createElement(e,Object.assign({ctx:n},t))}))}},X=function(e){Object(q.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(Y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ctx:{tokenAddress:"",selected:"ethereum",url:"",auth:!1,loading:!1,amount:[],addresses:[],amounts:[],newAddress:"",newAmount:"",txHash:"",sending:!1,tokenSymbol:"",modalName:"",errorMessage:"",network:"",tipAddress:"0x79e688fACa70Ae47484187B6f1A650c4b6494E52",tipAmount:"0",tip:!1,metamaskAddress:"",handleAdd:function(t,n){return e.setState((function(e){return e.ctx[t].push(n),e}))},closeModal:function(){return e.setState((function(e){return e.ctx.modalName="",e}))},handleResetAddrAndAmnt:function(){return e.setState((function(e){return e.ctx.newAddress="",e.ctx.newAmount="",e}))},handleChange:function(t,n){return e.setState((function(e){return e.ctx[t]=n,e}))}}},e}return Object(V.a)(n,[{key:"render",value:function(){return o.a.createElement(J.Provider,{value:Object(U.a)({},this.state.ctx)},this.props.children)}}]),n}(o.a.Component),Z=Q((function(e){var t=e.ctx,n=e.beta,a=n?o.a.createElement("img",{className:"beta-icon",src:n,alt:"beta"}):null;return o.a.createElement("header",{className:"flex-container top-bar"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{className:"multisend-logo",src:R.multisendWithIcon,alt:"logo"}),a),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/"},"ABOUT")),o.a.createElement("li",null,o.a.createElement("a",{href:"#contact"},"CONTACT")),o.a.createElement("li",null,o.a.createElement("a",{href:"#help"},"FAQ"))),""===t.network?o.a.createElement(P,{to:"connect",customStyle:"ms-btn wt-icon ms-green-bg"},"SEND ",o.a.createElement("span",{className:"send-arrow"},"\u2197")):"main"===t.network?o.a.createElement(P,{customStyle:"ms-btn wt-icon  livenet"},t.network," net"):o.a.createElement(P,{customStyle:"ms-btn wt-icon  testnet"},t.network))})),$=(n(360),n(337)),ee=n.n($),te=n(338),ne=n.n(te),ae=n(339),re=n.n(ae),oe=n(340),se=n.n(oe),ce=n(341),le=n.n(ce),ue={diagonalArrow:ee.a,rightArrow:ne.a,beta:re.a,googleSheet:se.a,donate:le.a},ie=function(){return o.a.createElement("div",{className:"right-bars"},o.a.createElement("img",{src:R.rightBars,alt:"rightbars"}))},me=function(){return o.a.createElement("div",{className:"left-bars"},o.a.createElement("img",{src:R.leftBars,alt:"rightbars"}))},de=Q((function(e){var t=e.ctx;return o.a.createElement("section",{className:"flex-container intro"},o.a.createElement("div",null,o.a.createElement("h2",null,"Send Ether and Ethereum Tokens to"," ",o.a.createElement("span",{className:"ms-green"},"Multiple")," Ethereum Addresses"),o.a.createElement("p",null,"With Multisend, you can distribute Ether and ERC-20 tokens to multiple wallet addresses at once with a single transaction fee. MultiSends saves you an incredible amount of time, energy and money in distributing Ethereum assets."),t.auth?o.a.createElement(P,{to:"/send",customStyle:"ms-btn wt-icon ms-green-bg"},"START SENDING ",o.a.createElement("span",{className:"send-arrow"},"\u2197")):o.a.createElement(P,{to:"/connect",customStyle:"ms-btn wt-icon ms-green-bg"},"START SENDING ",o.a.createElement("span",{className:"send-arrow"},"\u2197"))),o.a.createElement("div",null,o.a.createElement("img",{src:R.miniMultisend,alt:"mini-multisend"})),o.a.createElement("div",null,o.a.createElement("h4",null,"Get insights on our work, people and announcements"),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("input",{placeholder:"Email address... "}),o.a.createElement("button",{className:"ms-btn wt-icon ms-green-bg"},o.a.createElement("img",{src:ue.rightArrow,alt:"icon"}))))),o.a.createElement(ie,null),o.a.createElement(me,null))})),pe=(n(361),function(){return o.a.createElement("hr",{className:"divider ms-divider"})}),he=function(e){return o.a.createElement("div",{className:"step"},o.a.createElement("img",{src:e.image,alt:e.alt}),o.a.createElement("h4",null,e.topic),o.a.createElement("p",null,e.content))},fe=(n(362),function(){return o.a.createElement("section",{id:"help",className:"flex-container steps"},o.a.createElement("h3",null,"HOW IT WORKS"),o.a.createElement("div",{className:"flex-container step-mobile"},o.a.createElement(he,{image:R.link,alt:"link-account",topic:"Connect to Metamask",content:"We do not expose you to risks by asking for your private keys"}),o.a.createElement(he,{image:R.add,alt:"add-address",topic:"Add Addresses",content:"Add addresses manually or import from Google sheets"}),o.a.createElement(he,{image:R.send,alt:"hit-send",topic:"Hit 'Send'",content:"You're good to go. Your Ether or tokens are distributed to all added addresses at once!"})))}),be=(n(363),n(770)),ge=function(){return o.a.createElement("footer",{id:"contact",className:"flex-container footer"},o.a.createElement("div",null,o.a.createElement("div",null,"\xa9 MultiSend")),o.a.createElement("div",null,o.a.createElement(be.a,{to:"/donate"},"Donate")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://t.me/eltneg"},"Telegram")),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://etherscan.io/address/0x941f40c2955ee09ba638409f67ef27c531fc055c"},"Etherscan")),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Multisend-ETH/client-v1"},"Github"))))},Ee=(n(364),function(){return o.a.createElement("section",{className:"built-with"},o.a.createElement("h3",null,"BUILT WITH VYPER"),o.a.createElement("p",null,"Multisend is the first production ready Dapp to be built with Vyper - The new Ethereum Programming Language"),o.a.createElement("button",{onClick:function(){return window.open("https://github.com/ethereum/vyper")},className:"ms-btn wt-icon ms-brown-bg vyper-btn"},"LEARN ABOUT VYPER ",o.a.createElement("span",{className:"send-arrow"},"\u2197")))}),ve=function(){return o.a.createElement("main",{className:"home"},o.a.createElement(Z,null),o.a.createElement(de,null),o.a.createElement(pe,null),o.a.createElement(fe,null),o.a.createElement(pe,null),o.a.createElement(Ee,null),o.a.createElement(pe,null),o.a.createElement(ge,null))},ye=(n(365),n(168)),we=n(112),ke=n.n(we),xe={ABI:[{name:"__init__",outputs:[],inputs:[],constant:!1,payable:!0,type:"constructor"},{name:"multiSendEther",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address[100]",name:"addresses"},{type:"uint256[100]",name:"amounts"}],constant:!1,payable:!0,type:"function",gas:3602628},{name:"multiSendToken",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"tokenAddress"},{type:"address[100]",name:"addresses"},{type:"uint256[100]",name:"amounts"}],constant:!1,payable:!0,type:"function",gas:296324},{name:"getBalance",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"address",name:"_address"}],constant:!0,payable:!1,type:"function",gas:803},{name:"calc_total",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256[100]",name:"numbs"}],constant:!0,payable:!1,type:"function",gas:41676},{name:"find",outputs:[{type:"uint256",name:"out"}],inputs:[{type:"uint256[100]",name:"numbs"},{type:"int128",name:"n"}],constant:!0,payable:!1,type:"function",gas:1183},{name:"deposit",outputs:[{type:"bool",name:"out"}],inputs:[],constant:!1,payable:!0,type:"function",gas:343},{name:"withdrawEther",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"_to"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:35639},{name:"withdrawToken",outputs:[{type:"bool",name:"out"}],inputs:[{type:"address",name:"tokenAddress"},{type:"address",name:"_to"},{type:"uint256",name:"_value"}],constant:!1,payable:!1,type:"function",gas:2799},{name:"setSendTokenFee",outputs:[{type:"bool",name:"out"}],inputs:[{type:"uint256",name:"_sendTokenFee"}],constant:!1,payable:!1,type:"function",gas:35851},{name:"setSendEthFee",outputs:[{type:"bool",name:"out"}],inputs:[{type:"uint256",name:"_sendEthFee"}],constant:!1,payable:!1,type:"function",gas:35873},{name:"destroy",outputs:[],inputs:[{type:"address",name:"_to"}],constant:!1,payable:!1,type:"function",gas:25924},{name:"owner",outputs:[{type:"address",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:813},{name:"sendTokenFee",outputs:[{type:"uint256",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:843},{name:"sendEthFee",outputs:[{type:"uint256",name:"out"}],inputs:[],constant:!0,payable:!1,type:"function",gas:873}],contractAddress:"0x941f40c2955ee09ba638409f67ef27c531fc055c",TOKEN_ABI:[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}]};window.ethereum?a=new ke.a(window.ethereum):(console.log("Legacy browser"),(a=new ke.a(ke.a.givenProvider||"http://127.0.0.1:7545")).currentProvider.isMetaMask);var Ne=xe.TOKEN_ABI,Ae=xe.ABI,Ce=xe.contractAddress,Se=new a.eth.Contract(Ae,Ce),Oe=function(){var e=Object(G.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=4;break}return e.abrupt("return",window.ethereum.enable().then(Object(G.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).catch((function(){return console.log("user denied this")})));case 4:return e.abrupt("return",null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(G.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=2;break}return e.abrupt("return",!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=Object(G.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.eth.net.getNetworkType());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){return a.eth.getAccounts().then((function(e){return e[0]}))},_e=function(){var e=Object(G.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:t=e.sent,console.log(t),Se.methods.owner().call().then((function(e){console.log(e)})),Se.methods.getbalance(Ce).call({from:t}).then((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=a.utils.BN,De=function(){var e=Object(G.a)(H.a.mark((function e(t,n){var r,o,s,c,l,u,i,m,d,p,h,f,b=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b.length>2&&void 0!==b[2]?b[2]:0,o=b.length>3&&void 0!==b[3]?b[3]:console.log,e.next=4,je();case 4:s=e.sent,c=[],l=Object(ye.a)(n);try{for(l.s();!(u=l.n()).done;)i=u.value,c.push(a.utils.toWei(i.toString(),"ether"))}catch(g){l.e(g)}finally{l.f()}for(m=new Ie(r),d=0,p=c;d<p.length;d++)h=p[d],m=m.add(new Ie(h));return e.next=12,Se.methods.sendEthFee().call();case 12:return f=e.sent,console.log("fee",f),m=m.add(new Ie(Number(f))).toString(),c=c.concat(Array(100-c.length).fill("0")),t=t.concat(Array(100-t.length).fill("0x0000000000000000000000000000000000000000")),console.log(c,t),e.prev=18,Se.methods.multiSendEther(t,c).send({from:s,value:m}).on("transactionHash",function(){var e=Object(G.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),o(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return");case 23:return e.prev=23,e.t0=e.catch(18),console.log(e.t0),e.abrupt("return",null);case 27:case"end":return e.stop()}}),e,null,[[18,23]])})));return function(t,n){return e.apply(this,arguments)}}(),Re=new Ie(10),Be={bulksend:De,getContractBal:_e,bulkSendToken:function(){var e=Object(G.a)(H.a.mark((function e(t,n,r){var o,s,c,l,u,i,m,d,p,h,f,b,g,E,v,y,w,k=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=k.length>3&&void 0!==k[3]?k[3]:0,s=k.length>4&&void 0!==k[4]?k[4]:console.log,e.next=4,je();case 4:return c=e.sent,l=[],u=new Ie(0),e.next=9,Se.methods.sendTokenFee().call();case 9:return i=e.sent,m=new a.eth.Contract(Ne,t),e.next=13,m.methods.decimals().call();case 13:d=e.sent,p=new Ie(Number(d)),h=Object(ye.a)(r);try{for(h.s();!(f=h.n()).done;)b=f.value,g=Re.pow(p).muln(Number(b)),console.log(g.toString()),l.push(g.toString()),u=u.add(g)}catch(x){h.e(x)}finally{h.f()}return E=(E=new Ie(o)).add(new Ie(Number(i))).toString(),v=u.toString(),e.prev=20,e.next=23,m.methods.allowance(c,Ce).call({from:c});case 23:y=e.sent,w=new Ie(y.toString()),console.log(w.gte(u),"t",v,"v",y.toString()),w.gte(u)?(l=l.concat(Array(100-l.length).fill("0")),n=n.concat(Array(100-n.length).fill("0x0000000000000000000000000000000000000000")),Se.methods.multiSendToken(t,n,l).send({from:c,value:E}).on("transactionHash",function(){var e=Object(G.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),s(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):m.methods.approve(Ce,v).send({from:c}).on("transactionHash",function(){var e=Object(G.a)(H.a.mark((function e(a){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),l=l.concat(Array(100-l.length).fill("0")),n=n.concat(Array(100-n.length).fill("0x0000000000000000000000000000000000000000")),Se.methods.multiSendToken(t,n,l).send({from:c,value:E}).on("transactionHash",function(){var e=Object(G.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),s(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=32;break;case 29:return e.prev=29,e.t0=e.catch(20),e.abrupt("return",null);case 32:case"end":return e.stop()}}),e,null,[[20,29]])})));return function(t,n,a){return e.apply(this,arguments)}}(),getTokenSymbol:function(){var e=Object(G.a)(H.a.mark((function e(t){var n,r,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je();case 3:return n=e.sent,r=new a.eth.Contract(Ne,t),e.next=7,r.methods.symbol().call({from:n});case 7:return o=e.sent,e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return","");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),enableMetamask:Oe,getcurrAcct:je,checkMetamask:Me,getNetwork:Te},Fe=n(343),He=n.n(Fe),Ge=Q(function(e){Object(q.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(Y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={modalIsOpen:!1,secondModalIsOpen:!1},e.openModal=function(){e.setState({modalIsOpen:!0})},e.closeModal=function(){e.setState({modalIsOpen:!1})},e.openSecondModal=function(){e.setState({secondModalIsOpen:!0})},e.closeSecondModal=function(){e.setState({secondModalIsOpen:!1})},e}return Object(V.a)(n,[{key:"render",value:function(){var e=this,t=this.props.ctx;return o.a.createElement("div",{className:"flex-container shadowize board connect-metamask-board"},o.a.createElement("img",{src:R.metamask,alt:"metamask-logo"}),o.a.createElement("div",null,o.a.createElement("h2",null,"Connect to MultiSend"),o.a.createElement("p",null,"Connect & sign transaction via browser extension")),o.a.createElement("div",null,o.a.createElement(P,{to:"/send",handleClick:Object(G.a)(H.a.mark((function n(){var a;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Be.checkMetamask();case 2:if(!1!==n.sent){n.next=7;break}return n.abrupt("return",e.openModal());case 7:return n.next=9,Be.enableMetamask();case 9:if("1234"!==(a=n.sent)){n.next=14;break}return n.abrupt("return",e.openModal());case 14:return t.handleChange("auth",!0),t.handleChange("metamaskAddress",a),n.abrupt("return",a);case 17:case"end":return n.stop()}}),n)}))),customStyle:"ms-btn"},"Connect"),o.a.createElement(He.a,{isOpen:this.state.modalIsOpen,ariaHideApp:!1,onRequestClose:this.closeModal},o.a.createElement("img",{src:R.error,alt:"error"}),o.a.createElement("h2",null,"No web3 provider found"),o.a.createElement("div",null,"Install web3 provider. ",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{color:"#1bbf0d"}},"For Desktop:"),o.a.createElement("br",null),"Please install"," ",o.a.createElement("a",{className:"app-link",target:"_blank",rel:"noopener noreferrer",href:"https://metamask.io"},"Metamask"),", ","and return to this page to continue. ",o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#1bbf0d"}},"For Mobile:"),o.a.createElement("br",null),"Please go to your device appstore, download"," ",o.a.createElement("span",null,o.a.createElement("a",{className:"app-link",target:"_blank",rel:"noopener noreferrer",href:"https://trustwallet.com"},"Trustwallet")," ","or"," ",o.a.createElement("a",{className:"app-link",target:"_blank",rel:"noopener noreferrer",href:"https://status.im/get"},"Status.im"))," ","and open this page from within the app"),o.a.createElement("button",{onClick:this.closeModal},"Got it"))))}}]),n}(r.Component)),We=function(){return o.a.createElement("main",{className:"connect"},o.a.createElement(Z,null),o.a.createElement(Ge,null))},ze=n(169),Le=(n(746),n(773)),Pe=Q(function(e){Object(q.a)(n,e);var t=Object(K.a)(n);function n(e){var a;return Object(Y.a)(this,n),(a=t.call(this,e)).renderTableRows=function(){var e=a.props.ctx,t=e.addresses,n=e.amounts;return t.map((function(t,a){return o.a.createElement("div",{key:"tr".concat(a),className:"tr"},o.a.createElement("span",null,t),o.a.createElement("span",null,n[a]),o.a.createElement("button",{onClick:function(){var t,n;t=e.addresses,n=e.amounts,t.splice(a,1),n.splice(a,1),e.handleChange("addresses",t),e.handleChange("amounts",n)}},"x"))}))},a.componentWillMount=function(){Be.getcurrAcct().then((function(e){return a.props.ctx.handleChange("metamaskAddress",e)})),Be.getNetwork().then((function(e){return a.props.ctx.handleChange("network",e)}))},a.setToken=function(){var e=a.props.ctx;"token"!==e.selected&&e.handleChange("selected","token")},a.setEth=function(){var e=a.props.ctx;"ethereum"!==e.selected&&e.handleChange("selected","ethereum")},a.addNew=function(){var e=a.props.ctx;!e.newAddress||!e.newAmount||e.addNew<=0||!e.newAddress.startsWith("0x")||e.newAddress.length<42||(e.handleAdd("addresses",e.newAddress),e.handleAdd("amounts",e.newAmount),e.handleChange("newAmount",""),e.handleChange("newAddress",""))},a.openImportModal=function(){a.props.ctx.handleChange("modalName","gsheet")},a.handleSend=function(){var e=Object(G.a)(H.a.mark((function e(t){var n,r,o,s,c,l;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!((n=a.props.ctx).addresses.length===n.amounts.length&&n.amounts.length>0)){e.next=25;break}if(r=n.addresses,o=n.amounts,s=Object(ze.a)(r),c=Object(ze.a)(o),n.tip&&(s.push(n.tipAddress),c.push(n.tipAmount)),n.handleChange("sending",!0),e.prev=8,"token"!==n.selected||!n.tokenAddress){e.next=15;break}return l=n.tokenAddress,e.next=13,Be.bulkSendToken(l,s,c,0,(function(e){n.handleChange("txHash",e),n.handleChange("modalName","success")}));case 13:e.next=17;break;case 15:return e.next=17,Be.bulksend(s,c,0,(function(e){n.handleChange("txHash",e),n.handleChange("modalName","success")}));case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(8),console.log(e.t0.message),n.handleChange("errorMessage","Please, ensure your are connected to the correct ethereum network. Also verify your token contract address if you are trying to distribute tokens."),n.handleChange("modalName","error");case 24:n.handleChange("sending",!1);case 25:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(t){return e.apply(this,arguments)}}(),a.state={coin:"eth"},a}return Object(V.a)(n,[{key:"render",value:function(){var e,t,n,a,r,s,c=this.props.ctx;return null===c.metamaskAddress?o.a.createElement(Le.a,{to:"/connect"}):("ethereum"===c.selected?(e="hidden",n="strip-away",a="ETH"):(t="strip-away",a=c.tokenSymbol||"tokens"),c.sending?(r="Sending...",s=!0):r="Send",o.a.createElement("div",{className:"board shadowize send-box"},o.a.createElement("div",null,o.a.createElement("div",{className:"mm-font"},"Account"),o.a.createElement("div",{className:"mm-acct"},c.metamaskAddress)),o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"row"},o.a.createElement("button",{onClick:this.setEth,className:"ms-btn wt-icon ms-green-bg ".concat(t)},"Send Ether"),o.a.createElement("button",{onClick:this.setToken,className:"ms-btn wt-icon ms-green-bg ".concat(n)},"Send Tokens")),o.a.createElement("label",{className:"".concat(e)},"Contract Address"),o.a.createElement("input",{value:c.tokenAddress,onChange:function(e){if(e.target.value.length>=41)try{console.log(e.target.value),Be.getTokenSymbol(e.target.value).then((function(e){e&&c.handleChange("tokenSymbol",e)}))}catch(t){return void console.log("token name error ",t)}c.handleChange(e.target.name,e.target.value.trim())},className:"".concat(e," mm-tokenad"),placeholder:"Enter token contract address",name:"tokenAddress"}),o.a.createElement("div",{className:"address-amount"},o.a.createElement("div",null,o.a.createElement("label",null,"Address"),o.a.createElement("input",{name:"newAddress",value:c.newAddress,className:"mm-newAddress",onChange:function(e){c.handleChange(e.target.name,e.target.value.trim())},placeholder:"0x..."})),o.a.createElement("div",null,o.a.createElement("label",{className:"amount-input"},"Amount"),o.a.createElement("input",{name:"newAmount",value:c.newAmount,onChange:function(e){c.handleChange(e.target.name,e.target.value)},className:"amount-input",placeholder:"0.0",type:"number"})),o.a.createElement("div",{className:"flex-container"},o.a.createElement("label",{className:"row"},"."),o.a.createElement("button",{onClick:this.addNew,className:"ms-btn wt-icon ms-green-bg"},"Add +"),o.a.createElement("button",{onClick:this.openImportModal,className:"ms-btn wt-icon ms-green-bg mv-right"},"Import \u2193"))),o.a.createElement("div",{className:"tip-container"},o.a.createElement("input",{className:"tip-check",name:"tip",checked:c.tip,onChange:function(e){c.handleChange(e.target.name,!c.tip)},type:"checkbox"})," ",o.a.createElement("span",{className:"tip-text"},"Donate ",o.a.createElement("span",null,a)," to multisend")," ",o.a.createElement("input",{className:"tip-input",name:"tipAmount",type:"number",onChange:function(e){c.handleChange(e.target.name,e.target.value)},value:c.tipAmount,placeholder:"0.0"})),o.a.createElement("div",{className:"address-table"},o.a.createElement("div",{className:"th"},o.a.createElement("span",null,"Address"),o.a.createElement("span",null,"Amount")),o.a.createElement("div",{className:"tb"},this.renderTableRows())),o.a.createElement("div",{className:"footer-send"},o.a.createElement("button",{onClick:this.handleSend,disabled:s,className:"ms-btn wt-icon ms-green-bg"},r),o.a.createElement("span",null,"".concat(c.tip?(c.amounts.reduce((function(e,t){return Number(e)+Number(t)}),0)+Number(c.tipAmount)).toFixed(4):c.amounts.reduce((function(e,t){return Number(e)+Number(t)}),0).toFixed(4)," ").concat(a," to ").concat(c.tip?c.addresses.length+1:c.addresses.length," addresses"))))))}}]),n}(o.a.Component)),Ue=function(e){var t=e.Ref;return o.a.createElement("div",{ref:t,className:"board shadowize gs-modal confirm-txn"},o.a.createElement("div",null,o.a.createElement("div",null,"Confirm Transaction"),o.a.createElement("div",null,"You are about to distribute 0.33 ETH to 23 addresses"),o.a.createElement("div",null,o.a.createElement("button",{className:"ms-btn cancel-btn"},"cancel"),o.a.createElement("button",{className:"ms-btn confirm-btn"},"confirm"))))},Ye=n(344),Ve=n.n(Ye),qe={getFromGSheet:function(){var e=Object(G.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ve.a.post("".concat("https://api-multisend.prjct.dev/api","/get-data-from-sheet"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ke=Q((function(e){var t,n,a=e.Ref,r=e.ctx;return r.loading?(t="Importing...",n=!0):t="Import \u2193",o.a.createElement("div",{ref:a,className:"board shadowize gs-modal"},o.a.createElement("img",{src:ue.googleSheet,alt:"google-sheet"}),o.a.createElement("div",null,o.a.createElement("div",null,"Import from Google Sheets"),o.a.createElement("div",null,"Import addresses with Google sheet URL"),o.a.createElement("input",{value:r.url,name:"url",onChange:function(e){return r.handleChange(e.target.name,e.target.value)},placeholder:"Google sheet URL..."}),o.a.createElement("div",null,o.a.createElement("button",{disabled:n,onClick:function(e){if(e.preventDefault(),r.url){var t=r;r.handleChange("loading",!0),qe.getFromGSheet(t).then((function(e){e.addresses&&e.amounts?(r.handleChange("addresses",e.addresses),r.handleChange("amounts",e.amounts),r.handleChange("modalName","")):(console.log(e),r.handleChange("errorMessage","Cannot find 'ADDRESSES' and 'AMOUNTS' column in the google sheet."),r.handleChange("modalName","error")),r.handleChange("url",""),r.handleChange("loading",!1)})).catch((function(e){return console.log(e.message)}))}},className:"ms-btn"},t))))})),Je=Q((function(e){var t=e.Ref,n=e.ctx;return o.a.createElement("div",{ref:t,className:"board shadowize gs-modal success-txn"},o.a.createElement("div",null,o.a.createElement("div",null,"Transaction Successful!"),o.a.createElement("div",{className:"success-msg"},"Your ".concat(n.selected," has been succesfully distributed")),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ropsten.etherscan.io/tx/".concat(n.txHash)},"View on etherscan"),o.a.createElement("div",null,o.a.createElement(P,{to:"/send",handleClick:function(){return n.handleChange("modalName","")},customStyle:"ms-btn back-btn vyper-btn"},"No thanks"),o.a.createElement(P,{to:"donate",customStyle:"ms-btn confirm-btn"},"Donate"))))})),Qe=Q((function(e){var t=e.Ref,n=e.ctx;return o.a.createElement("div",{ref:t,className:"board shadowize gs-modal success-txn error-msg-modal"},o.a.createElement("img",{src:R.error,alt:"error"}),o.a.createElement("div",null,"An error occured!"),o.a.createElement("div",{className:"err-msg"},n.errorMessage),o.a.createElement("span",{className:"view-tut"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.useloom.com/share/ae5014b06ad745aa8f88b266a7aaff4f"},"View tutorial here")),o.a.createElement(P,{to:"/send",handleClick:function(){return n.handleChange("modalName","")},customStyle:"ms-btn back-btn vyper-btn"},"Close"))})),Xe=(n(764),Q(function(e){Object(q.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(Y.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClickOutside=function(t){e.props.ctx.modalName&&(e.node.contains(t.target)||e.props.ctx.closeModal())},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside,!1)}},{key:"render",value:function(){var e,t,n=this;switch(this.props.ctx.modalName){case"confirm":e=Ue;break;case"gsheet":e=Ke;break;case"success":e=Je;break;case"error":e=Qe;break;default:e=function(){return o.a.createElement(o.a.Fragment,null)},t="hidden"}return o.a.createElement("div",{className:"flex-container modal ".concat(t)},o.a.createElement(e,{Ref:function(e){return n.node=e}}))}}]),n}(o.a.Component))),Ze=function(){return o.a.createElement("main",{className:"send"},o.a.createElement(Z,{beta:ue.beta}),o.a.createElement(Pe,null),o.a.createElement(Xe,{modalName:"success"}))},$e=(n(765),function(){return o.a.createElement("div",{className:"board shadowize gs-modal donation-board"},o.a.createElement("img",{src:ue.donate,alt:"donate-box"}),o.a.createElement("div",null,o.a.createElement("div",null,"Donate To MultiSend"),o.a.createElement("div",null,"Like MultiSend? Do you enjoy our service? Help us keep the product going and constantly improving by donating to any of the addresses below."),o.a.createElement("div",{className:"donation-address"},o.a.createElement("div",null,"ETH: 0x79e688fACa70Ae47484187B6f1A650c4b6494E52"),o.a.createElement("div",null,"BTC: 1MhAWz4vwSWDY5bSbyaMTqqNqjFDw6MDzx"))))}),et=function(){return o.a.createElement("main",{className:"donate"},o.a.createElement(Z,null),o.a.createElement($e,null))},tt=["component","ctx"],nt=Q((function(e){var t=e.component,n=e.ctx,a=Object(B.a)(e,tt);return o.a.createElement(i.a,Object.assign({},a,{render:function(e){return n.auth?o.a.createElement(t,e):o.a.createElement(Le.a,{to:{pathname:"connect"}})}}))})),at=function(){return o.a.createElement(l.a,null,o.a.createElement(u.a,null,o.a.createElement(i.a,{exact:!0,path:"/",component:ve}),o.a.createElement(i.a,{exact:!0,path:"/connect",component:We}),o.a.createElement(nt,{path:"/send",component:Ze}),o.a.createElement(i.a,{exact:!0,path:"/donate",component:et})))};c.a.render(o.a.createElement(X,null,o.a.createElement(at,null)),document.getElementById("root"))}},[[348,1,2]]]);
//# sourceMappingURL=main.d0f84804.chunk.js.map