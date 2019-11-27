import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import 'normalize.css/normalize.css'
import { Button,Form,Icon,Dropdown,Input,Checkbox,Select,Alert,Row,Col,Menu,message,
  Layout,DatePicker,Table,List,Card,Modal,Upload,Popconfirm,Badge,Tag,InputNumber,Tabs} from 'ant-design-vue';
Vue.prototype.$axios = axios;
Vue.prototype.$equipment = 'http://busiapisit.topmediacloud.net/vehad/v1';
Vue.prototype.$user = 'http://userapisit.topmediacloud.net/vehUser/v1';
Vue.component(Icon.name,Icon);
Vue.component(Row.name,Row);
Vue.component(Input.name,Input);
Vue.component(Button.name,Button);
Vue.component(Checkbox.name,Checkbox);
Vue.component(Col.name,Col);
Vue.component(Tag.name,Tag);
Vue.component(Tabs.name,Tabs);
Vue.component(Tabs.TabPane.name,Tabs.TabPane);
Vue.component(InputNumber.name,InputNumber);
Vue.component(Badge.name,Badge);
Vue.component(Select.name,Select);
Vue.component(Select.Option.name,Select.Option);
Vue.component(Dropdown.name,Dropdown);
Vue.component(Menu.name,Menu);
Vue.component(Upload.name,Upload);
Vue.component(Alert.name,Alert);
Vue.component(Table.name,Table);
Vue.component(Form.name,Form);
Vue.component(List.name,List);
Vue.component(Card.name,Card);
Vue.component(Modal.name,Modal);
Vue.component(Popconfirm.name,Popconfirm);
Vue.component(List.Item.name,List.Item);
Vue.component(DatePicker.name,DatePicker);
Vue.component(DatePicker.RangePicker.name,DatePicker.RangePicker);
Vue.component(Menu.Item.name,Menu.Item);
Vue.component(Menu.SubMenu.name,Menu.SubMenu);
Vue.component(Layout.name,Layout);
Vue.component(Layout.Sider.name,Layout.Sider);
Vue.component(Layout.Header.name,Layout.Header);
Vue.component(Layout.Content.name,Layout.Content);
Vue.component(Form.Item.name,Form.Item);
Vue.prototype.$message = message;
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});
axios.defaults.headers.get['token'] = localStorage.token;
