import { Outlet, useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const handleLogin = (username) => {
        navigate(`list/${username}`);
      };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <div style={{ 
        textAlign: 'left',
        maxWidth: 800,
        margin: '25px 0 0 0'
      }}>
        <h2 style={{ 
          fontSize: 18,
          color: '#00517d',
          fontWeight: 700,
          textAlign: 'center'
        }}>
          File Concurrency Control Demo
        </h2>
        
        <h3 style={{ fontSize: 14, fontWeight: 700 }}>
          Demo Description:
        </h3>
        
        <p style={{ textIndent: '2em' }}>
          This example demonstrates how to implement file concurrency control to prevent file 
          content overwriting when multiple users simultaneously edit the same document.
          (Note: Concurrency control is only necessary when multiple users need to edit 
          the same file at the same workflow node. Single-user editing scenarios 
          don't require this feature.)
        </p>

        <h3 style={{ fontSize: 14, fontWeight: 700 }}>
          Operation Steps:
        </h3>
        
        <p>
          1. Select a user (e.g. <span style={{ color: 'black', fontWeight: 'bold' }}>"John"</span>), 
          log in and click the "Edit" button to open a file (e.g. <span 
          style={{ color: 'black', fontWeight: 'bold' }}>"Product Overview"</span>);
        </p>
        
        <p>
          2. Open a new browser window to access this page, simulate another user (e.g. <span 
          style={{ color: 'black', fontWeight: 'bold' }}>"Jane"</span>) logging in, then 
          attempt to edit the same <span style={{ color: 'black', fontWeight: 'bold' }}>
          "Product Overview"</span> file to observe the concurrency control effect 
          (will receive a document locked notification).
        </p>
        <hr style={{ margin: '20px 0' }} />
        <Outlet context={{ handleLogin }} />
      </div>
    </div>
  );
};

export default Index;