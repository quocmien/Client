<template>
    <div class="main home-page">
        <div class="intro-section pt-3 pb-3 mb-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
                            <div class="swiper-carousel swiper-1 intro-slider">
                                <div v-swiper:swiper1="carouselSetting1">
                                    <div class="swiper-wrapper">
                                        <div v-for="(item, index) in banners" :key="index" class="swiper-slide">
                                            <div class="intro-slide">
                                                <figure class="slide-image mb-0">
                                                    <picture>
                                                        <source
                                                            media="(max-width: 480px)"
                                                            :srcset="item.banner_image"
                                                        />
                                                        <img
                                                            v-lazy="item.banner_image"
                                                            alt="banner"
                                                        />
                                                    </picture>
                                                </figure>

                                                <div class="intro-content">
                                                    <h3
                                                        class="intro-subtitle text-primary"
                                                    >{{ item.banner_title }}</h3>

                                                    <h1 class="intro-title">
                                                        {{ item.banner_title }}
                                                    </h1>

                                                    <div v-html="item.banner_content" class="intro-price">

                                                    </div>

                                                    <nuxt-link
                                                        :to="item.banner_url || '#'"
                                                        class="btn btn-primary btn-round"
                                                    >
                                                        <span>Click Here</span>
                                                        <i class="icon-long-arrow-right"></i>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="swiper-dots swiper-dots-inner"></div>
                                <div class="swiper-nav nav-inside">
                                    <div class="swiper-prev">
                                        <i class="icon-angle-left"></i>
                                    </div>
                                    <div class="swiper-next">
                                        <i class="icon-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="intro-banners">
                            <div class="banner mb-lg-2">
                                <a href="#">
                                    <img
                                        src="~/static/images/home/banners/banner-1.jpg"
                                        width="370"
                                        height="120"
                                        alt="Banner"
                                    />
                                </a>

                                <div class="banner-content">
                                    <h4 class="banner-subtitle d-lg-none d-xl-block">
                                        <a href="#">Top Product</a>
                                    </h4>

                                    <h3 class="banner-title">
                                        <a href="#">
                                            Edifier
                                            <br />Stereo Bluetooth
                                        </a>
                                    </h3>

                                    <a href="#" class="banner-link">
                                        Shop Now
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="banner mb-lg-2">
                                <a href="#">
                                    <img
                                        src="~/static/images/home/banners/banner-2.jpg"
                                        width="370"
                                        height="120"
                                        alt="Banner"
                                    />
                                </a>

                                <div class="banner-content">
                                    <h4 class="banner-subtitle d-lg-none d-xl-block">
                                        <a href="#">Clearance</a>
                                    </h4>

                                    <h3 class="banner-title">
                                        <a href="#">
                                            GoPro - Fusion 360
                                            <span>Save $70</span>
                                        </a>
                                    </h3>

                                    <a href="#" class="banner-link">
                                        Shop Now
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="banner mb-0">
                                <a href="#">
                                    <img
                                        src="~/static/images/home/banners/banner-3.jpg"
                                        width="370"
                                        height="120"
                                        alt="Banner"
                                    />
                                </a>

                                <div class="banner-content">
                                    <h4 class="banner-subtitle d-lg-none d-xl-block">
                                        <a href="#">Featured</a>
                                    </h4>

                                    <h3 class="banner-title">
                                        <a href="#">
                                            Apple Watch 4
                                            <span>Our Hottest Deals</span>
                                        </a>
                                    </h3>

                                    <a href="#" class="banner-link">
                                        Shop Now
                                        <i class="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <special-collection :products="products" v-if="loaded"></special-collection>

        <div class="mb-7"></div>

        <div class="container">
            <div
                class="cta cta-border cta-border-image mb-5 mb-lg-7"
                v-lazy:background-image="'./images/home/bg-1.jpg'"
            >
                <div class="cta-border-wrapper bg-white">
                    <div class="row justify-content-center">
                        <div class="col-md-11 col-xl-11">
                            <div class="cta-content">
                                <div class="cta-heading">
                                    <h3 class="cta-title text-right">
                                        <span class="text-primary">New Deals</span>
                                        <br />Start Daily at 12pm e.t.
                                    </h3>
                                </div>

                                <div class="cta-text">
                                    <p>
                                        Get
                                        <span
                                            class="text-dark font-weight-normal"
                                        >FREE SHIPPING* & 5% rewards</span> on
                                        <br />every order with Molla Theme rewards program
                                    </p>
                                </div>

                                <a href="javascript:;" class="btn btn-primary btn-round">
                                    <span>Add to Cart for $50.00/yr</span>
                                    <i class="icon-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <deal-collection v-if="loaded" :products="dealProducts"></deal-collection>

        <div class="container">
            <div class="swiper-carousel brands-slider swiper-2 mb-3">
                <div v-swiper:swiper2="carouselSetting2">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(brand, index) in homeData.brands"
                            :key="index"
                        >
                            <a href="#" class="brand">
                                <img
                                    :src="brand.image"
                                    class="bg-white"
                                    alt="Brand"
                                    :width="brand.width"
                                    :height="brand.height"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="swiper-nav">
                    <div class="swiper-prev">
                        <i class="icon-angle-left"></i>
                    </div>
                    <div class="swiper-next">
                        <i class="icon-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <hr class="mt-3 mb-6" />
        </div>
        <trendy-collection :products="topProducts" v-if="loaded"></trendy-collection>

    </div>
