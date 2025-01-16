export default {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'customer', type: 'string', title: 'Customer Name' },
    { name: 'productDetails', type: 'array', title: 'Product Details' },
    { name: 'paymentStatus', type: 'string', title: 'Payment Status' }
  ]
};
