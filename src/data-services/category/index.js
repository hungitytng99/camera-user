// Data Flow: Step 2

import { apiDetailCategoryBySlug } from "data-source/category";
import { apiListCategory } from "data-source/category";
import { apiDetailCategoryById } from "data-source/category";

// transform data to fit with UI;
export const categoryService = {
    listCategory: function (params) {
        return apiListCategory(params).then(response => {
            response.data = response.data.map(category => {
                return filterFieldCategory(category);
            })
            return response;
        });
    },

    detailCategoryById: function (id) {
        return apiDetailCategoryById(id).then(response => {
            response.data = filterFieldCategory(response.data);
            return response;
        });
    },

    detailCategoryBySlug: function (slug) {
        return apiDetailCategoryBySlug(slug).then(response => {
            response.data = filterFieldCategory(response);
            return response;
        });
    },
}

export const filterFieldCategory = (category) => {
    return {
        id: category.id,
        name: category.name,
        description: category.description,
        slug: "/danh-muc/"+category.slug
    }
}
