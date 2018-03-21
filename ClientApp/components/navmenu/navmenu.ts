import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    name: 'menu-component'
})
export default class NavComponent extends Vue {
    @Prop({ default: '/' }) activeRoute: string;
    public drawer: boolean = true;
    public mini: boolean = false;
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
        }
    ];

    toggleDrawer() {
        // this.drawer = !this.drawer;
        this.mini = !this.mini;
    }
}
