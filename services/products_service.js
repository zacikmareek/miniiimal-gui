import Api from '@/services/Api';

export default {
  index(){
    return Api().get('/products');
  },
  getProductByID(id){
    return Api().get('/products/product/' + encodeURIComponent(id));
  },
  post(new_product){
    return Api().post('/products/new', new_product);
  },
  put(updated_product, id){
    return Api().put('/products/update/' + encodeURIComponent(id), updated_product);
  },
  delete(id){
    return Api().delete('/products/delete/' + encodeURIComponent(id));
  },
};