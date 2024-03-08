<template>
    <footer class="footer">
        <div class="footer-middle">
            <div :class="isFullwidth ? 'container-fluid' : 'container'">
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <div class="widget widget-about">
                            <img
                                v-lazy="'./images/logo-footer.png'"
                                class="footer-logo bg-transparent"
                                alt="Footer Logo"
                                width="105"
                                height="27"
                            />
                            <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>

                            <div class="widget-call">
                                <i class="icon-phone"></i>
                                Got Question? Call us 24/7
                                <a
                                    href="tel:#"
                                >+0123 456 789</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget-title">Useful Links</h4>

                            <ul class="widget-list">
                                <li>
                                    <nuxt-link to="/pages/about">About Molla</nuxt-link>
                                </li>
                                <li>
                                    <a href="#">How to shop on Molla</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <nuxt-link to="/pages/contact">Contact us</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/pages/login">Log in</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget-title">Customer Service</h4>

                            <ul class="widget-list">
                                <li>
                                    <a href="#">Payment Methods</a>
                                </li>
                                <li>
                                    <a href="#">Money-back guarantee!</a>
                                </li>
                                <li>
                                    <a href="#">Returns</a>
                                </li>
                                <li>
                                    <a href="#">Shipping</a>
                                </li>
                                <li>
                                    <a href="#">Terms and conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="widget">
                            <h4 class="widget-title">My Account</h4>

                            <ul class="widget-list">
                                <li>
                                    <a href="#">Sign In</a>
                                </li>
                                <li>
                                    <nuxt-link to="/shop/cart">View Cart</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/shop/wishlist">My Wishlist</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/shop/dashboard">Track My Order</nuxt-link>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div :class="isFullwidth ? 'container-fluid' : 'container'" class="pb-2 pt-2">
                <p
                    class="footer-copyright"
                >Copyright © {{ new Date().getFullYear() }} Molla Store. All Rights Reserved.</p>

                <figure class="footer-payments">
                    <img
                        v-lazy="'./images/payments.png'"
                        alt="Payment methods"
                        class="bg-transparent"
                        width="272"
                        height="20"
                    />
                </figure>
            </div>
        </div>
        <div class="mb-10" v-if="bottomSticky"></div>
	</footer>
</template>

<script>
export default {
    data: function () {
        return {
            bottomSticky: false
        }
    },
    computed: {
        isFullwidth: function() {
            return this.$route.path.includes('fullwidth');
        }
    },
    watch: {
        $route: function () {
            this.handleBottomSticky();
        }
    },
    mounted: function() {
        this.handleBottomSticky();
        window.addEventListener('resize', this.handleBottomSticky, {passive: true});
    },
    destroyed: function () {
        window.removeEventListener('resize', this.handleBottomSticky);
    },
    methods: {
        handleBottomSticky: function () {
            this.bottomSticky = this.$route.path.includes('/product/default') && (window.innerWidth > 991);
        }
    }
};
</script>