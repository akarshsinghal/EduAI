import React, {useState} from 'react'
import ParticlesLayer from '../components/ParticleLayer';
import ArticleDisplay from '../components/ArticleDisplay';
import Header from '../components/Header';
import LearnComponent from "../components/LearnComponent";
import Quiz from "../components/Quiz"

export default function Dashboard(props) {
  const username = props.username
  const [topic, setTopic] = useState(null);
  const [questionsAnswers, setQuestionsAnswers] = useState(null);
  const [articleDone, setArticleDone] = useState(false);
  let contentToRender = topic ? <Quiz topic={topic} username={username} setQuestionsAnswers={(obj) => setQuestionsAnswers(obj)} /> : <LearnComponent setTopic={(obj) => setTopic(obj)} />;
  console.log(topic)
  console.log(questionsAnswers)
  contentToRender = questionsAnswers ? <ArticleDisplay setArticleDone={(obj) => setArticleDone(obj)} questionAnswers={questionsAnswers}/> : contentToRender
  if (articleDone) {
    setTopic(null)
    setQuestionsAnswers(null)
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
