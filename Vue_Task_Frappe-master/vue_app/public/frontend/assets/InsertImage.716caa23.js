import{_ as f,j as I,D as _,J as D,e as g,z as h,A as v,B as y,f as n,w as l,F as w,g as m,o as c,n as i,t as C,K as b,q as u}from"./vendor.3db8c104.js";const B={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addImageDialog:{url:"",file:null,show:!1}}},components:{Button:I,Dialog:_},methods:{openDialog(){this.addImageDialog.show=!0},onImageSelect(t){let e=t.target.files[0];!e||(this.addImageDialog.file=e,D(e).then(r=>{this.addImageDialog.url=r}))},addImage(t){this.editor.chain().focus().setImage({src:t}).run(),this.reset()},reset(){this.addImageDialog=this.$options.data().addImageDialog}}},k={class:"relative cursor-pointer rounded-lg bg-gray-100 py-1 focus-within:bg-gray-200 hover:bg-gray-200"},x={class:"absolute inset-0 select-none px-2 py-1 text-base"},S=["src"],V=u(" Insert Image "),A=u(" Cancel ");function N(t,e,r,j,a,o){const d=m("Button"),p=m("Dialog");return c(),g(w,null,[h(t.$slots,"default",v(y({onClick:o.openDialog}))),n(p,{options:{title:"Add Image"},modelValue:a.addImageDialog.show,"onUpdate:modelValue":e[2]||(e[2]=s=>a.addImageDialog.show=s),onAfterLeave:o.reset},{"body-content":l(()=>[i("label",k,[i("input",{type:"file",class:"w-full opacity-0",onChange:e[0]||(e[0]=(...s)=>o.onImageSelect&&o.onImageSelect(...s)),accept:"image/*"},null,32),i("span",x,C(a.addImageDialog.file?"Select another image":"Select an image"),1)]),a.addImageDialog.url?(c(),g("img",{key:0,src:a.addImageDialog.url,class:"mt-2 w-full rounded-lg"},null,8,S)):b("",!0)]),actions:l(()=>[n(d,{variant:"solid",onClick:e[1]||(e[1]=s=>o.addImage(a.addImageDialog.url))},{default:l(()=>[V]),_:1}),n(d,{onClick:o.reset},{default:l(()=>[A]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var F=f(B,[["render",N]]);export{F as default};
