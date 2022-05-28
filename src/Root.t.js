require('./style/lmo-style.t.scss');
require('./style/lmo-animation.t.scss');
require('./style/lmo-default.t.scss');
require('../public/style/animate.min.css');

import '@/lib/PostMessage/index.t';
import {get} from '@/lib/Storage';
// import Socket from '@/lib/Socket/index.t';

export default {
    name: 'lmo-root',
    created() {
        // new Socket(`ws://${location.host}/connectSocket`, (msg) => {
        //     console.log('收到消息', msg);
        // });

        const current_template = get('current_template');

        if (current_template !== null)
            this.$store.commit('SET_CURRENT_TEMPLATE', JSON.parse(current_template));
    },
    render(h) {
        return (
            h('div', {
                attrs: {
                    id: 'lmo-app'
                }
            }, [
                h('transition', {
                    props: {
                        mode: 'out-in',
                        name: 'lmo_t'
                    }
                }, [
                    h('router-view')
                ])
            ])
        );
    }
};