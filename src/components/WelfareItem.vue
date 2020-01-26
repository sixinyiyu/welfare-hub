<template>
    <div>
        <v-row>
            <v-col cols="12" v-for="(item, i) in items"  :key="i">
                <router-link :to="'/welfare/' + i" style="text-decoration:none;">
                    <v-card color="#ffffff" :flat=true>
                        <div class="d-flex flex-column  flex-no-wrap">
                            <div class="d-flex justify-center">
                                <v-card-title
                                class="headline text-no-wrap"
                                v-text="item.title"
                                ></v-card-title>
                            </div>
                            <div class="d-flex justify-end">
                                <div class="pr-5 pb-2">72 张图片 | 210 次浏览 |  更新于 2018-07-06 12:24:05</div>
                            </div>
                        </div>
                        <v-divider></v-divider>
                    </v-card>
                    
                </router-link>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'WelfareItem',
    props: {
        msg: String
    },
    data: () => ({
        items: [
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: '年轻女性月收入数万，是种怎样的体验？ - 知乎',
                artist: 'Foster the People',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: '你坚持健身的理由是什么，现在身材怎么样，敢不敢发一张照片来看看？',
                artist: 'Ellie Goulding',
            },
            {
                color: '#8BC34A',
                src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
                title: '当你有一双好看的腿之后，会不会觉得差一张好看的脸？',
                artist: 'Ellie Goulding',
            },
            {
                color: '#00BCD4',
                src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
                title: '拥有一张萝莉脸，身材却是御姐，或者萝莉身御姐脸，是一种什么样的体验？',
                artist: 'Ellie Goulding',
            },
            {
                color: '#2196F3',
                src: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                title: '眼睛漂亮是一种什么样的感觉 ，一般大家觉得什么样的眼睛才是漂亮的呢？',
                artist: 'Ellie Goulding',
            },
        ],
    }),
}
</script>