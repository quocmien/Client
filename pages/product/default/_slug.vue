<template>
    <main class="main">
        <breadcrumb :prev-product="prevProduct" :next-product="nextProduct" current="Default"></breadcrumb>

        <div class="page-content">
            <div class="container skeleton-body">
                <div class="product-details-top">
                    <div class="row skel-pro-single" :class="{loaded: loaded}">
                        <div class="col-md-6">
                            <div class="skel-product-gallery"></div>
   
                            <gallery-vertical :product="product"></gallery-vertical>
                        </div>

                        <div class="col-md-6">
                            <div class="entry-summary row">
                                <div class="col-md-12">
                                    <div class="entry-summary1 mt-2 mt-md-0"></div>
                                </div>
                                <div class="col-md-12">
                                    <div class="entry-summary2"></div>
                                </div>
                            </div>
                            <detail-one :product="product" v-if="product"></detail-one>
                        </div>
                    </div>
                </div>

                <info-one></info-one>

                <related-products-one :products="relatedProducts"></related-products-one>
            </div>
        </div>
    </main>
</template>
<script>
import { mapGetters } from 'vuex';

import GalleryVertical from '~/components/partial/product/gallery/GalleryVertical';
import DetailOne from '~/components/partial/product/details/DetailOne';
import InfoOne from '~/components/partial/product/info-tabs/InfoOne';
import Breadcrumb from '~/components/partial/product/BreadCrumb';
import RelatedProductsOne from '~/components/partial/product/related/RelatedProductsOne';
import Repository, { baseUrl } from '~/repositories/repository.js';
import ProductService from '~/services/ProductService.js'
import { baseUrl as baseUrlService} from '~/services'

export default {
    components: {
        DetailOne,
        InfoOne,
        Breadcrumb,
        GalleryVertical,
        RelatedProductsOne
    },
    data: function() {
        return {
            product: null,
            prevProduct: null,
            nextProduct: null,
            relatedProducts: [],
            loaded: false
        };
    },
    computed: {
        ...mapGetters('demo', ['currentDemo'])
    },
    created: function() {
        this.getProduct();
    },
    methods: {
            getProduct: async function() {
                this.loaded = false;
                await Repository.get(
                    `${baseUrl}/products/${this.$route.params.slug}`,
                    {
                        params: { demo: this.currentDemo }
                    }
                )
                    .then(response => {
                        this.product = { ...response.data.product };
                        this.relatedProducts = [...response.data.relatedProducts];
                        this.prevProduct = response.data.prevProduct;
                        this.nextProduct = response.data.nextProduct;
                        this.loaded = true;
                    })
                    .catch(error => ({ error: JSON.stringify(error) }));
            }


    },



    
};
</script>