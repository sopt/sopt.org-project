import { axiosInstance } from '@/api';
import { ProjectResponse, ProjectInput } from '@/api/project/types';
import { AxiosResponse } from 'axios';

const createProject = (data: ProjectInput) => {
  return axiosInstance.request({
    method: 'POST',
    url: 'api/v1/projects',
    data,
  });
};

const deleteProject = (id: string) => {
  return axiosInstance.request({
    method: 'DELETE',
    url: `api/v1/projects/${id}`,
  });
};

const getProject = (id: string) => {
  return axiosInstance.request<AxiosResponse<ProjectResponse>>({
    method: 'GET',
    url: `api/v1/projects/${id}`,
  });
};

const getProjects = () => {
  return axiosInstance.request<AxiosResponse<ProjectResponse[]>>({
    method: 'GET',
    url: 'api/v1/projects',
  });
};

export const project = {
  create: createProject,
  delete: deleteProject,
  get: getProject,
  getList: getProjects,
};
