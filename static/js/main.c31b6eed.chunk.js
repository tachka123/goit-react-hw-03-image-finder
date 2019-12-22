(this["webpackJsonpgoit-react-hw-01"]=this["webpackJsonpgoit-react-hw-01"]||[]).push([[0],{10:function(e,a,t){e.exports={SearchBar:"SearchBar_SearchBar__GrqZw",SearchForm:"SearchBar_SearchForm__sZDzf",SearchFormButton:"SearchBar_SearchFormButton__ftRIO",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__34MOZ",SearchFormInput:"SearchBar_SearchFormInput__1Z6e_"}},13:function(e,a,t){e.exports={ImageGalleryItem:"ImageGallaryItem_ImageGalleryItem__3UvIq",ImageGalleryItemImage:"ImageGallaryItem_ImageGalleryItemImage__1uJQ8"}},14:function(e,a,t){e.exports={Button:"Button_Button__1CJc6"}},15:function(e,a,t){e.exports={Overlay:"Modal_Overlay__3JcmK",Modal:"Modal_Modal__3OW7x"}},16:function(e,a,t){e.exports={LoaderPos:"Loader_LoaderPos__1QYH2",ldsRing:"Loader_ldsRing__3FfVu"}},28:function(e,a,t){e.exports={ImageGallery:"ImageGallaryItem_ImageGallery__1IlIB"}},30:function(e,a,t){e.exports=t(58)},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),c=t.n(o),l=t(4),s=t.n(l),i=t(17),u=t(5),m=t(6),d=t(9),p=t(7),h=t(8),g=t(27),f=t.n(g),v=(t(52),t(10)),b=t.n(v),I=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.handleOnChange=function(e){var a=e.target.value;t.setState({value:a})},t.onSubmit=function(e){e.preventDefault();var a=t.state.value;(0,t.props.onSubmit)(a)},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:b.a.SearchBar},r.a.createElement("form",{className:b.a.SearchForm,onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit",className:b.a.SearchFormButton}),r.a.createElement("input",{onChange:this.handleOnChange,className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e})))}}]),a}(n.Component),_=t(28),y=t.n(_),S=t(29),O=t(13),E=t.n(O),L=function(e){var a=e.item,t=a.webformatURL,n=a.largeImageURL;return r.a.createElement("li",{large:n,className:E.a.ImageGalleryItem},r.a.createElement(S.a,{src:t,alt:n,className:E.a.ImageGalleryItemImage,animation:"bounceIn",animationDuration:"2s"}))},M=t(14),w=t.n(M),x=function(e){var a=e.onLoadMore;return r.a.createElement("button",{onClick:a,type:"button",className:w.a.Button},r.a.createElement("span",{className:w.a.ButtonLabel},"Load more"))},B=t(15),j=t.n(B),k=document.querySelector("#modal-root"),C=function(e){var a=e.large,t=e.onCloseModal;return c.a.createPortal(r.a.createElement("div",{onClick:t,role:"presentation",className:j.a.Overlay},r.a.createElement("div",{className:j.a.Modal},r.a.createElement("img",{src:a,alt:""}))),k)},F=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={IsModalOpen:!1,large:""},t.onOpenModal=function(e){if(e.target!==e.currentTarget){var a=e.target.parentNode.attributes.large.nodeValue;t.setState({large:a}),t.setState({IsModalOpen:!0})}},t.onCloseModal=function(e){var a=t.state.IsModalOpen;"Escape"===e.code&&a&&t.setState({IsModalOpen:!a}),e.target===e.currentTarget&&t.setState({IsModalOpen:!a})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){var e=this.state,a=e.IsModalOpen,t=e.large,n=this.props,o=n.itemList,c=n.onLoadMore,l=o.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{onClick:this.onOpenModal,className:y.a.ImageGallery,role:"presentation"},l>0&&o.map((function(e){return r.a.createElement(L,{item:e,key:e.id})}))),l%12===0&&l>0&&r.a.createElement(x,{onLoadMore:c}),a&&r.a.createElement(C,{onCloseModal:this.onCloseModal,large:t}))}}]),a}(n.Component);F.defaultProps={itemList:[]};var N=F,G=t(16),P=t.n(G),R=function(e){return e.loading&&r.a.createElement("div",{className:P.a.LoaderPos},r.a.createElement("div",{className:P.a.ldsRing},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},T=(t(57),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={Loading:!1,page:1,imageList:[],itemToFind:""},t.fetchItems=function(){var e,a,n,r,o;return s.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s.a.awrap(t.setState({Loading:!0}));case 2:return e=t.state,a=e.page,n=e.itemToFind,c.next=5,s.a.awrap(f.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(a,"&key=14125150-f318113a737f32f93c3727cb2&image_type=photo&orientation=horizontal&per_page=12")));case 5:if(r=c.sent,o=r.data.hits,!(a>1)){c.next=11;break}t.setState((function(e){return{imageList:[].concat(Object(i.a)(e.imageList),Object(i.a)(o))}})),c.next=13;break;case 11:return c.next=13,s.a.awrap(t.setState({imageList:o}));case 13:t.setState({Loading:!1});case 14:case"end":return c.stop()}}))},t.onLoadMore=function(){var e;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=document.documentElement.scrollHeight,t.setState((function(e){return{page:e.page+=1}})),a.next=4,s.a.awrap(t.fetchItems());case 4:window.scrollTo({top:e,behavior:"smooth"});case 5:case"end":return a.stop()}}))},t.onSubmit=function(e){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return alert("Search input is empty! Please fill it"),a.abrupt("return");case 3:return a.next=5,s.a.awrap(t.setState({itemToFind:e,page:1,imageList:[]}));case 5:t.fetchItems();case 6:case"end":return a.stop()}}))},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state,a=e.Loading,t=e.imageList;return r.a.createElement("div",{className:"App"},r.a.createElement(I,{onSubmit:this.onSubmit}),r.a.createElement(N,{onLoadMore:this.onLoadMore,itemList:t}),r.a.createElement(R,{loading:a}))}}]),a}(n.Component));c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c31b6eed.chunk.js.map