"use client"

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownComponent = () => {

  const [content, setContent] = useState<any>()
  const params = useParams()
  const contentID = params?.contentid
  const fetchFileContent = async () => {
    try {
      const response = await fetch(`/article/${contentID}.md`);
      if (!response.ok) {
        throw new Error('Failed fetching file');
      }
      let content = await response.text();
      if (content.includes('<!DOCTYPE html><html lacng="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/_next/static/css/app/layout.css?')) return setContent('Article Not Found!.')
      setContent(content)
    } catch (error) {
      console.error('Error', error);
    }
  };

  fetchFileContent();

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};


export default MarkdownComponent
