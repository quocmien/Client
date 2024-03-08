<template>
    <div class="container top">
        <div class="heading heading-flex mb-3">
            <div class="heading-left">
                <h2 class="title">Top Selling Products</h2>
            </div>

            <div class="heading-right">
                <tabs
                    class="nav nav-pills nav-border-anim justify-content-center"
                    :data="tabsData"
                    id="top"
                ></tabs>
            </div>
        </div>
        <div class="tab-content tab-content-carousel just-action-icons-sm">
            <div class="tab-pane p-0 fade show active" id="top-all">
                <div class="swiper-carousel carousel-with-shadow swiper-1">
                    <div class="mb-0" v-swiper:swiper1="carouselSetting1">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in products"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav nav-side">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots mt-2"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="top-accessories">
                <div class="swiper-carousel carousel-with-shadow swiper-2">
                    <div class="mb-0" v-swiper:swiper2="carouselSetting2">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in accessories"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav nav-side">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots mt-2"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="top-camera">
                <div class="swiper-carousel carousel-with-shadow swiper-3">
                    <div class="mb-0" v-swiper:swiper3="carouselSetting3">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in camera"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav nav-side">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots mt-2"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="top-computers">
                <div class="swiper-carousel carousel-with-shadow swiper-4">
                    <div class="mb-0" v-swiper:swiper4="carouselSetting4">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in computers"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav nav-side">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots mt-2"></div>
                </div>
            </div>
            <div class="tab-pane p-0 fade" id="top-entertainment">
                <div class="swiper-carousel carousel-with-shadow swiper-5">
                    <div class="mb-0" v-swiper:swiper5="carouselSetting5">
                        <div class="swiper-wrapper">
                            <div
                                class="swiper-slide"
                                v-for="(product, index) in entertainment"
                                :key="index"
                            >
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-nav nav-side">
                        <div class="swiper-prev">
                            <i class="icon-angle-left"></i>
                        </div>
                        <div class="swiper-next">
                            <i class="icon-angle-right"></i>
                        </div>
                    </div>
                    <div class="swiper-dots mt-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Tabs from '~/components/elements/Tabs';
import ProductTwelve from '~/components/elements/products/ProductTwelve';
import { catFilter } from '~/utilities/common';
import { carouselSetting1 } from '~/utilities/carousel';

export default {
    components: {
        Tabs,
        ProductTwelve
    },
    props: {
        products: Array
    },
    data: function() {
        return {
            tabsData: [
                {
                    id: 'all',
                    title: 'All',
                    active: true
                },
                {
                    id: 'accessories',
                    title: 'Accessories'
                },
                {
                    id: 'camera',
                    title: 'Cameras & Camcorders'
                },
                {
                    id: 'computers',
                    title: 'Computers & Tablets'
                },
                {
                    id: 'entertainment',
                    title: 'Entertainment'
                }
            ],
            carouselSetting1: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.top .swiper-1 .swiper-next',
                    prevEl: '.top .swiper-1 .swiper-prev'
                }
            },
            carouselSetting2: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.top .swiper-2 .swiper-next',
                    prevEl: '.top .swiper-2 .swiper-prev'
                }
            },
            carouselSetting3: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.top .swiper-3 .swiper-next',
                    prevEl: '.top .swiper-3 .swiper-prev'
                }
            },
            carouselSetting4: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.top .swiper-4 .swiper-next',
                    prevEl: '.top .swiper-4 .swiper-prev'
                }
            },
            carouselSetting5: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.top .swiper-5 .swiper-next',
                    prevEl: '.top .swiper-5 .swiper-prev'
                }
            }
        };
    },
    computed: {
        computers: function() {
            return catFilter(this.products, ['computers', 'tablets']);
        },
        accessories: function() {
            return catFilter(this.products, ['accessories']);
        },
        camera: function() {
            return catFilter(this.products, ['cameras', 'camcorders']);
        },
        entertainment: function() {
            return catFilter(this.products, ['entertainment']);
        }
    }
};
</script>