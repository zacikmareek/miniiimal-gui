import Api from '@/services/Api';

export default {
  index(product_id){
    return Api().get('/products/applications/all/' + encodeURIComponent(product_id));
  },
  getOneProductApplication(product_id, id){
    return Api().get('/products/applications/one/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  post(product_id, new_application){
    return Api().post('/products/applications/new/' + encodeURIComponent(product_id), new_application);
  },
  deleteProductApplication(product_id, id){
    return Api().delete('/products/applications/delete/' + encodeURIComponent(product_id) + '/id/' + encodeURIComponent(id));
  },
  deleteProductApplications(product_id){
    return Api().delete('/products/applications/delete/' + encodeURIComponent(product_id));
  },
};