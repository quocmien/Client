<template>
    <div class="bg-light deal-container pt-7 pb-7 mb-4">
        <div class="container">
            <div class="heading text-center mb-4">
                <h2 class="title">Deals & Outlet</h2>

                <p class="title-desc">Today’s deal and more</p>
            </div>

            <div class="row">
                <div class="col-lg-6 deal-col">
                    <div class="deal" v-lazy:background-image="'./images/home/deal/bg-1.jpg'">
                        <div class="deal-top">
                            <h2>Deal of the Day.</h2>
                            <h4>Limited quantities.</h4>
                        </div>

                        <div class="deal-content">
                            <h3 class="product-title">
                                <nuxt-link
                                    to="/product/default/brown-faux-fur-longline-coat"
                                >Brown faux fur longline coat</nuxt-link>
                            </h3>

                            <div class="product-price">
                                <span class="new-price">$310.00</span>
                                <span class="old-price">Was $190.00</span>
                            </div>

                            <nuxt-link to="/shop/sidebar/4cols" class="btn btn-link">
                                <span>Shop Now</span>
                                <i class="icon-long-arrow-right"></i>
                            </nuxt-link>
                        </div>

                        <div class="deal-bottom">
                            <count-down wrap="deal-countdown" until="+10h" format="HMS"></count-down>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="products">
                        <div class="row">
                            <div class="col-6" v-for="(product, index) in products" :key="index">
                                <product-twelve :product="product"></product-twelve>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="more-container text-center mt-3 mb-0">
                <nuxt-link
                    to="/shop/sidebar/3cols"
                    class="btn btn-outline-dark-2 btn-round btn-more"
                >
                    <span>Shop more Outlet deals</span>
                    <i class="icon-long-arrow-right"></i>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import CountDown from '~/components/elements/CountDown';
import ProductTwelve from '~/components/elements/products/ProductTwelve';
export default {
    components: {
        CountDown,
        ProductTwelve
    },
    props: {
        products: Array
    }
};
</script>