import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class BlogComponent extends Vue {
    blogHeader: string = 'Welcome!';
    posts: any[] = [];

    mounted() {
        axios.get('https://visualbam.azurewebsites.net/api/posts')
            .then(response => {
                this.posts = response.data;
            });
    }
}
