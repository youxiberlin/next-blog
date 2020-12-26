import { useState, useEffect } from "react";
import Layout from "../../components/layouts/main";
import Code from "../../components/layouts/code-html";
import TimelineBasic from "../../components/sandbox/timeline-basic"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/htmlbars';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);
import codes from "../../components/codes/timeline-basic";

const Timeline = () => {
  useEffect(() => {
      hljs.initHighlighting();
  }, []);
  const [tlBasicCode, setTlBasicCode] = useState(null)
  return (
    <Layout>
      <TimelineBasic/>
      <div onClick={() => setTlBasicCode(!tlBasicCode)}>show code</div>
      {!tlBasicCode ? null : <Code codes={codes}/>}
    </Layout>
  )
};

export default Timeline;