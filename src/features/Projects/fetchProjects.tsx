import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

interface Project {
  title: string;
  url: string;
  id: string;
  img: string | undefined;
}

export const useFetchProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects: Project[] = response.items.map((item) => {
        const title = typeof item.fields.title === 'string' ? item.fields.title : '';
        const url = typeof item.fields.url === 'string' ? item.fields.url : '';
        const id = item.sys.id;
        const img = (item.fields.image as any)?.fields?.file?.url ?? '';
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData().then();
  }, []);

  return { loading, projects };
};
