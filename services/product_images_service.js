import Api from '@/services/Api';

export default {
  index(product_id){
    return Api().get('/products/images/all/' + encodeURIComponent(product_id));
  },
  getOneProductImage(product_id, id){
    return Api().get('/products/images/one/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  post(product_id, new_image){
    return Api().post('/products/images/new/' + encodeURIComponent(product_id), new_image);
  },
  deleteProductImage(product_id, id){
    return Api().delete('/products/images/delete/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  deleteProductImages(product_id){
    return Api().delete('/products/images/delete/' + encodeURIComponent(product_id));
  },
};