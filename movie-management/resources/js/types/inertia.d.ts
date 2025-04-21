import { User } from '@/types';

export interface InertiaSharedProps {
  auth: {
    user: User | null;
  };
}