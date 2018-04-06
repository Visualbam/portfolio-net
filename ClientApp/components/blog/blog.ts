import Vue from 'vue';
import { Component, Prop, Provide } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class BlogComponent extends Vue {
    blogHeader: string = 'Welcome!';
    posts: any[] = [];
    public text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    mounted() {
        axios.get('https://visualbam.azurewebsites.net/api/posts')
            .then(response => {
                this.posts = response.data;
            });
    }
}
