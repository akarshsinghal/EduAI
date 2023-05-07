import React, {useState} from 'react'
import ParticlesLayer from '../components/ParticleLayer';
import ArticleDisplay from '../components/ArticleDisplay';
import Header from '../components/Header';
import LearnComponent from "../components/LearnComponent";
import Quiz from "../components/Quiz"

export default function Dashboard() {
  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [articleDone, setArticleDone] = useState(false);
  let contentToRender = topic ? <Quiz topic={topic} /> : <LearnComponent setTopic={(obj) => setTopic(obj)} />;
  contentToRender = questions ? <ArticleDisplay questions={questions}/> : contentToRender
  if (articleDone) {
    setTopic(null)
    setQuestions(null)
    setArticleDone(false)
  }



  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ParticlesLayer />
      {contentToRender}
    </div>
  );
}
