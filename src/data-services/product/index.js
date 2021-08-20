
// Data Flow: Step 2

import { apiListProductByCategorySlug } from "data-source/product";
import { apiDetailProductBySlug } from "data-source/product";
import { apiDetailProductById } from "data-source/product";
import { apiListProductByCategoryId } from "data-source/product";
import { apiListProduct } from "data-source/product";

// transform data to fit with UI;
export const productService = {
    detailProductById: function (id, params) {
        return apiDetailProductById(id, params).then(response => {
            response.data = response.data.map(product => {
                return filterFieldProduct(product);
            })
            return response;
        });
    },

    detailProductBySlug: function (slug, params) {
        return apiDetailProductBySlug(slug, params).then(response => {
            response.data = response.data.map(product => {
                return filterFieldProduct(product);
            })
            return response;
        });
    },

    listProduct: function (params) {
        return apiListProduct(params).then(response => {
            response.data = response.data.map(product => {
                return filterFieldProduct(product);
            })
            return response;
        });
    },

    listProductByCategoryId: function (id, params) {
        return apiListProductByCategoryId(id, params).then(response => {
            response.data = response.data.map(product => {
                return filterFieldProduct(product);
            })
            return response;
        });
    },
    listProductByCategorySlug: function (slug, params) {
        return apiListProductByCategorySlug(slug, params).then(response => {
            response.data = response.data.map(product => {
                return filterFieldProduct(product);
            })
            return response;
        });
    },
}

export const filterFieldProduct = (product) => {
    return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        new_price: product.new_price,
        category_id: product.category_id,
        slug: product.slug,
        image: product.list_product_images,
    }
}
