// Get user's receipts
export const getMyReceipts = (params = '') => callAPI(`/receipts/my/${params}`);

// Get single receipt
export const getSingleReceipt = id => callAPI(`/receipts/${id}`);

// // Create a new receipt export
// export const createExport = data => callAPI(`/receipts/`, 'post', data);
