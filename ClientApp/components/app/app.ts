import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: (require('../navmenu/navmenu.vue.html') as any).default
    }
})
export default class AppComponent extends Vue {
    public activeRoute: string = '';

    @Watch('$route')
    onRoutwChanged(val: any, oldVal: any) {
        this.activeRoute = val.fullPath;
    }

    mounted() {
        if (this.$route.fullPath === '/') {
            this.$router.push('blog');
        }

        this.activeRoute = this.$route.fullPath;
    }
}
