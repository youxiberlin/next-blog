import { useState, useEffect } from "react";
import Layout from "../../components/layouts/main";
import TimelineBasic from "../../components/sandbox/timeline-basic"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/htmlbars';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);

const Timeline = () => {
  useEffect(() => {
    hljs.initHighlighting();
}, []);
  return (
    <Layout>
      <TimelineBasic />
    </Layout>
  )
};

export default Timeline;