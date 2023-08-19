import { useFetchProjects } from './fetchProjects';
import styles from './projects.module.css';

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section className={styles.projects}>
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className={styles.projects}>
      <div className={'title'}>
        <h2>projects</h2>
        <div className={'title-underline'}></div>
      </div>
      <div className={styles.projectsCenter}>
        {projects.map((project) => {
          const { title, img, url, id } = project;
          return (
            <a
              key={id}
              href={url}
              target={'_blank'}
              rel="noreferrer"
              className={styles.project}
            >
              <img src={img} alt={title} className={'img'} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
