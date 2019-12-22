(this["webpackJsonpgoit-react-hw-01"]=this["webpackJsonpgoit-react-hw-01"]||[]).push([[0],{10:function(e,t,a){e.exports={SearchBar:"SearchBar_SearchBar__GrqZw",SearchForm:"SearchBar_SearchForm__sZDzf",SearchFormButton:"SearchBar_SearchFormButton__ftRIO",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__34MOZ",SearchFormInput:"SearchBar_SearchFormInput__1Z6e_"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGallaryItem_ImageGalleryItem__3UvIq",ImageGalleryItemImage:"ImageGallaryItem_ImageGalleryItemImage__1uJQ8"}},13:function(e,t,a){e.exports={Button:"Button_Button__1CJc6"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3JcmK",Modal:"Modal_Modal__3OW7x"}},15:function(e,t,a){e.exports={LoaderPos:"Loader_LoaderPos__1QYH2",ldsRing:"Loader_ldsRing__3FfVu"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallaryItem_ImageGallery__1IlIB"}},29:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(4),s=a.n(l),i=a(16),u=a(5),m=a(6),d=a(9),p=a(7),h=a(8),g=a(26),f=a.n(g),v=a(10),b=a.n(v),I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleOnChange=function(e){var t=e.target.value;a.setState({value:t})},a.onSubmit=function(e){e.preventDefault();var t=a.state.value;(0,a.props.onSubmit)(t)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:b.a.SearchBar},r.a.createElement("form",{className:b.a.SearchForm,onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit",className:b.a.SearchFormButton}),r.a.createElement("input",{onChange:this.handleOnChange,className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e})))}}]),t}(n.Component),y=a(27),_=a.n(y),S=a(28),O=a(12),E=a.n(O),L=function(e){var t=e.item,a=t.webformatURL,n=t.largeImageURL;return r.a.createElement("li",{large:n,className:E.a.ImageGalleryItem},r.a.createElement(S.a,{src:a,alt:n,className:E.a.ImageGalleryItemImage,animation:"bounceIn",animationDuration:"2s"}))},M=a(13),w=a.n(M),x=function(e){var t=e.onLoadMore;return r.a.createElement("button",{onClick:t,type:"button",className:w.a.Button},r.a.createElement("span",{className:w.a.ButtonLabel},"Search"))},B=a(14),k=a.n(B),j=document.querySelector("#modal-root"),C=function(e){var t=e.large,a=e.onCloseModal;return c.a.createPortal(r.a.createElement("div",{onClick:a,role:"presentation",className:k.a.Overlay},r.a.createElement("div",{className:k.a.Modal},r.a.createElement("img",{src:t,alt:""}))),j)},F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={IsModalOpen:!1,large:""},a.onOpenModal=function(e){if(e.target!==e.currentTarget){var t=e.target.parentNode.attributes.large.nodeValue;a.setState({large:t}),a.setState({IsModalOpen:!0})}},a.onCloseModal=function(e){var t=a.state.IsModalOpen;"Escape"===e.code&&t&&a.setState({IsModalOpen:!t}),e.target===e.currentTarget&&a.setState({IsModalOpen:!t})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){var e=this.state,t=e.IsModalOpen,a=e.large,n=this.props,o=n.itemList,c=n.onLoadMore,l=o.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{onClick:this.onOpenModal,className:_.a.ImageGallery,role:"presentation"},l>0&&o.map((function(e){return r.a.createElement(L,{item:e,key:e.id})}))),l%12===0&&l>0&&r.a.createElement(x,{onLoadMore:c}),t&&r.a.createElement(C,{onCloseModal:this.onCloseModal,large:a}))}}]),t}(n.Component);F.defaultProps={itemList:[]};var N=F,G=a(15),P=a.n(G),R=function(e){return e.loading&&r.a.createElement("div",{className:P.a.LoaderPos},r.a.createElement("div",{className:P.a.ldsRing},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},T=(a(54),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={Loading:!1,page:1,imageList:[],itemToFind:""},a.fetchItems=function(){var e,t,n,r,o;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s.a.awrap(a.setState({Loading:!0}));case 2:return e=a.state,t=e.page,n=e.itemToFind,c.next=5,s.a.awrap(f.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(t,"&key=14125150-f318113a737f32f93c3727cb2&image_type=photo&orientation=horizontal&per_page=12")));case 5:if(r=c.sent,o=r.data.hits,!(t>1)){c.next=11;break}a.setState((function(e){return{imageList:[].concat(Object(i.a)(e.imageList),Object(i.a)(o))}})),c.next=13;break;case 11:return c.next=13,s.a.awrap(a.setState({imageList:o}));case 13:a.setState({Loading:!1});case 14:case"end":return c.stop()}}))},a.onLoadMore=function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState((function(e){return{page:e.page+=1}})),e.next=3,s.a.awrap(a.fetchItems());case 3:window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 4:case"end":return e.stop()}}))},a.onSubmit=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return alert("Search input is empty! Please fill it"),t.abrupt("return");case 3:return t.next=5,s.a.awrap(a.setState({itemToFind:e,page:1,imageList:[]}));case 5:a.fetchItems();case 6:case"end":return t.stop()}}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.Loading,a=e.imageList;return r.a.createElement("div",{className:"App"},r.a.createElement(I,{onSubmit:this.onSubmit}),r.a.createElement(N,{onLoadMore:this.onLoadMore,itemList:a}),r.a.createElement(R,{loading:t}))}}]),t}(n.Component));c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cee50520.chunk.js.map