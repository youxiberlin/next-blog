import { useState, useEffect } from "react";
import Layout from "../../components/layouts/main";
import Code from "../../components/layouts/code-html";
import TimelineBasic from "../../components/sandbox/timeline-basic"
import hljs from 'highlight.js/lib/core';
import html from 'highlight.js/lib/languages/htmlbars';
hljs.registerLanguage('html', html);
import codes from "../../components/codes/timeline-basic";
import 'highlight.js/styles/obsidian.css';

const Timeline = () => {
  const [tlBasicCode, setTlBasicCode] = useState(null)
  useEffect(() => {
      hljs.initHighlighting();
  }, []);
  return (
    <Layout>
      <TimelineBasic/>
      <div onClick={() => setTlBasicCode(!tlBasicCode)}>show code</div>
      {/* <Code codes={codes} className='html'/> */}
      {!tlBasicCode ? null : <Code codes={codes}/>}
    </Layout>
  )
};

export default Timeline;