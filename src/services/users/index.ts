import { APIResponse, IUser } from '../../types';
import { getRequest } from '../utils';

export const fetchUsers = (endpoint: string) => getRequest<APIResponse<IUser>>(endpoint);
