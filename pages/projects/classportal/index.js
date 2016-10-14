import React from 'react';
import Layout from '../../../components/Layout';
import s from '../projects.css';
import { title, html } from './index.md';
// import pic from './classportal.jpg';

class ProjectsPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout>
        <div className={s.projectpage} dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }

}

export default ProjectsPage;
