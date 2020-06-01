import { callAPI } from './base';

// Get user's cards
export const getMyCards = (params = '') => callAPI(`/cards/my/${params}`);

// Get single card
export const getSingleCard = id => callAPI(`/cards/${id}`);

