import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class Category extends Vue {
    categoryHeader: string = 'Categories!';
    category: any;

    data() {
        return {
            category: this.$route.params.category
        }
    }

    @Watch('$route')
    onRouteChange(to: any, from: any) {
        this.category = to.params.category;
    }
}
