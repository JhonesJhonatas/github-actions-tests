import React, { useEffect, useState } from 'react'

import yaml from 'js-yaml';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter'

import { fetchYml } from '../../../modules/core/utils/fetchYml';

interface ContentProps {
  fileName: 'deploy-vercel' | 'merge-branch' | 'rollback';
}

export const Content: React.FC<ContentProps> = ({fileName}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchYml(`/.github/workflows/${fileName}.yml`);
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [fileName]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const yamlString = yaml.dump(data);

  return (
    <SyntaxHighlighter language='yaml' style={docco} >
      {yamlString}
    </SyntaxHighlighter>
  )
}
