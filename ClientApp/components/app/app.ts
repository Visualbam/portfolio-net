import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html')
    }
})
export default class AppComponent extends Vue {
    public drawer: boolean = false;

    toggleDrawer() {
        this.drawer = !this.drawer;
    }
}
