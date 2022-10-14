import Api from '@/services/Api';

export default {
  index(product_id){
    return Api().get('/products/sizes/all/' + encodeURIComponent(product_id));
  },
  getOneProductSize(product_id, id){
    return Api().get('/products/sizes/one/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  post(product_id, new_size){
    return Api().post('/products/sizes/new/' + encodeURIComponent(product_id), new_size);
  },
  deleteProductSize(product_id, id){
    return Api().delete('/products/sizes/delete/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  deleteProductSizes(product_id){
    return Api().delete('/products/sizes/delete/' + encodeURIComponent(product_id));
  },
};