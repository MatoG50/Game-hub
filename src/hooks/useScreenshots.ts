import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Screenshot } from '../entities/Screenshot';

const apiClient = new APIClient<Screenshot>();
const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ['screenshots', gameId],
    queryFn,
  });
