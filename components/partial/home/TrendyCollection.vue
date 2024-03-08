<template>
    <div class="container trending">
        <div class="heading heading-flex mb-3">
            <div class="heading-left">
                <h2 class="title">Trending Products</h2>
            </div>

            <div class="heading-right">
                <tabs
                    class="nav nav-pills nav-border-anim justify-content-center"
                    :data="tabsData"
                    id="trendy"
                ></tabs>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-5col d-none d-xl-block">
                <div class="banner">
                    <nuxt-link to="/shop/sidebar/list">
                        <img
                            v-lazy="'./images/home/banners/banner-4.jpg'"
                            alt="banner"
                            width="218"
                            height="390"
                        />
                    </nuxt-link>
                </div>
            </div>

            <div class="col-xl-4-5col">
                <div class="tab-content tab-content-carousel just-action-icons-sm">
                    <div class="tab-pane p-0 fade show active" id="trendy-all">
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
                    <div class="tab-pane p-0 fade" id="trendy-accessories">
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
                    <div class="tab-pane p-0 fade" id="trendy-camera">
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
                    <div class="tab-pane p-0 fade" id="trendy-computers">
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
                    <div class="tab-pane p-0 fade" id="trendy-entertainment">
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
                    nextEl: '.trending .swiper-1 .swiper-next',
                    prevEl: '.trending .swiper-1 .swiper-prev'
                }
            },
            carouselSetting2: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.trending .swiper-2 .swiper-next',
                    prevEl: '.trending .swiper-2 .swiper-prev'
                }
            },
            carouselSetting3: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.trending .swiper-3 .swiper-next',
                    prevEl: '.trending .swiper-3 .swiper-prev'
                }
            },
            carouselSetting4: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.trending .swiper-4 .swiper-next',
                    prevEl: '.trending .swiper-4 .swiper-prev'
                }
            },
            carouselSetting5: {
                ...carouselSetting1,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.trending .swiper-5 .swiper-next',
                    prevEl: '.trending .swiper-5 .swiper-prev'
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