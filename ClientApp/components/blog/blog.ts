import Vue from 'vue';
import { Component, Prop, Provide } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class BlogComponent extends Vue {
    posts: any[] = [];
    tabs: any[] = [
        {
            name: 'Design',
            title: 'Design is important',
            subtitle: 'Whether it\'s visual or architecture',
            content: 'Understanding core design principles is key to expanding your capabilities. My degree is in design but I consider it a skillset in my developer toolbox.'
        },
        {
            name: 'Development',
            title: 'Development for successfull projects',
            subtitle: 'Whether it\'s visual or architecture',
            content: 'Understanding core design principles is key to expanding your capabilities. My degree is in design but I consider it a skillset in my developer toolbox.'
        },
        {
            name: 'UI/UX',
            title: 'User Interface & Experience',
            subtitle: 'Witty retort',
            content: 'Understanding core design principles is key to expanding your capabilities. My degree is in design but I consider it a skillset in my developer toolbox.'
        }
    ];

    mounted() {
        axios.get('https://visualbam.azurewebsites.net/api/posts')
            .then(response => {
                this.posts = response.data;
            });
    }
}
