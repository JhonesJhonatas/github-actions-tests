import SyntaxHighlighter from 'react-syntax-highlighter';

export const contentOptions = {
  "deploy-on-vercel": (
    <div>
      <SyntaxHighlighter language='yml'>
        {'<span>deploy-on-vercel</span>'}
      </SyntaxHighlighter>
    </div>
  ),
  "merge-branch": (
    <div>
      <SyntaxHighlighter language='yml'>
        {'<span>merge-branch</span>'}
      </SyntaxHighlighter>
    </div>
  ),
  "rollback": (
    <div>
      <SyntaxHighlighter language='yml'>
        {'<span>rollback</span>'}
      </SyntaxHighlighter>
    </div>
  ),
};
