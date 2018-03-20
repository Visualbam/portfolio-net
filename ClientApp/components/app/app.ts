import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html')
    }
})
export default class AppComponent extends Vue {
    public activeRoute: string = '';
    public mini: boolean = false;
    public drawer: boolean = true;
    public routes: any = [
        {
            route: 'blog',
            action: null,
            title: 'Blog'
        },
        {
            route: 'counter',
            action: null,
            title: 'Counter'
        },
    ];

    toggleDrawer() {
        // this.drawer = !this.drawer;
        this.mini = !this.mini;
    }

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
