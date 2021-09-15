export interface Project {
  id?: number;
  uuid: string;
  date_created?: Date;
  last_accessed?: Date;
  categories?: Array<Category>;
}

export interface Category {
  id?: number;
  index: number;
  uuid: string;
  title: string;
  tasks?: Array<Task>;
  color?: string;
  project_id: number;
  date_created?: Date;
}

export interface Task {
  id?: number;
  index: number;
  uuid: string;
  category_uuid: string;
  date_created?: Date;
  title: string;
  color?: string;
  tags?: string | string[];
  notes: string;
  due?: Date;
}
