import Api from '@/services/Api';

export default {
  index(product_id){
    return Api().get('/products/colors/all/' + encodeURIComponent(product_id));
  },
  getOneProductColor(product_id, id){
    return Api().get('/products/colors/one/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  post(product_id, new_color){
    return Api().post('/products/colors/new/' + encodeURIComponent(product_id), new_color);
  },
  deleteProductColor(product_id, id){
    return Api().delete('/products/colors/delete/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  deleteProductColors(product_id){
    return Api().delete('/products/colors/delete/' + encodeURIComponent(product_id));
  },
};