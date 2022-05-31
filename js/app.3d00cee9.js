(function(){"use strict";var t={990:function(t,s,n){var a=n(144),i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},e=[],c=n(1),r={},h=(0,c.Z)(r,i,e,!1,null,null,null),o=h.exports,l=n(345),u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{attrs:{id:"app"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.initial.display,expression:"qnaList.initial.display"}],staticClass:"initial screen"},[a("img",{attrs:{src:n(277)}}),a("button",{staticClass:"btn start",attrs:{type:"button"},on:{click:function(s){return t.goPage("explain")}}},[a("img",{attrs:{src:n(668)}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.explain.display,expression:"qnaList.explain.display"}],staticClass:"explain screen"},[a("img",{attrs:{src:n(858)}}),a("button",{staticClass:"btn explain",attrs:{type:"button"},on:{click:function(s){return t.goPage("first")}}},[a("img",{attrs:{src:n(132)}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.first.display,expression:"qnaList.first.display"}],staticClass:"first screen"},[a("img",{attrs:{src:n(293)}}),a("div",{staticClass:"screen_back",class:t.qnaList.first.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.first.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.first.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.first.jQna.check?"on":"",on:{click:function(s){return t.checkFun("first","left")}}},[t._v(t._s(t.qnaList.first.jQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.first.pQna.check?"on":"",on:{click:function(s){return t.checkFun("first","right")}}},[t._v(t._s(t.qnaList.first.pQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("second")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.second.display,expression:"qnaList.second.display"}],staticClass:"second screen"},[a("img",{attrs:{src:n(507)}}),a("div",{staticClass:"screen_back",class:t.qnaList.second.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.second.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.second.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.second.iQna.check?"on":"",on:{click:function(s){return t.checkFun("second","left")}}},[t._v(t._s(t.qnaList.second.iQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.second.eQna.check?"on":"",on:{click:function(s){return t.checkFun("second","right")}}},[t._v(t._s(t.qnaList.second.eQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("first")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("third")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.third.display,expression:"qnaList.third.display"}],staticClass:"third screen"},[a("img",{attrs:{src:n(589)}}),a("div",{staticClass:"screen_back",class:t.qnaList.third.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.third.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.third.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.third.iQna.check?"on":"",on:{click:function(s){return t.checkFun("third","left")}}},[t._v(t._s(t.qnaList.third.iQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.third.eQna.check?"on":"",on:{click:function(s){return t.checkFun("third","right")}}},[t._v(t._s(t.qnaList.third.eQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("second")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("fourth")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.fourth.display,expression:"qnaList.fourth.display"}],staticClass:"fourth screen"},[a("img",{attrs:{src:n(397)}}),a("div",{staticClass:"screen_back",class:t.qnaList.fourth.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.fourth.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.fourth.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.fourth.jQna.check?"on":"",on:{click:function(s){return t.checkFun("fourth","left")}}},[t._v(t._s(t.qnaList.fourth.jQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.fourth.pQna.check?"on":"",on:{click:function(s){return t.checkFun("fourth","right")}}},[t._v(t._s(t.qnaList.fourth.pQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("third")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("fiveth")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.fiveth.display,expression:"qnaList.fiveth.display"}],staticClass:"fiveth screen"},[a("img",{attrs:{src:n(470)}}),a("div",{staticClass:"screen_back",class:t.qnaList.fiveth.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.fiveth.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.fiveth.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.fiveth.sQna.check?"on":"",on:{click:function(s){return t.checkFun("fiveth","left")}}},[t._v(t._s(t.qnaList.fiveth.sQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.fiveth.nQna.check?"on":"",on:{click:function(s){return t.checkFun("fiveth","right")}}},[t._v(t._s(t.qnaList.fiveth.nQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("fourth")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("sixth")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.sixth.display,expression:"qnaList.sixth.display"}],staticClass:"sixth screen"},[a("img",{attrs:{src:n(753)}}),a("div",{staticClass:"screen_back",class:t.qnaList.sixth.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.sixth.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.sixth.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.sixth.tQna.check?"on":"",on:{click:function(s){return t.checkFun("sixth","left")}}},[t._v(t._s(t.qnaList.sixth.tQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.sixth.fQna.check?"on":"",on:{click:function(s){return t.checkFun("sixth","right")}}},[t._v(t._s(t.qnaList.sixth.fQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("fiveth")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("seventh")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.seventh.display,expression:"qnaList.seventh.display"}],staticClass:"seventh screen"},[a("img",{attrs:{src:n(597)}}),a("div",{staticClass:"screen_back",class:t.qnaList.seventh.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.seventh.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.seventh.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.seventh.tQna.check?"on":"",on:{click:function(s){return t.checkFun("seventh","left")}}},[t._v(t._s(t.qnaList.seventh.tQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.seventh.fQna.check?"on":"",on:{click:function(s){return t.checkFun("seventh","right")}}},[t._v(t._s(t.qnaList.seventh.fQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("sixth")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("eighth")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.eighth.display,expression:"qnaList.eighth.display"}],staticClass:"eighth screen"},[a("img",{attrs:{src:n(166)}}),a("div",{staticClass:"screen_back",class:t.qnaList.eighth.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.eighth.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.eighth.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.eighth.iQna.check?"on":"",on:{click:function(s){return t.checkFun("eighth","left")}}},[t._v(t._s(t.qnaList.eighth.iQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.eighth.eQna.check?"on":"",on:{click:function(s){return t.checkFun("eighth","right")}}},[t._v(t._s(t.qnaList.eighth.eQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("seventh")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("nineth")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.nineth.display,expression:"qnaList.nineth.display"}],staticClass:"nineth screen"},[a("img",{attrs:{src:n(461)}}),a("div",{staticClass:"screen_back",class:t.qnaList.nineth.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.nineth.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.nineth.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.nineth.sQna.check?"on":"",on:{click:function(s){return t.checkFun("nineth","left")}}},[t._v(t._s(t.qnaList.nineth.sQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.nineth.nQna.check?"on":"",on:{click:function(s){return t.checkFun("nineth","right")}}},[t._v(t._s(t.qnaList.nineth.nQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("eighth")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("tenth")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.tenth.display,expression:"qnaList.tenth.display"}],staticClass:"tenth screen"},[a("img",{attrs:{src:n(351)}}),a("div",{staticClass:"screen_back",class:t.qnaList.tenth.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.tenth.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.tenth.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.tenth.tQna.check?"on":"",on:{click:function(s){return t.checkFun("tenth","left")}}},[t._v(t._s(t.qnaList.tenth.tQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.tenth.fQna.check?"on":"",on:{click:function(s){return t.checkFun("tenth","right")}}},[t._v(t._s(t.qnaList.tenth.fQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("nineth")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("eleventh")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.eleventh.display,expression:"qnaList.eleventh.display"}],staticClass:"eleventh screen"},[a("img",{attrs:{src:n(663)}}),a("div",{staticClass:"screen_back",class:t.qnaList.eleventh.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.eleventh.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.eleventh.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.eleventh.sQna.check?"on":"",on:{click:function(s){return t.checkFun("eleventh","left")}}},[t._v(t._s(t.qnaList.eleventh.sQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.eleventh.nQna.check?"on":"",on:{click:function(s){return t.checkFun("eleventh","right")}}},[t._v(t._s(t.qnaList.eleventh.nQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("tenth")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.goPage("twelveth")}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.twelveth.display,expression:"qnaList.twelveth.display"}],staticClass:"twelveth screen"},[a("img",{attrs:{src:n(783)}}),a("div",{staticClass:"screen_back",class:t.qnaList.twelveth.display?"on":""},[a("h1",{staticClass:"qna_num"},[t._v(t._s(t.qnaList.twelveth.num))]),a("h2",{staticClass:"qna_txt"},[t._v(t._s(t.qnaList.twelveth.qna))]),a("p",{staticClass:"btn_txt",class:t.qnaList.twelveth.jQna.check?"on":"",on:{click:function(s){return t.checkFun("twelveth","left")}}},[t._v(t._s(t.qnaList.twelveth.jQna.txt))]),a("p",{staticClass:"btn_txt",class:t.qnaList.twelveth.pQna.check?"on":"",on:{click:function(s){return t.checkFun("twelveth","right")}}},[t._v(t._s(t.qnaList.twelveth.pQna.txt))]),a("div",{staticClass:"btn_area"},[a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("eleventh")}}},[a("img",{attrs:{src:n(332)}})]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.total_check()}}},[a("img",{attrs:{src:n(132)}})])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.result.display,expression:"result.display"}],staticClass:"screen result",class:t.result.display?"on":""},[a("img",{directives:[{name:"show",rawName:"v-show",value:"ENFJ"==t.res_str,expression:"(res_str=='ENFJ')"}],attrs:{src:n(425)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ENFP"==t.res_str,expression:"(res_str=='ENFP')"}],attrs:{src:n(462)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ENTJ"==t.res_str,expression:"(res_str=='ENTJ')"}],attrs:{src:n(540)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ENTP"==t.res_str,expression:"(res_str=='ENTP')"}],attrs:{src:n(156)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ESFJ"==t.res_str,expression:"(res_str=='ESFJ')"}],attrs:{src:n(587)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ESFP"==t.res_str,expression:"(res_str=='ESFP')"}],attrs:{src:n(578)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ESTJ"==t.res_str,expression:"(res_str=='ESTJ')"}],attrs:{src:n(77)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ESTP"==t.res_str,expression:"(res_str=='ESTP')"}],attrs:{src:n(917)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"INFJ"==t.res_str,expression:"(res_str=='INFJ')"}],attrs:{src:n(434)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"INFP"==t.res_str,expression:"(res_str=='INFP')"}],attrs:{src:n(32)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"INTJ"==t.res_str,expression:"(res_str=='INTJ')"}],attrs:{src:n(335)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"INTP"==t.res_str,expression:"(res_str=='INTP')"}],attrs:{src:n(511)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ISFJ"==t.res_str,expression:"(res_str=='ISFJ')"}],attrs:{src:n(650)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ISFP"==t.res_str,expression:"(res_str=='ISFP')"}],attrs:{src:n(307)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ISTJ"==t.res_str,expression:"(res_str=='ISTJ')"}],attrs:{src:n(510)}}),a("img",{directives:[{name:"show",rawName:"v-show",value:"ISTP"==t.res_str,expression:"(res_str=='ISTP')"}],attrs:{src:n(476)}}),a("button",{staticClass:"full_btn",attrs:{type:"button"},on:{click:function(s){return t.goPage("initial")}}},[t._v("처음으로")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.qnaList.threeteen.display,expression:"qnaList.threeteen.display"}],staticClass:"threeteen screen"},[a("img",{attrs:{src:n(344)}}),a("button",{staticClass:"button back",attrs:{type:"button"},on:{click:function(s){return t.goPage("initial")}}},[t._v("처음으로")]),a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(s){return t.total_check()}}},[a("img",{attrs:{src:n(132)}})])])])},p=[],g={name:"App",data(){return{qnaList:{initial:{display:!0},explain:{display:!1},first:{display:!1,img:"@/assets/1qna.png",num:"Q1",qna:"오랜만에 떠나기로한 여행 설레는 마음으로 친구들과 영행 계획을 짜기로 합니다",jQna:{txt:"① 일정,장소,경비,동선까지 하나하나 세밀하게 계획해야 한다.",check:!1},pQna:{txt:"② 큰 틀만 잡은 후 나머지는 여행지에서 결정한다.",check:!1}},second:{display:!1,img:"@/assets/2qna.png",num:"Q2",qna:"당신이 원하는 여행 스타일",iQna:{txt:"① 삶에 지친 나, 바다를 바라보며 누워서 힐링한번 해볼까?",check:!1},eQna:{txt:"② 바다를 보면 풍덩! 서핑도 하고 보트도 탈꺼야!",check:!1}},third:{display:!1,img:"@/assets/3qna.png",num:"Q3",qna:"당신이 원하는 숙소는?",iQna:{txt:"① 새로운 사람은 불편해~ 프라이빗한 호텔이 좋아",check:!1},eQna:{txt:"② 새로운 인연을 만날 수 있는 게스트 하우스가 좋아",check:!1}},fourth:{display:!1,img:"@/assets/4qna.png",num:"Q4",qna:"여행을 가기위해 짐을 싸기 시작합니다.",jQna:{txt:"① 체크리스트를 작성해서 빠진 것은 없는지 차근차근 준비한다.",check:!1},pQna:{txt:"② 출발하기 전날 밤 서둘러서 짐을 싼다.",check:!1}},fiveth:{display:!1,img:"@/assets/5qna.png",num:"Q5",qna:"여행 가기 D-1! 잠자리에 들기 전 당신은?",sQna:{txt:"① 설레는 마음으로 숙소와 비행기 시간 등 한 번 더 확인하고 빨리잔다.",check:!1},nQna:{txt:"② 여행을 가면 뭐하고 놀지 생각하거나, 비행기 사고가 나면 어떻게 하짇 등 온갖 상상을 하다가 잠든다.",check:!1}},sixth:{display:!1,img:"@/assets/6qna.png",num:"Q6",qna:"여행지에서 아름다운 건축물을 보았을 때 나의 반응은?",tQna:{txt:"① '어떻게 이런 건물을 지었을까?' 분석하여 본다.",check:!1},fQna:{txt:"② '이렇게 아름다운 건물을 지었다니 놀라워!' 하며 감탄한다.",check:!1}},seventh:{display:!1,img:"@/assets/7qna.png",num:"Q7",qna:"여행 중 장사꾼이 나에게 필요 없는 제품을 사달라고 간절히 부탁한다면?",tQna:{txt:"① 나에게 필요 없는 물건이니 솔직하게 거절한다.",check:!1},fQna:{txt:"② 장사꾼의 사정이 딱해 보여 그냥 한 개 산다.",check:!1}},eighth:{display:!1,img:"@/assets/8qna.png",num:"Q8",qna:"친구가 액티비티한 활동을 하자고 하면?",iQna:{txt:"① 액티비티한 경험보다 숙소에서 휴식하거나 여행지 구경하면서 힐링하는 게 좋아!",check:!1},eQna:{txt:"② 여행가면 필수코스~당연히 해야지!뭐할까?",check:!1}},nineth:{display:!1,img:"@/assets/9qna.png",num:"Q9",qna:"오늘 저녁은 친구들과 숙소에서 직접 만들어 먹기로 하였다. 당신의 요리스타일은?",sQna:{txt:"① 레시피에 있는 그대로 꼼꼼히 순서와 정량을 맞추어서 요리를 할 것이다.",check:!1},nQna:{txt:"② 레시피는 참고만 하고 감으로 요리를 하면서 사이사이 간을 맛보면서 완성할 것이다.",check:!1}},tenth:{display:!1,img:"@/assets/10qna.png",num:"Q10",qna:"친구가 여권을 잃어버려 당황하고 있다면?",tQna:{txt:"① 어디서 어떻게 잃어버렸는지 확인하고 한편 대사관에 연락하는 등 해결책을 찾는다.",check:!1},fQna:{txt:"② 당황해 하는 친구의 등을 토닥여주며 괜찮을것라고 진정시킨다.",check:!1}},eleventh:{display:!1,img:"@/assets/11qna.png",num:"Q11",qna:"다음 여행지로 가는 방법이 두 가지가 있다. 당신은 어던 방법으로 갈 것인가?",sQna:{txt:"① 이전에 가봤던 알고 있는 길로 빠르게 간다.",check:!1},nQna:{txt:"② 아는 길로만 가는 것은 재미없어, 새로운 길을 찾아간다.",check:!1}},twelveth:{display:!1,img:"@/assets/12qna.png",num:"Q12",qna:"다음 여행지는 석양이 아름다운 해변! 그러나 예상치 못한 비로 인해 오늘은 석양을 볼 수 없다고 합니다.",jQna:{txt:"① 속상하고 자증나기는 하지만 이럴 경우를 대비한 플랜B대로 다른 장소로 인동한다.",check:!1},pQna:{txt:"② 계획대로 되지 않는 것도 여행의 낭만이지~ 빗소리를 즐기며 느긋하게 다음 일정을 생각한다.",check:!1}},threeteen:{display:!1}},result:{display:!1},res_str:"결과값"}},methods:{checkFun(t,s){"first"==t?(this.qnaList.first.jQna.check=!1,this.qnaList.first.pQna.check=!1,"left"==s?this.qnaList.first.jQna.check=!0:"right"==s&&(this.qnaList.first.pQna.check=!0)):"second"==t?(this.qnaList.second.iQna.check=!1,this.qnaList.second.eQna.check=!1,"left"==s?this.qnaList.second.iQna.check=!0:"right"==s&&(this.qnaList.second.eQna.check=!0)):"third"==t?(this.qnaList.third.iQna.check=!1,this.qnaList.third.eQna.check=!1,"left"==s?this.qnaList.third.iQna.check=!0:"right"==s&&(this.qnaList.third.eQna.check=!0)):"fourth"==t?(this.qnaList.fourth.jQna.check=!1,this.qnaList.fourth.pQna.check=!1,"left"==s?this.qnaList.fourth.jQna.check=!0:"right"==s&&(this.qnaList.fourth.pQna.check=!0)):"fiveth"==t?(this.qnaList.fiveth.sQna.check=!1,this.qnaList.fiveth.nQna.check=!1,"left"==s?this.qnaList.fiveth.sQna.check=!0:"right"==s&&(this.qnaList.fiveth.nQna.check=!0)):"sixth"==t?(this.qnaList.sixth.tQna.check=!1,this.qnaList.sixth.fQna.check=!1,"left"==s?this.qnaList.sixth.tQna.check=!0:"right"==s&&(this.qnaList.sixth.fQna.check=!0)):"seventh"==t?(this.qnaList.seventh.tQna.check=!1,this.qnaList.seventh.fQna.check=!1,"left"==s?this.qnaList.seventh.tQna.check=!0:"right"==s&&(this.qnaList.seventh.fQna.check=!0)):"eighth"==t?(this.qnaList.eighth.iQna.check=!1,this.qnaList.eighth.eQna.check=!1,"left"==s?this.qnaList.eighth.iQna.check=!0:"right"==s&&(this.qnaList.eighth.eQna.check=!0)):"nineth"==t?(this.qnaList.nineth.sQna.check=!1,this.qnaList.nineth.nQna.check=!1,"left"==s?this.qnaList.nineth.sQna.check=!0:"right"==s&&(this.qnaList.nineth.nQna.check=!0)):"tenth"==t?(this.qnaList.tenth.tQna.check=!1,this.qnaList.tenth.fQna.check=!1,"left"==s?this.qnaList.tenth.tQna.check=!0:"right"==s&&(this.qnaList.tenth.fQna.check=!0)):"eleventh"==t?(this.qnaList.eleventh.sQna.check=!1,this.qnaList.eleventh.nQna.check=!1,"left"==s?this.qnaList.eleventh.sQna.check=!0:"right"==s&&(this.qnaList.eleventh.nQna.check=!0)):"twelveth"==t&&(this.qnaList.twelveth.jQna.check=!1,this.qnaList.twelveth.pQna.check=!1,"left"==s?this.qnaList.twelveth.jQna.check=!0:"right"==s&&(this.qnaList.twelveth.pQna.check=!0))},goPage(t){switch(this.qnaList.initial.display=!1,this.qnaList.explain.display=!1,this.qnaList.first.display=!1,this.qnaList.second.display=!1,this.qnaList.third.display=!1,this.qnaList.fourth.display=!1,this.qnaList.fiveth.display=!1,this.qnaList.sixth.display=!1,this.qnaList.seventh.display=!1,this.qnaList.eighth.display=!1,this.qnaList.nineth.display=!1,this.qnaList.tenth.display=!1,this.qnaList.eleventh.display=!1,this.qnaList.twelveth.display=!1,this.qnaList.threeteen.display=!1,this.result.display=!1,t){case"explain":this.qnaList.explain.display=!0;break;case"first":this.qnaList.first.display=!0;break;case"second":this.qnaList.second.display=!0;break;case"third":this.qnaList.third.display=!0;break;case"fourth":this.qnaList.fourth.display=!0;break;case"fiveth":this.qnaList.fiveth.display=!0;break;case"sixth":this.qnaList.sixth.display=!0;break;case"seventh":this.qnaList.seventh.display=!0;break;case"eighth":this.qnaList.eighth.display=!0;break;case"nineth":this.qnaList.nineth.display=!0;break;case"tenth":this.qnaList.tenth.display=!0;break;case"eleventh":this.qnaList.eleventh.display=!0;break;case"twelveth":this.qnaList.twelveth.display=!0;break;case"threeteen":this.qnaList.threeteen.display=!0;break;case"initial":this.qnaList.initial.display=!0;break;default:break}},total_check(){var t=0,s=0,n=0,a=0,i=0,e=0,c=0,r=0;this.qnaList.first.jQna.check?c++:this.qnaList.first.pQna.check&&r++,this.qnaList.second.iQna.check?t++:this.qnaList.second.eQna.check&&s++,this.qnaList.third.iQna.check?t++:this.qnaList.third.eQna.check&&s++,this.qnaList.fourth.jQna.check?c++:this.qnaList.fourth.pQna.check&&r++,this.qnaList.fiveth.sQna.check?n++:this.qnaList.fiveth.nQna.check&&r++,this.qnaList.sixth.tQna.check?i++:this.qnaList.sixth.fQna.check&&e++,this.qnaList.seventh.tQna.check?i++:this.qnaList.seventh.fQna.check&&e++,this.qnaList.eighth.iQna.check?t++:this.qnaList.eighth.eQna.check&&s++,this.qnaList.nineth.sQna.check?n++:this.qnaList.nineth.nQna.check&&a++,this.qnaList.tenth.tQna.check?i++:this.qnaList.tenth.fQna.check&&e++,this.qnaList.eleventh.sQna.check?n++:this.qnaList.eleventh.nQna.check&&a++,this.qnaList.twelveth.jQna.check?c++:this.qnaList.twelveth.pQna.check&&r++,this.res_str="",t>s?this.res_str+="I":s>t?this.res_str+="E":t==s&&alert("IE다시 시도해주세요"),n>a?this.res_str+="S":a>n?this.res_str+="N":a==n&&alert("SN다시 시도해주세요"),i>e?this.res_str+="T":e>i?this.res_str+="F":e==i&&alert("TF다시 시도해주세요"),c>r?this.res_str+="J":r>c?this.res_str+="P":r==c&&alert("JP다시 시도해주세요"),this.qnaList.twelveth.display=!1,this.result.display=!0,this.qnaList.first.jQna.check=!1,this.qnaList.first.pQna.check=!1,this.qnaList.second.iQna.check=!1,this.qnaList.second.eQna.check=!1,this.qnaList.third.iQna.check=!1,this.qnaList.third.eQna.check=!1,this.qnaList.fourth.jQna.check=!1,this.qnaList.fourth.pQna.check=!1,this.qnaList.fiveth.sQna.check=!1,this.qnaList.fiveth.nQna.check=!1,this.qnaList.sixth.tQna.check=!1,this.qnaList.sixth.fQna.check=!1,this.qnaList.seventh.tQna.check=!1,this.qnaList.seventh.fQna.check=!1,this.qnaList.eighth.iQna.check=!1,this.qnaList.eighth.eQna.check=!1,this.qnaList.nineth.sQna.check=!1,this.qnaList.nineth.nQna.check=!1,this.qnaList.tenth.tQna.check=!1,this.qnaList.tenth.fQna.check=!1,this.qnaList.eleventh.sQna.check=!1,this.qnaList.eleventh.nQna.check=!1,this.qnaList.twelveth.jQna.check=!1,this.qnaList.twelveth.pQna.check=!1}}},v=g,q=(0,c.Z)(v,u,p,!1,null,null,null),f=q.exports;a.Z.use(l.Z);const d=[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,830))}],k=new l.Z({mode:"history",base:"vote2",routes:d});var L=k;a.Z.config.productionTip=!1,new a.Z({router:L,render:t=>t(o)}).$mount("#app")},351:function(t,s,n){t.exports=n.p+"img/10qna.589494f3.png"},663:function(t,s,n){t.exports=n.p+"img/11qna.03e868f1.png"},783:function(t,s,n){t.exports=n.p+"img/12qna.498ec04a.png"},344:function(t,s,n){t.exports=n.p+"img/13qna.96c90c9a.png"},293:function(t,s,n){t.exports=n.p+"img/1qna.603a8e06.png"},507:function(t,s,n){t.exports=n.p+"img/2qna.365ed635.png"},589:function(t,s,n){t.exports=n.p+"img/3qna.3e367c5c.png"},397:function(t,s,n){t.exports=n.p+"img/4qna.9bf94537.png"},470:function(t,s,n){t.exports=n.p+"img/5qna.2b415635.png"},753:function(t,s,n){t.exports=n.p+"img/6qna.1e48aeb9.png"},597:function(t,s,n){t.exports=n.p+"img/7qna.18287735.png"},166:function(t,s,n){t.exports=n.p+"img/8qna.ca33b021.png"},461:function(t,s,n){t.exports=n.p+"img/9qna.2b7a8da8.png"},425:function(t,s,n){t.exports=n.p+"img/ENFJ.181ab0de.jpg"},462:function(t,s,n){t.exports=n.p+"img/ENFP.210c8ce6.jpg"},540:function(t,s,n){t.exports=n.p+"img/ENTJ.a05405ec.jpg"},156:function(t,s,n){t.exports=n.p+"img/ENTP.70c16aa3.jpg"},587:function(t,s,n){t.exports=n.p+"img/ESFJ.9def378c.jpg"},578:function(t,s,n){t.exports=n.p+"img/ESFP.582fe40f.jpg"},77:function(t,s,n){t.exports=n.p+"img/ESTJ.4055af38.jpg"},917:function(t,s,n){t.exports=n.p+"img/ESTP.463c0379.jpg"},434:function(t,s,n){t.exports=n.p+"img/INFJ.e11fd82c.jpg"},32:function(t,s,n){t.exports=n.p+"img/INFP.6b738ae0.jpg"},335:function(t,s,n){t.exports=n.p+"img/INTJ.e4b8a1cd.jpg"},511:function(t,s,n){t.exports=n.p+"img/INTP.abe04281.jpg"},650:function(t,s,n){t.exports=n.p+"img/ISFJ.405f8582.jpg"},307:function(t,s,n){t.exports=n.p+"img/ISFP.d671155f.jpg"},510:function(t,s,n){t.exports=n.p+"img/ISTJ.01de8f18.jpg"},476:function(t,s,n){t.exports=n.p+"img/ISTP.0580a7bd.jpg"},858:function(t,s,n){t.exports=n.p+"img/explain.55cb5718.png"},277:function(t,s,n){t.exports=n.p+"img/initialpage.e0de698c.png"},332:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACuCAYAAADDCmTrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACq1JREFUeNrsnU1sVFUUx+9QAl2gVlBbIloDESQoFUwYYkJ1gTUkpgkbd3XFgm5YwZ7Epa7sAuLHgrJQWFDTBAylMXZMiCUGGAKRhpRkECOjfJQvHRpqvGf6Hpk0HTrvzT33nnvf/5+8TEM6H7z+5p5z7//cc5WCIAiCIAiCIAiCIAiCIAiCIAiCIAiC5iqHWwDNp6+/+KBVP3Tpa13NP1f0NbFrz6kigINMwkagdeurrc6vlPR1VINXAXBQM6B16of39NXZwK+X9TWYFLrFuM2QBq0tGtG6EjytXV95fY0BOChJnpaPYEujjQAOSpKn9eirtYmXaUv6BACXzTztwygkWheAy1ae1tvghADAQU3lad1RruZcAC5s2OIJQauUzwTgws3TetMk9QAOSgJaezQh6JT6GQFcOHkaLXF0Sf+sAM5/2MiK2iIpTwNwYYK2kMEO4CBjE4JGDXYAB6UGLY3BDuCgVBOCPGeetmTpMvXm2zvV8hfWqNHj+wFcxvO0HsU4IXh9fY/avKVPLXu2Xf35xwWMcBnO01gN9pUvd6lN+T79uBEhNeN5Go1o67jeg0YyGtFoZEMOl+08jdVgj/O0DV07qz9j0pBd2NgNdhrNtm7b7RQ0ACcjT2M12ClPy3fvViv07FOKAJx90NgNdsrTtm7rV52r3xX3/wdwdvM0VoOdQiZNCDboXE2qAJwd2NgNdoKMYJOQpwE4d6CxG+yUp3Vv31sNoz4IwPFNCFgNdpoI5Lv7rS/cAjhZoLEb7BQyaYmDY+F2+tEDAOfRhIDVYCdtzvexLtzevjmZ9CklABdgnlZrsPsuANdcnhakwQ7g5OVpQRvsAE5WntbN9R5SDPYEagdwPLAFb7A/uFdWpcnTSZ/WCuDM52lBG+y0FPLLzwfVld9GEFId52msnYYkGOznzhxWF88PWVl/A3D18zR2g53ytE16UuBKpaun9ah2oBpGm1QFwKWHLXiDnTbJnBs/rB+Lpl6yDOCSg7YuGtWCNdhpJDurwydDnnYDwCWbELAa7ARY9/Z9zhZuKTe7VBzizNMmAFxjEwJvDfZGRaMZjWoG8rR6Ku7acwpe6gITAu8Ndgd52ryw6StVfM5lBDZ2g52WN2iZw2WeRjNPmoEyimalBT2yjad9gVzgoAVvsMd52lk9qjGDdkZf42nO1woeuKwY7JSnkUvAvHBbjEa1KRMvlgsMtEwY7JSnFUY/45wQkGhCcFKDZvRNcgHBZrXTkKs8rTD6OfeEgEayEQ3aBMeL5wIALRMGOy1xXDo/xJ6nadDGON8k5zFoMNgNL3M0OyEIEjibnYYCMdgXytOGTU0IggMuCwb7rZuTarxw0EaeNpzGKcgEcDDYjeZpTS3cBg2crU5DgRvssQrKwMJtkMDZMthddxqyYLCTJqIJwZSEv21OGGgw2M2JKD7pIk/zAjgY7EYnBJSnFZVA5QSAFnynId8M9iCBg8FuVEYN9qCAy5LBPl44UF1XYxTlZ2PS8jQxwMFgN5qnsRns3gNny2B3XQgZisHuLXBZMdgJMoItFIPdO+BgsBvP04Z9mBA4AS4LnYZCN9i9AC4LBrulTkPODXbRwMFgN6rxCLaKClS5JkDLxFE+ljasiDLYxQEXzT77OMOna4M9nhQwnwEv0mDnVNpWDx9zwebaYK8No7SAy5injUg12EUBF00OjNMg7SgfGt0Y8jUvDHZpI5zRyYGETkP1cjfD8sZglwZchynQJLeINzhJoJHsaJbytKdpUcobaCRHus8782tKBnNIms33RqlI5tWS9Am9O9bQcGRkCzodJnb54nG1uGWJeqljvagbQ18Ig5W5BN0Gfe9e01dp+IerFQDXOHAPlUGPdGZmWl2/9qu6pv+4zy1/VT0j5AAz+hz0ZaDPZ1A0s8/re5jTV1mD9xjALSD6duqbRd/YVSY/yL//3KlaRjTq0WjnOq9rWbxEtT3/irp65SeOl6eJ1zv05dX3s5wl4JpxGqjsiMVlkFAJUrs8QutxjJYWS1us4ICLoGMtrJRQ6xbncxaKK4Ood2MFrgY81p4frqtEYlkoSwq6UsQYcBF07LvlJfirJAs75oP1WDkKMFkbOUs5vNbSXtPgqkjY9jRwV/667koZy8IuLe83zlgBLoKOvWbOdT+3WBbq5oIoObe1TZC1KlhCoWYsCy1Svd5UE9RGaCklTpaa1ojo9yYauJowy9rqwfXu+9owy9zuQXSnJBHAzVlGYdskLcmtsLBR2hu3QkK7Ltbtha53fNUuo1jYYih+15ekhoRwK8wto4h1K6S1XGXvGSfJrWDuG4eWqwnAY3crpBQFWHArRBUFSG+bD7fCXJgV4VaIPxgkS26FhW5Mzt0Kb44+4m4+LWW7oqU+Js6KAnw83A1uhTlZdyu8PL7SRsND1z3oYlkqCrDWL9jrA3ptuBVSigJCcSuCOIIcboVRsboVIZ15z35Ol5TOThbO6mLr7hQMcHPCLJtbIaknigW3wvjBI8EBN2cZBVsYzciYWxEscDXgoSjAXJhtuiggeOBq8ju4FWZELzyYdrTLBHBzwixbUYA0t4KxKCA1dJkCrgY8VrdCUlEAo1tRSFMM0JJF4KhjUe+ONWfVbAfQVcb/0PfL1VZf9Ehrd9SJyYVoxF299n21clVXNbebfvTQ5Mu36/uYmORMjnBzRjtsYUyvgaQFAJkHrgY8VrdCSlGAYbdiMOkaXQtQexJmb+kwS63LZzhGOykNFym809ohhdnbf09WP1cTKur7dhfApYfusb5KEXgdHKPd3Tu/qyuXT6n/ZqarkwtXopayb7z1kVqqwf+rfDlta9nEwCGkLryMArfCYEgFcI2Blwm34puBHnbgFgGnhRWtN32lZj1F46IliyOH+qqzSObjMesqZTuKxHYGcrjG87uKvibonIUov1tmHrwL1a7plFeteNHuovHdO9cTz1z1F/HHpO+DES75aFfS15f6R/rrGC9SjLcMnji2j7MJjjMBuPTgUdXEgJqtkGUJs99/21+1plyFWQAnD7qKvmikoxGPZa8nzRyPHPqEu94NwHkGXllfg5TqcYTZWXfgQHXEYzhWE8B5DF4xCrMFrpnkiWN7qzneg3tlAAc9CbNjEXgsYZZmk0Pf9VeXUQAcFIM3FYXZo2p2s7HxMEsFlrR+51OYBXD84E3oKw6zLMsoFGZHj+/3IswCOHvgxW4FS0sFqup17VYAOJlhlkIshVqW4YjCLOV3zE1wAJxn4LG7FRRiJboVAM4teLFbwVYUIM2tAHDuoaNllOEozLK6FcxNcACch2GW1a2gBWPXbgWAkwde7FawFAXUuhUuwiyAkxtmRxSzW0Fh1rZbgRJzD2Sj4eLa9T2JW0PoL8WnGOHCHPFosZgWjdncCubDSQCcp2GW1a0AcNB84NW6FVMADrIFXomzKADAQfXAi2vvigAOspnfxW5FGcBBNsMsFQWwuBUADqoHHqtbAeCgemGWdQsjgIPmA6/MtLeiAuCgp4FX61aYUBnAQY2EWdYtjAAOmg+8eAtjM27FjTRPQrUIlLbh4kCaI8wBHBRDR6VPdMp2I42Hh9MebQngoLngPe14qKbPUQVwUD3wqOiT4OuI8jyalRa5ToqGIAiCIAiCIAiCIAiCIAiCIAiCIAjKsv4XYACRNIPy5IjhggAAAABJRU5ErkJggg=="},132:function(t){t.exports="data:image/png;base64,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"},668:function(t,s,n){t.exports=n.p+"img/start_btn.769af5fc.png"}},s={};function n(a){var i=s[a];if(void 0!==i)return i.exports;var e=s[a]={exports:{}};return t[a](e,e.exports,n),e.exports}n.m=t,function(){var t=[];n.O=function(s,a,i,e){if(!a){var c=1/0;for(l=0;l<t.length;l++){a=t[l][0],i=t[l][1],e=t[l][2];for(var r=!0,h=0;h<a.length;h++)(!1&e||c>=e)&&Object.keys(n.O).every((function(t){return n.O[t](a[h])}))?a.splice(h--,1):(r=!1,e<c&&(c=e));if(r){t.splice(l--,1);var o=i();void 0!==o&&(s=o)}}return s}e=e||0;for(var l=t.length;l>0&&t[l-1][2]>e;l--)t[l]=t[l-1];t[l]=[a,i,e]}}(),function(){n.d=function(t,s){for(var a in s)n.o(s,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(s,a){return n.f[a](t,s),s}),[]))}}(),function(){n.u=function(t){return"js/about.92105b55.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={},s="test_2:";n.l=function(a,i,e,c){if(t[a])t[a].push(i);else{var r,h;if(void 0!==e)for(var o=document.getElementsByTagName("script"),l=0;l<o.length;l++){var u=o[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==s+e){r=u;break}}r||(h=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",s+e),r.src=a),t[a]=[i];var p=function(s,n){r.onerror=r.onload=null,clearTimeout(g);var i=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(n)})),s)return s(n)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),h&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(s,a){var i=n.o(t,s)?t[s]:void 0;if(0!==i)if(i)a.push(i[2]);else{var e=new Promise((function(n,a){i=t[s]=[n,a]}));a.push(i[2]=e);var c=n.p+n.u(s),r=new Error,h=function(a){if(n.o(t,s)&&(i=t[s],0!==i&&(t[s]=void 0),i)){var e=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;r.message="Loading chunk "+s+" failed.\n("+e+": "+c+")",r.name="ChunkLoadError",r.type=e,r.request=c,i[1](r)}};n.l(c,h,"chunk-"+s,s)}},n.O.j=function(s){return 0===t[s]};var s=function(s,a){var i,e,c=a[0],r=a[1],h=a[2],o=0;if(c.some((function(s){return 0!==t[s]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(h)var l=h(n)}for(s&&s(a);o<c.length;o++)e=c[o],n.o(t,e)&&t[e]&&t[e][0](),t[e]=0;return n.O(l)},a=self["webpackChunktest_2"]=self["webpackChunktest_2"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(990)}));a=n.O(a)})();
//# sourceMappingURL=app.3d00cee9.js.map