</template>
<script>
import { mapGetters } from 'vuex';

import CountDown from '~/components/elements/CountDown';
import SpecialCollection from '~/components/partial/home/SpecialCollection';
import DealCollection from '~/components/partial/home/DealCollection';
import TrendyCollection from '~/components/partial/home/TrendyCollection';
import TopCollection from '~/components/partial/home/TopCollection';
import NewsletterModal from '~/components/elements/modals/NewsletterModal';

import Repository, { baseUrl } from '~/repositories/repository.js';
import { attrFilter } from '~/utilities/common';
import {
    carouselSettingSingle,
    carouselSettingDefault
} from '~/utilities/carousel';
import { homeData } from '~/utilities/data';
import BannerService from '~/services/BannerService.js'
import ProductService from '~/services/ProductService.js'
import { baseUrl as baseUrlService} from '~/services'

export default {
    components: {
        CountDown,
        TopCollection,
        DealCollection,
        TrendyCollection,
        SpecialCollection
    },
    data: function() {
        return {
            loaded: false,
            products: [],
            dealProducts: [],
            topProducts: [],
            carouselSetting1: {
                ...carouselSettingSingle,
                pagination: {
                    el: '.swiper-1 .swiper-dots',
                    clickable: true
                },
                navigation: {
                    nextEl: '.intro-slider-container .swiper-next',
                    prevEl: '.intro-slider-container .swiper-prev'
                }
            },
            carouselSetting2: {
                ...carouselSettingDefault,
                slidesPerView: 6,
                spaceetween: 0,
                navigation: {
                    nextEl: '.brands-slider .swiper-next',
                    prevEl: '.brands-slider .swiper-prev'
                },
                breakpoints: {
                    992: {
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 4
                    },
                    576: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    }
                }
            },
            homeData: homeData,
            banners: []
        };
    },
    computed: {
        ...mapGetters('demo', ['newsletterShow'])
    },
    created: function() {
        this.getProducts();
        this.getBanners()
        this.getProductsDemo()
    },
    mounted: function() {
        if (this.newsletterShow) {
            setTimeout(() => {
                if (this.$route.path == '/' && this.newsletterShow) {
                    this.$modal.show(
                        NewsletterModal,
                        {},
                        { width: '970', height: 'auto', adaptive: true }
                    );
                }
            }, 8000);
        }
    },
    methods: {
        getProductsDemo: async function() {
            this.loaded = false;
            await Repository.get(`${baseUrl}/demo3`)
                .then(response => {
                    console.log(response.data.products)
                    // this.products = response.data.products;
                    
                    // this.loaded = true;
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        },

        getProducts () {
            ProductService.get()
            .then((res) => {
                console.log('====> res', res.data)
                const products = [
                ...res.data.map(item => ({
                    "id": 122,
                    "name": "Apple – 11” iPad Pro with Wi-Fi 256 GB",
                    "slug": "apple-11\"-ipad-pro-with-wi-fi-256-gb",
                    "short_desc": "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ",
                    "price": 899.99,
                    "sale_price": null,
                    "review": 2,
                    "ratings": 5,
                    "until": "2022-01-01",
                    "stock": 100,
                    "top": true,
                    "featured": true,
                    "new": true,
                    "author": null,
                    "sold": null,
                    "category": [
                        {
                            "name": "Computers",
                            "slug": "computers",
                            "pivot": {
                                "product_id": "122",
                                "product-category_id": "20"
                            }
                        },
                        {
                            "name": "Tablets",
                            "slug": "tablets",
                            "pivot": {
                                "product_id": "122",
                                "product-category_id": "21"
                            }
                        },
                        {
                            "name": "Cell Phone",
                            "slug": "cell-phone",
                            "pivot": {
                                "product_id": "122",
                                "product-category_id": "27"
                            }
                        },
                        {
                            "name": "TV",
                            "slug": "tv",
                            "pivot": {
                                "product_id": "122",
                                "product-category_id": "24"
                            }
                        }
                    ],
                    "brands": [
                        {
                            "name": "F&F",
                            "slug": "fandf",
                            "pivot": {
                                "product_id": "122",
                                "brand_id": "20"
                            }
                        },
                        {
                            "name": "UGG",
                            "slug": "ugg",
                            "pivot": {
                                "product_id": "122",
                                "brand_id": "1"
                            }
                        }
                    ],
                    "pictures": [
                        {
                            "width": "600",
                            "height": "600",
                            "url": "/uploads/product_1_2_4e1d56ee3e.jpg",
                            "pivot": {
                                "related_id": "122",
                                "upload_file_id": "754"
                            }
                        },
                        {
                            "width": "600",
                            "height": "600",
                            "url": "/uploads/product_1_1_4426ffc7d8.jpg",
                            "pivot": {
                                "related_id": "122",
                                "upload_file_id": "755"
                            }
                        }
                    ],
                    "sm_pictures": [
                        {
                            "width": "300",
                            "height": "300",
                            "url": "/uploads/product_1_2_300x300_23e5807726.jpg",
                            "pivot": {
                                "related_id": "122",
                                "upload_file_id": "756"
                            }
                        },
                        {
                            "width": "300",
                            "height": "300",
                            "url": "/uploads/product_1_1_300x300_efb79f650f.jpg",
                            "pivot": {
                                "related_id": "122",
                                "upload_file_id": "757"
                            }
                        }
                    ],
                    "variants": [],
                    id: item.id,
                    name: item.name,
                    price: parseFloat(item.price),
                    sm_pictures: [{
                        url: `/uploads/${item.image}`,
                    }],
                    slug: item.slug
                    
                }))
                ]
                this.products = [
                    ...products,
                    {
    "id": 122,
    "name": "Apple – 11” iPad Pro with Wi-Fi 256 GB",
    "slug": "apple-11\"-ipad-pro-with-wi-fi-256-gb",
    "short_desc": "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ",
    "price": 899.99,
    "sale_price": null,
    "review": 2,
    "ratings": 5,
    "until": "2022-01-01",
    "stock": 100,
    "top": true,
    "featured": true,
    "new": true,
    "author": null,
    "sold": null,
    "category": [
        {
            "name": "Computers",
            "slug": "computers",
            "pivot": {
                "product_id": "122",
                "product-category_id": "20"
            }
        },
        {
            "name": "Tablets",
            "slug": "tablets",
            "pivot": {
                "product_id": "122",
                "product-category_id": "21"
            }
        },
        {
            "name": "Cell Phone",
            "slug": "cell-phone",
            "pivot": {
                "product_id": "122",
                "product-category_id": "27"
            }
        },
        {
            "name": "TV",
            "slug": "tv",
            "pivot": {
                "product_id": "122",
                "product-category_id": "24"
            }
        }
    ],
    "brands": [
        {
            "name": "F&F",
            "slug": "fandf",
            "pivot": {
                "product_id": "122",
                "brand_id": "20"
            }
        },
        {
            "name": "UGG",
            "slug": "ugg",
            "pivot": {
                "product_id": "122",
                "brand_id": "1"
            }
        }
    ],
    "pictures": [
        {
            "width": "600",
            "height": "600",
            "url": "/uploads/product_1_2_4e1d56ee3e.jpg",
            "pivot": {
                "related_id": "122",
                "upload_file_id": "754"
            }
        },
        {
            "width": "600",
            "height": "600",
            "url": "/uploads/product_1_1_4426ffc7d8.jpg",
            "pivot": {
                "related_id": "122",
                "upload_file_id": "755"
            }
        }
    ],
    "sm_pictures": [
        {
            "width": "300",
            "height": "300",
            "url": "/uploads/product_1_2_300x300_23e5807726.jpg",
            "pivot": {
                "related_id": "122",
                "upload_file_id": "756"
            }
        },
        {
            "width": "300",
            "height": "300",
            "url": "/uploads/product_1_1_300x300_efb79f650f.jpg",
            "pivot": {
                "related_id": "122",
                "upload_file_id": "757"
            }
        }
    ],
    "variants": []
}
                ]

                    this.dealProducts = attrFilter(
                        this.products,
                        'until'
                    ).slice(0, 2);
                    this.topProducts = attrFilter(this.products, 'top');
                    this.loaded = true
            })
        },

        getBanners () {
            BannerService.get() 
            .then((res) => {
                this.banners = [
                    ...res.data.map(item => ({
                        ...item,
                        banner_image: `${baseUrlService}/uploads/${item.banner_image}`
                    }))
                ]
            })
        }
    }
};
</script>