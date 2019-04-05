import React from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  state = {
    dog: ''
  };

  componentDidMount() {
    axios.get('https://dog.ceo/api/breed/bulldog/french/images/random')
    .then(response => response.data.message)
    .then(response => this.setState({ dog: response }));
  }

  render() {
    const { dog } = this.state;

    return (
      <Layout>
        <SEO title="Home" />
        { !!dog && <img src={ dog } alt="Good boy" /> }
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage
