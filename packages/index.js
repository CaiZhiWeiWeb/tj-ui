import Button from "./button";
import "./fonts/style.css";

const components = [Button];
const install = function(Vue) {
  components.forEach((element) => {
    Vue.component(element.name, element);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
    install
}
