// Data Flow: Step 2

import { apiDetailCategoryBySlug } from "data-source/category";
import { apiListCategory } from "data-source/category";
import { apiDetailCategoryById } from "data-source/category";

// transform data to fit with UI;
export const categoryService = {
    listCategory: function (params) {
        return apiListCategory(params).then(response => {
            response.data = response.data.map(category => {
                return {
                    id: category.id,
                    name: category.name,
                    description: category.description,
                    slug: category.slug
                }
            })
            return response;
        });
    },

    detailCategoryById: function (id) {
        return apiDetailCategoryById(id).then(response => {
            response.data = {
                id: category.id,
                name: category.name,
                description: category.description,
                slug: category.slug
            }
            return response;
        });
    },

    detailCategoryBySlug: function (slug) {
        return apiDetailCategoryBySlug(slug).then(response => {
            response.data = {
                id: category.id,
                name: category.name,
                description: category.description,
                slug: category.slug
            }
            return response;
        });
    },
}
